import React, { useState, useEffect } from 'react';
import Loader from './Loader';
export default function Gallery() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.items);
      setIsLoading(false);
    });
  }, []);

  async function getPosts() {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@korayguler`,
    );
    const result = await response.json();
    console.log(result);
    return result;
  }
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='posts'>
          {posts.map((e) => {
            return (
              <a
                className='post'
                href={e.link}
                target='_blank'
                rel='noreferrer'
              >
                <div className='image'>
                  <img src={e.thumbnail} alt={e.title} />
                </div>
                <div className='content'>
                  <h2>{e.title}</h2>
                  <p>
                    {e.categories.map((e) => {
                      return <span>{e}</span>;
                    })}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
