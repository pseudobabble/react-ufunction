import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  TextInput,
  LongTextInput,
  NumberInput,
} from 'react-admin';

export const IntentionCreate = props => (
  <Create {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Intention">
        <SelectInput source="action"/>
        <TextInput source="intention_text"/>
        <NumberInput source="intended_metric"/>
        <LongTextInput source="enjoyable_aspects"/>
      </FormTab>
    </TabbedForm>
  </Create>
);
