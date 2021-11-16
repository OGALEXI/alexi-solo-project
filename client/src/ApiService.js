const BASE_URL = 'http://localhost:3001';

const ApiService = {};

ApiService.signup = (user) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

ApiService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

ApiService.getUserProfile = () => {
  return fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

ApiService.logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

ApiService.createJournalEntry = () => {
  return fetch(`${BASE_URL}/journal`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json'},
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export default ApiService;