import React from 'react';

const Button = () => {
  return (
    <button style={styles.button}>
      View Product
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default Button;
