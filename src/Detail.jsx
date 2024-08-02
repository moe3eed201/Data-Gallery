import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Detail.css"


function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`);
      const data = await response.json();
      setDetailData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching detail data:', error);
    }
  };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else{
  return (
   <div className="detail-container">
      <h1>{detailData.name}</h1>
      <div className="detail-content">
        <img src={detailData.image} alt={detailData.name} className="detail-image" />
        <p>Gender: {detailData.gender}</p>
        <p>Hair: {detailData.hair}</p>
        <p>Occupation: {detailData.occupation}</p>
        <p>Voiced By: {detailData.voicedBy}</p>
      </div>
      <Link to="/" className="back-link">Back to Gallery</Link>
    </div>
  );
  }
}

export default Detail;
