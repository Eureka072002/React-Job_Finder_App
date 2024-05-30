import dayjs from 'dayjs';
import React, { useState } from 'react';


function Cards(props) {

    // const skills = ["JavaScript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');


  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 bg-zinc-100 rounded-md border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <p className='text-blue-400'>Skills Required</p>
                <div className='flex item-center gap-2'>
                    {props.skills.map((skill, i) => (
                    <p key= {i} className='text-zinc-500 py-1 px-2 rounded-md border border-black hover:border-yellow-600 hover:text-yellow-600'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-500'>Posted {diffInDays > 1 ? `${diffInDays} days`: `${diffInDays} day`} ago</p>
                <a href={props.job_link}>
                <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md hover:border-red-600 hover:text-red-600'>Apply</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Cards