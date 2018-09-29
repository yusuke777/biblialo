import React from "react";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
   root: {
     flexGrow: 1,
     height: 400
   }
});

class SidevbarContainer extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return (
        <div className={this.props.classes.root}>
        <h1>Hello</h1>
        </div>
    );
   }
}

export default withStyles(styles)(SidevbarContainer);