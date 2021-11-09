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
        },
        '& .banner': {
            margin: '0 80px',
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
})

export default UpcomingEventsStyle