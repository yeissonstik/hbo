import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div style={{ position: "fixed",left:0, bottom: 0, width: "100%"}}>
      <p style={{marginLeft: 10, fontSize: 12}}>Siguenos en: </p>
      <div style={{width:100, height:1, backgroundColor:"#9434D8", marginTop:-10, marginBottom: 5}}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 300,
          marginLeft: 12,
          fontSize: 12
        }}
      >
        <span>Facebook / Instagram / Twitter / Youtube </span>
        <span style={{ marginRight: 10 }}>Ayuda / Destacados / Series</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 300,
          fontSize: 10,
          marginLeft: 12
        }}
      >
        <span style={{color: "#9434D8"}}>
          © 2021 WarnerMedia Direct Latin America, LLC. Todos los derechos
          reservados. HBO Max se usa bajo licencia.
        </span>
        <span>
          Privacidad - Términos de uso - Anuncios de prensa - Contactos de
          prensa - Administrar preferencias
        </span>
      </div>
    </div>
  );
}
