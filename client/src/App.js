import { Home, Profile } from './pages';

function App() {
  return (
    <div className='app'>
      <div className='app__blur' style={{ top: '-3%', right: 0 }}></div>
      <div className='app__blur' style={{ top: '36%', left: '-5rem' }}></div>
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
