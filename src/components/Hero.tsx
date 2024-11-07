import React from 'react';
import { Brain, ChevronRight, Play, Sparkles, ArrowRight, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../lib/store';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const handleStartAssessment = () => {
    if (isAuthenticated) {
      navigate('/assessment');
    } else {
      navigate('/login');
    }
  };

  const handleWatchDemo = () => {
    navigate('/demo');
  };

  const stats = [
    { label: 'Active Learners', value: '10,000+' },
    { label: 'Course Completion Rate', value: '94%' },
    { label: 'Career Transitions', value: '2,500+' },
    { label: 'Expert Mentors', value: '100+' }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-20"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-xl opacity-20"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute bottom-20 left-20"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-400 to-red-400 blur-xl opacity-20"></div>
      </motion.div>

      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 mb-4">
                <Sparkles className="h-4 w-4 text-indigo-600 mr-2" />
                <span className="text-sm font-medium text-indigo-600">AI-Powered Learning</span>
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Career Journey
                </span>
              </h1>
              
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Personalized skill assessments, AI-driven guidance, and industry-aligned learning paths to accelerate your career growth.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStartAssessment}
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWatchDemo}
                    className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-base font-medium rounded-full text-indigo-600 bg-transparent hover:bg-indigo-50"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <img
                    className="w-full rounded-lg transform transition-transform hover:scale-105 duration-300"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="Students learning"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-lg"></div>
                </div>

                {/* Floating achievement cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">Top Rated Platform</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium">AI-Powered Learning</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;