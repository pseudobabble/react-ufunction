import React from 'react';
import { List, Datagrid, TextField, BooleanField, DateField, NumberField, ArrayField, SingleFieldList, ChipField} from 'react-admin';

export const RewardList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="goal" />
      <TextField source="reward_title" />
      <TextField source="reward_description" />
      <NumberField source="achievement_metric" />
      <BooleanField source="obtained" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
    </Datagrid>
  </List>
);
