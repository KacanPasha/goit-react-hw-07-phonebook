import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.filter.filter);
  const newLang = e => {
    dispatch(newFilter(e.target.value));
  };

  return (
    <label>
      <input type="text" value={lang} onChange={newLang}></input>
    </label>
  );
};
