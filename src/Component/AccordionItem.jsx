import React from 'react'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ id, question, answer, activeId,handleToggle }) => {
  return (
    <div className='flex flex-col gap-2 w-full max-w-md'>
      <div className='flex justify-between items-center'>
        <p>{question}</p>
        <button type='button' onClick={()=>handleToggle(id)}>
          {
            id === activeId ? <IoIosArrowUp />:<IoIosArrowDown />
          }
          
        </button>
      </div>
      {id === activeId && <div>{answer}</div>}

    </div>
  )
}

export default AccordionItem
