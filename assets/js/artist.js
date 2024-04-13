// Images sourced from Wikipedia.org
// Questions for the artist category 

const artistQuestions = [
    {
        question: "School of Athens, 1509-1511",
        imageUrl: "assets/images/artist-images/raphael.webp",
        answers: [
            { text: 'Raphael', correct: true },
            { text: 'Michelangelo', correct: false },
            { text: 'Sandro Botticelli', correct: false },
            { text: 'Leonardo Da Vinci', correct: false }
        ]
    },
    {
        question: "Christ, c. 1600",
        imageUrl: "assets/images/artist-images/el-greco.webp",
        answers: [
            { text: 'Francisco Goya', correct: false },
            { text: 'Jacques-Louis David', correct: false },
            { text: 'Caravaggio', correct: false },
            { text: 'El Greco', correct: true }
        ]
    },
    {
        question: "Self-Portrait, c. 1940",
        imageUrl: "assets/images/artist-images/frida-kahlo.webp",
        answers: [
            { text: 'Pablo Picasso', correct: false },
            { text: 'Frida Kahlo', correct: true },
            { text: 'Edgar Degas', correct: false },
            { text: 'Berthe Morrisot', correct: false }
        ]
    },
    {
        question: "David, 1501-1504",
        imageUrl: "assets/images/artist-images/michelangelo-david.webp",
        answers: [
            { text: 'Auguste Rodin', correct: false },
            { text: 'Michelangelo', correct: true },
            { text: 'Gian Lorenzo Berninni', correct: false },
            { text: 'Henry Moore', correct: false }
        ]
    },
    {
        question: "Mona Lisa, 1503",
        imageUrl: "assets/images/artist-images/mona-lisa.webp",
        answers: [
            { text: 'Leonardo Da Vinci', correct: true },
            { text: 'Titian', correct: false },
            { text: 'Albrecht Durer', correct: false },
            { text: 'Raphael', correct: false }
        ]
    },
    {
        question: "Impression Sunrise, 1872",
        imageUrl: "assets/images/artist-images/monet-impression-sunrise.webp",
        answers: [
            { text: 'Edouard Manet', correct: false },
            { text: 'Claude Monet', correct: true },
            { text: 'Pierre-Auguste Renoir', correct: false },
            { text: 'Edgar Degas', correct: false }
        ]
    },
    {
        question: "Self-Portrait, 1669",
        imageUrl: "assets/images/artist-images/rembrandt-self-portrait1.webp",
        answers: [
            { text: 'Peter Paul Rubens', correct: false },
            { text: 'Claude Poussin', correct: false },
            { text: 'Rembrandt Van Rijn', correct: true },
            { text: 'Frans Hals', correct: false }
        ]
    },
    {
        question: "Diana and Actaeon, 1556-1559",
        imageUrl: "assets/images/artist-images/titian-diana-actaeon.webp",
        answers: [
            { text: 'Titian', correct: true },
            { text: 'Sandro Botticelli', correct: false },
            { text: 'Giorgio Vasari', correct: false },
            { text: 'Paolo Uccello', correct: false }
        ]
    },
    {
        question: "Starry Night, 1889",
        imageUrl: "assets/images/artist-images/vangogh-stary-night.webp",
        answers: [
            { text: 'Camille Pissarro', correct: false },
            { text: 'Henri de Toulouse-Lautrec', correct: false },
            { text: 'Paul Cezanne', correct: false },
            { text: 'Van Gogh', correct: true }
        ]
    },
    {
        question: "Girl with a Pearl Earring, 1665",
        imageUrl: "assets/images/artist-images/vermeer-girl-with-pearl-earring.webp",
        answers: [
            { text: 'Johannes Vermeer', correct: true },
            { text: 'Jan Steen', correct: false },
            { text: 'Gerrit van Honthorst', correct: false },
            { text: 'Frans Hals', correct: false }
        ]
    },
    {
        question: "Number 1A, 1948",
        imageUrl: "assets/images/artist-images/jackson-pollock.webp",
        answers: [
            { text: 'Max Ernst', correct: false },
            { text: 'Andre Mason', correct: false },
            { text: 'Jackson Pollock', correct: true },
            { text: 'Mark Rothko', correct: false }
        ]
    },
    {
        question: "American Gothic, 1930",
        imageUrl: "assets/images/artist-images/grant-wood-american-gothic.webp",
        answers: [
            { text: 'George Bellows', correct: false },
            { text: 'Grant Wood', correct: true },
            { text: 'Marsden Hartley', correct: false },
            { text: 'Thomas Hart Benton', correct: false }
        ]
    },
    {
        question: "The Dance, 1910",
        imageUrl: "assets/images/artist-images/henri-matisse-the-danse.webp",
        answers: [
            { text: 'Pablo Picasso', correct: false },
            { text: 'George Braque', correct: false },
            { text: 'Henri Matisse', correct: true },
            { text: 'Paul Cezanne', correct: false }
        ]
    },
    {
        question: "Montagne Sainte Victoire, 1904-1906",
        imageUrl: "assets/images/artist-images/paul-cezanne-montagne-sainte-victoire.webp",
        answers: [
            { text: 'George Bellows', correct: false },
            { text: 'Francisco de Goya', correct: false },
            { text: 'Gustave Courbet', correct: false },
            { text: 'Paul Cezanne', correct: true }
        ]
    },
    {
        question: "The Thinker, 1904",
        imageUrl: "assets/images/artist-images/auguste-robin-the-thinker.webp",
        answers: [
            { text: 'Jeff Koons', correct: false },
            { text: 'Constantin Brancusi', correct: false },
            { text: 'Auguste Rodin', correct: true },
            { text: 'Donatello', correct: false }
        ]
    },
    {
        question: "Nighthawks, 1942",
        imageUrl: "assets/images/artist-images/edward-hopper-nighthawks.webp",
        answers: [
            { text: 'Edward Hopper', correct: true },
            { text: 'George Bellows', correct: false },
            { text: 'Grant Wood', correct: false },
            { text: 'Thomas Hart Benton', correct: false }
        ]
    },
    {
        question: "Red, Blue, Yellow, 1930",
        imageUrl: "assets/images/artist-images/piet-mondrian-mondrian-red-blue-yellow.webp",
        answers: [
            { text: 'Gustav Klimt', correct: false },
            { text: 'Piet Mondrian', correct: true },
            { text: 'Van Gogh', correct: false },
            { text: 'Edgar Degas', correct: false }
        ]
    },
    {
        question: "The Kiss, 1907-1908",
        imageUrl: "assets/images/artist-images/the-kiss-klimt.webp",
        answers: [
            { text: 'Gustav Klimt', correct: true },
            { text: 'Edvard Munch', correct: false },
            { text: 'Wassily Kandinski', correct: false },
            { text: 'Egon Schiele', correct: false }
        ]
    },
    {
        question: "Ecstasy of Saint Theresa, 1647-1652",
        imageUrl: "assets/images/artist-images/bernini-the-ecstasy-of-saint-theresa.webp",
        answers: [
            { text: 'Auguste Rodin', correct: false },
            { text: 'Gian Lorenzo Bernini', correct: true },
            { text: 'Antonio Canova', correct: false },
            { text: 'Donatello', correct: false }
        ]
    },
    {
        question: "Orange Tan, 1954",
        imageUrl: "assets/images/artist-images/rothko-orange-tan-1954.webp",
        answers: [
            { text: 'Jackson Pollock', correct: false },
            { text: 'Arshile Gorky', correct: false },
            { text: 'Richard Pousette-Dart', correct: false },
            { text: 'Mark Rothko', correct: true }
        ]
    }
];
