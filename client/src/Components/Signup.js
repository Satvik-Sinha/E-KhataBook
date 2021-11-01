import React,{useState} from 'react'
import { useHistory} from 'react-router-dom'
import styled from 'styled-components';

import Input from "./Input"
import Button from './Button';
//import Icon from './Icon';



export const Signup = () => {
    
    const [user,setUser] = useState({name:"" ,email:"",username:"",password:"",confirmpassword:""});

    const history =useHistory();
    let name,value;
    const handleInputs =(e) =>{
        console.log(e);
        name = e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async(e) =>{
        console.log("Hi");
        e.preventDefault();
        const {name,email,username,password,confirmpassword}=user;

        const res = await fetch("/Signup" , {
            method : "POST",
            headers:{
                "Content-Type" : "appliction/json"
            },
            body : JSON.stringify({
                name,email,username,password,confirmpassword
            })
        });

        const data= await res.json();

        if(res.status===422 || !data)
       { window.alert("Invalid Registration");
        console.log("Invalid Registration");}
        else{
            window.alert("Registration Successful");
            console.log("Registration Successful");
            history.push("/Login");
        }
    }

    return (
        
            
        <section className="signup_signin">
           <MainContainer>
               <WelcomeText>
               Register
               </WelcomeText>

                
               <InputContainer >
               <form>
                   <Input type="text" 
                   value={user.name}
                   onChange={handleInputs}
                   placeholder="Name" />

                   <Input type="text" 
                   value={user.email}
                   onChange={handleInputs}
                   placeholder="Email" />

                   <Input type="text" 
                   value={user.username}
                   onChange={handleInputs}
                   placeholder="Username" />

                   <Input type="password" 
                   value={user.password}
                   onChange={handleInputs}
                   placeholder="Password" />

                   <Input type="password" 
                   value={user.confirmpassword}
                   onChange={handleInputs}
                   placeholder="Confirm Password" />
                   </form>
               </InputContainer>

               <ButtonContainer>
                   <Button content="Sign Up" onClick = {PostData} />
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