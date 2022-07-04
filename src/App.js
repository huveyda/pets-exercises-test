import Cards from "../src/components/Cards/Cards";
import cats from "../src/mocks/cats.json";



function App() {
  return (
    <div >
      <Cards cats={cats}>

      </Cards>
    </div>
  );
}

export default App;
