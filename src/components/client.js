import React from 'react';
import DisplayTable from './DisplayTable';
import DisplayTable2 from './DisplayTable2'
import PDFUpload from './PDFUpload';

const client = () => {
    return (
        <div>
            <h1>This is the client page</h1>

            <PDFUpload/>
        </div>
    )
}

export default client