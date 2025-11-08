import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm a passionate MERN Stack Developer with expertise in building modern web applications.
            I love creating elegant solutions to complex problems and am always eager to learn new technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
            or sharing my knowledge through technical writing and mentoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;