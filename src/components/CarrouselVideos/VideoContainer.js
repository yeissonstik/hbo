import React, {useState} from 'react'
import ModalVideo from '../ModalVideo/ModalVideo'


function VideoContainer({video}) {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
        <div onClick={() => setOpen(true)} style={{backgroundImage: `url(${video.image})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}} className='image_video'>
        </div>
        {
            isOpen
            ?
            <ModalVideo id={video.id} setOpen={setOpen}></ModalVideo>
            : null
        }
        </>
    )
}

export default VideoContainer