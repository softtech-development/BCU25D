export default class HttpClient {
  constructor(resource) {
    this.url = `${process.env.API_URL}/${resource}?language=sv-SE`;
    console.log(this.url);
    this.apiKey = `Bearer ${process.env.API_KEY}`;
  }

  async fetchData() {
    const response = await fetch(this.url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: this.apiKey,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
}
