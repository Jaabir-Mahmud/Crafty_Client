import { FaGoogle, FaGithub } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'; 
import auth from '../../Firebase/firebase.config';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.css';


const Login = () => {
    const navigate = useNavigate();

    const handleSuccessRedirect = () => {
        
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 1500, 
        });
        
        setTimeout(() => {
          navigate('/'); 
        }, 1500);
    };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); 
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Google sign-in success:', user);
        handleSuccessRedirect(); 
       
      })
      .catch((error) => {
        console.error('Google sign-in error:', error.message);
      });
  };

  const handleGithubLogin = () => {
    const provider = new GithubAuthProvider(); 
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('GitHub sign-in success:', user);
        handleSuccessRedirect(); 
      })
      .catch((error) => {
        console.error('GitHub sign-in error:', error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <p className="w-8 h-8 mr-2" alt="logo" />
            Creative Corner
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form  className="space-y-4 md:space-y-6" >
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email"   placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  /> 
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
              </form>
              <div className="flex justify-center my-4">
                <p className="flex items-center">Or Continue With</p>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-gray-200 text-black px-4 py-2 rounded mr-2"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle size={20} />
                </button>
                <button
                  className="bg-gray-200 text-black px-4 py-2 rounded ml-2"
                  onClick={handleGithubLogin}
                >
                  <FaGithub size={20} />
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <NavLink to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
