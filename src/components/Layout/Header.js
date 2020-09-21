import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/authOptions";
export default function Header() {
  return (
    <header id="header">
      <Link className="title" to="/">
        <h1>Report traffic Incident</h1>
      </Link>
      <AuthOptions />
    </header>
  );
}
