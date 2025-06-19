'use client';

import React from 'react'
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs, FaGithub, FaBootstrap,
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const about = {
    title: 'About Me',
    description: "I am Gaurav Singh, a passionate and motivated fresher in the field of web development. With a strong foundation in both front-end and back-end technologies, I am dedicated to building efficient and scalable applications. My expertise spans a wide range of technologies, including Next.js, React.js, Node.js, and MongoDB. I am always eager to learn and grow in my career, with a focus on delivering impactful projects. Fluent in both English and Hindi, I am ready to take on new challenges in the tech industry.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Gaurav Singh"
        },
        {
            fieldName: "Phone No.",
            fieldValue: "(+91) 701 730 8602"
        },
        {
            fieldName: "Experience",
            fieldValue: "Fresher"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "E-Mail",
            fieldValue: "gm7017308@gmail.com"
        },
        {
            fieldName: "Language",
            fieldValue: "English, Hindi"
        },
    ]
}

const experience = {
    icon: '',
    title: 'Experience',
    description: "As a recent graduate, I bring a strong foundation in MERN stack development, with hands-on experience in building full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. My academic projects and personal initiatives have equipped me with the skills to create dynamic and responsive user interfaces, as well as robust backend services. I am eager to apply my knowledge and creativity in a professional setting to contribute to innovative and impactful projects.",
}

const education = {
    icon: "",
    title: "My Education",
    description: "A brief overview of my academic journey, showcasing my qualifications and institutions attended.",
    items: [
        {
            institution: "Divine Academy, Bulandshahr",
            degree: "Full Stack Web Developement",
            duration: "2023"
        },
        {
            institution: "Chaudhary Charan Singh University, Meerut",
            degree: "B.sc (Maths)",
            duration: "2022"
        },
        {
            institution: "Jaypee Vidya Mandir, Syana",
            degree: "12th",
            duration: "2018"
        },
        {
            institution: "Lilawati Convent School, Bulandshahr",
            degree: "10th",
            duration: "2016"
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "A comprehensive set of skills in modern web development, ranging from front-end to back-end technologies. I specialize in building full-stack applications using frameworks and libraries like Next.js, React.js, and Node.js. My expertise extends to working with databases such as MongoDB, and I have experience with state management using Redux and efficient styling with Tailwind CSS and Bootstrap. I am also proficient in TypeScript, JavaScript, GitHub, and core web technologies like HTML5 and CSS3.",
    skillList: [
        {
            icon: <RiNextjsFill />,
            name: "Next Js"
        },
        {
            icon: <FaNodeJs />,
            name: "Node Js"
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB"
        },
        {
            icon: <FaReact />,
            name: "React Js"
        },
        {
            icon: <TbBrandRedux />,
            name: "Redux Js"
        },
        {
            icon: <SiExpress />,
            name: "Express Js"
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaGithub />,
            name: "GitHub"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap"
        },
        {
            icon: <FaCss3Alt />,
            name: "CSS 5"
        },
        {
            icon: <FaHtml5 />,
            name: "HTML 5"
        },
    ]
}

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }} className='min-h-[57vw] flex items-center justify-center py-10 lg:py-0'>
            <div className="conatiner mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col lg:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full '>
                        <TabsContent value="experience" className="w-full ">
                            <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0 '>{experience.description}</p>
                            </div>
                            {/* <ScrollArea className="h-[400px]">
                <ul>

                </ul>
              </ScrollArea> */}
                        </TabsContent>
                        <TabsContent value="education" className="w-full ">
                            <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0 '>{education.description}</p>
                            </div>
                            <ScrollArea className="h-[400px]">
                                <ul className='grid grid-col-1 lg:grid-col-2 gap-[30px]'>
                                    {
                                        education.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                <span className='text-accent '>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3 '>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full ">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0 '>{skills.description}</p>
                                </div>
                            </div>
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]'>
                                {skills.skillList.map((skill, index) => {
                                    return <li className='w-[170px]' key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className='capitalize'>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </TabsContent>
                        <TabsContent value="about" className="w-full lg:w-[650px] text-center lg:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold '>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gay-y-6 max-w-[620px] mx-auto lg:mx-0'>
                                    {
                                        about.info.map((item, index) => {
                                            return <li key={index} className='flex items-center ju lg:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume