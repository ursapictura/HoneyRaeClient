import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployee } from "../../data/employeeData";
import { Link } from "react-router-dom";

export default function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployee(id).then(setEmployee);
  }, )

  if (!employee) {
    return null;
  }

  return (
    <>
    <Table>
      <tbody>
        <tr>
          <th scope="row">Employee</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{employee.specialty}</td>
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
        { employee.serviceTickets? employee.serviceTickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
          </tr>
          )) : ""}
          </tbody>
        </Table>
    </>
  );
}
