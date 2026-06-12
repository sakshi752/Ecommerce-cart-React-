import React, { useState } from 'react'
import AccordionItem from '../Component/AccordionItem'

const About = () => {
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, especially single-page applications."
    },
    {
      id: 2,
      question: "What is a component?",
      answer:
        "A component is a reusable piece of UI that can have its own logic and state."
    },
    {
      id: 3,
      question: "What is state in React?",
      answer:
        "State is an object that holds data which can change over time and affects what is rendered on the screen."
    },
    {
      id: 4,
      question: "What is props?",
      answer:
        "Props are inputs to components. They allow data to be passed from parent to child."
    }
  ])
  const [activeId,seActiveId] = useState(null);

  const handleToggle = (id)=>{
    seActiveId(prev=>{
      if (prev === id) {
        return null;
      }else{
        return id;
      }
    })
  }
  
  return (
    <div className='w-full h-full max-w-md mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-white text-lg font-bold mb-5'>Accordian</h1>
      <div className='flex flex-col gap-3 bg-gray-400 p-3 rounded-md'>
      {accordionData.map(item=>{
        return (
          <AccordionItem key={item.id} id={item.id} question={item.question} answer={item.answer} activeId={activeId}  handleToggle = {handleToggle}/>
        )
      })}
      </div>

    </div>
  )
}

export default About
