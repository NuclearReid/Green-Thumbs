const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=nsX_tYLkRfXUGW3B11VIhFqfXXicleKvES_DT1HH1ME');
  const json = await response.json();
  console.log(json);
})();

const plantAPI = async (event) => {
    const response = await fetch('https://trefle.io/api/v1/plants?token=nsX_tYLkRfXUGW3B11VIhFqfXXicleKvES_DT1HH1ME', {
        method: 'GET',
        body: JSON.stringify({}),
        headers: {
            'content'
        }
    })
}