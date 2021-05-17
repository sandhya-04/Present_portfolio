
import './App.css';
import {About} from "./About";
import {Social} from "./social"
import { ProjectList} from "./ProjectList";
function App() {
  return (
    <div className="App">
    <div className="App-content">
     
     <About/>
     <Social/>
     <ProjectList />
     </div>
    </div>
    
  );
}

export default App;
