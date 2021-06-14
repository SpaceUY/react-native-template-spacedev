import { useCallback, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import { uploadFile } from '_app/uploadFile';

/**
 * Pick an image using `react-native-image-crop-picker` and upload it
 * @param {(fileUrl: string) => void} onValueChange function that gets called when the upload is done
 * @returns {[number, () => Promise<void>]}
 */
const useImageUpload = (onValueChange) => {
  const [progress, setProgress] = useState(0);

  const handleUpload = useCallback(async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 270,
        height: 270,
        cropping: true,
        multiple: false,
      });

      const { fileUrl } = await uploadFile(
        {
          name: image.filename,
          uri: image.path,
          mime: image.mime,
        },
        setProgress,
      );

      onValueChange(fileUrl);
      setProgress(0);
    } catch (err) {
      setProgress(0);
      throw err;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [progress, handleUpload];
};

export default useImageUpload;
