// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Open modal function
function openModal(projectId) {
    document.getElementById(`${projectId}-modal`).style.display = "block";
}

// Close modal function
function closeModal(projectId) {
    document.getElementById(`${projectId}-modal`).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
