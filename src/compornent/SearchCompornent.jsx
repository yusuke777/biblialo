import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import classNames from "classnames";
import { observer } from "mobx-react";

const styles = theme => ({
   root: {
     flexGrow: 1
   }
});

@observer
class SearchCompornent extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return (
        <TextField onChange={event => {
          this.props.store.eventHandle(event.target.value);
        }}/>
      );
   }
}

export default withStyles(styles)(SearchCompornent);