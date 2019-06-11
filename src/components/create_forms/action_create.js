import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  TextInput,
  NumberInput,
} from 'react-admin';


// Figure out why the id links arent working...
export const ActionCreate = props => (
  <Create {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Action">
        <SelectInput source="goal"/>
        <TextInput source="action_verb" choices={[
          { id: 'Increase', name: 'Increase' },
          { id: 'Reduce', name: 'Reduce' },
          { id: 'Maintain', name: 'Maintain' },
        ]}/>
        <TextInput source="activity"/>
        <NumberInput source="target_metric"/>
        <TextInput source="target_metric_unit"/>
      </FormTab>
    </TabbedForm>
  </Create>
);
