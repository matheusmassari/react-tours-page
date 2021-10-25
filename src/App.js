import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url =
  "https://condescending-albattani-37c551.netlify.app/.netlify/functions/api/massari-tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  console.log(url);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length < 1) {
    return (
      <main>
        <div className="title">
          <h3>Não sobraram tours {`:(`}</h3>
          <button className='btn' onClick={fetchTours}>Recarregar</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
