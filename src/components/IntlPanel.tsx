import React, { useState, useEffect } from 'react';
import { Form, Radio, Switch, Row, Col, Statistic } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import CopyButton from './CopyButton';

const number = -123456.789;

const IntlPanel = () => {
  const [result, setResult] = useState<string>('');
  const [options, setOptions] = useState<string>('');
  const [locales, setLocales] = useState<string | undefined>(undefined);
  const [style, setStyle] = useState<string>('decimal');
  const [currency, setCurrency] = useState<string>('CNY');
  const [unit, setUnit] = useState<string>('acre');
  const [useGrouping, setUseGrouping] = useState<boolean>(true);
  const [currencyDisplay, setCurrencyDisplay] = useState<string>('symbol');
  const [currencySign, setCurrencySign] = useState<string>('standard');

  useEffect(() => {
    const options = {
      style,
      currency,
      unit,
      useGrouping,
      currencyDisplay,
      currencySign,
    };
    console.log(options);
    setOptions(
      `new Intl.NumberFormat(${JSON.stringify(locales)}, ${JSON.stringify(
        options,
        null,
        '\t',
      )}).format(${number})`,
    );
    setResult(new Intl.NumberFormat(locales, options).format(number));
  }, [
    locales,
    style,
    currency,
    unit,
    useGrouping,
    currencyDisplay,
    currencySign,
  ]);

  return (
    <div style={{ padding: '10px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="原值" value={number} />
        </Col>
        <Col span={12}>
          <Statistic title="结果" value={result} />
        </Col>
      </Row>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{
          locales,
          style,
          currency,
          unit,
          useGrouping,
          currencyDisplay,
          currencySign,
        }}
      >
        <Form.Item label="locales" name="locales">
          <Radio.Group onChange={(e) => setLocales(e.target.value)}>
            <Radio.Button value={undefined}>Undefined</Radio.Button>
            <Radio.Button value="zh">中</Radio.Button>
            <Radio.Button value="en">英</Radio.Button>
            <Radio.Button value="ar">Arabic</Radio.Button>
            <Radio.Button value="ru">Russian</Radio.Button>
            <Radio.Button value="ja">Japanese</Radio.Button>
            <Radio.Button value="ko">Korean</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="style" name="style">
          <Radio.Group onChange={(e) => setStyle(e.target.value)}>
            <Radio.Button value="decimal">decimal(Default)</Radio.Button>
            <Radio.Button value="currency">currency</Radio.Button>
            <Radio.Button value="percent">percent</Radio.Button>
            <Radio.Button value="unit">unit</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {style === 'currency' ? (
          <>
            <Form.Item label="currency" name="currency">
              <Radio.Group onChange={(e) => setCurrency(e.target.value)}>
                <Radio.Button value="CNY">CNY人民币</Radio.Button>
                <Radio.Button value="USD">USD美元</Radio.Button>
                <Radio.Button value="EUR">EUR欧元</Radio.Button>
                <Radio.Button value="Yen">Yen日元</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="currencyDisplay" name="currencyDisplay">
              <Radio.Group onChange={(e) => setCurrencyDisplay(e.target.value)}>
                <Radio.Button value="symbol">symbol(default)</Radio.Button>
                <Radio.Button value="narrowSymbol">narrowSymbol</Radio.Button>
                <Radio.Button value="code">code</Radio.Button>
                <Radio.Button value="name">name</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="currencySign" name="currencySign">
              <Radio.Group onChange={(e) => setCurrencySign(e.target.value)}>
                <Radio value="standard">standard</Radio>
                <Radio value="accounting">accounting</Radio>
              </Radio.Group>
            </Form.Item>
          </>
        ) : null}
        {style === 'unit' ? (
          <Form.Item label="unit" name="unit">
            <Radio.Group onChange={(e) => setUnit(e.target.value)}>
              <Radio.Button value="acre">土地</Radio.Button>
              <Radio.Button value="day">天</Radio.Button>
              <Radio.Button value="degree">度</Radio.Button>
            </Radio.Group>
          </Form.Item>
        ) : null}
        <Form.Item
          label="useGrouping"
          name="useGrouping"
          valuePropName="checked"
        >
          <Switch onChange={(checked) => setUseGrouping(checked)} />
        </Form.Item>
      </Form>
      <CopyButton text={options}>复制代码</CopyButton>
      <TextArea value={options} autoSize showCount />
    </div>
  );
};

export default IntlPanel;
