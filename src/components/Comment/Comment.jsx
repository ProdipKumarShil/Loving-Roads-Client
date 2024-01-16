import React from 'react'
import Button from '../Button';

const Comment = () => {
  return (
    <div>
      <h1 className='hidden text-2xl font-bold text-slate-700'>No Comments</h1>
      <h1 className=' text-2xl font-bold text-slate-700 mb-4'>Comments(4)</h1>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <form action="">
        <textarea className='w-full border border-black' name="" id="" cols="30" rows="8"></textarea>
        <Button className="block ml-auto" text="Comment" />
      </form>
    </div>
  )
}

export default Comment;

const SingleComment = () => {
  return(
    <div className="text-base mb-10 ">
      <p className='font-bold'>John Duo</p>
      <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium tempore amet repellendus explicabo esse unde.</p>
    </div>
  )
}