'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Calendar, Users } from 'lucide-react';

interface SuccessMessageProps {
  onReset: () => void;
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        variants={iconVariants}
      >
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </motion.div>

      <motion.h2
        className="text-3xl font-bold text-gray-900 mb-4"
        variants={itemVariants}
      >
        Welcome to the Waitlist!
      </motion.h2>

      <motion.p
        className="text-gray-600 text-lg mb-8"
        variants={itemVariants}
      >
        Thank you for joining SurveyNex. We've successfully registered your details
        and you'll be among the first to know when we launch.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        variants={itemVariants}
      >
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
          <Mail className="w-8 h-8 text-black mb-2" />
          <h3 className="font-semibold text-gray-900 mb-1">Email Updates</h3>
          <p className="text-sm text-gray-600 text-center">
            Get notified about our launch and exclusive updates
          </p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
          <Calendar className="w-8 h-8 text-black mb-2" />
          <h3 className="font-semibold text-gray-900 mb-1">Early Access</h3>
          <p className="text-sm text-gray-600 text-center">
            Be first in line for beta testing and early features
          </p>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
          <Users className="w-8 h-8 text-black mb-2" />
          <h3 className="font-semibold text-gray-900 mb-1">Community</h3>
          <p className="text-sm text-gray-600 text-center">
            Join our exclusive community of early adopters
          </p>
        </div>
      </motion.div>

      <motion.div
        className="border-t border-gray-200 pt-6"
        variants={itemVariants}
      >
        <p className="text-gray-500 text-sm mb-4">
          Want to register someone else or made a mistake?
        </p>
        <motion.button
          onClick={onReset}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Another Person
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
