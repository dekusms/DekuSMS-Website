import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-06-01T00:00:00");
    const difference = launchDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#010e3d', color: '#ffffff' }}>
      <main className="flex-fill d-flex align-items-center justify-content-center px-3">
        <div className="text-center" style={{ maxWidth: '600px' }}>
          <h1 className="display-4 fw-bold mb-3">DekuSMS Enterprise</h1>
          <p className="lead mb-5" style={{ color: '#D1D1D6' }}>
            A powerful messaging experience is on its way. Be the first to know when we launch.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="p-3 text-center" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                minWidth: '90px',
                boxShadow: '0 0 10px rgba(21, 183, 158, 0.4)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div className="h3 fw-bold" style={{ color: '#15B79E' }}>{String(value).padStart(2, '0')}</div>
                <div className="text-uppercase small" style={{ color: '#A0A0AB' }}>{unit}</div>
              </div>
            ))}
          </div>

          <div className="input-group mb-4 mx-auto" style={{ maxWidth: '400px' }}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              style={{
                backgroundColor: '#131316',
                border: '1px solid #3F3F46',
                color: '#ffffff'
              }}
            />
            <button
              className="btn"
              style={{
                backgroundColor: '#15B79E',
                color: '#010e3d'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#0E9384'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#15B79E'}
            >
              Notify Me
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 border-top" style={{
        backgroundColor: '#010e3d',
        borderTop: '1px solidrgb(22, 22, 24)',
        color: '#70707B',
        fontSize: '14px'
      }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a href="mailto:support@dekusms.com" className="text-decoration-none text-light">Support</a>
            <a href="https://github.com/dekusms" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">GitHub</a>
            <a href="/privacy-policy" className="text-decoration-none text-light">Privacy Policy</a>
          </div>
          <div className="mt-2">© {new Date().getFullYear()} DekuSMS Enterprise</div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
