import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export const Form = () => {
    const schema = yup.object().shape({
        fullName:yup.string().required("Full name is required"),
        email:yup.string().email().required(),
        age:yup.number("Age must be a number").positive().integer().min(18).required(),
        password:yup.string().min(6).required(),
        confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()
    })
    const {register, handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)});

    const onSubmit = (data) => {
        console.log('Form submitted',data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('fullName')}/>
      {errors.fullName && <p>{errors.fullName.message}</p>}
      <input type="text" placeholder="Email" {...register('email')}/>
      {errors.email && <p>{errors.email.message}</p>}

      <input type="number" placeholder="Age" {...register('age')}/>
      {errors.age && <p>{errors.age.message}</p>}

      <input type="password" placeholder="Password" {...register('password')}/>
      {errors.password && <p>{errors.password.message}</p>}
      <input type="password" placeholder="Confirm Password" {...register('confirmPassword')}/>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}