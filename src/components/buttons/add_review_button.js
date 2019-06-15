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

const AddReviewButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/reviews/create?goal=${record.id}`}
    label="Add a review"
    title="Add a review"
  >
    <AddCircle />
  </Button>
);

export default withStyles(styles)(AddReviewButton);
