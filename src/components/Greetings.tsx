import React from "react";

interface GreeterPropos {
  person: string;
}

function Greetings({ person }: GreeterPropos): JSX.Element {
  return <h1>Hello, {person}</h1>;
}

export default Greetings;
