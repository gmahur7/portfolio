'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
    return (
        <div className="w-full h-full relative ">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: 'easeInOut' } }} className='w-[298px] h-[298px] lg:w-[368px] lg:h-[368px] dark:mix-blend-lighten mix-blend-darken absolute top-[1px] left-[1px] lg:top-[-17px] lg:left-[-28px]'>
                    <Image src='/assets/images/image.png' priority quality={100} fill alt="Gaurav Singh" className="object-contain" />
                </motion.div>
                <motion.svg className="w-[300px] xl:[506px] h-[300px] x:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{strokeDasharray:"24 10 0 0"}} animate={{strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],rotate:[120,360]}} transition={{duration:20,repeat:Infinity,repeatType:"reverse"}}>
                    </motion.circle>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo