import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import InputGroup from 'react-bootstrap/InputGroup';

function OneProductInOrders({item, cash = false, handleAmountChange, index}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        // console.log(item);
        setShow(true);
    }
    return (
        <div>
            <div>
                <div className="adminFont">
                    {/*<div>Назва {item.unitName}</div>*/}
                </div>
                <div className="adminFont">
                    <div className="d-flex m-auto">
                        {/*{item.newField1 === "1" ? (*/}
                        {/*    <div className="d-flex m-auto">*/}
                        {/*        <div className="d-flex flex-row-reverse">*/}
                        {/*            <div className="adminFontTable p-1 m-1">мм</div>*/}
                        {/*            <Form.Control*/}
                        {/*                type="number"*/}
                        {/*                placeholder="null"*/}
                        {/*                value={item.newField2}*/}
                        {/*                className="bg-warning adminFontTable shadow-lg w-50"*/}
                        {/*                onChange={(event) => handleAmountChange(index, 'newField2', event)}*/}
                        {/*            />*/}
                        {/*            /!*<div className="adminFontTable p-1 m-1">мм</div>*!/*/}
                        {/*        </div>*/}
                        {/*        <div className="d-flex">*/}
                        {/*            <div className="adminFontTable p-1 m-1">x</div>*/}
                        {/*            <Form.Control*/}
                        {/*                type="number"*/}
                        {/*                placeholder="null"*/}
                        {/*                value={item.newField3}*/}
                        {/*                className="bg-warning adminFontTable shadow-lg w-50"*/}
                        {/*                onChange={(event) => handleAmountChange(index, 'newField3', event)}*/}
                        {/*            />*/}
                        {/*            <div className="adminFontTable p-1 m-1">мм</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*) : (*/}
                        {/*    <div className="d-flex align-items-center">*/}
                        {/*        <Form.Group className="d-flex">*/}
                        {/*            /!*<div className="adminFontTable btn">Висота</div>*!/*/}
                        {/*            <div className="adminFontTable p-1 m-1">{item.newField2}</div>*/}
                        {/*            <div className="adminFontTable btn">мм</div>*/}
                        {/*        </Form.Group>*/}
                        {/*        <Form.Group className="d-flex">*/}
                        {/*            <div className="adminFontTable btn">x</div>*/}
                        {/*            <div className="adminFontTable p-1 m-1">{item.newField3}</div>*/}
                        {/*            <div className="adminFontTable btn">мм</div>*/}
                        {/*        </Form.Group>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        <div className="d-flex m-auto">
                            <div className="d-flex flex-row-reverse">
                                <div className="adminFontTable p-1 m-1">мм</div>
                                <Form.Control
                                    type="number"
                                    placeholder="null"
                                    value={item.newField2}
                                    className="btn btn-outline-secondary adminFontTable shadow-lg w-50"
                                    onChange={(event) => handleAmountChange(index, 'newField2', event)}
                                />
                                {/*<div className="adminFontTable p-1 m-1">мм</div>*/}
                            </div>
                            <div className="d-flex">
                                <div className="adminFontTable p-1 m-1">x</div>
                                <Form.Control
                                    type="number"
                                    placeholder="null"
                                    value={item.newField3}
                                    className="btn btn-outline-secondary adminFontTable shadow-lg w-50"
                                    onChange={(event) => handleAmountChange(index, 'newField3', event)}
                                />
                                <div className="adminFontTable p-1 m-1">мм</div>
                            </div>
                        </div>
                    </div>
                    <div className="adminFontTable shadow-lg p-1">
                        <div>
                            Складається з:
                        </div>
                        {item.orderunitunits.map((unitItem, iter) => (
                            <div key={unitItem.id} className="d-flex adminFontTable">
                                <div className="adminFontTable d-flex shadow-lg">
                                    <div className="adminFontTable p-1 m-1">{iter + 1}</div>
                                    <div className="adminFontTable p-1 m-1">{unitItem.name}</div>
                                    <div className="adminFontTable p-1 m-1">{unitItem.quantity} шт</div>
                                    <div className="adminFontTable p-1 m-1 text-black-50">x</div>
                                    <div className="adminFontTable p-1 m-1">{unitItem.priceForOneThis} грн
                                    </div>
                                    <div className="adminFontTable p-1 m-1 text-black-50">=</div>
                                    <div
                                        className="adminFontTable p-1 m-1">{unitItem.priceForOneThis * unitItem.quantity} </div>
                                    <div className="adminFontTable p-1 m-1 text-black-50">грн</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default OneProductInOrders;