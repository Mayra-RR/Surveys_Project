import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import VerticalTabs from './Vtabs/VerticalTabs'
import './SurveyMaker.css'

class SurveyMaker extends Component { 
 render(){ 
    return<div className="surveyM">        
          <Container /* fixed style={{ backgroundColor: '#ffcc80', height: '100vh'}} */>
            <VerticalTabs />
          <Typography component="div"  />
          </Container>      
        </div>       
       };
                 
}
export default SurveyMaker;