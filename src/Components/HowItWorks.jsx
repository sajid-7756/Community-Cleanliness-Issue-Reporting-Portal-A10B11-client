import React from 'react';
import Container from './Container';
import { ClipboardEdit, MapPin, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardEdit className="w-10 h-10" />,
    title: "Report Issue",
    desc: "Take a photo and describe the environmental issue in your area."
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Tag Location",
    desc: "Specify the exact location so authorities can find it easily."
  },
  {
    icon: <CheckCircle2 className="w-10 h-10" />,
    title: "Issue Resolved",
    desc: "Authorities or volunteers fix the problem and update life status."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-4xl font-extrabold text-secondary mb-4">How It <span className="text-primary">Works</span></h2>
           <p className="text-base-content/70">Join our community and follow these three simple steps to start making an impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-12 z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 relative z-10">
              <div className="w-24 h-24 bg-primary text-primary-content rounded-full flex items-center justify-center shadow-xl shadow-primary/30 border-8 border-base-100">
                {step.icon}
              </div>
              <div className="space-y-2">
                 <h3 className="text-2xl font-bold">{step.title}</h3>
                 <p className="text-base-content/60 max-w-xs mx-auto">{step.desc}</p>
              </div>
              <div className="w-10 h-10 bg-secondary text-secondary-content rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
