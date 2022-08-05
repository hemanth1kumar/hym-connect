import React from 'react';
import {
  UseFormRegister,
} from 'react-hook-form';
import './styles.css';

interface Props {
  onSubmit:React.FormEventHandler<HTMLFormElement>;
  Fields: {};
  errors: {};
  register: UseFormRegister<{
    name: string,
    password: string,
    conf_password: string,
    email: string
}>;
}

const Form = ({
  onSubmit,
  Fields,
  errors,
  register
}: Props): JSX.Element => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormInputs>({
  //   resolver: yupResolver(schema),
  // });
  console.log('form render');

  return (
    <form onSubmit={onSubmit} className="form">
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
  );
};

export default Form;
