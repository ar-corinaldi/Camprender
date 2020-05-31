import React, { useState, useEffect } from "react";
import ATip from "./ATip";
import InputLabel from "@material-ui/core/InputLabel";

function Tips(props) {
  // let tempState = {
  //   tips: [
  //     {
  //       region: 'pacifica',
  //       titulo: "Cultivo de papas",
  //       descripcion: "En el campo yo realizo el cultivo de 200000 oaoas",
  //       telefono: "320275888",
  //       tags: ["agricultura", "papa"],
  //       foto:
  //         "https://agrotendencia.tv/agropedia/wp-content/uploads/2019/10/agrotendencia-papa-20.jpg",
  //       like: 0,
  //       comentarios: [{ comentario: "wow", telefono: "123456789" }],
  //     },
  //     {
  //       region: 'atlantica',
  //       titulo: "Cultivo de Yuca",
  //       descripcion:
  //         "En el campo yo reaklfsdhjfal sdlk fjslks tiene que ser suficientemente larga",
  //       telefono: "320275878",
  //       tags: ["agricultura", "papa"],
  //       foto: "https://i.ytimg.com/vi/YTDGDPIOYfU/maxresdefault.jpg",
  //       like: 0,
  //       comentarios: [{ comentario: "WOOOW", telefono: "123456589" }],
  //     },
  //   ],
  // };

  const [state, setState] = useState({ tips: [] });

  /*
  Const para filtrar por region
  */
  const [search, setSearch] = useState("");

  /*
  Const para filtrar por categoria
  */
  const [search2, setSearch2] = useState("");

  /*
  Const para buscar con base en el titulo por categoria
  */
  const [tituloBuscado, setTituloBuscado] = useState("");

  const updateSearch = (event) => {
    setSearch(event.target.value.substr(0, 20));
  };

  const updateSearch2 = (event) => {
    setSearch2(event.target.value.substr(0, 20));
  };

  const updateTituloBuscado = (event) => {
    setTituloBuscado(event.target.value.substr(0, 20));
  };

  let filteredTips = state.tips.filter((tip) => {
    //console.log("Search", search);
    //console.log("Search2", search2);
    var cond1 = tip.region.toLowerCase().indexOf(search) !== -1;
    var cond2 = tip.tags[0].toLowerCase().indexOf(search2) !== -1;
    return cond1 && cond2;
  });

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    fetch("/tips")
      .then((res) => res.json())
      .then((respuesta) => {
        let tempState = {};
        tempState.tips = respuesta;
        setState(tempState);
        console.log(state);
      });
  };
  //fetching();

  return (
    <div style={{ marginTop: "30px" }}>
      <InputLabel htmlFor="tags">Filtrar por Region</InputLabel>
      <input type="text" value={search} onChange={updateSearch} />
      <InputLabel htmlFor="tags">
        Filtrar por Categoria Agro / Ganaderia
      </InputLabel>
      <input type="text" value={search2} onChange={updateSearch2} />
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
