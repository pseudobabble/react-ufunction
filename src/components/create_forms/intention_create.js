import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  ReferenceInput,
  TextInput,
  LongTextInput,
  NumberInput,
} from 'react-admin';
import {parse} from "query-string";


const actionOptionRenderer = source => `${source.action_verb} ${source.activity} ${source.target_metric} ${source.target_metric_unit}`;

export const IntentionCreate = props => {

  const {action: action_id_string} = parse(props.location.search);
  const action_id = action_id_string ? parseInt(action_id_string, 10) : '';
  const redirect = action_id ? `/actions/${action_id}/1` : false;

  return (
    <Create {...props}>
    <TabbedForm redirect={redirect} defaultValue={{ action_id }}>
      <FormTab label="Intention">
        <ReferenceInput label="action" source="action" reference="actions">
          <SelectInput optionText={actionOptionRenderer}/>
        </ReferenceInput>
        <TextInput source="intention_text"/>
        <NumberInput source="intended_metric"/>
        <LongTextInput source="enjoyable_aspects"/>
      </FormTab>
    </TabbedForm>
  </Create>
  );
};
