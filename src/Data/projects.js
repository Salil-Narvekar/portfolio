import skillIconUrl from '../Urls/skillIconUrls.jsx'
import projectOwrtc2 from '../Images/projectOwrtc2.png'
import projectPartyImg from '../Images/projectPartyImg.png'
import projectAuth from '../Images/projectAuth.png'
import projectUserList from '../Images/projectUserList.png'
import projectOwrtc1 from '../Images/projectOwrtc1.png'
import projectUrls from '../Urls/projectsUrls.js'

const projects = [
    {
        name: "Organization workflow (version 0.0.2)",
        subtitle: "Featured project",
        projectImageUrl: projectOwrtc2,
        description: "A web application built using React.js & Tailwind CSS for frontend & Django Rest Framework for backend API. Project focuses on utilizing React hocks, props, state management, etc. along with a Python-based backend to create REST APIs using Django Rest Framework. It's Revamped version of my college final year project.",
        languages: [skillIconUrl.react, skillIconUrl.tailwindCss, skillIconUrl.javaScript, skillIconUrl.python, skillIconUrl.django, skillIconUrl.sql, skillIconUrl.json],
        gitPagesLink: projectUrls.owrtcRevamped.gitPages,
        gitCodeLink: projectUrls.owrtcRevamped.gitCode
    },
    {
        name: "Users listing",
        subtitle: "Conceptual project",
        projectImageUrl: projectUserList,
        description: 'Users listing accordion developed manually, along with search filter & CRUD operations handled through frontend.',
        languages: [skillIconUrl.react, skillIconUrl.javaScript, skillIconUrl.tailwindCss],
        gitPagesLink: projectUrls.usersListing.gitPages,
        gitCodeLink: projectUrls.usersListing.gitPages
    },
    {
        name: "Party planner",
        subtitle: "Conceptual project",
        projectImageUrl: projectPartyImg,
        description: 'Party Planner is a project to plan a party digitally including all the party aspects considering all details about the party. It focuses on the data manipulation & handeling on frontend itself.',
        languages: [skillIconUrl.react, skillIconUrl.javaScript, skillIconUrl.tailwindCss],
        gitPagesLink: projectUrls.partyPlanner.gitPages,
        gitCodeLink: projectUrls.partyPlanner.gitCode
    },
    {
        name: "Basic authentication interface",
        subtitle: "Conceptual project",
        projectImageUrl: projectAuth,
        description: 'It is a basic Authentication system to demonstrate user Sign up depending upon the registration dynamically. It is handled through frontend itself focusing on useReducer and useContext. It is a responsive webapp developed to support dynamic viewports.',
        languages: [skillIconUrl.react, skillIconUrl.javaScript, skillIconUrl.tailwindCss],
        gitPagesLink: projectUrls.basicAuth.gitPages,
        gitCodeLink: projectUrls.basicAuth.gitCode
    },
    {
        name: "Organization workflow with real time communication (version 0.0.1)",
        subtitle: "College final year project",
        projectImageUrl: projectOwrtc1,
        description: 'A web application developed for Employee Management System. UI in HTML, CSS, Functionality in Javascript & CRUD in PHP MySQL & Client-Side data population in JSON. Role Specific Data Access, Data Visualization and Login & Location Mapping Feature.',
        languages: [skillIconUrl.javaScript, skillIconUrl.html, skillIconUrl.css, skillIconUrl.php, skillIconUrl.sql, skillIconUrl.json],
    }
]

export default projects