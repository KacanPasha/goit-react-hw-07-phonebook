import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  border: red;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  width: 600px;

  & > :first-child {
    flex: 1;
    text-align: left;
  }

  & > :nth-child(2) {
    flex: 2;
    text-align: center;
  }


`;