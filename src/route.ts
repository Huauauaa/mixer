import Home from './views/Home';
import Tool from './views/Tool';
import Timestamp from './components/Timestamp';
import NameFormat from './components/NameFormat';
import JSONFormat from './components/JSONFormat';

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
  {
    path: '/tool/name-format',
    name: 'NameFormat',
    label: '命名格式化',
    component: NameFormat,
  },
  {
    path: '/tool/json-format',
    name: 'JSONFormat',
    label: 'JSON格式化',
    component: JSONFormat,
  },
];

export default routers;
