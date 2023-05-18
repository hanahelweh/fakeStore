import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Items from '../../components/Items/Items';
const Home=()=>{
    return (
      <div>
        <header>
          <Header/>
        </header>
        <main>
          <Items/>
        </main>
      </div>
    )
}
export default Home;

