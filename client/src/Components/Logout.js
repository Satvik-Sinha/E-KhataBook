import React,{useContext} from 'react'
import {useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { UserContext } from "../App";

const Logout = () => {

    const {state,dispatch} = useContext(UserContext);

    const history =useHistory();
    const ChangeNavbar = async(e) =>{
        
        e.preventDefault();
       
            dispatch({type:"USER",payload : false})
            window.alert("Logout Successful");
            console.log("Logout Successful");
            history.push("/");
    }


    return (
        <>
        <form className="signup_signin" method="POST">
        <MainContainer>
        <WelcomeText>
            Are you Sure
            </WelcomeText>
            <ButtonContainer>
               <input type="submit" name="signout" id="signout" 
                   value="Yes"  onClick={ChangeNavbar}/>
               </ButtonContainer>
        </MainContainer>
        </form>
        </>
    )
}
const MainContainer = styled.div`
display : flex;
align-items : center;
flex-direction : column;
height : 30vh;
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
    margin: 2rem 0 1rem 0;
`;
const ButtonContainer = styled.div `
    margin: 1rem 0 2rem 0;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export default Logout
