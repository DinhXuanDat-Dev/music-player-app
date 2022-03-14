import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  
  const loginCode = new URLSearchParams(window.location.search).get('code');

  console.log("loginCode",loginCode);

  return (
    <div className="App">
      { loginCode ? <Dashboard loginCode={loginCode}/> : <Login />}
    </div>
  );
}

export default App;
