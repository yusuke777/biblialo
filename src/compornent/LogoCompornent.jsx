import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {observer} from 'mobx-react';
import Img from "../image/ImageLogo.png";

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
        <img 
          src = {Img} 
          height={ 100 }
        />
        </div>
        
    );
   }
}

export default withStyles(styles)(AppContainer);