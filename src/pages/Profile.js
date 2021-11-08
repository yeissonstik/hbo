import React, { useRef, useState } from "react";
import ProfileStyle from "../styles/pages/ProfileStyles";
import ImageProfile from "../assets/image-18.png";
import Navbar from "../components/Layout/Navbar/Navbar";
import hboMax from "../assets/hboMax.png";
import { Link } from "react-router-dom";

const Navbarlogos = [
  {
    logo: hboMax,
  },
];
const events = [
  {
    time: "08:30 AM",
    title: "Nombre de la conferencia y/o charla",
    creator: "Mónica Allen",
  },
  {
    time: "04:00 AM",
    title: "Nombre de la conferencia y/o charla",
    creator: "Mónica Allen",
  },
  {
    time: "10:00 AM",
    title: "Nombre de la conferencia y/o charla",
    creator: "Harry Rojas",
  },
  {
    time: "03:00 AM",
    title: "Nombre de la conferencia y/o charla",
    creator: "Harry Rojas",
  },
];

const user = {
  image_url: ImageProfile,
  name: "Emerson",
  lastName: "Camacho",
  email:"meko.camacho@etb.co",
  job: "Director de Ventas Regional",
  phoneNumber: "302 4567891"
}

export default function Profile() {
  return (
    <div className={ProfileStyle}>
      <Navbar logos={Navbarlogos}></Navbar>
      <div
        style={{ display: "flex", marginTop: 150 }}
        className="info-container"
      >
        <div style={{marginRight: 100}}>
          <h1 style={{ color: "white" }}>Perfil</h1>
          <img width="120px" height="120px" src={user.image_url} alt="user profile" />
          <div
            style={{ display: "flex", flexDirection: "row", color: "#FFFFFF" }}
          >
            <span style={{ marginRight: 10, marginLeft: 20 }}>Editar Perfil</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontWeight: 300,
              }}
            >
              <span>{user.name} {user.lastName}</span>
              <span>T. {user.phoneNumber}</span>
              <span>{user.email}</span>
              <span style={{ color: "#9434D8" }}>
                {user.job}
              </span>
              <Link
                to="/"
                style={{
                  marginTop: 15,
                  color: "#9434D8",
                  textDecoration: "none",
                }}
              >
                Mis cursos
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ color: "#9434D8", borderLeft: 2, textAlign: "center", fontWeight: 400, fontSize: 20 }}>
            Mi agenda
          </h4>
          <p style={{ color: "white", textAlign:"center", marginTop: -25 }}>
            Encuentra todas las actividades que tenemos para ti.
          </p>
          <p style={{ fontWeight: 700, textAlign: "center" }}>
            Lunes, 06 de Septiembre de 2021
          </p>
          <div style={{columnCount: 2}}>
            {events.map((event) => {
              return (
                <div style={{marginLeft:10,padding:6, display: "flex"}}>
                  <div style={{marginRight: 5,fontWeight: 700}}>{event.time}</div>
                  <div style={{fontWeight: 300}}>
                    <span >{event.title}</span>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                      <span>{event.creator}</span>
                      <Link style={{textDecoration:"none"}} to="/">Invitar a ...</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
