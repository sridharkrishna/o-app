import React from 'react';
import 'antd/dist/antd.less';
import { Layout, Menu, Divider } from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  DashboardOutlined,
  SettingOutlined,
  NodeIndexOutlined,
  InsertRowAboveOutlined,
  GoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import Routes from './routes';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.less';

const { Header, Content, Footer } = Layout;

function App() {
  return (
  <Router>
  <Layout>
    <Header style={{background: '#fff'}}>
        <img src="https://optx.com/wp-content/uploads/2019/11/logo.png" alt="OPTX" className="logo" />   

        <Menu theme="light" style={{ float: 'right', fontWeight: 'bold' }} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />}><Link to={'/'}>Dashboard</Link></Menu.Item>          
        <Menu.Item key="2" icon={<InsertRowAboveOutlined />}><Link to={'/engage'}>Floor View</Link></Menu.Item>
        <Menu.Item key="3" disabled={true} icon={<NodeIndexOutlined />}>Database</Menu.Item>
        <Menu.Item key="4" disabled={true} icon={<GoldOutlined />}>PD Portal</Menu.Item>
        <Menu.Item key="5" disabled={true} icon={<UserOutlined />}>Admin</Menu.Item>
        <Menu.Item key="6" disabled={true} icon={<SettingOutlined />}>Settings</Menu.Item>
        <SearchOutlined/>
        <Divider type="vertical" />
        <BellOutlined />
        <Icon type="message" style={{ fontSize: '16px', color: '#fff' }} theme="outlined" />
        </Menu>
    </Header>
      <Content style={{ padding: '0 50px' }}>
        <Routes/>
      </Content>
    <Footer></Footer>
    </Layout>
    </Router>
  );
}

export default App;
