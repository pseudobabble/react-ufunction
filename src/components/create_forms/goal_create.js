import React from 'react';
import {
  Create,
  TextInput,
  LongTextInput,
  BooleanInput,
  DateInput,
  TabbedForm,
  FormTab,
} from 'react-admin';

export const GoalCreate = props => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="Goal">
        <TextInput source="title"/>
        <TextInput source="stative_verb"/>
        <TextInput source="status"/>
        <DateInput source="target_date"/>
        <LongTextInput source="end_state_description"/>
        <BooleanInput source="complete"/>
      </FormTab>
    </TabbedForm>
  </Create>
);

