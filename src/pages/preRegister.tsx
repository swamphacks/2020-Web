import React, {useState, FormEvent} from 'react';
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

const Form = styled.form`
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

type Errors = {
  name?: string;
  email?: string;
};

const PreRegister: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [field1, setField1] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({name: '', email: ''});
  const formData: FormData = {
    name: name,
    email: email,
    suggestions: field1
  };

  function validateForm(data: FormData) {
    return true;
  }

  function submitForm(data: FormData) {
    // Validate the form data
    if (validateForm(data)) {
      console.log(data);
    }
  }

  return (
    <Background>
      <Title>Pre-Register</Title>
      <Form>
        <InputField
          required
          placeholder="Name"
          type="text"
          name="name"
          errorText={errors['name']}
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
        <br />
        <InputField
          required
          placeholder="Email"
          type="email"
          name="email"
          errorText={errors['email']}
          onChange={event => setEmail(event.target.value)}
        ></InputField>
        <br />
        <TextAreaField
          title="What workshops would you like to see at SwampHacks VI?"
          placeholder="React, MongoDB, machine learning, etc..."
          name="suggestions"
          value={field1}
          onChange={event => setField1(event.target.value)}
        />
        <br />
        <button type="submit" onClick={() => submitForm(formData)}>
          Submit
        </button>
      </Form>
    </Background>
  );
};

export default PreRegister;
