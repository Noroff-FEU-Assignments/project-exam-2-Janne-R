const postFormData = async (url, body, headers = {}) => {
  const options = {
    method: "POST",
    body,
    headers: {
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

export default postFormData;