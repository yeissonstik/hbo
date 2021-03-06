import { style } from "typestyle";

const ModalVideoStyle = style({
    position: "fixed",
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 6,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    $nest: {
        '& .modal_title': {
            marginRight: '35%',
            color: 'white'
        },
        '& iframe': {
            zIndex: 1000,
        },
        '& .close_modal': {
            // position: "absolute",
            cursor: 'pointer',
            marginLeft: '800px',
            marginBottom: '40px'
            // top: '120px',
            // right: '300px',
        },
    }
})

export default ModalVideoStyle