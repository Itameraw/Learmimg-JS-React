import React, { useState } from "react";
import Modal from "../elements/Modal";
const MyContext = React.createContext();

// Provide the context
// function App() {
//   const [data, setData] = React.useState("Hello Global State");
//   return (
//     <MyContext.Provider value={data}>
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// }
// // Consume the context
// function ChildComponent() {
//   const data = React.useContext(MyContext);
//   return <p>{data}</p>;
// }
function App() {
  const [valueForm, setValueForm] = useState("");
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="modal-holder">
      <button onClick={() => setOpen(true)}>Show Modal</button>
      <Modal
        submitModalWindow={(value) => setValueForm(value)}
        isOpen={isOpen}
        title={"Universal Modal Window"}
        content={"Modal"}
        setValueForm={(e) => setValueForm(e.target.value)}
        closeModalWindow={() => setOpen(false)}
      />
      <div>{valueForm}</div>
    </div>
  );
}
export default App;
