import React from 'react';
import Container from '../Components/Container';

const About = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-extrabold text-secondary">About <span className="text-primary">CleanHub</span></h1>
          <p className="text-xl text-base-content/70 leading-relaxed">
            CleanHub is a community-driven platform dedicated to improving our local environments. 
            We believe that every citizen has the power to make a difference. By providing a simple, 
            transparent way to report and track environmental issues, we empower individuals to 
            take action and hold authorities accountable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="p-6 bg-base-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-2">Our Mission</h3>
              <p>To create cleaner, safer, and more sustainable neighborhoods through community collaboration.</p>
            </div>
            <div className="p-6 bg-base-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-2">Our Vision</h3>
              <p>A world where every environmental problem is met with a swift and effective community response.</p>
            </div>
            <div className="p-6 bg-base-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-2">Our Values</h3>
              <p>Transparency, Accountability, Community, and Sustainability are at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
