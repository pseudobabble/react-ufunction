import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  SelectInput,
  NumberField,
  TextInput,
  DateInput,
  NumberInput,
} from 'react-admin';

export const MeasurementEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Measurement">
        <NumberField source="id"/>
        <SelectInput source="action"/>
        <SelectInput source="intention"/>
        <NumberInput source="outcome_metric"/>
        <TextInput source="enjoyable_aspects"/>
        <TextInput source="difficult_aspects"/>
        <TextInput source="overcoming_difficult_aspects"/>
        <DateInput source="created_date"/>
        <DateInput source="updated_date"/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
