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
  RefreshButton,
  DeleteButton,
  NumberField
} from 'react-admin';

import { GoalFilters } from './filters/GoalFilters';

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

// TODO REFACTOR 20/05/2020 09:09: This list should only show parents
export const GoalList = props => (
  <List {...props} actions={<GoalActions />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="is_parent" />
      <TextField source="title" />
      <TextField source="verb" />
      <TextField source="verb_phrase" />
      <DateField source="target_date" />
      <TextField source="end_state_description" />
      <NumberField source="position"/>
      <NumberField source="urgency" />
      <NumberField source="importance" />
      <NumberField source="eisenhower_score" />
      <BooleanField source="complete" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
      {/*// todo Do I want this actions list here? Maybe just a count of the subgoals*/}
      {/*<ArrayField source="actions"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>*/}
      <DeleteButton/>
    </Datagrid>
  </List>
);
