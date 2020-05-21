import React from 'react';
import { Filter, SearchInput } from 'react-admin';
import { makeStyles, Chip } from '@material-ui/core';

const useQuickFilterStyles = makeStyles(theme => ({
  chip: {
    marginBottom: theme.spacing(1),
  },
}));
const QuickFilter = ({ label }) => {
  const classes = useQuickFilterStyles();
  return <Chip className={classes.chip} label={label} />;
};

export const GoalFilters = props => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <QuickFilter source="is_parent" label="Parent" defaultValue={true} />
  </Filter>
);
