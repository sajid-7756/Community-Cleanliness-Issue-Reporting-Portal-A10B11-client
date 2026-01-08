import React from 'react';
import Container from '../Components/Container';

const Contact = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold text-secondary">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-base-content/70">
              Have questions, feedback, or suggestions? We'd love to hear from you. 
              Our team is dedicated to supporting our community members.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">@</div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-base-content/60">support@cleanhub.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">#</div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-base-content/60">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">L</div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-base-content/60">Eco Tech Park, Green City, Planet Earth</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base-200 p-8 rounded-3xl shadow-sm border border-base-300">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">Name</span></label>
                  <input type="text" placeholder="John Doe" className="input input-bordered focus:input-primary" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">Email</span></label>
                  <input type="email" placeholder="john@example.com" className="input input-bordered focus:input-primary" />
                </div>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Subject</span></label>
                <input type="text" placeholder="How can we help?" className="input input-bordered focus:input-primary" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Message</span></label>
                <textarea className="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="Your message here..."></textarea>
              </div>
              <button type="button" className="btn btn-primary w-full shadow-lg shadow-primary/20">Send Message</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
