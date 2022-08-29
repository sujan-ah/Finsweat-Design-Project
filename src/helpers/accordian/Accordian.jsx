import React from 'react'
import './accordian.css'

const Accordian = ({ open, handleOpen, index, heading, details }) => {
  return (
    <div 
      className='accordian-item' 
      onClick={()=> handleOpen(index)}
    >
      <h2>
        <span className='number'>
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>

        {heading}

        <span className='icon'>
          {open
          ?
            <i class="fa-solid fa-xmark"></i>
          :
            <i class="fa-solid fa-plus"></i>
          }
          
          
        </span>
       
      </h2>
      
      {open && 
        <p>
          <div
            dangerouslySetInnerHTML={{__html: details}}
          />
        </p>
      }
    </div>
  )
}

export default Accordian