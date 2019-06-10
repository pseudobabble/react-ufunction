import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField
} from 'react-admin';

export const GoalList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="end_state_description" />
      <DateField source="target_date" />
      <BooleanField source="complete" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
      <ArrayField source="actions"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>
    </Datagrid>
  </List>
);
