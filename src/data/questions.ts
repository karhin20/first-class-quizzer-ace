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
        correctAnswer: "A
