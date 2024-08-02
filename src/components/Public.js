import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Club Scribes</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          This is an application developed by a scholar from the Akademiya to
          jot down/track the tasks, after the Akasha terminal was shut down.
        </p>
      </main>
      <footer>
        <Link to="/login">User Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
