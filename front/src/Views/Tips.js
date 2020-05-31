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
  Const para filtrar por agro
  */
  const [agro, setAgro] = useState("");

  /*
  Const para filtrar por ganaderia
  */
  const [ganaderia, setGanaderia] = useState("");

  /*
  Const para filtrar por alta
  */
  const [alta, setAlta] = useState("");

  /*
 Const para filtrar por pac
 */
  const [pac, setPac] = useState("");

  /*
 Const para filtrar por Ori
 */
  const [ori, setOri] = useState("");

  /*
 Const para filtrar por amaz
 */
  const [amaz, setAmaz] = useState("");

  /*
 Const para filtrar por Andina
 */
  const [andi, setAnd] = useState("");
  /*
  Const para buscar con base en el titulo por categoria
  */
  const [tituloBuscado, setTituloBuscado] = useState("");

  const updateSearch = (event) => {
    setSearch(event.target.value.substr(0, 20));
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

  /*
  Función para saber si ganaderia está oprimido o no
  */
  function updateAnd() {
    // Get the checkbox
    var checkBox = document.getElementById("cAnd");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      setAnd("andina");
    } else {
      setAnd("");
    }
  }

  /*
  Función para saber si ganaderia está oprimido o no
  */
  function updateAlta() {
    // Get the checkbox
    var checkBox = document.getElementById("cAtla");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      setAlta("atlantica");
    } else {
      setAlta("");
    }
  }

  /*
  Función para saber si ganaderia está oprimido o no
  */
  function updatePac() {
    // Get the checkbox
    var checkBox = document.getElementById("cPac");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      setPac("pacifica");
    } else {
      setPac("");
    }
  }

  /*
  Función para saber si ganaderia está oprimido o no
  */
  function updateOri() {
    // Get the checkbox
    var checkBox = document.getElementById("cOri");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      setOri("orinoquia");
    } else {
      setOri("");
    }
  }

  /*
  Función para saber si ganaderia está oprimido o no
  */
  function updateAmaz() {
    // Get the checkbox
    var checkBox = document.getElementById("cAmaz");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      setAmaz("amazonas");
    } else {
      setAmaz("");
    }
  }

  let filteredTips = state.tips.filter((tip) => {
    var cond1 = tip.region.toLowerCase().indexOf(search) !== -1;
    //var cond2 = tip.tags[0].toLowerCase().indexOf(search2) !== -1;
    var condTitulo = tip.titulo.toLowerCase().indexOf(tituloBuscado) !== -1;
    var condAgro = tip.tags[0].toLowerCase().indexOf(agro) !== -1;
    var condGanaderia = tip.tags[0].toLowerCase().indexOf(ganaderia) !== -1;
    var condAtla = tip.region.toLowerCase().indexOf(alta) !== -1;
    var condPac = tip.region.toLowerCase().indexOf(pac) !== -1;
    var condori = tip.region.toLowerCase().indexOf(ori) !== -1;
    var condAmaz = tip.region.toLowerCase().indexOf(amaz) !== -1;
    var condAnd = tip.region.toLowerCase().indexOf(andi) !== -1;
    return (
      condTitulo &&
      condAgro &&
      condGanaderia &&
      condAnd &&
      condAtla &&
      condPac &&
      condori &&
      condAmaz
    );
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
      <div
        class="input-group"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <input //,textAlign: "left"
          type="text"
          placeholder="Busca el consejo que necesites"
          class="form-control"
          value={tituloBuscado}
          onChange={updateTituloBuscado}
        />
      </div>
      <div
        class="input-group"
        style={{
          paddingTop: "5px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <InputLabel htmlFor="tags">Filtrar por Region:</InputLabel>
        <input type="checkbox" id="cAtla" onChange={updateAlta} />{" "}
        <InputLabel htmlFor="tags">Atlántica</InputLabel>
        <input type="checkbox" id="cPac" onChange={updatePac} /> Pacífica
        <input type="checkbox" id="cOri" onChange={updateOri} /> Orinoquía
        <input type="checkbox" id="cAmaz" onChange={updateAmaz} /> Amazonas
        <input type="checkbox" id="cAnd" onChange={updateAnd} /> Andina
        <InputLabel htmlFor="tags">Filtrar por Categoría:</InputLabel>
        <input type="checkbox" id="cAgro" onChange={updateAgro} /> Agricultura
        <input
          type="checkbox"
          id="cGanaderia"
          onChange={updateGanaderia}
        />{" "}
        Ganaderia
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredTips.map((element, index) => {
          return (
            <div key={index} style={{ dispaly: "flex" }} className="m-2">
              <ATip
                style={{ float: "left" }}
                tip={element}
                user={props.user}
              ></ATip>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tips;
