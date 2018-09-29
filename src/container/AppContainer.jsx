import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "./HeaderContainer";
import SidebarContainer from "./SidebarContainer";
import ContentsContainer from "./ContentsContainer";
import DataStore from "../logic/store";

const mystore = new DataStore();

const styles = theme => ({
   root: {
     flexGrow: 1
   }
});

class AppContainer extends React.Component{
   
   constructor(props){
      super(props);
      
   }

   render(){
      return (
          <Grid container spacing={8}
           >
            <Grid item xs={12}>
                <HeaderContainer store={mystore}/>
            </Grid>
            <Grid item xs={4}>
                <SidebarContainer />
            </Grid>
            <Grid item xs={8}>
                <ContentsContainer />
            </Grid>
          </Grid>
      );
   }
}

export default withStyles(styles)(AppContainer);