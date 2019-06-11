import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  CardActions,
  CreateButton,
  ExportButton,
  RefreshButton
} from 'react-admin';

const IntentionActions = ({
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

export const IntentionList = props => (
  <List {...props} actions={<IntentionActions />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="action" />
      <TextField source="intention_text" />
      <NumberField source="intended_metric" />
      <TextField source="enjoyable_aspects" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
      <ArrayField source="measurements"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>
    </Datagrid>
  </List>
);
