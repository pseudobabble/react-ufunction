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

const goalOptionRenderer = source => `${source.title}`;

export const ReviewCreate = props => {

  const {goal: goal_id_string} = parse(props.location.search);
  const goal_id = goal_id_string ? parseInt(goal_id_string, 10) : '';
  const redirect = goal_id ? `/goals/${goal_id}/2` : false;

  return (
  <Create {...props}>
    <TabbedForm redirect={redirect} defaultValue={{ goal_id }}>
      <FormTab label="Review">
        <ReferenceInput
          label="goal"
          source="goal_id"
          reference="goals"
        >
          <SelectInput optionText={goalOptionRenderer}/>
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
        <LongTextInput source="enjoyable_aspects" fullWidth/>
        <LongTextInput source="difficult_aspects" fullWidth/>
        <LongTextInput source="overcome_difficult_aspects" fullWidth/>
        <LongTextInput source="next_period_focus" fullWidth/>
      </FormTab>
    </TabbedForm>
  </Create>
  );
};
