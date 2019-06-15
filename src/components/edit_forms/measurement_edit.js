import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  SelectInput,
  NumberField,
  TextInput,
  TextField,
  ReferenceField,
  DateInput,
  NumberInput,
} from 'react-admin';

export const MeasurementEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Measurement">
        <NumberField source="id"/>
        <ReferenceField label="action" source="action" reference="actions">
          <TextField source="id"/>
        </ReferenceField>
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
