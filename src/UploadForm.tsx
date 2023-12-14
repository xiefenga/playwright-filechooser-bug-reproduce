import React from 'react'
import { Button, Form, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';

const UploadForm = () => {
  const [form] = Form.useForm();
  const [frontendFile, setFrontendFile] = React.useState<RcFile[]>([])

  return (
    <Form form={form} className='p-4'>
      <Form.Item label='File'>
        <Upload
          maxCount={1}
          accept='.zip,application/zip,application/x-zip,application/x-zip-compressed'
          fileList={frontendFile}
          beforeUpload={(file) => {
            setFrontendFile([file])
            form.setFieldsValue({ file_name: file.name });
            return false
          }}
        >
          <Button>select</Button>
        </Upload>
      </Form.Item>
    </Form>
  )
}

export default UploadForm