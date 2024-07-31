import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export default function Customers() {
  return (
    <>
      <h2>Customers</h2>
      <Outlet />
    </>
  );
}
