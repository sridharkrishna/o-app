import React from 'react';
import { Tabs, Row, Col, Dropdown, Button, Menu } from 'antd';
import {  UserOutlined, DownOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const menu = (
  <Menu >
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

const CompReview = () => (
  <Tabs defaultActiveKey="2" onChange={callback} style={{backgroundColor: '#fff', padding: 15, fontWeight:'bold'}} size="middle" >
    <TabPane tab="All Comps" key="1">
    </TabPane>
    <TabPane tab="Exceptions" key="2">
      <Row style={{ background: '#fff', height: 75, lineHeight: 2, fontWeight: 400, fontSize: 16 }}>
        <Col span={12} offset={1}>
          <Row style={{ fontSize: 16, fontWeight: 600}}>
            <Col flex="200px" style={{ textAlign: "left" }}>Department:</Col>
            <Col flex="350px" style={{ textAlign: "left", paddingRight: 16}}>
            <Dropdown  overlay={menu}>
              <Button style={{width: 350}}>
                  <DownOutlined style={{ float: 'right' }}/>
              </Button>
            </Dropdown>
            </Col>
          </Row>
      </Col>
    </Row>
    </TabPane>
    <TabPane tab="Trends"  key="3">
    </TabPane>
  </Tabs>
);

export default CompReview;