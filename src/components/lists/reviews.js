import React from 'react';
import { List, Datagrid, TextField, BooleanField, DateField, ArrayField, SingleFieldList, ChipField} from 'react-admin';

export const ReviewList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="goal" />
      <TextField source="review_period" />
      <DateField source="review_period_start_date" />
      <DateField source="review_period_end_date" />
      <TextField source="enjoyable_aspects" />
      <TextField source="difficult_aspects" />
      <TextField source="overcome_difficult_aspects" />
      <TextField source="next_period_focus" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
    </Datagrid>
  </List>
);
