import crm from "../images/projects/Mac-crm.png"
import movieStar from "../images/projects/Mac-MovieStar.png"
import weather from "../images/projects/Mac-weather.png"



export const projects = [
    {
        name: "CRM System",
        id:1,
        img: crm,
        description: "Customer Relationship Management (CRM) is a technology for managing a company's interaction with current and potential customers.",
        site: "https://crm-system-cloud.herokuapp.com",
        tech: ["React", "Redux" ,"Sass", "NodeJS" , "Express", "MongoDB" ]
    },
    {
        name: "MOVIEstar",
        id:2,
        img: movieStar,
        description: "A simple & responsive movies site.",
        site: "https://moviestar-app.netlify.app/",
        tech: ["React", "Hooks" ,"Sass" , "The Movie DB (TMDb) API"]
    },
    {
        name: "Weather App",
        id:3,
        img: weather,
        description: "Display current weather and a 5-day forecast of the searched location.",
        site: "https://weather-app-hadar.herokuapp.com/",
        tech: ["React" ,"Hooks", "MobX" , "Sass", "MaterialUI" , "AccuWeather API"]
    },

]

