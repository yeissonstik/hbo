import { style } from "typestyle";

const LinkButtonsStyle = style({
    position: "absolute",
    width: '550px',
    bottom: '100px',
    $nest: {
        '& .link_buttons__container': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '60px',
            $nest: {
                '& .link_button': {
                    padding: '20px 35px',
                    maxWidth: '180px',
                    border: 'solid #9434D8 1px',
                    borderRadius: '50px',
                    margin: '10px', 
                    $nest: {
                        '& img': {
                            width: 'auto'
                        }
                    }
                },
                '& .link_button:nth-child(1)': {
                    position: "absolute",
                    left: '0',
                    
                },
                '& .link_button:nth-child(2)': {
                    position: "absolute",
                    left: '190px',
                    bottom: '2px'
                    
                },
                '& .link_button:nth-child(3)': {
                    position: "absolute",
                    right: '0',
                    
                },

            }
        },
        '& .link_buttons__title': {
            color: 'white',
            paddingBottom: '50px'
        }
    }
})

export default LinkButtonsStyle