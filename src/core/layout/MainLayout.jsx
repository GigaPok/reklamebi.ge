import React from "react";
import "./MainLayout.scss";
import { Header, Footer } from "./components";

export const Mainlayout = ({ children }) => {
  return (
    <div id="mainLayout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};