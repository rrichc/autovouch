import React from 'react';
import DisplayTable from './DisplayTable';
import DisplayTable2 from './DisplayTable2'
import clientdocs from './clientdocs';
import PDFUpload from './PDFUpload';
import Table from '../../node_modules/react-bootstrap/Table';

const client = () => {
    return (
        <div>

            <div>
      <div class="pa5 center">
        <h1> DOCUMENT REVIEW </h1> <h3> Invoices </h3>
        <Table striped bordered hover class="pa3">
          <thead>
            <tr>
              <th>Unique ID</th>
              <th>GL Name</th>    
              <th>GL #</th>
              <th>Journal Entry #</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Office Supplies</td>
              <td>20534</td>
              <td>JRN-123</td>
              <td>STAPLES</td>
              <td>30.45</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Computers and Equipment</td>
              <td>20649</td>
              <td>JRN-345</td>
              <td>APPLE CANADA</td>
              <td>1,400.63</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Software</td>
              <td>20693</td>
              <td>JRN-547</td>
              <td>FACEBOOK</td>
              <td>99.99</td>
            </tr>
          </tbody>
        </Table>
      </div>
        <div class="ph6 center"><PDFUpload/></div>
      
    </div>
        </div>
    )
}

export default client