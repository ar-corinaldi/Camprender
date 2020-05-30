import React from 'react';

const ATip = (props) => {
    return (
        <div sytle={{width: "100%"}} class="container">
                <div class="card">
                    <h3 class="title">{props.tip.titulo}</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                    <div class="imagen">
                        <img class="imagenImagen" src={props.tip.foto} alt="fotoTip"></img>
                    </div>
                </div>
            <div class="card2">
                <h3 style={{color: "white"}}>Descripcion</h3>
                <h2 class="descripcion">{props.tip.descripcion}</h2>
            </div>
        </div>
    )
}

export default ATip;