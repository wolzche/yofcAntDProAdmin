import React, { useEffect } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;
const data = [
  {
    id: 1,
    dbName: '数据库1',
    children: [
      { id: 'tb11', tableName: '表1' },
      { id: 'tb12', tableName: '表2' },
      { id: 'tb13', tableName: '表3' },
    ],
  },
  {
    id: 2,
    dbName: '数据库2',
    children: [
      { id: 'tb21', tableName: '表1' },
      { id: 'tb22', tableName: '表2' },
    ],
  },
  {
    id: 3,
    dbName: '数据库3',
    children: [
      { id: 'tb31', tableName: '表1' },
      { id: 'tb32', tableName: '表2' },
      { id: 'tb33', tableName: '表3' },
      { id: 'tb34', tableName: '表4' },
    ],
  },
];

export default (): any => {
  useEffect(() => {
    // 组件初始化的时候 请求数据 这里使用了静态数据data
  }, []);
  function handleClick(e: any): void {
    console.log('click ', e);
  }
  return (
    <Menu
      onClick={(e) => handleClick(e)}
      style={{ width: 256 }}
      defaultSelectedKeys={['tb11']}
      defaultOpenKeys={['1', '2', '3']}
      mode="inline"
    >
      {data.map((i) => {
        return (
          <SubMenu key={i.id} icon={<AppstoreOutlined />} title={i.dbName}>
            {i.children?.map((o) => {
              return <Menu.Item key={o.id}>{o.tableName}</Menu.Item>;
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
};
