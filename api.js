function addResource(title, description, image, url) {
    const container = document.getElementById("resources");

    if (!container) {
        console.error("Resource container not found.");
        return;
    }

    const resource = document.createElement("a");
    resource.className = "resource";
    resource.href = url;

    const img = document.createElement("img");
    img.className = "resource-image";
    img.src = image;
    img.alt = title;

    const content = document.createElement("div");
    content.className = "resource-content";

    const heading = document.createElement("h2");
    heading.className = "resource-title";
    heading.textContent = title;

    const text = document.createElement("p");
    text.className = "resource-description";
    text.textContent = description;

    content.appendChild(heading);
    content.appendChild(text);

    resource.appendChild(img);
    resource.appendChild(content);

    container.appendChild(resource);
}
