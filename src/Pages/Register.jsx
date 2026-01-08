import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxios from "../Hooks/useAxios";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  const axiosInstance = useAxios();
  const {
    user,
    setUser,
    signUpFunc,
    signOutFunc,
    updateProfileFunc,
    signInGoogleFunc,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    const nameRegex = /^[a-zA-Z\s]{3,30}$/;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!nameRegex.test(displayName)) {
      return toast.error("Name must be 3–30 letters only.");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address.");
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must be at least 6 characters, include uppercase, lowercase, number, and special character."
      );
    }

    signUpFunc(email, password)
      .then(() => {
        toast.success("Sign Up Success");
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            signOutFunc()
              .then(() => {
                setUser(null);
                navigate("/login");
                setLoading(false);
              })
              .catch((err) => {
                toast.error(err);
              });
          })
          .catch((err) => {
            toast.error(err);
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database.");
        } else if (e.code === "auth/weak-password") {
          toast.error("Bhai tomake at least 6 ta digit er pass dite hobe");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
        }
        setLoading(false);
      });

    form.reset();
  };

  const handleGoogleSignIn = () => {
    signInGoogleFunc()
      .then((result) => {
        console.log(result.user);
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
          .catch((err) => console.log(err.code));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  if (user) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-base-200/50 py-12 px-4 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

      <Fade triggerOnce>
        <title>Clean Hub - Register</title>
        <div className="w-full max-w-xl bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-300 relative z-10">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <Link to="/" className="inline-flex items-center gap-2 text-3xl font-bold mb-4">
                <span className="bg-primary text-primary-content px-2 py-1 rounded-lg">Clean</span>
                <span className="text-secondary">Hub</span>
              </Link>
              <h2 className="text-3xl font-black text-secondary">Create Account</h2>
              <p className="text-base-content/60 mt-2">Join our community and start making a difference.</p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">Full Name</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="input input-bordered input-lg rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">Email Address</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="input input-bordered input-lg rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Photo URL</span></label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="https://example.com/photo.jpg"
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

              <button type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 font-bold tracking-tight">
                Create Account
              </button>
            </form>

            <div className="divider my-8 text-xs text-base-content/40 uppercase tracking-widest font-bold">Or register with</div>

            <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-lg w-full rounded-2xl gap-3 border-base-300 hover:bg-base-200 hover:text-base-content transition-all group"
            >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z" />
                  <path fill="#FBBC05" d="M16.04 18.013c-1.09.303-2.246.46-3.44.46a7.077 7.077 0 0 1-7.334-4.71l-4.026 3.115C3.198 21.302 7.27 24 12 24c3.055 0 5.782-1.145 7.91-3l-3.87-2.987z" />
                  <path fill="#4285F4" d="M19.91 21c2.13-1.855 3.59-4.59 3.59-9 0-.61-.05-1.21-.155-1.79H12v4.41h6.61a5.64 5.64 0 0 1-2.454 3.71l3.754 2.67z" />
                  <path fill="#34A853" d="M5.266 14.235a7.077 7.077 0 0 1 0-4.47L1.24 6.65a11.96 11.96 0 0 0 0 10.7l4.026-3.115z" />
                </svg>
                Sign up with Google
            </button>

            <p className="text-center mt-10 text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );

};

export default Register;
