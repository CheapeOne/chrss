import React from 'react';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return <Text>chrss</Text>;
};

export default Logo;

const Text = styled.h1`
  font-family: 'DM Serif Display', serif;
  color: ${({ theme }) => theme.dark};
`;
