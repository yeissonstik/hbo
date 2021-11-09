import React from 'react'
import { Link } from 'react-router-dom';
import LinkButtonsStyle from '../../styles/components/LinkButtonsStyle/LinkButtonsStyle';

function LinkButtons({setPage, buttonColor, currentPage}) {
    return (
        <>
        <div className={LinkButtonsStyle}>
        <h3 className='link_buttons__title'>Conoce más de</h3>
            <div className='link_buttons__container'>
                {
                    currentPage === 'hboMax'
                    ?
                    <Link onClick={() => setPage('hboMax')} className='link_button active' to='/capacitaciones' style={{borderColor: buttonColor}}>
                        
                    </Link>
                    :
                    <Link onClick={() => setPage('hboMax')} className='link_button' to='/capacitaciones'>
                        
                    </Link>
                }

                {
                    currentPage === 'hbo'
                    ?
                    <Link onClick={() => setPage('hbo')} className='link_button active' to='/capacitaciones' style={{borderColor: buttonColor}}>
                       
                    </Link>
                    :
                    <Link onClick={() => setPage('hbo')} className='link_button' to='/capacitaciones'>
                       
                    </Link>

                }

                {
                    currentPage === 'warner'
                    ?
                    <Link onClick={() => setPage('warner')} className='link_button active' to='/capacitaciones' style={{borderColor: buttonColor}}>
                       
                    </Link>
                    :
                    <Link onClick={() => setPage('warner')} className='link_button' to='/capacitaciones'>
                       
                    </Link>
                    

                }





            </div>
        </div>
        </>
    )
}

export default LinkButtons;