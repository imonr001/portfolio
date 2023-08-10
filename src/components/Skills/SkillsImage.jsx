import React from 'react'




function SkillsImage(props) {
  return (
      <div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={props.skill} alt={props.name} />
              <p className='my-4'>{props.name}</p>
          </div>
    </div>
  )
}

export default SkillsImage