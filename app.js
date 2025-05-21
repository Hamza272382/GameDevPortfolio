const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // Handle control button clicks
    buttons.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Change active button
            document.querySelector('.active-btn').classList.remove('active-btn');
            this.classList.add('active-btn');

            // Show matching section
            const targetId = this.dataset.id;

            sections.forEach((section) => {
                if (section.id === targetId) {
                    section.classList.add('active');
                    section.style.display = 'block';
                } else {
                    section.classList.remove('active');
                    section.style.display = 'none';
                }
            });
        });
    });
}

pageTransitions();