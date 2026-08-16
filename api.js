function addResource(title, description, image, url, buttonText = "Open") {

    const container = document.getElementById("resources");

    if (!container) {
        console.error("Resource container not found.");
        return;
    }

    const resource = document.createElement("div");
    resource.className = "resource";

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

    const button = document.createElement("a");
    button.className = "resource-button";
    button.href = url;
    button.textContent = buttonText;
    button.target = "_blank";
    button.rel = "noopener noreferrer";

    content.appendChild(heading);
    content.appendChild(text);
    content.appendChild(button);

    resource.appendChild(img);
    resource.appendChild(content);

    container.appendChild(resource);
}
