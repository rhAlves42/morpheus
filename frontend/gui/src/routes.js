import React from 'react'
import { Route } from 'react-router-dom'

import NamesList from './containers/NamesListView'


const BaseRouter = () => (
  <div>
  <Route exact path="/" component={NamesList} />
  <Route exact path="/addName" component={NamesList} />
  </div>
);
export default BaseRouter;
