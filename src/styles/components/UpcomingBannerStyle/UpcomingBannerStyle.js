import { style } from "typestyle";

const UpcomingBannerStyle = style({
    maxWidth: '600px',
    $nest: {
        '& .bannerSlide': {
            width: '100%',
            margin: '0 !important',
            backgroundSize: 'cover',
            $nest: {
            }
        },
        '& .bannerSwiper': {
            height: '400px',
            backgroundColor: 'red',
            $nest: {
                '& .swiper-pagination-bullets': {
                    left: '0',
                    width: '20px !important'
                }
            }
        },
        '& .swiper': {
            width: '100%',
            height: '100%'
        },
        '& .swiper-slide': {
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            margin: 0
        },
        '& .bannerSwiper': {
            height: '300px',
            width: '100%',
            padding: 0,
            backgroundColor: '#000',
        },
        
    }
})

export default UpcomingBannerStyle