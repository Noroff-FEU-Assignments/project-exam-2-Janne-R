const postRequest = async (url, data, headers = {}) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      ...headers
    }
  };

  const response = await fetch(url, options);
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;

  }
  throw new Error("request failed");
};

export default postRequest;