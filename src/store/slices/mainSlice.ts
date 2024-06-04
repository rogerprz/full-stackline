import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ISaleItem, StackLineData } from './DataGrid.types';

interface StackLineState {
  data: StackLineData;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: StackLineState = {
  data: {} as StackLineData,
  status: 'idle'
};

export const fetchData = createAsyncThunk('main/fetchData', async () => {
  const response = await fetch('/stacklineData.json');
  const data = await response.json();
  const stackLineData: StackLineData = {
    ...data[0],
    sales: data[0].sales.map((sale: ISaleItem, index: number) => {
      return {
        ...sale,
        id: index
      };
    })
  };
  return stackLineData;
});

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<StackLineData>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default mainSlice.reducer;
