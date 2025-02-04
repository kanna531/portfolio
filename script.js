document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = ["Developer", "Designer", "Tech Enthusiast"];
    let index = 0;
    const textElement = document.getElementById('dynamic-text');

    function changeText() {
        textElement.textContent = dynamicText[index];
        index = (index + 1) % dynamicText.length;
    }

    setInterval(changeText, 2000);

    const projects = [
        { title: "Project One", description: "Description of project one." },
        { title: "Project Two", description: "Description of project two." }
    ];

    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(projectDiv);
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
    });
});