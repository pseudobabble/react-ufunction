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
  CardActions,
  CreateButton,
  ExportButton,
  RefreshButton
} from 'react-admin';


const ActionActions = ({
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


export const ActionList = props => (
  <List {...props} actions={<ActionActions />}>
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
