import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { getEmployees } from "../../data/employeeData";
import { getCustomers } from "../../data/customerData";
import { createServiceTicket } from "../../data/serviceTicketsData";
import { getServiceTickets } from "../../data/serviceTicketsData";

const initialState = {
  customerId: 0,
  employeeId: 0,
  description: '',
  emergency: false,
  dateCompleted: null,
}

export default function CreateTicket() {
  const [formInput, setFormInput] = useState(initialState);
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [serviceTickets, setServiceTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees().then(setEmployees);
    getCustomers().then(setCustomers);
    getServiceTickets().then(setServiceTickets);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...formInput};
    createServiceTicket(payload).then(() => {
    navigate('/tickets');
    })
  }

  return (
    <form onSubmit={handleSubmit}>
    <h2 className="text-white mt-5">Create Service Ticket</h2>

    {/* DESCRIPTION INPUT  */}
    <label>
        Ticket Description: <input 
                              name="description"
                              value={formInput.description}
                              onChange={handleChange}
                              required
                              />
    </label>

    <hr />

    <label>
      Pick a Customer:
      <select name="customerId">
      <option value="">Select a Customer</option>
          {
            customers.map((customer) => (
              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.name}
              </option>
            ))
          }
      </select>
    </label>

    <hr />

    <label>
      Pick an Employee:
      <select name="employeeId">
      <option value="">Select an Employee</option>
          {
            employees.map((employee) => (
              <option
                key={employee.id}
                value={employee.id}
              >
                {employee.name}
              </option>
            ))
          }
      </select>
    </label>

    <hr />

    <label>
        Emergency?: <input
                      type="checkbox"
                      name="emergency" 
                      checked={formInput.emergency} 
                      onChange={(e) => {
                        setFormInput((prevState) => ({
                          ...prevState,
                          emergency: e.target.checked,
                        }));
                      }} 
                    />
      </label>

      <hr />

      <Button type="submit">Create Ticket</Button>

    </form>
  )
}

// export { CreateTicket };