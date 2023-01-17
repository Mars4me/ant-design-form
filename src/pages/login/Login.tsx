import { Button, Form, Input } from 'antd';
import { FC } from 'react';

type LoginSuccess = {
    username: string;
};

export const Login: FC = () => {
    const onFinish = ({ username }: LoginSuccess) => {
        console.log('Success:', username);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ username: '' }}
            onFinish={onFinish}
            style={{ width: 400, margin: '200px auto 0 auto' }}
        >
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
