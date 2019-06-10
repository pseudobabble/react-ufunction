import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  LongTextInput,
  BooleanInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  Datagrid,
  DisabledInput,
  ReferenceManyField,
  CreateButton,
  SelectInput,
  TabbedForm,
  FormTab,
} from 'react-admin';
import AddActionButton from '../buttons/add_action';

export const GoalCreate = props => (
  <Create {...props}>
    <TabbedForm>

      <FormTab label="Goal">
        <LongTextInput source="end_state_description"/>
        <DateInput source="target_date"/>
        <BooleanInput source="complete"/>
        <DateInput source="created_date"/>
        <DateInput source="updated_date"/>
      </FormTab>

      <FormTab label="actions">
        <ReferenceManyField label="Actions" reference="actions" target="goal_id">
        <Datagrid>
          <SelectInput source="goal"/>
          <TextInput source="action_name"/>
          <NumberInput source="target_metric"/>
          <TextInput source="target_metric_unit"/>
          <DateInput source="created_date"/>
          <DateInput source="updated_date"/>
          <AddActionButton/>
        </Datagrid>
      </ReferenceManyField>
      </FormTab>
    <CreateButton/>
    </TabbedForm>
  </Create>
);

