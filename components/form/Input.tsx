import React, { ChangeEvent, ReactElement } from 'react';
import styled from 'styled-components';
import useFormId from '../../hooks/useFormId';

interface Props {
  id?: string;
  type?: 'text' | 'password';
  value: string | number;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void | Promise<void>;
}

const Container = styled.div`
  display: block;
  position: relative;

  input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 8px 20px 9px;
    border: 1px solid #ddd;
    outline: none;
  }
`;

const LabelText = styled.label`
  display: block;
  position: absolute;
  top: -12px;
  left: 5px;
  padding: 0 5px;
  background-color: #fff;
  color: #666;
`;

function Input({ id, type = 'text', value, label, onChange }: Props): ReactElement {
  const inputId = useFormId(id);

  return (
    <Container>
      {label && <LabelText htmlFor={inputId}>{label}</LabelText>}
      <input id={inputId} type={type} value={value} onChange={onChange} />
    </Container>
  );
}

export default Input;
