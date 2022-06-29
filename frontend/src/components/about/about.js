import React from "react";
import "./about.css"
import image from '../../assets/me-about.jpg'
import CV from "../../assets/cv.pdf";


const About = () =>{
    return(
        <section className='slide-2 section' id='about'>
            <div className="container about__container">
                <div className="about__content">
                    <h5 className='text-uppercase'>Who am I</h5>
                    <h2 className='text-uppercase'>About me and my experience</h2>
                    <p>I am constantly developing and studying the materials of various courses.</p>
                    <p>So, I studied Python using Yandex.Practical materials, and there I got my first experience with Django.
                        After the course, I had a lot of questions about how everything works, and I found answers to them in the materials of the Digitalize course.</p>
                    <p>Since I set myself the goal of becoming a Django developer, I actively improve my skills (I am studding course Coding For Entrepreneurs) and also try to learn related technologies. Of course, I know the provisions of the OOP.</p>
                    <p>I have experience of code management via system version control (GIT).</p>
                    <p>Previously, I worked as a freelancer, and therefore I have good skills in tasks with data parsing and scraping. Also, while freelancing, I actively worked with the REST API, I understand how the HTTP protocol works.
I have experience with SQL and NOSQL databases.
I understand of WEB technologies such as JavaScript, HTML5, CSS3. I independently and quickly got acquainted with React, on which this application is written.</p>
                    <p>But I pay the most attention to the backend. I am familiar with Flask, but I have the most experience with the Django framework.</p>
                    <div className="cta">
                        <a href={CV} download className='btn'>Download CV</a>
                        <a href="#contacts" className='btn btn-primary'>Let`s talk</a>
                    </div>
                </div>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About