import React from 'react';
import { List, Datagrid, TextField, BooleanField, NumberField, DateField, ArrayField, SingleFieldList, ChipField} from 'react-admin';

export const IntentionList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="action" />
      <TextField source="intention" />
      <NumberField source="intended_metric" />
      <TextField source="enjoyable_aspects" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
      <ArrayField source="measurements"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>
    </Datagrid>
  </List>
);
