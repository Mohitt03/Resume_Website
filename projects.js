const projects = [
    {
        id: "bevri",
        title: "Bevri",
        image: "images/Screenshot 2023-10-13 151652.png",
        description: "Bevri is a restaurant website with modern UI and responsive menu pages.",
        link: "https://bevri-mobile.onrender.com"
    },
    {
        id: "api",
        title: "REST API Project",
        image: "images/API.png",
        description: "A Node.js REST API with full CRUD operations and authentication.",
        link: "https://your-api-url.com"
    },
    {
        id: "blog",
        title: "Blog Website",
        image: "images/Blog1.png",
        description: "A full-stack blog app with admin panel, posts, comments, and database support.",
        link: "https://your-blog-url.com"
    },
    {
        id: "cycle",
        title: "Cycle Renting",
        image: "images/Cycle_renting/1.2_Home.png",
        description: "A rental system with booking features, payment UI, and backend integration.",
        link: "https://bicycle-main-2.onrender.com"
    },
    {
        id: "parking",
        title: "Parking Reservation",
        image: "images/Parking/Home.png",
        description: "A rental system with booking features, payment UI, and backend integration.",
        link: "https://your-cycle-url.com"
    }
];


// get project id from ?id=___
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// find matching project
const project = projects.find(p => p.id === projectId);

// load data into the page
if (project) {
    console.log("Project");
    console.log("Project", document.getElementById("project-title").innerText = project.title);

    document.getElementById("project-title").innerText = project.title;
    document.getElementById("project-description").innerText = project.description;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-link").href = project.link;
}
//  else {
//     document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:50px;'>Project not found</h1>";
//}
