import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsI } from "../interfaces/Articles";
import { Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const detailsEndPoint = "https://api.spaceflightnewsapi.net/v4/articles/";

  const [details, setDetails] = useState<null | DetailsI>(null);

  const fetchDetails = async () => {
    const dataObj = await fetch(detailsEndPoint + params.launch_id + "/");
    if (dataObj.ok) {
      const data = await dataObj.json();
      setDetails(data);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container className="mt-5">
      {details && (
        <div className="d-flex align-items-center w-100">
          <div className="d-flex align-items-center me-3">
            <img src={details.image_url} alt="Article" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <h1>{details.title} </h1>
            <p>{details.summary}</p>
            <p>
              For more Information go to <Link to={`${details.url}`}>{details.news_site}</Link>{" "}
            </p>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <Badge bg="primary">{details.published_at}</Badge>
              <Badge bg="primary">{details.updated_at}</Badge>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Details;
