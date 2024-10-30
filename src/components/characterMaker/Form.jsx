"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion'; 
import { Toaster, toast } from 'sonner';

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1.5,
    }
  }
};


export default function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  return (
    <>
      <Toaster richColors="true" />
      <motion.form 
        variants={container}
        initial='hidden'
        animate='show'
      
      onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input variants={item} type="text" placeholder="name" {...register("name", {
          required: "name required...",
          minLength: {
            value: 1,
            message: "Name field is empty..."
          }
        })}
          className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span>
        }
        <motion.input  variants={item}type="email" placeholder="email" {...register("email", {
          required: "email required...",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address..."
          }
        })}
          className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
        }
        <motion.textarea variants={item} placeholder='message' {...register("message", {
          required: "please enter a message...",
          maxLength: {
            value: 1500,
            message: "Message should be less than 500 characters..."
          },
          minLength: {
            value: 11,
            message: "Message should be more than 11 characters..."
          }
        })}
          className="w-full p-2 rounded-md shadlow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.message && <span className="inline-block self-start text-accent">{errors.message.message}</span>
        }
        <motion.input variants={item} type="submit" value="Transmit Message"
          className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer'
        />
      </motion.form>
    </>

  );
}