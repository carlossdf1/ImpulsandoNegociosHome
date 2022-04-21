import Contentleft from "./Contentleft";

function Banner() {
    //Banner with css and React, (and Material UI) 
    return (

        <>
            <div className="banner">
                <div className="content-left">
                    <div className="title">Titulo</div>
                    <div className="title">Izquierda</div>
                    <p>Parrafo</p>
                    <small>Texto pequeño</small>
                </div>
            </div>
            <div className="banner">
                <div className="content-right">
                    <div className="title">Titulo</div>
                    <div className="title">Derecha</div>
                    <p>Parrafo</p>
                    <small>Texto pequeño</small>
                    <div></div>
                </div>
            </div>
            <div className="banner">
                <div className="content-center">
                    <div className="title">Titulo</div>
                    <div className="title">Centrado</div>
                    <p>Parrafo</p>
                    <small>Texto pequeño</small>
                    <div></div>
                </div>
            </div>
        </>

    );
}

export default Banner;