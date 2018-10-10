import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import { observer } from "mobx-react";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
      flexGrow: 1
    },
    button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
    },
    textField: {
      flexBasis: 400,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    }
});

@observer
class SearchCompornent extends React.Component{
   constructor(props){
      super(props);
   }
   state = {
    keyword: '',
    open: false,
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

   render(){
      return (
        <div className={this.props.classes.root}>
        <TextField
         label="Search"
         variant="outlined"
         className={this.props.classes.textField}
         onChange={event =>{
          this.props.store.changeValue(event.target.value)
         }}
         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <form autoComplete="off">
                <FormControl className={this.props.classes.formControl}>
                  <InputLabel htmlFor="demo-controlled-open-select">Keyword</InputLabel>
                  <Select
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.props.store.bookSearchState}
                    onChange={this.props.store.changeBookSearchState}
                  >
                    <MenuItem value={'Title'}>Title</MenuItem>
                    <MenuItem value={'Author:'}>Author</MenuItem>
                    <MenuItem value={'Publisher'}>Publisher</MenuItem>
                    <MenuItem value={'ISBN code'}>ISBN code</MenuItem>
                  </Select>
                </FormControl>
              </form>
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

