import React,{useState} from 'react'
import { useHistory} from 'react-router-dom'
import styled from 'styled-components';

export const Signup = () => {
    
    const [user,setUser] = useState({name:"" ,email:"",username:"",password:"",cnfPass:""});

    const history =useHistory();
    let name,value;

    const handleInputs = (e) =>{
        name = e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }

    const PostData = async(e) =>{
        console.log(user);
        e.preventDefault();
        const {name,email,username,password,cnfPass}=user;

        if(password.length < 6){
            alert("please enter password of length more than 6 char!")
        }else{
            if(password === cnfPass){
                const res = await fetch("/api/users/register" , {
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name,email,username,password
                })
                });

                const data= await res.json();

                if(res.status===422 || !data){
                    window.alert("Invalid Registration");
                    console.log("Invalid Registration");}
                else{
                    window.alert("Registration Successful");
                    console.log("Registration Successful");
                    history.push("/Login");
                }
            }else{
                alert("please enter correct passwords!");
            }
        }
       
    }

    return (
       
        <form className="signup_signin" method="POST">
           <MainContainer>
               <WelcomeText>
               Register
               </WelcomeText>

                
               <InputContainer >
               
                   <input type="text" 
                   name="name"
                   id="name"
                   value={user.name}
                   onChange={handleInputs}
                   placeholder="Name" />
                
                   <input type="text" 
                   value={user.email}
                   name="email"
                   id="email"
                   onChange={handleInputs}
                   placeholder="Email" />

                   <input type="text" 
                   value={user.username}
                   name="username"
                   id="username"
                   onChange={handleInputs}
                   placeholder="Username" />

                   <input type="password" 
                   value={user.password}
                   name="password"
                   id="password"
                   onChange={handleInputs}
                   placeholder="Password" />

                   <input type="password" 
                   value={user.confirmpassword}
                   name="cnfPass"
                   id="cnfPass"
                   onChange={handleInputs}
                   placeholder="Confirm Password" />
                  
               </InputContainer>

                <ButtonContainer>
                   
                   <input type="submit" name="signup" id="signup" 
                   value="Sign Up"  onClick={PostData}/>
               </ButtonContainer> 
               
               {/* <div >
                   <input type="submit" name="signup" id="signup" 
                   value="register" onClick={PostData}/>
               </div> */}
               

               
  


           </MainContainer>
        </form>

       
        
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