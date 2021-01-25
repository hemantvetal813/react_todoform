import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from './components/movies';
import AddMovie from './components/AddMovie';
import AppToDo from './components/todoForm';
class App extends Component {
  state = {

  };
  render () {
    return (
      <div className="App">
        <div className="row col-md-12">
          <Navbar />
        </div>

        <Switch>
          <Route path="/counters" component={Counters}></Route>
          <Route path="/todo" component={AppToDo}></Route>
          {/* <Route path="/calc" component={Calculator}></Route>

          <Route
            exact
            path="/login"
            render={props => (
              <InputField {...props} buttonName="Login" data={login_Data} />
            )}
          ></Route>
          <Route
            exact
            path="/movies/new"
            render={props => (
              <InputField
                {...props}
                buttonName="Add Movie"
                data={AddMovieData}
              />
            )}
          ></Route>
          <Route
            exact
            path="/movies/:_id"
            render={props => (
              <InputField
                {...props}
                buttonName="Update Movie"
                data={AddMovieData}
              />
            )}
          ></Route> */}
          {/* <Route path="/movies/:_id" component={MovieInfo}></Route> */}
          <Route path="/movies" component={Movies}></Route>
          <Route path="/add_movie" component={AddMovie}></Route>
          {/* <Route path="/not-found" component={NotFound} /> */}
          {/* <Route
            path="/counters"
            render={props => (
              <Counters
                {...props}
                bodmas={this.handleIncreDecree}
                counters={this.state.counters}
              />
            )}
          /> */}
          <Redirect to="/not-found" />
        </Switch>
        {/* <Counters counters={ this.state.counters } bodmas={ this.handleIncreDecree } /> */}
      </div>
    );
  }



}

export default App;

