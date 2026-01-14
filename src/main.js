import './styles/main.css';

// Project Data
const projects = [
    {
        id: 1,
        title: 'Гостиная в классическом стиле',
        description: 'Роскошное оформление гостиной в загородном доме. Использован итальянский бархат цвета шампань с золотой отделкой. Ламбрекены сложной формы подчеркивают высоту потолков. Тюль с деликатной вышивкой создает мягкое рассеянное освещение.',
        images: [
            './images/portfolio_classic.jpg',
            './images/project1_detail1.jpg',
            './images/project1_detail2.jpg'
        ]
    },
    {
        id: 2,
        title: 'Спальня Модерн',
        description: 'Лаконичное решение для современной спальни. Натуральный лен в серо-бежевых тонах. Портьеры на люверсах обеспечивают идеальную складку и легкое скольжение. Акцент сделан на фактуре ткани и игре света.',
        images: [
            './images/portfolio_modern.jpg',
            './images/project2_detail1.jpg'
        ]
    },
    {
        id: 3,
        title: 'Текстиль для Лофта',
        description: 'Оформление окон в лофт-апартаментах. Грубый хлопковый текстиль графитового цвета отлично сочетается с кирпичной кладкой. Использованы карнизы в индустриальном стиле.',
        images: [
            './images/portfolio_loft.jpg',
            './images/project3_detail1.jpg'
        ]
    }
];

// DOM Elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalGallery = document.getElementById('modal-gallery');
const closeModal = document.querySelector('.close-modal');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Functions
function openModal(projectId) {
    const project = projects.find(p => p.id === parseInt(projectId));
    if (!project) return;

    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;

    // Clear and populate gallery
    modalGallery.innerHTML = '';
    project.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = project.title;
        modalGallery.appendChild(img);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        openModal(id);
    });
});

closeModal.addEventListener('click', closeProjectModal);

// Close on click outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Animations on scroll (Simple Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // You can add CSS for this class if needed
        }
    });
});

document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

console.log('App started. Modal logic loaded.');
