import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import './Items.css';

const Items = () => {
  let navigate = useNavigate();
  const products = useSelector((state) => state.data);
  const searchTerm = useSelector(state => state.searchTerm);
  const goAboutDetails = (id) => {
    navigate(`/itemdetails/${id}`);
  }
  const listItems = products.filter((clothes) => searchTerm === "" || clothes.title.toLowerCase().includes(searchTerm.toLowerCase()))
  .map((clothes) => {
    return (
      <div key={clothes._id} className="box">
        <div className='img'><img src={clothes.image} alt={clothes.title} /></div>
        <div>
          <h3>{clothes.title}</h3>
          <p>{clothes.price} $</p>

          <button className="learn-more" onClick={() => navigate(`/itemdetails/${clothes.id}`)}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Read More</span>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="items">
      {listItems.length > 0 ? listItems : <p>Item is not found</p>}
    </div>
  );
}

export default Items;
