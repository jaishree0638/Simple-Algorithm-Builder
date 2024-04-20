document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const pageContent = document.querySelector('.page-content');
    const lowLevelButton = document.getElementById('next-lowlevel');
    const backButtonOverview = document.getElementById('back-to-overview');
    const backButtonPseudocode = document.getElementById('back-to-pseudocode');
    const backButtonLowLevel = document.getElementById('back-to-lowlevel');

    dropdownToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
        const isOpen = dropdownContent.classList.contains('show');
        if (isOpen) {
            const dropdownHeight = dropdownContent.clientHeight;
            pageContent.style.marginTop = (60 + dropdownHeight) + 'px'; // Adjust page content margin top
        } else {
            pageContent.style.marginTop = '60px'; // Reset page content margin top to leave space for navbar
        }
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                pageContent.style.marginTop = '60px'; // Reset page content margin top to leave space for navbar
            }
        }
    });

    // Event delegation for "Next" buttons
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('next-button')) {
            const currentSection = event.target.closest('.section');
            const nextSection = currentSection.nextElementSibling;
            if (nextSection) {
                currentSection.style.display = 'none';
                nextSection.style.display = 'block';
            }
        }
    });

    lowLevelButton.addEventListener('click', function() {
        const lowLevelSection = document.getElementById('low-level');
        lowLevelSection.style.display = 'none';
        const congratsSection = document.getElementById('finished');
        congratsSection.style.display = 'block';
    });

    backButtonOverview.addEventListener('click', function() {
        toggleSection('overview');
    });

    backButtonPseudocode.addEventListener('click', function() {
        toggleSection('pseudocode');
    });

    backButtonLowLevel.addEventListener('click', function() {
        toggleSection('low-level');
    });

    function toggleSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the targeted section
        const targetSection = document.getElementById(sectionId);
        targetSection.style.display = 'block';
    }
});
