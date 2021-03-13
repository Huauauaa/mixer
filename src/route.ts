import Home from './views/Home';
import Tool from './views/Tool';
import MDN from './views/MDN';
import Gist from './views/Gist';
import Timestamp from './components/Timestamp';
import NameFormat from './components/NameFormat';
import JSONFormat from './components/JSONFormat';
import IntlPanel from './components/IntlPanel';
import GitGist from './components/GItGist';
import Symbol from './components/Symbol';

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
  {
    path: '/tool/symbol',
    name: 'Symbol',
    label: '一些符号',
    component: Symbol,
  },
  {
    path: '/MDN',
    name: 'MDN',
    type: 'menu',
    label: 'MDN',
    component: MDN,
  },
  {
    path: '/MDN/Intl',
    name: 'Intl',
    label: 'Intl',
    component: IntlPanel,
  },
  {
    path: '/gist',
    name: 'Gist',
    type: 'menu',
    label: 'Gist',
    component: Gist,
  },
  {
    path: '/gist/git',
    name: 'Git',
    label: 'Git',
    component: GitGist,
  },
];

export default routers;
