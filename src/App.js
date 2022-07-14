import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/NavBar/Navbar';
import Notification from './components/Notification/Notification';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Notification />
        <Dashboard />
      </main>
    </div> 
  );
}

export default App;
