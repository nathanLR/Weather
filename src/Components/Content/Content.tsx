import React from "react";
import LatestSearches from "../LatestSearches";
import Weather from "../Weather";

import "./Content.style.scss";

function Content() {
  return (
    <section className="Content">
      <Weather />
      <LatestSearches />
    </section>
  );
}

export default Content;
