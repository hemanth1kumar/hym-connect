import { FieldValues, useForm } from 'react-hook-form';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css';

import Form from '../../components/Form';

const Fields = {
  Email: {
    placeholder: 'Username',
    field: 'email',
    type: 'email',
  },
  Password: {
    placeholder: 'Password',
    field: 'password',
    type: 'password',
  },
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    'confirm password': yup
      .string()
      .oneOf([yup.ref('password')], "Passwords doesn't match")
      .required(),
  })
  .required();

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data): void => {
    console.log(data);
  };

  return (
    <div className="card login_card">
      <h3>Login</h3>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        Fields={Fields}
        register={register}
      />
    </div>
  );
};

export default Login;
