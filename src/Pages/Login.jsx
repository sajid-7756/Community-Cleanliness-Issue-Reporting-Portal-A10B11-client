import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxios from "../Hooks/useAxios";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const { user, setUser, signInFunc, signInGoogleFunc, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const axiosInstance = useAxios();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInFunc(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Sign In Success");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.code);
        setLoading(false);
        navigate("/signin");
      });

    form.reset();
    navigate(location.state || "/");
  };

  const handleGoogleSignIn = () => {
    signInGoogleFunc()
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        axiosInstance
          .post("/users", newUser)
          .then(() => {
            toast.success("Google Sign In Success");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const handleDemoLogin = (role) => {
    const email = role === 'admin' ? 'admin@cleanhub.com' : 'user@cleanhub.com';
    const password = 'password123';
    
    // Auto-fill and submit
    const form = document.querySelector('form');
    form.email.value = email;
    form.password.value = password;
    
    // Trigger submit
    const event = new Event('submit', { cancelable: true, bubbles: true });
    form.dispatchEvent(event);
  };

  if (user) {
    return <Navigate to={location.state || "/"}></Navigate>;
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-base-200/50 py-12 px-4 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

      <Fade triggerOnce>
        <title>Clean Hub - Login</title>
        <div className="w-full max-w-lg bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-300 relative z-10">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <Link to="/" className="inline-flex items-center gap-2 text-3xl font-bold mb-4">
                <span className="bg-primary text-primary-content px-2 py-1 rounded-lg">Clean</span>
                <span className="text-secondary">Hub</span>
              </Link>
              <h2 className="text-3xl font-black text-secondary">Welcome Back!</h2>
              <p className="text-base-content/60 mt-2">Sign in to continue making an impact.</p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-5">
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Email Address</span></label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="input input-bordered input-lg rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label"><span className="label-text font-bold">Password</span></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered input-lg rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-4 right-5 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>

              <div className="flex justify-between items-center text-sm px-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-xs checkbox-primary rounded" />
                  <span className="text-base-content/70">Remember me</span>
                </label>
                <a href="#" className="text-primary font-bold hover:underline">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 font-bold tracking-tight">
                Sign In
              </button>
            </form>

            <div className="divider my-8 text-xs text-base-content/40 uppercase tracking-widest font-bold">Or continue with</div>

            <div className="grid grid-cols-1 gap-4">
                <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-lg rounded-2xl gap-3 border-base-300 hover:bg-base-200 hover:text-base-content transition-all group"
                >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z" />
                    <path fill="#FBBC05" d="M16.04 18.013c-1.09.303-2.246.46-3.44.46a7.077 7.077 0 0 1-7.334-4.71l-4.026 3.115C3.198 21.302 7.27 24 12 24c3.055 0 5.782-1.145 7.91-3l-3.87-2.987z" />
                    <path fill="#4285F4" d="M19.91 21c2.13-1.855 3.59-4.59 3.59-9 0-.61-.05-1.21-.155-1.79H12v4.41h6.61a5.64 5.64 0 0 1-2.454 3.71l3.754 2.67z" />
                    <path fill="#34A853" d="M5.266 14.235a7.077 7.077 0 0 1 0-4.47L1.24 6.65a11.96 11.96 0 0 0 0 10.7l4.026-3.115z" />
                </svg>
                Sign in with Google
                </button>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest text-center mb-3">Quick Demo Access</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleDemoLogin('user')}
                  className="btn btn-sm flex-1 rounded-xl bg-white border-primary/20 hover:border-primary text-primary shadow-sm normal-case"
                >
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-1"></span>
                  User Demo
                </button>
                <button 
                   onClick={() => handleDemoLogin('admin')}
                   className="btn btn-sm flex-1 rounded-xl bg-secondary text-secondary-content border-transparent hover:bg-secondary-focus shadow-sm normal-case"
                >
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse mr-1"></span>
                  Admin Demo
                </button>
              </div>
            </div>

            <p className="text-center mt-10 text-base-content/60">
              New to CleanHub?{" "}
              <Link to="/register" className="text-primary font-bold hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
