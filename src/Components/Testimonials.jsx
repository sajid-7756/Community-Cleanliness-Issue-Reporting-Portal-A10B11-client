import React from 'react';
import Container from './Container';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Local Resident",
    content: "CleanHub made it so easy to report the illegal dumping in my neighborhood. It was cleared within 48 hours!",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "Volunteer",
    content: "I love being able to see where help is needed most. The platform connects us perfectly with the community needs.",
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Elena Rodriguez",
    role: "City Official",
    content: "The organized data from CleanHub helps our team prioritize issues and allocate resources efficiently.",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-secondary mb-4">What Our <span className="text-primary">Community</span> Says</h2>
          <p className="text-base-content/70">Real stories from the people making a difference every day using our platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-base-100 rounded-3xl border border-base-200 flex flex-col items-center text-center space-y-4 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star className="w-16 h-16 fill-primary" />
               </div>
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-4 border-primary/20 p-1" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="italic text-base-content/80 leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-sm text-primary font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
