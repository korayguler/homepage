import React, { useState, useEffect } from 'react';
import { getData } from '../helper/getData';
export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData().then((items) => {
      setData(items.profile);
    });
  }, []);

  return (
    <>
      <section className='section'>
        <h2 className='title'>About Me</h2>
        <div className='profile'>
          <img
            src={
              !data.profilePic && process.env.PUBLIC_URL + './web/profile.jpg'
            }
            alt=''
          />
          <div>
            <span>Hi, my name is</span>
            <h1>{data.fullname}</h1>
            <p>{data.about}</p>
            <div className='connect'>
              <a href={'mailto:' + data.email} className='btn btn-hover'>
                CONTACT
              </a>
              <a
                href={data.resume}
                className='btn btn-hover'
                target='_blank'
                rel='noreferrer'
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
