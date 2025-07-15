import  { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

  
    if (!name || !email || !password) {
      setError('Name, email, and password are required.');
      return;
    }

   
    Swal.fire({
      icon: 'success',
      title: 'Account created successfully!',
      showConfirmButton: false,
      timer: 1500, 
    }).then(() => {
      navigate('/login');
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-indigo-600 mb-4">Create an Account</h2>
            <p className="text-center text-sm text-gray-600 mb-6">Please fill in the following fields to create your account</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm mt-2"
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <input id="photoURL" name="photoURL" type="text"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2" placeholder="Photo URL " />
               

              </div>
              <div>
                <label htmlFor="password" className="sr-only">Create a Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm mt-2"
                    placeholder="Create a Password"
                  />
                <button
  type="button"
  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? (
    <AiOutlineEyeInvisible size={20} />
  ) : (
    <AiOutlineEye size={20} />
  )}
</button>
                </div>
              </div>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-4">
            <p className="text-gray-600">Already have an account? <NavLink to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in here</NavLink></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
