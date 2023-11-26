import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <>
        <div className={css(headerStyle.appHeader)}>
            <img src={logo} className={css(headerStyle.appLogoImg)} alt="logo" />
            <h1 className={css(headerStyle.h1)}>School dashboard</h1>
        </div>
    </>

  );
}

const headerStyle = StyleSheet.create({
  appHeader: {
    display: 'flex',
    color: '#e0354b',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
    fontSize: '1.4rem',
    marginBottom: '300px',
    marginTop: '14%'
  },
  appLogoImg: {
    width: '200px',
    height: '200px'
  },
  h1: {
    fontSize: '2.5rem'
  }
})

export default Header;
