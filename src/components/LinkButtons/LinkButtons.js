import React from 'react'
import { Link } from 'react-router-dom';
import LinkButtonsStyle from '../../styles/components/LinkButtonsStyle/LinkButtonsStyle';
import hboMax from '../../assets/hboMax.png';
import warnerMedia from '../../assets/warner-image.png'
import hbo from '../../assets/hbo.png'

function LinkButtons(props) {
    return (
        <>
        <div className={LinkButtonsStyle}>
        <h3 className='link_buttons__title'>Conoce más de</h3>
            <div className='link_buttons__container'>
                <Link onClick={() => props.setPage('hbo')} className='link_button' to='/capacitaciones' style={{backgroundColor: props.buttonColor}}>
                    <img src={hboMax}/>
                </Link>
                <Link onClick={() => props.setPage('hboMax')} className='link_button' to='/capacitaciones' style={{backgroundColor: props.buttonColor}}>
                    <img src={hbo}/>
                </Link>
                <Link onClick={() => props.setPage('hbo')} className='link_button' to='/capacitaciones' style={{backgroundColor: props.buttonColor}}>
                    <img src={warnerMedia}/>
                </Link>
            </div>
        </div>
        </>
    )
}

export default LinkButtons;