//Packages
import React from 'react';

//Components
import PDFLink from '../utils/PDFLink';
import ExpandableSection from '../utils/ExpandableSection';
import PageLayout from './PageLayout';

//Assets
import { hazardSections } from '../data.js';

const HazardsPage = () => {
    const toolboxData = [
        {
            label: "Changes in Precipitation",
            href: "/hazards#precipitation"
        },
        {
            label: "Sea Level Rise",
            href: "/hazards#seaLevelRise"
        },
        {
            label: "Rising Temperatures",
            href: "/hazards#risingTemperatures"
        },
        {
            label: "Extreme Weather",
            href: "/hazards#extremeWeather"
        },
    ];
    return (
        <PageLayout toolboxData={toolboxData} title="Climate Change is Intensifying Natural Hazards">
            <p>Climate change is already exacerbating natural hazards and extreme weather events, as well as leading to new impacts that will affect the Commonwealth.  The SHMCAP integrates information and planning elements for 14 natural hazards that could affect the Commonwealth of Massachusetts with the following four climate changes: changes in precipitation, sea level rise, rising temperatures, and extreme weather.</p>
            <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
            {hazardSections.map(section => <ExpandableSection {...section} />)}
            <PDFLink page="73" pdf="plan" className="btn btn-primary">Want to know more?</PDFLink>
        </PageLayout>
    );
}

export default HazardsPage;