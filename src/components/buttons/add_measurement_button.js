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

const AddMeasurementButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/measurements/create?action=${record.id}`}
    label="Add a measurement"
    title="Add a measurement"
  >
    <AddCircle />
  </Button>
);

export default withStyles(styles)(AddMeasurementButton);
