import React from 'react'
import {FaGithub} from "react-icons/fa";
import Icon from './Icon';
import { ExternalLink } from 'react-external-link';
import { UserContext } from "../App";
import { useContext, useEffect } from "react";

export const About = () => {
    const GithubBackground="linear-gradient(to right,#171515 0%, #171515 100%)"
    const {state,dispatch} = useContext(UserContext);
    useEffect(() =>{
      dispatch({type:"USER",payload : true});
      console.log(state);
    }, [])
    
    return (
        <div className = "mainAbout">
            <div className="IconsContainer">
                <h1>Ankit Kushawaha</h1>
                <ExternalLink href="https://github.com/ankitkushawaha1000" >
                    <Icon color={GithubBackground}>
                        <FaGithub />
                    </Icon>
                </ExternalLink>                  
            </div>
            <div className="IconsContainer">
                <h1>Satvik Sinha</h1>
                <ExternalLink href="https://github.com/Satvik-Sinha" >
                    <Icon color={GithubBackground}>
                        <FaGithub />
                    </Icon>
                </ExternalLink> 
            </div>
        </div>
    )
}

export default About;


