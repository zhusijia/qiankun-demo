import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useState } from 'react';

const { Header, Content, Sider } = Layout;

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const goto = (title, href) => {
    window.history.pushState({}, title, href);
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => goto('angular', '/angular')}>
            <Icon type="user" />
            <span>angular</span>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => window.history.pushState({}, '', '/react')}
          >
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: '100%'
          }}
        >
          <div id="container__1"></div>
          <div id="container__2"></div>
        </Content>
      </Layout>
    </Layout>
  );
};

// const MainPage = ({ content }) => {
//   return (
//     <div>
//       {content ? (
//         <div dangerouslySetInnerHTML={{ __html: content }}></div>
//       ) : (
//         <h1 style={{ textAlign: 'center' }}>MainPage</h1>
//       )}
//     </div>
//   );
// };

export default MainPage;
