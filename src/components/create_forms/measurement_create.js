import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  LongTextInput,
  NumberInput,
  ReferenceField,
} from 'react-admin';

export const MeasurementCreate = props => (
  <Create {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Measurement">
        <ReferenceField label="action" source="action" reference="actions">
          <SelectInput source="id"/>
        </ReferenceField>
        <ReferenceField label="intention" source="intention" reference="intentions">
          <SelectInput source="id"/>
        </ReferenceField>
        <NumberInput source="outcome_metric"/>
        <LongTextInput source="enjoyable_aspects"/>
        <LongTextInput source="difficult_aspects"/>
        <LongTextInput source="overcoming_difficult_aspects"/>
      </FormTab>
    </TabbedForm>
  </Create>
);
