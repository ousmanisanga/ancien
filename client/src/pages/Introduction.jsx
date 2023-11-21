import React from 'react';
import { useNavigate } from 'react-router-dom';
import convers1 from "../assets/convers1.png";

const Introduction = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${convers1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const bubbleStyle = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    animation: 'float 3s infinite',
  };

  const contentStyle = {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    margin: '20px auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '15px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#555',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const handleButtonClick = () => {
    navigate('/logchat');
  };

  return (
    <div style={containerStyle}>
      <div style={bubbleStyle} />
      <div style={contentStyle}>
        <h1 style={headingStyle}>Bienvenue sur notre application de messagerie instantanée</h1>
        <p style={paragraphStyle}>
          Découvrez une nouvelle façon de rester connecté avec vos amis. Notre application de messagerie instantanée offre une expérience utilisateur exceptionnelle avec des fonctionnalités avancées.
        </p>
        <button style={buttonStyle} onClick={handleButtonClick}>Commencer</button>
      </div>
    </div>
  );
};

export default Introduction;

// Ajoutez le CSS ci-dessous directement dans le fichier JavaScript
const css = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .bubble-animation {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    animation: float 3s infinite;
  }
`;

const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(css));
document.head.appendChild(styleTag);
