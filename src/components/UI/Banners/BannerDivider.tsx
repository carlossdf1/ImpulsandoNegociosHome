import { Typography } from "@mui/material";

interface Props {
    title:string,
    subtitle:string,
    content1?:string,
    content2?:string,
    contentSmall?:string,
    orientationContent1?: 'left' | 'right' | 'center',
    orientationContent2?: 'left' | 'right' | 'center',

}

function BannerDivider({title, subtitle, content1, content2, contentSmall='', orientationContent1= 'center', orientationContent2= 'center'}:Props) {
    //Banner with css and React, (and Material UI) 

    return (

        <>
            <div className="banner">
                <div className="content-left">
                    <div className="title">{title}</div>
                    <div className="title">{subtitle}</div>
                    <Typography textAlign={orientationContent1}>{content1}</Typography>
                    <small>{contentSmall}</small>
                </div>
                <div className='content-right'>
                    <div className="title">{title}</div>
                    <div className="title">{subtitle}</div>
                    <Typography textAlign={orientationContent2}>{content2}</Typography>
                    <small>{contentSmall}</small>
                </div>
            </div>
        </>

    );
}

export default BannerDivider;