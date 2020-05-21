import React from 'react';
import Grid from '@material-ui/core/Grid';
import Example from "./charts/example";
import GoalProgress from "./charts/goal_progress";
import { CardContent } from "@material-ui/core";

export default function DashboardGrid() {


  const get_grid_items_markup = chart_data_object => (
    <CardContent>
      <Grid item xs={3} key={chart_data_object}>
      <GoalProgress/>
    </Grid>
    </CardContent>
  );

  const grid_items_markup = [1, 2, 3, 4, 5, 6].map(get_grid_items_markup);

  return (
    <div>
      <Grid container spacing={3}>
        {grid_items_markup}
      </Grid>
    </div>
  );
}
