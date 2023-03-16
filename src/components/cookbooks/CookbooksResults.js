import { Link } from "react-router-dom";
import "./CookbookCard.css";
const CookbooksResults = (props) => {
  const results = props.cookbooks.map((cookbook) => {
    return (
      <Link to={`${cookbook.id}`} className="card">
        <figure className="card__thumb">
          <img
            src={cookbook.imageUrl}
            alt={cookbook.name}
            class="card__image"
          ></img>
          <figcaption className="card__caption">
            <h2 class="card__title">{cookbook.name}</h2>
            <p class="card__snippet">{cookbook.description}</p>
          </figcaption>
        </figure>
      </Link>
    );
  });

  return <div className="cookbooks-results">{results}</div>;
};

export default CookbooksResults;
