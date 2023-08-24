import { styled } from 'styled-components';


export const MainImg = styled.div`
    .main-img{
        width: 800px;
        height: 500px;
    }

`;

export const Searchbox = styled.div`
    .search-wrap{
        width: 400px;
        height: 300px;
        border-radius: 30px;
        box-shadow: 0 5px 25px 5px #F5F5F5;
        padding: 20px;
    }
    .search-wrap .search{
        display: flex;
        flex-direction: column;
        row-gap: .5rem;
    }
    .search-wrap h2{
        font-size: 1.5rem;
        line-height: 1.5;
    }
    .search-wrap  > p{
        font-size: 1rem;
        color: #7C7C7C;
        padding-bottom: 16px;
    }
    .search-wrap .search .location{
        font-size: .8rem;
        font-weight: bold;
        width: 100%;
        height: 50px;
        background-color: #fff;
        border: 1px solid #a3a3a3;
        border-radius: 10px;
        padding: 8px 0 0 8px;
    }
    .search-wrap input{
        border: none;
    }
    .search-wrap .search .check{
        font-size: .8rem;
        font-weight: bold;
        width: 100%;
        height: 50px;
        display: flex;
        /* column-gap: 1rem; */
        background-color: #fff;
        border: 1px solid #a3a3a3;
        border-radius: 10px;
        padding: 8px 0 0 8px;
    }
    .search-wrap .search .check div:first-child{
        border-right: 1px solid #000;
        padding-right: 10px;
        
    }
    .search-wrap .search .check div:last-child{
        padding-left: 10px;
    }
    .search-wrap button{
        width: 100%;
        height: 40px;
        background-color: #FF6666;
        color: #fff;
        border-radius: 10px;
        outline: none;
        border: 0;

    }

`;