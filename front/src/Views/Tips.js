import React, { useState, useEffect } from "react";
import ATip from "../Components/ATip";
import InputLabel from "@material-ui/core/InputLabel";
import "./Tips.css"; // Tell webpack that Button.js uses these styles

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

  /*
  Función para saber si agricultura está oprimido o no
  */
  function updateAgro() {
    // Get the checkbox
    var checkBox = document.getElementById("cAgro");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      setAgro("agricultura");
    } else {
      setAgro("");
    }
  }

  /*
  Función para saber si ganaderia está oprimido o no
  */
  function updateGanaderia() {
    // Get the checkbox
    var checkBox = document.getElementById("cGanaderia");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      setGanaderia("ganaderia");
    } else {
      setGanaderia("");
    }
  }

  let filteredTips = state.tips.filter((tip) => {
    var cond1 = tip.region.toLowerCase().indexOf(search) !== -1;
    //var cond2 = tip.tags[0].toLowerCase().indexOf(search2) !== -1;
    var condTitulo = tip.titulo.toLowerCase().indexOf(tituloBuscado) !== -1;
    var condAgro = tip.tags[0].toLowerCase().indexOf(agro) !== -1;
    var condGanaderia = tip.tags[0].toLowerCase().indexOf(ganaderia) !== -1;
    return condTitulo && cond1 && condAgro && condGanaderia;
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
      <input
        type="text"
        class="sinbordefondo"
        value={tituloBuscado}
        onChange={updateTituloBuscado}
      />
      <InputLabel htmlFor="tags">Filtrar por Region</InputLabel>
      <input type="text" value={search} onChange={updateSearch} />
      <InputLabel htmlFor="tags">
        Filtrar por Categoria Agro / Ganaderia
      </InputLabel>
      <input type="checkbox" id="cAgro" onChange={updateAgro} /> Agricultura
      <input type="checkbox" id="cGanaderia" onChange={updateGanaderia} />{" "}
      Ganaderia
      <div className="d-flex flex-wrap justify-content-center">
        {filteredTips.map((element, index) => {
          return (
            <div key={index} style={{ dispaly: "flex" }} className="m-2">
              <ATip
                user={props.user}
                style={{ float: "left" }}
                tip={element}
              ></ATip>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tips;
