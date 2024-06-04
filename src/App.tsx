import React from 'react';
import './App.css';
import DataGrid from './components/DataGrid';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import { fetchData } from './store/slices/mainSlice';
import { useDispatch } from './store';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <section className="main-container" style={{ display: 'flex', gap: 20, marginTop: 20, marginInline: 10 }}>
        <InfoPanel />
        <DataGrid />
      </section>
    </div>
  );
}

export default App;
