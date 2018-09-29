import React from "react";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
   root: {
     flexGrow: 1
   }
});

class RankingCompornent extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return (
        <h1>unko</h1>
    );
   }
}

export default withStyles(styles)(RankingCompornent);