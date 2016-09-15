import React from 'react';

export default () => {
  return (
    <div>
      <section className="hero">
        <img src="/img/abstractTest.png" role="presentation" />
      </section>

      <section className="details">
        <p>A simple video course to help you master FlexBox.</p>
        <p>Sign up today to grab all the videos and exercises!</p>
      </section>

      <section className="hero">
        <img src="https://static.pexels.com/photos/20974/pexels-photo.jpg" role="presentation" />
      </section>

      <section className="signup">
        <form action="" className="signup">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="submit" value="Sign me up!" />
        </form>
      </section>
    </div>
  );
};
