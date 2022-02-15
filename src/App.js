
import logo from './logo.svg';
import './App.css';

function App(props) {
  // constructor(props)
  return (
  <>

<div className='container'>
<img  src={props.imagesrc}/>
<h2>{props.heading}</h2>
<p > {props.paragraph}</p>
<p className='footer'> {props.para}</p>


</div>



  </>
  
  );
}

export default App;
