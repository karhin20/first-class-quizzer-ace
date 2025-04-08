
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
    questions: [
      {
        id: 1,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nThe posh cars were sandwiched between two _____ ones",
        options: [
          { id: "A", text: "dented" },
          { id: "B", text: "rugged" },
          { id: "C", text: "rickety" },
          { id: "D", text: "modest" }
        ],
        correctAnswer: "D"
      },
      {
        id: 2,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nA trivial issue often becomes _____ when it is not properly handled",
        options: [
          { id: "A", text: "valuable" },
          { id: "B", text: "serious" },
          { id: "C", text: "unbearable" },
          { id: "D", text: "ordinary" }
        ],
        correctAnswer: "B"
      },
      {
        id: 3,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nThe rockstar's stellar performance constrasted sharply with the _____ showing of the amateur group",
        options: [
          { id: "A", text: "Routine" },
          { id: "B", text: "Woeful" },
          { id: "C", text: "Mundane" },
          { id: "D", text: "Awkward" }
        ],
        correctAnswer: "B"
      },
      {
        id: 4,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nTolu was sanctioned for late coming but his friend was _____",
        options: [
          { id: "A", text: "Pardoned" },
          { id: "B", text: "Ignored" },
          { id: "C", text: "Exempted" },
          { id: "D", text: "Released" }
        ],
        correctAnswer: "A"
      },
      {
        id: 5,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nWhile other teachers' support for the action was Victor was _____ dogged",
        options: [
          { id: "A", text: "Declining" },
          { id: "B", text: "Woeful" },
          { id: "C", text: "Disappointing" },
          { id: "D", text: "Wavering" }
        ],
        correctAnswer: "D"
      },
      {
        id: 6,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nSome people are good at terminating other people's projects but are not capable of _____ theirs",
        options: [
          { id: "A", text: "Initiating" },
          { id: "B", text: "Organizing" },
          { id: "C", text: "Executing" },
          { id: "D", text: "Designing" }
        ],
        correctAnswer: "A"
      },
      {
        id: 7,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nThe precarious terraces of the stadium have been transformed into a _____ walkway",
        options: [
          { id: "A", text: "Durable" },
          { id: "B", text: "Secure" },
          { id: "C", text: "Smooth" },
          { id: "D", text: "Narrow" }
        ],
        correctAnswer: "B"
      },
      {
        id: 8,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nIf one thing irritates you, it might _____ another",
        options: [
          { id: "A", text: "Delight" },
          { id: "B", text: "Concern" },
          { id: "C", text: "Invigorate" },
          { id: "D", text: "Bother" }
        ],
        correctAnswer: "A"
      },
      {
        id: 9,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nJane was loud as a teenager but _____ as an adult",
        options: [
          { id: "A", text: "Peaceful" },
          { id: "B", text: "Reserved" },
          { id: "C", text: "Humble" },
          { id: "D", text: "Respectful" }
        ],
        correctAnswer: "B"
      },
      {
        id: 10,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence:\n\nDo not always reprimand your children, it is good to _____ them at times",
        options: [
          { id: "A", text: "Advise" },
          { id: "B", text: "Forgive" },
          { id: "C", text: "Compliment" },
          { id: "D", text: "Pamper" }
        ],
        correctAnswer: "C"
      },
      {
        id: 11,
        text: "Choose the words that best complete each of the following sentences:\n\nThe aggrieved customers staged a fierce _____ on the street",
        options: [
          { id: "A", text: "Fight" },
          { id: "B", text: "Protest" },
          { id: "C", text: "Argument" },
          { id: "D", text: "Contest" }
        ],
        correctAnswer: "B"
      },
      {
        id: 12,
        text: "Choose the words that best complete each of the following sentences:\n\nThe accused was brought before the jury for a court _____",
        options: [
          { id: "A", text: "Sitting" },
          { id: "B", text: "Hearing" },
          { id: "C", text: "Judging" },
          { id: "D", text: "Proceeding" }
        ],
        correctAnswer: "B"
      },
      {
        id: 13,
        text: "Choose the words that best complete each of the following sentences:\n\nFrom his _____ one can tell that he is an athlete",
        options: [
          { id: "A", text: "Physique" },
          { id: "B", text: "Stature" },
          { id: "C", text: "Gait" },
          { id: "D", text: "Anatomy" }
        ],
        correctAnswer: "A"
      },
      {
        id: 14,
        text: "Choose the words that best complete each of the following sentences:\n\nThe death of that journalist is still _____ in mystery",
        options: [
          { id: "A", text: "Conveyed" },
          { id: "B", text: "Shadowed" },
          { id: "C", text: "Shrouded" },
          { id: "D", text: "Confined" }
        ],
        correctAnswer: "C"
      },
      {
        id: 15,
        text: "Choose the words that best complete each of the following sentences:\n\nThe defendant was charged with _____ because he caused his neighbour's death",
        options: [
          { id: "A", text: "Fratricide" },
          { id: "B", text: "Patricide" },
          { id: "C", text: "Genocide" },
          { id: "D", text: "Homicide" }
        ],
        correctAnswer: "D"
      },
      {
        id: 16,
        text: "Choose the words that best complete each of the following sentences:\n\nSeeing a young crop _____ from the soil is a rare experience",
        options: [
          { id: "A", text: "Trail" },
          { id: "B", text: "Sprout" },
          { id: "C", text: "Project" },
          { id: "D", text: "Creep" }
        ],
        correctAnswer: "B"
      },
      {
        id: 17,
        text: "Choose the words that best complete each of the following sentences:\n\nLawyers are still making efforts to interpret the new _____",
        options: [
          { id: "A", text: "Language" },
          { id: "B", text: "Technique" },
          { id: "C", text: "System" },
          { id: "D", text: "Statute" }
        ],
        correctAnswer: "D"
      },
      {
        id: 18,
        text: "Choose the words that best complete each of the following sentences:\n\nThe cargo was intercepted on sea by _____",
        options: [
          { id: "A", text: "Pirates" },
          { id: "B", text: "Thieves" },
          { id: "C", text: "Terrorists" },
          { id: "D", text: "Robbers" }
        ],
        correctAnswer: "A"
      },
      {
        id: 19,
        text: "Choose the words that best complete each of the following sentences:\n\nThe doctors _____ Bola's grandmother after the heart attack",
        options: [
          { id: "A", text: "Regenerated" },
          { id: "B", text: "Resuscitated" },
          { id: "C", text: "Resurrected" },
          { id: "D", text: "Revivified" }
        ],
        correctAnswer: "B"
      },
      {
        id: 20,
        text: "Choose the words that best complete each of the following sentences:\n\nBecause the couple cannot agree on many things, their relationship is now _____",
        options: [
          { id: "A", text: "Stressed" },
          { id: "B", text: "Uneasy" },
          { id: "C", text: "Strained" },
          { id: "D", text: "Tensed" }
        ],
        correctAnswer: "C"
      },
      {
        id: 31,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nParents encourage their children to excercise financial prucence",
        options: [
          { id: "A", text: "Caution" },
          { id: "B", text: "Credence" },
          { id: "C", text: "Sincerity" },
          { id: "D", text: "Precision" }
        ],
        correctAnswer: "A"
      },
      {
        id: 32,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nAwa decieved Ahmed into handing over all his savings",
        options: [
          { id: "A", text: "Cooked" },
          { id: "B", text: "Betrayed" },
          { id: "C", text: "Fooled" },
          { id: "D", text: "Cheated" }
        ],
        correctAnswer: "C"
      },
      {
        id: 33,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nIt turned out that the plaintiff's claim was false",
        options: [
          { id: "A", text: "Surmise" },
          { id: "B", text: "Contention" },
          { id: "C", text: "Allegation" },
          { id: "D", text: "Pronouncement" }
        ],
        correctAnswer: "C"
      },
      {
        id: 34,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nThe aggrieved faction held a clandestine meeting",
        options: [
          { id: "A", text: "Secret" },
          { id: "B", text: "Quiet" },
          { id: "C", text: "Brief" },
          { id: "D", text: "Quick" }
        ],
        correctAnswer: "A"
      },
      {
        id: 35,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nMorgan Pharmacy is the sole distributor of the antiviral drug.",
        options: [
          { id: "A", text: "Creditable" },
          { id: "B", text: "Only" },
          { id: "C", text: "First" },
          { id: "D", text: "Major" }
        ],
        correctAnswer: "B"
      },
      {
        id: 36,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nPolice officers holding batons impounded the banker's car.",
        options: [
          { id: "A", text: "Damaged" },
          { id: "B", text: "Banned" },
          { id: "C", text: "Seized" },
          { id: "D", text: "Collected" }
        ],
        correctAnswer: "C"
      },
      {
        id: 37,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nThe English teacher is always cheerful",
        options: [
          { id: "A", text: "Satisfied" },
          { id: "B", text: "Zealous" },
          { id: "C", text: "Gleeful" },
          { id: "D", text: "Careful" }
        ],
        correctAnswer: "C"
      },
      {
        id: 38,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nThe chairman is of the opinion that laying off workers is pernicious to the growth of the company",
        options: [
          { id: "A", text: "Harmful" },
          { id: "B", text: "Irrelevant" },
          { id: "C", text: "Indispensable" },
          { id: "D", text: "Crucial" }
        ],
        correctAnswer: "A"
      },
      {
        id: 39,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nIt was she that commanded me to leave the room",
        options: [
          { id: "A", text: "Encourage" },
          { id: "B", text: "Persuaded" },
          { id: "C", text: "Ordered" },
          { id: "D", text: "Induced" }
        ],
        correctAnswer: "C"
      },
      {
        id: 40,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence:\n\nThe valedictorian was admired for her perseverance while at school",
        options: [
          { id: "A", text: "Patience" },
          { id: "B", text: "Humility" },
          { id: "C", text: "Enthusiasm" },
          { id: "D", text: "Tenacity" }
        ],
        correctAnswer: "D"
      },
      {
        id: 41,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe fisherman said he sighted a _____ of fish in the river",
        options: [
          { id: "A", text: "Pack" },
          { id: "B", text: "Swarm" },
          { id: "C", text: "Shoal" },
          { id: "D", text: "Colony" }
        ],
        correctAnswer: "C"
      },
      {
        id: 42,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe principal corrected no one else but _____",
        options: [
          { id: "A", text: "I" },
          { id: "B", text: "Me" },
          { id: "C", text: "She" },
          { id: "D", text: "Myself" }
        ],
        correctAnswer: "B"
      },
      {
        id: 43,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe thug was _____ murder",
        options: [
          { id: "A", text: "Sued with" },
          { id: "B", text: "Charged with" },
          { id: "C", text: "Convicted for" },
          { id: "D", text: "charged for" }
        ],
        correctAnswer: "B"
      },
      {
        id: 44,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nAsokoro office _____ is located in Ibadan.",
        options: [
          { id: "A", text: "Headquarter" },
          { id: "B", text: "Headquarters'" },
          { id: "C", text: "Headquarters" },
          { id: "D", text: "Headquarter's" }
        ],
        correctAnswer: "C"
      },
      {
        id: 45,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nJohn should be through with his work _____?",
        options: [
          { id: "A", text: "Isn't it" },
          { id: "B", text: "Shouldn't he" },
          { id: "C", text: "Can't he" },
          { id: "D", text: "Didn't he" }
        ],
        correctAnswer: "B"
      },
      {
        id: 46,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThis is the man _____ I said told me the interesting story",
        options: [
          { id: "A", text: "Who" },
          { id: "B", text: "Whom" },
          { id: "C", text: "Whose" },
          { id: "D", text: "Which" }
        ],
        correctAnswer: "B"
      },
      {
        id: 47,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe accused forgot _____",
        options: [
          { id: "A", text: "Why the police said" },
          { id: "B", text: "That the police said" },
          { id: "C", text: "When the police said" },
          { id: "D", text: "What the police said" }
        ],
        correctAnswer: "D"
      },
      {
        id: 48,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe officer _____ is my brother",
        options: [
          { id: "A", text: "On uniform" },
          { id: "B", text: "With uniform" },
          { id: "C", text: "In uniform" },
          { id: "D", text: "In uniform dress" }
        ],
        correctAnswer: "C"
      },
      {
        id: 49,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe footballers have been practicing _____",
        options: [
          { id: "A", text: "In the stadium hard all morning" },
          { id: "B", text: "Hard in the stadium all morning" },
          { id: "C", text: "All morning hard in the stadium" },
          { id: "D", text: "All morning in the stadium hard" }
        ],
        correctAnswer: "B"
      },
      {
        id: 50,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nProfessor John is the leader of the _____ committee to review the new book",
        options: [
          { id: "A", text: "Fifty-man" },
          { id: "B", text: "Fifty-man's" },
          { id: "C", text: "Fifty-men" },
          { id: "D", text: "Fifty-men's" }
        ],
        correctAnswer: "A"
      },
      {
        id: 51,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nJames appears wiser than his friends",
        options: [
          { id: "A", text: "More" },
          { id: "B", text: "Most" },
          { id: "C", text: "Much" },
          { id: "D", text: "Much more" }
        ],
        correctAnswer: "C"
      },
      {
        id: 52,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThat word famous athlete is guilty, _____ way you look at it",
        options: [
          { id: "A", text: "Whichever" },
          { id: "B", text: "However" },
          { id: "C", text: "Whatever" },
          { id: "D", text: "Whenever" }
        ],
        correctAnswer: "B"
      },
      {
        id: 53,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nWe were all afraid when the alarm _____",
        options: [
          { id: "A", text: "Rang up" },
          { id: "B", text: "Went off" },
          { id: "C", text: "Died off" },
          { id: "D", text: "Ran off" }
        ],
        correctAnswer: "B"
      },
      {
        id: 54,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe material used for sewing my dress is _____ to yours",
        options: [
          { id: "A", text: "More superior" },
          { id: "B", text: "Most superior" },
          { id: "C", text: "Superior" },
          { id: "D", text: "Very superior" }
        ],
        correctAnswer: "C"
      },
      {
        id: 55,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe chairman wasn't privy _____ that information",
        options: [
          { id: "A", text: "To" },
          { id: "B", text: "At" },
          { id: "C", text: "With" },
          { id: "D", text: "On" }
        ],
        correctAnswer: "A"
      }
    ]
  },
  {
    id: "biology",
    name: "Biology",
    description: "Cellular Biology, Classification, and Ecology",
    icon: "microscope",
    questions: [
      {
        id: 1,
        text: "What is classification in biology?",
        options: [
          { id: "A", text: "The study of animal behaviour." },
          { id: "B", text: "The process of identifying organisms using keys." },
          { id: "C", text: "The process of grouping living things into categories based on shared characteristics and relationships." },
          { id: "D", text: "The naming of organisms using Latin." }
        ],
        correctAnswer: "C"
      },
      {
        id: 2,
        text: "Which Swedish botanist developed the hierarchical system of classification and binomial nomenclature still largely used today?",
        options: [
          { id: "A", text: "Aristotle" },
          { id: "B", text: "Robert Hooke" },
          { id: "C", text: "Charles Darwin" },
          { id: "D", text: "Carolus Linnaeus (Carl Linnaeus)" }
        ],
        correctAnswer: "D"
      },
      {
        id: 3,
        text: "In the modern hierarchical classification system, which taxon is the broadest and most general?",
        options: [
          { id: "A", text: "Species" },
          { id: "B", text: "Genus" },
          { id: "C", text: "Kingdom" },
          { id: "D", text: "Domain" }
        ],
        correctAnswer: "D"
      },
      {
        id: 4,
        text: "Which taxon is the smallest and most specific level in the hierarchical classification system?",
        options: [
          { id: "A", text: "Domain" },
          { id: "B", text: "Kingdom" },
          { id: "C", text: "Family" },
          { id: "D", text: "Species" }
        ],
        correctAnswer: "D"
      },
      {
        id: 5,
        text: "Classifying organisms based on physical characteristics like shape, size, and colour relates to which factor?",
        options: [
          { id: "A", text: "Physiology" },
          { id: "B", text: "Genetic information" },
          { id: "C", text: "Morphology" },
          { id: "D", text: "Ecological information" }
        ],
        correctAnswer: "C"
      },
      {
        id: 6,
        text: "Classification based on differences and similarities in DNA and gene composition uses which factor?",
        options: [
          { id: "A", text: "Morphology" },
          { id: "B", text: "Genetic information" },
          { id: "C", text: "Physiology" },
          { id: "D", text: "Evolutionary relationships" }
        ],
        correctAnswer: "B"
      },
      {
        id: 7,
        text: "Classifying organisms based on functions and processes like metabolism and reproduction relates to which factor?",
        options: [
          { id: "A", text: "Morphology" },
          { id: "B", text: "Genetic information" },
          { id: "C", text: "Physiology" },
          { id: "D", text: "Ecological information" }
        ],
        correctAnswer: "C"
      },
      {
        id: 8,
        text: "Grouping organisms based on their habitat, behaviour, and interactions with other living things uses which factor?",
        options: [
          { id: "A", text: "Morphology" },
          { id: "B", text: "Genetic information" },
          { id: "C", text: "Physiology" },
          { id: "D", text: "Ecological information" }
        ],
        correctAnswer: "D"
      },
      {
        id: 9,
        text: "The most common type of classification, used by Linnaeus, which arranges groups in nested orders from broad to specific, is called:",
        options: [
          { id: "A", text: "Cladistics" },
          { id: "B", text: "Phylogenetic Classification" },
          { id: "C", text: "Hierarchical Classification" },
          { id: "D", text: "Numerical Classification" }
        ],
        correctAnswer: "C"
      },
      {
        id: 10,
        text: "Which type of classification is based on arbitrary standards chosen for convenience, often using easily observable features?",
        options: [
          { id: "A", text: "Natural Classification" },
          { id: "B", text: "Artificial Classification" },
          { id: "C", text: "Phylogenetic Classification" },
          { id: "D", text: "Hierarchical Classification" }
        ],
        correctAnswer: "B"
      },
      {
        id: 11,
        text: "What is a key difference between Natural and Artificial classification?",
        options: [
          { id: "A", text: "Natural uses Latin names, Artificial uses common names." },
          { id: "B", text: "Natural considers evolutionary history, Artificial often uses convenient, observable features." },
          { id: "C", text: "Natural classification is less flexible than Artificial classification." },
          { id: "D", text: "Natural classification is only used for plants, Artificial for animals." }
        ],
        correctAnswer: "B"
      },
      {
        id: 12,
        text: "Which type of classification aims primarily to understand the natural relationships and diversity of life?",
        options: [
          { id: "A", text: "Artificial Classification" },
          { id: "B", text: "Numerical Classification" },
          { id: "C", text: "Natural Classification" },
          { id: "D", text: "Practical Classification" }
        ],
        correctAnswer: "C"
      },
      {
        id: 13,
        text: "Which of the following is NOT listed as an importance of classifying organisms?",
        options: [
          { id: "A", text: "Organising the diversity of life systematically." },
          { id: "B", text: "Facilitating communication among biologists." },
          { id: "C", text: "Preventing organisms from evolving further." },
          { id: "D", text: "Helping identify endangered species for conservation." }
        ],
        correctAnswer: "C"
      },
      {
        id: 14,
        text: "In the hierarchical classification, which rank falls between Phylum/Division and Order?",
        options: [
          { id: "A", text: "Kingdom" },
          { id: "B", text: "Family" },
          { id: "C", text: "Genus" },
          { id: "D", text: "Class" }
        ],
        correctAnswer: "D"
      },
      {
        id: 15,
        text: "Which sequence correctly lists the major taxa from broadest to most specific?",
        options: [
          { id: "A", text: "Kingdom, Phylum, Order, Class, Family, Genus, Species" },
          { id: "B", text: "Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species" },
          { id: "C", text: "Species, Genus, Family, Order, Class, Phylum, Kingdom, Domain" },
          { id: "D", text: "Domain, Phylum, Kingdom, Class, Family, Order, Genus, Species" }
        ],
        correctAnswer: "B"
      },
      {
        id: 16,
        text: "According to the example classification provided, Amoeba proteus belongs to which Kingdom?",
        options: [
          { id: "A", text: "Animalia" },
          { id: "B", text: "Plantae" },
          { id: "C", text: "Fungi" },
          { id: "D", text: "Protista" }
        ],
        correctAnswer: "D"
      },
      {
        id: 17,
        text: "What is the defining characteristic of organisms belonging to the same species?",
        options: [
          { id: "A", text: "They live in the same habitat." },
          { id: "B", text: "They look exactly identical." },
          { id: "C", text: "They can interbreed and produce fertile offspring." },
          { id: "D", text: "They belong to the same genus." }
        ],
        correctAnswer: "C"
      },
      {
        id: 18,
        text: "What is binomial nomenclature?",
        options: [
          { id: "A", text: "A system for classifying organisms into kingdoms." },
          { id: "B", text: "A two-part naming system for organisms using genus and species names." },
          { id: "C", text: "A method for creating dichotomous keys." },
          { id: "D", text: "The study of the evolutionary history of species." }
        ],
        correctAnswer: "B"
      },
      {
        id: 19,
        text: "Who introduced the system of binomial nomenclature?",
        options: [
          { id: "A", text: "Aristotle" },
          { id: "B", text: "Charles Darwin" },
          { id: "C", text: "Gregor Mendel" },
          { id: "D", text: "Carolus Linnaeus" }
        ],
        correctAnswer: "D"
      },
      {
        id: 20,
        text: "The scientific name Homo sapiens consists of which two taxonomic ranks?",
        options: [
          { id: "A", text: "Family and Genus" },
          { id: "B", text: "Genus and Species" },
          { id: "C", text: "Kingdom and Phylum" },
          { id: "D", text: "Order and Class" }
        ],
        correctAnswer: "B"
      },
      {
        id: 21,
        text: "How should binomial names be written according to the text?",
        options: [
          { id: "A", text: "Both parts capitalized, underlined together." },
          { id: "B", text: "First part capitalized, second part lowercase, in italics or underlined separately." },
          { id: "C", text: "Both parts lowercase, in bold." },
          { id: "D", text: "First part lowercase, second part capitalized, in italics." }
        ],
        correctAnswer: "B"
      },
      {
        id: 22,
        text: "In the binomial name Zea mays (Maize), which part is the genus name?",
        options: [
          { id: "A", text: "Zea" },
          { id: "B", text: "mays" },
          { id: "C", text: "Both Zea and mays" },
          { id: "D", text: "Neither Zea nor mays" }
        ],
        correctAnswer: "A"
      },
      {
        id: 23,
        text: "What is a primary significance of using binomial nomenclature?",
        options: [
          { id: "A", text: "It describes the organism's appearance fully." },
          { id: "B", text: "It ensures uniformity and clear communication among biologists globally." },
          { id: "C", text: "It indicates the organism's age." },
          { id: "D", text: "It is easier for non-scientists to remember than common names." }
        ],
        correctAnswer: "B"
      },
      {
        id: 24,
        text: "What is the binomial name for humans provided in the text?",
        options: [
          { id: "A", text: "Canis lupus" },
          { id: "B", text: "Panthera leo" },
          { id: "C", text: "Homo sapiens" },
          { id: "D", text: "Macaca mulatta" }
        ],
        correctAnswer: "C"
      },
      {
        id: 25,
        text: "According to Table 4.2, what is the binomial name for Maize?",
        options: [
          { id: "A", text: "Manihot esculenta" },
          { id: "B", text: "Oryza sativa" },
          { id: "C", text: "Zea mays" },
          { id: "D", text: "Theobroma cacao" }
        ],
        correctAnswer: "C"
      },
      {
        id: 26,
        text: "What is the primary mode of nutrition for Amoeba proteus?",
        options: [
          { id: "A", text: "Autotrophic (photosynthesis)" },
          { id: "B", text: "Heterotrophic (feeding on other organisms)" },
          { id: "C", text: "Chemotrophic (using chemicals for energy)" },
          { id: "D", text: "Saprophytic (feeding on dead organic matter)" }
        ],
        correctAnswer: "B"
      },
      {
        id: 27,
        text: "How does Amoeba capture its food?",
        options: [
          { id: "A", text: "Using cilia to sweep food into a mouth pore." },
          { id: "B", text: "Filtering water through its cell membrane." },
          { id: "C", text: "Engulfing it using pseudopods (phagocytosis)." },
          { id: "D", text: "Absorbing dissolved nutrients directly from the water." }
        ],
        correctAnswer: "C"
      },
      {
        id: 28,
        text: "What structures does Amoeba use for movement and feeding?",
        options: [
          { id: "A", text: "Flagella" },
          { id: "B", text: "Cilia" },
          { id: "C", text: "Pseudopods (false feet)" },
          { id: "D", text: "Pellicle contractions" }
        ],
        correctAnswer: "C"
      },
      {
        id: 29,
        text: "How does Amoeba primarily reproduce?",
        options: [
          { id: "A", text: "Sexually through conjugation" },
          { id: "B", text: "Asexually through binary fission" },
          { id: "C", text: "Budding" },
          { id: "D", text: "Spore formation" }
        ],
        correctAnswer: "B"
      },
      {
        id: 30,
        text: "How does respiration (gas exchange) occur in Amoeba?",
        options: [
          { id: "A", text: "Through specialized lung-like structures." },
          { id: "B", text: "Using gills to extract oxygen from water." },
          { id: "C", text: "By diffusion across the general body surface (plasmalemma)." },
          { id: "D", text: "It does not require oxygen." }
        ],
        correctAnswer: "C"
      },
      {
        id: 31,
        text: "What process does Amoeba use to maintain water balance, especially in freshwater?",
        options: [
          { id: "A", text: "Phagocytosis" },
          { id: "B", text: "Binary fission" },
          { id: "C", text: "Osmoregulation (using contractile vacuoles)" },
          { id: "D", text: "Active transport of salts" }
        ],
        correctAnswer: "C"
      },
      {
        id: 32,
        text: "Which is listed as a potential negative economic or health impact of some Amoeba species?",
        options: [
          { id: "A", text: "They consume excess algae in ponds." },
          { id: "B", text: "They are used extensively in genetic engineering." },
          { id: "C", text: "Some species are parasitic/pathogenic (e.g., causing dysentery)." },
          { id: "D", text: "They deplete oxygen levels in water." }
        ],
        correctAnswer: "C"
      },
      {
        id: 33,
        text: "Where is Euglena viridis commonly found?",
        options: [
          { id: "A", text: "Dry soil" },
          { id: "B", text: "Saltwater oceans" },
          { id: "C", text: "Stagnant freshwater ponds and streams" },
          { id: "D", text: "Inside the digestive tract of animals" }
        ],
        correctAnswer: "C"
      },
      {
        id: 34,
        text: "What term describes Euglena's ability to be both autotrophic and heterotrophic?",
        options: [
          { id: "A", text: "Parasitic" },
          { id: "B", text: "Saprophytic" },
          { id: "C", text: "Mixotrophic" },
          { id: "D", text: "Chemotrophic" }
        ],
        correctAnswer: "C"
      },
      {
        id: 35,
        text: "What structures within Euglena allow it to perform photosynthesis?",
        options: [
          { id: "A", text: "Mitochondria" },
          { id: "B", text: "Contractile vacuoles" },
          { id: "C", text: "Chloroplasts" },
          { id: "D", text: "Nucleus" }
        ],
        correctAnswer: "C"
      },
      {
        id: 36,
        text: "What structure helps Euglena detect light?",
        options: [
          { id: "A", text: "Pellicle" },
          { id: "B", text: "Flagellum" },
          { id: "C", text: "Eyespot (stigma)" },
          { id: "D", text: "Nucleolus" }
        ],
        correctAnswer: "C"
      },
      {
        id: 37,
        text: "How does Euglena primarily reproduce under favourable conditions?",
        options: [
          { id: "A", text: "Conjugation" },
          { id: "B", text: "Fragmentation" },
          { id: "C", text: "Longitudinal binary fission" },
          { id: "D", text: "Budding" }
        ],
        correctAnswer: "C"
      },
      {
        id: 38,
        text: "How does Euglena primarily move in water?",
        options: [
          { id: "A", text: "Using pseudopods" },
          { id: "B", text: "Using cilia" },
          { id: "C", text: "Using a flagellum" },
          { id: "D", text: "Contracting its pellicle (euglenoid movement is secondary)" }
        ],
        correctAnswer: "C"
      },
      {
        id: 39,
        text: "What is the semi-rigid outer covering of Euglena called?",
        options: [
          { id: "A", text: "Cell wall" },
          { id: "B", text: "Cell membrane" },
          { id: "C", text: "Pellicle" },
          { id: "D", text: "Capsule" }
        ],
        correctAnswer: "C"
      },
      {
        id: 40,
        text: "Euglena stores a carbohydrate compound with potential health benefits called:",
        options: [
          { id: "A", text: "Starch" },
          { id: "B", text: "Glycogen" },
          { id: "C", text: "Cellulose" },
          { id: "D", text: "Paramylon" }
        ],
        correctAnswer: "D"
      },
      // Biology Test 2 (Cell Structure and Membrane)
      {
        id: 41,
        text: "Who is credited with the discovery of cells in 1665?",
        options: [
          { id: "A", text: "C. Nageli and C. Cramer" },
          { id: "B", text: "Robert Hooke" },
          { id: "C", text: "Antony van Leeuwenhoek" },
          { id: "D", text: "Matthias Schleiden" }
        ],
        correctAnswer: "B"
      },
      {
        id: 42,
        text: "What is the fundamental structural and functional unit of all living things?",
        options: [
          { id: "A", text: "Organelle" },
          { id: "B", text: "Tissue" },
          { id: "C", text: "Cell" },
          { id: "D", text: "Molecule" }
        ],
        correctAnswer: "C"
      },
      {
        id: 43,
        text: "What is the thin, transparent, elastic, and selectively permeable membrane covering a cell called?",
        options: [
          { id: "A", text: "Cell wall" },
          { id: "B", text: "Nuclear envelope" },
          { id: "C", text: "Cytoplasm" },
          { id: "D", text: "Plasma membrane (or Cell membrane)" }
        ],
        correctAnswer: "D"
      },
      {
        id: 44,
        text: "The term 'cell membrane' was given by:",
        options: [
          { id: "A", text: "Robert Hooke" },
          { id: "B", text: "C. Nageli and C. Cramer" },
          { id: "C", text: "The text does not specify" },
          { id: "D", text: "Rudolf Virchow" }
        ],
        correctAnswer: "B"
      },
      {
        id: 45,
        text: "The cell membrane is primarily composed of which two types of molecules?",
        options: [
          { id: "A", text: "Carbohydrates and Nucleic Acids" },
          { id: "B", text: "Proteins and Nucleic Acids" },
          { id: "C", text: "Phospholipids and Proteins" },
          { id: "D", text: "Lipids and Carbohydrates" }
        ],
        correctAnswer: "C"
      },
      {
        id: 46,
        text: "The lipid component of the cell membrane forms a structure called the:",
        options: [
          { id: "A", text: "Protein channel" },
          { id: "B", text: "Cytoskeleton" },
          { id: "C", text: "Phospholipid bilayer" },
          { id: "D", text: "Glycocalyx" }
        ],
        correctAnswer: "C"
      },
      {
        id: 47,
        text: "In the phospholipid bilayer, the tails are _______ and the heads are _______.",
        options: [
          { id: "A", text: "Hydrophilic, Hydrophobic" },
          { id: "B", text: "Hydrophobic, Hydrophilic" },
          { id: "C", text: "Both Hydrophilic" },
          { id: "D", text: "Both Hydrophobic" }
        ],
        correctAnswer: "B"
      },
      {
        id: 48,
        text: "The cell membrane structure is described as a 'fluid mosaic' because:",
        options: [
          { id: "A", text: "It is rigid and proteins are fixed in place." },
          { id: "B", text: "It is composed only of lipids arranged in a pattern." },
          { id: "C", text: "The lipid and protein components can move and are scattered like a mosaic." },
          { id: "D", text: "It allows all substances to pass through freely." }
        ],
        correctAnswer: "C"
      },
      {
        id: 49,
        text: "Which property of the cell membrane allows it to recover from minor physical damage?",
        options: [
          { id: "A", text: "Its rigidity" },
          { id: "B", text: "Its thickness" },
          { id: "C", text: "Its selective permeability" },
          { id: "D", text: "Its fluidity" }
        ],
        correctAnswer: "D"
      },
      {
        id: 50,
        text: "According to the text, membranes are easily damaged by:",
        options: [
          { id: "A", text: "Water and oxygen" },
          { id: "B", text: "Cold temperatures and bases" },
          { id: "C", text: "Heat, acids, and fat solvents (like alcohol)" },
          { id: "D", text: "Sugars and salts" }
        ],
        correctAnswer: "C"
      },
      {
        id: 51,
        text: "Which term best describes the cell membrane's ability to allow only certain molecules to pass through?",
        options: [
          { id: "A", text: "Impermeable" },
          { id: "B", text: "Fully permeable" },
          { id: "C", text: "Selectively permeable" },
          { id: "D", text: "Osmotic" }
        ],
        correctAnswer: "C"
      },
      {
        id: 52,
        text: "Which of the following is NOT listed as a function of the cell membrane itself?",
        options: [
          { id: "A", text: "Acting as a physical barrier" },
          { id: "B", text: "Facilitating communication between cells" },
          { id: "C", text: "Performing protein synthesis" },
          { id: "D", text: "Anchoring the cytoskeleton" }
        ],
        correctAnswer: "C"
      },
      {
        id: 53,
        text: "Some membrane proteins function as _______, catalysing chemical reactions on the membrane surface.",
        options: [
          { id: "A", text: "Receptors" },
          { id: "B", text: "Pores" },
          { id: "C", text: "Enzymes" },
          { id: "D", text: "Anchors" }
        ],
        correctAnswer: "C"
      },
      {
        id: 54,
        text: "Membrane proteins that bind to hormones are known as:",
        options: [
          { id: "A", text: "Transport proteins" },
          { id: "B", text: "Enzymes" },
          { id: "C", text: "Structural proteins" },
          { id: "D", text: "Receptor sites" }
        ],
        correctAnswer: "D"
      },
      {
        id: 55,
        text: "Proteins that use ATP to move materials across the membrane against their concentration gradient are involved in:",
        options: [
          { id: "A", text: "Diffusion" },
          { id: "B", text: "Osmosis" },
          { id: "C", text: "Active transport" },
          { id: "D", text: "Facilitated diffusion" }
        ],
        correctAnswer: "C"
      },
      {
        id: 56,
        text: "What is the net movement of molecules from a region of higher concentration to a region of lower concentration called?",
        options: [
          { id: "A", text: "Osmosis" },
          { id: "B", text: "Active Transport" },
          { id: "C", text: "Diffusion" },
          { id: "D", text: "Endocytosis" }
        ],
        correctAnswer: "C"
      },
      {
        id: 57,
        text: "Which factor would increase the rate of diffusion?",
        options: [
          { id: "A", text: "Lower temperature" },
          { id: "B", text: "Smaller concentration gradient" },
          { id: "C", text: "Larger particle size" },
          { id: "D", text: "Higher temperature" }
        ],
        correctAnswer: "D"
      },
      {
        id: 58,
        text: "Which factor would decrease the rate of diffusion?",
        options: [
          { id: "A", text: "Stirring the medium" },
          { id: "B", text: "A steeper concentration gradient" },
          { id: "C", text: "A thicker surface membrane" },
          { id: "D", text: "A larger surface area" }
        ],
        correctAnswer: "C"
      },
      {
        id: 59,
        text: "The movement of oxygen from the lungs into the blood is an example of:",
        options: [
          { id: "A", text: "Osmosis" },
          { id: "B", text: "Active Transport" },
          { id: "C", text: "Diffusion" },
          { id: "D", text: "Exocytosis" }
        ],
        correctAnswer: "C"
      },
      {
        id: 60,
        text: "Osmosis is the movement of _______ molecules across a semi-permeable membrane.",
        options: [
          { id: "A", text: "Solute" },
          { id: "B", text: "Water" },
          { id: "C", text: "Gas" },
          { id: "D", text: "Protein" }
        ],
        correctAnswer: "B"
      },
      {
        id: 61,
        text: "In osmosis, water moves from a _______ solution (higher water concentration) to a _______ solution (lower water concentration).",
        options: [
          { id: "A", text: "Strong, Weak" },
          { id: "B", text: "Hypertonic, Hypotonic" },
          { id: "C", text: "Weak, Strong" },
          { id: "D", text: "Isotonic, Hypertonic" }
        ],
        correctAnswer: "C"
      },
      {
        id: 62,
        text: "A solution with a lower concentration of solutes (higher water concentration) compared to another solution is called:",
        options: [
          { id: "A", text: "Hypertonic" },
          { id: "B", text: "Isotonic" },
          { id: "C", text: "Hypotonic" },
          { id: "D", text: "Concentrated" }
        ],
        correctAnswer: "C"
      },
      {
        id: 63,
        text: "A solution with a higher concentration of solutes (lower water concentration) compared to another solution is called:",
        options: [
          { id: "A", text: "Hypertonic" },
          { id: "B", text: "Isotonic" },
          { id: "C", text: "Hypotonic" },
          { id: "D", text: "Dilute" }
        ],
        correctAnswer: "A"
      },
      {
        id: 64,
        text: "What happens to an animal cell (like a red blood cell) when placed in a hypotonic solution (like pure water)?",
        options: [
          { id: "A", text: "It shrinks (crenation)" },
          { id: "B", text: "It bursts (haemolysis)" },
          { id: "C", text: "It becomes flaccid" },
          { id: "D", text: "No change occurs" }
        ],
        correctAnswer: "B"
      },
      {
        id: 65,
        text: "What happens to a plant cell when placed in a hypotonic solution (like pure water)?",
        options: [
          { id: "A", text: "It shrinks" },
          { id: "B", text: "It bursts" },
          { id: "C", text: "It becomes turgid (firm)" },
          { id: "D", text: "It undergoes plasmolysis" }
        ],
        correctAnswer: "C"
      },
      {
        id: 66,
        text: "What happens to an animal cell when placed in a hypertonic solution (salty water)?",
        options: [
          { id: "A", text: "It shrinks (crenation)" },
          { id: "B", text: "It bursts (haemolysis)" },
          { id: "C", text: "It becomes turgid" },
          { id: "D", text: "No change occurs" }
        ],
        correctAnswer: "A"
      },
      {
        id: 67,
        text: "What happens to a plant cell when placed in a hypertonic solution (very salty water)?",
        options: [
          { id: "A", text: "It swells and becomes turgid" },
          { id: "B", text: "It bursts" },
          { id: "C", text: "It becomes flaccid and may undergo plasmolysis" },
          { id: "D", text: "No change occurs" }
        ],
        correctAnswer: "C"
      },
      {
        id: 68,
        text: "What is plasmolysis?",
        options: [
          { id: "A", text: "The bursting of an animal cell in water." },
          { id: "B", text: "The shrinking of the cytoplasm and cell membrane away from the cell wall in a plant cell." },
          { id: "C", text: "The swelling of a plant cell in water." },
          { id: "D", text: "The process of active transport in plant cells." }
        ],
        correctAnswer: "B"
      },
      {
        id: 69,
        text: "The absorption of water from the soil by plant root hairs occurs primarily through:",
        options: [
          { id: "A", text: "Diffusion" },
          { id: "B", text: "Active Transport" },
          { id: "C", text: "Osmosis" },
          { id: "D", text: "Endocytosis" }
        ],
        correctAnswer: "C"
      },
      {
        id: 70,
        text: "Which transport process requires the cell to expend energy in the form of ATP?",
        options: [
          { id: "A", text: "Diffusion" },
          { id: "B", text: "Osmosis" },
          { id: "C", text: "Facilitated Diffusion" },
          { id: "D", text: "Active Transport" }
        ],
        correctAnswer: "D"
      },
      {
        id: 71,
        text: "Active transport moves substances:",
        options: [
          { id: "A", text: "From high concentration to low concentration without energy" },
          { id: "B", text: "From low concentration to high concentration using energy" },
          { id: "C", text: "Only water molecules across a membrane" },
          { id: "D", text: "By engulfing large particles" }
        ],
        correctAnswer: "B"
      },
      {
        id: 72,
        text: "The absorption of mineral salts from the soil by root hairs, even when the soil concentration is low, is an example of:",
        options: [
          { id: "A", text: "Osmosis" },
          { id: "B", text: "Diffusion" },
          { id: "C", text: "Active Transport" },
          { id: "D", text: "Plasmolysis" }
        ],
        correctAnswer: "C"
      },
      {
        id: 73,
        text: "What is the general term for the process of transporting large molecules into cells by forming vesicles from the cell membrane?",
        options: [
          { id: "A", text: "Exocytosis" },
          { id: "B", text: "Diffusion" },
          { id: "C", text: "Osmosis" },
          { id: "D", text: "Endocytosis" }
        ],
        correctAnswer: "D"
      },
      {
        id: 74,
        text: "What type of endocytosis involves the cell taking in large solid materials ('cell eating')?",
        options: [
          { id: "A", text: "Pinocytosis" },
          { id: "B", text: "Exocytosis" },
          { id: "C", text: "Phagocytosis" },
          { id: "D", text: "Active transport" }
        ],
        correctAnswer: "C"
      },
      {
        id: 75,
        text: "What type of endocytosis involves the cell taking in liquid substances ('cell drinking')?",
        options: [
          { id: "A", text: "Pinocytosis" },
          { id: "B", text: "Exocytosis" },
          { id: "C", text: "Phagocytosis" },
          { id: "D", text: "Diffusion" }
        ],
        correctAnswer: "A"
      },
      {
        id: 76,
        text: "An Amoeba engulfing food particles is an example of:",
        options: [
          { id: "A", text: "Pinocytosis" },
          { id: "B", text: "Exocytosis" },
          { id: "C", text: "Phagocytosis" },
          { id: "D", text: "Osmosis" }
        ],
        correctAnswer: "C"
      },
      {
        id: 77,
        text: "What is the process where vesicles formed inside the cell fuse with the cell membrane to release their contents outside the cell?",
        options: [
          { id: "A", text: "Endocytosis" },
          { id: "B", text: "Pinocytosis" },
          { id: "C", text: "Phagocytosis" },
          { id: "D", text: "Exocytosis" }
        ],
        correctAnswer: "D"
      },
      {
        id: 78,
        text: "The secretion of enzymes from a cell is an example of:",
        options: [
          { id: "A", text: "Endocytosis" },
          { id: "B", text: "Exocytosis" },
          { id: "C", text: "Diffusion" },
          { id: "D", text: "Osmosis" }
        ],
        correctAnswer: "B"
      },
      {
        id: 79,
        text: "In the beetroot experiment described in Activity 3.1, why does the boiling water change colour when beetroot is placed in it?",
        options: [
          { id: "A", text: "Osmosis causes water to enter the beetroot cells." },
          { id: "B", text: "Diffusion causes sugar to leave the beetroot." },
          { id: "C", text: "Boiling damages the cell membranes, allowing pigment to leak out via diffusion." },
          { id: "D", text: "Active transport pumps pigment out of the cells." }
        ],
        correctAnswer: "C"
      },
      {
        id: 80,
        text: "If two solutions have the same solute concentration, they are said to be:",
        options: [
          { id: "A", text: "Hypertonic" },
          { id: "B", text: "Hypotonic" },
          { id: "C", text: "Isotonic" },
          { id: "D", text: "Plasmolysed" }
        ],
        correctAnswer: "C"
      }
    ]
  }
];

// Helper function to get a subject by ID
export const getSubjectById = (subjectId: string): Subject | undefined => {
  return subjects.find(subject => subject.id === subjectId);
};
