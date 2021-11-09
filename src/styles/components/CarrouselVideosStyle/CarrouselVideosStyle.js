import { style } from "typestyle";

const CarrouselVideosStyle = style({
    position: "fixed",
    padding: '20px',
    top: '160px',
    right: '80px',
    width: '275px',
    height: '52vh',
    overflow: 'scroll',
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2,
    $nest: {
        '&::-webkit-scrollbar': {
            width: '5px',     /* Tamaño del scroll en vertical */
            height: '100%',    /* Tamaño del scroll en horizontal */
            color: 'red',
            borderRight: 'solid 1px white'
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'white',
            borderRadius: '1px'
        },
        '& .carrousel_title': {
            color: 'white'
        },
        '& .image_video': {
            padding: 0,
            height: '200px',
            width: '100%',
            margin: '15px 0'
        }
    }
})

export default CarrouselVideosStyle