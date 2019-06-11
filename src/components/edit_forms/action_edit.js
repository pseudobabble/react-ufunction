import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  NumberInput,
  SelectInput,
  TextField,
  DateField,
  NumberField,
  Datagrid,
  ReferenceField,
  ReferenceManyField,
  EditButton,
} from 'react-admin';

// Figure out why the id links arent working... -> I think it is because i had JS style // comments in the react component
export const ActionEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Action">
        <ReferenceField label="goal" source="goal" reference="goals">
          <TextField source="title"/>
        </ReferenceField>
        <TextInput source="action_name"/>
        <NumberInput source="target_metric"/>
        <NumberInput source="target_metric_unit"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>

      <FormTab label="Intentions">
        <ReferenceManyField label="Intentions" reference="intentions" target="action">
          <Datagrid>
            <NumberField source="action"/>
            <TextField source="intention_text"/>
            <NumberField source="intended_metric"/>
            <TextField source="enjoyable_aspects"/>
            <DateField source="created_date"/>
            <DateField source="updated_date"/>
            <EditButton/>
          </Datagrid>
        </ReferenceManyField>
      </FormTab>

      <FormTab label="Measurements">
        <ReferenceManyField label="Measurements" reference="measurements" target="action">
          <Datagrid>
            <NumberField source="action"/>
            <NumberField source="intention"/>
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
