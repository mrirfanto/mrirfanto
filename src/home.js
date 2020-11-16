import React from "react";
import { Link } from "@reach/router";
import AvatarSocial from "./avatarSocial";

const Home = () => {
  return (
    <div className="container">
      <section className="content">
        <div className="content__item-left">
          <p className="title title--big">Hi!</p>
          <p className="title title--big">
            I'm <span className="highlighted">Riman</span>
          </p>
          <p className="subtitle">Frontend developer</p>
          <Link to="/about">
            <button className="btn-primary">about me</button>
          </Link>
        </div>
        <div className="content__item-right avatar-container">
          <AvatarSocial />
        </div>
      </section>
    </div>
  );
};

export default Home;
