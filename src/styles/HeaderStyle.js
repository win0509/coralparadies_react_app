
import { styled } from 'styled-components';


export const NavList = styled.div`
    width:100%;
    height:auto;
    display:flex;
    
    .navi{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 5px 25px 5px #F5F5F5;
        padding: 0 100px;
        /* align-items: center; */
    }
    .navi li:nth-child(2){
        display: flex;
        align-items: center;
        column-gap: 1rem;
    }
    .navi li > a{
        font-size: 1.2rem;
        /* font-weight: ; */
    } 

    .logo{
       width : 200px;
       height: 35px;
    }

`;


