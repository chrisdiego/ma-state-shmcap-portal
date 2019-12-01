import React from 'react';

const PageHeading = ({title}) => {
    return (
        <div className="w-100" style={{backgroundColor: "#2B1E76"}}>
            <h1 className="mx-auto p-5 text-white font-weight-bold shadow pb-2 page-container" >{title}</h1>
        </div>
    );
};

export default PageHeading;