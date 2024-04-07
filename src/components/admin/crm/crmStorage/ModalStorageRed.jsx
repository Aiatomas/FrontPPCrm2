import React, {useCallback, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import redIcon from '../../../redIcon.svg';
import Loader from "../../../calc/Loader";
import Image from "react-bootstrap/Image";
import whiteSVG from "../../../whiteSVG.svg";

const ModalStorageRed = ({
                             tableName,
                             item,
                             tablPosition,
                             setData,
                             inPageCount,
                             currentPage,
                             setPageCount, itemData, dataTypeInTable, data, setInPageCount, setCurrentPage, key, pageCount
                         }) => {
    const [show, setShow] = useState(false);
    const [modalInput, setModalInput] = useState(itemData);
    const [modalStyle, setModalStyle] = useState({
        zIndex: "999",
        position: "fixed",
        background: "#dcd9ce",
        top: `${0}px`,
        left: `${0}px`
    });
    const [load, setLoad] = useState(false);

    const handleCloseModal = useCallback(() => {
        setShow(false);
    }, []);

    const handleOpenModal = useCallback((event) => {
        event.preventDefault();
        setModalStyle({
            zIndex: "999",
            position: "fixed",
            background: "#dcd9ce",
            top: `${event.pageY}px`,
            left: `${event.pageX}px`
        });
        setShow(true);
        setModalInput(itemData)
    }, []);

    // useEffect(() => {
    //     setModalInput(itemData)
    // }, [itemData]);

    // const handleOpenModal = useCallback((event) => {
    //     event.preventDefault();
    //     setModalStyle({
    //         zIndex: "999",
    //         position: "fixed",
    //         background: "#dcd9ce",
    //         top: `${event.pageY}px`,
    //         left: `${event.pageX}px`
    //     });
    //     setShow(true);
    // }, []);

    let saveThis = (event) => {
        let data = {
            tableName: tableName,
            id: item.id,
            tablePosition: tablPosition,
            input: modalInput,
            inPageCount: inPageCount,
            currentPage: currentPage,
        }
        if (modalInput === "") {
            data.input = 0
        }
        console.log(data);
        setLoad(true)
        axios.post(`admin/redintable`, data)
            .then(response => {
                console.log(response.data);
                setData(response.data)
                setPageCount(Math.ceil(response.data.count / inPageCount))
                setLoad(false)
                setShow(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // if(show === true){
    //     return (
    //         <th className="adminFontTable redStorageItem"
    //              style={{width: "100%", height: "100%", border: "solid 1px #cccabf"}} onClick={handleOpenModal}>
    //             {itemData}
    //             <img src={redIcon} alt="red" className="redIcon"/>
    //         </th>
    //     )
    // }
    //
    // return (
    //     <th className="adminFontTable redStorageItem">
    //         {itemData}
    //         <img src={redIcon} alt="red" className="redIcon"/>
    //
    //         <div style={modalStyle} className="shadow-lg">
    //             <div style={{
    //                 // height: '90vh',
    //                 // overflow: 'auto',
    //             }}>
    //                 <Form.Control
    //                     type="text"
    //                     placeholder={""}
    //                     value={modalInput}
    //                     className="adminFontTable shadow-lg bg-transparent"
    //                     onChange={(event) => setModalInput(event.target.value)}
    //                     style={{border: "solid 1px #cccabf", borderRadius: "0"}}
    //                 />
    //                 <Button variant="outline-secondary" className="adminFontTable"
    //                         onClick={handleCloseModal}>Закрити</Button>
    //                 {load && (
    //                     <Button disabled variant="outline-success" className="adminFontTable">Збереження
    //                         змін</Button>
    //                 )}
    //                 {!load && (
    //                     <Button variant="outline-success" className="adminFontTable" onClick={saveThis}>Зберегти
    //                         зміни</Button>
    //                 )}
    //             </div>
    //         </div>
    //         <div style={{
    //             width: "100vw",
    //             zIndex: "99",
    //             height: "100vh",
    //             background: "black",
    //             opacity: "20%",
    //             position: "fixed",
    //             left: "0",
    //             bottom: "0"
    //         }} onClick={handleCloseModal}>
    //
    //         </div>
    //     </th>
    // )

    if(tablPosition === "id"){
        return (
            <th style={{overflow: 'hidden', whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "5vw"}} className="adminFontTable">{itemData}</th>
        )
    }
    if(tablPosition === "createdAt"){
        return (
            <th style={{overflow: 'hidden', whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "0vw"}} className="adminFontTable">{itemData}</th>
        )
    }
    if(tablPosition === "updatedAt"){
        return (
            <th style={{overflow: 'hidden', whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "10vw"}} className="adminFontTable">{itemData}</th>
        )
    }
    if(tablPosition === "photo"){
        return (
            <th style={{overflow: 'hidden', whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "0vw"}} className="adminFontTable">{itemData}</th>
        )
    }

    return (
        <>
            {show === true ? (
                <th className="adminFontTable redStorageItem"
                     style={{overflow: 'hidden', whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "5vw"}}>
                    {itemData}
                    <img src={redIcon} alt="red" className="redIcon"/>


                    <div style={modalStyle} className="shadow-lg">
                        <div style={{
                            // height: '90vh',
                            // overflow: 'auto',
                        }}>
                            <Form.Control
                                type="text"
                                placeholder={"Значення..."}
                                value={modalInput}
                                className="adminFontTable shadow-lg bg-transparent"
                                onChange={(event) => setModalInput(event.target.value)}
                                style={{border: "solid 1px #cccabf", borderRadius: "0"}}
                            />
                            <Button variant="outline-secondary" className="adminFontTable"
                                    onClick={handleCloseModal}>Закрити</Button>
                            {load && (
                                <Button disabled variant="outline-success" className="adminFontTable">Збереження
                                    змін</Button>
                            )}
                            {!load && (
                                <Button variant="outline-success" className="adminFontTable" onClick={saveThis}>Зберегти
                                    зміни</Button>
                            )}
                        </div>
                    </div>
                    <div style={{
                        width: "100vw",
                        zIndex: "99",
                        height: "100vh",
                        background: "black",
                        opacity: "20%",
                        position: "fixed",
                        left: "0",
                        bottom: "0"
                    }} onClick={handleCloseModal}></div>
                </th>
            ) : (
                <th className="adminFontTable redStorageItem"
                    style={{overflow: 'hidden', whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "5vw"}}
                    onClick={handleOpenModal}>
                    {itemData}
                    <img src={redIcon} alt="red" className="redIcon"/>
                </th>
            )}
        </>
    )

    // return (
    //     <th className="adminFontTable redStorageItem" onMouseDown={handleOpenModal}>
    //         {itemData}
    //         <img src={redIcon} alt="red" className="redIcon"/>
    //         {showModal && (
    //             <div
    //                 className=""
    //                 // style={modalStyle}
    //                 onMouseDown={stopPropagation}
    //             >
    //                 <Modal.Dialog style={modalStyle}>
    //                     {/*<Modal.Header closeButton>*/}
    //                     {/*    <Modal.Title>Modal title</Modal.Title>*/}
    //                     {/*</Modal.Header>*/}
    //
    //                     <Modal.Body>
    //                         <Form.Control
    //                             placeholder={tablPosition}
    //                             aria-label={tablPosition}
    //                             aria-describedby="modRed"
    //                             type={dataTypeInTable}
    //                             value={modalInput}
    //                             className="adminFontTable"
    //                             onChange={(event) => setModalInput(event.target.value)}
    //                         />
    //                     </Modal.Body>
    //
    //                     <Modal.Footer>
    //                         <Button variant="outline-secondary" className="adminFontTable" onMouseDown={handleCloseModal}>Закрити</Button>
    //                         {load && (
    //                             <Button disabled variant="outline-success" className="adminFontTable">Збереження змін</Button>
    //                         )}
    //                         {!load && (
    //                             <Button variant="outline-success" className="adminFontTable" onMouseDown={saveThis}>Зберегти зміни</Button>
    //                         )}
    //                     </Modal.Footer>
    //                 </Modal.Dialog>
    //             </div>
    //         )}
    //     </th>
    // );
};

export default ModalStorageRed