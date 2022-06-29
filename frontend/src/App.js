import React, {useState, useEffect, Component} from 'react';
import Header from "./components/header/header";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import Contacts from "./components/contacts/contacts";
import ReactFullpage from '@fullpage/react-fullpage';


const fullpageOptions = {
    css3:true,
    navigation:true,
    navigationTooltips: ["Hello", "About me", "My skills", "Portfolio", "Contact me"],

};

function App() {
        return (
            <ReactFullpage
                {...fullpageOptions}
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Header/>
                            <About/>
                            <Skills/>
                            <Portfolio/>
                            <Contacts/>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
);
}
export default App;