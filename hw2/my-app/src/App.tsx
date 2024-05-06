import './App.css'
import Counter from './components/Counter/Counter';
import Hider from './components/Hider/Hider';
import Posts from './components/Posts/Posts';


function App() {
  return ( 
      <div id='root'>
          <Counter />
          <Hider />
          <Posts />
      </div>
  );
}

export default App
