import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import CopyButton from './CopyButton';

const { TextArea } = Input;

function JSONFormat() {
  const [input, setInput] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput(e.target.value);
  };

  const onFormat = () => {
    try {
      const jsonObj = JSON.parse(input);
      const formatStr = JSON.stringify(jsonObj, null, '\t');
      setInput(formatStr);
    } catch (error) {
      message.error('转换有误');
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={onFormat}>格式化</Button>
      <CopyButton text={input}></CopyButton>
      <TextArea value={input} onChange={onChange} autoSize showCount />
    </div>
  );
}

export default JSONFormat;
