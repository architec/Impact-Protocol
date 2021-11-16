import { Layout } from 'antd';
import React from 'react';
import { AppLayoutStyles } from './AppLayout.styled';
import { Sidebar } from './Sidebar/Sidebar.component';

const { Header, Content } = Layout;

export const AppLayout = ({ networkDisplay, children }) => {
  return (
    <AppLayoutStyles>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main__layout">
        <Layout
          style={{
            margin: '0px auto',
          }}
        >
          <Header />
          {networkDisplay}
          <Content style={{ padding: '1rem', maxWidth: '1256px', margin: '0px auto', width: '100%' }}>
            <div className="sider-offset">{children}</div>
          </Content>
        </Layout>
      </div>
    </AppLayoutStyles>
  );
};
