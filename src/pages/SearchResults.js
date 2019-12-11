import React from 'react';
import index from '../searchData.js'
import PageLayout from '../pages/PageLayout';
import { Link } from 'react-router-dom';


const SearchResults = ({ match }) => {

    const results = index.search(match.params.query);
    return (
        <PageLayout title="Search Results">      
            <ul className="list-unstyled">      
            {results.length > 0 ? results.map(result => {
                const record = index.documentStore.getDoc(result.ref)
                return (
                    <li>
                        <Link to={record.link}>
                            <h2 className="text-secondary font-weight-bold">{record.page}</h2>
                        </Link>
                        <h4 className="text-primary">{record.title}</h4>
                        <p>
                            {record.body.substring(record.body.indexOf(match.params.query) -150, record.body.indexOf(match.params.query) + (match.params.query.length + 150))}...
                        </p>
                    </li>
                )
            }) : <h2>No results found</h2>}
            </ul>
        </PageLayout>
    );
};

export default SearchResults;



