import styled from 'styled-components';
import useFormId from '../../hooks/useFormId';
import { ReactElement } from 'react';

interface Props {
  id?: string;
  options: {
    value: string | number;
    text: string;
  }[];
  label?: string;
}

const Container = styled.div`
  position: relative;

  select {
    display: block;
    width: 100%;
    height: 40px;
    padding: 8px 20px;
    border: 1px solid #ddd;
    outline: 0;
  }
`;

function Select({ id, options, label }: Props): ReactElement {
  const inputId = useFormId(id);

  return (
    <Container>
      {label && <label id={inputId}>{label}</label>}
      <select name="" id={inputId}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.text}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Select;
