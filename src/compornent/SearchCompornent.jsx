import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import { observer } from "mobx-react";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

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
        <div className={this.props.classes.root}>
        <TextField
         label="Search"
         variant="outlined"
         onChange={event =>{
          this.props.store.changeValue(event.target.value)
         }
         }
         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search onClick={() => {
                  this.props.store.eventHandle();
                 }}/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
        </div>
      );
   }
}

export default withStyles(styles)(SearchCompornent);