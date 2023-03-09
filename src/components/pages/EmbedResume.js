import React from 'react'

function EmbedResume() {
    return (
        <div>
            <embed src={process.env.PUBLIC_URL + '/files/resume2.pdf'} type="application/pdf" width="100%" height='800px'/>
        </div>
    )
}

export default EmbedResume;
