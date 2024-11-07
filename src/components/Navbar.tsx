import React, { useState, useEffect } from 'react';
import { Brain, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add dark mode implementation here
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              SkillBridge AI
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'How it Works', 'Success Stories'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-600" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
            >
              Get Started
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['Features', 'How it Works', 'Success Stories'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ x: 10 }}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;