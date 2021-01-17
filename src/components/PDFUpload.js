import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';

export default class CSVReader2 extends Component {
    handleOnDrop = (data) => {
        console.log('---------------------------');
        console.log(data);
          fetch('http://localhost:3000/pdfupload',{
                method: 'post',
              
                
            })
          .then((res) => res.text())
          .then((data) => console.log(data)); // output: {}
        console.log('---------------------------');
    
      };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  render() {
    return (
      <>
        <h5>Upload PDF audit forms</h5>
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          addRemoveButton
          onRemoveFile={this.handleOnRemoveFile}
        >
          <span>Drop PDF file here or click to upload.</span>
        </CSVReader>
      </>
    );
  }
}