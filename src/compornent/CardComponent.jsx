import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { observer } from "mobx-react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 140,
    maxHight: 200,
    justifyContent: 'center',
  },
});

@observer
class CardComponent extends React.Component {

  render() {
    const { classes } = this.props;
    const { store } = this.props;

    return (
      <Grid container className={classes.root} spacing={8}>
            {
                (() => {
                    let namai_tbl = [];
                    for(let namai = 0; namai < store.book_data_tbl.length; namai++){
                        namai_tbl.push(
                            <Card className={classes.card} spacing={8}>
                                <CardContent>
                                <CardActionArea >
                                <img 
                                      src = {store.book_data_tbl[namai].thumbnail}
                                      width ={100}
                                      hspace = {0}
                                      vspace = {0}
                                />
                                </CardActionArea>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">{store.book_data_tbl[namai].title}</Button>
                                </CardActions>
                                </Card>
                        );
                    }
                    return namai_tbl;
                })()
            }
      </Grid>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);
