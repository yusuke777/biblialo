import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "./HeaderContainer";
import SidebarContainer from "./SidebarContainer";
import DataStore from "../logic/store";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import CardComponent from "../compornent/CardComponent";

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

const mystore = new DataStore();

const styles = theme => ({
   root: {
     flexGrow: 1
   },
   paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class AppContainer extends React.Component{
   constructor(props){
      super(props);
   }
   state = {
    value: 0,
  };

   handleChange = (event, value) => {
    this.setState({ value });
     };

   render(){
    const { classes } = this.props;
    const { value } = this.state;
      return (
         <div className={classes.root}>
         <Paper className={classes.paper}>
            <Grid container spacing={8}>
                <Grid item xs={12} >
                <Paper className={classes.paper}>
                    <HeaderContainer store={mystore}/>
                </Paper>
                </Grid>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
                            <Tab icon={<PhoneIcon />} />
                            <Tab icon={<FavoriteIcon />} />
                            <Tab icon={<PersonPinIcon />} />
                            <Tab icon={<HelpIcon />} />
                            <Tab icon={<ShoppingBasket />} />
                            <Tab icon={<ThumbDown />} />
                            <Tab icon={<ThumbUp />} />
                        </Tabs>
                    </AppBar>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                    <SidebarContainer />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        {value === 0 && <TabContainer>
                            <CardComponent store={mystore}/>
                        </TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                        {value === 2 && <TabContainer>Item Three</TabContainer>}
                        {value === 3 && <TabContainer>Item Four</TabContainer>}
                        {value === 4 && <TabContainer>Item Five</TabContainer>}
                        {value === 5 && <TabContainer>Item Six</TabContainer>}
                        {value === 6 && <TabContainer>Item Seven</TabContainer>}
                    </Paper>
                </Grid>
            </Grid>
            </Paper>
          </div>
      );
   }
}

export default withStyles(styles)(AppContainer);