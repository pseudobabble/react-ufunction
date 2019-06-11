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
        <ReferenceField label="goal" source="goal" reference="goals">
          <TextField source="title"/>
        </ReferenceField>
        <SelectInput source="review_period"/>
        <DateInput source="review_period_start_date"/>
        <DateInput source="review_period_end_date"/>
        <LongTextInput source="enjoyable_aspects"/>
        <LongTextInput source="difficult_aspects"/>
        <LongTextInput source="overcome_difficult_aspects"/>
        <LongTextInput source="next_period_focus"/>
        <DateField source="created_date"/>
        <DateField source="updated_date"/>
      </FormTab>
    </TabbedForm>
  </Edit>
);
