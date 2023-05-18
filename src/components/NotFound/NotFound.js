import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const params = useParams();
  const navigate = useNavigate();
  const goBack = e => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div>
      <div className="notfound-container">This is a 404 page</div>
      <button onClick={goBack} className="link-button">Go Back</button>

    </div>
  );
};
export default NotFound;
