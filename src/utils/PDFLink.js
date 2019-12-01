//Packages
import React from 'react';

//Assets
import summary from "../assets/pdf/SHMCAP_executive_summary.pdf";
import plan from "../assets/pdf/SHMCAP-September2018-Full-Plan-web.pdf";

const PDFLink = ({pdf, page, className, children}) => {
    let file;
    if (pdf === "summary")
        file = summary
    else
        file = plan
    return (
        <a className={className} href={`${file}#page=${page}`} target="_blank">{children}</a>
    )
}

export default PDFLink;