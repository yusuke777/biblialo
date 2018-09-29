import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "./HeaderContainer";
import SidebarContainer from "./SidebarContainer";
import ContentsContainer from "./ContentsContainer";
import DataStore from "../logic/store";
import Paper from '@material-ui/core/Paper';


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

   render(){
      return (
         <div className={this.props.classes.root}>
         <Paper className={this.props.classes.paper}>
            <Grid container spacing={8}>
                <Grid item xs={12} >
                <Paper className={this.props.classes.paper}>
                    <HeaderContainer store={mystore}/>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={this.props.classes.paper}>
                    <SidebarContainer />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={this.props.classes.paper}>
                     <ContentsContainer />
                    </Paper>
                </Grid>
            </Grid>
            </Paper>
          </div>
      );
   }
}

export default withStyles(styles)(AppContainer);