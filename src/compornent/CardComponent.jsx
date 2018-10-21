import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { observer } from "mobx-react";
import Card from '@material-ui/core/Card';
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
    maxWidth: 140,
  },
  media: {
    height: 140,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

@observer
class CardComponent extends React.Component {
  state = {
    spacing: '16',
  };

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
                                    <CardMedia
                                    className={classes.media}
                                    image="http://books.google.com/books/content?id=SCA9uQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                                    />
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {store.book_data_tbl[namai].title}
                                    </Typography>
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
