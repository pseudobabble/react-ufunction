import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  CardActions,
  CreateButton,
  ExportButton,
  RefreshButton
} from 'react-admin';

const ReviewActions = ({
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

export const ReviewList = props => (
  <List {...props} actions={<ReviewActions />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="goal" />
      <TextField source="review_period" />
      <DateField source="review_period_start_date" />
      <DateField source="review_period_end_date" />
      <TextField source="enjoyable_aspects" />
      <TextField source="difficult_aspects" />
      <TextField source="overcome_difficult_aspects" />
      <TextField source="next_period_focus" />
      <DateField source="created_date" />
      <DateField source="updated_date" />
    </Datagrid>
  </List>
);
