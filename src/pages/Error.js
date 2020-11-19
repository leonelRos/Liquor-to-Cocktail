import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-page">
      <div className="error-conatiner">
        <h1>Oops you dont want to be here</h1>
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </div>
      ;
    </section>
  );
}
