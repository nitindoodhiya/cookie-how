// CookingInstructionsComponent.js
import React from 'react';
import './CookingInstructionsComponent.css'; // Create a corresponding CSS file for styling

const CookingInstructionsComponent = ({ title, description, instructions }) => {
  return (
    <div className="cooking-instructions-container">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <ul className="instructions-list">
        {instructions.map((instruction, index) => (
          <li key={index} className="instruction-item">
            <h3 className="instruction-heading">{instruction.heading}</h3>
            <p className="instruction-highlight">
              <strong>{instruction.body.highlight}</strong>
            </p>
            <p className="instruction-explanation">{instruction.body.explanation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CookingInstructionsComponent;
