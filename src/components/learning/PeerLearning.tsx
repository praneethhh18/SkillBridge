import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Video, Calendar, Star, Award } from 'lucide-react';

const mentors = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Senior Software Engineer',
    expertise: ['React', 'Node.js', 'System Design'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Alex Kumar',
    role: 'Data Scientist',
    expertise: ['Python', 'Machine Learning', 'Data Analysis'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
];

const upcomingSessions = [
  {
    title: 'System Design Workshop',
    mentor: 'Dr. Sarah Chen',
    date: '2024-03-15T14:00:00',
    participants: 12,
  },
  {
    title: 'Machine Learning Basics',
    mentor: 'Alex Kumar',
    date: '2024-03-16T15:30:00',
    participants: 8,
  },
];

const PeerLearning = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Peer Learning Network</h1>
          <p className="mt-4 text-xl text-gray-600">
            Connect with industry experts and fellow learners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Mentors</h2>
              <div className="space-y-6">
                {mentors.map((mentor) => (
                  <motion.div
                    key={mentor.name}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200"
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="h-16 w-16 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                        <div className="flex items-center text-yellow-400">
                          <Star className="h-5 w-5 fill-current" />
                          <span className="ml-1 text-gray-900">{mentor.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{mentor.role}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 flex items-center text-indigo-600 hover:text-indigo-700"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Schedule Session
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Group Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <motion.div
                    key={session.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                        <p className="text-gray-600">with {session.mentor}</p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        Join
                      </motion.button>
                    </div>
                    <div className="mt-4 flex items-center space-x-6 text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(session.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {session.participants} participants
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 text-indigo-600 mr-3" />
                    <span>Start 1:1 Session</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-indigo-600 mr-3" />
                    <span>Join Study Group</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-indigo-600 mr-3" />
                    <span>Ask Question</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Sessions Completed</span>
                    <span>8/10</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Peer Reviews</span>
                    <span>12</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs border-2 border-white"
                      >
                        <Award className="h-4 w-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PeerLearning;