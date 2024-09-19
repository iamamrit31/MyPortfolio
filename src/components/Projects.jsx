
import React from "react";
import weather from '../assets/weather.png'
import tictactoe from '../assets/tictactoe.png'
import lab from '../assets/lab.png'
import gametheory from '../assets/gametheory.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Weather App' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={weather} alt="" />
            </a>}
            {title=='VR Chemistry Lab' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={lab} alt="" />
            </a>}
            {title=='Tic Tac Toe' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={tictactoe} alt="" />
            </a>}
            {title=='Data Analysis using Game Theory' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={gametheory} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Weather App',
        description:'This weather app fetches real-time weather data for various cities using the OpenWeatherMap API, displaying details such as temperature, humidity, wind speed, and more. It allows users to view weather information of cities with just a click.',
        image: {weather},
        git:'https://github.com/iamamrit31/WeatherApp.git',
        technologies:['JavaScript' ,'HTML' , 'CSS']
    },
    {
        title:'VR Chemistry Lab',
        description:'The VR Chemistry Lab is an immersive application that runs on meta quest devices and simulates chemistry experiments, allowing users to explore molecular structures in a 3D virtual environment.',
        image: {lab},
        git:"https://github.com/iamamrit31/VRChemApp.git",
        technologies:[ 'C#', 'UnityEngine']
    },
    
    {
        title:'Tic Tac Toe',
        description:'A classic Tic-Tac-Toe game built using JavaScript, with dynamic player interaction and automatic winner detection. It features a clean UI and allows users to reset the game after each round.',
        image: {tictactoe},
        git:"https://github.com/iamamrit31/Tic-Tac-Toe.git",
        technologies:[ 'JavaScript', 'HTML', 'CSS']
    },
    {
        title:'Data Analysis using Game Theory',
        description:'Developed a Business Rivalry Simulation based on the Prisoners Dilemma, modeling strategic competition between iOS and Android. Utilized Python, NumPy, and Matplotlib to simulate and visualize long-term competitive dynamics.',
        image: {gametheory},
        git:"https://github.com/iamamrit31/Market-Analysis-using-Game-Theory.git",
        technologies:[ 'Python', 'NumPy', 'Matplotlib']
    }
    
    
]

export default Projects
