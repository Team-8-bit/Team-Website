addTemplate('navbar')
addTemplate('footer')

function addTemplate(name) {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('./partials/' + name + '.html')
            .then(response => response.text())
            .then(htmlTemplate => {
                const templateContainer = document.getElementById(name);
                templateContainer.innerHTML = htmlTemplate;
            })
    });
}