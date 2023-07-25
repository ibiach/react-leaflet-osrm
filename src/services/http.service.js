import axios from 'axios';

const ERRORS = {
  badRequest: 'Bad Request',
  internalError: 'Internal Error',
};

export class HttpService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async execute(originMethod, url, options) {
    const method = originMethod.toLowerCase();

    if (typeof axios[method] === 'undefined') {
      throw new Error(ERRORS.internalError);
    }

    const executeMethod = axios[method];

    try {
      const response = await executeMethod(this.createRequestUrl(url), options);

      if (this.checkResponse(response)) {
        throw new Error(ERRORS.badRequest);
      }

      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  get(url, options = {}) {
    return this.execute('GET', url, options);
  }

  post(url, options = {}) {
    return this.execute('POST', url, options);
  }

  createRequestUrl(url) {
    return this.apiUrl + url;
  }

  createUrl(url, query) {
    let result = url;

    for (const key in query) {
      const value = query[key];

      result = result.replace(':' + key, value);
    }

    return result;
  }

  checkResponse(response) {
    return response.status !== 200;
  }
}
