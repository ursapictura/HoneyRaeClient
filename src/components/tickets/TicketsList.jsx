import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { deleteSingleTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, []);

  const deleteTicket = async (id) => {
    if (window.confirm('Delete this ticket?')) {
      deleteSingleTicket(id)
      .then(() => getServiceTickets())
      .then((tickets) => setTickets(tickets));
    };
  }

  return (
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
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
              <Button onClick={() => deleteTicket(t.id)}>
                DELETE
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
