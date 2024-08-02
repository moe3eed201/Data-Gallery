import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css"

export default function Gallery() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://bobsburgers-api.herokuapp.com/characters/");
          const data = await response.json();
          setData(data.slice(0,24));
          setIsLoading(false);
        } catch (error) {
            console.log("Error fetching Character data:", error);
        }
      }
      fetchData();
    }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let filteredData = data;
  if (search) {
    filteredData = data.filter((user) => 
     user.name.toLowerCase().includes(search.toLowerCase())
  );
  }
 
    if (isLoading) {
      return(
        <p className="loading">Loading.....</p>
      );
    }else {
      return (
        <div>
          <h1>Characters</h1>
          <input
            className="search"
            type="text"
            placeholder="Search characters..."
            value={search}
            onChange={handleSearch}
          />
          <div className="gallery-container">
            {filteredData.map((user) => (
              <div key={user.id} className="gallery-item">
                <Link to={`/detail/${user.id}`} className="card-link">
                  <div className="card">
                    <div className="card-image">
                      <img src={user.image} alt={user.name} />
                    </div>
                    <div className="card-content">
                      <h2 className="card-title">{user.name}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
}