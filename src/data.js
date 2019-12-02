import precipitation from './assets/changes-in-precipitation.png';
import extremeWeather from './assets/extreme-weather.png';
import seaLevelRise from './assets/sea-level-rise.png';
import risingTemperatures from './assets/rising-temperatures.png';
import summary from './assets/pdf/SHMCAP_executive_summary.pdf';
import plan from './assets/pdf/SHMCAP-September2018-Full-Plan-web.pdf';
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
                link: "/highlight/inlandFlooding"
            },
            {
                title: "Drought",
                link: "/highlight/drought"
            },
            {
                title: "Landslide",
                link: "/highlight/landslide"
            }
        ]
    },
    {
        facetGroupTitle: "Sea Level Rise",
        facets: [
            {
                title: "Coastal Flooding",
                link: "/highlight/coastalFlooding"
            },
            {
                title: "Coastal Erosion",
                link: "/highlight/coastalErosion"
            },
            {
                title: "Tsunami",
                link: "/highlight/tsunami"
            }
        ]
    },
    {
        facetGroupTitle: "Extreme Weather",
        facets: [
            {
                title: "Severe Winter",
                link: "/highlight/winterStorm"
            },
            {
                title: "Hurricanes",
                link: "/highlight/hurricane"
            },
            {
                title: "Tornadoes",
                link: "/highlight/tornadoes"
            },
            {
                title: "Other Extreme Weather",
                link: "/highlight/otherSevereWeather"
            },
        ]
    },
    {
        facetGroupTitle: "Rising Temperatures",
        facets: [
            {
                title: "Average/Extreme Temperatures",
                link: "/highlight/avgExtTemp"
            },
            {
                title: "Wildfires",
                link: "/highlight/wildfires"
            },
            {
                title: "Invasive Species",
                link: "/highlight/invasiveSpecies"
            }
        ]
    },
    {
        facetGroupTitle: "Non-Climate Driven Hazards",
        facets: [
            {
                title: "Earthquakes",
                link: "/highlight/earthquake"
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
        file: plan,
        size: "3.5 MB"
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

export const highlightsPageData = {
    drought: {
        type: "Drought",
        description: "Droughts can vary widely in duration, severity, and local impact. They may have widespread social and economic significance that requires the response of numerous parties, including water suppliers, firefighters, farmers, and residents. Droughts are often defined as periods of deficient precipitation. How this deficiency is experienced can depend on factors such as land-use change, the existence of dams, and water supply withdrawals or diversions. For example, impervious surfaces associated with development can exacerbate the effects of drought due to decreased groundwater recharge.",
        knowMoreLink: "136",
        hazardProfile: [
            {
                label: "Location",
                href: "139"
            },
            {
                label: "Previous Occurances",
                href: "142"
            },
            {
                label: "Frequency of Occurrences",
                href: "143"
            },
            {
                label: "Severtiy/Extent",
                href: "145"
            },
            {
                label: "Warning Time",
                href: "151"
            },
            {
                label: "Secondary Hazard",
                href: "151"
            },
            {
                label: "Exposure and Vulnerability",
                href: "151"
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
            images: [
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                },
                {
                    label: "Change in Precipitation",
                    src: precipitation
                }
            ],
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
                description: "General At-Risk Population: State-wide exposure. Vulnerable Populations: Residents with a private water supply, such as a well; persons who receive water through a pubic provider; populations with respiratory health conditions."
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
        sectorLink: "151"
    },
    inlandFlooding: {
        type: "Inland Flooding",
        description: "Nationally, inland flooding causes more damage annually than any other severe weather event. Between 2007 and 2014, the average annual cost of flood damages in Massachusetts was more than $9.1 million. Inland flooding is the result of moderate precipitation over several days, intense precipitation over a short period, or melting snowpack. Developed, impervious areas can contribute to inland flooding. Increases in precipitation and extreme storm events will result in increased inland flooding. Common types of inland flooding are described in the following subsections.",
        knowMoreLink: "99",
        hazardProfile: [
            {
                label: "Location",
                href: "104"
            },
            {
                label: "Previous Occurances",
                href: "106"
            },
            {
                label: "Frequency of Occurrences",
                href: "108"
            },
            {
                label: "Severtiy/Extent",
                href: "108"
            },
            {
                label: "Warning Time",
                href: "110"
            },
            {
                label: "Secondary Hazard",
                href: "111"
            },
            {
                label: "Exposure and Vulnerability",
                href: "111"
            }
        ],
        details: [
            {
                title: "CAUSE",
                description: "In Massachusetts, flooding is caused by Nor’easters, ice jams hurricanes/tropical storms, or other heavy precipitation events. Spring snowmelt, rain on snow or frozen ground, impervious surfaces, and steep slopes with minimal soil can exacerbate flooding.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "Between 1954 and 2017, Essex County experienced the most FEMA flood disaster declarations (18), followed by Norfolk County with 16.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Based on historical disaster declarations, the Commonwealth experiences a substantial flood event once every 3 years.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Extreme weather",
                    src: extremeWeather
                },
                {
                    label: "Changes in precipitation",
                    src: precipitation
                }
            ],
            entries: [
                {
                    title: "More Intense and Frequent Downpours",
                    description: "More intense downpours often lead to inland flooding as soils become saturated and stop absorbing more water, river flows rise, and urban stormwater systems become overwhelmed. Flooding may occur as a result of heavy rainfall, snowmelt or coastal flooding associated with high wind and storm surge."
                },
                {
                    title: "More Frequent Severe Storms",
                    description: "Climate change is expected to result in an increased frequency of severe storm events. This would directly increase the frequency of flooding events, and could increase the chance that subsequent precipitation will cause flooding if water stages are still elevated."
                },
                {
                    title: "Episodic Droughts",
                    description: "Vegetated ground cover has been shown to significantly reduce runoff. If drought causes vegetation to die off, this flood-mitigating capacity is diminished."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: Populations living in or near floodplain areas; people traveling in flooded areas or living in urban areas with poor stormwater drainage. Vulnerable Populations: Populations with low socioeconomic status who may consider the economic impacts of evacuating; people over age 65 who may require medical attention; households with young children who have difficulty evacuating; populations with low English language fluency who may not receive or understand warnings to evacuate."
            },
            {
                title: "GOVERNMENT",
                description: "According to the DCAMM facility inventory, 196 state facilities are exposed to the inland flooding hazard. Middlesex County contains the most state-owned buildings exposed to this hazard (64), followed by Norfolk (26) and Hampshire (25) Counties."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "Twenty-five critical facilities, including 10 police facilities and 6 military facilities, are exposed to the inland flooding hazard. The greatest proportion of these facilities occurs in Middlesex County (8). Flooding can also wash out sections of roadway and bridges, as well as cause extensive damage to utilities and disruption of critical services, such as liquid fuel delivery, non-emergency health care services, and child care. Increased river flooding is likely to cause soil erosion, soil loss, and crop damage. Stormwater drainage systems and culverts that are not sized to accommodate larger storms are likely to experience flood damage as extreme precipitation events increase."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Severe floods cause a wide range of environmental impacts. Animals can lose their habitats if habitat elements are swept away or destroyed. Riverbank and soil erosion transform existing habitats and deposit sediment in downstream areas. If high levels of nutrients are present in the soil, this can also lead to eutrophication in downstream ecosystems. "
            },
            {
                title: "ECONOMY",
                description: "Economic losses due to a flood include, but are not limited to damages to buildings (and their contents) and infrastructure, agricultural losses, business interruption (including loss of wages), impacts on tourism, and tax base. Using building replacement value as a proxy for economic exposure, Middlesex, Essex and Norfolk Counties are the most economically exposed to this hazard."
            },
        ],
        sectorLink: "111"
    },
    tsunami: {
        type: "Tsunami",
        description: "A tsunami is a devastating onshore surge of water or a string of waves created by the displacement of a large volume of water. Tsunamis can move hundreds of miles per hour (mph) in the open ocean and can come ashore with waves as high as 100 feet or more. The height of a tsunami wave that comes ashore is related to the strength of the event that generated the tsunami and to the configuration of the ocean bottom along the tsunami’s path.",
        knowMoreLink: "228",
        hazardProfile: [
            {
                label: "Location",
                href: "230"
            },
            {
                label: "Previous Occurrences",
                href: "231"
            },
            {
                label: "Frequency of Occurrences",
                href: "233"
            },
            {
                label: "Severity/Extent",
                href: "234"
            },
            {
                label: "Warning Time",
                href: "234"
            },
            {
                label: "Secondary Hazard",
                href: "235"
            },
            {
                label: "Exposure and Vulnerability",
                href: "235"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "A tsunami is caused by the displacement of water. This can be caused by a number of triggers, including earthquakes, volcanic eruptions, landslides, glacier calving and meteorite impacts. ",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "All of the coastal areas of Massachusetts are exposed to the threat of tsunamis; however, that probability is relatively low compared to the Pacific Coast of the U.S.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "The historical frequency of tsunami or run-up events on the East Coast of the U.S. is approximately 1 event every 39 years. A significant tsunami has never struck the Massachusetts coast.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Sea Level Rise",
                    src: seaLevelRise
                },
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                }
            ],
            entries: [
                {
                    title: "Isostatic Rebound",
                    description: "As ice melts across the world, the earth’s crust is expected to rise under the reduced weight. This will cause earthquakes and submarine landslides, potentially triggering tsunamis."
                },
                {
                    title: "Glacial Earthquakes",
                    description: "As glaciers collapse in a warming climate, the impact may trigger massive landslides. Research suggests that these events would generate far more powerful tsunamis than underwater earthquakes."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: Populations who live within a 1-mile buffer of the coast in the tsunami exposure zone. Vulnerable Populations: Populations who would have difficulty receiving tsunami warnings or evacuating, including populations over 65, the disabled, families with young children, car-free households, and communication-impaired individuals."
            },
            {
                title: "GOVERNMENT",
                description: "Because of the ambiguity surrounding potential tsunami impacts, a 1-mile buffer from the coast was used to simulate potential exposure. 694 state-owned buildings are located in this area, with the highest number in Suffolk County (173), followed by Essex (140) and Barnstable (139) Counties."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "Roads are the primary resource for evacuation before and during a tsunami event. Bridges, utilities, and power generation facilities would also be exposed. Widespread impacts could occur if salt water were to inundate drinking water supplies or overburden stormwater and wastewater systems. Fifty-three critical facilities in the tsunami hazard area were identified, with 12 in Suffolk County and 11 in Essex County."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "The inundation of typically dry areas from a tsunami can reshape the topography both by scouring existing sediment and by depositing sediment from other locations. In addition to these physical impacts, tsunamis can also uproot trees and other plants in its path, causing habitat loss in addition to direct mortality to animals in the area."
            },
            {
                title: "ECONOMY",
                description: "A tsunami’s negative impact on the economy is difficult to quantify. Losses would likely include general building stock damage, business interruption/closures, port closures, utility and transportation damage, and impacts on tourism and tax base to the Commonwealth."
            },
        ],
        sectorLink: "236"
    },
    coastalErosion: {
        type: "Coastal Erosion",
        description: "Shorelines naturally change seasonally, accreting slowly during summer when sediments are deposited by relatively low-energy waves (sediment gain) and eroding dramatically during winter when sediments are moved offshore by high-energy storm waves (sediment loss).  Storms, including hurricanes and nor’easters decrease sediment supplies, and sea-level rise contributes to these coastal hazards.",
        knowMoreLink: "216",
        hazardProfile: [
            {
                label: "Location",
                href: "220"
            },
            {
                label: "Previous Occurrences",
                href: "221"
            },
            {
                label: "Frequency of Occurrences",
                href: "222"
            },
            {
                label: "Severity/Extent",
                href: "223"
            },
            {
                label: "Warning Time",
                href: "224"
            },
            {
                label: "Secondary Hazard",
                href: "224"
            },
            {
                label: "Exposure and Vulnerability",
                href: "224"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Coastal shorelines change constantly in response to wind, waves, tides, sea level fluctuation, seasonal and climatic variations, human alteration, and other factors that influence the movement of sand and material within a shoreline system.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "A report by the Massachusetts Coastal Erosion Commission reported that the highest erosion rates occur in Eastham, Orleans, and Yarmouth.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Coastal erosion is measured as the rate of change of a shoreline over a specific period of time, measured in feet or meters per year. Although discrete events may exacerbate shoreline change, the frequency of erosion cannot be measured.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Sea Level Rise",
                    src: seaLevelRise
                },
            ],
            entries: [
                {
                    title: "Rising Wave Action",
                    description: "As the sea level rises, wave action moves higher onto the beach. The surf washes sand and dunes out to sea or makes the sand migrate parallel to the shoreline. As a rule-of-thumb, a sandy shoreline retreats landward about 100 feet for every 1-foot rise in sea level."
                },
                {
                    title: "Loss of Buffer Systems",
                    description: "Rising waves, tides, and currents erode beaches, dunes, and banks, resulting in landward retreat of these landforms and reducing the buffer they provide to existing development. More sediment is washed out to sea, rather than settling on the shore."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: Populations who reside in the coastal high hazard area. Vulnerable Populations: Waterfront residents whose properties are not sufficiently protected from the threat of coastal erosion."
            },
            {
                title: "GOVERNMENT",
                description: "There are relatively few state-owned properties immediately adjacent to the coastline. Many coastal infrastructure elements such as roads however, are likely to be severely impacted by coastal erosion."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "All structures adjacent to the coast, especially those located in high-wave energy areas or those atop coastal bluffs, are exposed to the coastal erosion hazard. Coastal erosion exposes coastal elements such as roads and bridges to additional impacts from other hazards. Shoreline management techniques to protect structures and roads include adapting existing buildings and infrastructure via elevating roads or relocating buildings; enhancing natural systems through beach nourishment, bioengineering, cobble berm, etc.; installing nearshore coastal engineered structures; or in certain situations, armoring the shoreline."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Coastal erosion is a natural process, but under increasing rates of sea level rise, coastal erosion has numerous direct and indirect impacts on the local environment, including direct loss of habitat (including coastal wetlands and salt marsh) and mortality for animals that are not able to relocate. Remaining animals may suffer from crowding, increased competition, or increased predation. Shoreline accretion can also change the shoreline and habitat."
            },
            {
                title: "ECONOMY",
                description: "The beaches, parks, and natural resources along the Massachusetts coast contribute greatly to the local economy, especially during the summer season where the population in coastal areas can more than double. Beach loss, if not mitigated, will likely result in significant economic impacts to these communities."
            },
        ],
        sectorLink: "225"
    },
    landslide: {
        type: "Landslide",
        description: "The term landslide includes a wide range of ground movements, such as rock falls, deep failure of slopes, and shallow debris flows. The most common types of landslides in Massachusetts include translational debris slides, rotational slides, and debris flows.  Historical landslide data for the Commonwealth suggests that most landslides are preceded by 2 or more months of higher than normal precipitation, followed by a single, high-intensity rainfall of several inches or more. This precipitation can cause slopes to become saturated.",
        knowMoreLink: "157",
        hazardProfile: [
            {
                label: "Location",
                href: "162"
            },
            {
                label: "Previous Occurrences",
                href: "162"
            },
            {
                label: "Frequency of Occurrences",
                href: "162"
            },
            {
                label: "Severity/Extent",
                href: "163"
            },
            {
                label: "Warning Time",
                href: "165"
            },
            {
                label: "Secondary Hazard",
                href: "165"
            },
            {
                label: "Exposure and Vulnerability",
                href: "166"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Most landslides in Massachusetts are caused by a combination of unfavorable geologic conditions, steep slopes, and/or excessive wetness in the subsurface.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "The highest prevalence of unstable slopes is found in area around Mount Greylock and the nearby portion of the Deerfield River, the US Highway 20 corridor near Chester, as well as the main branches of the Westfield River.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Notable landslides in Massachusetts occur approximately every other year. However, because many landslides are minor and occur unobserved in remote areas, the true number of landslide events is probably higher.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Precipitation",
                    src: precipitation
                },
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                }
            ],
            entries: [
                {
                    title: "Slope Saturation",
                    description: "Regional climate change models suggest that Massachusetts will likely experience more frequent and intense storms throughout the year. This change could result in more frequent soil saturation conditions, which are conducive to an increased frequency of landslides."
                },
                {
                    title: "Reduced Vegetation Extent",
                    description: "An increased frequency of drought events is likely to reduce the extent of vegetation throughout the Commonwealth. The loss of the soil stability provided by vegetation could also increase the probability of landslides wherever these events occur."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: Populations who reside or travel near steep slopes. Vulnerable Populations: People who rely on potentially impacted roads for vital transportation needs."
            },
            {
                title: "GOVERNMENT",
                description: "Six state-owned facilities, located at Natural Bridge State Forest, Joseph Allen Skinner State Park (2), Mount Sugarloaf Reservation (2), and the Wachusett Reservoir, are located within unstable slope areas."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "Landslides can cause direct losses to roads, buildings, and other elements of the built environment as well as indirect socio-economic losses related to road closures that interfere with travel or downed power lines. Landslides can impact agriculture and forestry as well as water infrastructure."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Landslides can affect many facets of the environment, including the landscape itself, water quality, and habitat health. Transported soil may harm aquatic habitats, and mass movement of sediment may result in stripping of forests and other vegetated systems."
            },
            {
                title: "ECONOMY",
                description: "Direct costs include the actual damage sustained by buildings, property, and infrastructure. Indirect costs from a large landslide event could include clean-up costs, business interruption, loss of tax revenues, reduced property values, and loss of productivity."
            },
        ],
        sectorLink: "166"
    },
    avgExtTemp: {
        type: "Average/Extreme Temperature",
        description: "Massachusetts has four seasons with several defining factors, and temperature is one of the most significant. As there is no universal definition, extreme temperatures can be defined as those that are far outside the normal ranges. The term is relative to the usual weather in the region based on climatic averages. Extreme heat for Massachusetts is generally defined as a prolonged period of excessively hot weather, which may be accompanied by high humidity. Extreme cold is also considered relative to the normal climatic lows in a region.",
        knowMoreLink: "241",
        hazardProfile: [
            {
                label: "Location",
                href: "246"
            },
            {
                label: "Previous Occurrences",
                href: "247"
            },
            {
                label: "Frequency of Occurrences",
                href: "248"
            },
            {
                label: "Severity/Extent",
                href: "250"
            },
            {
                label: "Warning Time",
                href: "257"
            },
            {
                label: "Secondary Hazard",
                href: "257"
            },
            {
                label: "Exposure and Vulnerability",
                href: "257"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Temperature variations occur due to a number of atmospheric phenomena. Notable heat for Massachusetts is defined as 3+ days above 90°F, while Wind Chill Advisories are issued if wind chill is forecast to dip below -15 ºF for at least 3 hours.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "Extreme temperature events occur more frequently and with greater severity in inland portions of the Commonwealth than in coastal areas.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Over the last two decades, an average of 1.5 extreme cold weather events, and an average of 2 extreme hot weather events have occurred in Massachusetts annually.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                }
            ],
            entries: [
                {
                    title: "Higher Extreme Temperatures",
                    description: "The average summer across the Massachusetts during the years between 1971 and 2000 included 4 days over 90°F (i.e. extreme heat days). Climate scientists project that by mid-century, the state could have a climate that resembles that of southern states today, with an additional 10-28 days over 90°F during summer. By the end of the century, extreme heat could occur between 13-56 days during summer."
                },
                {
                    title: "Higher Average Temeratures",
                    description: "Compared to an annual 1971-2000 average temperature baseline of 47.6°F, annual average temperatures in Massachusetts are projected to increase by 3.8 to 10.8 degrees (likely range) by the end of the 21st century; slightly higher in western Massachusetts."
                }
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: State-wide exposure; populations in urban areas may face greater risk. Vulnerable Populations: Populations over age 65; infants and young children; Individuals who are physically ill; low-income individuals who cannot afford proper heating and cooling; populations whose jobs involve exposure to extreme temperatures."
            },
            {
                title: "GOVERNMENT",
                description: "Extreme heat generally does not impact buildings, although losses may occur as the result of overheated HVAC systems. Extreme cold temperature events can damage buildings through freezing/bursting pipes and freeze/thaw cycles."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "Extreme heat events can sometimes cause short periods of utility failure due to increased usage from air conditioners and other appliances. Heavy snowfall and ice storms, associated with extreme cold temperature events, can also cause power interruption. Periods of both hot and cold weather can stress energy infrastructure. Above average, below average, and extreme temperatures are likely to impact crops ─ such as apples, cranberries, and maple syrup ─ that rely on specific temperature regimes."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Because the species that exist in a given area are designed to survive within a specific temperature range, extreme temperatures events can place significant stress both on individual species and ecosystems. Warming temperature across the globe force species poleward, or upward in elevation, while species that cannot relocate fast enough or find suitable habitat face local extinction."
            },
            {
                title: "ECONOMY",
                description: "Extreme temperature events can have significant economic impacts, including loss of business function and damage/loss of inventory. The agricultural industry is the industry most at risk in terms of economic impact and damage due to extreme temperature and drought events."
            },
        ],
        sectorLink: "257"
    },
    hurricane: {
        type: "Hurricanes/Tropical Storms",
        description: "Hurricanes begin as tropical storms over the warm moist waters of the Atlantic Ocean, off the coast of West Africa, and over the Pacific Ocean near the equator. When water temperatures are at least 80°F, hurricanes can grow and thrive, generating enormous amounts of energy, which is released in the form of numerous thunderstorms, flooding, rainfall, and very damaging winds. The damaging winds help create a dangerous storm surge in which the water rises above the normal astronomical tide.",
        knowMoreLink: "302",
        hazardProfile: [
            {
                label: "Location",
                href: "305"
            },
            {
                label: "Previous Occurrences",
                href: "306"
            },
            {
                label: "Frequency of Occurrences",
                href: "306"
            },
            {
                label: "Severity/Extent",
                href: "306"
            },
            {
                label: "Warning Time",
                href: "308"
            },
            {
                label: "Secondary Hazard",
                href: "309"
            },
            {
                label: "Exposure and Vulnerability",
                href: "309"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Hurricanes begin as tropical storms near the equator. As the moisture evaporates, it rises until enormous amounts of heated, moist air are twisted high in the atmosphere.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "The entire Commonwealth is vulnerable to hurricanes and tropical storms, dependent on the storm’s track. The coastal areas are more susceptible to damage due to the combination of both high winds and tidal surge, as depicted on the SLOSH maps.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "The average number of hurricane or tropical storm events is 1 every 2 years. Storms severe enough to receive FEMA disaster declarations, however, only occur every 9 years on average.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Extreme Weather",
                    src: extremeWeather
                },
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                },
                {
                    label: "Precipitation",
                    src: precipitation
                }
            ],
            entries: [
                {
                    title: "Larger, Stronger Storms",
                    description: "As warmer oceans provide more energy for storms, both past events and models of future conditions suggest that the intensity of tropical storms and hurricanes will increase."
                },
                {
                    title: "Increased Rainfall Rates",
                    description: "Warmer air can hold more water vapor, which means the rate of rainfall will increase. One study found that hurricane rainfall rates were projected to rise 7 percent for every degree Celsius increase in tropical sea surface temperature."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: State-wide exposure.  Vulnerable Populations: Economically disadvantaged population, which is more likely to evaluate the economic impact of evacuating; individuals over age 65, who are more likely to face physical challenges or to require medical care while evacuating; individuals with low English language fluency who may not receive or understand warnings to evacuate."
            },
            {
                title: "GOVERNMENT",
                description: "According to the DCAMM inventory, a total of 1,030 government buildings are located within the Category 1-4 SLOSH zones. The highest concentrations of these facilities are in Suffolk County (445), Bristol County (132) and Essex County (132)."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "A total of 74 critical facilities, including military installations, police stations, fire stations, college facilities and social service providers, are located within the Category 1-4 SLOSH zones. The majority of these facilities are located in Suffolk County (34) and Essex County (16). Hurricanes and tropical storms can result in power outages and road closures that impact emergency response. Heavy rains can lead to contamination of well water, septic system failure, and overburden stormwater systems."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "As the storm is occurring, flooding, or wind/water-borne detritus can cause mortality to animals if it strikes them or transports them to a non-suitable habitat. In the longer term, environmental impacts can occur as a result of riverbed scour, fallen trees, storm surge, or contamination of ecosystems by transported pollutants."
            },
            {
                title: "ECONOMY",
                description: "Hurricanes are among the most costly natural disasters in terms of damage inflicted and recovery costs required. Using general building stock as a proxy for overall economic exposure, Suffolk and Middlesex Counties are the most at-risk to economic damage from the hurricane hazard. This damage will likely include loss of building function, relocation costs, wage loss, road repair and rental loss."
            }
        ],
        sectorLink: "309"
    },
    earthquake: {
        type: "Earthquakes",
        description: "Earthquakes often occur along fault boundaries. As a result, areas that lie along fault boundaries—such as California, Alaska, and Japan—experience earthquakes more often than areas located within the interior portions of these plates. New England, on the other hand, experiences intraplate earthquakes because it is located deep within the interior of the North American plate. Scientists are still exploring the cause of intraplate earthquakes, and many believe these events occur along geological features that were created during ancient times and are now weaker than the surrounding areas.",
        knowMoreLink: "372",
        hazardProfile: [
            {
                label: "Location",
                href: "375"
            },
            {
                label: "Previous Occurrences",
                href: "376"
            },
            {
                label: "Frequency of Occurrences",
                href: "376"
            },
            {
                label: "Severity/Extent",
                href: "376"
            },
            {
                label: "Warning Time",
                href: "378"
            },
            {
                label: "Secondary Hazard",
                href: "379"
            },
            {
                label: "Exposure and Vulnerability",
                href: "379"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "An earthquake is the vibration of the earth’s surface that follows a release of energy in the earth’s crust.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "Earthquakes can occur throughout Massachusetts. Large earthquakes in Canada, which is more seismically active than New England, can affect tall buildings in Boston and elsewhere in eastern Massachusetts.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Earthquakes cannot be predicted and may occur at any time. Research has found that the probability of a magnitude 5.0 or greater earthquake centered somewhere in New England in a 10-year period is about 10%-15%.",
            }
        ],
        effects: {
            images: [],
            entries: []
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: State-wide exposure.  Vulnerable Populations: Socially vulnerable populations, due to factors including their physical and financial ability to react or respond during a hazard event; the location and construction quality of housing; and the ability to be self-sustainable after an event due to limited ability to stockpile supplies."
            },
            {
                title: "GOVERNMENT",
                description: "Due to the widespread effect of an earthquake generally there is no way to determine which state-owned government facilities will be impacted. By using Hazus data, it was determined that there would be approximately $112,440,000 in building-related economic loss for the 100-year earthquake, reaching a total of $31,114,950,000 by the 2500-year earthquake."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "In addition to direct impacts to roads, bridges, agriculture infrastructure, public health and safety facilities, and water infrastructure networks, earthquakes also present a risk associated with hazardous materials releases, which have the potential to be released at a production or storage facility or as a result of pipeline damage. These events could cause widespread interruption of services, as well as air and water contamination."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "If strong shaking occurs in a forest, trees may fall – resulting not only in environmental impacts but also potential economic impacts to any industries relying on that forest. If shaking occurs in a mountainous environment, cliffs may crumble and caves may collapse. Disrupting the physical foundation of the ecosystem can modify the species balance in that ecosystem and leave the area more vulnerable to the spread of invasive species."
            },
            {
                title: "ECONOMY",
                description: "Earthquake losses can include structural and non-structural damage to buildings (which could include damage to architectural components like ceilings and lights, or power systems), loss of business function, damage to inventory, relocation costs, wage loss, and rental loss due to the repair/replacement of buildings."
            },
        ],
        sectorLink: "379"
    },
    wildfires: {
        type: "Wildfires",
        description: "A wildfire can be defined as any non-structure fire that occurs in vegetative wildland that contains grass, shrub, leaf litter, and forested tree fuels. The wildfire season in Massachusetts usually begins in late March and typically culminates in early June, corresponding with the driest live fuel moisture periods of the year. April is historically the month in which wildfire danger is the highest. Drought, snowpack level, and local weather conditions can impact the length of the fire season.",
        knowMoreLink: "269",
        hazardProfile: [
            {
                label: "Location",
                href: "273"
            },
            {
                label: "Previous Occurrences",
                href: "276"
            },
            {
                label: "Frequency of Occurrences",
                href: "276"
            },
            {
                label: "Severity/Extent",
                href: "276"
            },
            {
                label: "Warning Time",
                href: "277"
            },
            {
                label: "Secondary Hazard",
                href: "278"
            },
            {
                label: "Exposure and Vulnerability",
                href: "278"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Wildfires in Massachusetts are caused by natural events, human activity, or prescribed fire. Wildfires often begin unnoticed but spread quickly, igniting brush, trees, and potentially homes.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "The ecosystems most susceptible to fire are pitch pine, scrub oak, and oak forests. According to a U.S. Forest Service study, Barnstable and Plymouth Counties are the most fire-prone due to their vegetation, sandy soil, and the presence of a drying wind.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Based on the frequency of past occurrences, the Commonwealth is likely to experience at least one wildfire with noteworthy damages each year",
            }
        ],
        effects: {
            images: [
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                }
            ],
            entries: [
                {
                    title: "Prolonged Drought",
                    description: "Seasonal drought risk is projected to increase during summer and fall in the Northeast as higher temperatures lead to greater evaporation and earlier winter and spring snowmelt, coupled with more variable precipitation patterns. Drought and warmer temperatures may also heighten the risk of wildfire, by causing forested areas to dry out and become more flammable."
                },
                {
                    title: "More Frequent Lighting",
                    description: "Research has found that the frequency of lightning strikes – an occasional cause of wildfires – could increase by approximately 12 percent for every degree Celsius of warming."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: Populations whose homes are located in wildfire hazard areas. Vulnerable Populations: Populations who are sensitive to smoke and poor air quality, including children, the elderly, and those with respiratory and cardiovascular diseases."
            },
            {
                title: "GOVERNMENT",
                description: "According to the DCAMM facility inventory, 1,143 state-owned buildings are located in identified wildfire hazard areas. The highest concentration of these facilities occurs in Middlesex (185) and Worcester (157) Counties."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "Fires can create conditions that block or prevent access and can isolate residents and emergency service providers. Power lines are the most at risk to wildfire because most poles are made of wood and susceptible to burning. In addition to potential direct losses to water infrastructure, wildfires may result in significant withdrawal of water supplies. They can also damage infrastructure elements such as power and communication lines. The DCAMM facility inventory revealed 176 critical facilities located in wildfire hazard areas, primarily in Worcester, Hampshire and Plymouth Counties."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Fire serves important ecological purposes; however, it can also cause environmental impacts. In addition to direct mortality, wildfires and the ash they generate can distort the flow of nutrients through an ecosystem, reducing the biodiversity that can be supported."
            },
            {
                title: "ECONOMY",
                description: "Wildfire events can have major economic impacts on a community, both from the initial loss of structures and the subsequent loss of revenue from destroyed business and decrease in tourism. Additionally, wildfires can require thousands of taxpayer dollars in fire response efforts."
            },
        ],
        sectorLink: "278"
    },
    tornadoes: {
        type: "Tornadoes",
        description: "A tornado is a narrow, violently rotating column of air that extends from the base of a cumulonimbus cloud to the ground. The observable aspect of a tornado is the rotating column of water droplets, with dust and debris caught in the column. Tornadoes are the most violent of all atmospheric storms. Tornadoes can form from individual cells within severe thunderstorm squall lines. They can also form from an isolated supercell thunderstorm. They can be spawned by tropical cyclones or the remnants thereof, and weak tornadoes can even occur from little more than a rain shower if air is converging and spinning upward.",
        knowMoreLink: "340",
        hazardProfile: [
            {
                label: "Location",
                href: "342"
            },
            {
                label: "Previous Occurrences",
                href: "344"
            },
            {
                label: "Frequency of Occurrences",
                href: "344"
            },
            {
                label: "Severity/Extent",
                href: "344"
            },
            {
                label: "Warning Time",
                href: "346"
            },
            {
                label: "Secondary Hazard",
                href: "346"
            },
            {
                label: "Exposure and Vulnerability",
                href: "346"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Tornadoes require a number of elements in order to form: strong atmospheric winds, clockwise turning of the winds with height, increasing wind speed in the low atmosphere, a gradient of cooler, drier air at elevation and a forcing mechanism.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "Historically, the most tornado-prone portions of Massachusetts are the central counties (Franklin, Hampshire, Hampden, and Worcester) as well as portions of Middlesex and Norfolk Counties.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Massachusetts experiences an average of 1.7 tornadoes per year.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Extreme Weather",
                    src: extremeWeather
                }
            ],
            entries: [
                {
                    title: "Increase in Frequency and Intensity of Severe Thunderstorms",
                    description: "Future environmental changes may result in an increase in the frequency and intensity of severe thunderstorms, which can include tornadoes. However, the resolution of current climate models is too coarse to accurately simulate tornado formation and the confidence on model details associated with this potential increase is low."
                }
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: State-wide exposure; population in area having higher-than-average tornado frequency are at greater risk.  Vulnerable Populations: Populations who may have difficulty evacuating, including car-free households, individuals over age 65, and households with young children; individuals with limited Internet or phone access or low English language fluency may not be aware of impending warning; people who reside in older or less stable housing. "
            },
            {
                title: "GOVERNMENT",
                description: "Using a tornado density approximation, as well as the DCAMM facility inventory, 4,511 state-owned facilities are located within tornado hazard areas. This method is conservative, and it is unlikely that even a fraction of these facilities will experience tornado impacts. The highest number of exposed facilities is in Middlesex County (663), followed by Worcester County (541)."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "A total of 224 critical facilities were identified within tornado hazard areas, with the highest numbers in Middlesex (45) and Worcester (37) Counties. Tornadoes down power lines and damage transmission infrastructure. Shelters and other public safety facilities that provide services for people whose homes are damaged may be overburdened. Hail, wind, debris, and flash flooding associated with tornadoes can damage water infrastructure."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Direct impacts may occur to flora and fauna small enough to be transported by the tornado. Even if the winds are not sufficient to transport trees and other large plants, they may still uproot them. Material transported by tornadoes can also cause environmental havoc in surrounding areas, particularly if contaminating materials are introduced into the atmosphere or local water supplies."
            },
            {
                title: "ECONOMY",
                description: "Tornado events are typically localized; however, in those areas, economic impacts can be significant. Types of impacts may include loss of business function, water supply system damage, damage to inventory, relocation costs, wage loss, and rental loss due to the repair/replacement of buildings. Recovery and clean-up costs can also be costly."
            },
        ],
        sectorLink: "346"
    },
    coastalFlooding: {
        type: "Coastal Flooding",
        description: "Coastal flooding generally occurs along the coasts of oceans, bays, estuaries, coastal rivers, and large saltwater inlets. Coastal floods are defined by the submersion of land along the ocean coast and other inland waters caused by the movement of seawater over and above normal present-day tide action. Coastal flooding is often characterized as minor or major based on the magnitude (elevation), duration, and frequency of the flooding that is experienced. Sea level rise driven by climate change will exacerbate existing coastal flooding and coastal hazards.",
        knowMoreLink: "174",
        hazardProfile: [
            {
                label: "Location",
                href: "176"
            },
            {
                label: "Previous Occurrences",
                href: "180"
            },
            {
                label: "Frequency of Occurrences",
                href: "182"
            },
            {
                label: "Severity/Extent",
                href: "184"
            },
            {
                label: "Warning Time",
                href: "185"
            },
            {
                label: "Secondary Hazard",
                href: "198"
            },
            {
                label: "Exposure and Vulnerability",
                href: "198"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "There are two primary types of coastal flooding: routine tidal flooding and flooding caused by storm events. The former is caused by regular tidal cycles, while the latter can result from precipitation, storm surge, or a combination of the two.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "The entire Massachusetts coastline is exposed to this hazard. Historically, the highest concentration of coastal flooding events has occurred in Eastern Plymouth County.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Coastal flooding occurs frequently along the Massachusetts coast. According to the National Climatic Data Center, the Commonwealth has experienced an average of 6 flooding events per year over the past decade.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Sea Level Rise",
                    src: seaLevelRise
                },
                {
                    label: "Extreme Weather",
                    src: extremeWeather
                }
            ],
            entries: [
                {
                    title: "Increase in Frequency and Severity of Coastal Flooding",
                    description: "Sea level rise will increase the frequency and severity of both routine tidal flooding and storm-related flooding. Downscaled climate projections suggest that Boston may experience between 4.0 and 10.2 feet of sea level rise by 2100."
                },
                {
                    title: "Storm Surge",
                    description: "Climate change is likely to increase the frequency of severe storm events, including hurricanes and nor’easters. As a result, storm surge sufficient to cause coastal flooding is likely to occur more often."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: Populations in coastal communities, especially those in coastal flood hazard areas. Vulnerable Populations: Populations who lack reliable access to emergency information, such as populations with low English language fluency or low Internet service; populations who face challenges in evacuating, such as people over age 65, those with young children, or households without a vehicle; populations who will have difficulty recovering from displacement, including renters, the elderly, people with disabilities, and low income families."
            },
            {
                title: "GOVERNMENT",
                description: "According to the DCAMM inventory, a total of 201 state government buildings are located within the FEMA-defined coastal flood zone. The highest concentrations of these facilities are in Suffolk County (48) and Bristol County (42)."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "A total of 13 critical facilities, including police stations, fire stations, and state-owned college facilities, are located within the coastal flood zone. The majority of these facilities are located in Suffolk County (6) and Essex County (3). As sea level rise progresses, roadways, subway and highway tunnels, Logan International Airport, and other critical elements in our transportation network could be inundated. Water infrastructure systems may eventually need relocation."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Coastal flooding is a natural element of the coastal environment. However, both increased storm-related flooding and sea level rise represent threats to coastal natural resources, as many coastal habitats are dependent on specific inundation frequencies. These habitats, and the species that rely on them, will be threatened by sea level rise."
            },
            {
                title: "ECONOMY",
                description: "Due to the concentration of development in the coastal zone, economic exposure from this hazard is high. Using general building stock as a proxy for overall economic exposure, Suffolk and Barnstable Counties are the most at-risk to economic damage from the coastal flooding hazard. This damage will likely include both direct impacts, such as damage to homes and government buildings, as well as lost tourism revenue and impacts to local businesses."
            },
        ],
        sectorLink: "202"
    },
    winterStorm: {
        type: "Severe Winter Storm / Nor'easter",
        description: "Severe winter storms include ice storms, nor’easters, heavy snow, blowing snow, and other extreme forms of winter precipitation. A blizzard is a winter snowstorm with sustained or frequent wind gusts to 35 mph or more, accompanied by falling or blowing snow that reduces visibility to or below a quarter of a mile. These conditions must be the predominant condition over a 3-hour period. Extremely cold temperatures are often associated with blizzard conditions, but are not a formal part of the definition. A nor’easter is a storm that gets its name from its continuously strong northeasterly winds blowing in from the ocean ahead of the storm and over the coastal areas. A nor’easter is characterized by a large counter-clockwise wind circulation around a low-pressure center that often results in heavy snow, high winds, and rain.",
        knowMoreLink: "321",
        hazardProfile: [
            {
                label: "Location",
                href: "324"
            },
            {
                label: "Previous Occurrences",
                href: "324"
            },
            {
                label: "Frequency of Occurrences",
                href: "327"
            },
            {
                label: "Severity/Extent",
                href: "327"
            },
            {
                label: "Warning Time",
                href: "329"
            },
            {
                label: "Secondary Hazard",
                href: "330"
            },
            {
                label: "Exposure and Vulnerability",
                href: "330"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Snow formation requires temperatures to be below freezing in most of the atmosphere from the surface up to cloud level. Ice storms occur when liquid rain freezes on contact with cold objects, creating ice build-up. Nor’easters are macro-scale cyclones that begin as strong areas of low pressure in the Gulf of Mexico or off the east coast in the Atlantic Ocean.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "Higher snow accumulations are prevalent at higher elevations in Western and Central Massachusetts, and along the coast where snowfall can be enhanced by additional ocean moisture. East-facing coastal areas, including Salisbury Beach, Revere, Nahant, Scituate, and Marshfield, as well as parts of the Cape and Nantucket, experience nor’easters most strongly.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Although there is significant interannual variability in the frequency and severity of winter storms, a notable winter storm generally occurs at least once every winter. Nor’easters generally occur on at least an annual basis, with some years bringing up to four nor’easter events. This is currently the most frequently occurring natural hazard in the state.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Extreme Weather",
                    src: extremeWeather
                },
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                }
            ],
            entries: [
                {
                    title: "Increased Snowfall",
                    description: "Increased sea surface temperature in the Atlantic Ocean will cause air moving north over the ocean to hold more moisture. As a result, when these fronts meet cold air systems moving from the north, an even greater amount of snow than normal can be anticipated to fall on Massachusetts."
                },
                {
                    title: "Changing Circulation Patterns and Warming Oceans",
                    description: "Research has found that increasing water temperatures and reduced sea ice extent in the Arctic are producing atmospheric circulation patterns that favor the development of winter storms in the eastern U.S. Global warming is increasing the severity of winter storms because warming ocean water allows additional moisture to flow into the storm, which fuels the storm to greater intensity."
                },
                {
                    title: "Increase in Frequency and Intensity",
                    description: "There is evidence suggesting that nor’easters along the Atlantic coast are increasing in frequency and intensity. Future nor’easters may become more concentrated in the coldest winter months when atmospheric temperatures are still low enough to result in snowfall rather than rain."
                }
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: State-wide exposure.  Vulnerable Populations: Elderly populations, who are susceptible due to their increased risk of injury and death from falls, overexertion, or hypothermia related to clearing snow or power failures; residents with low incomes who may lack access to housing or housing with sufficient insulation or heating supply; individuals who have difficulty evacuating for economic or physical reasons."
            },
            {
                title: "GOVERNMENT",
                description: "Using data from the Northeast States Emergency Consortium, 710 state- owned facilities are located in areas that typically experience more than 2.5 days with 5 or more inches of snow per year. Nearly half of these facilities are located in Worcester County. SLOSH Zones show that Suffolk, Bristol, and Essex Counties have highest number of government facilities exposed to nor’easters."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "All elements of the built environment in the Commonwealth are exposed to severe winter weather. According to the DCAMM facility inventory, 19 critical facilities are located in areas that typically experience more than 2.5 days with 5 or more inches of snow per year. SLOSH Zones show that Suffolk and Essex Counties have highest number of critical facilities exposed to nor’easters. Severe winter can result in downed power lines, extended power failures, and road blockages. It can also overwhelm the capacity of public safety providers."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Winter storms are a natural part of the Massachusetts climate, and native ecosystems and species are well-adapted to these events. However, more extreme winter storms can results in direct mortality, habitat modification, and flooding when snow and ice melt."
            },
            {
                title: "ECONOMY",
                description: "Potential impacts from winter storms and nor’easters include loss of utilities, interruption of transportation corridors, loss of business function and loss of income during business closures. The cost of snow and ice removal and repair of roads from the freeze/thaw process can also strain local financial resources."
            },
        ],
        sectorLink: "330"
    },
    otherSevereWeather: {
        type: "Other Severe Weather",
        description: "Several frequent natural hazards in Massachusetts—particularly strong winds and extreme precipitation events—occur outside of notable storm events. The SHMCAP discusses the nature and impacts of these hazards, as well as ways in which they are likely to respond to climate change.",
        knowMoreLink: "351",
        hazardProfile: [
            {
                label: "Location",
                href: "353"
            },
            {
                label: "Previous Occurrences",
                href: "354"
            },
            {
                label: "Frequency of Occurrences",
                href: "356"
            },
            {
                label: "Severity/Extent",
                href: "362"
            },
            {
                label: "Warning Time",
                href: "365"
            },
            {
                label: "Secondary Hazard",
                href: "365"
            },
            {
                label: "Exposure and Vulnerability",
                href: "365"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Three components are required for a thunderstorm to form: moisture, rising unstable air, and a lifting mechanism. Wind is caused by differences in atmospheric pressure, as well as the Coriolis Effect.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "The entire Commonwealth experiences thunderstorms. While the entire Commonwealth is also at risk to strong winds, the coastal zone is most frequently impacted by high-wind events",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Massachusetts experiences between 20 and 30 thunderstorm days each year. High winds occur more frequently, with an average annual frequency of 43.5 high wind events.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Extreme Weather",
                    src: extremeWeather
                },
                {
                    label: "Precipitation",
                    src: precipitation
                }
            ],
            entries: [
                {
                    title: "More Intense and Frequent Thunderstorms and Downpours",
                    description: "The Northeast has already experienced a larger increase in the intensity of rainfall events than any other region in the United States in the last fifty years, and this trend is expected to continue."
                }
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: State-wide exposure.  Vulnerable Populations: Populations over age 65, low income populations, populations with life-threatening illness, residents living in areas that are isolated from major roads, populations on life-support who are dependent on electricity."
            },
            {
                title: "GOVERNMENT",
                description: "According to the DCAMM facility data, 4,787 state-owned facilities are located in areas with winds greater than 90 miles per hour. The highest concentrations of these buildings occur in Worcester and Middlesex Counties. Thunderstorms occur regularly throughout the Commonwealth, and GIS analysis of exposure to this hazard was not conducted."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "All elements of the built environment are exposed to severe weather events such as high winds and thunderstorms. The highest number of critical facilities exposed to high winds is in Middlesex (43) and Worcester (36) Counties. Severe windstorms causing downed trees can create serious impacts on power and above-ground communication lines. Hail, wind, and flash flooding associated with thunderstorms and high winds can cause damage to water infrastructure."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Environmental impacts of precipitation events often include soil erosion, the growth of excess fungus or bacteria and direct impacts to wildlife. High winds can defoliate forest canopies and cause structural changes within an ecosystem that can destabilize food webs."
            },
            {
                title: "ECONOMY",
                description: "In addition to direct building losses, economic damage from severe weather events can include loss of business function, water supply system damage, damage to inventory, relocation costs, wage loss, and rental loss due to the repair/replacement of buildings."
            },
        ],
        sectorLink: "365"
    },
    invasiveSpecies: {
        type: "Invasive Species",
        description: "Invasive species are defined as non-native species that cause or are likely to cause harm to ecosystems, economies, and/or public health. The focus of the SHMCAP is on invasive terrestrial plants, as this is the most studied and managed typed of invasive; information for invasive aquatic flora and fauna (including marine species) is also provided when relevant. These species have biological traits that provide them with competitive advantages over native species, particularly because in a new habitat they are not restricted by the biological controls of their native habitat. As a result, these invasive species can monopolize natural communities, displacing many native species and causing widespread economic and environmental damage.",
        knowMoreLink: "286",
        hazardProfile: [
            {
                label: "Location",
                href: "289"
            },
            {
                label: "Previous Occurrences",
                href: "289"
            },
            {
                label: "Frequency of Occurrences",
                href: "296"
            },
            {
                label: "Severity/Extent",
                href: "296"
            },
            {
                label: "Warning Time",
                href: "298"
            },
            {
                label: "Secondary Hazard",
                href: "298"
            },
            {
                label: "Exposure and Vulnerability",
                href: "298"
            },
        ],
        details: [
            {
                title: "CAUSE",
                description: "Invasive species are intentionally or non-intentionally introduced into local ecosystems.",
            },
            {
                title: "MOST AT-RISK LOCATIONS",
                description: "Invasive species represent a threat to native or minimally managed ecosystems throughout Massachusetts.",
            },
            {
                title: "HISTORIC FREQUENCY",
                description: "Increased rates of global trade and travel have created new pathways for the dispersion of exotic species, increasing the frequency with which these species are introduced.",
            }
        ],
        effects: {
            images: [
                {
                    label: "Precipitation",
                    src: precipitation
                },
                {
                    label: "Rising Temperatures",
                    src: risingTemperatures
                }
            ],
            entries: [
                {
                    title: "Warming Climate",
                    description: "A warming climate may place stress on colder-weather species, while allowing non-native species accustomed to warmer climates to spread northward."
                },
                {
                    title: "Ecosystem Stress",
                    description: "Changes in precipitation and temperature combine to create new stresses for Massachusetts’ unique ecosystems. For example, intense rainfall in urbanized areas can cause pollutants on roads and parking lots to get washed into nearby rivers and lakes, reducing habitat quality. As rainfall and snowfall patterns change, certain habitats and species that have specific physiological requirements may be affected. The stresses experienced by native ecosystems as a result of these changes may increase the chances of a successful invasion of non-native species."
                },
            ]
        },
        sectors: [
            {
                title: "POPULATIONS",
                description: "General At-Risk Population: State-wide exposure.  Vulnerable Populations: Populations who depend on the Commonwealth’s existing ecosystems for their economic success."
            },
            {
                title: "GOVERNMENT",
                description: "State-managed water bodies and reservoirs could be exposed to the zebra mussel if knowingly or unknowingly introduced from other areas. This prolific invasive species can clog water infrastructure and cause extensive ecological, economic, and social impacts. Invasive species also impacting state wildlife management areas."
            },
            {
                title: "BUILT ENVIRONMENT",
                description: "As described above, water bodies such as reservoirs could be exposed to the zebra mussel if it is introduced. Invasive species can pose a threat along roadways by impeding sight lines if left unchecked. More pest pressure from insects, diseases, and weeds may harm crops and cause farms to increase pesticide use. Species like zebra mussels can damage aquatic infrastructure and vessels. Invasive species may cause impacts to water quality, which would have implications for the drinking water supplies and the cost of treatment."
            },
            {
                title: "NATURAL RESOURCES & ENVIRONMENT",
                description: "Invasive species present a significant threat to the environment and natural resources present in the Commonwealth. Research has found that competition or predation by alien species is the second most significant threat to biodiversity, only surpassed by direct habitat destruction or degradation."
            },
            {
                title: "ECONOMY",
                description: "Invasive species are widely considered to be one of the most costly natural hazards in the United States, as invasive control efforts can be quite extensive and these species can damage crops, recreational amenities, and public goods such as water quality."
            },
        ],
        sectorLink: "299"
    }
};