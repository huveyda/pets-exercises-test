import Card from "./components/Card/Card";


function App() {
  return (
    <div >
      <Card
      name="Sydney"
      phone="111-111-1111"
      email="laith@hotmail.com"
      image={{url:"https://images.unsplash.com/photo-1599889959407-598566c6e1f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt:"cute-cat"}}
      favoured={false}
      />
    </div>
  );
}

export default App;
