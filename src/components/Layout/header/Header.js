import React, { useState } from 'react';
import styles from './header.module.css';
import HeaderCartBtn from '../headerCartBtn/HeaderCartBtn';
import image from '../../../assets/dinner.jpeg';


const Header = ({open, onClose}) => {

  return (
    <>
    <header className={styles.container}>
      <h1 className={styles.title}>ReactMeals</h1>
        <HeaderCartBtn open={open}/>
    </header>
    <div onClick={onClose}>
     <img id="background-img" className={styles.img} src={image} alt='dinner image'/>
    </div>
    </>
  );
};

export default Header;
