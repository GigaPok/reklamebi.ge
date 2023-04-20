import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, User } from "./feature";
import {
  contact,
  home,
  add,
  statement,
  news,
  settings,
  profile,
  user,
} from "./router";
import { AddStatement, Error } from "./shared";

import { Add, Mystatement, Mynews, Setting, Profile } from "./feature/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={home} element={<Home />} exact />
        <Route path={contact} element={<Contact />} exact />
        <Route path={add} element={<AddStatement />} exact />
        <Route path={user} element={<User />} exact></Route>
        <Route path={profile} element={<Profile />} exact>
          <Route path={add} element={<Add />} exact />
          <Route path={statement} element={<Mystatement />} exact />
          <Route path={news} element={<Mynews />} exact />
          <Route path={settings} element={<Setting />} exact />
        </Route>

        <Route path="*" element={<Error />} exact />
      </Routes>
    </div>
  );
}

export default App;
