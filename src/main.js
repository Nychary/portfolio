import './styles/main.css';

// Slider Logic
const slider = document.getElementById('reviews-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (slider && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll left by item width + gap
    });

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll right
    });
}

// Project Data
const projects = [
    {
        id: 1,
        title: 'ЖК Лесная',
        description: 'Комплексное текстильное оформление квартиры в ЖК Лесная. В гостиной портьеры благородного бежевого оттенка подчеркивают теплоту деревянных текстур и создают уют. Легкий тюль не перегружает пространство и мягко рассеивает свет. Особое внимание уделено деталям: скрытые карнизы с подсветкой добавляют интерьеру воздушности и визуально увеличивают высоту потолков.',
        images: [
            './public/images/lesnaya_detail_3.jpg',
            './public/images/lesnaya_detail_4.jpg',
            './public/images/lesnaya_cover.jpg',
            './public/images/lesnaya_detail_1.jpg',
            './public/images/lesnaya_detail_2.jpg'
        ]
    },
    {
        id: 2,
        title: 'Спальня Модерн',
        description: 'Лаконичное решение для современной спальни. Натуральный лен в серо-бежевых тонах. Портьеры на люверсах обеспечивают идеальную складку и легкое скольжение. Акцент сделан на фактуре ткани и игре света.',
        images: [
            './public/images/portfolio_modern.jpg',
            './public/images/project2_detail1.jpg'
        ]
    },
    {
        id: 3,
        title: 'Текстиль для Лофта',
        description: 'Оформление окон в лофт-апартаментах. Грубый хлопковый текстиль графитового цвета отлично сочетается с кирпичной кладкой. Использованы карнизы в индустриальном стиле.',
        images: [
            './public/images/portfolio_loft.jpg',
            './public/images/project3_detail1.jpg'
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
