
import React, { useRef, useState } from "react";
import CarrouselVideosStyle from "../../styles/components/CarrouselVideosStyle/CarrouselVideosStyle";
import ModalVideo from "../ModalVideo/ModalVideo";
import VideoContainer from "./VideoContainer";


const videos = [
  {
    'name': 'video 1',
    'url': 'https://www.youtube.com/watch?v=HQIiYqOVTWo'
  },
  {
    'name': 'video 1',
    'url': 'https://www.youtube.com/watch?v=5sWVxI1Hz7w'
  },
  {
    'name': 'video 1',
    'url': 'https://www.youtube.com/watch?v=5sWVxI1Hz7w'
  },
  {
    'name': 'video 1',
    'url': 'https://www.youtube.com/watch?v=5sWVxI1Hz7w'
  },
  {
    'name': 'video 1',
    'url': 'https://www.youtube.com/watch?v=HQIiYqOVTWo'
  },

]



export default function CarrouselVideos() {


  const bgImagesVideos = []

  videos.forEach((e) => {
    console.log(e.url)
    if (e.url.indexOf('watch?v=')) {
      let id = e.url.split('watch?v=')
      let videoImage = `http://img.youtube.com/vi/${id[1]}/0.jpg`
      bgImagesVideos.push( {
        'image': videoImage,
        'id': id[1]
      })
    }
  })

	return (
    <>
      <div className={CarrouselVideosStyle}>
        <h3 className='carrousel_title'>ENTRENAMIENTO EN:</h3>
        {
          bgImagesVideos.map((video) => {
            return(
              <>
                <VideoContainer video={video}></VideoContainer>
              </>
              )
            })
          }
      </div>
    </>
	)
}