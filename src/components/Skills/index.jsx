/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills } from '../../constants';

const SkillCard = ({skill}) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={skill.contentStyle}
			contentArrowStyle={skill.contentArrowStyle}
			iconStyle={skill.iconStyle}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
          <img
            src={skill.icon}
            alt={skill.title}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
			}
		>
			<h3 className="vertical-timeline-element-title text-xl font-extrabold">{skill.title}<span className='font-light'> Platzi-Escuela de desarrollo web</span></h3>
			<h4 className="vertical-timeline-element-subtitle">{skill.subtitle}</h4>
		</VerticalTimelineElement>
	)
}

const Skills = () => {  
  
	return (
		<div className='mb-12 flex flex-col justify-center items-center'>
			<h2 className='w-5/6 text-[50px] text-center font-black mb-12'>Tecnologias y herramientas</h2>
			<VerticalTimeline>
				{skills.map((skill) => (
				<SkillCard
				key={skill.title}
				skill={skill}
				/>
				))}
				<VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
				/>
			</VerticalTimeline>
		</div>
	)
}
  
export {Skills}