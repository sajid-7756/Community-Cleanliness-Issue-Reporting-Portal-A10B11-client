import React from 'react';
import Container from './Container';

const partners = [
  "City Waste Management",
  "Eco Solutions NGO",
  "Green Earth Initiative",
  "Urban Clean Dept",
  "Sustainable Futures",
  "Nature Keepers"
];

const Partners = () => {
  return (
    <section className="py-16 bg-base-200/30 border-t border-b border-base-200">
      <Container>
        <p className="text-center text-sm font-bold text-base-content/40 uppercase tracking-widest mb-10">Trusted By Leading Organizations</p>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, i) => (
            <div key={i} className="text-2xl font-black text-secondary/60 hover:text-primary transition-colors cursor-default select-none">
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;
