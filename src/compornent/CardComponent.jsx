import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { observer } from "mobx-react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
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
                          <GridList cellHeight={180}>
                          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">December</ListSubheader>
                          </GridListTile>
                          {store.book_data_tbl.map(tile => (
                            <GridListTile key={store.book_data_tbl[namai].thumbnail}>
                              <img src={store.book_data_tbl[namai].thumbnail} alt={store.book_data_tbl[namai].title} />
                              <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {store.book_data_tbl[namai].title}</span>}
                                actionIcon={
                                  <IconButton className={classes.icon}>
                                    <InfoIcon />
                                  </IconButton>
                                }
                              />
                            </GridListTile>
                          ))}
                        </GridList>
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
