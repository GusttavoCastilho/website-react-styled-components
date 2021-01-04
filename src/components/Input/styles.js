import styled from 'styled-components';

export const InputContainer = styled.div`
     width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 300px;
    height: 50px;

    border: 1px solid #333;
    color: #333;
    border-radius: 8px;
    padding-left: 10px;
    outline: none;

    margin-top: ${({marginTop}) => (marginTop ? '10px' : '0px')};

    ::Placeholder {
        color: #333;
    }
`;