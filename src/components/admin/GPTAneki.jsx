import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import Loader2 from "../calc/Loader2";
import OpenAI from 'openai';
import axios from "axios";
import Gravity from "../Gravity";
import DocumentToIframe from "../DocumentToIframe";
import Image from "react-bootstrap/Image";
import whiteSVG from "../whiteSVG.svg";
import Form from "react-bootstrap/Form";

function GPTAneki() {
    // const [input, setInput] = useState('Напиши анек або жарт про printing servise українською мовою');
    // const [response, setResponse] = useState('');
    const [show, setShow] = useState(false);
    // const [load, setLoad] = useState(false);
    //
    // const handleInputChange = (event) => {
    //     setInput(event.target.value);
    // };
    //
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    //
    // const handleSubmit = async () => {
    //     setShow(true);
    //     setLoad(true);
    //     const apiKey = 'sk-key'; // Замініть на ваш API ключ від OpenAI
    //     const openai = new OpenAI({
    //         apiKey: apiKey,
    //         dangerouslyAllowBrowser: true
    //     });
    //     try {
    //         const response = await openai.chat.completions.create({
    //             model: 'gpt-3.5-turbo',
    //             messages: [{ role: 'user', content: input }],
    //         });
    //
    //         setResponse(response.choices[0].message.content);
    //         setLoad(false);
    //     } catch (error) {
    //         console.error('Помилка при запиті до OpenAI:', error);
    //         setResponse('Помилка при запиті до OpenAI:', error);
    //         setLoad(false);
    //     }
    // };

    return (
        <div>
            <Button variant="" size="sm" className="adminFontTable borderR0" onClick={handleShow}>
                <Loader2/>
            </Button>

            {show === true ? (
                <div>
                    <div style={{
                        height: '90vh',
                        zIndex: "999",
                        position: "fixed",
                        background: "#dcd9ce",
                        left: "5vw",
                        bottom: "5vh",
                        margin: "auto",
                        width: "90vw"
                    }} className="shadow-lg">
                        <DocumentToIframe/>
                    </div>
                    <div style={{
                        width: "100vw",
                        zIndex: "1",
                        height: "100vh",
                        background: "black",
                        opacity: "20%",
                        position: "fixed",
                        left: "0",
                        bottom: "0"
                    }} onClick={handleClose}></div>
                </div>
            ) : (
                <div className="d-none"></div>
            )}
        </div>
    );
}

export default GPTAneki;