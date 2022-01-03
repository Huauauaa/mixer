import React, { Dispatch, SetStateAction, useState } from 'react';
import { List } from 'antd';
import CopyButton from './CopyButton';

function hexToRGB(hex: string) {
  let alpha = false;
  let h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map((x) => x + x).join('');
  else if (h.length === 8) alpha = true;
  const h1 = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h1 >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h1 & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h1 & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h1 & 0x000000ff}` : '') +
    ')'
  );
}

function toRGBArray(rgbStr: string) {
  const result = rgbStr.match(/\d+/g);
  if (result) {
    return result.map(Number);
  }
  return [];
}

function RGBToHSB(rgb: number[]) {
  let [r, g, b] = rgb;
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h =
    n === 0
      ? 0
      : n && v === r
      ? (g - b) / n
      : v === g
      ? 2 + (b - r) / n
      : 4 + (r - g) / n;
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}

function ColorFormat() {
  const [value, setValue] = useState('');
  const [data, setData]: [
    FormatType[],
    Dispatch<SetStateAction<FormatType[]>>,
  ] = useState<FormatType[]>([]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    const rgb = hexToRGB(e.target.value);
    setData([
      {
        type: 'HEX',
        text: e.target.value,
      },
      {
        type: 'RGB',
        text: rgb,
      },
      {
        type: 'HSB',
        text: `${RGBToHSB(toRGBArray(rgb))}`,
      },
    ]);
  }

  return (
    <div>
      <input type="color" onChange={onChange} value={value} />
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

export default ColorFormat;
