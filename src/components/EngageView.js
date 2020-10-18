import React from 'react';
import {
  Table,
  Button,
  Space,
  Row,
  Col,
  Menu,
  Dropdown,
  message,
  Layout
} from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { EllipsisOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import { Link } from 'react-router-dom';
import '../App.less';
import { engageMockData, engageData } from '../utils/mock.js';

engageMockData(10); 

const DragHandle = sortableHandle(() => (
  <EllipsisOutlined  style={{ cursor: 'pointer', fontWeight: 'bold' }} />
));

const columns = [
  {
    title: 'Actions',
    dataIndex: 'sort',
    width: 100,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: 'Guest ID',
    dataIndex: 'guestId',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Code Type',
    dataIndex: 'codeType',
  },
  {
    title: 'State',
    dataIndex: 'state',
  },
  {
    title: 'Tier',
    dataIndex: 'tier'
  },
  {
    title: 'Market',
    dataIndex: 'market'
  },
  {
    title: 'Days Since Last Contact',
    dataIndex: 'daySince'
  }
];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

let data = [];
const success = () => {
  console.log(data);
  const msg = [];
  if (data.length) {
    data.forEach(element => {
      msg.push(engageData[element].guestId);
    });
  }
  if (msg.length) message.success(`${msg.join(', ')} ${msg.length > 1 ? 'are' : 'is'} successfully saved. `);
};

const menu = (
  <Menu>
    <Menu.Item onClick={success}>
      Save List
    </Menu.Item>
    <Menu.Item>
      Create Campagin
    </Menu.Item>
  </Menu>
);

class EngageView extends React.Component {
  state = {
    dataSource: engageData,
    selectedRowKeys: [],
  };

  handleOnChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
    const hasSelected = selectedRowKeys.length > 0;
    data = hasSelected ? [...selectedRowKeys] : [];
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };
  
  render() {
    const { dataSource, selectedRowKeys } = this.state;
  
    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleOnChange,
    }
    const DraggableContainer = props => (
      <SortableContainer
        useDragHandle
        helperClass="row-dragging"
        onSortEnd={this.onSortEnd}
        {...props}
      />
    );
    return (
      <>
        <br></br>
        <br></br>
        <Layout style={{ background: '#fff', padding: 24 }}>
          <Row>
            <Col span={24} style={{textAlign: 'center'}}>
              <h3>ENGAGE</h3>
            </Col>
          </Row>
          <Row style={{background: '#fff'}}>
            <Col flex='auto'>
              <Space style={{ marginTop: 10, marginBottom: 10, padding: 10, float: 'left'}}>
                <Button style={{ width: 200 }}><Link to={'/'}>Back to My Book</Link></Button>
              </Space>
            </Col>
            <Col flex='100px'>
              <Space style={{ marginTop: 10, marginBottom: 10, padding: 10, float: 'right'}}>
                <Button style={{width: 100}}>Select All</Button>
              </Space>
            </Col>
            <Col flex='100px'>
              <Space style={{ marginTop: 10, marginBottom: 10, padding: 10, float: 'right'}}>
                <Dropdown style={{ width: 100 }} overlay={menu}>
                  <Button>Actions</Button>
                </Dropdown>
              </Space>
            </Col>
          </Row>
          <Table
            className="table-striped-rows"
            pagination={false}
            scroll={{ y: 540, scrollToFirstRowOnChange: true }}
            dataSource={dataSource}
            columns={columns}
            rowKey="index"
            components={{
              body: {
                wrapper: DraggableContainer,
                row: this.DraggableBodyRow,
              },
            }}
            rowSelection={rowSelection}
            />
          </Layout>
      </>
    );
  }
}

export default EngageView;