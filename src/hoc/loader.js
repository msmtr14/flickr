import React from 'react';
import { CircularProgress } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const Loader = (props) => {
    return (
        <div>
            <CircularProgress 
            />
        </div>
    );
};

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
  });

export default withStyles(styles)(Loader);