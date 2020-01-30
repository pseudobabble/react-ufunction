import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextField,
  SelectInput,
  TextInput,
  LongTextInput,
  DateInput,
  DateField,
  NumberInput,
  ReferenceField
} from 'react-admin';

export const ReviewEdit = props => (
  <Edit {...props}>
    <TabbedForm redirect="edit">
      <FormTab label="Review">
        <ReferenceField label="goal" source="goal" reference="goals" fullWidth>
          <TextField source="title" fullWidth/>
        </ReferenceField>
        <SelectInput source="review_period"/>
        <DateInput source="review_period_start_date"/>
        <DateInput source="review_period_end_date"/>
        <LongTextInput source="enjoyable_aspects" fullWidth/>
        <LongTextInput source="difficult_aspects" fullWidth/>
        <LongTextInput source="overcome_difficult_aspects" fullWidth/>
        <LongTextInput source="next_period_focus" fullWidth/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
