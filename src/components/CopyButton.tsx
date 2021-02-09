import Clipboard from 'clipboard';
import React from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { message } from 'antd';

function CopyButton({ text }: { text: string }) {
  const copy = () => {
    const clipboard = new Clipboard('.copy', {
      text: () => {
        return text;
      },
    });
    clipboard.on('success', () => {
      message.info('复制成功');
      clipboard.destroy();
    });
    clipboard.on('error', () => {
      message.info('复制失败，请重新复制');
      clipboard.destroy();
    });
  };
  return <CopyOutlined className="copy" onClick={copy} />;
}

export default CopyButton;
