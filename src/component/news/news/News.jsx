import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news=useLoaderData()
    const { _id, title,image_url, details,category_id } = news;
    return (
        <div>
            <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='text-secondary'>
         {details}
        </Card.Text>
       <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft/> All News In This Category</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default News;