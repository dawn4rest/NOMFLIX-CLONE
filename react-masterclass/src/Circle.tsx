import { useState } from 'react';
import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 100px;
`;

function Circle({ bgColor, borderColor, text='default text'}: CircleProps) {
  // Customize state type
  // const [counter, setCounter] = useState<number|string>(1);
  // setCounter("1");

  const [value, setValue] = useState("");

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
