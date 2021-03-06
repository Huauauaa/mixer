import { Link, RouteComponentProps } from 'react-router-dom';
import routers from '../route';
import { List } from 'antd';

export default function MDN(props: RouteComponentProps) {
  const items = routers.filter((item) => item.path.startsWith('/MDN/'));
  return (
    <List
      bordered
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <Link to={item.path}>{item.label}</Link>
        </List.Item>
      )}
    />
  );
}
