import React from 'react';

import "./ScrollToTop.css"

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function ScrollToTop() {
  return (
    <button 
      onClick={scrollToTop} 
      style={{
        position: 'fixed',
        bottom: '320px',
        right: '-100px',
        padding: '4px',
        cursor: 'pointer',
      }}
    >
      <img src="/public/imagenes/botonSubir.png" alt="botón scroll automático" className='boton-subir' />
    </button>
  );
}

export default ScrollToTop;