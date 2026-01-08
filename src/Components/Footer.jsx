import { Link } from "react-router";
import { RiTwitterXLine } from "react-icons/ri";
import { FaArrowAltCircleUp } from "react-icons/fa";
const Footer = () => {
  const handleUpBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-secondary text-secondary-content">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-3xl font-bold">
              <span className="bg-primary text-primary-content px-2 py-1 rounded-lg">Clean</span>
              <span>Hub</span>
            </Link>
            <p className="text-secondary-content/70 leading-relaxed">
              Empowering communities to report, track, and resolve local environmental issues. Join us in our mission to create a cleaner, greener world for everyone.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://twitter.com" className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content transition-all">
                <RiTwitterXLine size={20} />
              </a>
              <a href="https://instagram.com" className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-primary-content transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-primary transition-colors text-secondary-content/70">Home</Link></li>
              <li><Link to="/issues" className="hover:text-primary transition-colors text-secondary-content/70">Explore Issues</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors text-secondary-content/70">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors text-secondary-content/70">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors text-secondary-content/70">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-secondary-content/70">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-secondary-content/70">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-secondary-content/70">Report Bug</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-secondary-content/70">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                support@cleanhub.com
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Eco Tech Park, Green City
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-content/10 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-content/50 text-sm">
          <p>© {new Date().getFullYear()} CleanHub. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={handleUpBtn}
        className="fixed right-8 bottom-8 btn btn-primary btn-circle shadow-2xl z-50 hover:scale-110 transition-transform active:scale-95 group"
      >
        <FaArrowAltCircleUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>

  );
};

export default Footer;
