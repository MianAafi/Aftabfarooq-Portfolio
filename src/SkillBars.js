import React from 'react';

const SkillBars = ({ skill, percentage }) => {
  const skillBarStyle = {
    width: '100%',
    height: '20px', // Set the height of the skill bar
    backgroundColor: '#ddd', // Set the background color for the entire skill bar
    borderRadius: '5px', // Add some border radius to make it look better
    overflow: 'hidden',
    marginBottom: '10px',
  };

  const coloredBarStyle = {
    width: `${percentage}%`,
    height: '100%',
    backgroundColor: 'var(--text)', // Set the color for the colored bar
    color: '#fff',
    textAlign: 'center',
    lineHeight: '20px', // Center the text vertically in the colored bar
  };
  return (
    <div className="skill-lt">
      <h6 className="dark-color">{skill}</h6>
      <div className="skill-bar" style={skillBarStyle}>
        <div style={coloredBarStyle}>{percentage}%</div>
      </div>
    </div>
  );
};

export default SkillBars;
