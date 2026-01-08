import { Trash2, HardHat, Wrench,  ArrowRight, Kanban } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";

const categories = [
  {
    id: 1,
    title: "Garbage & Waste",
    description: "Help eliminate eyesores and health hazards from our streets.",
    icon: Trash2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    slug: "Garbage"
  },
  {
    id: 2,
    title: "Illegal Construction",
    description: "Protect our urban planning and safety standards.",
    icon: HardHat,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    slug: "Illegal Construction"
  },
  {
    id: 3,
    title: "Public Facilities",
    description: "Repair broken lights, benches, and community assets.",
    icon: Wrench,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    slug: "Broken Public Property"
  },
  {
    id: 4,
    title: "Road Infrastructure",
    description: "Fix potholes and ensure safe transit for everyone.",
    icon: Kanban,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    slug: "Road Damage"
  },
];

const CategoriesSection = () => {
  return (
    <div className="py-24 md:py-32 bg-base-100">
      <Container>
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6">
            Issue <span className="text-primary italic">Categories</span>
          </h2>
          <p className="text-lg text-secondary/60 font-medium max-w-2xl leading-relaxed">
            Quickly identify and report problems by category. Each sector represents a specialized effort in our cleanup mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
                <Link
                    to={`/issues?category=${cat.slug}`}
                    key={cat.id}
                    className="group bg-base-200/50 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-base-100 p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
                >
                    <div className={`w-20 h-20 rounded-3xl ${cat.bgColor} ${cat.color} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <cat.icon size={36} />
                    </div>
                    
                    <h3 className="text-xl font-extrabold text-secondary mb-4 group-hover:text-primary transition-colors">
                        {cat.title}
                    </h3>
                    
                    <p className="text-secondary/50 font-bold text-sm leading-relaxed mb-8 flex-1">
                        {cat.description}
                    </p>
                    
                    <div className="pt-8 border-t border-base-content/5 mt-auto flex items-center justify-between text-primary font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        Explore Category
                        <ArrowRight size={18} />
                    </div>
                </Link>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoriesSection;
