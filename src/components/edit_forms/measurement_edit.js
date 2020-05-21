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
  ReferenceInput,
  DateInput,
  NumberInput,
} from 'react-admin';

const actionOptionRenderer = source => `${source.action_verb} ${source.activity} ${source.target_metric} ${source.target_metric_unit}`;
const intentionOptionRenderer = source => `${source.id}: ${source.intention_text}`; // todo: need to get target metric unit

export const MeasurementEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Measurement">
        <NumberField source="id"/>
        <ReferenceField label="action" source="action" reference="actions">
          <TextField source="activity"/>
        </ReferenceField>
        {/* This should use the Action virtual property */}
        <ReferenceField label="intention" source="intention" reference="intentions">
          <TextField source="intention_text"/>
        </ReferenceField>
        <NumberInput source="outcome_metric"/>
        <TextInput source="enjoyable_aspects" fullWidth/>
        <TextInput source="difficult_aspects" fullWidth/>
        <TextInput source="overcoming_difficult_aspects" fullWidth/>
        <DateInput source="created_date"/>
        <DateInput source="updated_date"/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
