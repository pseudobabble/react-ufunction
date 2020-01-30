import React from 'react';
import { Link } from 'react-router-dom';
import AddCircle from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

const AddIntentionButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/intentions/create?goal=${record.id}`}
    label="Add an intention"
    title="Add an intention"
  >
    <AddCircle />
  </Button>
);

export default withStyles(styles)(AddIntentionButton);
