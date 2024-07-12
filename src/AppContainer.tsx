import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

export const AppContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Content
      className="container"
      style={{
        border: '1px solid #d9d9d9',
        borderRadius: '10px',
      }}
    >
      {children}
    </Content>
  );
};
