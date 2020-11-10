import React, { useEffect, useState } from 'react';
import getPhotos from '../helper/getPhotos';
export default function Gallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    set();
  }, []);

  async function set() {
    try {
      const photos = await getPhotos('https://www.instagram.com/ademilter/');
      setData(photos);
    } catch (e) {
      console.error('Fetching Instagram photos failed', e);
    }
  }
  return (
    <div>
      {data.map((e) => {
        console.log(e);
      })}
    </div>
  );
}
