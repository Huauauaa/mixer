import { Input, Select, Button, Switch } from 'antd';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import '../assets/timestamp.less';

const { Option } = Select;

function Timestamp() {
  const [inputTime, setInputTime]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState<string>('');
  const [transformValue, setTransformValue] = useState('');
  const [unit, setUnit] = useState('s');
  const [hour12, setHour12] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(e.target.value);
  };

  const onUnitChange = (value: string) => {
    setUnit(value);
  };

  const onTransform = () => {
    setTransformValue(
      new Date(Number(inputTime) * (unit === 's' ? 1e3 : 1)).toLocaleString(
        'zh-ch',
        {
          hour12,
        },
      ),
    );
  };

  useEffect(() => {
    setTransformValue(
      new Date(Number(inputTime) * (unit === 's' ? 1e3 : 1)).toLocaleString(
        'zh-ch',
        {
          hour12,
        },
      ),
    );
  }, [hour12, inputTime, unit]);

  return (
    <div className="timestamp">
      时间戳
      <Input value={inputTime} onChange={onInputChange}></Input>
      <Select defaultValue={unit} onChange={onUnitChange}>
        <Option value="s">秒(s)</Option>
        <Option value="ms">毫秒(ms)</Option>
      </Select>
      <Button onClick={onTransform}>转换 &gt;&gt; </Button>
      hour12:
      <Switch onChange={(checked) => setHour12(checked)}></Switch>
      <Input value={transformValue} addonAfter={'北京时间'}></Input>
    </div>
  );
}

export default Timestamp;
