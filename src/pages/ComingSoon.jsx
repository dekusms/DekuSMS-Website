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
      padding: '20px',
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
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            fontWeight: '900',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'transparent',
            background: 'linear-gradient(to right, #ffffff, #dcdcdc)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            marginBottom: '20px',
          }}
        >
          Coming Soon
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
          fontWeight: '400',
          color: '#D1D1D6',
          marginBottom: '50px',
        }}>
          Something amazing is launching soon. Stay tuned for the release of DekuSMS Enterprise.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '50px',
      }}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} style={{
            flex: '1 1 80px',
            maxWidth: '100px',
            minWidth: '70px',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: 'rgba(109, 171, 216, 0.1)',
            boxShadow: '0 4px 20px rgba(71, 78, 83, 0.3)',
            textAlign: 'center',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            color: '#15B79E',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff' }}>
              {String(value).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#A0A0AB', textTransform: 'uppercase' }}>
              {unit}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        width: '100%',
        maxWidth: '700px',
        margin: '0 auto 30px auto',
        padding: '30px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}>
        <h3 style={{ color: 'white', fontSize: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center' }}>
          Join Our Mailing List
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px',
          width: '100%',
        }}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              flex: '1 1 60px',
              minWidth: '100px',
              padding: '14px 20px',
              fontSize: '1rem',
              borderRadius: '12px',
              border: 'none',
              outline: 'none',
              backgroundColor: 'white',
              color: '#010e3d',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#577BFF';
              e.target.style.boxShadow = '0 0 5px #577BFF';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.boxShadow = 'none';
            }}
          />

          <button
            style={{
              padding: '14px 25px',
              fontSize: '16px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: '#E66F00',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#010e3d';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#E66F00';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Notify Me
          </button>
        </div>
      </div>

      <footer style={{
        marginTop: 'auto',
        width: '100%',
        color: '#A0AEC0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
        textAlign: 'center',
        padding: '20px',
      }}>
        <p style={{ margin: 0 }}>Follow us for updates:</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginTop: '10px',
          flexWrap: 'wrap',
        }}>
          <a href="https://twitter.com/dekusms" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a>
          <a href="https://github.com/dekusms" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>GitHub</a>
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
