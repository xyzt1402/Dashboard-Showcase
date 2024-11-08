import MassiveAppDashboard from "./Modules/MassiveAppDashboard";
import "./App.css";
import "@xyflow/react/dist/style.css";
function App() {
  return (
    // <div
    //   className="container"
    //   style={{
    //     display: "grid",
    //     gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ", // Corrected from "5,1fr"
    //     gridTemplateRows: "2fr 1fr", // Corrected from "2,1fr"
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <div
    //     className="item1"
    //     style={{
    //       border: "1px solid grey",
    //       gridRow: "1/3",
    //       gridColumn: "1/2",
    //       backgroundColor: "yellow",
    //     }}
    //   ></div>
    //   <div
    //     className="item2"
    //     style={{
    //       border: "1px solid grey",
    //       gridRow: "1/2",
    //       gridColumn: "2/3",
    //       backgroundColor: "green",
    //     }}
    //   ></div>
    //   <div
    //     className="item3"
    //     style={{
    //       border: "1px solid grey",
    //       gridRow: "1/2",
    //       gridColumn: "3/4",
    //       backgroundColor: "green",
    //     }}
    //   ></div>
    //   <div
    //     className="item4"
    //     style={{
    //       border: "1px solid grey",
    //       gridRow: "1/2",
    //       gridColumn: "4/5",
    //       backgroundColor: "green",
    //     }}
    //   ></div>
    //   <div
    //     className="item5"
    //     style={{
    //       border: "1px solid grey",
    //       gridRow: "1/2",
    //       gridColumn: "5/6",
    //       backgroundColor: "green",
    //     }}
    //   >
    //     <div>10000</div>
    //     <p>vnd</p>
    //   </div>
    //   <div
    //     className="item6"
    //     style={{
    //       border: "1px solid grey",
    //       gridRow: "2/3",
    //       gridColumn: "2/4",
    //       backgroundColor: "red",
    //     }}
    //   ></div>
    //   <div
    //     className="item7"
    //     style={{
    //       border: "1px solid grey",
    //       gridRow: "2/3",
    //       gridColumn: "4/6",
    //       backgroundColor: "red",
    //     }}
    //   ></div>
    // </div>
    <MassiveAppDashboard />
  );
}

export default App;
