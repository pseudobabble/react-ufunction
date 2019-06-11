import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  SelectInput,
  TextInput,
  DateInput,
  TextField,
  DateField,
  NumberField,
  NumberInput,
  Datagrid,
  ReferenceManyField,
  EditButton,
} from 'react-admin';

export const IntentionEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Intention">
        <NumberField source="id"/>
        <SelectInput source="action"/>
        <TextInput source="intention_text"/>
        <NumberInput source="intended_metric"/>
        <TextInput source="enjoyable_aspects"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>

      <FormTab label="Measurements">
        <ReferenceManyField label="Measurements" reference="measurements" target="action">
          <Datagrid>
            <NumberField source="outcome_metric"/>
            <TextField source="enjoyable_aspects"/>
            <TextField source="difficult_aspects"/>
            <TextField source="overcoming_difficult_aspects"/>
            <DateField source="created_date"/>
            <DateField source="updated_date"/>
            <EditButton/>
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);
