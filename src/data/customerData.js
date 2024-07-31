const _apiUrl = "/api/customers";

export const getCustomers = () => {
    return fetch(_apiUrl).then((r) => r.json());
};

export const getCustomer = (id) =>
    new Promise((resolve, reject) => {
      fetch(`${_apiUrl}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
  
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
    });