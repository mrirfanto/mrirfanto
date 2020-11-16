import React from "react";
import AvatarSocial from "./avatarSocial";

const About = () => {
  return (
    <div className="container">
      <section className="content">
        <div className="content__item-left">
          <p className="title title--medium">About me</p>
          <p className="text--big">
            Deserunt voluptate minim est magna nulla reprehenderit aliquip. In
            magna tempor consequat fugiat in Lorem dolor ipsum labore elit.
            Culpa nisi voluptate ex laborum cupidatat in irure eu nostrud.
            Commodo ea ex consectetur in amet ut ex cillum qui nisi adipisicing.
            Dolor laborum labore consectetur ut anim nulla. Voluptate nulla nisi
            labore elit do exercitation consectetur quis et ut irure in. Veniam
            officia cupidatat sunt est ex. Occaecat tempor aliqua in
            reprehenderit.
          </p>
        </div>
        <div className="content__item-right avatar-container">
          <AvatarSocial />
        </div>
      </section>
      <section>
        <p className="subtitle">Current Stack of Technologies</p>
        <p className="text--big">
          Aliqua cupidatat id qui voluptate labore. Exercitation consequat
          excepteur sint sunt tempor consectetur pariatur labore nulla qui.
          Nulla irure aliqua et aliquip non qui ullamco nulla officia excepteur
          deserunt. Esse adipisicing Lorem officia incididunt quis dolor est
          veniam commodo est esse commodo nostrud exercitation. Velit ut nisi
          laboris enim. Cupidatat sit ea adipisicing dolore nostrud do dolore
          incididunt.
        </p>
      </section>
    </div>
  );
};

export default About;
