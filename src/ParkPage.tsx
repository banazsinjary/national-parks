import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ParkPage: React.FC = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const [park, setPark] = useState<Park | null>(null);

  useEffect(() => {
    const fetchPark = async () => {
      try {
        const response = await axios.get(
          `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=hm7AFz709emgcq69d0bRkSYxJ34mWehxJ2ewiMkN`
        );
        setPark(response.data.data[0]);
      } catch (error) {
        console.error('Error fetching park:', error);
      }
    };

    fetchPark();
  }, [parkCode]);

  if (!park) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{park.name},{park.state}</h1>
      <p>{park.description}</p>
    </div>
  );
};

export default ParkPage;