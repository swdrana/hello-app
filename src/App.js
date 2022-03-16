import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Basic Componet */}
      <Rana ></Rana>

      {/* className can't be create custom Component
      <Rana className='color'></Rana> */}

      {/* Dynamic Componet Create  */}
      <DynamicName name="Rana"></DynamicName>
      <DynamicName name="Masud"></DynamicName>
      <DynamicName name="MD"></DynamicName>

    </div>
  );
}
// Basic Component
function Rana(){
  return (
    <div>
      <h1 className="color">my name is rana</h1>
    </div>
  )
}
// Dynamic Component Create 
function DynamicName(props){
  return(<h2>i'm {props.name} come from dynamic data.</h2>)
}

export default App;
