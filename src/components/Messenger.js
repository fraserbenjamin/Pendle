import React, {useContext, useEffect} from "react";
import { FacebookProvider, CustomChat } from 'react-facebook';
import {useLocation} from "react-router-dom";

import CookiesContext from "../context/cookiesContext";

export default () => {
    const {cookiesAllowed} = useContext(CookiesContext);
    const location = useLocation();
    const pages = ["/", "/jcr", "/sports", "/blog"]

    if(!cookiesAllowed) return null;

    useEffect(() => {
        if(pages.includes(location.pathname)) {
            if(document.getElementById("fb-root")) document.getElementById("fb-root").style.display = "block";
        } else {
            if(document.getElementById("fb-root")) document.getElementById("fb-root").style.display = "none";
        }
    }, [location, pages]);

    return (
        <FacebookProvider appId="1360172924189137" chatSupport>
            <CustomChat pageId="7585436244" minimized={true}/>
        </FacebookProvider>
    )
}