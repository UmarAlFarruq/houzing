
import { Form, Input, InputNumber } from "antd";

export const AntdInput = ({
    name,
    type,
    placeholder,
    width,
}) => {
    return (
        <Form.Item
            name={name}
        // width={width || '100%'}
        >
            {type ? < InputNumber placeholder={placeholder} />
                : <Input placeholder={placeholder} style={{ width: width || '96%' }} />
            }
        </Form.Item>
    );
}
export default AntdInput;