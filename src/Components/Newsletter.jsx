import React from 'react';
import Container from './Container';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="bg-primary/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-primary/10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl scale-150"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl scale-150"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-wider">
                    <Mail size={16} />
                    Newsletter
                </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary leading-tight">Join Our <span className="text-primary">Green</span> Revolution</h2>
              <p className="text-xl text-base-content/70">Subscribe to get the latest updates on resolved issues and upcoming community clean drives.</p>
            </div>
            <div className="lg:w-1/2 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Enter your email" className="input input-bordered input-lg flex-1 rounded-2xl focus:input-primary shadow-sm" />
                <button className="btn btn-primary btn-lg rounded-2xl px-10 shadow-lg shadow-primary/20">Subscribe</button>
              </div>
              <p className="mt-4 text-xs text-base-content/50">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
