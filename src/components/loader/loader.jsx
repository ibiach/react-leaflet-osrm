import React from 'react';
import styled from 'styled-components';

import { Spin } from 'antd';

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Loader = () => {
  return (
    <Root>
      <Spin />
    </Root>
  );
};

export { Loader };
