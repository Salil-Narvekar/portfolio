import skillIconUrl from '../Urls/skillIconUrls.jsx'
import projectOwrtc2 from '../Images/projectOwrtc2.png'
import projectPartyImg from '../Images/projectPartyImg.png'
import projectAuth from '../Images/projectAuth.png'
import projectUserList from '../Images/projectUserList.png'
import projectOwrtc1 from '../Images/projectOwrtc1.png'
import projectUrls from '../Urls/projectsUrls.js'
import clothingStores from '../Images/clothingStores.png'
import indianRailwaysProject from '../Images/indianRailwaysProject.png'
import pythonRetailStores from '../Images/pythonRetailStores.png'
import pythonClothingStores from '../Images/pythonClothingStores.png'
import excelProject from '../Images/excelProject.png'
import tableauProject from '../Images/tableauProject.png'


export const projectsWeb = [
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

export const projectsAnalysis = [
    {
        name: "Power BI - Clothing Stores Sales AY-2024 Analysis",
        subtitle: "Institute's Major project",
        projectImageUrl: clothingStores,
        description: "Processed order-based sales data to analyze size demand, seasonal trends, regional performance, and overall revenue insights. Used Pivot Tables, Slicers, and Macros to enable dynamic visualization and smooth sheet navigation, while applying conditional formatting, including cell highlights and data bars to enhance readability. Delivered actionable insights by identifying peak and least-performing segments and recommending optimal solutions to improve sales performance.",
        languages: [skillIconUrl.powerBi, skillIconUrl.excel, skillIconUrl.sql, skillIconUrl.ai],
        gitPagesLink: projectUrls.clothingStores.gitPages,
        gitCodeLink: projectUrls.clothingStores.gitCode
    },
    {
        name: "Power BI - Indian Railways Data Analysis",
        subtitle: "Institute's Modular project",
        projectImageUrl: indianRailwaysProject,
        description: "Cleaned, transformed, and modeled Indian Railways train ticket sales and operational datasets to uncover meaningful business insights. Built calculated columns and DAX measures to analyze seasonal trends, zone-wise revenue performance, and travel behavior patterns. Identified peak revenue periods during vacations and festivals, recommending optimized train frequency and fare adjustments. Delivered detailed drill-through reports that supported targeted, data-driven decision-making.",
        languages: [skillIconUrl.powerBi, skillIconUrl.excel, skillIconUrl.sql, skillIconUrl.ai],
        gitPagesLink: projectUrls.indianRailways.gitPages,
        gitCodeLink: projectUrls.indianRailways.gitCode
    },
    {
        name: "Python | Data Analysis & EDA - Retails Stores Sales Analysis",
        subtitle: "Institute's Major project",
        projectImageUrl: pythonRetailStores,
        description: "Performed exploratory data analysis, data validation, and transformation to uncover key patterns within the dataset. Generated visual insights through correlation heatmaps and distribution plots, and analyzed core objectives using Matplotlib for charting and Seaborn for enhanced formatting. These visualizations supported clear interpretation and deeper understanding of the underlying data trends.",
        languages: [skillIconUrl.python, skillIconUrl.excel, skillIconUrl.ai],
        gitPagesLink: projectUrls.pythonRetailStores.gitPages,
        gitCodeLink: projectUrls.pythonRetailStores.gitCode
    },
    {
        name: "Python | Data Analysis & EDA - Clothing Stores Sales AY-2024 Analysis",
        subtitle: "Institute's Modular project",
        projectImageUrl: pythonClothingStores,
        description: "Performed end-to-end exploratory data analysis on order-based sales records to uncover size demand patterns, seasonal trends, regional performance, and overall revenue insights. Utilized Pandas for data cleaning and transformation, and generated analytical visualizations using Matplotlib and Seaborn—including bar charts, distribution plots, pie charts, and heatmaps—to enhance interpretability. Identified peak and low-performing segments, delivering actionable insights and recommending data-driven strategies to optimize sales performance.",
        languages: [skillIconUrl.python, skillIconUrl.excel, skillIconUrl.ai],
        gitPagesLink: projectUrls.pythonClothingStores.gitPages,
        gitCodeLink: projectUrls.pythonClothingStores.gitCode
    },
    {
        name: "Advanced Excel - Data Cleaning & Dashboard",
        subtitle: "Institute's Modular project",
        projectImageUrl: excelProject,
        description: "Analyzed order-based sales data in Excel to identify size demand trends, seasonal patterns, regional performance, and revenue insights. Leveraged Pivot Tables, Pivot Charts, and Slicers to build dynamic and interactive dashboards, while using conditional formatting such as data bars, icon sets, and cell highlights to improve clarity and readability. Identified peak and underperforming segments and delivered actionable recommendations to enhance overall sales performance.",
        languages: [skillIconUrl.excel, skillIconUrl.sql, skillIconUrl.ai],
        gitPagesLink: projectUrls.excelProject.gitPages,
        gitCodeLink: projectUrls.excelProject.gitCode
    },
    {
        name: "Tableau - Clothing Stores Sales AY-2024 Analysis",
        subtitle: "Institute's Modular project",
        projectImageUrl: tableauProject,
        description: "Processed and visualized order-based sales records in Tableau to uncover insights on size demand, seasonal behavior, regional contribution, and total revenue. Designed interactive dashboards using filters, parameters, and drill-down actions, enabling deeper exploration of sales patterns across multiple dimensions. Highlighted peak and low-performing categories through dynamic charts and KPIs, delivering clear, actionable recommendations to support strategic decision-making.",
        languages: [skillIconUrl.tableau, skillIconUrl.excel, skillIconUrl.sql, skillIconUrl.ai],
        gitPagesLink: projectUrls.tableauProject.gitPages,
        gitCodeLink: projectUrls.tableauProject.gitCode
    },
]
