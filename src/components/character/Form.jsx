"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';
import AttrSkills from './AttrSkills';
import { AttrBlock } from '../../app/data';

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

const container = {
  hidden: { opacity: 0 },
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
  let [attrPoints, setAttrPoints] = useState(18);
  const [attributes, setAttributes] = useState(AttrBlock);
  let [skillPoints, setSkillPoints] = useState(7);

  const onSubmit = (data) => {
    const formData = {
      ...data,
      attributes,
    }
    toast.success('Character created successfully!');
    reset();
    console.log('submitted', formData);
  };

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

        <motion.input variants={item} type="text" placeholder="Character Type" {...register("type", {
          required: "type required...",
          minLength: {
            value: 2,
            message: "Character type is empty..."
          }
        })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.name && <span className="inline-block self-start text-accent">{errors.type.message}</span>
        }
        <motion.input variants={item} type="text" placeholder="Name" {...register("name", {
          required: "name required...",
          minLength: {
            value: 1,
            message: "Name field is empty..."
          }
        })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.email && <span className="inline-block self-start text-accent">{errors.name.message}</span>
        }
        <motion.input variants={item} type="text" placeholder="Species" {...register("species", {
          required: "please enter a species...",
          minLength: {
            value: 1,
            message: "Species field is empty..."
          }
        })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.message && <span className="inline-block self-start text-accent">{errors.species.message}</span>
        }
        <motion.input
          variants={item}
          type="flaot"
          placeholder="Height (meters)" {...register("height", { required: true })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.name && <span className="inline-block self-start text-accent">{errors.height.message}</span>
        }

        <motion.input
          variants={item}
          type="number" placeholder="Age" {...register("age", { required: true, max: 900, min: 5 })}
          className="w-full p-2 rounded-md shadow-lg text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.name && <span className="inline-block self-start text-accent">{errors.age.message}</span>
        }

        <motion.textarea
          variants={item}
          placeholder='Physical description' {...register("description", {
            required: "please enter a character description...",
            maxLength: {
              value: 2500,
              message: "Message should be less than 2500 characters..."
            },
            minLength: {
              value: 10,
              message: "Message should be more than 10 characters..."
            }
          })}
          className="w-full p-2 rounded-md shadow-lg text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg-alt"
        />
        {
          errors.message && <span className="inline-block self-start text-accent">{errors.description.message}</span>
        }

        <AttrSkills 
          attributes={attributes}
          setAttributes={setAttributes}
          attrPoints={attrPoints}
          setAttrPoints={setAttrPoints}
          skillPoints={skillPoints}
          setSkillPoints={setSkillPoints}
        />

        <motion.input variants={item} type="submit" value="Submit details"
          className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer'
        />
      </motion.form>
    </>

  );
}