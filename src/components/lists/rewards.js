import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  NumberField,
  CardActions,
  CreateButton,
  ExportButton,
  RefreshButton
} from 'react-admin';

const RewardActions = ({
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

export const RewardList = props => (
  <List {...props} actions={<RewardActions />}>
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
