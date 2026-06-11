import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({id,question,answer}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <p>{question}</p>
        <button>
            <IoIosArrowDown/>
        </button>
      </div>
      <div>{answer}</div>
    </div>
  )
}

export default AccordionItem
