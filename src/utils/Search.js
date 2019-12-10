import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import elasticlunr from 'elasticlunr';

const Search = () => {
    const index = elasticlunr(function () {
        this.addField('page');
        this.addField('title');
        this.addField('body');
        this.addField('link');
        this.setRef('id');
    });
    const index1 = {
        "id": 1,
        "page": "Home",
        "link": "/",
        "title": "A First-of-its-Kind Integrated State Plan",
        "body": "The 2018 State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) expands upon the previous planning efforts of the Commonwealth’s 2013 State Hazard Mitigation Plan and the 2011 Massachusetts Climate Change Adaptation Report. It accounts for projected changes in precipitation, temperature, sea-level rise, and extreme weather events to position the Commonwealth to effectively reduce the risks associated with natural hazards and the effects of climate change."
    };
    const index2 = {
        "id": 2,
        "page": "Home",
        "link": "/",
        "title": "SHMCAP Mission Statement",
        "body": "Reduce the statewide loss of life, and protect natural resources, property, infrastructure, public health, and the economy from natural hazards and climate change impacts through the development of a comprehensive and integrated hazard mitigation and climate adaptation program."
    };
    const index3 = {
        "id": 3,
        "page": "Home",
        "link": "/",
        "title": "The SHMCAP",
        "body": "Acknowledges that climate change is already worsening natural hazards and extreme weather events and integrates information and planning elements for 14 natural hazards that affect the Commonwealth. Incorporates the best scientific data and projections available to assess risk and vulnerability associated with natural hazards and a changing climate for five key sectors - populations, government, built environment, natural resources and environment, and economy.  Evaluates the Commonwealth's existing capabilities to implement agency-specific and statewide hazard mitigation and climate adaptation activities to reduce risk and increase resilience.  Establishes a strategy for implementation and continued evolution of the plan to incorporate new information and data as they become available as well as engage relevant stakeholders."
    };   
    const hazards1 = {
        "id": 4,
        "page": "Climate Change is Intensifying Natural Hazards",
        "link": "/hazards",
        "title": "Climate Change is Intensifying Natural Hazards",
        "body": "Climate change is already exacerbating natural hazards and extreme weather events, as well as leading to new impacts that will affect the Commonwealth. The SHMCAP integrates information and planning elements for 14 natural hazards that could affect the Commonwealth of Massachusetts with the following four climate changes: changes in precipitation, sea level rise, rising temperatures, and extreme weather."
    };
    const hazards2 = {
        "id": 5,
        "page": "Climate Change is Intensifying Natural Hazards",
        "link": "/hazards#precipitation",
        "title": "Changes in Precipitation",
        "body": "Changes in the amount, frequency, and timing of precipitation - including both rainfall and snowfall - are occurring across the globe as temperatures rise and other climate patterns shift in response. Flash flooding, urban flooding, drainage system impacts (natural and human-made). Annual precipitation increase up to 16% (+7.3 inches). Days with rainfall accumulation 1+ inch: Increase up to 57% (+4 days)"
    }; 
    const hazards3 = {
        "id": 6,
        "page": "Climate Change is Intensifying Natural Hazards",
        "link": "/hazards#seaLevelRise",
        "title": "Sea Level Rise",
        "body": "Climate change will drive rising sea levels, and rising seas will have wide-ranging impacts on communities, natural resources, and infrastructure along the Commonwealth's 1,519 tidal shoreline miles. Increase in tidal and coastal floods, storm surge, coastal erosion, marsh migration, inundation of coastal and marine ecosystems, loss of subsidence wetlands. Sea level: Increase by 4.0 to 10.5 feet along the Massachusetts coast."
    };
    const hazards4 = {
        "id": 7,
        "page": "Climate Change is Intensifying Natural Hazards",
        "link": "/hazards#risingTemperatures",
        "title": "Rising Temperatures",
        "body": "Average global temperatures have risen steadily in the last 50 years, and scientists warn that the trend will continue unless greenhouse gas emissions are significantly reduced. The 9 warmest years on record all occurred in the last 20 years (2017, 2016, 2015, 2014, 2013, 2010, 2009, 2005, and 1998) according to the U.S. National Oceanographic and Atmospheric Administration (NOAA). Shifting seasons (longer summer, early spring, including earlier timing of spring peak flow), increase in length of growing season, increase in invasive species, ecosystem stress, energy brownouts from higher energy demands, more intense heat waves, public health impacts from high heat exposure and poor outdoor air quality, drying of streams and wetlands, eutrophication of lakes and ponds. Average global annual temperature increase up to 23% (10.8 degrees Fahrenheit). Days/years with daily minimum temperature below freezing: Decrease up to 42% (-62 days). Winter temperatures: Increase at a greater rate than spring, summer, or fall. Long-term Average global minimum winter temperature: Increase up to 66% (+11.4 degrees Fahrenheit). Days/year with daily maximum temperature over 90 degrees Fahrenheit: Increase by up to 1,280% (+64 days). Growing degree days: Increase by 23% to 52%"
    };
    const hazards5 = {
        "id": 8,
        "page": "Climate Change is Intensifying Natural Hazards",
        "link": "/hazards#extremeWeather",
        "title": "Extreme Weather",
        "body": "Climate change is expected to increase extreme weather events across the globe, as well as right here in Massachusetts. There is strong evidence that storms - from heavy downpours and blizzards to tropical cyclones and hurricanes - are becoming more intense and damaging, and can lead to devastating impacts for residents across the state. Increase in frequency and intensity of extreme weather events, resulting in greater damage to natural resources, property, and infrastructure, as well as increased potential for loss of life. Frequency and magnitude: Increase"
    };
    const risks1 = {
        "id": 9,
        "page": "Risks and Vulnerabilities the Commonwealth Faces",
        "link": "/risks",
        "title": "Risks and Vulnerabilities the Commonwealth Faces",
        "body": "Climate change and the anticipated exacerbation of natural hazards will affect residents, government, local communities, infrastructure, natural resources, and the private sector. The degree of exposure and consequences of these changes will vary across the Commonwealth."
    };
    const risks2 = {
        "id": 10,
        "page": "Risks and Vulnerabilities the Commonwealth Faces",
        "link": "/risks#riskAssessment",
        "title": "Risk Assessment",
        "body": "The risk assessment includes information from almost 80 state agency climate change vulnerability assessments undertaken during development of this plan as a key requirement of Executve Order 569. Vulnerability to climate change is a function of exposure, sensitivity, and adaptive capacity."
    };
    const risks3 = {
        "id": 11,
        "page": "Risks and Vulnerabilities the Commonwealth Faces",
        "link": "/risks#keyVulnerability",
        "title": "Key Vulnerability Assessment Findings",
        "body": "Vulnerability assessment completed by approximately 80 state agencies. Nearly 1,000 critical items were assessed. 386 physical/non-physical assets | 340 functions | 231 population groups. Vast majority of agencies identified multiple concerns regarding impacts from climate change and natural hazards. Top five hazards based on number of assets with a 'High Risk' rating. Extreme precipitation | Hurricanes/Tropical Storms | Nor'easter | Ice Storms | Severe Winter Storm. Ability to withstand natural hazards and climate impacts. Excellent: 6% | Good: 38% | Satisfactory: 42% | Fair: 14% | Poor: 0%. Length for Agency to return to essential functionality following an extreme weather event that results in significant damage to critical assets and/or functions. Months: 7% | Weeks: 32% | Days: 43% | Hours: 19%. Remote operation capability. Yes: 82% | No: 18%. Status of incorporating natural hazard mitigation and climate change adaptation into programs. Currently incoporating: 28% | Planning to incorporate: 32% | Not incorporating: 29% | Don't know: 10%. Plans, policies, or procedures in need of revision to better consider climate change. Yes: 24% | No: 37% | Don't know: 39%. Application of factors derived from state agency adaptive capacity responses to risk scores significantly reduced the number of “High Risk” critical items – overall 80% reduction. Top hazards with “High Vulnerability” scores based on number of critical items. Physical/Non-Physical Assets: Severe Winter Storm/Ice Storm | Functions: Coastal Flooding | Population Groups: Coastal Flooding."
    };
    const capabilities1 = {
        "id": 12,
        "page": "Current Capabilities and Adaptability",
        "link": "/capabilities",
        "title": "Current Capabilities and Adaptability",
        "body": "To maintain its commitment, the Commonwealth will continue to work across state government to build institutional capacity, maintain the best available science and data, and develop operations and policies to adapt to changing natural hazards and the effects of climate change. The SHMCAP evaluates the Commonwealth's existing capabilities to implement hazard mitigation and climate adaptation activities on a state-wide level, and presents agency-specific analyses of the State's capacity to adapt to changing hazards and climate conditions over time. These results were used to create a comprehensive and effective strategy to integrate future hazard mitigation and climate change adaptation. The Commonwealth has bolstered its long history of advancing risk reduction and resilience across the state through recent State-led initiatives to increase state and local government capacity to deal with the challenge of climate change and natural hazards. Examples include. Significant investment in statewide downscaled climate change projections at the county and watershed scale. Coordination of regional and community-based hazard mitigation plans. Coordination of hazard mitigation assistance grant programs. Fiscal Year 2019 Capital Investment Plan. Coastal Resilience Grant Program expansion. Municipal Vulnerability Preparedness program growth"
    };
    const strategy1 = {
        "id": 13,
        "page": "Our Strategy",
        "link": "/our-strategy#shmcapGoals",
        "title": "SHMCAP Goals",
        "body": "The SHMCAP's strategy to address risks and vulnerabilities from natural hazards and climate change impacts, is guided by a mission statement and five goals, and includes a series of specific hazard mitigation and climate adaptation actions. The process to develop these actions included extensive stakeholder engagement, reference to strategies and actions identified in local hazard mitigation plans, and development of initial actions by the Commonwealth's state agencies and Climate Change Coordinators across all Secretariats."
    };
    const strategy2 = {
        "id": 14,
        "page": "Our Strategy",
        "link": "/our-strategy#about",
        "title": "About the SHMCAP Action Tracker",
        "body": "State agencies identified over 100 initial priority actions to increase resilience and overcome the Commonwealth's risks and vulnerabilities related to natural hazards and projected climate changes. SHMCAP actions can be sorted and viewed in multiple ways. The tracker is maintained by the State and contains a list of actions identified through the 2018 SHMCAP planning process as well as through the ongoing SHMCAP implementation process led by the Resilience Massachusetts Action Team (RMAT). Included are 'global' actions that are intended to reduce risk across State government and the Commonwealth. All actions address at least one of the primary climate change interactions and associated climate change impacts identified in the risk assessment. Each action includes specific details, such as completion time frame, lead agency, agency priority score, and possible funding sources."
    };
    const strategy3 = {
        "id": 15,
        "page": "Our Strategy",
        "link": "/our-strategy#nbs",
        "title": "Importance of Nature-Based Solutions in Hazard Mitigation and Climate Adaptation",
        "body": "Nature-based solutions (NBS) are defined as: The conservation, enhancement, and restoration of nature to reduce emissions, adaptation, and enhance resiliency. These types of solutions use natural systems, mimic natural processes, or work in tandem with traditional engineering approaches to address natural hazards like flooding, erosion, drought, and heat islands. NBS offers numerous co-benefits, including minimizing costs, improving water quality, and enhancing quality of life. NBS should be considered at an ecosystem scale to prioritize the most effective solutions and locations. including minimizing costs, improving water quality, and enhancing quality of life. These co-benefits should also be considered in decision-making."
    };
    const team1 = {
        "id": 16,
        "page": "Resilient MA Action Team",
        "link": "/our-strategy#responsibilities",
        "title": "RMAT Responsibilities",
        "body": "Under the direction of the primary state agencies, the Massachusetts Emergency Management Agency (MEMA) and EEOEEA’s Climate Change Program, the RMAT will be tasked with monitoring and tracking the implementation process, making recommendations to and supporting the primary state agencies on plan updates, and facilitating coordination across State government and with stakeholders, including businesses, cities, and towns."
    };
    const team2 = {
        "id": 17,
        "page": "Resilient MA Action Team",
        "link": "/our-strategy#highlights",
        "title": "RMAT and Agency Highlights",
        "body": ""
    };
    const team3 = {
        "id": 18,
        "page": "Resilient MA Action Team",
        "link": "/our-strategy#implementation",
        "title": "Plan Implementation",
        "body": "To maintain relevancy, evaluate progress, and improve long-term resiliency, the SHMCAP is a living document that will evolve as specific hazard mitigation, and climate adaptation actions are implemented and in response to an ongoing dialogue with stakeholders. Effective plan implantation will be accomplished by designing implementation strategies and establishing timelines for priority actions and by continuing to monitor, evaluate, update, and develop actions as new data and experience become available. Therefore, the responsibility for plan implementation falls on many state agencies."
    };
    const team4 = {
        "id": 19,
        "page": "Resilient MA Action Team",
        "link": "/our-strategy#maintenance",
        "title": "Plan Maintenance",
        "body": "The key components for regular SHMCAP maintenance include an annual plan review, a post-disaster review, and a 5-year plan review and update. Effective plan maintenance will also require additional recurring activities that are not bound to specific methods or schedules, such as tracking and documenting new or best practices for hazard mitigation and climate adaptation, or new policies or procedures that may affect how the SHMCAP is implemented. The RMAT is expected to perform many of these ongoing activities."
    };
    const glossary1 = {
        "id": 20,
        "page": "Glossary",
        "link": "/glossary",
        "title": "Glossary",
        "body": "ASCE	American Society of Civil Engineers BBRS	Board of Building Regulations and Standards BMPs	Best Management Practices CDBG	Community Development Block Grant CDBG-DR	Community Development Block Grant Disaster Recovery CEMP	Comprehensive Emergency Management Plan CERT	Community Emergency Response Teams CFR	Code of Federal Regulations CMR 	Code of Massachusetts Regulations COSTEP MA 	Coordinated Statewide Emergency Preparedness in Massachusetts CPG	Comprehensive Preparedness Guide CRS	Community Rating System CZM	Office of Coastal Zone Management DCAMM	Division of Capital Asset Management and Maintenance DCR	Department of Conservation and Recreation DEP	Department of Environmental Protection DMA	Disaster Mitigation Act DOER	Department of Energy Resources EAP	Emergency Action Plan EECC	Early Environmental Coordination Checklist EOEEA	Executive Office of Energy and Environmental Affairs EOPSS	Executive Office of Public Safety and Security EMAP	Emergency Management Accreditation Program FEMA	Federal Emergency Management Agency FHMP	Flood Hazard Management Program FIRM	Flood Insurance Rate Map FIS	Flood Insurance Studies FMA	Flood Mitigation Assistance FMAG	Fire Mitigation Assistance Grants FOA	First Order Approximation FY	Fiscal Year GHG	Greenhouse Gas GIS	Geographic Information System HIRA	Hazard Identification and Risk Assessment HMA	Hazard Mitigation Assistance HMGP	Hazard Mitigation Grant Program I-Codes	International Codes IBHS	Institute for Business and Home Safety ICC	International Code Council IHP	Individuals and Households Program IRC	International Residential Code ISO	Insurance Services Office LAMP	Levee Analysis and Mapping Procedures LiDAR	Light Detection and Ranging LiMWA	Limit of Moderate Wave Action LSCSF	Land Subject to Coastal Storm Flowage MAPC	Metropolitan Area Planning Council MassDOT	Massachusetts Department of Transportation MAESF	Massachusetts Emergency Support Function MEMA	Massachusetts Emergency Management Agency MGL	Massachusetts General Laws MSBC	Massachusetts State Building Code MVP	Municipal Vulnerability Preparedness NE CASC	Northeast Climate Adaptation Science Center NESEC	Northeast States Emergency Consortium NFIP	National Flood Insurance Program NOAA	National Oceanic and Atmospheric Administration NGO	Nongovernmental Organization PA	Public Assistance PDM	Pre-Disaster Mitigation PMT	Project Management Team PV	Photovoltaic Risk MAP	Risk Mapping, Assessment, and Planning SFHA	Special Flood Hazard Area SHMCAP 	State Hazard Mitigation and Climate Adaptation Plan SHMP 	State Hazard Mitigation Plan SHMT	State Hazard Mitigation Team SMART	Solar Massachusetts Renewable Target SRMP	Statewide Resilience Master Plan Stafford Act	Robert T. Stafford Disaster Relief and Emergency Assistance Act THIRA	Threat Hazard Identification and Risk Assessment USACE	U.S. Army Corps of Engineers V Zone 	Velocity Flood Zone WPA	Wetlands Protection Act"
    };
    const fullplan1 = {
        "id": 21,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Full Plan",
        "body": "Read the full Massachusetts State Hazard Mitigation Program Plan"
    }
    const fullplan2 = {
        "id": 22,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Executive Summary",
        "body": "Read the Executive Summary of the Massachusetts State Hazard Mitigation Program Plan"
    }
    const fullplan3 = {
        "id": 23,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 1: Introduction and Assurances",
        "body": "This introductory chapter to the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) discusses the plan's purpose, authority and scope, adoption by the State, assurances, plan organization, and revisions."
    }
    const fullplan4 = {
        "id": 24,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 2: Planning Context",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) provides an overview of key considerations for hazard mitigation and climate adaptation planning in the Commonwealth, including the organization of government in Massachusetts and introduction of the Commonwealth’s Climate Change Strategy. Sections on recent and projected development trends and climate change projections are also included to provide a summary of changes that have occurred or are projected to occur in Massachusetts that may affect risk and vulnerability, as determined in the risk assessment that was conducted for this integrated State Hazard Mitigation and Climate Adaptation Plan (SHMCAP)."
    }
    const fullplan5 = {
        "id": 25,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 3: Introduction to Risk Assessment",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) discusses the risk assessment used in the plan, including the natural hazard identification process, a climate change and natural hazard taxonomy, the sectors assessed, and methodologies used."
    }
    const fullplan6 = {
        "id": 26,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 4: Risk Assessment",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) examines the natural hazards that have the potential to impact the Commonwealth of Massachusetts, identifies regional areas (i.e., per Massachusetts County) and specific populations that are most vulnerable to climate impacts, and estimates the associated economic losses. A summary sheet is provided for each hazard, which outlines key information and findings from the risk assessment conducted for that hazard."
    }
    const fullplan7 = {
        "id": 27,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 5: Technological and Human-Caused Hazards",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) introduces several state emergency management plans that assess technological and human-caused hazards to demonstrate that the Commonwealth’s Emergency Management Program accounts for both natural and non-natural hazards and to aid in maintaining the Commonwealth’s Emergency Management Accreditation Program (EMAP) accreditation."
    }
    const fullplan8 = {
        "id": 28,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 6: State Capability and Adaptive Capacity Analysis",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) presents an analysis of the Commonwealth of Massachusetts' current capability and capacity to address current and future risks from the impacts of climate change and hazards through existing resources. The capability and adaptive capacity analysis includes two integral components: (1) a capability assessment that evaluates the Commonwealth’s existing capabilities to enable and implement hazard mitigation and climate adaptation activities on a statewide level; and (2) an adaptive capacity analysis that is more specific to individual state agencies."
    };
    const fullplan9 = {
        "id": 29,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 7: Hazard Mitigation and Climate Adaptation Strategy",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) outlines hazard mitigation and climate adaptation actions. It also discusses strategy development and the importance of nature-based solutions."
    };
    const fullplan10 = {
        "id": 30,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 8: Plan Implementation and Maintenance",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) outlines specifically how the State Hazard Mitigation and Climate Adaptation Plan will be implemented and maintained by the Commonwealth of Massachusetts, and it describes how the public and other stakeholders will continue to be involved in the process."
    };
    const fullplan11 = {
        "id": 31,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 9: Planning Process",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) provides a summary of the process used to develop this plan, including how it was prepared and who was involved. It also describes the stakeholder outreach and engagement strategy that was developed and implemented for the SHMCAP, and provides an overview of the state agency vulnerability assessment process that was integrated into the plan. Note that state agency program integration is more fully addressed in Chapter 6: State Capability and Adaptive Capacity Analysis."
    };
    const fullplan12 = {
        "id": 32,
        "page": "Full Plan",
        "link": "/full-plan",
        "title": "Chapter 10: Coordination of Local Hazard Mitigation and Climate Adaptation Planning",
        "body": "This chapter of the Massachusetts State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) provides information on funding and technical assistance for local hazard mitigation and climate adaptation planning, local plans, local plan integration, and ecosystem scale planning for nature-based solutions."
    };
    const inlandFlooding1 = {
        "id": 33,
        "page": "Inland Flooding",
        "link": "/highlight/inlandFlooding",
        "title": "Inland Flooding",
        "body": "Nationally, inland flooding causes more damage annually than any other severe weather event. Between 2007 and 2014, the average annual cost of flood damages in Massachusetts was more than $9.1 million. Inland flooding is the result of moderate precipitation over several days, intense precipitation over a short period, or melting snowpack. Developed, impervious areas can contribute to inland flooding. Increases in precipitation and extreme storm events will result in increased inland flooding. Common types of inland flooding are described in the following subsections."
    };
    const inlandFlooding2 = {
        "id": 34,
        "page": "Inland Flooding",
        "link": "/highlight/inlandFlooding#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability In Massachusetts, flooding is caused by Nor’easters, ice jams hurricanes/tropical storms, or other heavy precipitation events. Spring snowmelt, rain on snow or frozen ground, impervious surfaces, and steep slopes with minimal soil can exacerbate flooding. Between 1954 and 2017, Essex County experienced the most FEMA flood disaster declarations (18), followed by Norfolk County with 16. Based on historical disaster declarations, the Commonwealth experiences a substantial flood event once every 3 years."
    };
    const inlandFlooding3 = {
        "id": 35,
        "page": "Inland Flooding",
        "link": "/highlight/inlandFlooding#effects",
        "title": "Potential Effects of Climate Change",
        "body": "More Intense and Frequent Downpours More intense downpours often lead to inland flooding as soils become saturated and stop absorbing more water, river flows rise, and urban stormwater systems become overwhelmed. Flooding may occur as a result of heavy rainfall, snowmelt or coastal flooding associated with high wind and storm surge. More Frequent Severe Storms Climate change is expected to result in an increased frequency of severe storm events. This would directly increase the frequency of flooding events, and could increase the chance that subsequent precipitation will cause flooding if water stages are still elevated. Episodic Droughts Vegetated ground cover has been shown to significantly reduce runoff. If drought causes vegetation to die off, this flood-mitigating capacity is diminished."
    };
    const inlandFlooding4 = {
        "id": 36,
        "page": "Inland Flooding",
        "link": "/highlight/inlandFlooding#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: Populations living in or near floodplain areas; people traveling in flooded areas or living in urban areas with poor stormwater drainage. Vulnerable Populations: Populations with low socioeconomic status who may consider the economic impacts of evacuating; people over age 65 who may require medical attention; households with young children who have difficulty evacuating; populations with low English language fluency who may not receive or understand warnings to evacuate. According to the DCAMM facility inventory, 196 state facilities are exposed to the inland flooding hazard. Middlesex County contains the most state-owned buildings exposed to this hazard (64), followed by Norfolk (26) and Hampshire (25) Counties. Twenty-five critical facilities, including 10 police facilities and 6 military facilities, are exposed to the inland flooding hazard. The greatest proportion of these facilities occurs in Middlesex County (8). Flooding can also wash out sections of roadway and bridges, as well as cause extensive damage to utilities and disruption of critical services, such as liquid fuel delivery, non-emergency health care services, and child care. Increased river flooding is likely to cause soil erosion, soil loss, and crop damage. Stormwater drainage systems and culverts that are not sized to accommodate larger storms are likely to experience flood damage as extreme precipitation events increase. Severe floods cause a wide range of environmental impacts. Animals can lose their habitats if habitat elements are swept away or destroyed. Riverbank and soil erosion transform existing habitats and deposit sediment in downstream areas. If high levels of nutrients are present in the soil, this can also lead to eutrophication in downstream ecosystems. Economic losses due to a flood include, but are not limited to damages to buildings (and their contents) and infrastructure, agricultural losses, business interruption (including loss of wages), impacts on tourism, and tax base. Using building replacement value as a proxy for economic exposure, Middlesex, Essex and Norfolk Counties are the most economically exposed to this hazard."
    };
    const drought1 = {
        "id": 37,
        "page": "Drought",
        "link": "/highlight/drought",
        "title": "Drought",
        "body": "Droughts can vary widely in duration, severity, and local impact. They may have widespread social and economic significance that requires the response of numerous parties, including water suppliers, firefighters, farmers, and residents. Droughts are often defined as periods of deficient precipitation. How this deficiency is experienced can depend on factors such as land-use change, the existence of dams, and water supply withdrawals or diversions. For example, impervious surfaces associated with development can exacerbate the effects of drought due to decreased groundwater recharge."
    };
    const drought2 = {
        "id": 38,
        "page": "Drought",
        "link": "/highlight/drought#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability here are many ways to define drought; however, the root cause of most droughts is an extended period of deficient precipitation. The entire Commonwealth is exposed to this hazard. Each drought can affect some or all regions of the Commonwealth at different intensities. The last emergency level drought was in the 1060s, but since then, multiple severe droughts have occurred, including two at the Warning level and four at the watch level. Although shorter in duration, the severity of the 2016 drought was equivalent to that of the 1060s. However less severe droughts precipitation data analyzes in the Drought Management Plan, there is approximately an 8% chance of a Watch level drought occurring in any given month."
    };
    const drought3 = {
        "id": 39,
        "page": "Drought",
        "link": "/highlight/drought#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Prolonged Drought The frequency and intensity of drought are projected to increase during summer and fall in the Northeast as higher temperatures lead to greater evaporation and earlier winter and spring snowmelt, and precipitation patterns become more variable and extreme. Reduced Snowpack Due to climate change, the proportion of precipitation falling as snow and the extent of time snowpack remains are both expected to decrease. This reduces the period during which snowmelt can recharge groundwater Supplies, bolster streamflow, and provide water for the growing period."
    };
    const drought4 = {
        "id": 40,
        "page": "Drought",
        "link": "/highlight/drought#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure. Vulnerable Populations: Residents with a private water supply, such as a well; persons who receive water through a pubic provider; populations with respiratory health conditions. Drought impacts on government facilities are limited, with the exception of facilities like parks or greenhouses that rely on specific environmental conditions. However, droughts contribute to conditions that can be conducive to wildfire and fire-fighting can be hampered by water shortage. Some infrastructure may not be built to operate during drought conditions. For example, a reservoir’s intake pipe may be higher than the reservoir water level in a severe drought. Similar conditions may occur for cooling water intake for energy production. For groundwater water supply, deeper wells may be needed or alternate supplies found for emergency backup during severe droughts. Drier summers and intermittent droughts may strain irrigation water supplies, stress crops, and delay harvests. Prolonged droughts can have severe impacts on groundwater and surface water-dependent ecosystems and natural resources, as most organisms require water throughout their life cycle. Forests managed for timber, or other economic uses could experience reduced growth rates or mortality during periods of drought. The economic impacts of drought can be significant in the agriculture, recreation, forestry, and energy sectors. Economic impacts might also include purchasing water during drought emergencies. Crop failure can also result in an increase in food prices, placing economic stress on a broader portion of the economy."
    };
    const landslide1 = {
        "id": 41,
        "page": "Landslide",
        "link": "/highlight/landslide",
        "title": "Landslide",
        "body": "The term landslide includes a wide range of ground movements, such as rock falls, deep failure of slopes, and shallow debris flows. The most common types of landslides in Massachusetts include translational debris slides, rotational slides, and debris flows. Historical landslide data for the Commonwealth suggests that most landslides are preceded by 2 or more months of higher than normal precipitation, followed by a single, high-intensity rainfall of several inches or more. This precipitation can cause slopes to become saturated."
    };
    const landslide2 = {
        "id": 42,
        "page": "Landslide",
        "link": "/highlight/landslide#profile",
        "title": "HazarLandslided Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Most landslides in Massachusetts are caused by a combination of unfavorable geologic conditions, steep slopes, and/or excessive wetness in the subsurface. The highest prevalence of unstable slopes is found in area around Mount Greylock and the nearby portion of the Deerfield River, the US Highway 20 corridor near Chester, as well as the main branches of the Westfield River. Notable landslides in Massachusetts occur approximately every other year. However, because many landslides are minor and occur unobserved in remote areas, the true number of landslide events is probably higher."
    };
    const landslide3 = {
        "id": 43,
        "page": "Landslide",
        "link": "/highlight/landslide#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Slope Saturation Regional climate change models suggest that Massachusetts will likely experience more frequent and intense storms throughout the year. This change could result in more frequent soil saturation conditions, which are conducive to an increased frequency of landslides. Reduced Vegetation Extent An increased frequency of drought events is likely to reduce the extent of vegetation throughout the Commonwealth. The loss of the soil stability provided by vegetation could also increase the probability of landslides wherever these events occur."
    };
    const landslide4 = {
        "id": 44,
        "page": "Landslide",
        "link": "/highlight/landslide#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: Populations who reside or travel near steep slopes. Vulnerable Populations: People who rely on potentially impacted roads for vital transportation needs. Six state-owned facilities, located at Natural Bridge State Forest, Joseph Allen Skinner State Park (2), Mount Sugarloaf Reservation (2), and the Wachusett Reservoir, are located within unstable slope areas. Landslides can cause direct losses to roads, buildings, and other elements of the built environment as well as indirect socio-economic losses related to road closures that interfere with travel or downed power lines. Landslides can impact agriculture and forestry as well as water infrastructure. Landslides can affect many facets of the environment, including the landscape itself, water quality, and habitat health. Transported soil may harm aquatic habitats, and mass movement of sediment may result in stripping of forests and other vegetated systems. Direct costs include the actual damage sustained by buildings, property, and infrastructure. Indirect costs from a large landslide event could include clean-up costs, business interruption, loss of tax revenues, reduced property values, and loss of productivity."
    };
    const coastalFlooding1 = {
        "id": 45,
        "page": "Coastal Flooding",
        "link": "/highlight/coastalFlooding",
        "title": "Coastal Flooding",
        "body": "The term landslide includes a wide range of ground movements, such as rock falls, deep failure of slopes, and shallow debris flows. The most common types of landslides in Massachusetts include translational debris slides, rotational slides, and debris flows. Historical landslide data for the Commonwealth suggests that most landslides are preceded by 2 or more months of higher than normal precipitation, followed by a single, high-intensity rainfall of several inches or more. This precipitation can cause slopes to become saturated."
    };
    const coastalFlooding2 = {
        "id": 46,
        "page": "Coastal Flooding",
        "link": "/highlight/coastalFlooding#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability There are two primary types of coastal flooding: routine tidal flooding and flooding caused by storm events. The former is caused by regular tidal cycles, while the latter can result from precipitation, storm surge, or a combination of the two. The entire Massachusetts coastline is exposed to this hazard. Historically, the highest concentration of coastal flooding events has occurred in Eastern Plymouth County. Coastal flooding occurs frequently along the Massachusetts coast. According to the National Climatic Data Center, the Commonwealth has experienced an average of 6 flooding events per year over the past decade."
    };
    const coastalFlooding3 = {
        "id": 47,
        "page": "Coastal Flooding",
        "link": "/highlight/coastalFlooding#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Increase in Frequency and Severity of Coastal Flooding Sea level rise will increase the frequency and severity of both routine tidal flooding and storm-related flooding. Downscaled climate projections suggest that Boston may experience between 4.0 and 10.2 feet of sea level rise by 2100. Storm Surge Climate change is likely to increase the frequency of severe storm events, including hurricanes and nor’easters. As a result, storm surge sufficient to cause coastal flooding is likely to occur more often."
    };
    const coastalFlooding4 = {
        "id": 48,
        "page": "Coastal Flooding",
        "link": "/highlight/coastalFlooding#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: Populations in coastal communities, especially those in coastal flood hazard areas. Vulnerable Populations: Populations who lack reliable access to emergency information, such as populations with low English language fluency or low Internet service; populations who face challenges in evacuating, such as people over age 65, those with young children, or households without a vehicle; populations who will have difficulty recovering from displacement, including renters, the elderly, people with disabilities, and low income families. According to the DCAMM inventory, a total of 201 state government buildings are located within the FEMA-defined coastal flood zone. The highest concentrations of these facilities are in Suffolk County (48) and Bristol County (42). A total of 13 critical facilities, including police stations, fire stations, and state-owned college facilities, are located within the coastal flood zone. The majority of these facilities are located in Suffolk County (6) and Essex County (3). As sea level rise progresses, roadways, subway and highway tunnels, Logan International Airport, and other critical elements in our transportation network could be inundated. Water infrastructure systems may eventually need relocation. Coastal flooding is a natural element of the coastal environment. However, both increased storm-related flooding and sea level rise represent threats to coastal natural resources, as many coastal habitats are dependent on specific inundation frequencies. These habitats, and the species that rely on them, will be threatened by sea level rise. Due to the concentration of development in the coastal zone, economic exposure from this hazard is high. Using general building stock as a proxy for overall economic exposure, Suffolk and Barnstable Counties are the most at-risk to economic damage from the coastal flooding hazard. This damage will likely include both direct impacts, such as damage to homes and government buildings, as well as lost tourism revenue and impacts to local businesses."
    };
    const coastalErosion1 = {
        "id": 49,
        "page": "Coastal Erosion",
        "link": "/highlight/coastalErosion",
        "title": "Coastal Erosion",
        "body": "Shorelines naturally change seasonally, accreting slowly during summer when sediments are deposited by relatively low-energy waves (sediment gain) and eroding dramatically during winter when sediments are moved offshore by high-energy storm waves (sediment loss). Storms, including hurricanes and nor’easters decrease sediment supplies, and sea-level rise contributes to these coastal hazards."
    };
    const coastalErosion2 = {
        "id": 50,
        "page": "Coastal Erosion",
        "link": "/highlight/coastalErosion#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Coastal shorelines change constantly in response to wind, waves, tides, sea level fluctuation, seasonal and climatic variations, human alteration, and other factors that influence the movement of sand and material within a shoreline system. A report by the Massachusetts Coastal Erosion Commission reported that the highest erosion rates occur in Eastham, Orleans, and Yarmouth. Coastal erosion is measured as the rate of change of a shoreline over a specific period of time, measured in feet or meters per year. Although discrete events may exacerbate shoreline change, the frequency of erosion cannot be measured."
    };
    const coastalErosion3 = {
        "id": 51,
        "page": "Coastal Erosion",
        "link": "/highlight/coastalErosion#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Rising Wave Action As the sea level rises, wave action moves higher onto the beach. The surf washes sand and dunes out to sea or makes the sand migrate parallel to the shoreline. As a rule-of-thumb, a sandy shoreline retreats landward about 100 feet for every 1-foot rise in sea level. Loss of Buffer Systems Rising waves, tides, and currents erode beaches, dunes, and banks, resulting in landward retreat of these landforms and reducing the buffer they provide to existing development. More sediment is washed out to sea, rather than settling on the shore."
    };
    const coastalErosion4 = {
        "id": 52,
        "page": "Coastal Erosion",
        "link": "/highlight/coastalErosion#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: Populations who reside in the coastal high hazard area. Vulnerable Populations: Waterfront residents whose properties are not sufficiently protected from the threat of coastal erosion. There are relatively few state-owned properties immediately adjacent to the coastline. Many coastal infrastructure elements such as roads however, are likely to be severely impacted by coastal erosion. All structures adjacent to the coast, especially those located in high-wave energy areas or those atop coastal bluffs, are exposed to the coastal erosion hazard. Coastal erosion exposes coastal elements such as roads and bridges to additional impacts from other hazards. Shoreline management techniques to protect structures and roads include adapting existing buildings and infrastructure via elevating roads or relocating buildings; enhancing natural systems through beach nourishment, bioengineering, cobble berm, etc.; installing nearshore coastal engineered structures; or in certain situations, armoring the shoreline. Coastal erosion is a natural process, but under increasing rates of sea level rise, coastal erosion has numerous direct and indirect impacts on the local environment, including direct loss of habitat (including coastal wetlands and salt marsh) and mortality for animals that are not able to relocate. Remaining animals may suffer from crowding, increased competition, or increased predation. Shoreline accretion can also change the shoreline and habitat. The beaches, parks, and natural resources along the Massachusetts coast contribute greatly to the local economy, especially during the summer season where the population in coastal areas can more than double. Beach loss, if not mitigated, will likely result in significant economic impacts to these communities."
    };
    const tsunami1 = {
        "id": 53,
        "page": "Tsunami",
        "link": "/highlight/tsunami",
        "title": "Tsunami",
        "body": "A tsunami is a devastating onshore surge of water or a string of waves created by the displacement of a large volume of water. Tsunamis can move hundreds of miles per hour (mph) in the open ocean and can come ashore with waves as high as 100 feet or more. The height of a tsunami wave that comes ashore is related to the strength of the event that generated the tsunami and to the configuration of the ocean bottom along the tsunami’s path."
    };
    const tsunami2 = {
        "id": 54,
        "page": "Tsunami",
        "link": "/highlight/tsunami#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability A tsunami is caused by the displacement of water. This can be caused by a number of triggers, including earthquakes, volcanic eruptions, landslides, glacier calving and meteorite impacts. All of the coastal areas of Massachusetts are exposed to the threat of tsunamis; however, that probability is relatively low compared to the Pacific Coast of the U.S. The historical frequency of tsunami or run-up events on the East Coast of the U.S. is approximately 1 event every 39 years. A significant tsunami has never struck the Massachusetts coast."
    };
    const tsunami3 = {
        "id": 55,
        "page": "Tsunami",
        "link": "/highlight/tsunami#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Isostatic Rebound As ice melts across the world, the earth’s crust is expected to rise under the reduced weight. This will cause earthquakes and submarine landslides, potentially triggering tsunamis. Glacial Earthquakes As glaciers collapse in a warming climate, the impact may trigger massive landslides. Research suggests that these events would generate far more powerful tsunamis than underwater earthquakes."
    };
    const tsunami4 = {
        "id": 56,
        "page": "Tsunami",
        "link": "/highlight/tsunami#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: Populations who live within a 1-mile buffer of the coast in the tsunami exposure zone. Vulnerable Populations: Populations who would have difficulty receiving tsunami warnings or evacuating, including populations over 65, the disabled, families with young children, car-free households, and communication-impaired individuals. Because of the ambiguity surrounding potential tsunami impacts, a 1-mile buffer from the coast was used to simulate potential exposure. 694 state-owned buildings are located in this area, with the highest number in Suffolk County (173), followed by Essex (140) and Barnstable (139) Counties. Roads are the primary resource for evacuation before and during a tsunami event. Bridges, utilities, and power generation facilities would also be exposed. Widespread impacts could occur if salt water were to inundate drinking water supplies or overburden stormwater and wastewater systems. Fifty-three critical facilities in the tsunami hazard area were identified, with 12 in Suffolk County and 11 in Essex County. The inundation of typically dry areas from a tsunami can reshape the topography both by scouring existing sediment and by depositing sediment from other locations. In addition to these physical impacts, tsunamis can also uproot trees and other plants in its path, causing habitat loss in addition to direct mortality to animals in the area. A tsunami’s negative impact on the economy is difficult to quantify. Losses would likely include general building stock damage, business interruption/closures, port closures, utility and transportation damage, and impacts on tourism and tax base to the Commonwealth."
    };
    const winterStorm1 = {
        "id": 57,
        "page": "Severe Winter Storm / Nor'easter",
        "link": "/highlight/winterStorm",
        "title": "Severe Winter Storm / Nor'easter",
        "body": "Severe winter storms include ice storms, nor’easters, heavy snow, blowing snow, and other extreme forms of winter precipitation. A blizzard is a winter snowstorm with sustained or frequent wind gusts to 35 mph or more, accompanied by falling or blowing snow that reduces visibility to or below a quarter of a mile. These conditions must be the predominant condition over a 3-hour period. Extremely cold temperatures are often associated with blizzard conditions, but are not a formal part of the definition. A nor’easter is a storm that gets its name from its continuously strong northeasterly winds blowing in from the ocean ahead of the storm and over the coastal areas. A nor’easter is characterized by a large counter-clockwise wind circulation around a low-pressure center that often results in heavy snow, high winds, and rain."
    };
    const winterStorm2 = {
        "id": 58,
        "page": "Severe Winter Storm / Nor'easter",
        "link": "/highlight/winterStorm#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Snow formation requires temperatures to be below freezing in most of the atmosphere from the surface up to cloud level. Ice storms occur when liquid rain freezes on contact with cold objects, creating ice build-up. Nor’easters are macro-scale cyclones that begin as strong areas of low pressure in the Gulf of Mexico or off the east coast in the Atlantic Ocean. Higher snow accumulations are prevalent at higher elevations in Western and Central Massachusetts, and along the coast where snowfall can be enhanced by additional ocean moisture. East-facing coastal areas, including Salisbury Beach, Revere, Nahant, Scituate, and Marshfield, as well as parts of the Cape and Nantucket, experience nor’easters most strongly. Although there is significant interannual variability in the frequency and severity of winter storms, a notable winter storm generally occurs at least once every winter. Nor’easters generally occur on at least an annual basis, with some years bringing up to four nor’easter events. This is currently the most frequently occurring natural hazard in the state."
    };
    const winterStorm3 = {
        "id": 59,
        "page": "Severe Winter Storm / Nor'easter",
        "link": "/highlight/winterStorm#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Increased Snowfall Increased sea surface temperature in the Atlantic Ocean will cause air moving north over the ocean to hold more moisture. As a result, when these fronts meet cold air systems moving from the north, an even greater amount of snow than normal can be anticipated to fall on Massachusetts. Changing Circulation Patterns and Warming Oceans Research has found that increasing water temperatures and reduced sea ice extent in the Arctic are producing atmospheric circulation patterns that favor the development of winter storms in the eastern U.S. Global warming is increasing the severity of winter storms because warming ocean water allows additional moisture to flow into the storm, which fuels the storm to greater intensity. Increase in Frequency and Intensity There is evidence suggesting that nor’easters along the Atlantic coast are increasing in frequency and intensity. Future nor’easters may become more concentrated in the coldest winter months when atmospheric temperatures are still low enough to result in snowfall rather than rain."
    };
    const winterStorm4 = {
        "id": 60,
        "page": "Severe Winter Storm / Nor'easter",
        "link": "/highlight/tsunami#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure. Vulnerable Populations: Elderly populations, who are susceptible due to their increased risk of injury and death from falls, overexertion, or hypothermia related to clearing snow or power failures; residents with low incomes who may lack access to housing or housing with sufficient insulation or heating supply; individuals who have difficulty evacuating for economic or physical reasons. Using data from the Northeast States Emergency Consortium, 710 state- owned facilities are located in areas that typically experience more than 2.5 days with 5 or more inches of snow per year. Nearly half of these facilities are located in Worcester County. SLOSH Zones show that Suffolk, Bristol, and Essex Counties have highest number of government facilities exposed to nor’easters. All elements of the built environment in the Commonwealth are exposed to severe winter weather. According to the DCAMM facility inventory, 19 critical facilities are located in areas that typically experience more than 2.5 days with 5 or more inches of snow per year. SLOSH Zones show that Suffolk and Essex Counties have highest number of critical facilities exposed to nor’easters. Severe winter can result in downed power lines, extended power failures, and road blockages. It can also overwhelm the capacity of public safety providers. Winter storms are a natural part of the Massachusetts climate, and native ecosystems and species are well-adapted to these events. However, more extreme winter storms can results in direct mortality, habitat modification, and flooding when snow and ice melt. Potential impacts from winter storms and nor’easters include loss of utilities, interruption of transportation corridors, loss of business function and loss of income during business closures. The cost of snow and ice removal and repair of roads from the freeze/thaw process can also strain local financial resources."
    };
    const hurricanes1 = {
        "id": 61,
        "page": "Hurricanes/Tropical Storms",
        "link": "/highlight/hurricane",
        "title": "Hurricanes/Tropical Storms",
        "body": "Hurricanes begin as tropical storms over the warm moist waters of the Atlantic Ocean, off the coast of West Africa, and over the Pacific Ocean near the equator. When water temperatures are at least 80°F, hurricanes can grow and thrive, generating enormous amounts of energy, which is released in the form of numerous thunderstorms, flooding, rainfall, and very damaging winds. The damaging winds help create a dangerous storm surge in which the water rises above the normal astronomical tide."
    };
    const hurricanes2 = {
        "id": 62,
        "page": "Hurricanes/Tropical Storms",
        "link": "/highlight/hurricane#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Hurricanes begin as tropical storms near the equator. As the moisture evaporates, it rises until enormous amounts of heated, moist air are twisted high in the atmosphere. The entire Commonwealth is vulnerable to hurricanes and tropical storms, dependent on the storm’s track. The coastal areas are more susceptible to damage due to the combination of both high winds and tidal surge, as depicted on the SLOSH maps. The average number of hurricane or tropical storm events is 1 every 2 years. Storms severe enough to receive FEMA disaster declarations, however, only occur every 9 years on average."
    };
    const hurricanes3 = {
        "id": 63,
        "page": "Hurricanes/Tropical Storms",
        "link": "/highlight/hurricane#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Larger, Stronger Storms As warmer oceans provide more energy for storms, both past events and models of future conditions suggest that the intensity of tropical storms and hurricanes will increase. As warmer oceans provide more energy for storms, both past events and models of future conditions suggest that the intensity of tropical storms and hurricanes will increase. Warmer air can hold more water vapor, which means the rate of rainfall will increase. One study found that hurricane rainfall rates were projected to rise 7 percent for every degree Celsius increase in tropical sea surface temperature."
    };
    const hurricanes4 = {
        "id": 64,
        "page": "Hurricanes/Tropical Storms",
        "link": "/highlight/hurricane#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure. Vulnerable Populations: Economically disadvantaged population, which is more likely to evaluate the economic impact of evacuating; individuals over age 65, who are more likely to face physical challenges or to require medical care while evacuating; individuals with low English language fluency who may not receive or understand warnings to evacuate. According to the DCAMM inventory, a total of 1,030 government buildings are located within the Category 1-4 SLOSH zones. The highest concentrations of these facilities are in Suffolk County (445), Bristol County (132) and Essex County (132). A total of 74 critical facilities, including military installations, police stations, fire stations, college facilities and social service providers, are located within the Category 1-4 SLOSH zones. The majority of these facilities are located in Suffolk County (34) and Essex County (16). Hurricanes and tropical storms can result in power outages and road closures that impact emergency response. Heavy rains can lead to contamination of well water, septic system failure, and overburden stormwater systems. As the storm is occurring, flooding, or wind/water-borne detritus can cause mortality to animals if it strikes them or transports them to a non-suitable habitat. In the longer term, environmental impacts can occur as a result of riverbed scour, fallen trees, storm surge, or contamination of ecosystems by transported pollutants. Hurricanes are among the most costly natural disasters in terms of damage inflicted and recovery costs required. Using general building stock as a proxy for overall economic exposure, Suffolk and Middlesex Counties are the most at-risk to economic damage from the hurricane hazard. This damage will likely include loss of building function, relocation costs, wage loss, road repair and rental loss."
    };
    const tornadoes1 = {
        "id": 65,
        "page": "Tornadoes",
        "link": "/highlight/tornadoes",
        "title": "Tornadoes",
        "body": "A tornado is a narrow, violently rotating column of air that extends from the base of a cumulonimbus cloud to the ground. The observable aspect of a tornado is the rotating column of water droplets, with dust and debris caught in the column. Tornadoes are the most violent of all atmospheric storms. Tornadoes can form from individual cells within severe thunderstorm squall lines. They can also form from an isolated supercell thunderstorm. They can be spawned by tropical cyclones or the remnants thereof, and weak tornadoes can even occur from little more than a rain shower if air is converging and spinning upward."
    };
    const tornadoes2 = {
        "id": 66,
        "page": "Tornadoes",
        "link": "/highlight/tornadoes#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Tornadoes require a number of elements in order to form: strong atmospheric winds, clockwise turning of the winds with height, increasing wind speed in the low atmosphere, a gradient of cooler, drier air at elevation and a forcing mechanism. Historically, the most tornado-prone portions of Massachusetts are the central counties (Franklin, Hampshire, Hampden, and Worcester) as well as portions of Middlesex and Norfolk Counties. Massachusetts experiences an average of 1.7 tornadoes per year."
    };
    const tornadoes3 = {
        "id": 67,
        "page": "Tornadoes",
        "link": "/highlight/tornadoes#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Increase in Frequency and Intensity of Severe Thunderstorms Future environmental changes may result in an increase in the frequency and intensity of severe thunderstorms, which can include tornadoes. However, the resolution of current climate models is too coarse to accurately simulate tornado formation and the confidence on model details associated with this potential increase is low."
    };
    const tornadoes4 = {
        "id": 68,
        "page": "Tornadoes",
        "link": "/highlight/tornadoes#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure; population in area having higher-than-average tornado frequency are at greater risk. Vulnerable Populations: Populations who may have difficulty evacuating, including car-free households, individuals over age 65, and households with young children; individuals with limited Internet or phone access or low English language fluency may not be aware of impending warning; people who reside in older or less stable housing. Using a tornado density approximation, as well as the DCAMM facility inventory, 4,511 state-owned facilities are located within tornado hazard areas. This method is conservative, and it is unlikely that even a fraction of these facilities will experience tornado impacts. The highest number of exposed facilities is in Middlesex County (663), followed by Worcester County (541). A total of 224 critical facilities were identified within tornado hazard areas, with the highest numbers in Middlesex (45) and Worcester (37) Counties. Tornadoes down power lines and damage transmission infrastructure. Shelters and other public safety facilities that provide services for people whose homes are damaged may be overburdened. Hail, wind, debris, and flash flooding associated with tornadoes can damage water infrastructure. Direct impacts may occur to flora and fauna small enough to be transported by the tornado. Even if the winds are not sufficient to transport trees and other large plants, they may still uproot them. Material transported by tornadoes can also cause environmental havoc in surrounding areas, particularly if contaminating materials are introduced into the atmosphere or local water supplies. Tornado events are typically localized; however, in those areas, economic impacts can be significant. Types of impacts may include loss of business function, water supply system damage, damage to inventory, relocation costs, wage loss, and rental loss due to the repair/replacement of buildings. Recovery and clean-up costs can also be costly."
    };
    const otherSevereWeather1 = {
        "id": 69,
        "page": "Other Severe Weather",
        "link": "/highlight/otherSevereWeather",
        "title": "Other Severe Weather",
        "body": "Several frequent natural hazards in Massachusetts—particularly strong winds and extreme precipitation events—occur outside of notable storm events. The SHMCAP discusses the nature and impacts of these hazards, as well as ways in which they are likely to respond to climate change."
    };
    const otherSevereWeather2 = {
        "id": 70,
        "page": "Other Severe Weather",
        "link": "/highlight/otherSevereWeather#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Three components are required for a thunderstorm to form: moisture, rising unstable air, and a lifting mechanism. Wind is caused by differences in atmospheric pressure, as well as the Coriolis Effect. The entire Commonwealth experiences thunderstorms. While the entire Commonwealth is also at risk to strong winds, the coastal zone is most frequently impacted by high-wind events Massachusetts experiences between 20 and 30 thunderstorm days each year. High winds occur more frequently, with an average annual frequency of 43.5 high wind events."
    };
    const otherSevereWeather3 = {
        "id": 71,
        "page": "Other Severe Weather",
        "link": "/highlight/otherSevereWeather#effects",
        "title": "Potential Effects of Climate Change",
        "body": "More Intense and Frequent Thunderstorms and Downpours The Northeast has already experienced a larger increase in the intensity of rainfall events than any other region in the United States in the last fifty years, and this trend is expected to continue."
    };
    const otherSevereWeather4 = {
        "id": 72,
        "page": "Other Severe Weather",
        "link": "/highlight/otherSevereWeather#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure. Vulnerable Populations: Populations over age 65, low income populations, populations with life-threatening illness, residents living in areas that are isolated from major roads, populations on life-support who are dependent on electricity. According to the DCAMM facility data, 4,787 state-owned facilities are located in areas with winds greater than 90 miles per hour. The highest concentrations of these buildings occur in Worcester and Middlesex Counties. Thunderstorms occur regularly throughout the Commonwealth, and GIS analysis of exposure to this hazard was not conducted. All elements of the built environment are exposed to severe weather events such as high winds and thunderstorms. The highest number of critical facilities exposed to high winds is in Middlesex (43) and Worcester (36) Counties. Severe windstorms causing downed trees can create serious impacts on power and above-ground communication lines. Hail, wind, and flash flooding associated with thunderstorms and high winds can cause damage to water infrastructure. Environmental impacts of precipitation events often include soil erosion, the growth of excess fungus or bacteria and direct impacts to wildlife. High winds can defoliate forest canopies and cause structural changes within an ecosystem that can destabilize food webs. In addition to direct building losses, economic damage from severe weather events can include loss of business function, water supply system damage, damage to inventory, relocation costs, wage loss, and rental loss due to the repair/replacement of buildings."
    };
    const avgExtTemp1 = {
        "id": 73,
        "page": "Average/Extreme Temperature",
        "link": "/highlight/avgExtTemp",
        "title": "Average/Extreme Temperature",
        "body": "Several frequent natural hazards in Massachusetts—particularly strong winds and extreme precipitation events—occur outside of notable storm events. The SHMCAP discusses the nature and impacts of these hazards, as well as ways in which they are likely to respond to climate change."
    };
    const avgExtTemp2 = {
        "id": 74,
        "page": "Average/Extreme Temperature",
        "link": "/highlight/avgExtTemp#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Temperature variations occur due to a number of atmospheric phenomena. Notable heat for Massachusetts is defined as 3+ days above 90°F, while Wind Chill Advisories are issued if wind chill is forecast to dip below -15 ºF for at least 3 hours. Extreme temperature events occur more frequently and with greater severity in inland portions of the Commonwealth than in coastal areas. Over the last two decades, an average of 1.5 extreme cold weather events, and an average of 2 extreme hot weather events have occurred in Massachusetts annually."
    };
    const avgExtTemp3 = {
        "id": 75,
        "page": "Average/Extreme Temperature",
        "link": "/highlight/avgExtTemp#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Higher Extreme Temperatures The average summer across the Massachusetts during the years between 1971 and 2000 included 4 days over 90°F (i.e. extreme heat days). Climate scientists project that by mid-century, the state could have a climate that resembles that of southern states today, with an additional 10-28 days over 90°F during summer. By the end of the century, extreme heat could occur between 13-56 days during summer. Higher Average Temeratures Compared to an annual 1971-2000 average temperature baseline of 47.6°F, annual average temperatures in Massachusetts are projected to increase by 3.8 to 10.8 degrees (likely range) by the end of the 21st century; slightly higher in western Massachusetts."
    };
    const avgExtTemp4 = {
        "id": 76,
        "page": "Average/Extreme Temperature",
        "link": "/highlight/avgExtTemp#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure; populations in urban areas may face greater risk. Vulnerable Populations: Populations over age 65; infants and young children; Individuals who are physically ill; low-income individuals who cannot afford proper heating and cooling; populations whose jobs involve exposure to extreme temperatures. Extreme heat generally does not impact buildings, although losses may occur as the result of overheated HVAC systems. Extreme cold temperature events can damage buildings through freezing/bursting pipes and freeze/thaw cycles. Extreme heat events can sometimes cause short periods of utility failure due to increased usage from air conditioners and other appliances. Heavy snowfall and ice storms, associated with extreme cold temperature events, can also cause power interruption. Periods of both hot and cold weather can stress energy infrastructure. Above average, below average, and extreme temperatures are likely to impact crops ─ such as apples, cranberries, and maple syrup ─ that rely on specific temperature regimes. Because the species that exist in a given area are designed to survive within a specific temperature range, extreme temperatures events can place significant stress both on individual species and ecosystems. Warming temperature across the globe force species poleward, or upward in elevation, while species that cannot relocate fast enough or find suitable habitat face local extinction. Extreme temperature events can have significant economic impacts, including loss of business function and damage/loss of inventory. The agricultural industry is the industry most at risk in terms of economic impact and damage due to extreme temperature and drought events."
    };
    const wildfires1 = {
        "id": 77,
        "page": "Wildfires",
        "link": "/highlight/wildfires",
        "title": "Wildfires",
        "body": "A wildfire can be defined as any non-structure fire that occurs in vegetative wildland that contains grass, shrub, leaf litter, and forested tree fuels. The wildfire season in Massachusetts usually begins in late March and typically culminates in early June, corresponding with the driest live fuel moisture periods of the year. April is historically the month in which wildfire danger is the highest. Drought, snowpack level, and local weather conditions can impact the length of the fire season."
    };
    const wildfires2 = {
        "id": 78,
        "page": "Wildfires",
        "link": "/highlight/wildfires#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Wildfires in Massachusetts are caused by natural events, human activity, or prescribed fire. Wildfires often begin unnoticed but spread quickly, igniting brush, trees, and potentially homes. The ecosystems most susceptible to fire are pitch pine, scrub oak, and oak forests. According to a U.S. Forest Service study, Barnstable and Plymouth Counties are the most fire-prone due to their vegetation, sandy soil, and the presence of a drying wind. Based on the frequency of past occurrences, the Commonwealth is likely to experience at least one wildfire with noteworthy damages each year"
    };
    const wildfires3 = {
        "id": 79,
        "page": "Wildfires",
        "link": "/highlight/wildfires#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Prolonged Drought Seasonal drought risk is projected to increase during summer and fall in the Northeast as higher temperatures lead to greater evaporation and earlier winter and spring snowmelt, coupled with more variable precipitation patterns. Drought and warmer temperatures may also heighten the risk of wildfire, by causing forested areas to dry out and become more flammable. More Frequent Lighting Research has found that the frequency of lightning strikes – an occasional cause of wildfires – could increase by approximately 12 percent for every degree Celsius of warming."
    };
    const wildfires4 = {
        "id": 80,
        "page": "Wildfires",
        "link": "/highlight/wildfires#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: Populations whose homes are located in wildfire hazard areas. Vulnerable Populations: Populations who are sensitive to smoke and poor air quality, including children, the elderly, and those with respiratory and cardiovascular diseases. According to the DCAMM facility inventory, 1,143 state-owned buildings are located in identified wildfire hazard areas. The highest concentration of these facilities occurs in Middlesex (185) and Worcester (157) Counties. Fires can create conditions that block or prevent access and can isolate residents and emergency service providers. Power lines are the most at risk to wildfire because most poles are made of wood and susceptible to burning. In addition to potential direct losses to water infrastructure, wildfires may result in significant withdrawal of water supplies. They can also damage infrastructure elements such as power and communication lines. The DCAMM facility inventory revealed 176 critical facilities located in wildfire hazard areas, primarily in Worcester, Hampshire and Plymouth Counties. Fire serves important ecological purposes; however, it can also cause environmental impacts. In addition to direct mortality, wildfires and the ash they generate can distort the flow of nutrients through an ecosystem, reducing the biodiversity that can be supported. Wildfire events can have major economic impacts on a community, both from the initial loss of structures and the subsequent loss of revenue from destroyed business and decrease in tourism. Additionally, wildfires can require thousands of taxpayer dollars in fire response efforts."
    };
    const invasiveSpecies1 = {
        "id": 81,
        "page": "Invasive Species",
        "link": "/highlight/invasiveSpecies",
        "title": "Invasive Species",
        "body": "Invasive species are defined as non-native species that cause or are likely to cause harm to ecosystems, economies, and/or public health. The focus of the SHMCAP is on invasive terrestrial plants, as this is the most studied and managed typed of invasive; information for invasive aquatic flora and fauna (including marine species) is also provided when relevant. These species have biological traits that provide them with competitive advantages over native species, particularly because in a new habitat they are not restricted by the biological controls of their native habitat. As a result, these invasive species can monopolize natural communities, displacing many native species and causing widespread economic and environmental damage."
    };
    const invasiveSpecies2 = {
        "id": 82,
        "page": "Invasive Species",
        "link": "/highlight/invasiveSpecies#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability Invasive species are intentionally or non-intentionally introduced into local ecosystems. Invasive species represent a threat to native or minimally managed ecosystems throughout Massachusetts. Increased rates of global trade and travel have created new pathways for the dispersion of exotic species, increasing the frequency with which these species are introduced."
    };
    const invasiveSpecies3 = {
        "id": 83,
        "page": "Invasive Species",
        "link": "/highlight/invasiveSpecies#effects",
        "title": "Potential Effects of Climate Change",
        "body": "Warming Climate A warming climate may place stress on colder-weather species, while allowing non-native species accustomed to warmer climates to spread northward. Ecosystem Stress Changes in precipitation and temperature combine to create new stresses for Massachusetts’ unique ecosystems. For example, intense rainfall in urbanized areas can cause pollutants on roads and parking lots to get washed into nearby rivers and lakes, reducing habitat quality. As rainfall and snowfall patterns change, certain habitats and species that have specific physiological requirements may be affected. The stresses experienced by native ecosystems as a result of these changes may increase the chances of a successful invasion of non-native species."
    };
    const invasiveSpecies4 = {
        "id": 84,
        "page": "Invasive Species",
        "link": "/highlight/invasiveSpecies#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure. Vulnerable Populations: Populations who depend on the Commonwealth’s existing ecosystems for their economic success. State-managed water bodies and reservoirs could be exposed to the zebra mussel if knowingly or unknowingly introduced from other areas. This prolific invasive species can clog water infrastructure and cause extensive ecological, economic, and social impacts. Invasive species also impacting state wildlife management areas. As described above, water bodies such as reservoirs could be exposed to the zebra mussel if it is introduced. Invasive species can pose a threat along roadways by impeding sight lines if left unchecked. More pest pressure from insects, diseases, and weeds may harm crops and cause farms to increase pesticide use. Species like zebra mussels can damage aquatic infrastructure and vessels. Invasive species may cause impacts to water quality, which would have implications for the drinking water supplies and the cost of treatment. Invasive species present a significant threat to the environment and natural resources present in the Commonwealth. Research has found that competition or predation by alien species is the second most significant threat to biodiversity, only surpassed by direct habitat destruction or degradation. Invasive species are widely considered to be one of the most costly natural hazards in the United States, as invasive control efforts can be quite extensive and these species can damage crops, recreational amenities, and public goods such as water quality."
    };
    const earthquakes1 = {
        "id": 85,
        "page": "Earthquakes",
        "link": "/highlight/earthquakes",
        "title": "Earthquakes",
        "body": "Earthquakes often occur along fault boundaries. As a result, areas that lie along fault boundaries—such as California, Alaska, and Japan—experience earthquakes more often than areas located within the interior portions of these plates. New England, on the other hand, experiences intraplate earthquakes because it is located deep within the interior of the North American plate. Scientists are still exploring the cause of intraplate earthquakes, and many believe these events occur along geological features that were created during ancient times and are now weaker than the surrounding areas."
    };
    const earthquakes2 = {
        "id": 86,
        "page": "Earthquakes",
        "link": "/highlight/earthquakes#profile",
        "title": "Hazard Profile",
        "body": "Location Previous Occurrences Frequency of Occurrences Severity/Extent Warning Time Secondary Hazard Exposure and Vulnerability An earthquake is the vibration of the earth’s surface that follows a release of energy in the earth’s crust. Earthquakes can occur throughout Massachusetts. Large earthquakes in Canada, which is more seismically active than New England, can affect tall buildings in Boston and elsewhere in eastern Massachusetts. Earthquakes cannot be predicted and may occur at any time. Research has found that the probability of a magnitude 5.0 or greater earthquake centered somewhere in New England in a 10-year period is about 10%-15%."
    };
    const earthquakes3 = {
        "id": 87,
        "page": "Earthquakes",
        "link": "/highlight/earthquakes#exposure",
        "title": "Exposure & Vulnerability by Key Sector",
        "body": "General At-Risk Population: State-wide exposure. Vulnerable Populations: Socially vulnerable populations, due to factors including their physical and financial ability to react or respond during a hazard event; the location and construction quality of housing; and the ability to be self-sustainable after an event due to limited ability to stockpile supplies. Due to the widespread effect of an earthquake generally there is no way to determine which state-owned government facilities will be impacted. By using Hazus data, it was determined that there would be approximately $112,440,000 in building-related economic loss for the 100-year earthquake, reaching a total of $31,114,950,000 by the 2500-year earthquake. In addition to direct impacts to roads, bridges, agriculture infrastructure, public health and safety facilities, and water infrastructure networks, earthquakes also present a risk associated with hazardous materials releases, which have the potential to be released at a production or storage facility or as a result of pipeline damage. These events could cause widespread interruption of services, as well as air and water contamination. If strong shaking occurs in a forest, trees may fall – resulting not only in environmental impacts but also potential economic impacts to any industries relying on that forest. If shaking occurs in a mountainous environment, cliffs may crumble and caves may collapse. Disrupting the physical foundation of the ecosystem can modify the species balance in that ecosystem and leave the area more vulnerable to the spread of invasive species. Earthquake losses can include structural and non-structural damage to buildings (which could include damage to architectural components like ceilings and lights, or power systems), loss of business function, damage to inventory, relocation costs, wage loss, and rental loss due to the repair/replacement of buildings."
    };
    index.addDoc(index1);
    index.addDoc(index2);
    index.addDoc(hazards1);
    index.addDoc(hazards2);
    index.addDoc(hazards3);
    index.addDoc(hazards4);
    index.addDoc(hazards5);
    console.log(index.search("SHMCAP"))
    return (
        <div className="search mt-2">
            <FontAwesomeIcon className="mr-2" icon={faSearch}/>
            <input className="border-0" placeholder="SEARCH" />
        </div>
    );
};

export default Search;