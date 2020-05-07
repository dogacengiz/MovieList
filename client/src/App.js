import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import Search from './components/searchMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/Movie/MovieList';
import { loadUser } from './actions/authAction';
import store from './store';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

class App extends Component{
   componentDidMount(){
    store.dispatch(loadUser());
  } 

  render(){
     return (
       <Provider store={store}>
          <div className="App">
            <AppNavbar/>
            <Container>
               <Search/>
               <br/>
               <MovieList/>
            </Container>
          </div>
       </Provider>
  );
  }
}
export default App;
