import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

// const App = () => (
//   <Provider store={store}>
//     <div className="app">
//       <Switch>
//         <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={Landing} />} />
//         <Route
//           path="/search"
//           component={props => (
//             <AsyncRoute props={Object.assign({shows: preload.shows}, props)} loadingPromise={Search}/>
//           )}
//         />
//         <Route path="/details/:id"
//                component={(props) => {
//                  const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
//                  return <Details show={selectedShow} {...props} />;
//                }}
//         />
//         <Route component={FourOhFour}/>
//       </Switch>
//     </div>
//   </Provider>
// );

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
        <Route
          path="/details/:id"
          component={(props) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);


App.propTypes = {
  match: PropTypes.shape({params: {id: {}}})
}

export default App;
