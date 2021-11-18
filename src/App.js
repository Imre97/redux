import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import {useSelector} from 'react-redux'


function App() {

  const isLogedIn = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {!isLogedIn && <Auth />}
      {isLogedIn && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
