// Poem data
const poems = [
    {
        id: 1,
        title: "Ocean's Whisper",
        author: "Elena Hartwell",
        theme: "Nature",
        description: "A mesmerizing journey through the depths of the ocean, exploring the mysteries that lie beneath the waves and the secrets whispered by the tides.",
        readTime: "2 min read",
        image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
        backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1600",
        text: `Beneath the surface of the restless sea,
Where ancient secrets dance in harmony,
The ocean whispers tales of time gone by,
Of sailors lost beneath the starlit sky.

Each wave that crashes on the sandy shore
Carries stories from the ocean's core,
Of creatures dwelling in the depths below,
Where sunlight never dares to go.

The tide speaks softly to the listening night,
Reflecting moon and stars so bright,
And in its rhythm, we can hear
The heartbeat of the water clear.

Oh ocean vast and deep and blue,
Your mysteries forever new,
You hold within your endless embrace
The wisdom of the human race.`
    },
    {
        id: 2,
        title: "Mountain's Promise",
        author: "Marcus Stone",
        theme: "Adventure",
        description: "An inspiring tale of perseverance and hope, following the journey of climbing life's mountains and discovering the strength within.",
        readTime: "3 min read",
        image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800",
        backgroundImage: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1600",
        text: `Upon the peak where eagles soar,
I stand and gaze at valleys more,
The journey long, the path was steep,
But promises are mine to keep.

Each step I took upon this climb,
Through storm and sun and passing time,
Has taught me more than books could say
About the strength found on the way.

The mountain stands so tall and proud,
Its head adorned with silver cloud,
And from this height I clearly see
The person I was meant to be.

No challenge now too great to face,
No dream beyond my reach to chase,
For I have climbed this mighty hill
And conquered doubt with iron will.`
    },
    {
        id: 3,
        title: "City Lights",
        author: "Sofia Chen",
        theme: "Urban Life",
        description: "A vivid portrayal of urban life, capturing the rhythm and energy of the city that never sleeps, where dreams and reality intertwine.",
        readTime: "2 min read",
        image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800",
        backgroundImage: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1600",
        text: `In streets that never seem to sleep,
Where neon signs their vigil keep,
The city hums its midnight song
As countless souls move right along.

Each window tells a different tale,
Of love and loss, of dreams set sail,
While traffic flows like rivers wide
Through concrete canyons far and wide.

The skyline reaches for the stars,
Beyond the noise of honking cars,
And in this maze of steel and stone
No heart need ever be alone.

For in the city's beating heart
Each person plays their crucial part,
Together weaving life's grand story
In urban light and urban glory.`
    },
    {
        id: 4,
        title: "Garden of Dreams",
        author: "Isabella Rose",
        theme: "Love",
        description: "A romantic journey through a magical garden where love blooms eternal, exploring the beauty of connection and the power of shared dreams.",
        readTime: "3 min read",
        image: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=800",
        backgroundImage: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1600",
        text: `In gardens where the roses grow,
And gentle streams of water flow,
Two hearts discovered love so true
Beneath the sky of endless blue.

Each petal soft as morning dew
Reflected love forever new,
While butterflies danced in the air
Around this couple, young and fair.

The garden knew their whispered vows,
Beneath the shade of apple boughs,
And promised that their love would stay
As fresh as flowers every day.

Through seasons changing, years gone by,
Their love grows stronger, reaching high,
Like climbing roses on the wall
That bloom through spring and summer's call.

In this sweet garden of the heart
No force of nature can depart
The seeds of love that here were sown
In soil where trust and hope have grown.`
    },
    {
        id: 5,
        title: "Stargazer's Lament",
        author: "David Nightingale",
        theme: "Contemplation",
        description: "A philosophical reflection on our place in the universe, exploring the wonder and humility that comes from gazing at the infinite cosmos.",
        readTime: "4 min read",
        image: "https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=800",
        backgroundImage: "https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1600",
        text: `Beneath the vast and starlit dome,
I ponder life, I ponder home,
Each distant star a world unknown
In cosmos where we're not alone.

The Milky Way spreads overhead
Like scattered diamonds on dark spread,
And in this moment, small am I
Beneath infinity's vast sky.

What secrets do the planets hold?
What stories have the stars foretold?
Each twinkling light across the night
Fills my soul with pure delight.

Yet in this sense of being small
I find the greatest truth of all:
That we are part of something grand
Beyond what we can understand.

So let me gaze into the night
And marvel at each distant light,
For in the stars I clearly see
The beauty of eternity.`
    },
    {
        id: 6,
        title: "Forest's Song",
        author: "Luna Greenwood",
        theme: "Nature",
        description: "An enchanting ode to the ancient wisdom of the forest, where every tree has a story and every leaf whispers secrets of the earth.",
        readTime: "3 min read",
        image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800",
        backgroundImage: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1600",
        text: `Deep within the ancient wood
Where mighty oaks have always stood,
The forest sings its timeless song
Of life and growth and being strong.

Each tree a guardian of the past,
With roots that hold the earth so fast,
While branches reach toward the light
And dance with wind from dawn till night.

The moss grows soft on bark so old
With stories that will ne'er be told,
And ferns unfurl their tender fronds
In nature's sacred, peaceful bonds.

Here wisdom flows through leaf and stone
In languages we've never known,
And those who listen with their heart
Can hear the forest's sacred art.

So walk these paths with reverence deep
Where ancient secrets safely sleep,
And let the forest's song inspire
Your soul to climb forever higher.`
    }
];

// DOM elements
const poemsGrid = document.getElementById('poems-grid');
const modal = document.getElementById('poem-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const poemDisplay = document.getElementById('poem-display');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderPoemCards();
    setupModalEventListeners();
});

// Render poem cards
function renderPoemCards() {
    poemsGrid.innerHTML = '';
    
    poems.forEach(poem => {
        const poemCard = createPoemCard(poem);
        poemsGrid.appendChild(poemCard);
    });
}

// Create individual poem card
function createPoemCard(poem) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.addEventListener('click', () => openPoemModal(poem));
    
    card.innerHTML = `
        <img src="${poem.image}" alt="${poem.title}" class="poem-card-image">
        <div class="poem-card-content">
            <h3 class="poem-card-title">${poem.title}</h3>
            <p class="poem-card-author">by ${poem.author}</p>
            <p class="poem-card-description">${poem.description}</p>
            <div class="poem-card-meta">
                <span class="poem-card-theme">${poem.theme}</span>
                <span class="poem-card-read-time">${poem.readTime}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Open poem modal
function openPoemModal(poem) {
    poemDisplay.style.backgroundImage = `url('${poem.backgroundImage}')`;
    
    poemDisplay.innerHTML = `
        <div class="poem-content">
            <h2 class="poem-title">${poem.title}</h2>
            <p class="poem-author">by ${poem.author}</p>
            <div class="poem-text">${poem.text}</div>
            <span class="poem-theme-display">${poem.theme}</span>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
    });
}

// Close poem modal
function closePoemModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    modal.style.opacity = '0';
}

// Setup modal event listeners
function setupModalEventListeners() {
    modalClose.addEventListener('click', closePoemModal);
    modalOverlay.addEventListener('click', closePoemModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePoemModal();
        }
    });
}

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading state for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe poem cards for scroll animations
setTimeout(() => {
    const poemCards = document.querySelectorAll('.poem-card');
    poemCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}, 100);
