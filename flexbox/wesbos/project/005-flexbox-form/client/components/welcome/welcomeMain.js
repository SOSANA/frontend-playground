import React from 'react';
import WelcomeForm from '../welcome/welcomeForm';
import WelcomeVideo from '../welcome/welcomeVideo';

export default () => {
  return (
    <div className="cover">
      <WelcomeForm />
      <WelcomeVideo />
    </div>
  );
};
