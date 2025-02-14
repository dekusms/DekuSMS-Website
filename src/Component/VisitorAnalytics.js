import React, { useEffect } from 'react';

const VisitorAnalytics = () => {
  useEffect(() => {
    const visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
      localStorage.setItem('visitCount', 1);
    } else {
      localStorage.setItem('visitCount', parseInt(visitCount) + 1);
    }
  }, []);

  return (
    <div className="visitor-count">
      <p>Website visits: {localStorage.getItem('visitCount')}</p>
    </div>
  );
};

export default VisitorAnalytics;
