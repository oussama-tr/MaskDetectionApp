import axios from 'axios'
import { Config } from 'App/Config'

const detectionMultipartApiClient = () =>
  axios.create({
    baseURL: Config.UPLOAD_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 3000,
  })

function uploadVideo(params) {
  var video = {
    uri: params.uri,
    type: 'video/mp4',
    name: 'something.mp4',
  };

  const data = new FormData();

  data.append("file", video);

  return detectionMultipartApiClient()
    .post('/', data)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })
}

export const detectionService = {
  uploadVideo,
}
