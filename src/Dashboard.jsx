// export default Dashboard;
import { Roles } from "../types/globals.js";
import { CheckRole } from "./utils/roles";
import Navbar from "./components/Navbar.jsx";
export default function Dashboard() {
  const isAdmin = CheckRole(Roles.ADMIN);
  console.log(isAdmin);
  if (!isAdmin) {
    return (
      <div>
        <Navbar />
        <h1>Not Admin</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the admin role.</p>
    </>
  );
}
