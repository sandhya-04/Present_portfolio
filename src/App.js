
import './App.css';
import {About} from "./About";
import social from "./social"
import { ProjectList} from "./ProjectList";
function App() {
  return (
    <div className="App">
    <div className="App-content">
      <social/>
     <About/>
     <ProjectList />
     </div>
    </div>
    
  );
}

export default App;
