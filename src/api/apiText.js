const URL = "https://baconipsum.com/api/?type=meat-and-filler";

export const apiText = (url) => {
  return fetch(url)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
  })
  .then(data => {
    console.log(data)
    return data;
  })
}

export const fetchGetText = () => {
  return apiText(URL);
}