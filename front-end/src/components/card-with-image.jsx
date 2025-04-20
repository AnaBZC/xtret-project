import React from 'react';

const Card = ({ title, image, buttonText }) => {

  // const styles = {
  //   card: {
  //     width: '300px',
  //     borderRadius: '16px',
  //     overflow: 'hidden',
  //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  //     background: '#1a1a1a',
  //     color: '#fff',
  //     transition: 'transform 0.3s ease',
  //   },
  //   image: {
  //     width: '100%',
  //     height: '200px',
  //     objectFit: 'cover',
  //   },
  //   content: {
  //     padding: '1rem',
  //   },
  //   title: {
  //     marginBottom: '0.5rem',
  //     fontSize: '1.25rem',
  //   },
  //   description: {
  //     fontSize: '0.9rem',
  //     marginBottom: '1rem',
  //   },
  //   button: {
  //     background: '#e60000',
  //     color: 'white',
  //     border: 'none',
  //     padding: '0.5rem 1rem',
  //     borderRadius: '8px',
  //     cursor: 'pointer',
  //   },
  // };


  //}

  const cardStyle = {
    width: '300px',
    background: '#1a1a1a',
  }

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;