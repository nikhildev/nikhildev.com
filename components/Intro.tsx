import React from "react";

const Intro = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src="me_square.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-6xl text-primary font-bold">Hi!</h1>
          <p className="py-6 text-xl text-base-content">
            My name is Nikhil and I'm a 39 year old Engineering team lead
            working in Finland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
