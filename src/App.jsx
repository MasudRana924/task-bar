import { TaskProvider } from './context/Context'; 
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import AllTasks from './components/AllTasks';


const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <Navbar/>
        <AllTasks/>
        <Footer/>
      </div>
    </TaskProvider>
  );
};

export default App;