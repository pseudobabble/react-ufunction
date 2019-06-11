import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  LongTextInput,
  BooleanInput,
  TextField,
  DateField,
  ReferenceField,
  NumberInput,
} from 'react-admin';

export const RewardEdit = props => (
  <Edit {...props} redirect="edit">
    <TabbedForm>
      <FormTab label="Reward">
        <ReferenceField label="goal" source="goal" reference="goals">
          <TextField source="title"/>
        </ReferenceField>
        <TextInput source="reward_title"/>
        <LongTextInput source="reward_description"/>
        <NumberInput source="achievement_metric"/>
        <BooleanInput source="obtained"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
