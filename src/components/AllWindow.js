import React, {useEffect, useState} from "react";
import "./allStyles.css"
import Nav from "./nav/Nav";
import AfterNav from "./calc/AfterNav";
import {fetchPrices, fetchPrices2} from "../actions/pricesAction";
import {useDispatch} from "react-redux";
import Footer from "./footer/Footer";
import PhotoLayoutEditor from "./editor";
import Gravity from "./Gravity";
import {Route, Routes} from "react-router-dom";
import CrmCash2 from "./admin/crm/CrmCash/CrmCash2";
import CrmCash3Full from "./admin/crm/CrmCash/CrmCash3Full";
import Loader from "./calc/Loader";
import GTPErrorResponse from "./admin/GTPErrorResponse";
import Loader2 from "./calc/Loader2";

function AllWindow() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPrices())
    }, [])
    const [err, setErr] = useState(null);
    return (
        <div>
            <Routes>
                <Route path="/CashFull" element={<CrmCash3Full setErr={setErr}/>} />
                <Route path="/CashFull/:id" element={<CrmCash3Full setErr={setErr}/>} />
                <Route path="*" element={(
                    <>
                      <Nav setErr={setErr}/>
                      <AfterNav setErr={setErr}/>
                      <Footer setErr={setErr}/>
                    </>
                )} />
            </Routes>
            {err ? (
                <GTPErrorResponse err={err} setErr={setErr}/>
            ) : (
                <div></div>
            )}
            {/*<PhotoLayoutEditor />*/}
        </div>
    );
}

export default AllWindow;