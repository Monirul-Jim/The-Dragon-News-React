import moment from 'moment/moment';
import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { _id, rating, total_view, title, author, thumbnail_url, image_url, details } = news
  return (
    <div>
      <Container>
        <Card className="mx-auto mb-4">
          <Card.Header className='d-flex align-items-center'>
            <Image style={{ height: '40px' }} variant="top" src={author?.img} roundedCircle />
            <div className='flex-grow-1 ps-2'>
              <h4>{author?.name}</h4>

              <h6>{moment(author?.published_date).format('yYY-MM-d')}</h6>
            </div>
            <div>
              <FaRegBookmark />
              <FaShareAlt />
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text className='text-secondary mt-2'>{details.length < 250 ? <>{details}</> :
                  <>{details.slice(0, 250)}... <br />
                    <Link to={`/news/${_id}`} className='text-decoration-none text-danger'>Read More</Link>
                  </>
                }
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex align-items-center">
            <div className='flex-grow-1'>
              <Rating
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar className='text-warning'></FaRegStar>}
                placeholderSymbol={<FaStar className='text-warning' />}
                fullSymbol={<FaStar className='text-warning' />}
              ></Rating>
              <span>{rating?.number}</span>
            </div>
            <div>
              <FaEye></FaEye> {total_view}
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default NewsCard;