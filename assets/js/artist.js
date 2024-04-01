/** The following video was used as a source for creating
 * a list of questions for all categories:
 * https://www.youtube.com/watch?v=riDzcEQbX6k
 */


// Images sourced from Wikipedia.org
// Questions for the artist category 

const artistQuestions = [
    {
        question: "test1",
        imageUrl: "assets/images/raphael.webp",
        answers: [
            { text: 'Raphael', correct: true },
            { text: 'Michelangelo', correct: false },
            { text: 'Sandro Botticelli', correct: false },
            { text: 'Leonardo Da Vinci', correct: false }
        ]
    },
    {
        question: "test2",
        imageUrl: "assets/images/el-greco.webp",
        answers: [
            { text: 'Goya', correct: false },
            { text: 'David', correct: false },
            { text: 'Caravaggio', correct: false },
            { text: 'El Greco', correct: true }
        ]
    },
    {
        question: "test3",
        imageUrl: "assets/images/frida-kahlo.webp",
        answers: [
            { text: 'Pablo Picasso', correct: false },
            { text: 'Frida Kahlo', correct: true },
            { text: 'Edgar Degas', correct: false },
            { text: 'Berthe Morrisot', correct: false }
        ]
    },
    {
        question: "test4",
        imageUrl: "assets/images/michelangelo-david.webp",
        answers: [
            { text: 'Auguste Rodin', correct: false },
            { text: 'Michelangelo', correct: true },
            { text: 'Gian Lorenzo Berninni', correct: false },
            { text: 'Henry Moore', correct: false }
        ]
    },
    {
        question: "test5",
        imageUrl: "assets/images/mona-lisa.webp",
        answers: [
            { text: 'Leonardo Da Vinci', correct: true },
            { text: 'Titian', correct: false },
            { text: 'Albrecht Durer', correct: false },
            { text: 'Raphael', correct: false }
        ]
    },
    {
        question: "test6",
        imageUrl: "assets/images/monet-impression-sunrise.webp",
        answers: [
            { text: 'Edouard Manet', correct: true },
            { text: 'Claude Monet', correct: false },
            { text: 'Pierre-Auguste Renoir', correct: false },
            { text: 'Edgar Degas', correct: false }
        ]
    },
    {
        question: "test7",
        imageUrl: "assets/images/rembrandt-self-portrait.webp",
        answers: [
            { text: 'Rubens', correct: false },
            { text: 'Claude Poussin', correct: false },
            { text: 'Rembrandt Van Rijn', correct: true },
            { text: 'Frans Hals', correct: false }
        ]
    },
    {
        question: "test8",
        imageUrl: "assets/images/titian-diana-actaeon.webp",
        answers: [
            { text: 'Titian', correct: true },
            { text: 'Sandro Botticelli', correct: false },
            { text: 'Giorgio Vasari', correct: false },
            { text: 'Paolo Uccello', correct: false }
        ]
    },
    {
        question: "test9",
        imageUrl: "assets/images/vangogh-stary-night.webp",
        answers: [
            { text: 'Camille Pissarro', correct: false },
            { text: 'Henri de Toulouse-Lautrec', correct: false },
            { text: 'Paul Cezanne', correct: false },
            { text: 'Van Gogh', correct: true }
        ]
    },
    {
        question: "test10",
        imageUrl: "assets/images/vermeer-girl-with-pearl-earring.webp",
        answers: [
            { text: 'Vermeer', correct: true },
            { text: 'Jan Steen', correct: false },
            { text: 'Gerrit van Honthorst', correct: false },
            { text: 'Frans Hals', correct: false }
        ]
    },
    {
        question: "test11",
        imageUrl: "assets/images/jackson-pollock.webp",
        answers: [
            { text: 'Max Ernst', correct: false },
            { text: 'Andre Mason', correct: false },
            { text: 'Jackson Pollock', correct: true },
            { text: 'Mark Rothko', correct: false }
        ]
    },
    {
        question: "test12",
        imageUrl: "assets/images/grant-wood-american-gothic.webp",
        answers: [
            { text: 'George Bellows', correct: false },
            { text: 'Grant Wood', correct: true },
            { text: 'Marsden Hartley', correct: false },
            { text: 'Thomas Hart Benton', correct: false }
        ]
    },
    {
        question: "test13",
        imageUrl: "assets/images/henri-matisse-the-danse.webp",
        answers: [
            { text: 'Pablo Picasso', correct: false },
            { text: 'George Braque', correct: false },
            { text: 'Henri Matisse', correct: true },
            { text: 'Paul Cezanne', correct: false }
        ]
    },
    {
        question: "test14",
        imageUrl: "assets/images/paul-cezanne-montagne-sainte-victoire.webp",
        answers: [
            { text: 'George Bellows', correct: false },
            { text: 'Francisco de Goya', correct: false },
            { text: 'Gustave Courbet', correct: true },
            { text: 'Paul Cezanne', correct: false }
        ]
    },
    {
        question: "test15",
        imageUrl: "assets/images/auguste-robin-the-thinker.webp",
        answers: [
            { text: 'Jeff Koons', correct: false },
            { text: 'Constantin Brancusi', correct: false },
            { text: 'Auguste Rodin', correct: true },
            { text: 'Donatello', correct: false }
        ]
    },
    {
        question: "test16",
        imageUrl: "assets/images/edward-hopper-nighthawks.webp",
        answers: [
            { text: 'Edward Hopper', correct: true },
            { text: 'George Bellows', correct: false },
            { text: 'Grant Wood', correct: false },
            { text: 'Thomas Hart Benton', correct: false }
        ]
    },
    {
        question: "test17",
        imageUrl: "assets/images/piet-mondrian-mondrian-red-blue-yellow.webp",
        answers: [
            { text: 'Gustav Klimt', correct: false },
            { text: 'Piet Mondrian', correct: true },
            { text: 'Van Gogh', correct: false },
            { text: 'Edgar Degas', correct: false }
        ]
    },
    {
        question: "test18",
        imageUrl: "assets/images/the-kiss-klimt.webp",
        answers: [
            { text: 'Gustav Klimt', correct: true },
            { text: 'Edvard Munch', correct: false },
            { text: 'Wassily Kandinski', correct: false },
            { text: 'Egon Schiele', correct: false }
        ]
    },
    {
        question: "test19",
        imageUrl: "assets/images/bernini-the-ecstasy-of-saint-theresa.webp",
        answers: [
            { text: 'Auguste Rodin', correct: false },
            { text: 'Bernini', correct: true },
            { text: 'Antonio Canova', correct: false },
            { text: 'Donatello', correct: false }
        ]
    },
    {
        question: "test20",
        imageUrl: "assets/images/rothko-orange-tan-1954.webp",
        answers: [
            { text: 'Jackson Pollock', correct: false },
            { text: 'Arshile Gorky', correct: false },
            { text: 'Richard Pousette-Dart', correct: false },
            { text: 'Mark Rothko', correct: true }
        ]
    }
]