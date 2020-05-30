import React, { useState } from "react";
import ATip from "../Components/ATip";

function Tips(props) {
  let tempState = {
    tips: [
      {
        region: 'pacifica',
        titulo: "Cultivo de papas",
        descripcion: "En el campo yo realizo el cultivo de 200000 oaoas",
        telefono: "320275888",
        tags: ["agricultura", "papa"],
        foto:
          "https://agrotendencia.tv/agropedia/wp-content/uploads/2019/10/agrotendencia-papa-20.jpg",
        like: 0,
        comentarios: [{ comentario: "wow", telefono: "123456789" }],
      },
      {
        region: 'atlantica',
        titulo: "Cultivo de Yuca",
        descripcion:
          "En el campo yo reaklfsdhjfal sdlk fjslks tiene que ser suficientemente larga",
        telefono: "320275878",
        tags: ["agricultura", "papa"],
        foto: "https://i.ytimg.com/vi/YTDGDPIOYfU/maxresdefault.jpg",
        like: 0,
        comentarios: [{ comentario: "WOOOW", telefono: "123456589" }],
      },
    ],
  };
  const [state, setState] = useState(tempState);
  const [search, setSearch] = useState('');
  const updateSearch = (event) => {
    setSearch(event.target.value.substr(0,20));
  }
  let filteredTips = tempState.tips.filter((tip) =>{
    return tip.region.toLowerCase().indexOf(search) !== -1;
  });


  return (
    <div style={{ marginTop: "30px" }}>
    <input type='text' value={search} onChange={updateSearch}/> 
      {filteredTips.map((element, index) => {
        return (
          <div key={index} style={{ dispaly: "flex" }}>
            <ATip style={{ float: "left" }} tip={element}></ATip>
          </div>
        );
      })}
    </div>
  );
}

export default Tips;