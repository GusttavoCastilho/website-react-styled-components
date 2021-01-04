import styled, { keyframes } from 'styled-components';

import { Link as LinkR } from 'react-router-dom';

export const SignupContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background:
		linear-gradient(-135deg, rgb(1, 191, 113) 10%, transparent),
		repeating-linear-gradient(45deg, rgba(1, 191, 113, 1) 0%, rgba(1, 163, 55, 0.6) 5%, transparent 5%, transparent 10%),
		repeating-linear-gradient(-45deg, rgba(1, 191, 113, 0.4) 0%,  rgba(1, 163, 55, 0.6) 5%, transparent 5%, transparent 10%);
	background-color: rgba(1, 191, 113, 0.25);


    display: flex;
    align-items: center;
    justify-content: center;
`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SignupWrapper = styled.div`
    width: 500px;
    height: 330px;

    background-color: #fefefe;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;
    animation: ${appearFromLeft} 1s;


    h1 {
        font-size: 32px;
        font-weight: bold;
        color: #333;
        padding: 10px 0;
    }

    h3 {
        font-size: 16px;
        color: #333;
        font-weight: 300;
        padding-bottom: 20px;
    }

    button {
        margin-top: 20px;
        width: 300px;
        height: 50px;
        background-color: #01bf71;
        border: none;
        border-radius: 8px;
        outline: none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        :hover {
            background-color: #333;
        }
    }
`;

export const NavSignup = styled(LinkR)`
         font-size: 16px;
        color: #01bf71;
        font-weight: 500;
        padding-bottom: 20px;
`;