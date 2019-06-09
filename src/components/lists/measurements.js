import React from 'react';
import { List, Datagrid, TextField, BooleanField, DateField, NumberField, ArrayField, SingleFieldList, ChipField} from 'react-admin';

export const MeasurementList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="action" />
      <TextField source="intention" />
      <NumberField source="outcome_metric" />
      <TextField source="enjoyable_aspects" />
      <TextField source="difficult_aspects" />
      <TextField source="overcoming_difficult_aspects" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
    </Datagrid>
  </List>
);
