import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Toolbox = ({ glossary }) => {
    return (
        <div className="toolbox px-5 py-3" style={{borderWidth: "thick", border: "3px solid #2B1E76"}}>
            {glossary ? 
                <>
                    <h5 className="text-secondary font-weight-bold">WHAT'S IN THIS SECTION:</h5>
                    <ul className="px-3">
                        {glossary.map(link => <li ><HashLink to={link.href} className="text-secondary">{link.label}</HashLink></li>)}
                    </ul>
                </> : null
            }
            <h5 className="text-secondary font-weight-bold">TOOLS:</h5>
            <ul className="px-3">
                <li><a href="http://ma-state-action-tracker.s3-website-us-east-1.amazonaws.com/#/" className="text-secondary" target="_blank">SHMCAP Action Tracker</a></li>
                <li><Link to="/placeholder" className="text-secondary">Mapping Tools</Link></li>
                <li><Link to="/glossary" className="text-secondary">Glossary</Link></li>
            </ul>
        </div>
    );
}

export default Toolbox;