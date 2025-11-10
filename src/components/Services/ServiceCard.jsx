import React from 'react'

const ServiceCard = ({icon,title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 border-2
                    border-neutral-700 hover:bg-neutral-700 hover:text-white
                    transition duration-300 ease-in-out rounded-md cursor-pointer'>
       <p>{icon}</p> 
       <h1 className='text-yellow-500 text-3xl font-bold'>{title}</h1>
       <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus est error dicta voluptas 
        commodi illo at natus nobis odit aspernatur blanditiis ullam eaque quasi quis odio,
         in et obcaecati repellat!</p>
    </div>
  )
}

export default ServiceCard