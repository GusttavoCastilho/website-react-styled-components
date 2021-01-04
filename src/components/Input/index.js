import React from 'react';

import {InputContainer, Input} from './styles';

export default function InputPage ({ placeholder, type, marginTop, border }) {
    return (
        <InputContainer>
            <Input placeholder={placeholder} type={type} marginTop={marginTop} border={border} />
        </InputContainer>
    )
}