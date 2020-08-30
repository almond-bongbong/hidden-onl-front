import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  children: ReactNode;
}

const Container = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Field = styled.div``;

function FormField({ label, children }: Props): ReactElement {
  return (
    <Container>
      <Label>{label}</Label>
      <Field>{children}</Field>
    </Container>
  );
}

export default FormField;
