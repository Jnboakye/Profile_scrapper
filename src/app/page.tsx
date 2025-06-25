'use client';

import Link    from 'next/link';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaEnvelope, FaTwitter, FaClock, FaRocket, FaUsers, FaRobot } from 'react-icons/fa';

export default function Home() {
  const [hover, setHover] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger fade and slide up after mount
    setShowContent(true);
  }, []);

  const features = [
    {
      icon: <FaClock size={40} color="#7f79ed" />,
      title: 'Save Time',
      description: 'Get instant summaries and avoid hours of manual research.',
    },
    {
      icon: <FaRocket size={40} color="#7f79ed" />,
      title: 'Boost Productivity',
      description: 'Help your sales and recruitment teams prepare faster.',
    },
    {
      icon: <FaUsers size={40} color="#7f79ed" />,
      title: 'Easy Collaboration',
      description: 'Share insights quickly with your team via our chatbot.',
    },
    {
      icon: <FaRobot size={40} color="#7f79ed" />,
      title: 'AI Powered',
      description: 'Leverages powerful AI to generate concise, relevant info.',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
        background:
          'radial-gradient(circle at top left, #f0f4f8, transparent), radial-gradient(circle at bottom right, #d9e2ec, transparent)',
        color: '#102a43',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1rem',
      }}
    >
      {/* Hero container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '960px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          marginBottom: '4rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Text section */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: '280px',
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '0.2s',
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              marginBottom: '1rem',
              lineHeight: 1.1,
            }}
          >
            Welcome to Relevance AI Summarizer
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              color: '#334e68',
            }}
          >
            Quickly get summarized insights about people or companies by scraping their LinkedIn or websites.
            Perfect for sales teams, recruiters, or anyone who wants a quick overview.
          </p>

          <Link href="/bot" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.25rem',
                fontWeight: '600',
                backgroundColor: hover ? '#4239f7' : '#7f79ed',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(168, 129, 114, 0.4)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Try our bot
            </button>
          </Link>

          <footer
            style={{
              marginTop: '3rem',
              fontSize: '0.95rem',
              color: '#627d98',
            }}
          >
            <p>
              Want a similar project?{' '}
              <a
                href="mailto:your.email@example.com"
                style={{
                  color: '#7f79ed',
                  textDecoration: 'underline',
                }}
              >
                Contact me
              </a>
            </p>
          </footer>
        </div>

        {/* Illustration */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: '280px',
            textAlign: 'center',
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '0.4s',
          }}
        >
          <img
            src="./images/image1.png"
            alt="AI illustration"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            loading="lazy"
          />
        </div>
      </div>


      {/* Features section */}
      <section
        style={{
          maxWidth: '960px',
          width: '100%',
          padding: '2rem 1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {features.map((feature, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem 1rem',
              boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
              textAlign: 'center',
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${0.1 * i}s, transform 0.6s ease ${0.1 * i}s`,
            }}
          >
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{feature.icon}</div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#334e68',
              }}
            >
              {feature.title}
            </h3>
            <p style={{ color: '#627d98', fontSize: '1rem', lineHeight: 1.4 }}>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          fontSize: '1.5rem',
          color: '#7f79ed',
          marginBottom: '2rem',
        }}
      >
        <a href="https://gh.linkedin.com/in/jeffrey-nana-boakye-634a4a241" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: '#7f79ed' }}>
          <FaLinkedin />
        </a>
        <a href="mailto:jeffreyboakye2131@outlook.com" aria-label="Email" style={{ color: '#7f79ed' }}>
          <FaEnvelope />
        </a>
      </footer>
    </div>
  );
}
