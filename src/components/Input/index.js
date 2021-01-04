import React from 'react';

import {InputContainer, Input} from './styles';

export default function InputPage ({ placeholder, type, marginTop }) {
    return (
        <InputContainer>
            <Input placeholder={placeholder} type={type} marginTop={marginTop} />
        </InputContainer>
    )
}