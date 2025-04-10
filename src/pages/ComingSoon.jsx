import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-04-30T00:00:00");
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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'radial-gradient(circle, #0024A8, #000158, #010e3d)',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>

     <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-20%',
        width: '150%',
        height: '150%',
        background: 'linear-gradient(45deg, #577BFF, #0031E0)',
        clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        animation: 'moveBackground 5s ease infinite',
        zIndex: -1,
      }}></div>

       <div style={{ textAlign: 'center', padding: '30px' }}>
        <h1 style={{
          fontSize: '8rem',
          fontWeight: '900',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: 'transparent',
          background: 'linear-gradient(to right, #577BFF,rgb(1, 39, 174))',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          animation: 'glowingText 2s ease-in-out infinite alternate',
          marginBottom: '20px',
        }}>
          Coming Soon
        </h1>
        <p style={{
          fontSize: '1.4rem',
          fontWeight: '400',
          color: '#D1D1D6',
          marginBottom: '50px',
        }}>
          Something amazing is launching soon. Stay tuned for the release of DekuSMS Enterprise.
        </p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginBottom: '50px',
      }}>

        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            width: '100px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#15B79E',
          }} 
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>

            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#fff',
            }}>
              {String(value).padStart(2, '0')}
            </div>
            <div style={{
              fontSize: '1rem',
              color: '#A0A0AB',
            }}>
              {unit}
            </div>
          </div>
        ))}
      </div>



<div style={{
  maxWidth: '800px',
  marginBottom: '60px',
  padding: '0 20px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px',
  alignItems: 'center',
}}>
  <input
    type="email"
    placeholder="Enter your email"
    style={{
      padding: '14px 20px',
      fontSize: '1.1rem',
      borderRadius: '30px', 
      border: '2px solidrgb(176, 227, 219)',
      marginRight: '20px',
      width: '60%',
      backgroundColor: '#131316',
      color: '#fff',
      outline: 'none',
      transition: 'all 0.3s ease-in-out',
      boxSizing: 'border-box',
    }}
    onFocus={(e) => e.target.style.borderColor = '#577BFF'} 
    onBlur={(e) => e.target.style.borderColor = '#15B79E'} 
  />
  <button
    style={{
      backgroundColor: 'white',
      color: '#010e3d',
      padding: '14px 30px',
      borderRadius: '30px',
      border: 'none',
      fontSize: '1.2rem',
      width: '35%', 
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out, transform 0.2s ease',
      boxSizing: 'border-box',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#0E9384';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = '#15B79E';
      e.target.style.transform = 'scale(1)';
    }}
  >
    Notify Me
  </button>
</div>


      <footer style={{
        position: 'absolute',
        bottom: '20px',
        fontSize: '1rem',
        color: '#A0AEC0',
        width: '100%',
        padding: '0 20px',
        textAlign: 'center',
      }}>
        <div>
          <p style={{ margin: '0' }}>Follow us for updates:</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            marginTop: '10px',
          }}>
            <a href="https://twitter.com/dekusms" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}>Twitter</a>
            <a href="https://github.com/dekusms" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}>GitHub</a>
          </div>
        </div>
        <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} DekuSMS Enterprise</p>
      </footer>

      <style>{`
        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30%, 30%); }
        }

        @keyframes glowingText {
          0% { text-shadow: 0 0 15px #15B79E, 0 0 30px #15B79E; }
          100% { text-shadow: 0 0 30px #15B79E, 0 0 45px #15B79E; }
        }
      `}</style>

    </div>
  );
};

export default ComingSoon;
