import React, { useEffect } from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default (props: any): any => {
  const { onClose, submit, visible } = props;
  const [form] = Form.useForm();
  useEffect(() => {}, []);
  async function onCheck() {
    try {
      const values = await form.validateFields();
      onClose();
      submit(values);
      form.resetFields();
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }
  const validateTrigger = {
    validateTrigger: ['onChange', 'onBlur'],
  };
  return (
    <Drawer
      title="新建数据库"
      width={'40%'}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button htmlType="submit" type="primary" onClick={onCheck}>
            Submit
          </Button>
        </div>
      }
    >
      <Form layout="vertical" form={form}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="dbName"
              label="数据库名称"
              rules={[{ required: true, message: '请输入数据库名' }]}
              {...validateTrigger}
            >
              <Input placeholder="请输入数据库名" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={22}>
            <Form.Item name="tableName" label="表名称" {...validateTrigger}>
              <Input placeholder="请输入表名称" />
            </Form.Item>
            <Button onClick={() => {}} block icon={<PlusOutlined />}></Button>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
