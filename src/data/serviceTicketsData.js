const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getServiceTicket = (id) =>
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

  export const createServiceTicket = (payload) => 
    new Promise((resolve, reject) => {
    fetch(`${_apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),

    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch
      
      (reject);
  });

  export const completeServiceTicket = (id) =>
    new Promise((resolve, reject) => {
      fetch(`${_apiUrl}/${id}/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch
        
        (reject);
    });
  

  export const deleteSingleTicket = (id) => new Promise((resolve, reject) => {
    fetch(`${_apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });