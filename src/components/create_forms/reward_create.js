import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  TextInput,
  LongTextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput
} from 'react-admin';
import {parse} from "query-string";

const goalOptionRenderer = source => `${source.title}`;

// todo: this is how you get props from the url

export const RewardCreate = props => {

  const {goal: goal_id_string} = parse(props.location.search);
  const goal_id = goal_id_string ? parseInt(goal_id_string, 10) : '';
  const redirect = goal_id ? `/goals/${goal_id}/3` : false;


  return (
    <Create {...props}>
      <TabbedForm redirect={redirect} defaultValue={{goal_id}}>
        <FormTab label="Review">
          <ReferenceInput
            label="goal"
            source="goal_id"
            reference="goals"
            fullWidth
          >
            <SelectInput optionText={goalOptionRenderer} fullWidth/>
          </ReferenceInput>
          <TextInput source="reward_title"/>
          <LongTextInput source="reward_description" fullWidth/>
          <NumberInput source="achievement_metric"/>

          <BooleanInput source="obtained"/>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
