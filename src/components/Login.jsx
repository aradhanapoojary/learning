import './Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useHistory } from "react-router-dom";

const initialValues = {
    email: '',
    password: ''
}

const validationSchema = Yup.object( {
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().min(8, 'Too Short!').required('Required')
})



function Login() {
    const history = useHistory();
    const onSubmit = values => {
        console.log('Form data', values)
        let hardcodedCred = {
            email: 'aradhana@gmail.com',
            password: 'aradhana123'
        }
    
        if ((values.email === hardcodedCred.email) && (values.password === hardcodedCred.password)) {
            history.push("/Topbar")
        } else {
            alert('wrong credentials')
        }
    }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {formik => {
                return (
                    <Form className="box">
                    <h1>Login</h1>
                    <div className='form-control'>
                    <Field 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    />
                    <ErrorMessage name='email'>
                        {errorMessage => <div className='error'>{errorMessage}</div>}
                    </ErrorMessage>
                    </div>
                    <div className='form-control'>
                    <Field 
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    />
                    <ErrorMessage name='password'>
                        {errorMessage => <div className='error'>{errorMessage}</div>}
                    </ErrorMessage>
                    </div>
                    <button type='submit' disabled={!formik.isValid} >Submit</button>
                </Form>
                )
            }}
            
        </Formik>
    )
}

export default Login
