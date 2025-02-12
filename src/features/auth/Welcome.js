import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Welcome = () => {
  const { username, isCoordinator, isAdmin } = useAuth();
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="welcome">
      <p>{today}</p>

      <h1>Welcome {username}!</h1>

      <p>
        <Link to="/dash/notes">View Club Scribes</Link>
      </p>

      <p>
        <Link to="/dash/notes/new">Add New Scribe</Link>
      </p>

      {(isAdmin || isCoordinator) && (
        <>
          <p>
            <Link to="/dash/users">View User Settings</Link>
          </p>
          <p>
            <Link to="/dash/users/new">Add New User</Link>
          </p>
        </>
      )}
    </section>
  );

  return content;
};
export default Welcome;
