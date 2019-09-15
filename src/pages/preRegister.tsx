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
  height: ${window.innerHeight}px;
  width: 100vw;
  display: flex;
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

function validateForm(data: FormData) {
  return true;
}

function submitForm(data: FormData) {
  // Validate the form data
  if (validateForm(data)) {
    console.log(data);
  }
}

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
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [field1, setField1] = useState<string>();
  const [errors, setErrors] = useState<Errors>();
  const formData: FormData = {
    name: name,
    email: email,
    suggestions: field1
  };
  return (
    <div>
      <Background>
        <Title>Pre-Register</Title>
        <Form>
          <InputField
            required
            placeholder="Name"
            type="text"
            name="name"
            errorText="This field is required."
            onChange={(event: any) => setName(event.target.value)}
          ></InputField>
          <InputField
            required
            placeholder="Email"
            type="email"
            name="email"
            errorText="This field is required."
            onChange={(event: any) => setEmail(event.target.value)}
          ></InputField>
          <TextAreaField
            title="What workshops would you like to see at SwampHacks VI?"
            placeholder="React, MongoDB, machine learning, etc..."
          />
          <button type="submit" onClick={() => submitForm(formData)}>
            Submit
          </button>
        </Form>
      </Background>
    </div>
  );
};

export default PreRegister;
