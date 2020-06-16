import React, {useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import s from './InputFields.module.css'
import {
  email,
  englishCharters,
  maxLengthCreator,
  minLengthCreator,
  required,
  strongPassword,
} from '../../../assets/validators/validator'
import {Input} from '../../../assets/Forms/FormsControl'
import visible from './eye-invisible.png'

const maxLength15 = maxLengthCreator(15)
const minLength2 = minLengthCreator(2)
const Form = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
      <form  className={s.form}>

        {/*User Name Input*/}
        <div className={s.inputContainer}>
          <label htmlFor='' className={s.label}>User Name</label>
          <Field className={s.input} component={Input} autoComplete='off' validate={[required,minLength2,maxLength15,englishCharters]} name={'userName'} placeholder={`User Name`}/>
        </div>

        {/*E-mail Input*/}

        <div className={s.inputContainer}>
          <label htmlFor='' className={s.label}>E-mail</label>
          <Field className={s.input} component={Input} autoComplete='off' validate={[required,email]} name={'email'} placeholder={`SOME.EXAMPLE@GMAIL.COM`}/>
        </div>

        {/*Last Name Input*/}

        <div className={s.inputContainer}>
          <label htmlFor='' className={s.label}>Last Name</label>
          <Field className={s.input} component={Input} autoComplete='off'  name={'lastName'} placeholder={`Last Name`}/>
        </div>

        {/*First Name Input*/}

        <div className={s.inputContainer}>
          <label htmlFor='' className={s.label}>First Name</label>
          <Field className={s.input} component={Input} autoComplete='off'  name={'firstName'} placeholder={`First Name`}/>
        </div>

        {/*Pass Input*/}
        <div className={s.inputContainer}>
          <label htmlFor='' className={s.label}>New Password</label>
          <Field className={s.input} component={Input} autoComplete='off' type={isVisible ? 'text' :'password'} validate={[required, strongPassword]}  name={'password'} placeholder={`New Password`}/>
          <img src={visible} className={s.visible} alt='' onClick={()=> setIsVisible(!isVisible)}/>
        </div>

        {/*Repeat Input*/}
        <div className={s.inputContainer}>
          <label htmlFor='' className={s.label}>Repeat New Password</label>
          <Field className={s.input} component={Input} autoComplete='off' type='password' validate={required}  name={'repeatPassword'} placeholder={`Repeat New Password`}/>
        </div>


      </form>
  )
}
const ReduxForm = reduxForm({
  form: 'input',
})(Form)


const InputFields = (props) => {
  return <div>
    <ReduxForm/>
  </div>
}
const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(InputFields)
