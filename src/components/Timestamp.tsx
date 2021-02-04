import { Input, Select, Button } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import '../assets/timestamp.less';

const { Option } = Select;

function Timestamp() {
  const [inputTime, setInputTime]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState<string>('');
  const [transformValue, setTransformValue] = useState('');
  const [unit, setUnit] = useState('s');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(e.target.value);
  };

  const onUnitChange = (value: string) => {
    setUnit(value);
  };

  const onTransform = () => {
    const rate = unit === 's' ? 1e3 : 1;
    setTransformValue(new Date(Number(inputTime) * rate).toLocaleString());
  };

  return (
    <div className="timestamp">
      时间戳
      <Input value={inputTime} onChange={onInputChange}></Input>
      <Select defaultValue={unit} onChange={onUnitChange}>
        <Option value="s">秒(s)</Option>
        <Option value="ms">毫秒(ms)</Option>
      </Select>
      <Button onClick={onTransform}>转换 &gt;&gt; </Button>
      <Input value={transformValue} addonAfter={'北京时间'}></Input>
    </div>
  );
}

export default Timestamp;
