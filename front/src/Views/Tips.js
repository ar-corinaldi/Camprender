import React, { useState, useEffect } from "react";
import ATip from "../Components/ATip";
import InputLabel from "@material-ui/core/InputLabel";

function Tips(props) {
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
  Const para filtrar por categoria
  */
  const [agro, setAgro] = useState("");

  /*
  Const para filtrar por categoria
  */
  const [ganaderia, setGanaderia] = useState("");

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

  const updateAgro = (event) => {
    console.log(agro);
    setAgro(event.target.value.substr(0, 20));
  };

  const updateGanaderia = (event) => {
    console.log(ganaderia);
    setGanaderia(event.target.value.substr(0, 20));
  };

  let filteredTips = state.tips.filter((tip) => {
    //console.log("Search", search);
    //console.log("Search2", search2);
    //console.log(tip);
    var cond1 = tip.region.toLowerCase().indexOf(search) !== -1;
    var cond2 = tip.tags[0].toLowerCase().indexOf(search2) !== -1;
    var condTitulo = tip.titulo.toLowerCase().indexOf(tituloBuscado) !== -1;

    return condTitulo && cond1 && cond2;
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
      <InputLabel htmlFor="tags">Ingresa el titulo que te interesa</InputLabel>
      <input type="text" value={tituloBuscado} onChange={updateTituloBuscado} />
      <InputLabel htmlFor="tags">Filtrar por Region</InputLabel>
      <input type="text" value={search} onChange={updateSearch} />
      <InputLabel htmlFor="tags">
        Filtrar por Categoria Agro / Ganaderia
      </InputLabel>
      <input type="text" value={search2} onChange={updateSearch2} />

      <div class="col-sm-10">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value={agro}
            onChange={updateAgro}
          />
          <label class="form-check-label" for="gridRadios1">
            Agricultura
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value={ganaderia}
            onChange={updateGanaderia}
          />
          <label class="form-check-label" for="gridRadios2">
            Ganaderia
          </label>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredTips.map((element, index) => {
          return (
            <div key={index} style={{ dispaly: "flex" }} className="m-2">
              <ATip style={{ float: "left" }} tip={element}></ATip>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tips;
