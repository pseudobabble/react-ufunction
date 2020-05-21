import React from 'react';
import {
  Create,
  TextInput,
  SelectInput,
  LongTextInput,
  BooleanInput,
  DateInput,
  TabbedForm,
  FormTab, ReferenceInput, NumberInput, NumberField,

} from 'react-admin';

const goalOptionRenderer = source => `${source.title}`;

export const GoalCreate = props => {

  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Subgoal">
          <ReferenceInput label="Parent Goal" source="parent_goal" reference="goals">
            <SelectInput optionText={goalOptionRenderer}/>
          </ReferenceInput>
          <TextInput source="verb"/>
          <TextInput source="verb_phrase"/>
          <DateInput source="target_date"/>
          <LongTextInput source="end_state_description"/>
          <NumberInput source="urgency" />
          <NumberInput source="importance" />
          <NumberField source="eisenhower_score" />
          <BooleanInput source="complete"/>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

