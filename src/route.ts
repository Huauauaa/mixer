import Home from './views/Home';
import Tool from './views/Tool';
import Timestamp from './components/Timestamp';

const routers = [
  {
    path: '/',
    name: 'Home',
    type: 'menu',
    label: '首页',
    component: Home,
  },
  {
    path: '/tool',
    name: 'Tool',
    type: 'menu',
    label: '工具',
    component: Tool,
  },
  {
    path: '/tool/timestamp',
    name: 'Timestamp',
    label: '时间戳',
    component: Timestamp,
  },
];

export default routers;
