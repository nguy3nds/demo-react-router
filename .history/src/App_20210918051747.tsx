import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
        voluptatum quo adipisci officiis illo blanditiis. Minus inventore
        recusandae mollitia perferendis eligendi. Qui esse perspiciatis
        veritatis laboriosam temporibus aut commodi minus?
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        corporis tempore molestias pariatur ratione incidunt dicta quia eligendi
        ea doloribus dolor eum temporibus a fugit veritatis, inventore esse, sit
        aspernatur!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
        excepturi officiis neque, maxime quis ad unde in cum voluptatem,
        voluptatum impedit, nihil rem minus reprehenderit dolorum. Vitae enim
        quod consectetur.
      </p>
    </div>
  );
}

function Users() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}
