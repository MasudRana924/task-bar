import { TaskProvider } from './context/Context'; 
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import AllTasks from './components/AllTasks';


const App = () => {
  return (
    // Wrap our entire app with the TaskProvider to provide access to tasks
    <TaskProvider>
      <div className="App">
        <Navbar/>
        <AllTasks/>
        <Footer/>
      </div>
    </TaskProvider>
  );
};

// Export the App component for use in other files
export default App;