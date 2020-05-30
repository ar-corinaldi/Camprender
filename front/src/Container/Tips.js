import React, { Component } from 'react';
import ATip from '../Components/ATip';


class Tips extends Component {

    state = {
        tips: [{
            titulo: 'Cultivo de papas',
            descripcion: "En el campo yo realizo el cultivo de 200000 oaoas",
            telefono: "320275888", 
            tags: ["agricultura", "papa"],
            foto: "https://agrotendencia.tv/agropedia/wp-content/uploads/2019/10/agrotendencia-papa-20.jpg",
            like: 0,
            comentarios: [{ comentario: "wow", telefono: "123456789" }]
        },
        {
            titulo: 'Cultivo de Yuca',
            descripcion: "En el campo yo reaklfsdhjfal sdlk fjslks",
            telefono: "320275878", tags: ["agricultura", "papa"],
            foto: "https://i.ytimg.com/vi/YTDGDPIOYfU/maxresdefault.jpg",
            like: 0,
            comentarios: [{ comentario: "WOOOW", telefono: "123456589" }]
        }]
    }

    render() {

        let lista = null

        lista = (
            <div>
                {
                    this.state.tips.map((element, index) => {
                        return (
                            <div key={index}>
                                <ATip style={{width:'100%'}} tip={element}></ATip>
                            </div>
                        )
                    })
                }
            </div>
        )

        return (
            <div style={{marginTop: "30px"}}>
                {lista}
            </div>
        )
    }
}

export default Tips;