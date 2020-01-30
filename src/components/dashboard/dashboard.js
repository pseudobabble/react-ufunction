import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Example from './charts/example';
import DashboardGrid from "./dashboard_grid";
import { Title } from 'react-admin';


export default () => (
  <Card>
    <Title title="Welcome to μFunction" />
    <CardContent>
      <DashboardGrid/>
    </CardContent>
  </Card>
);

