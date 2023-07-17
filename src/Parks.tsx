import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Parks: React.FC = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchParks = async () => {
      try {
        const response = await axios.get(
          "https://developer.nps.gov/api/v1/parks?&limit=500&api_key=hm7AFz709emgcq69d0bRkSYxJ34mWehxJ2ewiMkN"
        );
        const nationalParks = response.data.data.filter(
          (park: Park) => park.designation === "National Park"
        );

        setParks(nationalParks);
      } catch (error) {
        console.error("Error fetching parks:", error);
      }
    };

    fetchParks();
  }, []);

  return (
    <div>
      <div className="park-grid">
        {parks.map((park: any) => {
            const imagePath = `/src/assets/national-park-pics/${park.parkCode}.jpeg`;
          return (
            <Link
              to={`/park/${park.parkCode}`}
              key={park.parkCode}
              className="park-square"
              style={{ backgroundImage: `url(${imagePath})` }}
            >
              <div className="park-card">{park.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Parks;
