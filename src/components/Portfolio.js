import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getData } from '../helper/getData';
export default function Portfolio() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((items) => {
      setData(items.projects);
    });
  }, []);

  return (
    <div class='row' data-portfolio>
      {data.map((e) => {
        return <Card {...e} />;
      })}
    </div>
  );
}
