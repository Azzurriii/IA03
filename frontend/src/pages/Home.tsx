import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to IA03
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            User Registration System with React & NestJS
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Login
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
              <p className="text-gray-300 text-sm">Password hashing with bcrypt</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast</h3>
              <p className="text-gray-300 text-sm">Built with React & NestJS</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-lg font-semibold text-white mb-2">Modern</h3>
              <p className="text-gray-300 text-sm">Beautiful UI with Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

