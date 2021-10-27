import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import Input from "./Input"
import Button from './Button';
import Icon from './Icon';

//import {Usercontext} from "../App";

export const Login = () => {

   // const {state,dispatch} =  useContext(Usercontext);
    
    return (
        
            
            <section className="signup_signin">
           <MainContainer>
               <WelcomeText>
               Login
               </WelcomeText>

               <InputContainer>
                   <Input type="text" placeholder="Email" />;
                   <Input type="password" placeholder="Password" />;
               </InputContainer>

               <ButtonContainer>
                   <Button content="Sign In" />
               </ButtonContainer>

               <LoginWith>
                   or Login With
               </LoginWith>
               

                <IconsContainer>
                    
                </IconsContainer>

                <ForgotPassword>Forgot Password ?</ForgotPassword>
           </MainContainer>
            
            
            </section>
    )
}

const MainContainer = styled.div`
display : flex;
align-items : center;
flex-direction : column;
height : 80vh;
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
    margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div `
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div `
    margin: 1rem 0 2rem 0;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const LoginWith = styled.h5 `
cursor: pointer;
`;

const HorizontalRule = styled.hr `
width: 90%;
 height: 0.3rem;
 border-radius: 0.8rem;
 border: none;
 margin: 1.5em 0 1rem 0;
 background: linear-gradient(to right, #14163c 0%, #03217b 79%);
 backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div `
    display: flex;
 justify-content: space-evenly;
 margin: 2rem 0 3rem 0;
 width: 80%;
`;

const ForgotPassword = styled.h6 `
    cursor: pointer;
`;

export default Login;