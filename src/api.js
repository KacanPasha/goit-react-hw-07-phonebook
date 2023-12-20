import axios from 'axios';

axios.defaults.baseURL = 'https://656f05836529ec1c62372aab.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete('/contacts/:id', id);
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

