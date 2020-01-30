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

import AddIntentionButton from "../buttons/add_intention_button";
import AddMeasurementButton from "../buttons/add_measurement_button";

export const ActionEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="list">
      <FormTab label="Action">
        <ReferenceField label="goal" source="goal" reference="goals">
          <TextField source="title"/>
        </ReferenceField>
        <SelectInput source="action_verb" choices={[
          { id: 'Increase', name: 'Increase' },
          { id: 'Reduce', name: 'Reduce' },
          { id: 'Maintain', name: 'Maintain' },
        ]}/>
        <TextInput source="activity"/>
        <NumberInput source="target_metric"/>
        <TextInput source="target_metric_unit"/>
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
        <AddIntentionButton/>
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
        <AddMeasurementButton/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
