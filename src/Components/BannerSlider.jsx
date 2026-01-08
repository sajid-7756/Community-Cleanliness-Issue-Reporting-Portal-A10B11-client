import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-base-100/90 hover:bg-base-100 p-3 rounded-full shadow-lg transition-all"
  >
    <FaChevronLeft className="text-primary" size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-base-100/90 hover:bg-base-100 p-3 rounded-full shadow-lg transition-all"
  >
    <FaChevronRight className="text-primary" size={20} />
  </button>
);

const handleScrollDown = () => {
  window.scrollTo({
    top: 650,
    behavior: "smooth",
  });
};

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="bottom-10">
        <ul className="flex gap-3 justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-12 h-1 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300" />
    ),
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920",
      title: "Keep Your Community <span class='text-primary'>Clean</span>",
      subtitle: "Join thousands of citizens reporting and resolving issues in real-time.",
      cta: "Report Now"
    },
    {
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1920",
      title: "Empowering <span class='text-primary'>Action</span>",
      subtitle: "Connecting citizens with authorities for a sustainable future.",
      cta: "Explore Issues"
    },
    {
      image: "https://images.unsplash.com/photo-1536939459926-301728717817?q=80&w=1920",
      title: "Build a <span class='text-primary'>Greener</span> World",
      subtitle: "Track your impact and see the difference you make every day.",
      cta: "Join Community"
    },
  ];

  return (
    <div className="banner-slider relative group">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="outline-none">
            <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
              <img
                src={slide.image}
                alt="Banner"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[10000ms]"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-secondary/90 via-secondary/40 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-secondary/60 to-transparent" />
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-3xl space-y-6 animate-fade-in">
                    <h2 
                        className="text-white text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className="text-xl md:text-2xl text-white/80 max-w-xl font-medium drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={handleScrollDown}
                            className="btn btn-primary btn-lg rounded-2xl px-10 shadow-2xl shadow-primary/30 group/btn"
                        >
                            {slide.cta}
                            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn btn-outline btn-lg rounded-2xl px-10 text-white border-white/30 hover:bg-white/10 hover:border-white">
                            Learn More
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Scroll Hint */}
      <div 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-1 h-8 bg-white/20 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
};


export default BannerSlider;
