import React from 'react'
import UploadForm from './UploadForm'
import { Button, Modal } from 'antd'

function App() {
  const [visible, setVisible] = React.useState(false)

  return (
    <div>
      <UploadForm />
      <Button onClick={() => setVisible(true)}>open modal</Button>
      <Modal title='select file with modal' visible={visible} onCancel={() => setVisible(false)}>
        <UploadForm />
      </Modal>
    </div>
  )
}

export default App
