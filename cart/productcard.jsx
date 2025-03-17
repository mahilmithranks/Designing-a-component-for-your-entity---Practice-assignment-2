import React from 'react';
import Button from '../component/button.jsx';

const Productcard = () => {
  const product = {
    image: 'https://via.placeholder.com/150',
    name: 'Sample Product',
    price: '$19.99',
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>{product.price}</p>
      <Button />
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    maxWidth: '200px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  name: {
    fontSize: '18px',
    margin: '8px 0',
  },
  price: {
    fontSize: '16px',
    color: '#888',
  },
};

export default Productcard;
