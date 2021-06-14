import React, { useCallback } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import logo from '_assets/logo.png';
import useStyles, { createStyleFactory } from '_hooks/useStyles';
import formSchema from './formSchema';
import initialValues from './initialValues';
import FileUploadButton from './FileUploadButton';

const FileUpload = () => {
  const styles = useStyles(makeStyles);

  const onSubmit = useCallback((values) => {
    Alert.alert(
      'Upload me!',
      `Ready to upload ${values.coverUrl}! but I wont hehe`,
    );
  }, []);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.self}
      keyboardDismissMode="on-drag">
      <Image source={logo} style={styles.logo} />
      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formSchema}>
        {({ values, setFieldValue }) => (
          <View style={styles.row}>
            {values.coverUrl ? (
              <Image
                source={{ uri: values.coverUrl }}
                style={styles.uploadedImage}
              />
            ) : null}
            <FileUploadButton
              onValueChange={(value) => setFieldValue('coverUrl', value)}
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const makeStyles = createStyleFactory((_, safeAreaInsets) =>
  StyleSheet.create({
    self: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: safeAreaInsets.top,
      paddingBottom: safeAreaInsets.bottom,
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    logo: {
      width: '90%',
      resizeMode: 'contain',
    },
    uploadedImage: {
      width: '90%',
      height: 300,
      resizeMode: 'cover',
      marginBottom: 32,
    },
  }),
);

export default FileUpload;
