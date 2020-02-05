import React from "react";

import "../assets/css/scss/styles.css";
import InputPage from "./InputPage";
import ButtonPages from "./ButtonPages";
import TablePages from "./TablePages";
import OtherPages from "./OtherPages";
import Accordian from "../component/Accordian";
import LoaderPages from "./LoaderPages";
import SaralLoader from "../component/SaralLoader";
import { DragAndDrop } from "phoenix-component";

function Home() {
  const saral = ` S S S    A    R R R     A    L\nS        A A   R    R   A A   L\nS        A A   R   R    A A   L\n  SS    A A A  RR R    A A A  L\n     S  A   A  R  R    A   A  L\n     S A     A R   R  A     A L\nS S S  A     A R    R A     A L L L L\n= = = = = = = = = = = = = = = = = = = = =>>`;
  console.log(saral);

  return (
    <>
      <SaralLoader isOpen={true} />
      <div style={{ width: "70%", margin: "50px auto" }}>
        <div>
          <div style={{ marginBottom: "20px" }}></div>

          <div style={{ marginBottom: "20px" }}>
            <DragAndDrop />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Accordian color="purple" header="Other Component">
              <OtherPages />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian color="close" header="Button Component">
              <ButtonPages />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian color="danger" header="Input Component">
              <InputPage />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian color="secondary" header="Table Component">
              <TablePages />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian header="Loader Component">
              <LoaderPages />
            </Accordian>
          </div>
        </div>
      </div>
    </>
  );
}



export default Home;
