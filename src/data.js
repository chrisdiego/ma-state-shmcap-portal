import precipitation from './assets/changes-in-precipitation.png';
import extremeWeather from './assets/extreme-weather.png';
import seaLevelRise from './assets/sea-level-rise.png';
import risingTemperatures from './assets/rising-temperatures.png';
import summary from './assets/pdf/SHMCAP_executive_summary.pdf';
import chapter1 from './assets/pdf/SHMCAP_2018_chapter1.pdf';
import chapter2 from './assets/pdf/SHMCAP_2018_chapter2.pdf';
import chapter3 from './assets/pdf/SHMCAP_2018_chapter3.pdf';
import chapter4 from './assets/pdf/SHMCAP_2018_chapter4.pdf';
import chapter5 from './assets/pdf/SHMCAP_2018_chapter5.pdf';
import chapter6 from './assets/pdf/SHMCAP_2018_chapter6.pdf';
import chapter7 from './assets/pdf/SHMCAP_2018_chapter7.pdf';
import chapter8 from './assets/pdf/SHMCAP_2018_chapter8.pdf';
import chapter9 from './assets/pdf/SHMCAP_2018_chapter9.pdf';
import chapter10 from './assets/pdf/SHMCAP_2018_chapter10.pdf';

export const highlightFacets = [
    {
        facetGroupTitle: "Changes in Precipitation",
        facets: [
            {
                title: "Inland Flooding",
                link: ""
            },
            {
                title: "Drought",
                link: ""
            },
            {
                title: "Landslide",
                link: ""
            }
        ]
    },
    {
        facetGroupTitle: "Sea Level Rise",
        facets: [
            {
                title: "Coastal Flooding",
                link: ""
            },
            {
                title: "Coastal Erosion",
                link: ""
            },
            {
                title: "Tsunami",
                link: ""
            }
        ]
    },
    {
        facetGroupTitle: "Extreme Weather",
        facets: []
    },
    {
        facetGroupTitle: "Rising Temperatures",
        facets: [
            {
                title: "Average/Extreme Temperatures",
                link: ""
            },
            {
                title: "Wildfires",
                link: ""
            },
            {
                title: "Invasive Species",
                link: ""
            }
        ]
    },
    {
        facetGroupTitle: "Non-Climate Driven Hazards",
        facets: [
            {
                title: "Earthquakes",
                link: ""
            }
        ]
    },
];

export const hazardSections = [
    {
        id: "precipitation",
        heading: "Changes in Precipitation",
        headingLink: "https://www.resilientma.org/changes/changes-in-precipitation",
        description: "Changes in the amount, frequency, and timing of precipitation - including both rainfall - are occuring across the globe as temperatures rise and other climate patterns shift in response",
        src: precipitation,
        alt: "Changes in precipitation",
        hazards: ["Inland Flooding", "Drought", "Landslide"],
        interactions: ["Extreme Weather", "Rising Temperatures"],
        impacts: "Flash flooding, urban flooding, drainage system impacts (natural and human-made)",
        projections: ["Annual precipitation increase up to 16% (+7.3 inches)", "Days with rainfall accumulation 1+ inch: Increase up to 57% (+4 days)"]
    },
    {
        id: "seaLevelRise",
        heading: "Sea Level Rise",
        headingLink: "https://www.resilientma.org/changes/sea-level-rise",
        description: "Climate change will drive rising sea levels, and rising seas will have wide-ranging impacts on communities, natural resources, and infrastructure along the Commonwealth's 1,519 tidal shoreline miles.",
        src: seaLevelRise,
        alt: "Sea level rise",
        hazards: ["Coastal Erosion, Coastal Flooding, Tsunami"],
        interactions: ["Extreme Weather, Changes in Precipitation, Extreme Precipitation"],
        impacts: "Increase in tidal and coastal floods, storm surge, coastal erosion, marsh migration, inundation of coastal and marine ecosystems, loss of subsidence wetlands.",
        projections: ["Sea level: Increase by 4.0 to 10.5 feet along the Massachusetts coast."]
    },
    {
        id: "risingTemperatures",
        heading: "Rising Temperatures",
        headingLink: "https://www.resilientma.org/changes/rising-temperatures",
        description: "Average temperatures have risen steadily in the last 50 years, and scientists warn that the trend will continue unless greenhouse gas emissions are significantly reduced. The 9 warmest years on record all occurred in the last 2 years (2017, 2016, 2014, 2013, 2010, 2009, 2005, and 1998) according to the U.S. National Oceanographic and Atmospheric Adminitration (NOAA)",
        src: risingTemperatures,
        alt: "Rising temperatures",
        hazards: ["Average/Extreme Temperatures", "Wildifres", "Invasive Species"],
        interactions: ["Changes in Precipitation", "Extreme Weather"],
        impacts: "Shifting seasons (longer summer, early spring, including earlier timing of spring peak flow), increase in length of growing season, increase in invasive species, ecosystem stress, energy brownouts from higher energy demands, more intense heat waves, public health impacts from high heat exposure and poor outdoor air quality, drying of streams and wetlands, eutrophication of lakes and ponds.",
        projections: ["Average annual temperature increase up to 23% (10.8 degrees Fahrenheit)", "Days/years with daily minimum temperature below freezing: Decrease up to 42% (-62 days)", "Winter temperatures: Increase at a greater rate than spring, summer, or fall", "Long-term average minimum winter temperature: Increase up to 66% (+11.4 degrees Fahrenheit)", "Days/year with daily maximum temperature over 90 degrees Fahrenheit: Increase by up to 1,280% (+64 days)", "Growing degree days: Increase by 23% to 52%"]
    },
    {
        id: "extremeWeather",
        heading: "Extreme Weather",
        headingLink: "https://www.resilientma.org/changes/extreme-weather",
        description: "Climate change is expected to increase extreme weather events across the globe, as well as right here in Massachusetts.  There is strong evidence that storms - from heavy downpours and blizzards to tropical cyclones and hurricanes are becoming more intense and damaging, and can lead to devastating impacts for residents across the state.",
        src: extremeWeather,
        alt: "Extreme weather",
        hazards: ["Hurricanes/Tropical Storms", "Severe Winter Weather/Nor-easters", "Tornadoes", "Other Severe Weather"],
        interactions: ["Rising Temperatures", "Changes in Precipitation"],
        impacts: "Increase in frequency and intensity of extreme weather events, resulting in greater damage to natural resources, property, and infrastructure, as well as increased potential for loss of life.",
        projections: ["Frequency and magnitude: Increase"]
    },
];

export const glossaryData1 = [
    {
    acronym: "ASCE",
    definition: "Board of Building Regulations and Standards"
    },
    {
    acronym: "BBRS",
    definition: "American Society of Civil Engineers"
    },
    {
    acronym: "BMPs",
    definition: "Best Management Practices"
    },
    {
    acronym: "CDBG",
    definition: "Community Development Block Grant"
    },
    {
    acronym: "CDBG-DR",
    definition: "Community Development Block Grant Disaster Recovery"
    },
    {
    acronym: "CEMP",
    definition: "Comprehensive Emergency Management Plan"
    },
    {
    acronym: "CERT",
    definition: "Community Emergency Response Teams"
    },
    {
    acronym: "CFR",
    definition: "Code of Federal Regulations"
    },
    {
    acronym: "CMR",
    definition: "Code of Massachusetts Regulations"
    },
    {
    acronym: "COSTEP MA",
    definition: "Coordinated Statewide Emergency Preparedness in Massachusetts"
    },
    {
    acronym: "CPG",
    definition: "Comprehensive Preparedness Guide"
    },
    {
    acronym: "CRS",
    definition: "Community Rating System"
    },
    {
    acronym: "CZM",
    definition: "Office of Coastal Zone Management"
    },
    {
    acronym: "DCAMM",
    definition: "Division of Capital Asset Management and Maintenance"
    },
    {
    acronym: "DCR",
    definition: "Department of Conservation and Recreation"
    },
    {
    acronym: "DEP",
    definition: "Department of Environmental Protection"
    },
    {
    acronym: "DMA",
    definition: "Disaster Mitigation Act"
    },
    {
    acronym: "DOER",
    definition: "Department of Energy Resources"
    },
    {
    acronym: "EAP",
    definition: "Emergency Action Plan"
    },
    {
    acronym: "EECC",
    definition: "Early Environmental Coordination Checklist"
    },
    {
    acronym: "EOEEA",
    definition: "Executive Office of Energy and Environmental Affairs"
    },
    {
    acronym: "EOPSS",
    definition: "Executive Office of Public Safety and Security"
    },
    {
    acronym: "EMAP",
    definition: "Emergency Management Accreditation Program"
    },
    {
    acronym: "FEMA",
    definition: "Federal Emergency Management Agency"
    },
    {
    acronym: "FHMP",
    definition: "Flood Hazard Management Program"
    },
    {
    acronym: "FIRM",
    definition: "Flood Insurance Rate Map"
    },
    {
    acronym: "FIS",
    definition: "Flood Insurance Studies"
    },
    {
    acronym: "FMA",
    definition: "Flood Mitigation Assistance"
    },
    {
    acronym: "FMAG",
    definition: "Fire Mitigation Assistance Grants"
    },
    {
    acronym: "FOA",
    definition: "First Order Approximation"
    },
    {
    acronym: "FY",
    definition: "Fiscal Year"
    },
    {
    acronym: "GHG",
    definition: "Greenhouse Gas"
    },
    {
    acronym: "GIS",
    definition: "Geographic Information System"
    },
    {
    acronym: "HIRA",
    definition: "Hazard Identification and Risk Assessment"
    },
    {
    acronym: "HMA",
    definition: "Hazard Mitigation Assistance"
    },
    {
    acronym: "HMGP",
    definition: "Hazard Mitigation Grant Program"
    }
];

export const glossaryData2 = [
    {
    acronym: "I-Codes",
    definition: "International Codes"
    },
    {
    acronym: "IBHS",
    definition: "Institute for Business and Home Safety"
    },
    {
    acronym: "ICC",
    definition: "International Code Council"
    },
    {
    acronym: "IHP",
    definition: "Individuals and Households Program"
    },
    {
    acronym: "IRC",
    definition: "International Residential Code"
    },
    {
    acronym: "ISO",
    definition: "Insurance Services Office"
    },
    {
    acronym: "LAMP",
    definition: "Levee Analysis and Mapping Procedures"
    },
    {
    acronym: "LiDAR",
    definition: "Light Detection and Ranging"
    },
    {
    acronym: "LiMWA",
    definition: "Limit of Moderate Wave Action"
    },
    {
    acronym: "LSCSF",
    definition: "Land Subject to Coastal Storm Flowage"
    },
    {
    acronym: "MAPC",
    definition: "Metropolitan Area Planning Council"
    },
    {
    acronym: "MassDOT",
    definition: "Massachusetts Department of Transportation"
    },
    {
    acronym: "MAESF",
    definition: "Massachusetts Emergency Support Function"
    },
    {
    acronym: "MEMA",
    definition: "Massachusetts Emergency Management Agency"
    },
    {
    acronym: "MGL",
    definition: "Massachusetts General Laws"
    },
    {
    acronym: "MSBC",
    definition: "Massachusetts State Building Code"
    },
    {
    acronym: "MVP",
    definition: "Municipal Vulnerability Preparedness"
    },
    {
    acronym: "NE CASC",
    definition: "Northeast Climate Adaptation Science Center"
    },
    {
    acronym: "NESEC",
    definition: "Northeast States Emergency Consortium"
    },
    {
    acronym: "NFIP",
    definition: "National Flood Insurance Program"
    },
    {
    acronym: "NOAA",
    definition: "National Oceanic and Atmospheric Administration"
    },
    {
    acronym: "NGO",
    definition: "Nongovernmental Organization"
    },
    {
    acronym: "PA",
    definition: "Public Assistance"
    },
    {
    acronym: "PDM",
    definition: "Pre-Disaster Mitigation"
    },
    {
    acronym: "PMT",
    definition: "Project Management Team"
    },
    {
    acronym: "PV",
    definition: "Photovoltaic"
    },
    {
    acronym: "Risk MAP",
    definition: "Risk Mapping, Assessment, and Planning"
    },
    {
    acronym: "SFHA",
    definition: "Special Flood Hazard Area"
    },
    {
    acronym: "SHMCAP",
    definition: "State Hazard Mitigation and Climate Adaptation Plan"
    },
    {
    acronym: "SHMP",
    definition: "State Hazard Mitigation Plan"
    },
    {
    acronym: "SHMT",
    definition: "State Hazard Mitigation Team"
    },
    {
    acronym: "SMART",
    definition: "Solar Massachusetts Renewable Target"
    },
    {
    acronym: "SRMP",
    definition: "Statewide Resilience Master Plan"
    },
    {
    acronym: "Stafford Act",
    definition: "Robert T. Stafford Disaster Relief and Emergency Assistance Act"
    },
    {
    acronym: "THIRA",
    definition: "Threat Hazard Identification and Risk Assessment"
    },
    {
    acronym: "USACE",
    definition: "U.S. Army Corps of Engineers"
    },
    {
    acronym: "V Zone",
    definition: "Velocity Flood Zone"
    },
    {
    acronym: "WPA",
    definition: "Wetlands Protection Act"
    }
];
     
export const fullPlanData = [
    {
        title: "Full Plan",
        description: "",
        file: summary,
        size: ""
    },
    {
        title: "Executive Summary",
        description: "",
        file: summary,
        size: "3.7 MB"
    },
    {
        title: "Chapter 1: Introduction and Assurances",
        description: "This introductory chapter to the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) discusses the plan's purpose, authority and scope, adoption by the State, assurances, plan organization, and revisions.",
        file: chapter1,
        size: "405 kB"
    },
    {
        title: "Chapter 2: Planning Context",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) provides an overview of key considerations for hazard mitigation and climate adaptation planning in the Commonwealth, including the organization of government in Massachusetts and introduction of the Commonwealth’s Climate Change Strategy. Sections on recent and projected development trends and climate change projections are also included to provide a summary of changes that have occurred or are projected to occur in Massachusetts that may affect risk and vulnerability, as determined in the risk assessment that was conducted for this integrated State Hazard Mitigation and Climate Adaptation Plan (SHMCAP).",
        file: chapter2,
        size: "1.2 MB"
    },
    {
        title: "Chapter 3: Introduction to Risk Assessment",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) discusses the risk assessment used in the plan, including the natural hazard identification process, a climate change and natural hazard taxonomy, the sectors assessed, and methodologies used.",
        file: chapter3,
        size: "490 kB"
    },
    {
        title: "Chapter 4: Risk Assessment",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) examines the natural hazards that have the potential to impact the Commonwealth of Massachusetts, identifies regional areas (i.e., per Massachusetts County) and specific populations that are most vulnerable to climate impacts, and estimates the associated economic losses. A summary sheet is provided for each hazard, which outlines key information and findings from the risk assessment conducted for that hazard.",
        file: chapter4,
        size: "12.4 MB"
    },
    {
        title: "Chapter 5: Technological and Human-Caused Hazards",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) introduces several state emergency management plans that assess technological and human-caused hazards to demonstrate that the Commonwealth’s Emergency Management Program accounts for both natural and non-natural hazards and to aid in maintaining the Commonwealth’s Emergency Management Accreditation Program (EMAP) accreditation.",
        file: chapter5,
        size: "350 kB"
    },
    {
        title: "Chapter 6: State Capability and Adaptive Capacity Anaylsis",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) presents an analysis of the Commonwealth of Massachusetts' current capability and capacity to address current and future risks from the impacts of climate change and hazards through existing resources. The capability and adaptive capacity analysis includes two integral components: (1) a capability assessment that evaluates the Commonwealth’s existing capabilities to enable and implement hazard mitigation and climate adaptation activities on a statewide level; and (2) an adaptive capacity analysis that is more specific to individual state agencies.",
        file: chapter6,
        size: "700 kB"
    },
    {
        title: "Chapter 7: Hazard Mitigation and Climate Adaptation Strategy",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) outlines hazard mitigation and climate adaptation actions. It also discusses strategy development and the importance of nature-based solutions.",
        file: chapter7,
        size: "757 kB"
    },
    {
        title: "Chapter 8: Plan Implementation and Maintenance",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) outlines specifically how the State Hazard Mitigation and Climate Adaptation Plan will be implemented and maintained by the Commonwealth of Massachusetts, and it describes how the public and other stakeholders will continue to be involved in the process.",
        file: chapter8,
        size: "469 kB"
    },
    {
        title: "Chapter 9: Planning Process",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) provides a summary of the process used to develop this plan, including how it was prepared and who was involved. It also describes the stakeholder outreach and engagement strategy that was developed and implemented for the SHMCAP, and provides an overview of the state agency vulnerability assessment process that was integrated into the plan. Note that state agency program integration is more fully addressed in Chapter 6: State Capability and Adaptive Capacity Analysis.",
        file: chapter9,
        size: "651 kB"
    },
    {
        title: "Chapter 10: Coordination of Local Hazard Mitigation and Climate Adaptation Planning",
        description: "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) provides information on funding and technical assistance for local hazard mitigation and climate adaptation planning, local plans, local plan integration, and ecosystem scale planning for nature-based solutions.",
        file: chapter10,
        size: "1.5 MB"
    },
];