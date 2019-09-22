import React from 'react';
import {Formik, Form, Field} from 'formik';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import * as yup from 'yup';
import styled from 'styled-components';
import * as firebase from 'firebase';
import '../css/styles.css';
import '../css/preRegister.css';

import InputField from '../components/InputField';
import TextAreaField from '../components/TextAreaField';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import WoodenSign from '../components/WoodenSign';
import LoadingOverlay from '../components/LoadingOverlay';

const Background = styled.div`
  background-image: radial-gradient(
    circle at 0% 100%,
    #5599ff 15%,
    #00ffff 85%
  );
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormContainer = styled(Form)`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

type FormData = {
  name: string;
  email: string;
  suggestions: string;
};

const schema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  // .matches(RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"))
  email: yup
    .string()
    .email('Must be a valid email.')
    .required('This field is required.'),
  suggestions: yup.string().notRequired()
});

interface Props extends RouteComponentProps<any> {}

const PreRegister: React.FC<Props> = props => {
  return (
    <Background>
      <div className={'content-container'}>
        <WoodenSign>Pre-Register!</WoodenSign>
        <Formik
          initialValues={{name: '', email: '', suggestions: ''}}
          validationSchema={schema}
          onSubmit={(values: FormData, {setSubmitting}) => {
            const db = firebase.firestore();
            let docRef = db
              .collection('years')
              .doc('2020')
              .collection('preRegisteredUsers')
              .doc(values.email.toLowerCase().trim());
            let res = docRef
              .set({
                name: values.name.trim(),
                dateRegistered: Date.now(),
                suggestions: values.suggestions.trim()
              })
              .then(() => {
                setSubmitting(false);
                props.history.push('/comingsoon', {
                  message:
                    "Thanks for pre-registering! You'll be contacted soon with more information."
                });
              });
          }}
        >
          {({isSubmitting}) => (
            <FormContainer>
              <Field
                type='name'
                name='name'
                placeholder='Name'
                component={InputField}
                autoFocus={true}
              />
              <br />
              <Field
                type='email'
                name='email'
                placeholder='Email'
                component={InputField}
              />
              <br />
              <Field
                type='suggestions'
                name='suggestions'
                placeholder='React, MongoDB, machine learning, etc...'
                title='What topics would you like to see in workshops at SwampHacks VI?'
                component={TextAreaField}
              />
              <br />
              <ButtonContainer>
                <Button
                  variant='red'
                  onClick={() => props.history.push('/comingsoon')}
                >
                  Cancel
                </Button>
                <Button type='submit' disabled={isSubmitting} variant='green'>
                  Submit
                </Button>
              </ButtonContainer>
              <br />
              {isSubmitting && <LoadingOverlay />}
            </FormContainer>
          )}
        </Formik>
      </div>
    </Background>
  );
};

export default withRouter(PreRegister);
