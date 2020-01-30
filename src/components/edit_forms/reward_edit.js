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
        <ReferenceField label="goal" source="goal" reference="goals" fullWidth>
          <TextField source="title" fullWidth/>
        </ReferenceField>
        <TextInput source="reward_title"/>
        <LongTextInput source="reward_description" fullWidth/>
        <NumberInput source="achievement_metric"/>
        <BooleanInput source="obtained"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
