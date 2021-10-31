import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import Input from "./Input"
import Button from './Button';
import Icon from './Icon';



export const Signup = () => {
    
    return (
        
            
        <section className="signup_signin">
           <MainContainer>
               <WelcomeText>
               Register
               </WelcomeText>

               <InputContainer>
                   <Input type="text" placeholder="Name" />
                   <Input type="text" placeholder="Email" />
                   <Input type="text" placeholder="Username" />
                   <Input type="password" placeholder="Password" />
                   <Input type="password" placeholder="Confirm Password" />
               </InputContainer>

               <ButtonContainer>
                   <Button content="Sign Up" />
               </ButtonContainer>

           </MainContainer>
        </section>
    )
}

const MainContainer = styled.div`
display : flex;
align-items : center;
flex-direction : column;
height : 90vh;
width : 30vw;
background:rgba(255,255,255,0.15);
box-shadow : 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter : blur(8.5px);
border-radius : 10px;
color : #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;
`;

const WelcomeText = styled.h2`
    margin: 2rem 0 2rem 0;
`;

const InputContainer = styled.div `
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const ButtonContainer = styled.div `
    margin: 1rem 0 2rem 0;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export default Signup;