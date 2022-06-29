import React from "react";
import "./header.css"
import SocialMedia from "./socialMedia";
import ME from "../../assets/me.png";


const Header = () =>{
    return(
        <section className='section' id='home'>
            <div className="container header__container">
                <div className="header__image ">
                        <img src={ME} className="me" alt=""/>
                </div>

                <div className="header__content">
                    <h1 className='text-uppercase'>
                        <span className="slider-text"> Hello, I am </span>
                        <span className="text-yellow"> Katerina Zhinkina</span>
                    </h1>
                    <p>I am a highly motivated developer with a passion for programming. In my work I am
                        responsible and purposeful. I put a lot of effort into constantly developing myself, reading a lot of books and articles.</p>
                    <p>I am ready to compensate for the lack of great experience with a great desire to program, to understand new technologies for myself,
                        to put as much effort into learning as I can. </p>
                    <p>I am open to work and will be happy to be part of a new team.</p>
                    <SocialMedia />
                </div>
            </div>
        </section>
    )
}

export default Header