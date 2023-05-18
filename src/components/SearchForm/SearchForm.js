import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./SearchForm.css";
import { setSearchTerm } from '../../reducers/FakeStoreReducer';

const SearchForm = () => {
  const searchTerm = useSelector(state => state.searchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    dispatch(setSearchTerm(newSearchTerm));
  };
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem bg-white'>
              <input type="text" className='form-control' onChange={handleInputChange} placeholder="Search Your Item Here.." value={searchTerm} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
