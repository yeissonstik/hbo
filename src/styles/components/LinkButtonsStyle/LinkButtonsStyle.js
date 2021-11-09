import { style } from "typestyle";
import hboMax from '../../../assets/images/components/LinkButtonsImages/hboMaxButton.png'
import hbo from '../../../assets/images/components/LinkButtonsImages/hboButton.png'
import warner from '../../../assets/images/components/LinkButtonsImages/warnerButton.png'


const LinkButtonsStyle = style({
    position: "fixed",
    zIndex: 2,
    bottom: '100px',
    left: '23%',
    textAlign: "center",
    $nest: {
        '& .link_buttons__container': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '60px',
            width: '710px',
            $nest: {
                '& .active': {
                    bottom: '0'
                },
                '& .link_button': {
                    overflow: 'auto',
                    display: 'block',
                    border: 'solid #9434D8 1px',
                    borderRadius: '50px',
                    maxHeight: '5px',
                    width: '220px',
                    padding: '30px 0',
                    margin: '10px', 
                },
                '& .link_button:nth-child(1)': {
                    position: "absolute",
                    left: '0',
                    backgroundImage: `url(${hboMax})`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    
                },
                '& .link_button:nth-child(2)': {
                    position: "absolute",
                    left: '33%',
                    backgroundImage: `url(${hbo})`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                },
                '& .link_button:nth-child(3)': {
                    position: "absolute",
                    right: '0',
                    backgroundImage: `url(${warner})`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                },

            }
        },
        '& .link_buttons__title': {
            color: 'white',
            paddingBottom: '20px'
        }
    }
})

export default LinkButtonsStyle