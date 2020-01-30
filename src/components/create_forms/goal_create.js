import React from 'react';
import {
  Create,
  TextInput,
  SelectInput,
  LongTextInput,
  BooleanInput,
  DateInput,
  TabbedForm,
  FormTab,

} from 'react-admin';


export const GoalCreate = props => {

  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Goal">
          <SelectInput source="stative_verb" choices={[
            {id: 'Be', name: 'Be'},
            {id: 'Have', name: 'Have'}
          ]}/>
          <TextInput source="status"/>
          <DateInput source="target_date"/>
          <LongTextInput source="end_state_description"/>
          <BooleanInput source="complete"/>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

