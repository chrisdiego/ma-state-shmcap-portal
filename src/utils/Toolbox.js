import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Toolbox = ({ glossary }) => {
    return (
        <div className="toolbox px-5 py-3 position-fixed" style={{borderWidth: "thick", border: "3px solid #2B1E76"}}>
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
                <li><Link to="/action-tracker" className="text-secondary" >SHMCAP Action Tracker</Link></li>
                <li><a href="https://www.resilientma.org/data/maps" className="text-secondary" target="_blank">Mapping Tools</a></li>
                <li><Link to="/acronyms" className="text-secondary" target="_blank">Acronyms</Link></li>
            </ul>
        </div>
    );
}

export default Toolbox;
