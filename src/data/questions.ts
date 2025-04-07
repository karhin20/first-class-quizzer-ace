
export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  questions: Question[];
}

export const subjects: Subject[] = [
  {
    id: "integrated-science",
    name: "Integrated Science",
    description: "Physics, Chemistry, Biology and Agricultural Science",
    icon: "beaker",
    questions: [
      {
        id: 1,
        text: "Bacteria belong to Kingdom",
        options: [
          { id: "A", text: "Animalia" },
          { id: "B", text: "Fungi" },
          { id: "C", text: "Prokaryotae" },
          { id: "D", text: "Proctoctista" }
        ],
        correctAnswer: "C"
      },
      {
        id: 2,
        text: "In a simple electric circuit the device that regulates the current flow is the",
        options: [
          { id: "A", text: "ammeter" },
          { id: "B", text: "amplifier" },
          { id: "C", text: "resistor" },
          { id: "D", text: "rheostat" }
        ],
        correctAnswer: "C"
      },
      {
        id: 3,
        text: "Which of the following organisms is a producer?",
        options: [
          { id: "A", text: "grasshopper" },
          { id: "B", text: "Spirogyra" },
          { id: "C", text: "Rhizopus" },
          { id: "D", text: "Virus" }
        ],
        correctAnswer: "B"
      },
      {
        id: 4,
        text: "Examples of hydrocarbons belonging to alkane series are",
        options: [
          { id: "A", text: "C2H6 and C3H8" },
          { id: "B", text: "C2H2 and C3H6" },
          { id: "C", text: "C2H8 and C3H8" },
          { id: "D", text: "C4H10 and C2H4" }
        ],
        correctAnswer: "A"
      },
      {
        id: 5,
        text: "Green manure is beneficial to the soil if the plant material is",
        options: [
          { id: "A", text: "free from pests" },
          { id: "B", text: "grown with fertilizer" },
          { id: "C", text: "ploughed into the moist soil just before flowering" },
          { id: "D", text: "ploughed into the moist soil after harvesting" }
        ],
        correctAnswer: "C"
      },
      {
        id: 6,
        text: "Lactic acid can be found in",
        options: [
          { id: "A", text: "grape" },
          { id: "B", text: "orange" },
          { id: "C", text: "palm oil" },
          { id: "D", text: "sour milk" }
        ],
        correctAnswer: "D"
      },
      {
        id: 7,
        text: "Evaporation of liquid increases with",
        options: [
          { id: "A", text: "decrease in density of the liquid" },
          { id: "B", text: "increase in atmospheric pressure" },
          { id: "C", text: "decrease in the exposed surface area" },
          { id: "D", text: "decrease in temperature" }
        ],
        correctAnswer: "A"
      },
      {
        id: 8,
        text: "Which of the following processes is a physical change?",
        options: [
          { id: "A", text: "Electrolysis of aqueous sodium chloride" },
          { id: "B", text: "Fermentation of palm wine" },
          { id: "C", text: "Separation of sand from water" },
          { id: "D", text: "Burning of magnesium ribbon in air" }
        ],
        correctAnswer: "C"
      },
      {
        id: 9,
        text: "Soil conservation can be achieved through",
        options: [
          { id: "A", text: "agroforestry" },
          { id: "B", text: "intercropping" },
          { id: "C", text: "mixed cropping" },
          { id: "D", text: "introduction of green legumes" }
        ],
        correctAnswer: "A"
      },
      {
        id: 10,
        text: "A laterally inverted image is one which is",
        options: [
          { id: "A", text: "real and formed in front of the mirror" },
          { id: "B", text: "real and formed behind the mirror" },
          { id: "C", text: "virtual and formed behind the mirror" },
          { id: "D", text: "virtual and formed in front of the mirror" }
        ],
        correctAnswer: "C"
      },
      {
        id: 11,
        text: "Killing water snails with molluscides results in the control of",
        options: [
          { id: "A", text: "ascariasis" },
          { id: "B", text: "onchocerciasis" },
          { id: "C", text: "shistosomiasis" },
          { id: "D", text: "trypanosomiasis" }
        ],
        correctAnswer: "C"
      },
      {
        id: 12,
        text: "The vacuum between the two walls in a vacuum flask minimizes heat transfer by\nI. conduction\nII. convection\nIII. radiation\nWhich of the above statements is/are correct?",
        options: [
          { id: "A", text: "I only" },
          { id: "B", text: "I and II only" },
          { id: "C", text: "II and III only" },
          { id: "D", text: "I, II and III" }
        ],
        correctAnswer: "B"
      },
      {
        id: 13,
        text: "An atom of element X is made up of 17 electrons and 18 neutrons. What is the mass number of the element?",
        options: [
          { id: "A", text: "17" },
          { id: "B", text: "18" },
          { id: "C", text: "34" },
          { id: "D", text: "35" }
        ],
        correctAnswer: "D"
      },
      {
        id: 14,
        text: "Biodiversity is defined as",
        options: [
          { id: "A", text: "study of living things" },
          { id: "B", text: "variation in forms of life" },
          { id: "C", text: "classification of living things" },
          { id: "D", text: "living and non-living things in habitats" }
        ],
        correctAnswer: "B"
      },
      {
        id: 15,
        text: "Which of the following methods is/are used in making magnets?\nI. Single touch\nII. Double touch\nIII. Electrical",
        options: [
          { id: "A", text: "I only" },
          { id: "B", text: "I and III only" },
          { id: "C", text: "II and III only" },
          { id: "D", text: "I, II and III" }
        ],
        correctAnswer: "D"
      },
      {
        id: 16,
        text: "The most effective method of reducing erosion on hilly lands is by",
        options: [
          { id: "A", text: "terracing" },
          { id: "B", text: "applying organic manure" },
          { id: "C", text: "creating wind breaks" },
          { id: "D", text: "erection of barriers" }
        ],
        correctAnswer: "A"
      },
      {
        id: 17,
        text: "Which of the following features does not adapt a leaf of a flowering plant for photosynthesis?",
        options: [
          { id: "A", text: "Being thin in shape" },
          { id: "B", text: "Being flat and broad" },
          { id: "C", text: "Possession of starch" },
          { id: "D", text: "Possession of numerous stomata" }
        ],
        correctAnswer: "C"
      },
      {
        id: 18,
        text: "Steel is preferred to pure iron for constructional work because",
        options: [
          { id: "A", text: "steel is cheaper than iron" },
          { id: "B", text: "steel is harder and stronger than iron" },
          { id: "C", text: "iron poses more health hazard than steel" },
          { id: "D", text: "steel is more shiny than iron" }
        ],
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Algebra, Geometry, Arithmetic and Statistics",
    icon: "calculator",
    questions: []
  },
  {
    id: "english",
    name: "English Language",
    description: "Grammar, Comprehension, Vocabulary and Literature",
    icon: "book-open",
    questions: []
  }
];

// Helper function to get a subject by ID
export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(subject => subject.id === id);
};
