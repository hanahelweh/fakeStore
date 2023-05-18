import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import AddItem from './components/Add Item/AddItem';
import NotFound from './components/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './reducers/FakeStoreReducer';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="itemdetails/:id" element={<ItemDetails />} />
        <Route path="additem" element={<AddItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
