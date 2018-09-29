import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LogoCompornent from "../compornent/LogoCompornent";
import SearchCompornent from "../compornent/SearchCompornent";


const styles = theme => ({
   root: {
     flexGrow: 1,
     textAlign: 'center'
   }
});

class HeaderContainer extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return (
        <div className={this.props.classes.root} >
            <Grid container spacing={8} >
                <Grid item xs={6}>
                    <LogoCompornent store={this.props.store}/>
                </Grid>
                <Grid item xs={6}>
                    <SearchCompornent store={this.props.store}/>
                </Grid>
            </Grid>
         </div>
    );
   }
}

export default withStyles(styles)(HeaderContainer);