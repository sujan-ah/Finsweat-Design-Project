import React from 'react'
import "./accordian.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Accordian = () => {
  return (
    <Accordion className='accordion'>

      <AccordionItem>
        <AccordionItemHeading className='heading'>
            <AccordionItemButton>
            <span className='number'>01</span>
            How much time does it take?
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading className='heading'>
            <AccordionItemButton>
            <span className='number'>02</span>
              What is your class naming convention?
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading className='heading'>
            <AccordionItemButton>
            <span className='number'>03</span>
              How do you communicate?
            <span><i class="fa-solid fa-plus"></i></span>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Accordian