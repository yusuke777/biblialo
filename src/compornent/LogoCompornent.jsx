import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {observer} from 'mobx-react';


const styles = theme => ({
   root: {
     flexGrow: 1
   }
});

@observer
class AppContainer extends React.Component{
   
   constructor(props){
      super(props);
      
   }

   render(){
      return (
        <div className={this.props.classes.root}>
        <h1 >{this.props.store.hoge}</h1>
        </div>
    );
   }
}

export default withStyles(styles)(AppContainer);