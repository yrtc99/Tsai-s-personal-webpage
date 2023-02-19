import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    email: string,
    name: string,
    subject:string,
    message:string,
  };

export default function ContectMe({}:Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:yrtc99@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#fe21d2]/50 underline'>Lets Talk</span>
            </h4>

            <div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#fe21d2] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>yrtc99@gmail.com</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#fe21d2] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>

        </div>

    </div>
  )
}