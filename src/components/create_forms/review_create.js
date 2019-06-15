import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  TextField,
  SelectInput,
  TextInput,
  LongTextInput,
  DateInput,
  DateField,
  NumberInput,
  ReferenceField,
  ReferenceInput
} from 'react-admin';
import {parse} from "query-string";

export const ReviewCreate = props => {

  const {goal: goal_id_string} = parse(props.location.search);

// We also must ensure we can still create a new comment without having a goal_id
// from the url by returning an empty string if goal_id isn't specified
  const goal_id = goal_id_string ? parseInt(goal_id_string, 10) : '';
  console.log(goal_id);

  const redirect = goal_id ? `/goals/${goal_id}/2` : false;
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
        <SelectInput
          source="review_period"
          choices={[
            {id: 'WEEKLY', name: 'Weekly'},
            {id: 'MONTHLY', name: 'Monthly'},
            {id: 'QUARTERLY', name: 'Quarterly'},
            {id: 'ANNUALLY', name: 'Annually'},
          ]}
        />
        <DateInput source="review_period_start_date"/>
        <DateInput source="review_period_end_date"/>
        <LongTextInput source="enjoyable_aspects"/>
        <LongTextInput source="difficult_aspects"/>
        <LongTextInput source="overcome_difficult_aspects"/>
        <LongTextInput source="next_period_focus"/>
      </FormTab>
    </TabbedForm>
  </Create>
  );
};
