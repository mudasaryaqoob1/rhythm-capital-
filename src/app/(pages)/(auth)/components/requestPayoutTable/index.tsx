import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  Account: string;
  Payout_ID: string;
  Requested_On: string;
  Requested_On1:string;
  Requested_On2:string;

  tags: string[];
}
const tagStyles: Record<string, { background: string; color: string; borderRadius: string ; borderColor: string  }> = {
    // Pending: { background: '#FEDF89', color: '#8B6508', borderRadius: '12px' },
    // Approved: { background: '#D4EDDA', color: '#155724', borderRadius: '12px' },
    // Rejected: { background: '#F8D7DA', color: '#721C24', borderRadius: '12px' },
    // Processing: { background: '#CFE2FF', color: '#004085', borderRadius: '12px' },
   Pending: { background: '#FFFAEB', color: '#B5B500', borderRadius: '9999px', borderColor: '#FEDF89' },
   Approved: { background: '#ECFDF3', color: '#1C7731', borderRadius: '9999px', borderColor: '#ABEFC6' },
    // Pending: { background: '#A9DFBF', color: '#145A32', borderRadius: '12px' },
  };
const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Account',
    dataIndex: 'Account',
    key: 'Account',
    render: (text) => <a className='font-semibold font-urbanist text-[14px] leading-[20px] text-[solid]'>{text}</a>,
  },
  {
    title: 'Payout ID',
    dataIndex: 'Payout_ID',
    key: 'Payout ID',
  },
  {
    title: 'Requested On',
    dataIndex: 'Requested_On',
    key: 'Requested On',
  },{
    title: 'Amount Requested',
    dataIndex: 'Requested_On1',
    key: 'Amount Requested',
  },{
    title: 'Trading Days',
    dataIndex: 'Requested_On2',
    key: 'Trading Days',
  },
  {
    title: 'Payout Request Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          const style = tagStyles[tag] || { background: '#E0E0E0', color: '#000', borderRadius: '9999px;', borderColor: '#CCC'  };
          return (
            <Tag key={tag} style={{ backgroundColor: style.background, color: style.color, borderRadius: style.borderRadius, padding: '5px 10px',border: `1px solid ${style.borderColor}`, fontWeight: 'bold' }}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Status',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a className=' border-[1px] rounded-full bg-[#ECFDF3] text-[#1C7731] border-[#ABEFC6] px-2 py-[2px]'>Active</a>
       
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    Account: '25K Full',
    Payout_ID: 'P001',
    Requested_On: '	09/25/2024',
    Requested_On1:'$1500',
    Requested_On2:'10',
    tags: ['Pending'],
  },
  {
    key: '2',
    Account: '25K Full',
    Payout_ID: 'P001',
    Requested_On: '	09/25/2024',
    Requested_On1:'$2000',
    Requested_On2:'8',
    tags: ['Approved'],
  },
  {
    key: '3',
    Account: '25K Full',
    Payout_ID: 'P001',
    Requested_On: '	09/25/2024',
    Requested_On1:'$1800',
    Requested_On2:'12',
    tags: ['Pending'],
  },
];

const RequestPayoutTable: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default RequestPayoutTable;