import * as yup from 'yup';

const formSchema = yup.object().shape({
  coverUrl: yup.string(),
});

export default formSchema;
