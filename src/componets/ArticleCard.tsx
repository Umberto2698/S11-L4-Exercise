import { Link } from "react-router-dom";
import { Result } from "../interfaces/Articles";
import { Card, Button } from "react-bootstrap";

interface articleCard {
  article: Result;
}

const ArticleCard = ({ article }: articleCard) => {
  return (
    <Card>
      <Card.Img variant="top" src={article.image_url} width={200} height={150} />
      <Card.Body>
        <Card.Title
          className="display-6"
          style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
        >
          {article.title}
        </Card.Title>
        <Card.Text style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
          {article.summary}
        </Card.Text>
        <Link to={`details/${article.id}`}>
          <Button variant="primary">More Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
