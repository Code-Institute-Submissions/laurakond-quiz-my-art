// Images sourced from Wikipedia.org
// Questions for the period category 

const periodQuestions = [
    {
        question: "Arshile Gorky, The Liver is the cock's comb, 1944",
        imageUrl: "assets/images/period-images/abstract-expressionism-arshile-gorky-1944.webp",
        answers: [
            { text: 'Abstract Expressionism', correct: true },
            { text: 'Contemporary Art', correct: false },
            { text: 'Pop Art', correct: false },
            { text: 'Impressionism', correct: false }
        ]
    },
    {
        question: "Jackson Pollock, Full Fathom Five, 1947",
        imageUrl: "assets/images/period-images/abstract-expressionism-jackson-pollock-1947.webp",
        answers: [
            { text: 'Realism', correct: false },
            { text: 'Movement Art', correct: false },
            { text: 'Dada', correct: false },
            { text: 'Abstract Expressionism', correct: true }
        ]
    },
    {
        question: "Alexandre Bigot, Breezeway of the Castle Beranger",
        imageUrl: "assets/images/period-images/art-noveau-béranger-alexandre-bigot.webp",
        answers: [
            { text: 'Art Deco', correct: false },
            { text: 'Art Noveau', correct: true },
            { text: 'Modernism', correct: false },
            { text: 'Bauhaus', correct: false }
        ]
    },
    {
        question: "Margaret MacDonald, The May Queen, 1900",
        imageUrl: "assets/images/period-images/art-noveau-margaret-macdonald-1900.webp",
        answers: [
            { text: 'Pop Art', correct: false },
            { text: 'Art Noveau', correct: true },
            { text: 'Surrealism', correct: false },
            { text: 'Lineism', correct: false }
        ]
    },
    {
        question: "George Braque, The Violin and the Candlestick, 1910",
        imageUrl: "assets/images/period-images/cubism-georges-braque-1910.webp",
        answers: [
            { text: 'Cubism', correct: true },
            { text: 'Fauvism', correct: false },
            { text: 'Futurism', correct: false },
            { text: 'Realism', correct: false }
        ]
    },
    {
        question: "Sophie Taeuber Arp, Dada composition, 1920",
        imageUrl: "assets/images/period-images/dada-sophie-taeuber-arp-1920.webp",
        answers: [
            { text: 'Nunu', correct: false },
            { text: 'Dada', correct: true },
            { text: 'Expressionism', correct: false },
            { text: 'Abstract Art', correct: false }
        ]
    },
    {
        question: "Egon Schiele, Self-Portrait",
        imageUrl: "assets/images/period-images/expressionism-egon-schiele.webp",
        answers: [
            { text: 'Impressionism', correct: false },
            { text: 'Romanticism', correct: false },
            { text: 'Expressionism', correct: true },
            { text: 'Baroque', correct: false }
        ]
    },
    {
        question: "Henri Matisse, Luxe Calme Volupte, 1904",
        imageUrl: "assets/images/period-images/fauvism-henr-matisse-1904.webp",
        answers: [
            { text: 'Fauvism', correct: true },
            { text: 'Rationalism', correct: false },
            { text: 'Expresionism', correct: false },
            { text: 'Classicism', correct: false }
        ]
    },
    {
        question: "Mantegna, The Ceiling of the Marriage Chamber",
        imageUrl: "assets/images/period-images/Mantegna.webp",
        answers: [
            { text: 'Gothic Art', correct: false },
            { text: 'Dutch Renaissance', correct: false },
            { text: 'Rococo', correct: false },
            { text: 'Renaissance', correct: true }
        ]
    },
    {
        question: "Roy Lichtenstein, The Drowning Girl, 1963",
        imageUrl: "assets/images/period-images/pop-art-roy-lichtenstein1963.webp",
        answers: [
            { text: 'Pop Art', correct: true },
            { text: 'Appropriation Art', correct: false },
            { text: 'Performance Art', correct: false },
            { text: 'Collage Art', correct: false }
        ]
    },
    {
        question: "Hilliard Pelican, Portrain of Queen Elizabeth I",
        imageUrl: "assets/images/period-images/renaissance-hilliard-pelican.webp",
        answers: [
            { text: 'Baroque', correct: false },
            { text: 'Surrealism', correct: false },
            { text: 'Renaissance', correct: true },
            { text: 'Pointilism', correct: false }
        ]
    },
    {
        question: "Francois Boucher, Madame Pompadour, 1756",
        imageUrl: "assets/images/period-images/rococo-françois-boucher-1756.webp",
        answers: [
            { text: 'Baroque', correct: false },
            { text: 'Rococo', correct: true },
            { text: 'History Art', correct: false },
            { text: 'Neo-Realism', correct: false }
        ]
    },
    {
        question: "Louise Lebrun, Marie Antoinette, 1783",
        imageUrl: "assets/images/period-images/rococo-louise-lebrun-1783.webp",
        answers: [
            { text: 'French Classicism', correct: false },
            { text: 'Realism', correct: false },
            { text: 'Rococo', correct: true },
            { text: 'Baroque', correct: false }
        ]
    },
    {
        question: "Natalia Foncharova, The Cysclist, 1913",
        imageUrl: "assets/images/period-images/futurism-natalia-goncharova-1913.webp",
        answers: [
            { text: 'Surrealism', correct: false },
            { text: 'Dada', correct: false },
            { text: 'Movement Art', correct: false },
            { text: 'Futurism', correct: true }
        ]
    },
    {
        question: "Dante Rossetti, Proserpine, 1874",
        imageUrl: "assets/images/period-images/pre-raphaelites-dante-rossetti-proserpine-1874-cropped.webp",
        answers: [
            { text: 'Victorian Art', correct: false },
            { text: 'Impressionism', correct: false },
            { text: 'Pre-Raphaelites', correct: true },
            { text: 'Neo-Classicism', correct: false }
        ]
    },
    {
        question: "Giacomo Balla, Dynamism of a Dog on a Leash, 1912",
        imageUrl: "assets/images/period-images/futurism-giacomo-balla-1912.webp",
        answers: [
            { text: 'Futurism', correct: true },
            { text: 'Stoicism', correct: false },
            { text: 'Dynamism', correct: false },
            { text: 'Realism', correct: false }
        ]
    },
    {
        question: "Hector Guimard, Beranger Castle",
        imageUrl: "assets/images/period-images/art-noveau-hector-guimard.webp",
        answers: [
            { text: 'Futurism', correct: false },
            { text: 'Art Noveau', correct: true },
            { text: 'Surrealism', correct: false },
            { text: 'Rococo', correct: false }
        ]
    },
    {
        question: "Pablo Picaso, A Girl with a Mandolin, 1910",
        imageUrl: "assets/images/period-images/cubism-picaso-1910.webp",
        answers: [
            { text: 'Cubism', correct: true },
            { text: 'Fauvism', correct: false },
            { text: 'Post-Impressionism', correct: false },
            { text: 'Reactionism', correct: false }
        ]
    },
    {
        question: "Edvard Munch, The Scream, 1893",
        imageUrl: "assets/images/period-images/expressionism-edvard-munch-1893.webp",
        answers: [
            { text: 'Abstract Expressionism', correct: false },
            { text: 'Expressionism', correct: true },
            { text: 'Contemporary Art', correct: false },
            { text: 'Pop Art', correct: false }
        ]
    },
    {
        question: "Richard Hamilton, Collage, 1956",
        imageUrl: "assets/images/period-images/pop-art-richard-hamilton-1956.webp",
        answers: [
            { text: 'Performance Art', correct: false },
            { text: 'Surrealism', correct: false },
            { text: 'Futurism', correct: false },
            { text: 'Pop Art', correct: true }
        ]
    }
];