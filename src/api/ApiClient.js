class ApiClient {
  constructor(axiosInstance, headers = {}) {
    this.headers = headers;
    this.axiosInstance = axiosInstance;
  }

  setHeaders = (headers) => {
    this.headers = {
      Accept: "application/json",
      ...headers,
    };
  };

  async get(endpoint, params = {}, opts = {}) {
    return await this.send({
      method: "get",
      endpoint: endpoint,
      params: params,
      ...opts,
    });
  }

  async post(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "post",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }

  async put(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "put",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }

  async patch(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "patch",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }
  async delete(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "delete",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }

  async send(request) {
    const {
      method = "get",
      endpoint,
      payload = {},
      headers = {},
      params,
    } = request;

    try {
      const response = await this.axiosInstance({
        method,
        headers: { ...this.headers, ...headers },
        params,
        url: endpoint,
        data: payload,
      });
      return response;
    } catch (error) {
      return { error };
    }
  }
}

export default ApiClient;
