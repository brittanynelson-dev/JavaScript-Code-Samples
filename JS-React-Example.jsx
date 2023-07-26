import React, {useState, useEffect} from 'react';

function getComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const renderData = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h1>Complex Component</h1>
      {renderData()}
    </div>
  );
}

export default getComponent;