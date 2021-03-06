import { style } from 'typestyle'

import bgImage from '../../../assets/images/bg_plataforma_events.png'

const UpcomingEventsStyle = style({
    backgroundColor: 'black',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'end',
    margin: 0,
    color: 'white',
    $nest: {
        '& h1': {
            margin: 0
        },
        '& .container': {
            display: 'flex',
            paddingBottom: '150px',
            $nest: {
                '& .calendar': {
                    paddinTop: '400px',
                    width: '45%'
                },
                '& .banner': {
                    margin: '0',
                    marginLeft: '20px',
                    width: '55%',
                    $nest: {
                        '& .banner_title': {
                            fontFamily: 'Montserrat',
                            fontSize: '60px',
                            fontWeight: 400,
                            marginBottom: '30px'
                        }
                    }
                },
            }
        },
    }
})

export default UpcomingEventsStyle