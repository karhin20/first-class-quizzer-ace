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
      },
      {
        id: 56,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nWe were lucky our driver didn't die in the accident, _____?",
        options: [
          { id: "A", text: "Isn't it" },
          { id: "B", text: "Weren't we" },
          { id: "C", text: "Didn't we" },
          { id: "D", text: "Did we" }
        ],
        correctAnswer: "B"
      },
      {
        id: 57,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe _____ were decorated with flowers",
        options: [
          { id: "A", text: "Girls shoes" },
          { id: "B", text: "Girls' hoes" },
          { id: "C", text: "Girl' shoes'" },
          { id: "D", text: "Girls shoe'" }
        ],
        correctAnswer: "B"
      },
      {
        id: 58,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nBefore the lecturer entered the hall, we _____ the board",
        options: [
          { id: "A", text: "Clean" },
          { id: "B", text: "Have cleaned" },
          { id: "C", text: "Are cleaning" },
          { id: "D", text: "Had cleaned" }
        ],
        correctAnswer: "D"
      },
      {
        id: 59,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\n_____ the hours of nine and ten, the surgeons completed the operation",
        options: [
          { id: "A", text: "Before" },
          { id: "B", text: "Between" },
          { id: "C", text: "In" },
          { id: "D", text: "Upon" }
        ],
        correctAnswer: "B"
      },
      {
        id: 60,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nMother bought _____ at the fair",
        options: [
          { id: "A", text: "An expensive red Japanese car" },
          { id: "B", text: "A Japanese red expensive car" },
          { id: "C", text: "An expensive Japanese red car" },
          { id: "D", text: "A red expensive Japanese car" }
        ],
        correctAnswer: "A"
      },
      {
        id: 61,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe duty of our teacher is to give instructions; _____ is to obey",
        options: [
          { id: "A", text: "Ours" },
          { id: "B", text: "Our's" },
          { id: "C", text: "Our" },
          { id: "D", text: "Ours'" }
        ],
        correctAnswer: "A"
      },
      {
        id: 62,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe teacher has _____ with the principal",
        options: [
          { id: "A", text: "Fallen apart" },
          { id: "B", text: "Fallen off" },
          { id: "C", text: "Fallen out" },
          { id: "D", text: "Fallen down" }
        ],
        correctAnswer: "C"
      },
      {
        id: 63,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nA meeting was called _____ the instance of the chairman",
        options: [
          { id: "A", text: "By" },
          { id: "B", text: "On" },
          { id: "C", text: "At" },
          { id: "D", text: "For" }
        ],
        correctAnswer: "B"
      },
      {
        id: 64,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nBusiness is poor these days _____ workers are on strike",
        options: [
          { id: "A", text: "Whereas" },
          { id: "B", text: "So that" },
          { id: "C", text: "No matter" },
          { id: "D", text: "Because" }
        ],
        correctAnswer: "D"
      },
      {
        id: 65,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe test seemed _____ simple that we thought we would all pass",
        options: [
          { id: "A", text: "So" },
          { id: "B", text: "Very" },
          { id: "C", text: "Too" },
          { id: "D", text: "Over" }
        ],
        correctAnswer: "A"
      },
      {
        id: 66,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nTayo: I thik I can now solve the problem. Essien: _____",
        options: [
          { id: "A", text: "Neither can I" },
          { id: "B", text: "So I can" },
          { id: "C", text: "So do I" },
          { id: "D", text: "Either do I" }
        ],
        correctAnswer: "C"
      },
      {
        id: 67,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe _____ scientist has discovered a cure for cancer",
        options: [
          { id: "A", text: "Young brilliant Nigerian" },
          { id: "B", text: "Nigerian brilliant young" },
          { id: "C", text: "Young Nigerian brilliant" },
          { id: "D", text: "Brilliant young Nigerian" }
        ],
        correctAnswer: "D"
      },
      {
        id: 68,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe couple _____ their first child when I entered college",
        options: [
          { id: "A", text: "Were not having" },
          { id: "B", text: "Hadn't had" },
          { id: "C", text: "Haven't had" },
          { id: "D", text: "Hasn't had" }
        ],
        correctAnswer: "B"
      },
      {
        id: 69,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThe fire fighters worked hard to _____ the inferno",
        options: [
          { id: "A", text: "Put off" },
          { id: "B", text: "Put out" },
          { id: "C", text: "Put away" },
          { id: "D", text: "Put by" }
        ],
        correctAnswer: "B"
      },
      {
        id: 70,
        text: "Choose the word or group of words that best complete each of the following sentences:\n\nThose novels are interesting. I wonder if you can get me _____",
        options: [
          { id: "A", text: "Others such many" },
          { id: "B", text: "Many such others" },
          { id: "C", text: "Many others such" },
          { id: "D", text: "Such many others" }
        ],
        correctAnswer: "C"
      },
      {
        id: 71,
        text: "In the following passage, the numbered gaps indicate missing words:\n\nJim had his first --71-- in professional boxing when he was seventeen and that match has remained indelible in his memory.",
        options: [
          { id: "A", text: "Bout" },
          { id: "B", text: "Session" },
          { id: "C", text: "Entry" },
          { id: "D", text: "Attempt" }
        ],
        correctAnswer: "A"
      }
    ]
  },
  {
    id: "biology",
    name: "Biology",
    description: "Cell structure, Functions, and Transport mechanisms",
    icon: "microscope",
    questions: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        text: "The term \"cell membrane\" was given by:",
        options: [
          { id: "A", text: "Robert Hooke" },
          { id: "B", text: "C. Nageli and C. Cramer" },
          { id: "C", text: "The text does not specify" },
          { id: "D", text: "Rudolf Virchow" }
        ],
        correctAnswer: "B"
      },
      {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
        text: "The cell membrane structure is described as a \"fluid mosaic\" because:",
        options: [
          { id: "A", text: "It is rigid and proteins are fixed in place." },
          { id: "B", text: "It is composed only of lipids arranged in a pattern." },
          { id: "C", text: "The lipid and protein components can move and are scattered like a mosaic." },
          { id: "D", text: "It allows all substances to pass through freely." }
        ],
        correctAnswer: "C"
      },
      {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
        text: "What type of endocytosis involves the cell taking in large solid materials (\"cell eating\")?",
        options: [
          { id: "A", text: "Pinocytosis" },
          { id: "B", text: "Exocytosis" },
          { id: "C", text: "Phagocytosis" },
          { id: "D", text: "Active transport" }
        ],
        correctAnswer: "C"
      },
      {
        id: 35,
        text: "What type of endocytosis involves the cell taking in liquid substances (\"cell drinking\")?",
        options: [
          { id: "A", text: "Pinocytosis" },
          { id: "B", text: "Exocytosis" },
          { id: "C", text: "Phagocytosis" },
          { id: "D", text: "Diffusion" }
        ],
        correctAnswer: "A"
      },
      {
        id: 36,
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
        id: 37,
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
        id: 38,
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
        id: 39,
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
        id: 40,
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
export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(subject => subject.id === id);
};
