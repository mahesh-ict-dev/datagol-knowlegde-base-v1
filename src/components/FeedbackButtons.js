import React from 'react';

const FeedbackButtons = () => {
  const handleFeedback = (type) => {
    console.log(`Feedback received: ${type}`);
    // You can add logic here to send feedback to an analytics service or a backend API
  };

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <p>Was this helpful?</p>
      <button 
        onClick={() => handleFeedback('thumbs_up')}
        style={{ marginRight: '10px', fontSize: '24px', cursor: 'pointer' }}
      >👍</button>
      <button 
        onClick={() => handleFeedback('thumbs_down')}
        style={{ fontSize: '24px', cursor: 'pointer' }}
      >👎</button>
    </div>
  );
};

export default FeedbackButtons; 