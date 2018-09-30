import React, { Component, PropTypes } from 'react';
import { withStyles } from "@material-ui/core/styles";
import GoogleAd from './google_ad';


const style = {
  marginTop: '15px',
  marginBottom: '20px'
};

class AdCompornent extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return (
        <GoogleAd 
        client="ca-pub-1690258357415635" 
        slot="5628944161" 
        format="auto" 
        wrapperDivStyle={style}
      />
      );
   }
}

export default withStyles(styles)(AdCompornent);