import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

export default function ContactUs () {

  const [send, setSend] = useState("Send");
    
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('GmailAmol', 'template_llhltb9', form.current, 'user_ZtHtMs1pESfGGjpRkTzcJ')
        .then((result) => {
            setSend("Thanks");
          console.log(result.text);
      }, (error) => {
            console.log(error.text);
            setSend("Try again");
        });
        
      
  };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <Cont>
                <Left>
                    <p>Name</p>
                <Inp><input type="text" name="from_name" placeholder="Name" required="true"/></Inp>
                <p>Mail *</p>
                <Inp><input type="email" name="user_email" placeholder="Email"/></Inp>
                <p>Title</p>
                <Inp><input type="text" name="subject" placeholder="Subject"/></Inp>
                
            </Left>
            <Right>
                    <Inp><p>Write feedback..</p>
                    <textarea name="message" placeholder="Say hi..."/>
                    </Inp>
                    <Btn>
                        <button onClick={sendEmail}>{send}</button>
                    </Btn>
            </Right>
            </Cont>

        </form>
  );
};


//-------styled-components------

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 7.8rem 0;
    background-color: #cc0000b8;
    color: #2c2c2c;
    @media (max-width: 600px) {
        padding: 3rem 0;
        margin-top: 70px;
    }

`
const Left = styled.div`
margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        color: white;
        margin-left: 0.5rem;
    }
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Inp = styled.div`
margin: 1rem auto;
 p{
      color: white;
        margin-left: 0.5rem;
         margin-top: -0.9rem;
         
 }
    input{
        font-size: 1rem;
        text-indent: 0.5rem;
        height: 3rem;
        width: 25rem;
        outline: none;
        border-radius: 7px;
        :hover {
            outline: 1px solid #ffffff;
        }
        ::placeholder{
            font-size: 10px;
            color: #c2c0c0;
            /* color: #ffffff; */
        }
        @media (max-width: 600px) {
        width: 20rem;
        }
    }
    textarea{
        height: 9rem;
        margin-top: 15px !important;
        border-radius: 7px;
        width: 30rem;
        margin: auto;
        padding: 1rem 0;
        border-right: 1px solid black;
        border-top: 1px solid gray;
         border-bottom: 1px solid gray;
        border-left: 1px solid black;
        :hover {
            outline: 1px solid #ffffff;
        }
        font-size: 1rem;
        text-indent: 1rem;
        font-family: sans-serif;
        @media (max-width: 600px) {
        width: 20rem !important;
        }
       @media (max-width: 768px) {
        width: 20rem !important;
        margin: auto;
        }
    }
`

const Btn = styled.div`
margin-bottom: 1rem;
margin: auto;
    button{
        /* font-family: 'Poppins', sans-serif; */
        border-radius: 7px;
        text-align: center;
        height: 3rem;
        width: 30rem;
        cursor: pointer;
justify-content  :center ;
        padding: 0.5rem 0.5rem;
        font-size: 1rem;
        background-color: white;
        border: none;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
        :hover{
        box-shadow: rgba(62, 62, 105, 0.15) 0px 3px 6px 0px, rgba(37, 37, 37, 0.05) 0px 1px 3px 0px;
        background-color: #F5C6A5;
        color: white;
        transition: 0.4s;
        font-weight: 700;
        }
        a{
            text-decoration: none;
            color: #1f1f1f;
        }
        @media (max-width: 600px) {
        width: 20rem;
        }
         @media (max-width: 768px) {
        width: 20rem;
        }
    }   
`

