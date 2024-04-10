// Images sourced from Wikipedia.org
// Questions for the painting category 

const paintingQuestions = [
    {
        question: "Painted by Giovanni Antonio Canal (Canaletto)",
        imageUrl: "assets/images/painting-images/canaletto-entrance-to-the-grand-canal.webp",
        answers: [
            { text: 'The first Westminster Bridge, 1746', correct: false },
            { text: 'The Entrance to the Grand Canal, Venice, c. 1730', correct: true },
            { text: "The Stonemason's Yard, painted c. 1725", correct: false },
            { text: 'View of the Entrance to the Venetian Arsenal, 1732', correct: false }
        ]
    },
    {
        question: "Painted by Michelangelo Merisi da Caravaggio",
        imageUrl: "assets/images/painting-images/caravaggio-calling-saint-matthew.webp",
        answers: [
            { text: 'The Calling of St Matthew, 1599-1600', correct: true },
            { text: 'The Musicians, 1595-1596', correct: false },
            { text: 'The Lute Player (Hermitage version), c. 1600', correct: false },
            { text: 'Judith Beheading Holofernes, 1599-1602', correct: false }
        ]
    },
    {
        question: "Painted by Edgar Degas",
        imageUrl: "assets/images/painting-images/edgar-degas-dance-class.webp",
        answers: [
            { text: 'The Dance Class (La Classe de Danse), 1873-1876', correct: false },
            { text: 'Ballet Rehearsal, 1873', correct: true },
            { text: 'Dancers, 1900', correct: false },
            { text: 'Rehearsal on Stage, 1874', correct: false }
        ]
    },
    {
        question: "Painted by Edouard Manet",
        imageUrl: "assets/images/painting-images/edouard-manet-bar-at-folies-bergère.webp",
        answers: [
            { text: 'Breakfast in the Studio (the Black Jacket), 1868', correct: false },
            { text: "The Luncheon on the Grass (Le déjeuner sur l'herbe), 1863", correct: false },
            { text: 'Music in the Tuileries, 1862', correct: false },
            { text: 'A Bar at the Folies-Bergère, 1882', correct: true }
        ]
    },
    {
        question: "Painted by Eugène Delacroix",
        imageUrl: "assets/images/painting-images/eugène-delacroix-liberty-guiding-people.webp",
        answers: [
            { text: 'Greece on the Ruins of Missolonghi, 1826', correct: false },
            { text: 'The Death of Sardanapalus, 1827', correct: false },
            { text: 'Christ on the Sea of Galilee, 1854', correct: false },
            { text: 'Liberty Leading the People, 1830', correct: true }
        ]
    },
    {
        question: "Painted by Jean-Honoré Fragonard",
        imageUrl: "assets/images/painting-images/fragonard-Swing.webp",
        answers: [
            { text: "Blind Man's Bluff, 1750-1752", correct: false },
            { text: 'The Musical Contest, 1754-55', correct: false },
            { text: 'The Secret Meeting, 1771', correct: false },
            { text: 'The Swing, c. 1767-8', correct: true }
        ]
    },
    {
        question: "Painted by Jean-Honoré Fragonard",
        imageUrl: "assets/images/painting-images/fragonard-the-reader.webp",
        answers: [
            { text: 'The Stolen Kiss, late 1780s', correct: false },
            { text: 'A Young Girl Reading, c. 1770', correct: true },
            { text: 'The Love Letter, 1770', correct: false },
            { text: 'La Gimblette, c. 1770', correct: false }
        ]
    },
    {
        question: "Painted by Thomas Gainsborough",
        imageUrl: "assets/images/painting-images/thomas-gainsborough-mr-mrs-andrews.webp",
        answers: [
            { text: 'Mr and Mrs Andrews, c. 1750', correct: true },
            { text: 'Conversation in a Park, 1746', correct: false },
            { text: 'Portrait of a Woman, 1750', correct: false },
            { text: "Portrait of the Artist's Daughters, 1763-64", correct: false }
        ]
    },
    {
        question: "Painted by Katsushika Hokusai",
        imageUrl: "assets/images/painting-images/hokusai-great-wave.webp",
        answers: [
            { text: 'Tenma Bridge in Setsu Province', correct: false },
            { text: 'Thunderstorm Beneath the Summit', correct: false },
            { text: 'Fine Wind, Clear Morning', correct: false },
            { text: 'The Great Wave off Kanagawa, 1831', correct: true }
        ]
    },
    {
        question: "Painted by Jacques-Louis David",
        imageUrl: "assets/images/painting-images/jacques-louis-davidle-oath-of-horaces.webp",
        answers: [
            { text: 'The Death of Socrates, 1787', correct: false },
            { text: 'Oath of the Horatii, 1784', correct: true },
            { text: 'The Lictors Bring to Brutus the Bodies of His Sons, 1789', correct: false },
            { text: 'The Death of Marat, 1793', correct: false }
        ]
    },
    {
        question: "Painted by Joseph Mallord William Turner",
        imageUrl: "assets/images/painting-images/jwm-turner-fighting-temeraire.webp",
        answers: [
            { text: 'The Fighting Temeraire, 1839', correct: true },
            { text: 'Modern Rome - Campo Vaccino, 1839', correct: false },
            { text: 'Fishermen at Sea', correct: false },
            { text: 'Rockets and Blue Lights to Warn Steamboats of Shoal Water, 1840', correct: false }
        ]
    },
    {
        question: "Painted by Jean-Baptiste André Gautier-Dagoty",
        imageUrl: "assets/images/painting-images/koningin-der-fransen-marie-antoinette.webp",
        answers: [
            { text: 'Marie Antoinette with a Rose, 1783', correct: false },
            { text: 'State Portrait of Marie Antoinette and her children, 1787', correct: false },
            { text: 'Queen Marie Antoinette Wearing Court Grand Habit, c. 1775', correct: true },
            { text: 'Empress Maria Theresia, 1747', correct: false }
        ]
    },
    {
        question: "Painted by Henri Robert Marcel Duchamp",
        imageUrl: "assets/images/painting-images/marcel-duchamp-fountain.webp",
        answers: [
            { text: 'Nude (Study), Sad Young Man on a Train, 1911-12', correct: false },
            { text: 'Nude Descending a Staircase, No. 2, 1912', correct: false },
            { text: 'Fountain, 1917', correct: true },
            { text: 'Étant donnés, 1946-1966', correct: false }
        ]
    },
    {
        question: "Painted by Mary Cassatt",
        imageUrl: "assets/images/painting-images/mary-cassatt-woman-with-pearl-necklace.webp",
        answers: [
            { text: 'The Boating Party, 1893-94', correct: false },
            { text: 'Tea, 1880', correct: false },
            { text: 'Summertime, c. 1894', correct: false },
            { text: 'Woman with a Pearl Necklace in a Loge, 1879', correct: true }
        ]
    },
    {
        question: "Painted by Michelangelo",
        imageUrl: "assets/images/painting-images/michelangelo-creation-of-adam.webp",
        answers: [
            { text: 'The Creation of Adam, c. 1512', correct: true },
            { text: "Pietà, St Peter's Basilica, 1498-1499", correct: false },
            { text: 'David, 1504', correct: true },
            { text: 'The Last Judgment, 1534-1541', correct: false }
        ]
    },
    {
        question: "Painted by Anthony Van Dyck",
        imageUrl: "assets/images/painting-images/van-dyck-charles-i-at-hunt.webp",
        answers: [
            { text: 'The Lomellini family, 1623', correct: false },
            { text: 'Lord John Stuart and his Brother, Lord Bernard Stuart, c. 1638', correct: false },
            { text: 'Charles I in Three Positions, 1635-36)', correct: false },
            { text: 'Charles I at the Hunt, c. 1635', correct: true }
        ]
    },
    {
        question: "Painted by Jan van Eyck",
        imageUrl: "assets/images/painting-images/vaneyck-arnolfini-portrait.webp",
        answers: [
            { text: 'Portrait of Margaret van Eyck, 1439', correct: false },
            { text: 'Annunciation, 1434-1436', correct: false },
            { text: 'Arnolfini Portrait, 1434', correct: true },
            { text: 'Madonna of Chancellor Rolin, c. 1435', correct: false }
        ]
    },
    {
        question: "Painted by Diego Velázquez",
        imageUrl: "assets/images/painting-images/velázquez-el-triunfo-baco.webp",
        answers: [
            { text: 'Old Woman Frying Eggs, 1618', correct: false },
            { text: 'The Triumph of Bacchus, 1628-1629', correct: true },
            { text: 'Portrait of Pope Innocent X, 1650', correct: false },
            { text: 'Las Meninas, 1656', correct: false }
        ]
    },
    {
        question: "Painted by James McNeill Whistler",
        imageUrl: "assets/images/painting-images/whistlers-mother.webp",
        answers: [
            { text: 'Symphony in White, No. 1: The White Girl, 1862', correct: false },
            { text: "Whistler's Mother, 1871", correct: true },
            { text: 'Nocturne: Blue and Gold - Old Battersea Bridge, 1872', correct: false },
            { text: 'Alice Butt, c. 1895', correct: false }
        ]
    },
    {
        question: "Painted by Albrecth Dürer",
        imageUrl: "assets/images/painting-images/dürer-self-portrait-at-28.webp",
        answers: [
            { text: 'Melencolia I, 1514', correct: false },
            { text: 'Portrait of Oswolt Krel, 1499 ', correct: false },
            { text: 'Self-Portrait at 28, 1500', correct: true },
            { text: 'Self-portrait at 26, 1497', correct: false }
        ]
    }
]