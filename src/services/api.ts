import axios, { AxiosInstance } from 'axios';

class Api {
  private url: string;

  private api: AxiosInstance;

  constructor() {
    this.url = 'https://htmlacademy-react-2.appspot.com/six-cities';
    this.api = axios.create({
      baseURL: this.url,
      timeout: 5000,
      withCredentials: true,
    });
  }

  async getRooms() {
    const response = await this.api.get('/hotels');
    const rooms = await response.data;
    return rooms;
  }
}

export default new Api();
