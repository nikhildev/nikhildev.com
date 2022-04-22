import Image from "next/image";
import React from "react";
import Page from "./Page";

const Intro = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-8xl text-primary font-bold">Hi!</h1>
          <p className="py-6 text-3xl text-green-300">
            My name is Nikhil.
            <br />
            <br />
            I&rsquo;m a 39 year old Engineering Team Lead working in Finland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
