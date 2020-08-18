import React, { ChangeEvent, ReactElement } from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid4';

interface Props {
  id?: string;
  type?: 'text' | 'password';
  value: string | number;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void | Promise<void>;
}

const Container = styled.div`
  display: block;
  position: relative;

  input {
    display: block;
    padding: 10px 20px;
    border: 1px solid #dedede;
    outline: none;
  }
`;

const PlaceholderText = styled.label`
  display: block;
  color: #888;
`;

function Input({ id = uuid4(), type = 'text', value, placeholder, onChange }: Props): ReactElement {
  return (
    <Container>
      <input id={id} type={type} value={value} onChange={onChange} />
      {placeholder && <PlaceholderText htmlFor={id}>{placeholder}</PlaceholderText>}
    </Container>
  );
}

export default Input;
