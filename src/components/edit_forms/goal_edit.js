import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  LongTextInput,
  BooleanInput,
  BooleanField,
  DateInput,
  TextField,
  DateField,
  NumberField,
  Datagrid,
  ReferenceManyField,
  EditButton,
} from 'react-admin';

// The associated action records will be un-editable (until I figure out how to stop the fields from being wiped)
// each will have an edit button which takes the user to its edit screen
export const GoalEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Goal">
        <TextInput source="title"/>
        <TextInput source="stative_verb"/>
        <TextInput source="status"/>
        <DateInput source="target_date"/>
        <LongTextInput source="end_state_description"/>
        <BooleanInput source="complete"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>

      <FormTab label="Actions">
        <ReferenceManyField label="Actions" reference="actions" target="goal">
        <Datagrid> // The following input fields are *working*, but being cleared instantly, see https://stackoverflow.com/questions/52247855/react-admin-edit-form-not-prefilled-with-existing-attributes
          <TextField source="action_verb"/>
          <TextField source="activity"/>
          <NumberField source="target_metric"/>
          <TextField source="target_metric_unit"/>
          <DateField source="created_date"/>
          <DateField source="updated_date"/>
          <EditButton/>
        </Datagrid>
        </ReferenceManyField>
      </FormTab>

      <FormTab label="Reviews">
        <ReferenceManyField label="Reviews" reference="reviews" target="goal">
          <Datagrid> // The following input fields are *working*, but being cleared instantly, see https://stackoverflow.com/questions/52247855/react-admin-edit-form-not-prefilled-with-existing-attributes
            <TextField source="review_period"/>
            <DateField source="review_period_start_date"/>
            <DateField source="review_period_end_date"/>
            <TextField source="enjoyable_aspects"/>
            <TextField source="difficult_aspects"/>
            <TextField source="overcome_difficult_aspects"/>
            <TextField source="next_period_focus"/>
            <DateField source="created_date"/>
            <DateField source="updated_date"/>
            <EditButton/>
          </Datagrid>
        </ReferenceManyField>
      </FormTab>

      <FormTab label="Rewards">
        <ReferenceManyField label="Rewards" reference="rewards" target="goal">
          <Datagrid> // The following input fields are *working*, but being cleared instantly, see https://stackoverflow.com/questions/52247855/react-admin-edit-form-not-prefilled-with-existing-attributes
            <TextField source="reward_title"/>
            <TextField source="reward_description"/>
            <NumberField source="achievement_metric"/>
            <BooleanField source="obtained"/>
            <DateField source="created_date"/>
            <DateField source="updated_date"/>
            <EditButton/>
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);
