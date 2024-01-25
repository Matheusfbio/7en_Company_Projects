import { useState } from 'react'
import api from '../../api/api'

export const Upload = () => {
  const [file, setFile] = useState<File | undefined>()

  const uploadPDF = async (event) => {
    event.preventDefault()

    if (!file) {
      return
    }

    const formData = new FormData()

    formData.append('file', file)
    formData.append('type', file.type)

    // console.log(formData);
    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    await api
      .post('/resume/file', formData, headers)
      .then((data) => {
        console.log(data)
      })
      .catch(() => {})
  }

  const handleUpload = (event) => {
    setFile(event.target.files[0])
    console.log('Console', event.target.files[0].name)
  }

  const handleFileUploadButtonClick = () => {
    console.log(file)
  }

  return (
    <div>
      <form onSubmit={uploadPDF}>
        <input id="file" type="file" name="_filename" onChange={handleUpload} />
        <button onClick={handleFileUploadButtonClick}>Upload file</button>
      </form>
    </div>
  )
}