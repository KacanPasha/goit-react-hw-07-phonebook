import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';


export const BlockLabel = styled.label`
  display: block;
  text-align: left;
  padding-left: 60px;
  padding-bottom: 8px;
`;

export const BlocForm = styled(Form)`


text-align: center;
justify-content: center;
flex-direction: column;
width: 300px;
margin: 0 auto;
`;

export const BlockError = styled(ErrorMessage)`
  color: red;
  
`;
export const FieldСontainer = styled.div `
  display: block;

`;

export const Btn = styled.button`

  width: 110px;
  height: 40px;
  margin: auto;
  margin-top: 16px;
  border: none;
  color: black;
  background-color: #8e8f99;
  border-radius: 8px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #4d5ae5;
  }

  &:active {
    transition: none;
    color: #ffffff;
    background-color: #404bbf;
  }

  &:focus {
    outline: none;
  }
`;