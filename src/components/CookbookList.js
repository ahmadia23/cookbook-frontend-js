import { useState, useEffect } from "react";
import CookbookCard from "./CookbookCard";

function CookbookList() {
  const [cookbooks, setCookbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cookbooks")
      .then((res) => res.json())
      .then((data) => setCookbooks(data.cookbooks))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>hello !</div>
      {cookbooks.map((cookbook) => (
        <CookbookCard key={cookbook.id} {...cookbook} />
      ))}
    </div>
  );
}

export default CookbookList;
