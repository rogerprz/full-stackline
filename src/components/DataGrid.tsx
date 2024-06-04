import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { DataGrid as MuiDataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [
  {
    field: 'weekEnding',
    headerName: 'Week Ending'.toUpperCase(),
    headerClassName: 'theme--header',
    width: 150
  },
  {
    field: 'retailSales',
    headerName: 'Retail Sales'.toUpperCase(),
    headerClassName: 'theme--header',
    width: 150
  },

  {
    field: 'wholesaleSales',
    headerName: 'Value'.toUpperCase(),
    headerClassName: 'theme--header',
    width: 150
  },
  {
    field: 'unitsSold',
    headerName: 'Units Sold'.toUpperCase(),
    headerClassName: 'theme--header',
    width: 150
  },
  {
    field: 'retailerMargin',
    headerName: 'Retailer Margin'.toUpperCase(),
    headerClassName: 'theme--header',
    width: 150
  }
];

const boxStyles = {
  height: 800,
  width: '100%',
  '& .theme--header': {
    backgroundColor: 'white',
    color: 'black'
  },
  '& .theme--row': {
    backgroundColor: 'white',
    color: 'darkgray',
    paddingLeft: 2
  },
  '& .MuiDataGrid-scrollbar': {
    color: 'lightgray',
    width: '0px'
  },
  scrollbarColor: 'lightgray',
  scrollbarWidth: 'thin',
  backgroundColor: 'white'
};

const DataGrid: React.FC = () => {
  const data = useSelector((state: RootState) => state.stackLineData.data);
  const status = useSelector((state: RootState) => state.stackLineData.status);

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <Box sx={boxStyles}>
          <MuiDataGrid
            rows={data.sales}
            columns={columns}
            getRowClassName={() => {
              return `theme--row`;
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20
                }
              }
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      )}
      {status === 'failed' && <p>Error loading data.</p>}
    </>
  );
};

export default DataGrid;
