import React from 'react';
import { Formik, Field } from 'formik';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { selectContacts} from '../../redux/selectors'
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
  /^\d{3}-\d{3}-\d{4}$/,
  'Invalid phone phone format (e.g., 999-999-9999)'
);

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const addContactHandler = (newContact, { resetForm }) => {
    const { name, phone } = newContact;

    const contactExists =
      contacts &&
      contacts.some(
        contact => contact.name === name || contact.phone === phone
      );

    if (contactExists) {
      alert('a contact with the same number or name already exists');
      return;
    } else {
      dispatch(addContact({ ...newContact}));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
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
            <BlockLabel>Phone</BlockLabel>

            <Field
              name="phone"
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
                  mask="999-999-9999"
                  placeholder="999-999-9999"
                />
              )}
            </Field>
            <BlockError name="phone" component="div" />
          </FieldСontainer>

          <Btn type="submit">Add contact</Btn>
        </BlocForm>
      )}
    </Formik>
  );
};
