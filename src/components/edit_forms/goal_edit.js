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
  SelectInput,
  TextField,
  DateField,
  NumberField,
  Datagrid,
  ReferenceManyField,
  EditButton,
  DeleteButton,
  ShowButton
} from 'react-admin';
import AddActionButton from "../buttons/add_action_button";
import AddReviewButton from "../buttons/add_review_button";
import AddRewardButton from "../buttons/add_reward_button";

// The associated action records will be un-editable (until I figure out how to stop the fields from being wiped)
// each will have an edit button which takes the user to its edit screen
export const GoalEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Goal">
        <TextField source="title" fullWidth/>
        <SelectInput source="stative_verb" choices={[
          {id: 'Be', name: 'Be'},
          {id: 'Have', name: 'Have'}
        ]}/>
        <TextInput source="status" fullWidth/>
        <DateInput source="target_date"/>
        <LongTextInput source="end_state_description" fullWidth/>
        <BooleanInput source="complete"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>

      <FormTab label="Actions">
        <ReferenceManyField label="Actions" reference="actions" target="goal">
        <Datagrid>
          <TextField source="action_verb"/>
          <TextField source="activity"/>
          <NumberField source="target_metric"/>
          <TextField source="target_metric_unit"/>
          <DateField source="created_date"/>
          <DateField source="updated_date"/>
          <EditButton />
          <DeleteButton/>
        </Datagrid>
        </ReferenceManyField>
        <AddActionButton/>
      </FormTab>

      <FormTab label="Reviews">
        <ReferenceManyField label="Reviews" reference="reviews" target="goal">
          <Datagrid>
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
            <DeleteButton/>
          </Datagrid>
        </ReferenceManyField>
        <AddReviewButton/>
      </FormTab>

      <FormTab label="Rewards">
        <ReferenceManyField label="Rewards" reference="rewards" target="goal">
          <Datagrid>
            <TextField source="reward_title"/>
            <TextField source="reward_description"/>
            <NumberField source="achievement_metric"/>
            <BooleanField source="obtained"/>
            <DateField source="created_date"/>
            <DateField source="updated_date"/>
            <EditButton/>
            <DeleteButton/>
          </Datagrid>
        </ReferenceManyField>
        <AddRewardButton/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
