import { createGlobalStyle } from "styled-components";
import background from "../assets/img/background.jpg";


export const GlobalStyles = createGlobalStyle`
    :root{
        /* Color */
        --color-dark-black: #000000;
        --color-black: #343638;
        --color-white: #F7F7FF;
        --color-light-white: #f7f9fb;
        --color-gray: #fafafa;
        --color-blue: #0827F5;
        --color-light-gray: #8AA1AB;
        --color-yellow: #FFCD29; //user
        --color-dark-red: #D60F01;
        --color-red: #6C0000;
        --color-green: #4CC428; //visitor

        /* Font size */
        --font-extra-large: 60px;
        --font-large: 32px;
        --font-medium: 20px;
        --font-regular: 16px;
        --font-small: 14px;
        --font-micro: 12px;

        /* Font weight */
        --weight-bold: 700;
        --weight-semi-bold: 600; 
        --weight-regular: 400;
        --weight-light: 300;

        /* Size */
        --size-extra-large: 200px;
        --size-large: 150px;
        --size-medium: 120px;
        --size-small: 80px;
        --size-border-radius: 10px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: url(https://cur.cursors-4u.net/cursors/cur-1/cur4.cur), auto !important;
    }

    body{
        font-family: 'NeoDunggeunmo', 'NeoDunggeunmo Code';
        background: url(${background}) no-repeat;
        background-size: cover;
        color: var(--color-white);
    }

    button{
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 0px;
        font-family: 'NeoDunggeunmo', 'NeoDunggeunmo Code';
    }

    input {
        border: none;
        background-image: none;
        background-color: transparent;
        box-shadow: none;
        outline: none;
        font-family: 'NeoDunggeunmo', 'NeoDunggeunmo Code';
    } 

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
}
    
`;

// export const LogoLink = styled(Link)`
//   text-decoration: none;
//   color: var(--color-black);
//   cursor: pointer;
//   font-size: ${(props) => props.fontSize};
//   font-weight: ${(props) => props.fontWeight};
//   color: ${(props) => props.color};
// `;

// export const NavBarLink = styled(Link)`
//   text-decoration: none;
//   color: var(--color-black);
//   cursor: pointer;
//   font-size: ${(props) => props.fontSize};
//   font-weight: ${(props) => props.fontWeight};
// `;
