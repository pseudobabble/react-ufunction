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
        <LongTextInput source="end_state_description"/>
        <DateInput source="target_date"/>
        <BooleanInput source="complete"/>
      </FormTab>
    </TabbedForm>
  </Create>
);

