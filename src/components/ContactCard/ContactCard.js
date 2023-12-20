import React from 'react';
import { Btn } from './ContactCard.Style';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

export const ContactCard = ({
  contact: { id, name, number },
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </>
  );
};