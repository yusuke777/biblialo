import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { observer } from "mobx-react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 170,
  },
});

@observer
class CardComponent extends React.Component {

  render() {
    const { classes } = this.props;
    const { store } = this.props;

    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
            {
                (() => {

                    let namai_tbl = [];
                    for(let namai = 0; namai < store.book_data_tbl.length; namai++){
                        namai_tbl.push(
                            <Card className={classes.card}>
                                <CardContent>
                                <CardActionArea>
                                      <CardMedia
                                      image={store.book_data_tbl[namai].thumbnail}
                                      />
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {store.book_data_tbl[namai].title}
                                    </Typography>
                                </CardActionArea>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                                </Card>
                        );
                    }
                    return namai_tbl;
                })()
            }
        </Grid>
      </Grid>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);
