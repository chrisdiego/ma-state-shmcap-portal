import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeading from '../utils/PageHeading';
import Toolbox from '../utils/Toolbox';

const HighlightsPage = ({ match }) => {
    const highlightsPageData = {
        drought: {
            type: "Drought",
            description: "Droughts can vary widely in duration, severity, and local impact. They may have widespread social and economic significance that requires the response of numerous parties, including water suppliers, firefighters, farmers, and residents. Droughts are often defined as periods of deficient precipitation. How this deficiency is experienced can depend on factors such as land-use change, the existence of dams, and water supply withdrawals or diversions. For example, impervious surfaces associated with development can exacerbate the effects of drought due to decreased groundwater recharge.",
            knowMoreLink: "https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A514%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D",
            hazardProfile: [
                {
                    label: "Location",
                    href: ""
                },
                {
                    label: "Previous Occurances",
                    href: ""
                },
                {
                    label: "Frequency of Occurrences",
                    href: ""
                },
                {
                    label: "Severtiy/Extent",
                    href: ""
                },
                {
                    label: "Warning Time",
                    href: ""
                },
                {
                    label: "Secondary Hazard",
                    href: ""
                },
                {
                    label: "Exposure and Vulnerability",
                    href: ""
                },
            ],
            details: [
                {
                    title: "CAUSE",
                    description: "here are many ways to define drought; however, the root cause of most droughts is an extended period of deficient precipitation.",
                },
                {
                    title: "MOST AT-RISK LOCATIONS",
                    description: "The entire Commonwealth is exposed to this hazard. Each drought can affect some or all regions of the Commonwealth at different intensities.",
                },
                {
                    title: "HISTORIC FREQUENCY",
                    description: "The last emergency level drought was in the 1060s, but since then, multiple severe droughts have occurred, including two at the Warning level and four at the watch level. Although shorter in duration, the severity of the 2016 drought was equivalent to that of the 1060s. However less severe droughts precipitation data analyzes in the Drought Management Plan, there is approximately an 8% chance of a Watch level drought occurring in any given month.",
                }
            ],
            effects: {
                images: [],
                entries: [
                    {
                        title: "Prolonged Drought",
                        description: "The frequency and intensity of drought are projected to increase during summer and fall in the Northeast as higher temperatures lead to greater evaporation and earlier winter and spring snowmelt, and precipitation patterns become more variable and extreme."
                    },
                    {
                        title: "Reduced Snowpack",
                        description: "Due to climate change, the proportion of precipitation falling as snow and the extent of time snowpack remains are both expected to decrease. This reduces the period during which snowmelt can recharge groundwater Supplies, bolster streamflow, and provide water for the growing period."
                    }
                ]
            },
            sectors: [
                {
                    title: "POPULATIONS",
                    description: `General At-Risk Population: State-wide exposure.<br />Vulnerable Populations: Residents with a private water supply, such as a well; persons who receive water through a pubic provider; populations with respiratory health conditions.`
                },
                {
                    title: "GOVERNMENT",
                    description: "Drought impacts on government facilities are limited, with the exception of facilities like parks or greenhouses that rely on specific environmental conditions. However, droughts contribute to conditions that can be conducive to wildfire and fire-fighting can be hampered by water shortage."
                },
                {
                    title: "BUILT ENVIRONMENT",
                    description: "Some infrastructure may not be built to operate during drought conditions. For example, a reservoir’s intake pipe may be higher than the reservoir water level in a severe drought. Similar conditions may occur for cooling water intake for energy production. For groundwater water supply, deeper wells may be needed or alternate supplies found for emergency backup during severe droughts. Drier summers and intermittent droughts may strain irrigation water supplies, stress crops, and delay harvests."
                },
                {
                    title: "NATURAL RESOURCES & ENVIRONMENT",
                    description: "Prolonged droughts can have severe impacts on groundwater and surface water-dependent ecosystems and natural resources, as most organisms require water throughout their life cycle. Forests managed for timber, or other economic uses could experience reduced growth rates or mortality during periods of drought."
                },
                {
                    title: "ECONOMY",
                    description: "The economic impacts of drought can be significant in the agriculture, recreation, forestry, and energy sectors. Economic impacts might also include purchasing water during drought emergencies. Crop failure can also result in an increase in food prices, placing economic stress on a broader portion of the economy."
                }
            ],
            sectorLink: ""
        }
    };

    const toolboxData = [
        {
            label: "Hazard Profile",
            href: `${match.url}#profile`
        },
        {
            label: "Potential Effects of Climate Change",
            href: `${match.url}#effects`
        },
        {
            label: "Exposure and Vulnerability by Key Sector",
            href: `${match.url}#exposure`
        },
    ];

    const pageData = highlightsPageData[match.params.hazard];

    return (
        <>
            <Row className="m-0">
                <PageHeading title={pageData.type} />
            </Row>
            <Row className="my-5 page-container mx-auto">
                <Col sm={7}>   
    
                </Col>
                <Col sm={{span: 4, offset: 1}}>
                    <Toolbox glossary={toolboxData} />
                </Col>
            </Row>
        </>
    );
}

export default HighlightsPage;