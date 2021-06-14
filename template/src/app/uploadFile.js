import { Platform } from 'react-native';
import Upload from 'react-native-background-upload';
import apiClient from './apiClient';

const prefix = Platform.OS === 'ios' ? 'file://' : '';

export const uploadFile = (file, onProgress) => {
  return new Promise(async (resolve, reject) => {
    try {
      const linkResponse = await apiClient.post('/storage', {
        name: file.uri.split('/').pop(),
        type: file.mime,
      });
      const { signed } = linkResponse.data;

      const uploadId = await Upload.startUpload({
        url: signed,
        path: prefix + file.uri.replace('file://', ''),
        method: 'PUT',
        type: 'raw',
        headers: {
          'Content-Type': file.mime,
        },
        notification: {
          onProgressTitle: `Uploading ${file.uri.substr(
            file.uri.lastIndexOf('/') + 1,
          )}`,
          onCompleteTitle: `Uploaded ${file.uri.substr(
            file.uri.lastIndexOf('/') + 1,
          )}`,
        },
      });

      Upload.addListener('progress', uploadId, ({ progress }) => {
        onProgress(progress);
      });

      Upload.addListener('error', uploadId, (error) => {
        console.log(error);
        reject(error);
      });

      Upload.addListener('completed', uploadId, () => {
        resolve({
          fileUrl: signed.split('?')[0],
        });
      });
    } catch (err) {
      console.log('failing here', err);
      reject(err);
    }
  });
};
