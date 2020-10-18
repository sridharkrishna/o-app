import React from 'react';
import 'antd/dist/antd.less';
import { Breadcrumb } from 'antd';
import '../App.less';
import SortableTable from '../components/SortableTable.js';
import CompReview from '../components/CompReview.js'

function DashView() {
  return (
  <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item style={{fontWeight: 'bold'}}>COMP REVIEW</Breadcrumb.Item>
      </Breadcrumb>
        <div>
          <CompReview />
          <br></br>
          <br></br>
          <SortableTable />
      </div>
  </>
  );
}

export default DashView;
