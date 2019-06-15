import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  TextField,
  SelectInput,
  TextInput,
  LongTextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput
} from 'react-admin';
import {parse} from "query-string";

export const RewardCreate = props => {

  const {goal: goal_id_string} = parse(props.location.search);

// We also must ensure we can still create a new comment without having a goal_id
// from the url by returning an empty string if goal_id isn't specified
  const goal_id = goal_id_string ? parseInt(goal_id_string, 10) : '';
  console.log(goal_id);

  const redirect = goal_id ? `/goals/${goal_id}/3` : false;
  return (
    <Create {...props}>
      <TabbedForm  redirect={redirect} defaultValue={{ goal_id }}>
        <FormTab label="Review">
          <ReferenceInput
            label="goal"
            source="goal_id"
            reference="goals"
          >
            <SelectInput source="goal"/>
          </ReferenceInput>
          <TextInput source="reward_title"/>
          <LongTextInput source="reward_description"/>
          <NumberInput source="achievement_metric"/>
          <BooleanInput source="obtained"/>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
