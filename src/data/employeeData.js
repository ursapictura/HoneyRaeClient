const _apiUrl = "/api/employees";

export const getEmployees = () => {
    return fetch(_apiUrl).then((r) => r.json());
};

export const getEmployee = (id) =>
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