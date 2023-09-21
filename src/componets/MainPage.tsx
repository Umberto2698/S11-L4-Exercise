import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Articles } from "../interfaces/Articles";
import ArticleCard from "./ArticleCard";

const MainPage = () => {
  const articleEndPoint = "https://api.spaceflightnewsapi.net/v4/articles?limit=9";

  const fetchArticles = async () => {
    const dataObj = await fetch(articleEndPoint);
    if (dataObj.ok) {
      const data = await dataObj.json();
      setArticles(data);
    }
  };

  const [articles, setArticles] = useState<null | Articles>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10}>
          <h1 className="display-1">To Infinity and Beyond</h1>
        </Col>
        <Container>
          <Row>
            {articles &&
              articles.results.map((el) => (
                <Col xs={4} key={el.id} className="my-3">
                  <ArticleCard article={el}></ArticleCard>
                </Col>
              ))}
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default MainPage;
