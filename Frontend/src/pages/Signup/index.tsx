import { useForm } from 'react-hook-form';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './styles.css';

interface FormInputs {
  name: string;
  email: string;
  password: string;
  conf_password: string;
}

const Fields = {
  Name: {
    placeholder: 'Name',
    field: 'name',
    type: 'text',
  },
  Email: {
    placeholder: 'Email',
    field: 'email',
    type: 'email',
    invalidErrorMsg: 'Invalid Email Address',
  },
  Password: {
    placeholder: 'Password',
    field: 'password',
    type: 'password',
  },
  'Confirm Password': {
    placeholder: 'Confirm Password',
    field: 'confirm password',
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

const Signup = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data): void => console.log(data);

  return (
    <div className="card">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="signup__form">
        {Object.keys(Fields).map((name) => {
          const value = Fields[name];

          return (
            <div key={name}>
              <input
                placeholder={value.placeholder}
                {...register(value.field)}
                className="form-input"
                type={value.type}
              />
              {errors[value.field] && (
                <span className="error-msg">
                  ⚠ <p>{errors[value.field].message}</p>
                </span>
              )}
            </div>
          );
        })}
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Signup;
