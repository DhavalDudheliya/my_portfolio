import React from 'react'
import Container from '../core/Container'
import { EXPERIENCES } from '@/config/Experiences'
import { ExperienceItem } from './ExperienceItem'

const Experiences = () => {
    return (
        <Container className='mt-20 mx-auto'>
            <h2 className='text-3xl font-bold mb-12'>Experiences</h2>

            <div>
                {EXPERIENCES.map((experience) => (
                    <ExperienceItem key={experience.id} experience={experience} />
                ))}
            </div>
        </Container>
    )
}

export default Experiences