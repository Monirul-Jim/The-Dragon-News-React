import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../news/NewsCard';

const Category = () => {
    const categoryNews=useLoaderData();
    return (
        <>
          <h2>Dragon News Home</h2>
          <div>
          {
            categoryNews.map(news=><NewsCard key={news._id} news={news} ></NewsCard>)
          }
          </div>
        </>
    );
};

export default Category;
