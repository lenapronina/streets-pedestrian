import React from "react";

const BaseSection = ({ h2, p, children })=>{

  return (
    <section>
      <h2 class="h2">{h2}</h2>
      <p>{p}</p>
      {children}
    </section>
  )
};

export { BaseSection };
