import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectField,
  ReferenceField,
  TextInput,
  LongTextInput,
  NumberInput,
} from 'react-admin';

export const IntentionCreate = props => (
  <Create {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Intention">
        <ReferenceField label="action" source="action" reference="actions">
          <SelectField source="activity"/>
        </ReferenceField>
        <TextInput source="intention_text"/>
        <NumberInput source="intended_metric"/>
        <LongTextInput source="enjoyable_aspects"/>
      </FormTab>
    </TabbedForm>
  </Create>
);
