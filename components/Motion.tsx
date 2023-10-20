"use client"

import { motion } from 'framer-motion';
export const EaseInAnimation = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export const RightFadeIn = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {children}
      </motion.div>
    );
  };
  
  export const LeftFadeIn = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {children}
      </motion.div>
    );
  };
  
export const ScaleAnimation = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}  
      </motion.div>
    );
  };

  export const RotateAnimation = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (

      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {children}
      </motion.div>
    );
  };

  export const PopAnimation = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };

  export const SequenceAnimation = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-white'
        >
          {children}
        </motion.h1>
      </motion.div>
    );
  };

