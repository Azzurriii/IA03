import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show the surprise message after a brief delay
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4">

      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 relative">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Logout
        </button>

        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white mb-2">Welcome to Your Dashboard!</h2>
          <p className="text-gray-200 text-lg">You've been successfully logged in 😏</p>
        </div>

        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
            title="Dashboard Welcome Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">😂</div>
            <h3 className="text-lg font-semibold text-white mb-2">Congratulations!</h3>
            <p className="text-gray-300 text-sm">You've been rickrolled</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">🎸</div>
            <h3 className="text-lg font-semibold text-white mb-2">Classic Hit</h3>
            <p className="text-gray-300 text-sm">Rick Astley - 1987</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-lg font-semibold text-white mb-2">Epic Moment</h3>
            <p className="text-gray-300 text-sm">You'll never forget this</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm italic">
            "Never gonna give you up, never gonna let you down..." 🎵
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
