import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"

const SocialMedia = () =>{
    return(
        <div className="header__socials">
            <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/zhinkina-katerina" target='_blank'><AiFillGithub/></a>
            <a href="https://t.me/ZhinkinaKaterina" target='_blank'><FaTelegramPlane/></a>
        </div>
    )
}

export default SocialMedia