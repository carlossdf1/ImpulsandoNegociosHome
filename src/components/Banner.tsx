import { Typography } from "@mui/material";

interface Props {
    title:string,
    subtitle:string,
    content?:string,
    contentSmall?:string,
    orientation?: 'content-left' | 'content-right' | 'content-center',
    orientationContent?: 'left' | 'right' | 'center'
}

function Banner({title, subtitle, content, contentSmall='', orientation= 'content-center', orientationContent='center'}:Props) {
    //Banner with css and React, (and Material UI) 

    return (

        <>
            <div className="banner">
                <div className={ orientation }>
                    <div className="title">{title}</div>
                    <div className="title">{subtitle}</div>
                    <Typography textAlign={orientationContent}>{content}</Typography>
                    <small>{contentSmall}</small>
                </div>
            </div>
        </>

    );
}

export default Banner;