import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Example from './charts/example';
import DashboardGrid from "./dashboard_grid";
import { Title } from 'react-admin';
import GoalProgress from "./charts/goal_progress"; // TODO BUG `20/05/2020` 22:17: fix this and related below
import {GoalTree} from "./charts/GoalTree";
import { NewGoalTree } from './charts/NewGoalTree/NewGoalTree';
import Dnd from './calendar/calendar'



export default () => (
  <Card>
    <Title title="Welcome to μFunction" />
    <CardContent>
      {/*<DashboardGrid/>*/}
      {/*<NewGoalTree width={1500} height={800}/>*/}
      {<Dnd />}
    </CardContent>
  </Card>
);

