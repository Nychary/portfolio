// CSS is imported in HTML

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
            './public/images/lesnaya/228b9650-2ea8-410f-9b0d-0c1d42a0dc00.jpg',
            './public/images/lesnaya/2b7f829b-08c3-4a49-8e88-066d1f82b9b6.jpg',
            './public/images/lesnaya/43b72088-66c6-4df5-b50e-de9fa3674396.jpg',
            './public/images/lesnaya/6e797d44-1484-4c97-b6fc-2dc1915bfe0e.jpg',
            './public/images/lesnaya/8d24af81-2545-4075-a247-1a2f67e8acd4.jpg',
            './public/images/lesnaya/Gr27_06.jpg',
            './public/images/lesnaya/Gr27_08.jpg',
            './public/images/lesnaya/IMG-20230330-WA0015.jpg',
            './public/images/lesnaya/IMG_20210405_204720_180.jpg',
            './public/images/lesnaya/IMG_20210829_203640_826.jpg',
            './public/images/lesnaya/IMG_20240903_010838_013.jpg',
            './public/images/lesnaya/WhatsApp Image 2024-11-01 at 18.02.03.jpeg',
            './public/images/lesnaya/WhatsApp Image 2024-11-01 at 18.04.50.jpeg'
        ]
    },
    {
        id: 2,
        title: 'Дом Желаний',
        description: 'Этот проект — воплощение мечты о совершенном уюте для всей семьи. Мы стремились создать атмосферу спокойствия и гармонии в каждой детали. Изящные портьеры с мягкими складками, выполненные из премиального текстиля, придают интерьеру завершенность и утонченность. Тонкая игра света и тени подчеркивает фактуру тканей, делая пространство живым и дышащим.',
        images: [
            './public/images/Gr27_02.jpg',
            './public/images/Gr27_24.jpg',
            './public/images/Gr27_27.jpg',
            './public/images/Gr27_26.jpg',
            './public/images/Gr27_28.jpg',
            './public/images/Gr27_42.jpg',
            './public/images/Gr27_37.jpg',
            './public/images/Gr27_38.jpg',
            './public/images/Gr27_43.jpg'
        ]
    },
    {
        id: 3,
        title: 'Мендсары. Домик для гостей',
        description: 'Уютный гостевой домик в Мендсарах. Натуральные ткани, спокойная цветовая гамма и функциональность — главные составляющие этого проекта. Льняные текстуры и мягкие драпировки создают атмосферу загородного покоя и тепла.',
        images: [
            './public/images/047A1082.jpg',
            './public/images/047A1093-HDR.jpg',
            './public/images/047A1107.jpg',
            './public/images/047A1124.jpg',
            './public/images/047A1133.jpg',
            './public/images/047A1136.jpg',
            './public/images/047A1163.jpg'
        ]
    },
    {
        id: 4,
        title: 'База отдыха Бородинское',
        description: 'Текстильное оформление для базы отдыха. Мы создали интерьеры, в которых хочется отдыхать. Использованы износостойкие ткани, которые легко переносят частую эксплуатацию, сохраняя при этом вид домашнего уюта. Гармония с природой в каждом штрихе.',
        images: [
            './public/images/057A0769.jpg',
            './public/images/057A0666-HDR.jpg',
            './public/images/057A0682.jpg',
            './public/images/057A0728.jpg',
            './public/images/057A0739.jpg',
            './public/images/057A0751.jpg',
            './public/images/057A0756-HDR.jpg',
            './public/images/057A0836-HDR.jpg',
            './public/images/057A0846.jpg',
            './public/images/057A0855.jpg',
            './public/images/057A0858.jpg'
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

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightboxBtn = document.querySelector('.close-lightbox');

// Portfolio Slider Elements
const portfolioGrid = document.getElementById('portfolio-grid');
const prevPortfolioBtn = document.querySelector('.prev-portfolio');
const nextPortfolioBtn = document.querySelector('.next-portfolio');

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
        img.style.cursor = 'zoom-in'; // Indicate clickable

        // Add click event for Lightbox
        img.addEventListener('click', () => {
            openLightbox(imgSrc);
        });

        modalGallery.appendChild(img);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightbox.style.display = 'flex'; // Use flex to center
    lightboxImg.src = src;
    // Don't hide overflow on body to avoid double scrollbar shift, 
    // or handled by modal being open already.
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.style.display = 'none';
}

// Event Listeners
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        openModal(id);
    });
});

closeModal.addEventListener('click', closeProjectModal);

if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
}

// Close Lightbox on click outside
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keydown events (Escape)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightbox.style.display === 'flex') {
            closeLightbox();
        } else if (modal.style.display === 'block') {
            closeProjectModal();
        }
    }
});

// Portfolio Slider Logic
if (portfolioGrid && prevPortfolioBtn && nextPortfolioBtn) {
    prevPortfolioBtn.addEventListener('click', () => {
        portfolioGrid.scrollBy({ left: -320, behavior: 'smooth' }); // Item width + gap
    });

    nextPortfolioBtn.addEventListener('click', () => {
        portfolioGrid.scrollBy({ left: 320, behavior: 'smooth' });
    });
}

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
