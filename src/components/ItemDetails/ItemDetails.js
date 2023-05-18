import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { connect } from "react-redux";
import './ItemDetails.css';

const ItemDetails = ({products}) => {
  const { id } = useParams();
  const item = products.find((clothes) => clothes.id === parseInt(id));
  useEffect(() => {
  }, [])  
  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <>
      <Navbar/> 
      <div className='itemDetails'>
        <img src={item.image} alt={item.title} />
        <div className='content'>
          <h2>{item.title}</h2>
          <p className='description'>{item.description}</p>
          <p className='price'>{item.price} $</p>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.data,
  };
};

export default connect(mapStateToProps)(ItemDetails);
