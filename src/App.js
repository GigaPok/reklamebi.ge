import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Contact, Home } from "./feature";
import { contact, home } from "./router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={home} element={<Home />} exact />
        <Route path={contact} element={<Contact />} exact />
      </Routes>
    </div>
  );
}

export default App;
