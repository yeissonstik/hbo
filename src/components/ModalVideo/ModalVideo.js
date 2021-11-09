import React from 'react'
import ModalVideoStyle from '../../styles/components/ModalVideoStyle/ModalVideoStyle'

import close from '../../assets/images/close.png'

function ModalVideo({setOpen, id}) {
    return(
        <div className={ModalVideoStyle}>
            <h3 className='modal_title'>Todo lo que debes saber de HBOMAX</h3>
            <img src={close} className='close_modal' onClick={() => setOpen(false)}/>
            <iframe src={`https://www.youtube.com/embed/${id}`}
                frameBorder='0'
                // allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                width='830px'
                height='416px'
            />      
            <h1>Hola mundo</h1>
        </div>
    )
}

export default ModalVideo