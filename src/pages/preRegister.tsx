import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

import InputField from '../components/InputField';
import TextAreaField from '../components/TextAreaField';

const Background = styled.div`
  background-image: radial-gradient(
    circle at 0% 100%,
    #5599ff 15%,
    #00ffff 85%
  );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex: 1;
   flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: regular;
  color: white;
  padding: 8vh 0 4vh 0;
  font-size: 3rem;
`;

const FormContainer = styled(Form)`
  width: 30vw;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

type FormData = {
  name?: string;
  email?: string;
  suggestions?: string;
};

const schema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  email: yup
    .string()
    .email('Must be a valid email.')
    .required('This field is required.'),
  suggestions: yup.string().notRequired()
});

const PreRegister: React.FC = () => {
  return (
    <Background>
      <Title>Pre-Register</Title>
      <Formik
        initialValues={{}}
        validationSchema={schema}
        onSubmit={(values: FormData, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({isSubmitting}) => (
          <FormContainer>
            <Field
              type="name"
              name="name"
              placeholder="Name"
              component={InputField}
            />
            <br />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              component={InputField}
            />
            <br />
            <Field
              type="suggestions"
              name="suggestions"
              placeholder="React, MongoDB, machine learning, etc..."
              title="What topics would you like to see in workshops at SwampHacks VI?"
              component={TextAreaField}
            />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </FormContainer>
        )}
      </Formik>
    </Background>
  );
};

export default PreRegister;
