import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  CardActions,
  CreateButton,
  ExportButton,
  RefreshButton
} from 'react-admin';


const GoalActions = ({
                       bulkActions,
                       basePath,
                       currentSort,
                       displayedFilters,
                       exporter,
                       filters,
                       filterValues,
                       onUnselectItems,
                       resource,
                       selectedIds,
                       showFilter,
                       total
                     }) => (
  <CardActions>
    {bulkActions && React.cloneElement(bulkActions, {
      basePath,
      filterValues,
      resource,
      selectedIds,
      onUnselectItems,
    })}
    {filters && React.cloneElement(filters, {
      resource,
      showFilter,
      displayedFilters,
      filterValues,
      context: 'button',
    })}
    <CreateButton basePath={basePath}/>
    <ExportButton
      disabled={total === 0}
      resource={resource}
      sort={currentSort}
      filter={filterValues}
      exporter={exporter}
    />
    <RefreshButton/>
    {/* Add your custom actions */}
  </CardActions>
);


export const GoalList = props => (
  <List {...props} actions={<GoalActions />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="stative_verb" />
      <TextField source="status" />
      <DateField source="target_date" />
      <TextField source="end_state_description" />
      <BooleanField source="complete" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
      // Do I want this actions list here? Maybe just a count of the actions
      <ArrayField source="actions"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>
    </Datagrid>
  </List>
);
