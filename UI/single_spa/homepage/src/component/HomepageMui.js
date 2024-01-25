import React from 'react';

export default function Homepage() {
  return (
    <div style={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
      <img
        style={{ height: 140, objectFit: 'cover', width: '100%' }}
        src={require('../images/lizard.jpeg').default}
        alt="green iguana"
      />
      <div style={{ padding: '1rem' }}>
        <h5 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.25rem' }}>Lizard</h5>
        <p style={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.54)' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </p>
      </div>
      <div style={{ borderTop: '1px solid #e0e0e0', padding: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <button style={{ fontSize: '0.875rem', cursor: 'pointer' }}>Share</button>
        <button style={{ fontSize: '0.875rem', cursor: 'pointer' }}>Learn More</button>
      </div>
    </div>
  );
}
