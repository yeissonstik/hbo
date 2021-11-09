
import React, { useRef, useState } from "react";
import CarrouselVideosStyle from "../../styles/components/CarrouselVideosStyle/CarrouselVideosStyle";
import ModalVideo from "../ModalVideo/ModalVideo";
import VideoContainer from "./VideoContainer";


const videosHboMax = [
  {
    'name': 'video 1',
    'url': 'https://youtu.be/HguSMW8XveQ',
    'banner': 'http://img.youtube.com/vi/HguSMW8XveQ/0.jpg',
    'id': 'HguSMW8XveQ'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/Luq2aEeRoKQ',
    'banner': 'http://img.youtube.com/vi/Luq2aEeRoKQ/0.jpg',
    'id': 'Luq2aEeRoKQ'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/HguSMW8XveQ',
    'banner': 'http://img.youtube.com/vi/HguSMW8XveQ/0.jpg',
    'id': 'HguSMW8XveQ'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/Luq2aEeRoKQ',
    'banner': 'http://img.youtube.com/vi/Luq2aEeRoKQ/0.jpg',
    'id': 'Luq2aEeRoKQ'
  },
]

const videosHbo = [
  {
    'name': 'video 1',
    'url': 'https://youtu.be/1Q8fG0TtVAY',
    'banner': 'http://img.youtube.com/vi/1Q8fG0TtVAY/0.jpg',
    'id': '1Q8fG0TtVAY'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/XW2E2Fnh52w',
    'banner': 'http://img.youtube.com/vi/XW2E2Fnh52w/0.jpg',
    'id': 'XW2E2Fnh52w'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/1Q8fG0TtVAY',
    'banner': 'http://img.youtube.com/vi/1Q8fG0TtVAY/0.jpg',
    'id': '1Q8fG0TtVAY'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/XW2E2Fnh52w',
    'banner': 'http://img.youtube.com/vi/XW2E2Fnh52w/0.jpg',
    'id': 'XW2E2Fnh52w'
  },

]

const videosWarner = [
  {
    'name': 'video 1',
    'url': 'https://youtu.be/oK13SZYZqmA',
    'banner': 'http://img.youtube.com/vi/oK13SZYZqmA/0.jpg',
    'id': 'oK13SZYZqmA'
  },

  {
    'name': 'video 1',
    'url': 'https://youtu.be/ygVC-XJWFQM',
    'banner': 'http://img.youtube.com/vi/ygVC-XJWFQM/0.jpg',
    'id': 'ygVC-XJWFQM'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/oK13SZYZqmA',
    'banner': 'http://img.youtube.com/vi/oK13SZYZqmA/0.jpg',
    'id': 'oK13SZYZqmA'
  },

  {
    'name': 'video 1',
    'url': 'https://youtu.be/ygVC-XJWFQM',
    'banner': 'http://img.youtube.com/vi/ygVC-XJWFQM/0.jpg',
    'id': 'ygVC-XJWFQM'
  },

]



export default function CarrouselVideos({currentPage}) {


	return (
    <>
      <div className={CarrouselVideosStyle}>
        <h3 className='carrousel_title'>ENTRENAMIENTO EN:</h3>
        {
          currentPage === 'hboMax'
          ?
            videosHboMax.map((video) => {
              return(
                <>
                  <VideoContainer video={video}></VideoContainer>
                </>
                )
              })
            : null
          }
        {
          currentPage === 'hbo'
          ?
            videosHbo.map((video) => {
              return(
                <>
                  <VideoContainer video={video}></VideoContainer>
                </>
                )
              })
            : null
          }

        {
          currentPage === 'warner'
          ?
            videosWarner.map((video) => {
              return(
                <>
                  <VideoContainer video={video}></VideoContainer>
                </>
                )
              })
            : null
          }
      </div>
    </>
	)
}