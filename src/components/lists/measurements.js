import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  CardActions,
  CreateButton,
  ExportButton,
  RefreshButton
} from 'react-admin';

const MeasurementActions = ({
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

export const MeasurementList = props => (
  <List {...props} actions={<MeasurementActions />}>
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
