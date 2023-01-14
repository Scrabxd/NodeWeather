import styled from "styled-components"

export const ScrollbarWrapper = styled.div(() => ({
    width: "100%",
    height: "94%",
    overflowY: "scroll",
    scrollbarColor: "white blue",
    padding: 20,
    margin: 2,
    "::-webkit-scrollbar": {
        width: ".8rem",
    },
    "::-webkit-scrollbar-track": {
        
background: '#ebebeb',
       
        borderRadius: "15rem",
    },
    "::-webkit-scrollbar-thumb": {
        background: '#bdbdbd',
        // backgroundImage: `url("https://talentum.space/wp-content/uploads/2022/08/rocketOutlined.png")` ,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '20px',
        borderRadius: '10px',
    },
    "::-webkit-scrollbar-thumb:hover": {
        maxHeight: "10px"
    },

}))

export default ScrollbarWrapper