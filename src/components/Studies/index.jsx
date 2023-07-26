/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { FaChevronDown } from 'react-icons/fa';
import { estudies } from "../../constants";

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text, title, date, city } = faq;

  return (
    <div id="studies" className="border border-gray-300 rounded-xl mb-3 overflow-hidden">
      <div>
        <div
          className={`flex items-center cursor-pointer justify-between p-3 ${
            active === id ? "bg-zinc-800" : "bg-gray-300"
          }`}
          onClick={() => handleToggle(id)}
        >
          <h5 className={`text-xl font-medium ${
            active === id ? "text-white" : "text-primary"
          } font-semibold`}>{header}</h5>
          <FaChevronDown
            className={`w-6 h-6 ${
              active === id ? "transform rotate-180 text-white" : "text-black"
            }`}
          />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`overflow-hidden ${
          active === id ? "h-auto" : "h-0"
        } transition-height ease-in-out duration-350`}
      >
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-bold text-white leading-6">{title}</p>
          <p className="text-lg font-light text-white/80 leading-6">{city}</p>
          <p className="text-lg font-light text-white/80 leading-6">{date}</p>
          <p className="text-sm font-normal text-white/50 leading-6">{text}</p>
        </div>
      </div>
    </div>
  )
}

const Studies = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
      if (active === index) {
          setActive(null);
      } else {
          setActive(index);
      }
  }

  return (
    <div className="w-5/6 shadow-md bg-transparent rounded mb-14 overflow-hidden">
      <h2 className="text-center md:text-start text-[50px] font-black mb-3">Mis Estudios</h2>
      <div className="w-full">
        {estudies.map((faq, index) => (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        ))}
      </div>
    </div>
  )
}

export {Studies}