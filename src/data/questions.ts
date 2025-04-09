
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

export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(subject => subject.id === id);
};

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
    id: "biology",
    name: "Biology",
    description: "Cell Biology, Anatomy, Ecology and Evolution",
    icon: "microscope",
    questions: [
      {
        id: 1,
        text: "The cell membrane is primarily composed of",
        options: [
          { id: "A", text: "Phospholipids" },
          { id: "B", text: "Carbohydrates" },
          { id: "C", text: "Nucleic acids" },
          { id: "D", text: "Simple sugars" }
        ],
        correctAnswer: "A"
      },
      {
        id: 2,
        text: "Mitochondria are often referred to as the powerhouse of the cell because they",
        options: [
          { id: "A", text: "Store genetic information" },
          { id: "B", text: "Produce ATP through cellular respiration" },
          { id: "C", text: "Synthesize proteins" },
          { id: "D", text: "Break down waste materials" }
        ],
        correctAnswer: "B"
      },
      {
        id: 3,
        text: "Which of the following is NOT a function of the cell nucleus?",
        options: [
          { id: "A", text: "Housing DNA" },
          { id: "B", text: "Protein synthesis" },
          { id: "C", text: "Control of cell activities" },
          { id: "D", text: "Production of ribosomes" }
        ],
        correctAnswer: "B"
      },
      {
        id: 4,
        text: "In the process of photosynthesis, the energy from sunlight is converted into",
        options: [
          { id: "A", text: "Mechanical energy" },
          { id: "B", text: "Heat energy" },
          { id: "C", text: "Chemical energy" },
          { id: "D", text: "Electrical energy" }
        ],
        correctAnswer: "C"
      },
      {
        id: 5,
        text: "The Krebs cycle (citric acid cycle) occurs in the",
        options: [
          { id: "A", text: "Mitochondrial matrix" },
          { id: "B", text: "Nucleus" },
          { id: "C", text: "Endoplasmic reticulum" },
          { id: "D", text: "Golgi apparatus" }
        ],
        correctAnswer: "A"
      },
      {
        id: 6,
        text: "The presence of which organelle distinguishes plant cells from animal cells?",
        options: [
          { id: "A", text: "Mitochondria" },
          { id: "B", text: "Golgi apparatus" },
          { id: "C", text: "Chloroplasts" },
          { id: "D", text: "Nucleus" }
        ],
        correctAnswer: "C"
      },
      {
        id: 7,
        text: "Which of the following is responsible for protein synthesis in a cell?",
        options: [
          { id: "A", text: "Lysosome" },
          { id: "B", text: "Ribosome" },
          { id: "C", text: "Vacuole" },
          { id: "D", text: "Peroxisome" }
        ],
        correctAnswer: "B"
      },
      {
        id: 8,
        text: "Cellular respiration is the process by which",
        options: [
          { id: "A", text: "Glucose is broken down to release energy" },
          { id: "B", text: "Carbon dioxide is converted to oxygen" },
          { id: "C", text: "Oxygen is converted to carbon dioxide" },
          { id: "D", text: "Energy is used to build glucose molecules" }
        ],
        correctAnswer: "A"
      },
      {
        id: 9,
        text: "Which of the following is NOT part of a eukaryotic cell?",
        options: [
          { id: "A", text: "Nuclear membrane" },
          { id: "B", text: "Ribosome" },
          { id: "C", text: "Nucleoid region" },
          { id: "D", text: "Cell membrane" }
        ],
        correctAnswer: "C"
      },
      {
        id: 10,
        text: "The process of DNA replication occurs during which phase of the cell cycle?",
        options: [
          { id: "A", text: "G1 phase" },
          { id: "B", text: "S phase" },
          { id: "C", text: "G2 phase" },
          { id: "D", text: "M phase" }
        ],
        correctAnswer: "B"
      },
      {
        id: 11,
        text: "Which of the following cell structures is responsible for sorting and packaging proteins?",
        options: [
          { id: "A", text: "Endoplasmic reticulum" },
          { id: "B", text: "Mitochondria" },
          { id: "C", text: "Golgi apparatus" },
          { id: "D", text: "Lysosome" }
        ],
        correctAnswer: "C"
      },
      {
        id: 12,
        text: "Which of the following is NOT a component of the cell theory?",
        options: [
          { id: "A", text: "All living things are made up of cells" },
          { id: "B", text: "Cells arise only from pre-existing cells" },
          { id: "C", text: "The cell is the basic unit of life" },
          { id: "D", text: "All cells contain DNA in a nucleus" }
        ],
        correctAnswer: "D"
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
    questions: [
      {
        id: 1,
        text: "Choose the one that is most nearly opposite in meaning to the <em>audacity</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nObi's family is known for their audacity, so one is surprised at his _____",
        options: [
          { id: "A", text: "Cowardice" },
          { id: "B", text: "Irritability" },
          { id: "C", text: "Moodiness" },
          { id: "D", text: "Insolence" }
        ],
        correctAnswer: "A"
      },
      {
        id: 2,
        text: "Choose the one that is most nearly opposite in meaning to the <em>careless</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nBayo is careless in his ways while Tayo is",
        options: [
          { id: "A", text: "Lovable" },
          { id: "B", text: "Meticulous" },
          { id: "C", text: "Difficult" },
          { id: "D", text: "Reserved" }
        ],
        correctAnswer: "B"
      },
      {
        id: 3,
        text: "Choose the one that is most nearly opposite in meaning to the <em>stringent</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nIn this country, the law against armed robbery is stringent whereas that against smoking in public places is _____",
        options: [
          { id: "A", text: "Accurate" },
          { id: "B", text: "Complex" },
          { id: "C", text: "Lax" },
          { id: "D", text: "Easy" }
        ],
        correctAnswer: "C"
      },
      {
        id: 4,
        text: "Choose the one that is most nearly opposite in meaning to the <em>facility</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nThe purpose of education is to facility progress, not to _____ it",
        options: [
          { id: "A", text: "Prevent" },
          { id: "B", text: "Impede" },
          { id: "C", text: "Stampede" },
          { id: "D", text: "Restrain" }
        ],
        correctAnswer: "D"
      },
      {
        id: 5,
        text: "Choose the one that is most nearly opposite in meaning to the <em>temporal</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nThese days many people concentrate on temporal things to the detriment of the _____",
        options: [
          { id: "A", text: "Tangible" },
          { id: "B", text: "Durable" },
          { id: "C", text: "Unchanging" },
          { id: "D", text: "Spiritual" }
        ],
        correctAnswer: "D"
      },
      {
        id: 6,
        text: "Choose the one that is most nearly opposite in meaning to the <em>liberal</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nWhile your parents are _____, mine are liberal in their views",
        options: [
          { id: "A", text: "Strict" },
          { id: "B", text: "Intimidating" },
          { id: "C", text: "Conservative" },
          { id: "D", text: "Discerning" }
        ],
        correctAnswer: "C"
      },
      {
        id: 7,
        text: "Choose the one that is most nearly opposite in meaning to the <em>direct</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nThe judge expected direct answers but the accused was _____",
        options: [
          { id: "A", text: "Illusive" },
          { id: "B", text: "Secretive" },
          { id: "C", text: "Delusive" },
          { id: "D", text: "Evasive" }
        ],
        correctAnswer: "D"
      },
      {
        id: 8,
        text: "Choose the one that is most nearly opposite in meaning to the <em>generous</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nKofi is generous whereas his wife is _____",
        options: [
          { id: "A", text: "Sparing" },
          { id: "B", text: "Stingy" },
          { id: "C", text: "Unkind" },
          { id: "D", text: "Harsh" }
        ],
        correctAnswer: "B"
      },
      {
        id: 9,
        text: "Choose the one that is most nearly opposite in meaning to the <em>uncouth</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nHis manners are uncouth, while his wife's are _____",
        options: [
          { id: "A", text: "Clever" },
          { id: "B", text: "Classic" },
          { id: "C", text: "Refined" },
          { id: "D", text: "Purified" }
        ],
        correctAnswer: "C"
      },
      {
        id: 10,
        text: "Choose the one that is most nearly opposite in meaning to the <em>peak</em> and that will, at the same time, correctly fill the gap in the sentence:\n\nThe peak of Mount Everest is about six miles from its _____",
        options: [
          { id: "A", text: "Base" },
          { id: "B", text: "Depth" },
          { id: "C", text: "Source" },
          { id: "D", text: "Root" }
        ],
        correctAnswer: "A"
      },
      {
        id: 11,
        text: "Choose the words that best complete each of the following sentences:\n\nThe recent floods in some countries have _____ many lives",
        options: [
          { id: "A", text: "Claimed" },
          { id: "B", text: "Drowned" },
          { id: "C", text: "Buried" },
          { id: "D", text: "Injured" }
        ],
        correctAnswer: "A"
      },
      {
        id: 12,
        text: "Choose the words that best complete each of the following sentences:\n\nHe does not smoke so the gift of an ashtray will not be quite _____",
        options: [
          { id: "A", text: "Admirable" },
          { id: "B", text: "Applicable" },
          { id: "C", text: "Appropriate" },
          { id: "D", text: "Attractive" }
        ],
        correctAnswer: "C"
      },
      {
        id: 13,
        text: "Choose the words that best complete each of the following sentences:\n\nThe reviewer did an excellent job at the book _____",
        options: [
          { id: "A", text: "Launch" },
          { id: "B", text: "Premiere" },
          { id: "C", text: "Session" },
          { id: "D", text: "Briefing" }
        ],
        correctAnswer: "A"
      },
      {
        id: 14,
        text: "Choose the words that best complete each of the following sentences:\n\nThe governor filed an _____ against the ruling of the tribunal",
        options: [
          { id: "A", text: "Injunction" },
          { id: "B", text: "Objection" },
          { id: "C", text: "Application" },
          { id: "D", text: "Appeal" }
        ],
        correctAnswer: "D"
      },
      {
        id: 15,
        text: "Choose the words that best complete each of the following sentences:\n\nAt the terminus, all passengers on the train will have to _____",
        options: [
          { id: "A", text: "Alight" },
          { id: "B", text: "Disembark" },
          { id: "C", text: "Descend" },
          { id: "D", text: "Dismount" }
        ],
        correctAnswer: "B"
      },
      {
        id: 16,
        text: "Choose the words that best complete each of the following sentences:\n\nReading the _____ of the famous",
        options: [
          { id: "A", text: "Memoirs" },
          { id: "B", text: "Chronicles" },
          { id: "C", text: "Life" },
          { id: "D", text: "Monument" }
        ],
        correctAnswer: "A"
      },
      {
        id: 17,
        text: "Choose the words that best complete each of the following sentences:\n\nThe smaller boys had always drawn back in fear when the bully raised a fist, but this time they did not _____",
        options: [
          { id: "A", text: "Advance" },
          { id: "B", text: "Agree" },
          { id: "C", text: "Retaliate" },
          { id: "D", text: "Recoil" }
        ],
        correctAnswer: "D"
      },
      {
        id: 18,
        text: "Choose the words that best complete each of the following sentences:\n\nThe old man prayed for the _____ of his sins before he died",
        options: [
          { id: "A", text: "Omission" },
          { id: "B", text: "Commission" },
          { id: "C", text: "Permission" },
          { id: "D", text: "Remission" }
        ],
        correctAnswer: "D"
      },
      {
        id: 19,
        text: "Choose the words that best complete each of the following sentences:\n\nInflation has caused the cost of goods to _____",
        options: [
          { id: "A", text: "Escalate" },
          { id: "B", text: "Ascend" },
          { id: "C", text: "Intensify" },
          { id: "D", text: "Progress" }
        ],
        correctAnswer: "A"
      },
      {
        id: 20,
        text: "Choose the words that best complete each of the following sentences:\n\nThe economy of the country has remained _____ despite the crisis",
        options: [
          { id: "A", text: "Strong" },
          { id: "B", text: "Realistic" },
          { id: "C", text: "Tough" },
          { id: "D", text: "Firm" }
        ],
        correctAnswer: "A"
      },
      {
        id: 21,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nThe principal raised eyebrows at the student's explanation. This means that the principal",
        options: [
          { id: "A", text: "Was unhappy about the explanation" },
          { id: "B", text: "Rejected the explanation" },
          { id: "C", text: "Considered the explanation" },
          { id: "D", text: "Was surprised by the explanation" }
        ],
        correctAnswer: "D"
      },
      {
        id: 22,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nMary made a clean breast of everything. This means that Mary",
        options: [
          { id: "A", text: "Won everyone over" },
          { id: "B", text: "Told the whole truth" },
          { id: "C", text: "Did everything efficiently" },
          { id: "D", text: "Changed the way things were done" }
        ],
        correctAnswer: "B"
      },
      {
        id: 23,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nHad it not rained, I would have visited you. This means that",
        options: [
          { id: "A", text: "I visited you even though it rained" },
          { id: "B", text: "It did not rain and so I visited you" },
          { id: "C", text: "It rained so I did not visit you" },
          { id: "D", text: "Because it did not rain, I visited you" }
        ],
        correctAnswer: "C"
      },
      {
        id: 24,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nI hadn't finished talking to Halima, when she snapped my head off. This means that she",
        options: [
          { id: "A", text: "Gave me a sharp slap" },
          { id: "B", text: "Rudely interrupted me" },
          { id: "C", text: "Hissed at me" },
          { id: "D", text: "Ordered me to stop talking" }
        ],
        correctAnswer: "B"
      },
      {
        id: 25,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nFranca's behaviour towards Edward leaves much to be desired. This means that Franca's behaviour was",
        options: [
          { id: "A", text: "Unsatisfactory" },
          { id: "B", text: "Appreciated" },
          { id: "C", text: "Commendable" },
          { id: "D", text: "Unexpected" }
        ],
        correctAnswer: "A"
      },
      {
        id: 26,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nThe teacher truly had his heart in the right place. This means that he was",
        options: [
          { id: "A", text: "Kind and considerate" },
          { id: "B", text: "Sharp and thorough" },
          { id: "C", text: "Simple and modest" },
          { id: "D", text: "Focused and direct" }
        ],
        correctAnswer: "A"
      },
      {
        id: 27,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nOnly teachers could afford a car. This means that",
        options: [
          { id: "A", text: "Teachers could afford a car and nothing else" },
          { id: "B", text: "Teachers and nobody else could afford a car" },
          { id: "C", text: "Teachers and others could afford a car" },
          { id: "D", text: "Few teachers could afford a car" }
        ],
        correctAnswer: "B"
      },
      {
        id: 28,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nThe night watchman was given the marching orders because of his negligence. This means that he was",
        options: [
          { id: "A", text: "Promoted" },
          { id: "B", text: "Dismissed" },
          { id: "C", text: "Counselled" },
          { id: "D", text: "Suspended" }
        ],
        correctAnswer: "B"
      },
      {
        id: 29,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nMy friend is as dull as ditchwater. This means that my friend is",
        options: [
          { id: "A", text: "Dark in complexion" },
          { id: "B", text: "Extremely boring" },
          { id: "C", text: "Not intelligent" },
          { id: "D", text: "Not a trouble maker" }
        ],
        correctAnswer: "B"
      },
      {
        id: 30,
        text: "Choose the interpretation that is most appropriate for each sentence:\n\nThe director sees Tim as the joker in the pack. This means that the director considers Tim to be",
        options: [
          { id: "A", text: "Unpredictable" },
          { id: "B", text: "Humourous" },
          { id: "C", text: "Nonchallant" },
          { id: "D", text: "Unimportant" }
        ],
        correctAnswer: "A"
      },
      {
        id: 31,
        text: "Choose the word or group of words that is nearest in meaning to the <em>strategic</em> as it is used in the sentence:\n\nThe president of the student union said it was strategic to boycott classes to press home their demands",
        options: [
          { id: "A", text: "Acceptable" },
          { id: "B", text: "Ethical" },
          { id: "C", text: "Practical" },
          { id: "D", text: "Tactical" }
        ],
        correctAnswer: "D"
      },
      {
        id: 32,
        text: "Choose the word or group of words that is nearest in meaning to the <em>proscription</em> as it is used in the sentence:\n\nThe proscription of the political parties was one of the steps taken by the military",
        options: [
          { id: "A", text: "Launching" },
          { id: "B", text: "Expulsion" },
          { id: "C", text: "Banning" },
          { id: "D", text: "Removal" }
        ],
        correctAnswer: "C"
      },
      {
        id: 33,
        text: "Choose the word or group of words that is nearest in meaning to the <em>frustrating</em> as it is used in the sentence:\n\nFarmers sometimes go through the frustrating experience of having to watch their produce rot",
        options: [
          { id: "A", text: "Disheartening" },
          { id: "B", text: "Dismaying" },
          { id: "C", text: "Annoying" },
          { id: "D", text: "Frightening" }
        ],
        correctAnswer: "C"
      },
      {
        id: 34,
        text: "Choose the word or group of words that is nearest in meaning to the <em>stunned</em> as it is used in the sentence:\n\nThe acrobatic displays left the spectators stunned",
        options: [
          { id: "A", text: "Amused" },
          { id: "B", text: "Enticed" },
          { id: "C", text: "Astonished" },
          { id: "D", text: "Elated" }
        ],
        correctAnswer: "C"
      },
      {
        id: 35,
        text: "Choose the word or group of words that is nearest in meaning to the <em>resplendent</em> as it is used in the sentence:\n\nBinetou looked quite resplendent in that red dress",
        options: [
          { id: "A", text: "Expensive" },
          { id: "B", text: "Stunning" },
          { id: "C", text: "Respectable" },
          { id: "D", text: "Conspicuous" }
        ],
        correctAnswer: "B"
      },
      {
        id: 36,
        text: "Choose the word or group of words that is nearest in meaning to the <em>mundane</em> as it is used in the sentence:\n\nIt is foolish to depend entirely on mundane things",
        options: [
          { id: "A", text: "Imported" },
          { id: "B", text: "Material" },
          { id: "C", text: "Attractive" },
          { id: "D", text: "Expensive" }
        ],
        correctAnswer: "B"
      },
      {
        id: 37,
        text: "Choose the word or group of words that is nearest in meaning to the <em>pragmatic</em> as it is used in the sentence:\n\nOnly a pragmatic approach will solve this problem",
        options: [
          { id: "A", text: "Constant" },
          { id: "B", text: "Careful" },
          { id: "C", text: "Practical" },
          { id: "D", text: "Drastic" }
        ],
        correctAnswer: "C"
      },
      {
        id: 38,
        text: "Choose the word or group of words that is nearest in meaning to the <em>rebutted</em> as it is used in the sentence:\n\nThe governor rebutted all the allegations against him",
        options: [
          { id: "A", text: "Rejected" },
          { id: "B", text: "Removed" },
          { id: "C", text: "Revoked" },
          { id: "D", text: "Refuted" }
        ],
        correctAnswer: "D"
      },
      {
        id: 39,
        text: "Choose the word or group of words that is nearest in meaning to the <em>injunction</em> as it is used in the sentence:\n\nHe was jailed for failing to obey the court injunction",
        options: [
          { id: "A", text: "Law" },
          { id: "B", text: "Order" },
          { id: "C", text: "Fine" },
          { id: "D", text: "Proceedings" }
        ],
        correctAnswer: "B"
      },
      {
        id: 40,
        text: "Choose the word or group of words that is nearest in meaning to the <em>alleviation</em> as it is used in the sentence:\n\nThe World Bank made funds available to the government for poverty alleviation",
        options: [
          { id: "A", text: "Reduction" },
          { id: "B", text: "Removal" },
          { id: "C", text: "Termination" },
          { id: "D", text: "Elimination" }
        ],
        correctAnswer: "A"
      },
      {
        id: 41,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe two players protested against the _____",
        options: [
          { id: "A", text: "Fitness twice-weekly practice" },
          { id: "B", text: "Practice fitness twice-weekly" },
          { id: "C", text: "Twice-weekly practice fitness" },
          { id: "D", text: "Twice-weekly fitness practice" }
        ],
        correctAnswer: "D"
      },
      {
        id: 42,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nIf I _____ what actually happened, I would have punished him",
        options: [
          { id: "A", text: "Had heard" },
          { id: "B", text: "have had" },
          { id: "C", text: "Had had" },
          { id: "D", text: "Have heard" }
        ],
        correctAnswer: "A"
      },
      {
        id: 43,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nShe was certainly going to the cinema, _____?",
        options: [
          { id: "A", text: "Isn't she" },
          { id: "B", text: "Isn't it" },
          { id: "C", text: "Wasn't it" },
          { id: "D", text: "Wasn't she" }
        ],
        correctAnswer: "D"
      },
      {
        id: 44,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nTheir _____ house is by the side of the road",
        options: [
          { id: "A", text: "Father-in-law's" },
          { id: "B", text: "Father's-in-law" },
          { id: "C", text: "Fathers'-in-law" },
          { id: "D", text: "Father-in-laws" }
        ],
        correctAnswer: "A"
      },
      {
        id: 45,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nHe _____ his ideas very clearly at meetings",
        options: [
          { id: "A", text: "Puts out" },
          { id: "B", text: "Puts across" },
          { id: "C", text: "Puts away" },
          { id: "D", text: "Puts in" }
        ],
        correctAnswer: "A"
      },
      {
        id: 46,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nRemember to return it to Ruth; ______ hers",
        options: [
          { id: "A", text: "Is" },
          { id: "B", text: "It's" },
          { id: "C", text: "It" },
          { id: "D", text: "Its" }
        ],
        correctAnswer: "B"
      },
      {
        id: 47,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nI want to know your religious _____",
        options: [
          { id: "A", text: "Believe" },
          { id: "B", text: "Believing" },
          { id: "C", text: "Beliefs" },
          { id: "D", text: "Believes" }
        ],
        correctAnswer: "C"
      },
      {
        id: 48,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe student did the assignment, but not _____ the way I had expected",
        options: [
          { id: "A", text: "Just" },
          { id: "B", text: "Quite" },
          { id: "C", text: "Hardly" },
          { id: "D", text: "As" }
        ],
        correctAnswer: "B"
      },
      {
        id: 49,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nBola invited Joe and _____ to the show",
        options: [
          { id: "A", text: "I" },
          { id: "B", text: "Myself" },
          { id: "C", text: "Me" },
          { id: "D", text: "Himself" }
        ],
        correctAnswer: "C"
      },
      {
        id: 50,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nHighlights _____ the events will be televised today",
        options: [
          { id: "A", text: "Of" },
          { id: "B", text: "For" },
          { id: "C", text: "In" },
          { id: "D", text: "On" }
        ],
        correctAnswer: "A"
      }
    ]
  }
];
