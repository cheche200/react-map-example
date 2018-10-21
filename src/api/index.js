import axios from 'axios';

export default class Api {
  constructor(baseUrl = null) {
    this.config = {
      baseURL: baseUrl || process.env.API_BASE_URL,
      timeout: 0,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
    };

    Api.enableRequestLogging();
  }

  http = () => {
    return Api.mockRequests(
      axios.create({ ...this.config })
    );
  }

  /**
   * Make a GET request with a fresh axios instance
   * @returns mixed
   */
  get = (url, config = {}) => this.http().get(url, config).then(resp => Promise.resolve(resp.data));

  /**
   * Make a POST request with a fresh axios instance
   * @returns mixed
   */
  post = (url, params = {}, config = {}) => this.http().post(url, params, config).then(resp => Promise.resolve(resp.data));

  put = (url, params = {}, config = {}) => this.http().put(url, params, config).then(resp => Promise.resolve(resp.data));

  /**
   * Set the bearer token against the auth header
   * @returns void
   */
  static setBearer = (token) => {
    axios.defaults.headers.Authorization = token ? `Bearer ${token}` : undefined;
  }

  /**
   * Mock the requests.
   *
   * Useful for testing or local development
   */
  static mockRequests(http) {
    if (process.env.REACT_APP_MOCK_API_REQUESTS === 'on') {
      this.mocker = require('../__mocks__/client.mock');
      this.mocker.apply(http);
    }

    return http;
  }

  /**
   * Add a logging interceptor to the requests.
   * @returns void
   */
  static enableRequestLogging() {
    if (process.env.NODE_ENV === 'development') {
      axios.interceptors.response.use(res => res, (err) => {
        console.error('%c Request error', err);
        return Promise.reject(err);
      });
    }
  }
}