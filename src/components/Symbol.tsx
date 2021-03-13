import React from 'react';
import { Space, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import CopyButton from './CopyButton';
type SymbolType = {
  name: string;
  cn: string;
  en: string;
};

const Symbol = () => {
  const dataSource = [
    {
      name: '冒号',
      en: ':',
      cn: '：',
    },
    {
      name: '小括号',
      en: '()',
      cn: '（）',
    },
    {
      name: '中括号',
      en: '[]',
      cn: '【】',
    },
    {
      name: '分号',
      en: ';',
      cn: '；',
    },
    {
      name: '引号',
      en: `''`,
      cn: '“”',
    },
  ].map((item, index) => ({ ...item, key: index }));

  return (
    <Table dataSource={dataSource}>
      <Column title="名称" dataIndex="name" />
      <Column title="中文" dataIndex="cn" />
      <Column title="英文" dataIndex="en" />
      <Column
        title="操作"
        render={(text, record: SymbolType) => (
          <Space size="middle">
            <CopyButton text={record.cn}></CopyButton>
          </Space>
        )}
      />
    </Table>
  );
};

export default Symbol;
