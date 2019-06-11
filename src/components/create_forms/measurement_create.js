import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  LongTextInput,
  NumberInput,
} from 'react-admin';

export const MeasurementCreate = props => (
  <Create {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Measurement">
        <SelectInput source="action"/>
        <NumberInput source="intention"/>
        <NumberInput source="outcome_metric"/>
        <LongTextInput source="enjoyable_aspects"/>
        <LongTextInput source="difficult_aspects"/>
        <LongTextInput source="overcoming_difficult_aspects"/>
      </FormTab>
    </TabbedForm>
  </Create>
);
