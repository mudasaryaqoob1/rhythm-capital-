import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  Status: string;
  image: string; // New field for different images
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Login',
    dataIndex: 'name',
    width:'33%',
    render: (_, record: DataType) => (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {/* Left-side Image (Unique for each user) */}
        <img 
          src={record.image} 
          alt={record.name} 
          style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }} 
        />
        
        {/* Name */}
        <span>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{record.name}</span>
        </span>
      </span>
    ),
  },
  {
    title: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Date
        <img 
          src='/flattenAccount/arrow-down.png' 
          alt='Age Icon' 
        />
        
      </div>
    ),
    dataIndex: 'date',
   
  },
 
  {
    title: 'Status',
    dataIndex: 'Status',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Olivia Rhye',
    date: '12-12-24',
    Status: 'Open',
    image: '/flattenAccount/Avatar1.png', // Unique Image
  },
  {
    key: '2',
    name: 'Olivia Rhye',
    date: '12-12-24',
    Status: 'Open',
    image: '/flattenAccount/Avatar.png', // Unique Image
  },
  {
    key: '3',
    name: 'Phoenix Baker',
    date: '12-12-24',
    Status: 'Open',
    image: '/flattenAccount/Avatar.png', // Unique Image
  },
  {
    key: '4',
    name: 'Lana Steiner',
    date: '12-12-24',
    Status: 'Open',
    image: '/flattenAccount/Avatar1.png', // Unique Image
  },
];

// rowSelection for selecting rows
const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const FlattenTable: React.FC = () => {
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');

  return (
    <div className='p-1'>
      <Table<DataType>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default FlattenTable;
