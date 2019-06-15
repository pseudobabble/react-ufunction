import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceInput
} from 'react-admin';
import { parse } from 'query-string';

// Figure out why the id links arent working...
export const ActionCreate = props => {

  const {goal: goal_id_string} = parse(props.location.search);

// We also must ensure we can still create a new comment without having a goal_id
// from the url by returning an empty string if goal_id isn't specified
  const goal_id = goal_id_string ? parseInt(goal_id_string, 10) : '';
  console.log(goal_id);

  const redirect = goal_id ? `/goals/${goal_id}` : false;

  return (
    <Create {...props}>
    <TabbedForm redirect={redirect} defaultValue={{ goal_id }}>
      <FormTab label="Action">
        <ReferenceInput
          source="goal_id"
          reference="goals"
          allowEmpty>
          <SelectInput source="goal"/>
        </ReferenceInput>
        <SelectInput source="action_verb" choices={[
          {id: 'Increase', name: 'Increase'},
          {id: 'Reduce', name: 'Reduce'},
          {id: 'Maintain', name: 'Maintain'},
        ]}/>
        <TextInput source="activity"/>
        <NumberInput source="target_metric"/>
        <TextInput source="target_metric_unit"/>
      </FormTab>
    </TabbedForm>
  </Create>
  );
};
