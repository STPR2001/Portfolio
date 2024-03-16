console.log("script agregado correstamente");

const projects = [
  {
    category: "landing",
    title: "Landing Page 1",
    description: "Description for Landing Page 1",
    image: "coliseo.webp",
  },
  {
    category: "landing",
    title: "Landing Page 1",
    description: "Description for Landing Page 1",
    image: "1.jpg",
  },
  {
    category: "landing",
    title: "Landing Page 1",
    description: "Description for Landing Page 1",
    image: "1.jpg",
  },
  {
    category: "landing",
    title: "Landing Page 2",
    description: "Description for Landing Page 2",
    image: "2.jpg",
  },
  {
    category: "ecommerce",
    title: "Ecommerce 1",
    description: "Description for Ecommerce 1",
    image: "3.jpg",
  },
  {
    category: "ecommerce",
    title: "Ecommerce 2",
    description: "Description for Ecommerce 2",
    image: "coliseoDesktop.webp",
  },
  {
    category: "personal",
    title: "Personal Project 1",
    description: "Description for Personal Project 1",
    image: "1.jpg",
  },
  {
    category: "personal",
    title: "Personal Project 2",
    description: "Description for Personal Project 2",
    image: "2.jpg",
  },
  {
    category: "university",
    title: "University Project 1",
    description: "Description for University Project 1",
    image: "3.jpg",
  },
  {
    category: "university",
    title: "University Project 2",
    description: "Description for University Project 2",
    image: "university_project2.jpg",
  },
];

function filterProjects(category) {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  filteredProjects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    const imageElement = document.createElement("img");
    imageElement.src = `images/${project.image}`;
    projectElement.appendChild(imageElement);
    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = project.title;
    projectElement.appendChild(titleElement);
    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = project.description;
    projectElement.appendChild(descriptionElement);
    projectsContainer.appendChild(projectElement);
  });
}
