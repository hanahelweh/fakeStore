import React, { Component } from 'react';
import shortid from 'shortid';
import Navbar from '../../components/Navbar/Navbar';
import { connect } from 'react-redux';
import './AddItem.css';
import { addItem } from '../../reducers/FakeStoreReducer';

class AddItem extends Component {
  state = {
    title: '',
    description: '',
    category: '',
    price: '',
    image: '',
    itemAdded: false
  }

  newTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  newDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  newPrice = (e) => {
    this.setState({
      price: e.target.value
    });
  };

  newImage = (e) => {
    this.setState({
      image: URL.createObjectURL(e.target.files[0])
    });
  };

  newCategory = (e) => {
    this.setState({
      category: e.target.value
    });
  };
  AddButton = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('category', this.state.category);
    formData.append('price', this.state.price);
    formData.append('image', this.state.image);
  
    this.props.addItem(formData);
    this.setState({
      title: '',
      description: '',
      category: '',
      price: '',
      image: null,
      itemAdded: true
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='add-container'>
          {this.state.itemAdded ? (
            <p>Your item is added successfully!</p>
          ) : (
            <div className='center-the-form'>
              <form className='form' encType='multipart/form-data'>
                <input className='input' placeholder='Title' type='text' onChange={this.newTitle} />
                <input className='input' placeholder='Category' type='text' onChange={this.newCategory} />
                <input className='input' placeholder='Description' type='text' onChange={this.newDescription} />
                <input className='input' placeholder='Price' type='text' onChange={this.newPrice} />
                <input className='input' type='file' name='image' onChange={this.newImage} />
                <button className='button' placeholder='Title' onClick={this.AddButton}>
                  Add An Item
                </button>
              </form>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (newItem) => dispatch(addItem(newItem)),
  };
};

export default connect(null, mapDispatchToProps)(AddItem);
