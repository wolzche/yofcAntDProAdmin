import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix', // 其他的配置项还有 side | top
  contentWidth: 'Fluid', // layout的内容模式, Fluid：自适应
  fixedHeader: false, // 是否固定 header 到顶部
  fixSiderbar: true, // 是否固定导航
  colorWeak: false,
  title: '长飞数据中台系统',
  pwa: false,
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  logo: null, // 不符合ts给出的类型要求，但可以隐藏logo显示
  iconfontUrl: '',
};

export default Settings;
