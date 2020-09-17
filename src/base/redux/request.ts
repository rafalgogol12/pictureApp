import { API_URL } from '../../utils/constans';

const request = async (data: string) => {
  const headers = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: data }),
  };

  return fetch(API_URL, headers).then(async r => {
    const jsonResponse = await r.json();
    if (r.status === 200) {
      return jsonResponse;
    } else {
      throw jsonResponse;
    }
  });
};

export default request;
