import { Link, RouteComponentProps } from 'react-router-dom';
import routers from '../route';
import { List } from 'antd';

export default function Tool(props: RouteComponentProps) {
  const tools = routers.filter((item) => item.path.startsWith('/tool/'));
  return (
    <div className="tool">
      <List
        bordered
        dataSource={tools}
        renderItem={(item) => (
          <List.Item>
            <Link to={item.path}>{item.label}</Link>
          </List.Item>
        )}
      />
    </div>
  );
}
