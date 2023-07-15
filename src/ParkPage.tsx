import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css'

const ParkPage: React.FC = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const [park, setPark] = useState<Park | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchPark = async () => {
      try {
        const response = await axios.get(
          `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=hm7AFz709emgcq69d0bRkSYxJ34mWehxJ2ewiMkN`
        );
        setPark(response.data.data[0]);
        const image = await import(`./assets/national-park-pics/${parkCode}.jpeg`);
        setBackgroundImage(image.default)

      } catch (error) {
        console.error('Error fetching park:', error)
      }
    };

    fetchPark()
  }, [parkCode])


  if (!park || !backgroundImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className='park-container'
      style={{backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: 'no-repeat',
      height: '100vh'}}>
      <div className='content-container'>
      <h1>{park.name}</h1>
      <h2>{park.state}</h2>
      <p>{park.description}</p>
      </div>
    </div>
  );
};

export default ParkPage;