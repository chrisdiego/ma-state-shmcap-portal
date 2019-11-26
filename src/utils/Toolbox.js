import React from 'react';
import { Link } from 'react-router-dom';

const Toolbox = ({ glossary }) => {
    return (
        <div className="toolbox px-5 py-3" style={{borderWidth: "thick", border: "3px solid #2B1E76"}}>
            {glossary ? 
                <>
                    <h5 className="text-secondary font-weight-bold">WHAT'S IN THIS SECTION:</h5>
                    <ul className="px-3">
                        {glossary.map(link => <li ><Link to="/placeholder" className="text-secondary">{link.label}</Link></li>)}
                    </ul>
                </> : null
            }
            <h5 className="text-secondary font-weight-bold">TOOLS:</h5>
            <ul className="px-3">
                <li><Link to="/placeholder" className="text-secondary">SHMCAP Action Tracker</Link></li>
                <li><Link to="/placeholder" className="text-secondary">Mapping Tools</Link></li>
                <li><Link to="/placeholder" className="text-secondary">Glossary</Link></li>
            </ul>
        </div>
    );
}

export default Toolbox;