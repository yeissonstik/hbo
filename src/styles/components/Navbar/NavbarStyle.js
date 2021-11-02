import { style } from "typestyle";

const NavbarStyle = style({
    zIndex: 10,
    position: "fixed",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    top: '0',
    left: '0',
    color: 'white',
    $nest: {
        '& .logos': {
            width: '50%'
        },
        '& img': {
            margin: '20px'
        },
        '& .login_seccion': {
            display: 'flex',
            $nest: {
                '& .login_title': {
                    cursor: 'pointer'
                },
                '& .login_closed-icon': {
                    cursor: 'pointer'
                },
                '& .menu_container': {
                    position: 'absolute',
                    width: '220px',
                    top: '50px', 
                    right: '20px', 
                    backgroundColor: '#321266', 
                    listStyle: 'none',
                    transition: 'right 5s linear',
                    $nest: {
                        '& .menu_list': {
                            listStyle: 'none', 
                            margin: '0', 
                            padding: '20px',
                            $nest: {
                                '& li': {
                                    fontSize: '17px',
                                    textAlign: 'end',
                                    borderBottom: '0.5px white solid',
                                    padding: '8px 0'
                                },
                                '& li:nth-last-child(1)': {
                                    borderBottom: 'none',
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})

export default NavbarStyle