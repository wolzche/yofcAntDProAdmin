import React, { useEffect, useState } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';
import DbList from './components/DbList';
import SqlArea from './components/SqlArea';
import NewDb from './components/NewDb';
import styles from './Databases.less';

export default (): React.ReactNode => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(styles);
  }, []);
  const showAddDraw = () => {
    setVisible(true);
  };
  const hideAddDraw = () => {
    setVisible(false);
  };
  const newDbSubmit = (data: any) => {
    console.log(data);
  };
  function getDbOpts() {
    return (
      <>
        <PlusOutlined className={styles.optBtns} onClick={showAddDraw}></PlusOutlined>
        <SyncOutlined className={styles.optBtns}></SyncOutlined>
        <span className={styles.sqlBtn}>SQL</span>
      </>
    );
  }
  return (
    <div className={styles.dbContainer}>
      <NewDb onClose={hideAddDraw} submit={newDbSubmit} visible={visible} />
      <Card title="数据仓库" extra={getDbOpts()} className={styles.left}>
        <DbList />
      </Card>
      <Card className={styles.right}>
        <SqlArea />
      </Card>
    </div>
  );
};
