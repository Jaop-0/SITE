
import './App.css';
import pokemon from "./gamer.png";

function App() {
  return (
   <div className="Main">
   <div className="App"></div>
   <div className="Cabecalho">
   <div className= "pokemon"><img src={pokemon} /> </div>
   </div>
   <div className="menu"><p>PLAYSTATION 5</p> <p>PS5</p> <p>EXCLUSIVOS</p></div>
   <div className="conteudo"></div>
   <div className="galeria"></div>
   <footer className="rodape"></footer>
      
    </div>
  );
}

export default App;
