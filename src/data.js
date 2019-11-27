import precipitation from './assets/changes-in-precipitation.png';
import extremeWeather from './assets/extreme-weather.png';
import seaLevelRise from './assets/sea-level-rise.png';
import risingTemperatures from './assets/rising-temperatures.png';

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