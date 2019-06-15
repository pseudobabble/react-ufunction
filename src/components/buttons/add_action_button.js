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

const AddActionButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/actions/create?goal=${record.id}`}
    label="Add an action"
    title="Add an action"
  >
    <AddCircle />
  </Button>
);

export default withStyles(styles)(AddActionButton);
