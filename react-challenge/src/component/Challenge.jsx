import React from 'react';
import Row from './Row';
export default class Challenge extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
           noOfRows:'',
           columnString:'',
           spaceBtRow:'5px',
           spaceBtBoxes:'10px',
        };

    }
    
    inputOnchangeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    getRow=(count)=>{
        let jsxArray=[];
         for(var i =0; i<count;i++){
         jsxArray.push(<Row key={i} 
            boxCount={this.state.columnString.split(',').length>i?this.state.columnString.split(',')[i]:"0"} 
            rowMargin={this.state.spaceBtRow} 
            boxMargin={this.state.spaceBtBoxes}/>);
         }
         return jsxArray;
    }
    render() {
        
         let {noOfRows,spaceBtBoxes,spaceBtRow,columnString} = this.state;
        return<div className='form-section'>
            <div className="input_area">
            <input
                className='formInput'
                type='number'
                name='no-of-rows'
                placeholder='No of rows'
                onChange={(e) => this.inputOnchangeHandler(e)}
                id='noOfRows'
                value={noOfRows}
                autoComplete='off'
            />
            <input
                className='formInput'
                type='text'
                name='column-string'
                placeholder='Column string'
                onChange={(e) => this.inputOnchangeHandler(e)}
                id='columnString'
                value={columnString}
                autoComplete='off'
            />
            <input
                className='formInput'
                type='text'
                name='space-bt-rows'
                placeholder='Space between rows'
                onChange={(e) => this.inputOnchangeHandler(e)}
                id='spaceBtRow'
                value={spaceBtRow}
                autoComplete='off'
            />
            <input
                className='formInput'
                type='text'
                name='space-bt-boxes'
                placeholder='Space between boxes'
                onChange={(e) => this.inputOnchangeHandler(e)}
                id='spaceBtBoxes'
                value={spaceBtBoxes}
                autoComplete='off'
            />
            </div>
              {this.getRow(noOfRows)}
            </div >
            
    }
}

