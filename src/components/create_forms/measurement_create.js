import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  LongTextInput,
  NumberInput,
  ReferenceInput,
  ReferenceField,
  TextField
} from 'react-admin';
import {parse} from "query-string";

const actionOptionRenderer = source => `${source.action_verb} ${source.activity} ${source.target_metric} ${source.target_metric_unit}`;
const intentionOptionRenderer = source => `${source.id}: ${source.intention_text}`; // todo: need to get target metric unit

export const MeasurementCreate = props => {

  const {action: action_id_string} = parse(props.location.search);
  const action_id = action_id_string ? parseInt(action_id_string, 10) : '';
  const redirect = action_id ? `/actions/${action_id}/1` : false;

  return (
    <Create {...props}>
      <TabbedForm redirect={redirect} defaultValue={{ action_id }}>
      <FormTab label="Measurement">
          <ReferenceInput label="action" source="action" reference="actions" fullWidth>
            <SelectInput optionText={actionOptionRenderer}fullWidth/>
          </ReferenceInput>
          <ReferenceInput label="intention" source="intention" reference="intentions" fullWidth>
            <SelectInput optionText={intentionOptionRenderer} fullWidth/>
          </ReferenceInput>
          <ReferenceField label='action metric' source="action" reference="actions">
            <TextField source='target_metric' fullWidth/>
          </ReferenceField>
          <ReferenceField label='unit' source="action" reference="actions">
            <TextField source='target_metric_unit'/>
          </ReferenceField>
          <NumberInput source="outcome_metric"/>
          <LongTextInput source="enjoyable_aspects" fullWidth/>
          <LongTextInput source="difficult_aspects" fullWidth/>
          <LongTextInput source="overcoming_difficult_aspects" fullWidth/>
        </FormTab>
      </TabbedForm>
    </Create>
  )
};

