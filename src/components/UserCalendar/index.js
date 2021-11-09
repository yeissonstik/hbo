import React from 'react'
import { Link } from "react-router-dom";
import CalendarSlider from '../CalendarSlider';

const events = [
  {
    startTime: "08:00 AM",
    endTime: "2021-11-09T15:18:35.475Z",
    title: "Nombre de la conferencia y/o charla",
    creator: "Mónica Allen",
  },
  {
    startTime: "10:00 AM",
    endTime: "2021-11-09T15:18:35.475Z",
    title: "Nombre de la conferencia y/o charla",
    creator: "Mónica Allen",
  },
  {
    startTime: "03:00 AM",
    endTime: "2021-11-09T15:18:35.475Z",
    title: "Nombre de la conferencia y/o charla",
    creator: "Harry Rojas",
  },
  {
    startTime: "04:00 AM",
    endTime: "2021-11-09T15:18:35.475Z",
    title: "Nombre de la conferencia y/o charla",
    creator: "Harry Rojas",
  },
];

export default function UserCalendar() {
  return (
    <div>
      <h4
        style={{
          color: "#9434D8",
          borderLeft: 2,
          textAlign: "center",
          fontWeight: 400,
          fontSize: 20,
        }}
      >
        Mi agenda
      </h4>
      <p style={{ color: "white", textAlign: "center", marginTop: -25 }}>
        Encuentra todas las actividades que tenemos para ti.
      </p>
      <CalendarSlider />
      <p style={{ fontWeight: 700, textAlign: "center", marginTop: 30 }}>
        Lunes, 06 de Septiembre de 2021
      </p>
      <div style={{ columnCount: 2 }}>
        {events.map((event) => {
          return (
            <div style={{ marginLeft: 10, padding: 6, display: "flex" }}>
              <div style={{ marginRight: 5, fontWeight: 700 }}>
                {event.startTime}
              </div>
              <div style={{ fontWeight: 300 }}>
                <span>{event.title}</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{event.creator}</span>
                  <Link style={{ textDecoration: "none" }} to="/">
                    Invitar a ...
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}