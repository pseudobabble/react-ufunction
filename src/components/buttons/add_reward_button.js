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

const AddRewardButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/rewards/create?goal=${record.id}`}
    label="Add a reward"
    title="Add a reward"
  >
    <AddCircle />
  </Button>
);

export default withStyles(styles)(AddRewardButton);
