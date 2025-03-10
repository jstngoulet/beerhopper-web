
import React from 'react';
import theme from "../Theme"

const footerHeight = 150;
const footerEltMarginTop = 15;

export default function Footer(): React.JSX.Element {    
    return (
        <div style={
            { 
                width: "100%",
                height: `${footerHeight}px`, 
                background: theme.palette.primary.main,
                position: "absolute", 
                marginTop: `${footerEltMarginTop}px`,
                marginBottom: "0px"
            }
            }>
        </div>
    )
}