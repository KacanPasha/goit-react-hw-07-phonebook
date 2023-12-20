import React from 'react';
import { Formik, Field } from 'formik';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactSlice';
import {
  BlockLabel,
  BlocForm,
  BlockError,
  FieldСontainer,
  Btn,
} from './ContactForm.Style';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').required('This field is required'),
});

const phoneSchema = Yup.string().matches(
  /^\+\d{3}\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/,
  'Invalid phone number format (e.g., +380(99) 999-99-99)'
);

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.account);
  const addContactHandler = (newContact, { resetForm }) => {
    const { name, number } = newContact;

    const contactExists =
      contacts &&
      contacts.some(
        contact => contact.name === name || contact.number === number
      );

    if (contactExists) {
      alert('a contact with the same number or name already exists');
      return;
    } else {
      dispatch(addContact({ ...newContact, id: nanoid() }));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={addContactHandler}
    >
      {formikProps => (
        <BlocForm onSubmit={formikProps.handleSubmit}>
          <FieldСontainer>
            <BlockLabel>Name</BlockLabel>
            <Field name="name" placeholder="Jane Smit" />
            <BlockError name="name" component="div" />
          </FieldСontainer>

          <FieldСontainer>
            <BlockLabel>Number</BlockLabel>

            <Field
              name="number"
              validate={value => {
                try {
                  phoneSchema.validateSync(value);
                } catch (error) {
                  return error.message;
                }
              }}
            >
              {({ field }) => (
                <InputMask
                  {...field}
                  mask="+380(99) 999-99-99"
                  placeholder="+380(99) 999-99-99"
                />
              )}
            </Field>
            <BlockError name="number" component="div" />
          </FieldСontainer>

          <Btn type="submit">Add contact</Btn>
        </BlocForm>
      )}
    </Formik>
  );
};
