import React from "react";
import "./skills.css"
import {SiPython} from "react-icons/si";
import {SiDjango} from "react-icons/si";
import {MdOutlineWeb} from "react-icons/md";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {AiOutlineApi} from "react-icons/ai";
import {SiCelery} from "react-icons/si";
import {SiHeroku} from "react-icons/si";
import {BsGithub} from "react-icons/bs";
import {FaReact} from "react-icons/fa";
import {FaFlask} from "react-icons/fa";


const Skills = () =>{
    return(
        <section className='slide-3 section' id='skills'>
            <div className="container skills__container">
                <h5>What skills I have</h5>
                <h2>My experience</h2>
                <div className="skills__content">
                        <div className="skills__cards">

                        <article className='skills__card'>
                            <SiPython className='skills__icon' />
                            <h5>Python</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <SiDjango className='skills__icon' />
                            <h5>Django</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <FaFlask className='skills__icon' />
                            <h5>Flask</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <AiOutlineApi className='skills__icon' />
                            <h5>Api</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <MdOutlineWeb className='skills__icon' />
                            <h5>Html/Css</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <FaReact className='skills__icon' />
                            <h5>React</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <AiOutlineConsoleSql className='skills__icon' />
                            <h5>SQL</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <SiCelery className='skills__icon' />
                            <h5>Celery/Redis</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <SiHeroku className='skills__icon' />
                            <h5>Heroku</h5>
                            <small>1 year Experience</small>
                        </article>

                        <article className='skills__card'>
                            <BsGithub className='skills__icon' />
                            <h5>Github</h5>
                            <small>1 year Experience</small>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills