import { Input, List } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import _ from 'lodash';
import React from 'react';
import CopyButton from './CopyButton';

type FormatType = {
  type: string;
  text: string;
};

function NameFormat() {
  const [input, setInput] = useState('');
  const [data, setData]: [
    FormatType[],
    Dispatch<SetStateAction<FormatType[]>>,
  ] = useState<FormatType[]>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setData([
      {
        type: 'camelCase',
        text: _.camelCase(value),
      },
      {
        type: 'bigCamelCase',
        text: _.upperFirst(_.camelCase(value)),
      },
      {
        type: 'kebabCase',
        text: _.kebabCase(value),
      },
      {
        type: 'lowerCase',
        text: _.lowerCase(value),
      },
      {
        type: 'snakeCase',
        text: _.snakeCase(value),
      },
      {
        type: 'upperSnakeCase',
        text: _.snakeCase(value).toUpperCase(),
      },
      {
        type: 'startCase',
        text: _.startCase(value),
      },
      {
        type: 'upperCase',
        text: _.upperCase(value),
      },
    ]);
  };

  return (
    <div className="name-format">
      <Input
        value={input}
        onChange={onInputChange}
        placeholder="请输入"
      ></Input>
      {data.length ? (
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ display: 'flex' }}>
              {item.type}: {item.text}
              <CopyButton text={item.text}></CopyButton>
            </List.Item>
          )}
        />
      ) : null}
    </div>
  );
}

export default NameFormat;
