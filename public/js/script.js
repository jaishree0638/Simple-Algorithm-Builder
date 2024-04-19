document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const pageContent = document.querySelector('.page-content');

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
});
