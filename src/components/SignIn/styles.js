import styled from 'styled-components';

export const SigninContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(1, 191, 113, 1);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SigninWrapper = styled.div`
    width: 500px;
    height: 500px;

    background-color: #fefefe;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;

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

