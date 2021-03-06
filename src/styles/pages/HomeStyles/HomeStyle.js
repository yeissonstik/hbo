import { style } from "typestyle";
import background from '../../../assets/images/home-background.png'
const HomeStyle = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${background})`,
    backgroundSize: 'cover',
    $nest: {
        '& .title_container': {
            width: '600px',
            margin: 'auto',
            textAlign: 'center',
            $nest: {
                '& h1': {
                    color: 'white',
                    margin: '0 20px',
                    fontFamily: 'Montserrat'
                },
                '& .title': {
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Montserrat'
                },
                '& .rows': {
                    width: '40%'
                },
                '& img': {
                    marginTop: '20px',
                    marginLeft: '4%'
                },
                
            }
        }
    }
})

export default HomeStyle