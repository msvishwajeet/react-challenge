import React from 'react';
import Box from './Box';
export default class Row extends React.Component {

   getBox=(count,boxMargin)=>{
       let jsxArray=[];
        for(var i =0; i<count;i++){
        jsxArray.push(<Box key={i+"box"} margin={boxMargin}/>);
        }
        return jsxArray;
   }
    
    render() {
        let {boxCount,rowMargin,boxMargin} = this.props
        return<div className='row' style={{margin:rowMargin}}>
              {boxCount !=undefined &&
                this.getBox(boxCount,boxMargin)

              }
            </div >
            
    }
}

