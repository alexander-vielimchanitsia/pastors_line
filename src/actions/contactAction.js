import axios from 'axios';

import { API_TOKEN, CONTACTS_API_URL, COMPANY_ID } from '../constants';
import { FETCH_CONTACTS } from './types';


export const fetchContacts = (countryId) => async (dispatch) => {
  const params = {
    companyId: COMPANY_ID,
    page: 1,
    countryId: countryId,
  };
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };

  const { data } = await axios.get(CONTACTS_API_URL, { params, headers });
  const { contacts } = data;

  let payload;
  if (contacts) {
    payload = Object.values(contacts);
  } else {
    console.error(`Could not find contacts in response[${CONTACTS_API_URL}]:`, data);
    payload = [];
  }

  dispatch({
    type: FETCH_CONTACTS,
    payload: payload,
  });
};
