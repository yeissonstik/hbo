import { style } from "typestyle";

const PrincipalPagesGoldenStyle = style({
    background: 'red',
    $nest: {
        '& .swiper-pagination': {
            width: '50px'
        },
        '& .swiper-pagination-bullet': {
            backgroundColor: '#E5B168',
            opacity: 1
        },
        '& .swiper-pagination-bullet-active': {
            backgroundColor: '#ffffff'
        }
    }
})

export default PrincipalPagesGoldenStyle;