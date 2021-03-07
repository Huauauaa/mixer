import { Space, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React from 'react';
import CopyButton from './CopyButton';
import dataSource from '../json/git.json';

type GitType = {
  desc: string;
  cmd: string;
};

const GitGist = () => {
  return (
    <>
      <Table dataSource={dataSource.map((item, key) => ({ ...item, key }))}>
        <Column title="description" dataIndex="desc" key="desc" />
        <Column title="command" dataIndex="cmd" key="cmd" />
        <Column title="Example" dataIndex="example" key="example" />
        <Column
          title="操作"
          key="action"
          render={(text, record: GitType) => (
            <Space size="middle">
              <CopyButton text={record.cmd}></CopyButton>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default GitGist;
