import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomer } from "../../data/customerData";
import { Link } from "react-router-dom";

export default function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    getCustomer(id).then(setCustomer);
  });

  if (!customer) {
    return null;
  }

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Customer</th>
            <td>{customer.name}</td>
          </tr>
          <tr>
            <th scope="row">Specialty</th>
            <td>{customer.address}</td>
          </tr>
        </tbody>
      </Table>

      <h3>Service Tickets</h3>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Emergency?</th>
            <th>Date Completed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customer.serviceTickets
            ? customer.serviceTickets.map((t) => (
                <tr key={`ticket-${t.id}`}>
                  <th scope="row">{t.id}</th>
                  <td>{t.description}</td>
                  <td>{t.emergency ? "yes" : "no"}</td>
                  <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
                  <td>
                    <Link to={`${t.id}`}>Details</Link>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </Table>
    </>
  );
}
