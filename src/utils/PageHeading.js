import React from 'react';

const PageHeading = ({title}) => {
    return (
        <h1 className="p-5 text-white font-weight-bold w-100 shadow pb-2" style={{backgroundColor: "#2B1E76"}}>{title}</h1>
    );
};

export default PageHeading;