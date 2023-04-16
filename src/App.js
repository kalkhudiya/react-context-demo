import './App.css';
import ChildComp from './ChildComp';
import userContext from './userContext';

function App() {
  return (
    <div className="App">
      <userContext.Provider value={{
        name: 'Viren'
      }}>
        {/* Child component inside provider */}
        <ChildComp />
      </userContext.Provider>
      {/* Child component outside provider */}
      <ChildComp />
    </div>
  );
}

export default App;
