import React, {useState} from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Form from './components/Form';
import Result from './components/Result';
import Knowmore from './components/Knowmore';
import Footer from './components/Footer'

function App() {
  const [dinoid, setdinoid] = useState(0);
  const fetchid = (dinoid) => {
  setdinoid(dinoid);}
  // console.log(dinoid);
  return (
    <>
      <Landing/>
      <About/>
      <Form
        passnote={fetchid}
      />
      <Result
        dinoind={dinoid}
      />
      <Knowmore/>
      <Footer/>
    </>
  );
}

export default App;
