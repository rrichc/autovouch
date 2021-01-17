import React from "react";
import Table from "react-bootstrap/Table";

const clientdocs = () => {
  return (
    <div>
      <div class="pa5 center">
        <h1> DOCUMENT REVIEW </h1> <h3> Invoices </h3>
        <Table striped bordered hover class="pa3">
          <thead>
            <tr>
              <th>Unique ID</th>
              <th>Name</th>
              <th>Journal Entry #</th>
              <th>GL #</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Stuff</td>
              <td>Stuff</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Stuff</td>
              <td>Stuff</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Birb</td>
              <td>@twitter</td>
              <td>Stuff</td>
              <td>Stuff</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default clientdocs;