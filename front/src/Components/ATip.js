import React from 'react';
import './ATip.css'

const ATip = (props) => {
    return (
        <div class="container">
                <div class="card">
                    <h3 class="title">{props.tip.titulo}</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                    <div class="imagen">
                        <img src={props.tip.foto} alt="fotoTip"></img>
                    </div>
                </div>
            <div class="card2">
                <h3>{props.tip.titulo}</h3>
            </div>
        </div>
    )
}

export default ATip;