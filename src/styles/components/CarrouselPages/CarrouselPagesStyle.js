import { style } from "typestyle";

export const CarrouselPageStyle = style({
    width: '100%',
    height: '100%',
    $nest: {
        '& .banner_title__container': {
            position: "absolute",
            top: '35%',
            left: '70px',
            maxWidth: '500px',
            $nest: {
                '& .banner_title': {
                    display: 'flex',
                    flexDirection: "column",
                    fontSize: '34px',
                    textAlign: 'start',
                    color: 'white',
                    $nest: {
                        '& .banner_title__button': {
                            maxWidth: '210px',
                            fontSize: '21px',
                            fontWeight: 300,
                            marginTop: '50px',
                            padding: '15px',
                            // backgroundColor: '#9434D8',
                            textDecoration: 'none',
                            borderRadius: '35px',
                            textAlign: "center",
                            color: 'white',
                        }
                    }
                }
            }
        }
    }
})