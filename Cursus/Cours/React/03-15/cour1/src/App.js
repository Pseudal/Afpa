import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './img/logo192.png'

function App() {
  let bool = false;
  const jours = ["Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi"]; 
  return (
  <>
    <div id='csstest' className="">
      <img src={logo} alt="" />
      <h1>Hello React</h1>
      <p>Etude du React</p>
      <p>{bool ? <strong>homme</strong> : <em>femme</em>}</p>
      <ol>
        {jours.map((e, index) => {
          return(
            <li key={index}>
              {e}
            </li>
          )
        })}
      </ol>
    </div>  
  </>
  );
}

export default App;
