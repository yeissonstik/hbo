import { style } from "typestyle";

export const CarrouselPageStyle = style({
    width: '100%',
    height: '100%',
    $nest: {
        '& .banner_title__container': {
            position: "absolute",
            bottom: '30%',
            left: '70px',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'start',
            $nest: {
                '& .banner_title': {
                    margin: '15px 0',
                    fontSize: '28px',
                    textAlign: 'start',
                    fontFamily: 'Montserrat',
                    fontWeight: 300,
                    color: 'white',
                },
                '& .banner_title__button': {
                    maxWidth: '210px',
                    fontSize: '21px',
                    fontWeight: 300,
                    padding: '15px',
                    textDecoration: 'none',
                    borderRadius: '35px',
                    textAlign: "center",
                    color: 'white',
                }
            }
        }
    }
})