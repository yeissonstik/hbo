import { style } from "typestyle";

const PrincipalPagesBlueStyle = style({
    background: 'red',
    $nest: {
        '& .swiper-pagination': {
            width: '50px'
        },
        '& .swiper-pagination-bullet': {
            backgroundColor: '#161693',
            opacity: 1
        },
        '& .swiper-pagination-bullet-active': {
            backgroundColor: '#ffffff'
        }
    }
})

export default PrincipalPagesBlueStyle;