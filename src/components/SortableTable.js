import React from 'react';
import {
  Table,
  Button,
  Space,
  Row,
  Col,
  Tooltip
} from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { EllipsisOutlined, EditOutlined, DownOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import '../App.less';
import { exceptionTypes, mockData, data } from '../utils/mock.js';

mockData(100); 

const DragHandle = sortableHandle(() => (
  <EllipsisOutlined  style={{ cursor: 'pointer', fontWeight: 'bold' }} />
));

const columns = [
  {
    title: '',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: 'Exception',
    dataIndex: 'exception',
    className: 'drag-visible',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Comp Date',
    dataIndex: 'compDate',
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
    title: 'Issuer',
    dataIndex: 'issuer',
  },
  {
    title: 'Source Comp Amount',
    dataIndex: 'sourceCompAmount',
    sorter: {
      compare: (a, b) => parseInt(a.sourceCompAmount.split('$')[1], 10) - parseInt(b.sourceCompAmount.split('$')[1], 10)
    },
  },
  {
    title: 'Exception Type',
    dataIndex: 'exceptionType',
    filters: [...exceptionTypes]
  },
];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class SortableTable extends React.Component {
  state = {
    dataSource: data,
  };

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

  handleChange = (pagination, filters, sorter) => {
    if (filters.exceptionType && filters.exceptionType.length > 0) {
      this.setState({
        dataSource: [...data.filter(d => filters.exceptionType.includes(d.exceptionType))]
      })
    } else {
      this.setState({
        dataSource: [...data]
      })
    }
  }

  render() {
    const { dataSource } = this.state;
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
        <Row style={{background: 'rgb(250,198,1)', height: 36, lineHeight: 2 ,fontWeight: 400, fontSize: 16}}>
          <Col flex="auto" style={{ textAlign: "center"}}>ALL EXCEPTIONS</Col>
          <Col flex="100px" style={{ textAlign: "right", paddingRight: 16}}>
            <EditOutlined />
          </Col>
        </Row>
        <Row style={{background: '#fff'}}>
          <Col span={24}>
            <Space style={{ marginTop: 10, marginBottom: 10, padding: 10, float: 'right'}}>
              <Button disabled={true} style={{width: 150}}>Download</Button>
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
          onChange={this.handleChange}
          footer={() => (
            <Row style={{background: 'inherit', height: 36, lineHeight: 2 ,fontWeight: 400, fontSize: 16}}>
              <Col flex="auto" style={{ textAlign: "center"}}>
                <Tooltip title="Scroll table to load more records." key={'scroll'}>
                  <DownOutlined/>
                </Tooltip>
              </Col>
            </Row>
          )}
        />

      </>
    );
  }
}

export default SortableTable;