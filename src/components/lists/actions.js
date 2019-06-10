import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  NumberField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField
} from 'react-admin';

export const ActionList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <UrlField source="goal" />
      <TextField source="action_name" />
      <NumberField source="target_metric" />
      <TextField source="target_metric_unit" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
      <ArrayField source="intentions">
        <SingleFieldList>
          <ChipField source="id" reference="intentions"/>
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);
