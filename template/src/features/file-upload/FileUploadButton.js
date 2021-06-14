import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import useImageUpload from '_hooks/useImageUpload';
import useStyles, { createStyleFactory } from '_hooks/useStyles';

const FileUploadButton = ({ style, onValueChange = () => {} }) => {
  const styles = useStyles(makeStyles);
  const [progress, handleUpload] = useImageUpload(onValueChange);

  return (
    <TouchableOpacity style={[styles.self, style]} onPress={handleUpload}>
      <Text style={styles.buttonText}>
        {progress > 0 ? `${progress}% uploaded` : 'Upload a picture'}
      </Text>
    </TouchableOpacity>
  );
};

const makeStyles = createStyleFactory(({ colors }) =>
  StyleSheet.create({
    self: {
      marginBottom: 8,
      padding: 16,
      backgroundColor: colors.secondary,
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
    },
    buttonText: {
      color: colors.text,
      fontFamily: 'Courier New',
      fontSize: 16,
      fontWeight: '800',
    },
  }),
);

FileUploadButton.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  onValueChange: PropTypes.func,
};

export default FileUploadButton;
