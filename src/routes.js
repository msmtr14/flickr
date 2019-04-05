import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import OverviewLayout from './components/OverviewLayout';
import GroupsLayout from './components/GroupsLayout';
import GalleryLayout from './components/GalleryLayout';
import NotFoundLayout from './components/NotFoundLayout';

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/" exact component={GroupsLayout}/>

        <Route path="/groups/:group" component={GroupsLayout}/>
        <Route path="/groups" component={GroupsLayout}/>

        <Route path="/gallery/:nsid" component={GalleryLayout}/>

        <Route path="/gallery" component={GalleryLayout}/>

        <Route path="/overview" component={OverviewLayout}/>

        <Route component={NotFoundLayout}/>
        
      </Switch>
    </Layout>
  )
}

export default Routes;
