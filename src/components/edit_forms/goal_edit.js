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
  ShowButton,
  NumberInput, ReferenceField, SingleFieldList, ChipField, ArrayField
} from 'react-admin';
import AddReviewButton from "../buttons/add_review_button";
import AddRewardButton from "../buttons/add_reward_button";
import AddGoalButton from "../buttons/add_goal_button";

const parentGoalOptionRenderer = source => source.id ? `${source.title}` : '';

// The associated action records will be un-editable (until I figure out how to stop the fields from being wiped)
// each will have an edit button which takes the user to its edit screen
export const GoalEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Goal">
        <ReferenceField label="Parent Goal" source="parent_goal" reference="goals" fullWidth>
          <TextField source="title" fullWidth/>
        </ReferenceField>
        <TextField source="title" fullWidth/>
        <TextInput source="verb"/>
        <TextInput source="verb_phrase" fullWidth/>
        <DateInput source="target_date"/>
        <NumberInput source="position" />
        <LongTextInput source="end_state_description" fullWidth/>
        <NumberInput source="urgency" />
        <NumberInput source="importance" />
        <NumberField source="eisenhower_score" />
        <BooleanInput source="complete"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>

      <FormTab label="Subgoals">
        <ReferenceManyField label="Subgoals" reference="goals" target="parent_goal">
        {/* # TODO Note 17/05/2020 14:28: This (below) is how to expand the Datagrid rows using a show/edit form */}
        <Datagrid expand={<GoalEdit />}>
          <ReferenceField label="goal" source="id" reference="goals">
            <TextField source="title"/>
          </ReferenceField>
          <TextField source="verb"/>
          <TextField source="verb_phrase" fullWidth/>
          <DateField source="target_date"/>
          <NumberField source="position"/>
          <TextField source="end_state_description" fullWidth/>
          <NumberField source="urgency" />
          <NumberField source="importance" />
          <NumberField source="eisenhower_score" />
          <BooleanField source="complete"/>
          <DateField source="created_date"/>
          <DateField source="updated_date"/>
          <EditButton />
          <DeleteButton/>
        </Datagrid>
        </ReferenceManyField>
        <AddGoalButton/>
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
