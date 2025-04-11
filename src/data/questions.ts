export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation?: string; // Add optional explanation field
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
      },
      {
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
        id: 37,
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
        id: 38,
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
        id: 39,
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
        id: 40,
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
        id: 41,
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
        id: 42,
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
        id: 43,
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
        id: 44,
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
        id: 45,
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
        id: 46,
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
        id: 47,
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
        id: 48,
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
        id: 49,
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
        id: 50,
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
        id: 51,
        text: "The sequence of energy flow in an ecosystem is typically",
        options: [
          { id: "A", text: "Sun -> Consumers -> Producers" },
          { id: "B", text: "Sun -> Producers -> Consumers -> Decomposers" },
          { id: "C", text: "Decomposers -> Producers -> Consumers" },
          { id: "D", text: "Consumers -> Producers -> Decomposers -> Sun" }
        ],
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "english",
    name: "English Language",
    description: "Grammar, Vocabulary, Comprehension",
    icon: "book-open",
    questions: [
      // Q1-10: Vocabulary - Synonyms
      { id: 1, text: "Choose the word nearest in meaning to <b><i><u>Ephemeral</u></i></b>.", options: [{ id: "A", text: "Eternal" }, { id: "B", text: "Fleeting" }, { id: "C", text: "Solid" }, { id: "D", text: "Beautiful" }], correctAnswer: "B" },
      { id: 2, text: "Choose the word nearest in meaning to <b><i><u>Ubiquitous</u></i></b>.", options: [{ id: "A", text: "Rare" }, { id: "B", text: "Omnipresent" }, { id: "C", text: "Hidden" }, { id: "D", text: "Useful" }], correctAnswer: "B" },
      { id: 3, text: "Choose the word nearest in meaning to <b><i><u>Alleviate</u></i></b>.", options: [{ id: "A", text: "Worsen" }, { id: "B", text: "Aggravate" }, { id: "C", text: "Ease" }, { id: "D", text: "Ignore" }], correctAnswer: "C" },
      { id: 4, text: "Choose the word nearest in meaning to <b><i><u>Cogent</u></i></b>.", options: [{ id: "A", text: "Weak" }, { id: "B", text: "Convincing" }, { id: "C", text: "Confusing" }, { id: "D", text: "Lengthy" }], correctAnswer: "B" },
      { id: 5, text: "Choose the word nearest in meaning to <b><i><u>Ambiguous</u></i></b>.", options: [{ id: "A", text: "Clear" }, { id: "B", text: "Uncertain" }, { id: "C", text: "Loud" }, { id: "D", text: "Quiet" }], correctAnswer: "B" },
      { id: 6, text: "Choose the word nearest in meaning to <b><i><u>Docile</u></i></b>.", options: [{ id: "A", text: "Stubborn" }, { id: "B", text: "Wild" }, { id: "C", text: "Submissive" }, { id: "D", text: "Aggressive" }], correctAnswer: "C" },
      { id: 7, text: "Choose the word nearest in meaning to <b><i><u>Gregarious</u></i></b>.", options: [{ id: "A", text: "Shy" }, { id: "B", text: "Sociable" }, { id: "C", text: "Lonely" }, { id: "D", text: "Hostile" }], correctAnswer: "B" },
      { id: 8, text: "Choose the word nearest in meaning to <b><i><u>Innate</u></i></b>.", options: [{ id: "A", text: "Learned" }, { id: "B", text: "Acquired" }, { id: "C", text: "Inborn" }, { id: "D", text: "External" }], correctAnswer: "C" },
      { id: 9, text: "Choose the word nearest in meaning to <b><i><u>Lucid</u></i></b>.", options: [{ id: "A", text: "Murky" }, { id: "B", text: "Obscure" }, { id: "C", text: "Clear" }, { id: "D", text: "Difficult" }], correctAnswer: "C" },
      { id: 10, text: "Choose the word nearest in meaning to <b><i><u>Mitigate</u></i></b>.", options: [{ id: "A", text: "Intensify" }, { id: "B", text: "Lessen" }, { id: "C", text: "Increase" }, { id: "D", text: "Begin" }], correctAnswer: "B" },
      // Q11-20: Grammar - Sentence Correction
      { id: 11, text: "Identify the grammatical error: 'Me and him went to the park.'", options: [{ id: "A", text: "Me" }, { id: "B", text: "him" }, { id: "C", text: "went" }, { id: "D", text: "No error" }], correctAnswer: "A" }, // Should be "He and I"
      { id: 12, text: "Identify the grammatical error: 'She don't like spinach.'", options: [{ id: "A", text: "She" }, { id: "B", text: "don't" }, { id: "C", text: "like" }, { id: "D", text: "No error" }], correctAnswer: "B" }, // Should be "doesn't"
      { id: 13, text: "Identify the grammatical error: 'There is many reasons to be cheerful.'", options: [{ id: "A", text: "There" }, { id: "B", text: "is" }, { id: "C", text: "many" }, { id: "D", text: "No error" }], correctAnswer: "B" }, // Should be "are"
      { id: 14, text: "Identify the grammatical error: 'He lay the book on the table.'", options: [{ id: "A", text: "He" }, { id: "B", text: "lay" }, { id: "C", text: "on" }, { id: "D", text: "No error" }], correctAnswer: "D" }, // Correct use of lay (past tense of lay)
      { id: 15, text: "Identify the grammatical error: 'Whom did you give the book to?'", options: [{ id: "A", text: "Whom" }, { id: "B", text: "did" }, { id: "C", text: "give" }, { id: "D", text: "No error" }], correctAnswer: "D" }, // Correct use of whom
      { id: 16, text: "Identify the grammatical error: 'Each of the students have their own locker.'", options: [{ id: "A", text: "Each" }, { id: "B", text: "students" }, { id: "C", text: "have" }, { id: "D", text: "No error" }], correctAnswer: "C" }, // Should be "has"
      { id: 17, text: "Identify the grammatical error: 'The team is playing their best game.'", options: [{ id: "A", text: "team" }, { id: "B", text: "is playing" }, { id: "C", text: "their" }, { id: "D", text: "No error" }], correctAnswer: "C" }, // Should be "its" (team is singular)
      { id: 18, text: "Identify the grammatical error: 'She runs quicker than him.'", options: [{ id: "A", text: "runs" }, { id: "B", text: "quicker" }, { id: "C", text: "him" }, { id: "D", text: "No error" }], correctAnswer: "B" }, // Should be "more quickly" (adverb modifying verb)
      { id: 19, text: "Identify the grammatical error: 'I wish I was taller.'", options: [{ id: "A", text: "wish" }, { id: "B", text: "was" }, { id: "C", text: "taller" }, { id: "D", text: "No error" }], correctAnswer: "B" }, // Should be "were" (subjunctive mood)
      { id: 20, text: "Identify the grammatical error: 'Between you and I, this is a secret.'", options: [{ id: "A", text: "Between" }, { id: "B", text: "you" }, { id: "C", text: "I" }, { id: "D", text: "No error" }], correctAnswer: "C" }, // Should be "me" (object of preposition)
      // Q21-30: Vocabulary - Antonyms
      { id: 21, text: "Choose the word opposite in meaning to <b><i><u>Frequent</u></i></b>.", options: [{ id: "A", text: "Common" }, { id: "B", text: "Usual" }, { id: "C", text: "Rare" }, { id: "D", text: "Often" }], correctAnswer: "C" },
      { id: 22, text: "Choose the word opposite in meaning to <b><i><u>Expand</u></i></b>.", options: [{ id: "A", text: "Grow" }, { id: "B", text: "Shrink" }, { id: "C", text: "Stretch" }, { id: "D", text: "Increase" }], correctAnswer: "B" },
      { id: 23, text: "Choose the word opposite in meaning to <b><i><u>Ancient</u></i></b>.", options: [{ id: "A", text: "Old" }, { id: "B", text: "Historic" }, { id: "C", text: "Modern" }, { id: "D", text: "Past" }], correctAnswer: "C" },
      { id: 24, text: "Choose the word opposite in meaning to <b><i><u>Courageous</u></i></b>.", options: [{ id: "A", text: "Brave" }, { id: "B", text: "Bold" }, { id: "C", text: "Fearful" }, { id: "D", text: "Heroic" }], correctAnswer: "C" },
      { id: 25, text: "Choose the word opposite in meaning to <b><i><u>Generous</u></i></b>.", options: [{ id: "A", text: "Kind" }, { id: "B", text: "Stingy" }, { id: "C", text: "Giving" }, { id: "D", text: "Charitable" }], correctAnswer: "B" },
      { id: 26, text: "Choose the word opposite in meaning to <b><i><u>Victory</u></i></b>.", options: [{ id: "A", text: "Success" }, { id: "B", text: "Triumph" }, { id: "C", text: "Win" }, { id: "D", text: "Defeat" }], correctAnswer: "D" },
      { id: 27, text: "Choose the word opposite in meaning to <b><i><u>Blunt</u></i></b>.", options: [{ id: "A", text: "Sharp" }, { id: "B", text: "Dull" }, { id: "C", text: "Direct" }, { id: "D", text: "Rude" }], correctAnswer: "A" },
      { id: 28, text: "Choose the word opposite in meaning to <b><i><u>Pessimistic</u></i></b>.", options: [{ id: "A", text: "Negative" }, { id: "B", text: "Gloomy" }, { id: "C", text: "Hopeful" }, { id: "D", text: "Doubtful" }], correctAnswer: "C" },
      { id: 29, text: "Choose the word opposite in meaning to <b><i><u>Trivial</u></i></b>.", options: [{ id: "A", text: "Minor" }, { id: "B", text: "Unimportant" }, { id: "C", text: "Significant" }, { id: "D", text: "Small" }], correctAnswer: "C" },
      { id: 30, text: "Choose the word opposite in meaning to <b><i><u>Flexible</u></i></b>.", options: [{ id: "A", text: "Adaptable" }, { id: "B", text: "Rigid" }, { id: "C", text: "Pliant" }, { id: "D", text: "Supple" }], correctAnswer: "B" },
      // Q31-40: Sentence Completion
      { id: 31, text: "Despite the heavy rain, the football match ____.", options: [{ id: "A", text: "cancelled" }, { id: "B", text: "went ahead" }, { id: "C", text: "was delayed" }, { id: "D", text: "finished early" }], correctAnswer: "B" },
      { id: 32, text: "She is known for her ____; she always gives money to charity.", options: [{ id: "A", text: "generosity" }, { id: "B", text: "frugality" }, { id: "C", text: "wisdom" }, { id: "D", text: "patience" }], correctAnswer: "A" },
      { id: 33, text: "The old building was ____ and needed extensive repairs.", options: [{ id: "A", text: "modern" }, { id: "B", text: "dilapidated" }, { id: "C", text: "renovated" }, { id: "D", text: "sturdy" }], correctAnswer: "B" },
      { id: 34, text: "His argument was so ____ that everyone was convinced.", options: [{ id: "A", text: "weak" }, { id: "B", text: "flimsy" }, { id: "C", text: "cogent" }, { id: "D", text: "confusing" }], correctAnswer: "C" },
      { id: 35, text: "The instructions were ____; I couldn't understand what to do.", options: [{ id: "A", text: "clear" }, { id: "B", text: "simple" }, { id: "C", text: "explicit" }, { id: "D", text: "ambiguous" }], correctAnswer: "D" },
      { id: 36, text: "The politician's speech was full of ____ promises that were unlikely to be kept.", options: [{ id: "A", text: "sincere" }, { id: "B", text: "realistic" }, { id: "C", text: "empty" }, { id: "D", text: "concrete" }], correctAnswer: "C" },
      { id: 37, text: "After weeks of drought, the ____ rain was a welcome sight.", options: [{ id: "A", text: "sparse" }, { id: "B", text: "torrential" }, { id: "C", text: "light" }, { id: "D", text: "intermittent" }], correctAnswer: "B" },
      { id: 38, text: "He had a ____ tendency to exaggerate his achievements.", options: [{ id: "A", text: "slight" }, { id: "B", text: "rare" }, { id: "C", text: "marked" }, { id: "D", text: "hidden" }], correctAnswer: "C" },
      { id: 39, text: "The scientist made a ____ discovery that changed the field of medicine.", options: [{ id: "A", text: "minor" }, { id: "B", text: "groundbreaking" }, { id: "C", text: "controversial" }, { id: "D", text: "expected" }], correctAnswer: "B" },
      { id: 40, text: "Despite his ____ appearance, he was incredibly strong.", options: [{ id: "A", text: "robust" }, { id: "B", text: "frail" }, { id: "C", text: "powerful" }, { id: "D", text: "athletic" }], correctAnswer: "B" },
    ]
  },
  {
    id: "english-2",
    name: "English Language 2",
    description: "Opposite & Nearest Meanings, Lexis & Structure",
    icon: "spell-check",
    questions: [
      // Opposite Meaning 1-10
      { id: 1, text: "Choose the option opposite in meaning to the bolded word: The student was very <b><i><u>attentive</u></i></b> during the lecture.", options: [{ id: "A", text: "focused" }, { id: "B", text: "distracted" }, { id: "C", text: "alert" }, { id: "D", text: "observant" }], correctAnswer: "B" },
      { id: 2, text: "Choose the option opposite in meaning to the bolded word: His <b><i><u>generous</u></i></b> donation helped the charity significantly.", options: [{ id: "A", text: "kind" }, { id: "B", text: "stingy" }, { id: "C", text: "large" }, { id: "D", text: "helpful" }], correctAnswer: "B" },
      { id: 3, text: "Choose the option opposite in meaning to the bolded word: The journey across the desert was <b><i><u>arduous</u></i></b>.", options: [{ id: "A", text: "difficult" }, { id: "B", text: "easy" }, { id: "C", text: "long" }, { id: "D", text: "tiring" }], correctAnswer: "B" },
      { id: 4, text: "Choose the option opposite in meaning to the bolded word: She gave a <b><i><u>concise</u></i></b> summary of the report.", options: [{ id: "A", text: "brief" }, { id: "B", text: "short" }, { id: "C", text: "lengthy" }, { id: "D", text: "clear" }], correctAnswer: "C" },
      { id: 5, text: "Choose the option opposite in meaning to the bolded word: The teacher found the student's excuse <b><i><u>plausible</u></i></b>.", options: [{ id: "A", text: "believable" }, { id: "B", text: "unlikely" }, { id: "C", text: "reasonable" }, { id: "D", text: "possible" }], correctAnswer: "B" },
      { id: 6, text: "Choose the option opposite in meaning to the bolded word: They decided to <b><i><u>demolish</u></i></b> the old building.", options: [{ id: "A", text: "destroy" }, { id: "B", text: "construct" }, { id: "C", text: "ruin" }, { id: "D", text: "damage" }], correctAnswer: "B" },
      { id: 7, text: "Choose the option opposite in meaning to the bolded word: His reaction to the news was quite <b><i><u>apathetic</u></i></b>.", options: [{ id: "A", text: "indifferent" }, { id: "B", text: "uninterested" }, { id: "C", text: "enthusiastic" }, { id: "D", text: "calm" }], correctAnswer: "C" },
      { id: 8, text: "Choose the option opposite in meaning to the bolded word: The company's profits have been <b><i><u>declining</u></i></b>.", options: [{ id: "A", text: "decreasing" }, { id: "B", text: "falling" }, { id: "C", text: "improving" }, { id: "D", text: "shrinking" }], correctAnswer: "C" },
      { id: 9, text: "Choose the option opposite in meaning to the bolded word: The witness remained <b><i><u>steadfast</u></i></b> in her testimony.", options: [{ id: "A", text: "firm" }, { id: "B", text: "unwavering" }, { id: "C", text: "hesitant" }, { id: "D", text: "loyal" }], correctAnswer: "C" },
      { id: 10, text: "Choose the option opposite in meaning to the bolded word: The rules seemed unnecessarily <b><i><u>rigid</u></i></b>.", options: [{ id: "A", text: "strict" }, { id: "B", text: "flexible" }, { id: "C", text: "inflexible" }, { id: "D", text: "firm" }], correctAnswer: "B" },
      // Lexis and Structure 11-25
      { id: 11, text: "Choose the option that best completes the sentence: If I ___ you, I would apologize immediately.", options: [{ id: "A", text: "am" }, { id: "B", text: "was" }, { id: "C", text: "were" }, { id: "D", text: "be" }], correctAnswer: "C" },
      { id: 12, text: "Choose the option that best completes the sentence: Neither the students nor the teacher ___ present.", options: [{ id: "A", text: "were" }, { id: "B", text: "was" }, { id: "C", text: "are" }, { id: "D", text: "be" }], correctAnswer: "B" }, // Verb agrees with the noun closer to it (teacher)
      { id: 13, text: "Choose the option that best completes the sentence: She has been studying English ___ three years.", options: [{ id: "A", text: "since" }, { id: "B", text: "for" }, { id: "C", text: "during" }, { id: "D", text: "ago" }], correctAnswer: "B" },
      { id: 14, text: "Choose the option that best completes the sentence: He is ___ tired to continue working.", options: [{ id: "A", text: "so" }, { id: "B", text: "very" }, { id: "C", text: "too" }, { id: "D", text: "much" }], correctAnswer: "C" },
      { id: 15, text: "Choose the option that best completes the sentence: The book ___ I borrowed from the library is overdue.", options: [{ id: "A", text: "who" }, { id: "B", text: "whose" }, { id: "C", text: "whom" }, { id: "D", text: "which" }], correctAnswer: "D" },
      { id: 16, text: "Choose the option that best completes the sentence: 'Can you swim?' 'Yes, I ___.'", options: [{ id: "A", text: "can" }, { id: "B", text: "do" }, { id: "C", text: "am" }, { id: "D", text: "swim" }], correctAnswer: "A" },
      { id: 17, text: "Choose the option that best completes the sentence: We arrived ___ the airport just in time.", options: [{ id: "A", text: "in" }, { id: "B", text: "on" }, { id: "C", text: "at" }, { id: "D", text: "to" }], correctAnswer: "C" },
      { id: 18, text: "Choose the option that best completes the sentence: I look forward ___ hearing from you soon.", options: [{ id: "A", text: "to" }, { id: "B", text: "for" }, { id: "C", text: "in" }, { id: "D", text: "at" }], correctAnswer: "A" }, // "to hearing" - 'to' is a preposition here
      { id: 19, text: "Choose the option that best completes the sentence: This coffee is ___ hot to drink.", options: [{ id: "A", text: "very" }, { id: "B", text: "so" }, { id: "C", text: "too" }, { id: "D", text: "much" }], correctAnswer: "C" },
      { id: 20, text: "Choose the option that best completes the sentence: Would you mind ___ the window?", options: [{ id: "A", text: "to close" }, { id: "B", text: "closing" }, { id: "C", text: "close" }, { id: "D", text: "closed" }], correctAnswer: "B" },
      { id: 21, text: "Choose the option that best completes the sentence: He insisted ___ paying for the meal.", options: [{ id: "A", text: "on" }, { id: "B", text: "to" }, { id: "C", text: "for" }, { id: "D", text: "about" }], correctAnswer: "A" },
      { id: 22, text: "Choose the option that best completes the sentence: The news ___ quite shocking.", options: [{ id: "A", text: "were" }, { id: "B", text: "are" }, { id: "C", text: "is" }, { id: "D", text: "be" }], correctAnswer: "C" }, // News is uncountable
      { id: 23, text: "Choose the option that best completes the sentence: She is interested ___ learning French.", options: [{ id: "A", text: "on" }, { id: "B", text: "at" }, { id: "C", text: "to" }, { id: "D", text: "in" }], correctAnswer: "D" },
      { id: 24, text: "Choose the option that best completes the sentence: He ran ___ quickly that I couldn't catch him.", options: [{ id: "A", text: "so" }, { id: "B", text: "too" }, { id: "C", text: "very" }, { id: "D", text: "such" }], correctAnswer: "A" },
      { id: 25, text: "Choose the option that best completes the sentence: By this time next year, I ___ my degree.", options: [{ id: "A", text: "will finish" }, { id: "B", text: "finish" }, { id: "C", text: "am finishing" }, { id: "D", text: "will have finished" }], correctAnswer: "D" },
      // Nearest Meaning 26-35
      { id: 26, text: "Choose the option nearest in meaning to the bolded word: The lawyer presented a <b><i><u>cogent</u></i></b> argument.", options: [{ id: "A", text: "weak" }, { id: "B", text: "confusing" }, { id: "C", text: "convincing" }, { id: "D", text: "long" }], correctAnswer: "C" },
      { id: 27, text: "Choose the option nearest in meaning to the bolded word: He showed remarkable <b><i><u>fortitude</u></i></b> during the crisis.", options: [{ id: "A", text: "weakness" }, { id: "B", text: "courage" }, { id: "C", text: "fear" }, { id: "D", text: "sadness" }], correctAnswer: "B" },
      { id: 28, text: "Choose the option nearest in meaning to the bolded word: The details of the plan remain <b><i><u>obscure</u></i></b>.", options: [{ id: "A", text: "clear" }, { id: "B", text: "simple" }, { id: "C", text: "unclear" }, { id: "D", text: "obvious" }], correctAnswer: "C" },
      { id: 29, text: "Choose the option nearest in meaning to the bolded word: The politician tried to <b><i><u>appease</u></i></b> the angry crowd.", options: [{ id: "A", text: "provoke" }, { id: "B", text: "irritate" }, { id: "C", text: "pacify" }, { id: "D", text: "ignore" }], correctAnswer: "C" },
      { id: 30, text: "Choose the option nearest in meaning to the bolded word: She has a <b><i><u>propensity</u></i></b> to arrive late.", options: [{ id: "A", text: "dislike" }, { id: "B", text: "tendency" }, { id: "C", text: "inability" }, { id: "D", text: "reason" }], correctAnswer: "B" },
      { id: 31, text: "Choose the option nearest in meaning to the bolded word: His comments were completely <b><i><u>irrelevant</u></i></b> to the topic.", options: [{ id: "A", text: "related" }, { id: "B", text: "important" }, { id: "C", text: "unrelated" }, { id: "D", text: "interesting" }], correctAnswer: "C" },
      { id: 32, text: "Choose the option nearest in meaning to the bolded word: The evidence against him was <b><i><u>incontrovertible</u></i></b>.", options: [{ id: "A", text: "doubtful" }, { id: "B", text: "questionable" }, { id: "C", text: "indisputable" }, { id: "D", text: "weak" }], correctAnswer: "C" },
      { id: 33, text: "Choose the option nearest in meaning to the bolded word: The manager decided to <b><i><u>delegate</u></i></b> the task.", options: [{ id: "A", text: "keep" }, { id: "B", text: "assign" }, { id: "C", text: "cancel" }, { id: "D", text: "complete" }], correctAnswer: "B" },
      { id: 34, text: "Choose the option nearest in meaning to the bolded word: He is known for his <b><i><u>meticulous</u></i></b> attention to detail.", options: [{ id: "A", text: "careless" }, { id: "B", text: "hasty" }, { id: "C", text: "thorough" }, { id: "D", text: "brief" }], correctAnswer: "C" },
      { id: 35, text: "Choose the option nearest in meaning to the bolded word: The government implemented <b><i><u>stringent</u></i></b> security measures.", options: [{ id: "A", text: "lax" }, { id: "B", text: "loose" }, { id: "C", text: "strict" }, { id: "D", text: "optional" }], correctAnswer: "C" },
       // Lexis and Structure 36-40
      { id: 36, text: "Choose the option that best completes the sentence: Not only ___ late, but he also forgot his homework.", options: [{ id: "A", text: "he was" }, { id: "B", text: "was he" }, { id: "C", text: "he is" }, { id: "D", text: "is he" }], correctAnswer: "B" }, // Inversion after "Not only"
      { id: 37, text: "Choose the option that best completes the sentence: I wish I ___ play the piano.", options: [{ id: "A", text: "can" }, { id: "B", text: "could" }, { id: "C", text: "will" }, { id: "D", text: "may" }], correctAnswer: "B" }, // Subjunctive mood
      { id: 38, text: "Choose the option that best completes the sentence: The committee ___ unable to agree.", options: [{ id: "A", text: "is" }, { id: "B", text: "are" }, { id: "C", text: "was" }, { id: "D", text: "were" }], correctAnswer: "D" }, // Collective noun treated as plural (members unable to agree)
      { id: 39, text: "Choose the option that best completes the sentence: He is one of the players who ___ selected for the team.", options: [{ id: "A", text: "was" }, { id: "B", text: "were" }, { id: "C", text: "is" }, { id: "D", text: "are" }], correctAnswer: "B" }, // Verb agrees with 'players' (who refers to players)
      { id: 40, text: "Choose the option that best completes the sentence: She prefers tea ___ coffee.", options: [{ id: "A", text: "than" }, { id: "B", text: "over" }, { id: "C", text: "to" }, { id: "D", text: "from" }], correctAnswer: "C" }
    ]
  },
  {
    id: "english-3",
    name: "English Language 3",
    description: "Advanced Grammar, Vocabulary, and Composition",
    icon: "book",
    questions: [
      {
        id: 1,
        text: "What is the definition of a gerund?",
        options: [
          { id: "A", text: "A verb form used as a noun" },
          { id: "B", text: "A verb form used as an adjective" },
          { id: "C", text: "A verb form used as an adverb" },
          { id: "D", text: "A verb form used as a preposition" }
        ],
        correctAnswer: "A",
        explanation: "A gerund ends in -ing and functions as a noun (e.g., 'Swimming' is fun)."
      },
      {
        id: 2,
        text: "Which sentence correctly uses a gerund phrase as the subject?",
        options: [
          { id: "A", text: "Running quickly requires practice." },
          { id: "B", text: "The running dog chased the ball." },
          { id: "C", text: "To run quickly is his goal." },
          { id: "D", text: "Quickly running, he tripped." }
        ],
        correctAnswer: "A",
        explanation: "'Running quickly' is the gerund phrase acting as the subject of the verb 'requires'."
      },
      {
        id: 3,
        text: "What is the definition of a participle?",
        options: [
          { id: "A", text: "A verb form used as a noun" },
          { id: "B", text: "A verb form used as an adjective" },
          { id: "C", text: "A verb form used as an adverb" },
          { id: "D", text: "A verb form used as a preposition" }
        ],
        correctAnswer: "B",
        explanation: "Participles (ending in -ing, -ed, -en, etc.) function as adjectives, modifying nouns or pronouns (e.g., the 'running' dog, a 'broken' toy)."
      },
      {
        id: 4,
        text: "Which sentence contains a participle phrase modifying 'the man'?",
        options: [
          { id: "A", text: "Walking down the street requires care." },
          { id: "B", text: "The man is walking down the street." },
          { id: "C", text: "The man, walking down the street, waved." },
          { id: "D", text: "To walk down the street, the man needed shoes." }
        ],
        correctAnswer: "C",
        explanation: "'Walking down the street' is a participle phrase describing 'the man'."
      },
      {
        id: 5,
        text: "What is the function of a dependent clause?",
        options: [
          { id: "A", text: "To stand alone as a complete sentence." },
          { id: "B", text: "To add information but be unable to stand alone as a sentence." },
          { id: "C", text: "To always act as the subject of a sentence." },
          { id: "D", text: "To connect two independent clauses." }
        ],
        correctAnswer: "B",
        explanation: "A dependent (or subordinate) clause has a subject and verb but starts with a subordinating conjunction or relative pronoun, making it unable to stand alone (e.g., 'because it was raining')."
      },
      {
        id: 6,
        text: "Identify the dependent clause: 'She left the party early because she felt tired.'",
        options: [
          { id: "A", text: "She left the party early" },
          { id: "B", text: "because she felt tired" },
          { id: "C", text: "She left the party" },
          { id: "D", text: "she felt tired" }
        ],
        correctAnswer: "B",
        explanation: "The clause starts with the subordinating conjunction 'because' and cannot stand alone as a complete thought."
      },
      {
        id: 7,
        text: "Which type of clause is underlined: '<u>Whoever finishes first</u> will win the prize.'?",
        options: [
          { id: "A", text: "Independent Clause" },
          { id: "B", text: "Adjective Clause" },
          { id: "C", text: "Adverb Clause" },
          { id: "D", text: "Noun Clause" }
        ],
        correctAnswer: "D",
        explanation: "The underlined dependent clause is functioning as the subject of the verb 'will win', which is a role fulfilled by noun clauses."
      },
      {
        id: 8,
        text: "Choose the correct pronoun: 'The manager gave the bonus to ___ and her.'",
        options: [
          { id: "A", text: "I" },
          { id: "B", text: "me" },
          { id: "C", text: "myself" },
          { id: "D", text: "my" }
        ],
        correctAnswer: "B",
        explanation: "'Me' is the correct objective case pronoun, as it is the object of the preposition 'to'."
      },
      {
        id: 9,
        text: "Which sentence uses the subjunctive mood correctly?",
        options: [
          { id: "A", text: "I wish I was richer." },
          { id: "B", text: "If he was here, he would help." },
          { id: "C", text: "The requirement is that every student attends." },
          { id: "D", text: "I suggest that he be careful." }
        ],
        correctAnswer: "D",
        explanation: "The subjunctive 'be' is used after verbs like 'suggest that'. Options A and B should use 'were' for hypothetical situations."
      },
      {
        id: 10,
        text: "Select the word that means 'brief and comprehensive'.",
        options: [
          { id: "A", text: "Verbose" },
          { id: "B", text: "Succinct" },
          { id: "C", text: "Elaborate" },
          { id: "D", text: "Lengthy" }
        ],
        correctAnswer: "B",
        explanation: "'Succinct' means expressed clearly and briefly. 'Verbose' means using too many words."
      },
      {
        id: 11,
        text: "What is the main difference between an adjective clause and an adverb clause?",
        options: [
          { id: "A", text: "Adjective clauses modify verbs, adverbs modify nouns." },
          { id: "B", text: "Adjective clauses modify nouns/pronouns, adverb clauses modify verbs/adjectives/adverbs." },
          { id: "C", text: "Adjective clauses start with prepositions, adverb clauses start with conjunctions." },
          { id: "D", text: "Adjective clauses can stand alone, adverb clauses cannot." }
        ],
        correctAnswer: "B",
        explanation: "Adjective clauses answer 'which one?' or 'what kind?' about a noun/pronoun. Adverb clauses answer 'how?', 'when?', 'where?', or 'why?' about a verb, adjective, or another adverb."
      },
      {
        id: 12,
        text: "Identify the type of sentence: 'Although the weather was bad, we still had the picnic.'",
        options: [
          { id: "A", text: "Simple" },
          { id: "B", text: "Compound" },
          { id: "C", text: "Complex" },
          { id: "D", text: "Compound-Complex" }
        ],
        correctAnswer: "C",
        explanation: "This sentence contains one independent clause ('we still had the picnic') and one dependent clause ('Although the weather was bad'), making it complex."
      },
      {
        id: 13,
        text: "Choose the correctly punctuated sentence:",
        options: [
          { id: "A", text: "He bought apples oranges and bananas." },
          { id: "B", text: "He bought apples, oranges, and bananas." },
          { id: "C", text: "He bought apples, oranges and, bananas." },
          { id: "D", text: "He bought, apples, oranges, and bananas." }
        ],
        correctAnswer: "B",
        explanation: "Commas are needed to separate items in a series. The comma before 'and' (Oxford comma) is standard in formal writing."
      },
      {
        id: 14,
        text: "What does the idiom 'bite the bullet' mean?",
        options: [
          { id: "A", text: "To eat something quickly." },
          { id: "B", text: "To face a difficult situation with courage." },
          { id: "C", text: "To avoid responsibility." },
          { id: "D", text: "To injure oneself." }
        ],
        correctAnswer: "B",
        explanation: "The idiom means to endure a painful or unpleasant situation that is unavoidable."
      },
      {
        id: 15,
        text: "Select the synonym for 'ubiquitous'.",
        options: [
          { id: "A", text: "Rare" },
          { id: "B", text: "Scarce" },
          { id: "C", text: "Omnipresent" },
          { id: "D", text: "Hidden" }
        ],
        correctAnswer: "C",
        explanation: "'Ubiquitous' means present or found everywhere, making 'omnipresent' the best synonym."
      },
      {
        id: 16,
        text: "Identify the dangling modifier: 'Having finished the assignment, the TV was turned on.'",
        options: [
          { id: "A", text: "Having finished the assignment" },
          { id: "B", text: "the assignment" },
          { id: "C", text: "the TV" },
          { id: "D", text: "was turned on" }
        ],
        correctAnswer: "A",
        explanation: "The introductory participial phrase 'Having finished the assignment' does not logically modify the subject 'the TV'. It seems to modify an implied person (e.g., 'Having finished the assignment, *I* turned on the TV')."
      },
      {
        id: 17,
        text: "Choose the word with the correct spelling:",
        options: [
          { id: "A", text: "Definitely" },
          { id: "B", text: "Definately" },
          { id: "C", text: "Definitly" },
          { id: "D", text: "Definitley" }
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is D-E-F-I-N-I-T-E-L-Y."
      },
      {
        id: 18,
        text: "Which sentence demonstrates correct parallel structure?",
        options: [
          { id: "A", text: "She likes reading, writing, and to swim." },
          { id: "B", text: "She likes to read, writing, and swimming." },
          { id: "C", text: "She likes reading, to write, and swimming." },
          { id: "D", text: "She likes reading, writing, and swimming." }
        ],
        correctAnswer: "D",
        explanation: "Parallel structure requires items in a list to be in the same grammatical form. Option D uses three gerunds (-ing forms)."
      },
      {
        id: 19,
        text: "Select the antonym for 'ameliorate'.",
        options: [
          { id: "A", text: "Improve" },
          { id: "B", text: "Enhance" },
          { id: "C", text: "Worsen" },
          { id: "D", text: "Alleviate" }
        ],
        correctAnswer: "C",
        explanation: "'Ameliorate' means to make something bad better. 'Worsen' is its direct opposite."
      },
      {
        id: 20,
        text: "What is the function of an appositive phrase?",
        options: [
          { id: "A", text: "To modify a verb." },
          { id: "B", text: "To connect two clauses." },
          { id: "C", text: "To rename or identify a nearby noun or pronoun." },
          { id: "D", text: "To show possession." }
        ],
        correctAnswer: "C",
        explanation: "An appositive provides extra information or renames another noun (e.g., 'My brother, *a talented musician*, plays the guitar')."
      },
      {
        id: 21,
        text: "Choose the correct form of the verb: 'Neither of the options ___ suitable.'",
        options: [
          { id: "A", text: "is" },
          { id: "B", text: "are" },
          { id: "C", text: "was" },
          { id: "D", text: "were" }
        ],
        correctAnswer: "A",
        explanation: "Pronouns like 'neither', 'either', 'each', and 'everyone' are singular and take singular verbs."
      },
      {
        id: 22,
        text: "Which transition word indicates contrast?",
        options: [
          { id: "A", text: "Furthermore" },
          { id: "B", text: "Consequently" },
          { id: "C", text: "However" },
          { id: "D", text: "Similarly" }
        ],
        correctAnswer: "C",
        explanation: "'However' is used to introduce a statement that contrasts with or contradicts something that has just been said."
      },
      {
        id: 23,
        text: "What is redundancy in writing?",
        options: [
          { id: "A", text: "Using complex vocabulary." },
          { id: "B", text: "Repeating an idea unnecessarily using different words." },
          { id: "C", text: "Including supporting evidence." },
          { id: "D", text: "Writing very long sentences." }
        ],
        correctAnswer: "B",
        explanation: "Redundancy involves needless repetition (e.g., 'advance forward', 'basic fundamentals')."
      },
      {
        id: 24,
        text: "Select the word that means 'easily angered'.",
        options: [
          { id: "A", text: "Placid" },
          { id: "B", text: "Irascible" },
          { id: "C", text: "Amiable" },
          { id: "D", text: "Stoic" }
        ],
        correctAnswer: "B",
        explanation: "'Irascible' means having or showing a tendency to be easily angered. 'Placid' means calm."
      },
      {
        id: 25,
        text: "Identify the figure of speech: 'The wind whispered through the trees.'",
        options: [
          { id: "A", text: "Metaphor" },
          { id: "B", text: "Simile" },
          { id: "C", text: "Personification" },
          { id: "D", text: "Hyperbole" }
        ],
        correctAnswer: "C",
        explanation: "Personification gives human qualities (whispering) to inanimate objects (wind)."
      },
      {
        id: 26,
        text: "Choose the sentence with the correct pronoun case: ",
        options: [
          { id: "A", text: "Her and her friend went shopping." },
          { id: "B", text: "The award was given to she and I." },
          { id: "C", text: "It was they who solved the puzzle." },
          { id: "D", text: "Me and him are on the same team." }
        ],
        correctAnswer: "C",
        explanation: "'They' is the correct subjective case pronoun used after the linking verb 'was'. A should be 'She and her friend', B should be 'her and me', D should be 'He and I'."
      },
      {
        id: 27,
        text: "What does 'nonplussed' mean?",
        options: [
          { id: "A", text: "Unimpressed or indifferent." },
          { id: "B", text: "Extremely pleased." },
          { id: "C", text: "Surprised and confused so much that one is unsure how to react." },
          { id: "D", text: "Angry and frustrated." }
        ],
        correctAnswer: "C",
        explanation: "Being nonplussed means being bewildered or perplexed."
      },
      {
        id: 28,
        text: "Which sentence uses 'affect' and 'effect' correctly?",
        options: [
          { id: "A", text: "The weather will effect our plans." },
          { id: "B", text: "Lack of sleep can affect your concentration." },
          { id: "C", text: "What affect did the medicine have?" },
          { id: "D", text: "The main affect was positive." }
        ],
        correctAnswer: "B",
        explanation: "'Affect' is usually a verb meaning 'to influence'. 'Effect' is usually a noun meaning 'a result' or 'consequence'. Option B uses 'affect' correctly as a verb."
      },
      {
        id: 29,
        text: "Select the synonym for 'ephemeral'.",
        options: [
          { id: "A", text: "Permanent" },
          { id: "B", text: "Fleeting" },
          { id: "C", text: "Strong" },
          { id: "D", text: "Important" }
        ],
        correctAnswer: "B",
        explanation: "'Ephemeral' means lasting for a very short time, making 'fleeting' the best synonym."
      },
      {
        id: 30,
        text: "Identify the sentence type: 'Run!'",
        options: [
          { id: "A", text: "Declarative" },
          { id: "B", text: "Interrogative" },
          { id: "C", text: "Imperative" },
          { id: "D", text: "Exclamatory" }
        ],
        correctAnswer: "C",
        explanation: "An imperative sentence gives a command or makes a request. The subject ('you') is implied."
      },
       {
        id: 31,
        text: "What is the mood of the verb in: 'If I were king, I would decree a holiday.'?",
        options: [
          { id: "A", text: "Indicative" },
          { id: "B", text: "Imperative" },
          { id: "C", text: "Subjunctive" },
          { id: "D", text: "Conditional" }
        ],
        correctAnswer: "C",
        explanation: "The subjunctive mood is used for hypothetical or contrary-to-fact situations, often using 'were' instead of 'was'."
      },
      {
        id: 32,
        text: "Choose the word that means 'a person who loves books'.",
        options: [
          { id: "A", text: "Bibliophobe" },
          { id: "B", text: "Bibliophile" },
          { id: "C", text: "Librarian" },
          { id: "D", text: "Author" }
        ],
        correctAnswer: "B",
        explanation: "A 'bibliophile' is a lover and collector of books. A 'bibliophobe' fears or hates books."
      },
      {
        id: 33,
        text: "Which sentence contains a misplaced modifier?",
        options: [
          { id: "A", text: "Covered in mud, the dog wagged its tail happily." },
          { id: "B", text: "The girl walked the dog wearing a red coat." },
          { id: "C", text: "Happily, the dog wagged its tail." },
          { id: "D", text: "The dog covered in mud wagged its tail." }
        ],
        correctAnswer: "B",
        explanation: "The modifier 'wearing a red coat' seems to describe the dog instead of the girl. It should be placed closer to 'girl' (e.g., 'The girl wearing a red coat walked the dog')."
      },
      {
        id: 34,
        text: "Select the antonym for 'gregarious'.",
        options: [
          { id: "A", text: "Sociable" },
          { id: "B", text: "Outgoing" },
          { id: "C", text: "Friendly" },
          { id: "D", text: "Reclusive" }
        ],
        correctAnswer: "D",
        explanation: "'Gregarious' means fond of company; sociable. 'Reclusive' means avoiding the company of other people; solitary."
      },
      {
        id: 35,
        text: "What is the purpose of a thesis statement?",
        options: [
          { id: "A", text: "To summarize the entire essay." },
          { id: "B", text: "To present the main argument or point of the essay." },
          { id: "C", text: "To introduce the topic with a question." },
          { id: "D", text: "To provide background information." }
        ],
        correctAnswer: "B",
        explanation: "The thesis statement clearly states the central argument or claim that the essay will develop and support."
      },
      {
        id: 36,
        text: "Choose the correct word: 'Please lay/lie the book on the table.'",
        options: [
          { id: "A", text: "lay" },
          { id: "B", text: "lie" }
        ],
        correctAnswer: "A",
        explanation: "'Lay' means 'to put or place' and takes a direct object ('the book'). 'Lie' means 'to recline' and does not take a direct object."
      },
      {
        id: 37,
        text: "What does the prefix 'mal-' mean (as in 'malfunction')?",
        options: [
          { id: "A", text: "Good" },
          { id: "B", text: "Bad or ill" },
          { id: "C", text: "Against" },
          { id: "D", text: "Before" }
        ],
        correctAnswer: "B",
        explanation: "The prefix 'mal-' typically indicates something bad, wrong, or ill."
      },
      {
        id: 38,
        text: "Identify the voice of the verb: 'The report was written by the committee.'",
        options: [
          { id: "A", text: "Active voice" },
          { id: "B", text: "Passive voice" },
          { id: "C", text: "Subjunctive voice" },
          { id: "D", text: "Imperative voice" }
        ],
        correctAnswer: "B",
        explanation: "In the passive voice, the subject ('The report') receives the action of the verb ('was written'). The active version would be 'The committee wrote the report'."
      },
      {
        id: 39,
        text: "Select the word meaning 'to make amends for wrongdoing'.",
        options: [
          { id: "A", text: "Exacerbate" },
          { id: "B", text: "Atone" },
          { id: "C", text: "Condone" },
          { id: "D", text: "Aggravate" }
        ],
        correctAnswer: "B",
        explanation: "'Atone' means to make reparation or amends for a sin, crime, error, etc."
      },
      {
        id: 40,
        text: "Which punctuation mark is used to indicate possession for a plural noun ending in 's'?",
        options: [
          { id: "A", text: "Apostrophe before the s ('s)" },
          { id: "B", text: "Apostrophe after the s (s')" },
          { id: "C", text: "No apostrophe" },
          { id: "D", text: "A colon (:)" }
        ],
        correctAnswer: "B",
        explanation: "For plural nouns already ending in 's', add only an apostrophe after the 's' to show possession (e.g., 'the students' books')."
      }
    ]
  },
  {
    id: "integrated-science",
    name: "Integrated Science",
    description: "Fundamental Concepts in Physics, Chemistry, Biology",
    icon: "flask",
    questions: [
      // Physics 1-18
      { id: 1, text: "What is the SI unit of force?", options: [{ id: "A", text: "Joule (J)" }, { id: "B", text: "Watt (W)" }, { id: "C", text: "Newton (N)" }, { id: "D", text: "Pascal (Pa)" }], correctAnswer: "C" },
      { id: 2, text: "Which of the following is a vector quantity?", options: [{ id: "A", text: "Speed" }, { id: "B", text: "Mass" }, { id: "C", text: "Distance" }, { id: "D", text: "Velocity" }], correctAnswer: "D" },
      { id: 3, text: "The energy possessed by an object due to its motion is called:", options: [{ id: "A", text: "Potential energy" }, { id: "B", text: "Kinetic energy" }, { id: "C", text: "Chemical energy" }, { id: "D", text: "Thermal energy" }], correctAnswer: "B" },
      { id: 4, text: "What is the primary function of a simple machine?", options: [{ id: "A", text: "To increase energy" }, { id: "B", text: "To reduce friction" }, { id: "C", text: "To make work easier by changing force or direction" }, { id: "D", text: "To generate electricity" }], correctAnswer: "C" },
      { id: 5, text: "Which law of motion states that for every action, there is an equal and opposite reaction?", options: [{ id: "A", text: "Newton's First Law" }, { id: "B", text: "Newton's Second Law" }, { id: "C", text: "Newton's Third Law" }, { id: "D", text: "Law of Conservation of Energy" }], correctAnswer: "C" },
      { id: 6, text: "Heat transfer through direct contact is known as:", options: [{ id: "A", text: "Conduction" }, { id: "B", text: "Convection" }, { id: "C", text: "Radiation" }, { id: "D", text: "Evaporation" }], correctAnswer: "A" },
      { id: 7, text: "Sound waves travel fastest through:", options: [{ id: "A", text: "Solids" }, { id: "B", text: "Liquids" }, { id: "C", text: "Gases" }, { id: "D", text: "Vacuum" }], correctAnswer: "A" },
      { id: 8, text: "The bending of light as it passes from one medium to another is called:", options: [{ id: "A", text: "Reflection" }, { id: "B", text: "Refraction" }, { id: "C", text: "Diffraction" }, { id: "D", text: "Dispersion" }], correctAnswer: "B" },
      { id: 9, text: "What type of lens is used to correct nearsightedness (myopia)?", options: [{ id: "A", text: "Concave lens" }, { id: "B", text: "Convex lens" }, { id: "C", text: "Bifocal lens" }, { id: "D", text: "Cylindrical lens" }], correctAnswer: "A" },
      { id: 10, text: "What is the SI unit of electric current?", options: [{ id: "A", text: "Volt (V)" }, { id: "B", text: "Ohm (Ω)" }, { id: "C", text: "Watt (W)" }, { id: "D", text: "Ampere (A)" }], correctAnswer: "D" },
      { id: 11, text: "Ohm's law relates voltage, current, and:", options: [{ id: "A", text: "Power" }, { id: "B", text: "Resistance" }, { id: "C", text: "Energy" }, { id: "D", text: "Charge" }], correctAnswer: "B" },
      { id: 12, text: "Which of the following is a non-renewable source of energy?", options: [{ id: "A", text: "Solar" }, { id: "B", text: "Wind" }, { id: "C", text: "Coal" }, { id: "D", text: "Hydroelectric" }], correctAnswer: "C" },
      { id: 13, text: "The force that opposes motion between surfaces in contact is:", options: [{ id: "A", text: "Gravity" }, { id: "B", text: "Inertia" }, { id: "C", text: "Friction" }, { id: "D", text: "Tension" }], correctAnswer: "C" },
      { id: 14, text: "What is the definition of work in physics?", options: [{ id: "A", text: "Force multiplied by time" }, { id: "B", text: "Force multiplied by distance" }, { id: "C", text: "Mass multiplied by acceleration" }, { id: "D", text: "Power multiplied by time" }], correctAnswer: "B" },
      { id: 15, text: "The rate of change of velocity is called:", options: [{ id: "A", text: "Speed" }, { id: "B", text: "Momentum" }, { id: "C", text: "Acceleration" }, { id: "D", text: "Displacement" }], correctAnswer: "C" },
      { id: 16, text: "Which color of light has the longest wavelength?", options: [{ id: "A", text: "Violet" }, { id: "B", text: "Blue" }, { id: "C", text: "Green" }, { id: "D", text: "Red" }], correctAnswer: "D" },
      { id: 17, text: "Materials that allow electricity to flow easily are called:", options: [{ id: "A", text: "Insulators" }, { id: "B", text: "Conductors" }, { id: "C", text: "Semiconductors" }, { id: "D", text: "Resistors" }], correctAnswer: "B" },
      { id: 18, text: "Pressure is defined as:", options: [{ id: "A", text: "Force per unit volume" }, { id: "B", text: "Force per unit area" }, { id: "C", text: "Mass per unit volume" }, { id: "D", text: "Energy per unit time" }], correctAnswer: "B" },
      // Chemistry 19-37
      { id: 19, text: "What is the smallest unit of an element that retains the properties of that element?", options: [{ id: "A", text: "Molecule" }, { id: "B", text: "Compound" }, { id: "C", text: "Atom" }, { id: "D", text: "Ion" }], correctAnswer: "C" },
      { id: 20, text: "Which subatomic particle has a positive charge?", options: [{ id: "A", text: "Electron" }, { id: "B", text: "Neutron" }, { id: "C", text: "Proton" }, { id: "D", text: "Photon" }], correctAnswer: "C" },
      { id: 21, text: "The atomic number of an element is determined by the number of:", options: [{ id: "A", text: "Neutrons" }, { id: "B", text: "Electrons" }, { id: "C", text: "Protons" }, { id: "D", text: "Protons and Neutrons" }], correctAnswer: "C" },
      { id: 22, text: "What type of chemical bond involves the transfer of electrons from one atom to another?", options: [{ id: "A", text: "Covalent bond" }, { id: "B", text: "Ionic bond" }, { id: "C", text: "Metallic bond" }, { id: "D", text: "Hydrogen bond" }], correctAnswer: "B" },
      { id: 23, text: "What is the chemical formula for water?", options: [{ id: "A", text: "CO2" }, { id: "B", text: "H2O2" }, { id: "C", text: "H2O" }, { id: "D", text: "NaCl" }], correctAnswer: "C" },
      { id: 24, text: "Acids typically taste:", options: [{ id: "A", text: "Sour" }, { id: "B", text: "Sweet" }, { id: "C", text: "Salty" }, { id: "D", text: "Bitter" }], correctAnswer: "A" },
      { id: 25, text: "Bases (alkalis) turn red litmus paper:", options: [{ id: "A", text: "Red" }, { id: "B", text: "Blue" }, { id: "C", text: "Green" }, { id: "D", text: "Colorless" }], correctAnswer: "B" },
      { id: 26, text: "The reaction between an acid and a base is called:", options: [{ id: "A", text: "Oxidation" }, { id: "B", text: "Reduction" }, { id: "C", text: "Neutralization" }, { id: "D", text: "Combustion" }], correctAnswer: "C" },
      { id: 27, text: "What is the main component of natural gas?", options: [{ id: "A", text: "Ethane" }, { id: "B", text: "Propane" }, { id: "C", text: "Butane" }, { id: "D", text: "Methane" }], correctAnswer: "D" },
      { id: 28, text: "Which of the following is a physical change?", options: [{ id: "A", text: "Burning wood" }, { id: "B", text: "Rusting iron" }, { id: "C", text: "Melting ice" }, { id: "D", text: "Cooking an egg" }], correctAnswer: "C" },
      { id: 29, text: "Which process is used to separate insoluble solids from a liquid?", options: [{ id: "A", text: "Evaporation" }, { id: "B", text: "Distillation" }, { id: "C", text: "Filtration" }, { id: "D", text: "Chromatography" }], correctAnswer: "C" },
      { id: 30, text: "Elements in the same group of the periodic table have similar:", options: [{ id: "A", text: "Atomic masses" }, { id: "B", text: "Numbers of protons" }, { id: "C", text: "Chemical properties" }, { id: "D", text: "Numbers of neutrons" }], correctAnswer: "C" },
      { id: 31, text: "What is the pH value of a neutral solution?", options: [{ id: "A", text: "Less than 7" }, { id: "B", text: "Equal to 7" }, { id: "C", text: "Greater than 7" }, { id: "D", text: "Equal to 0" }], correctAnswer: "B" },
      { id: 32, text: "The process of a substance combining with oxygen is called:", options: [{ id: "A", text: "Reduction" }, { id: "B", text: "Neutralization" }, { id: "C", text: "Oxidation" }, { id: "D", text: "Sublimation" }], correctAnswer: "C" },
      { id: 33, text: "Which state of matter has a definite volume but no definite shape?", options: [{ id: "A", text: "Solid" }, { id: "B", text: "Liquid" }, { id: "C", text: "Gas" }, { id: "D", text: "Plasma" }], correctAnswer: "B" },
      { id: 34, text: "What are isotopes?", options: [{ id: "A", text: "Atoms with the same number of protons but different numbers of electrons" }, { id: "B", text: "Atoms with the same number of neutrons but different numbers of protons" }, { id: "C", text: "Atoms with the same number of protons but different numbers of neutrons" }, { id: "D", text: "Atoms with different numbers of protons and neutrons" }], correctAnswer: "C" },
      { id: 35, text: "Which metal is liquid at room temperature?", options: [{ id: "A", text: "Iron" }, { id: "B", text: "Gold" }, { id: "C", text: "Mercury" }, { id: "D", text: "Aluminium" }], correctAnswer: "C" },
      { id: 36, text: "A substance made up of two or more elements chemically combined is a:", options: [{ id: "A", text: "Mixture" }, { id: "B", text: "Solution" }, { id: "C", text: "Compound" }, { id: "D", text: "Element" }], correctAnswer: "C" },
      { id: 37, text: "What gas is produced during photosynthesis?", options: [{ id: "A", text: "Carbon Dioxide" }, { id: "B", text: "Nitrogen" }, { id: "C", text: "Oxygen" }, { id: "D", text: "Hydrogen" }], correctAnswer: "C" },
      // Biology 38-56
      { id: 38, text: "What is the basic unit of life?", options: [{ id: "A", text: "Organ" }, { id: "B", text: "Tissue" }, { id: "C", text: "Cell" }, { id: "D", text: "Molecule" }], correctAnswer: "C" },
      { id: 39, text: "Which organelle is known as the 'powerhouse' of the cell?", options: [{ id: "A", text: "Nucleus" }, { id: "B", text: "Ribosome" }, { id: "C", text: "Chloroplast" }, { id: "D", text: "Mitochondrion" }], correctAnswer: "D" },
      { id: 40, text: "Which part of the plant cell is responsible for photosynthesis?", options: [{ id: "A", text: "Cell Wall" }, { id: "B", text: "Mitochondrion" }, { id: "C", text: "Chloroplast" }, { id: "D", text: "Vacuole" }], correctAnswer: "C" },
      { id: 41, text: "The process by which plants make their own food using sunlight is called:", options: [{ id: "A", text: "Respiration" }, { id: "B", text: "Transpiration" }, { id: "C", text: "Photosynthesis" }, { id: "D", text: "Fermentation" }], correctAnswer: "C" },
      { id: 42, text: "Which human organ system is responsible for transporting oxygen and nutrients throughout the body?", options: [{ id: "A", text: "Respiratory System" }, { id: "B", text: "Digestive System" }, { id: "C", text: "Nervous System" }, { id: "D", text: "Circulatory System" }], correctAnswer: "D" },
      { id: 43, text: "What is the main function of the respiratory system?", options: [{ id: "A", text: "To break down food" }, { id: "B", text: "To transport blood" }, { id: "C", text: "To exchange gases (oxygen and carbon dioxide)" }, { id: "D", text: "To remove waste products" }], correctAnswer: "C" },
      { id: 44, text: "Which part of the digestive system is primarily responsible for absorbing nutrients?", options: [{ id: "A", text: "Stomach" }, { id: "B", text: "Small intestine" }, { id: "C", text: "Large intestine" }, { id: "D", text: "Oesophagus" }], correctAnswer: "B" },
      { id: 45, text: "What is the control center of the cell, containing genetic material?", options: [{ id: "A", text: "Cytoplasm" }, { id: "B", text: "Mitochondrion" }, { id: "C", text: "Nucleus" }, { id: "D", text: "Cell Membrane" }], correctAnswer: "C" },
      { id: 46, text: "Which blood cells are responsible for fighting infections?", options: [{ id: "A", text: "Red blood cells" }, { id: "B", text: "White blood cells" }, { id: "C", text: "Platelets" }, { id: "D", text: "Plasma cells" }], correctAnswer: "B" },
      { id: 47, text: "The process by which organisms produce offspring is called:", options: [{ id: "A", text: "Growth" }, { id: "B", text: "Metabolism" }, { id: "C", text: "Reproduction" }, { id: "D", text: "Adaptation" }], correctAnswer: "C" },
      { id: 48, text: "What are the building blocks of proteins?", options: [{ id: "A", text: "Fatty acids" }, { id: "B", text: "Monosaccharides" }, { id: "C", text: "Amino acids" }, { id: "D", text: "Nucleotides" }], correctAnswer: "C" },
      { id: 49, text: "Which of the following is NOT a characteristic of living things?", options: [{ id: "A", text: "Growth" }, { id: "B", text: "Movement" }, { id: "C", text: "Reproduction" }, { id: "D", text: "Crystal formation" }], correctAnswer: "D" },
      { id: 50, text: "The green pigment in plants that captures sunlight is:", options: [{ id: "A", text: "Carotene" }, { id: "B", text: "Xanthophyll" }, { id: "C", text: "Chlorophyll" }, { id: "D", text: "Anthocyanin" }], correctAnswer: "C" },
      { id: 51, text: "What is heredity?", options: [{ id: "A", text: "The study of ecosystems" }, { id: "B", text: "The process of adaptation" }, { id: "C", text: "The passing of traits from parents to offspring" }, { id: "D", text: "The interaction between organisms" }], correctAnswer: "C" },
      { id: 52, text: "An organism that makes its own food is called a(n):", options: [{ id: "A", text: "Consumer" }, { id: "B", text: "Producer" }, { id: "C", text: "Decomposer" }, { id: "D", text: "Herbivore" }], correctAnswer: "B" },
      { id: 53, text: "Which part of the flower develops into a fruit?", options: [{ id: "A", text: "Petal" }, { id: "B", text: "Stamen" }, { id: "C", text: "Ovary" }, { id: "D", text: "Sepal" }], correctAnswer: "C" },
      { id: 54, text: "The process of breaking down food into smaller molecules that the body can absorb is called:", options: [{ id: "A", text: "Respiration" }, { id: "B", text: "Circulation" }, { id: "C", text: "Excretion" }, { id: "D", text: "Digestion" }], correctAnswer: "D" },
      { id: 55, text: "What is an ecosystem?", options: [{ id: "A", text: "A single species living in an area" }, { id: "B", text: "All the plants in a region" }, { id: "C", text: "A community of organisms interacting with their physical environment" }, { id: "D", text: "The physical environment only" }], correctAnswer: "C" },
      { id: 56, text: "Which structure controls what enters and leaves an animal cell?", options: [{ id: "A", text: "Cell Wall" }, { id: "B", text: "Nucleus" }, { id: "C", text: "Cell Membrane" }, { id: "D", text: "Cytoplasm" }], correctAnswer: "C" },
    ]
  },
  {
    id: "integrated-science-2",
    name: "Integrated Science 2",
    description: "Intermediate Concepts in Physics, Chemistry, Biology",
    icon: "beaker",
    questions: [
        // Physics
        { id: 1, text: "What is the unit of measurement for electrical resistance?", options: [{ id: "A", text: "Ampere (A)" }, { id: "B", text: "Volt (V)" }, { id: "C", text: "Ohm (Ω)" }, { id: "D", text: "Watt (W)" }], correctAnswer: "C" },
        { id: 2, text: "Which type of mirror can form a real, inverted image?", options: [{ id: "A", text: "Plane mirror" }, { id: "B", text: "Convex mirror" }, { id: "C", text: "Concave mirror" }, { id: "D", text: "All mirrors" }], correctAnswer: "C" },
        { id: 3, text: "The transfer of heat through the movement of fluids (liquids or gases) is called:", options: [{ id: "A", text: "Conduction" }, { id: "B", text: "Convection" }, { id: "C", text: "Radiation" }, { id: "D", text: "Insulation" }], correctAnswer: "B" },
        { id: 4, text: "What property of a wave determines its pitch (for sound) or color (for light)?", options: [{ id: "A", text: "Amplitude" }, { id: "B", text: "Wavelength" }, { id: "C", text: "Frequency" }, { id: "D", text: "Speed" }], correctAnswer: "C" },
        { id: 5, text: "According to Archimedes' principle, the buoyant force on an object is equal to the:", options: [{ id: "A", text: "Weight of the object" }, { id: "B", text: "Volume of the object" }, { id: "C", text: "Weight of the fluid displaced by the object" }, { id: "D", text: "Density of the object" }], correctAnswer: "C" },
        { id: 6, text: "Which simple machine is essentially an inclined plane wrapped around a cylinder?", options: [{ id: "A", text: "Lever" }, { id: "B", text: "Pulley" }, { id: "C", text: "Wedge" }, { id: "D", text: "Screw" }], correctAnswer: "D" },
        { id: 7, text: "Power is calculated as:", options: [{ id: "A", text: "Work / Time" }, { id: "B", text: "Force x Distance" }, { id: "C", text: "Mass x Acceleration" }, { id: "D", text: "Voltage x Resistance" }], correctAnswer: "A" },
        { id: 8, text: "Momentum is the product of an object's mass and its:", options: [{ id: "A", text: "Acceleration" }, { id: "B", text: "Velocity" }, { id: "C", text: "Weight" }, { id: "D", text: "Force" }], correctAnswer: "B" },
        { id: 9, text: "In a parallel circuit, the total resistance is always ____ the smallest individual resistance.", options: [{ id: "A", text: "greater than" }, { id: "B", text: "equal to" }, { id: "C", text: "less than" }, { id: "D", text: "double" }], correctAnswer: "C" },
        { id: 10, text: "Which form of electromagnetic radiation has the highest energy?", options: [{ id: "A", text: "Radio waves" }, { id: "B", text: "Visible light" }, { id: "C", text: "X-rays" }, { id: "D", text: "Gamma rays" }], correctAnswer: "D" },
        { id: 11, text: "The change of state from gas to liquid is called:", options: [{ id: "A", text: "Evaporation" }, { id: "B", text: "Condensation" }, { id: "C", text: "Sublimation" }, { id: "D", text: "Melting" }], correctAnswer: "B" },
        { id: 12, text: "Which law states that energy cannot be created or destroyed, only transformed?", options: [{ id: "A", text: "Ohm's Law" }, { id: "B", text: "Newton's Second Law" }, { id: "C", text: "Law of Conservation of Energy" }, { id: "D", text: "Archimedes' Principle" }], correctAnswer: "C" },
        { id: 13, text: "The splitting of white light into its constituent colours is known as:", options: [{ id: "A", text: "Reflection" }, { id: "B", text: "Refraction" }, { id: "C", text: "Dispersion" }, { id: "D", text: "Diffraction" }], correctAnswer: "C" },
        // Chemistry
        { id: 14, text: "Which group in the periodic table contains the noble gases?", options: [{ id: "A", text: "Group 1" }, { id: "B", text: "Group 2" }, { id: "C", text: "Group 17" }, { id: "D", text: "Group 18" }], correctAnswer: "D" },
        { id: 15, text: "What type of reaction occurs when a substance burns in oxygen?", options: [{ id: "A", text: "Neutralization" }, { id: "B", text: "Decomposition" }, { id: "C", text: "Combustion" }, { id: "D", text: "Precipitation" }], correctAnswer: "C" },
        { id: 16, text: "A solution with a pH of 9 is considered:", options: [{ id: "A", text: "Acidic" }, { id: "B", text: "Neutral" }, { id: "C", text: "Basic (alkaline)" }, { id: "D", text: "Highly acidic" }], correctAnswer: "C" },
        { id: 17, text: "Which separation technique is best suited for separating dissolved solids from a liquid?", options: [{ id: "A", text: "Filtration" }, { id: "B", text: "Decantation" }, { id: "C", text: "Evaporation" }, { id: "D", text: "Sieving" }], correctAnswer: "C" },
        { id: 18, text: "The process of coating iron with zinc to prevent rusting is called:", options: [{ id: "A", text: "Electroplating" }, { id: "B", text: "Galvanizing" }, { id: "C", text: "Anodizing" }, { id: "D", text: "Painting" }], correctAnswer: "B" },
        { id: 19, text: "What is the main difference between a mixture and a compound?", options: [{ id: "A", text: "Mixtures are always solids, compounds are liquids" }, { id: "B", text: "Components in a mixture retain their properties, while components in a compound do not" }, { id: "C", text: "Mixtures can only be separated by chemical means" }, { id: "D", text: "Compounds have variable compositions" }], correctAnswer: "B" },
        { id: 20, text: "Which subatomic particles are found in the nucleus of an atom?", options: [{ id: "A", text: "Protons and Electrons" }, { id: "B", text: "Neutrons and Electrons" }, { id: "C", text: "Protons and Neutrons" }, { id: "D", text: "Only Electrons" }], correctAnswer: "C" },
        { id: 21, text: "Hardness of water is mainly caused by the presence of dissolved salts of:", options: [{ id: "A", text: "Sodium and potassium" }, { id: "B", text: "Calcium and magnesium" }, { id: "C", text: "Iron and aluminium" }, { id: "D", text: "Chlorine and fluorine" }], correctAnswer: "B" },
        { id: 22, text: "The chemical symbol for Gold is:", options: [{ id: "A", text: "Go" }, { id: "B", text: "Ag" }, { id: "C", text: "Au" }, { id: "D", text: "Gd" }], correctAnswer: "C" },
        { id: 23, text: "What is produced when an acid reacts with a metal carbonate?", options: [{ id: "A", text: "Salt, water, and hydrogen gas" }, { id: "B", text: "Salt and water only" }, { id: "C", text: "Salt, water, and carbon dioxide gas" }, { id: "D", text: "Salt and hydrogen gas only" }], correctAnswer: "C" },
        { id: 24, text: "Crude oil is separated into fractions using a process called:", options: [{ id: "A", text: "Filtration" }, { id: "B", text: "Fractional distillation" }, { id: "C", text: "Chromatography" }, { id: "D", text: "Evaporation" }], correctAnswer: "B" },
        { id: 25, text: "Which of the following is an example of an alloy?", options: [{ id: "A", text: "Water" }, { id: "B", text: "Salt" }, { id: "C", text: "Air" }, { id: "D", text: "Brass" }], correctAnswer: "D" },
        { id: 26, text: "Polymers are large molecules made up of repeating smaller units called:", options: [{ id: "A", text: "Atoms" }, { id: "B", text: "Isotopes" }, { id: "C", text: "Monomers" }, { id: "D", text: "Compounds" }], correctAnswer: "C" },
        // Biology
        { id: 27, text: "Which part of the plant is primarily responsible for absorbing water and minerals from the soil?", options: [{ id: "A", text: "Leaf" }, { id: "B", text: "Stem" }, { id: "C", text: "Flower" }, { id: "D", text: "Root" }], correctAnswer: "D" },
        { id: 28, text: "The process of releasing energy from food in the presence of oxygen is called:", options: [{ id: "A", text: "Photosynthesis" }, { id: "B", text: "Anaerobic respiration" }, { id: "C", text: "Aerobic respiration" }, { id: "D", text: "Transpiration" }], correctAnswer: "C" },
        { id: 29, text: "Which type of blood vessel carries blood away from the heart?", options: [{ id: "A", text: "Vein" }, { id: "B", text: "Artery" }, { id: "C", text: "Capillary" }, { id: "D", text: "Ventricle" }], correctAnswer: "B" },
        { id: 30, text: "What is the name of the tube that connects the throat to the lungs?", options: [{ id: "A", text: "Oesophagus" }, { id: "B", text: "Trachea" }, { id: "C", text: "Bronchus" }, { id: "D", text: "Larynx" }], correctAnswer: "B" },
        { id: 31, text: "Hormones are chemical messengers produced by which system?", options: [{ id: "A", text: "Nervous system" }, { id: "B", text: "Circulatory system" }, { id: "C", text: "Digestive system" }, { id: "D", text: "Endocrine system" }], correctAnswer: "D" },
        { id: 32, text: "What is the primary function of the kidneys?", options: [{ id: "A", text: "To pump blood" }, { id: "B", text: "To digest food" }, { id: "C", text: "To filter waste from the blood and produce urine" }, { id: "D", text: "To produce hormones" }], correctAnswer: "C" },
        { id: 33, text: "Which part of the brain controls balance and coordination?", options: [{ id: "A", text: "Cerebrum" }, { id: "B", text: "Cerebellum" }, { id: "C", text: "Medulla oblongata" }, { id: "D", text: "Hypothalamus" }], correctAnswer: "B" },
        { id: 34, text: "A group of similar cells performing a specific function is called a(n):", options: [{ id: "A", text: "Organ" }, { id: "B", text: "Organ system" }, { id: "C", text: "Tissue" }, { id: "D", text: "Organism" }], correctAnswer: "C" },
        { id: 35, text: "The process by which water vapour is lost from the leaves of plants is called:", options: [{ id: "A", text: "Photosynthesis" }, { id: "B", text: "Respiration" }, { id: "C", text: "Transpiration" }, { id: "D", text: "Germination" }], correctAnswer: "C" },
        { id: 36, text: "Which nutrient is the primary source of energy for the body?", options: [{ id: "A", text: "Proteins" }, { id: "B", text: "Fats" }, { id: "C", text: "Vitamins" }, { id: "D", text: "Carbohydrates" }], correctAnswer: "D" },
        { id: 37, text: "Vaccination helps the body develop:", options: [{ id: "A", text: "Antibiotics" }, { id: "B", text: "Immunity" }, { id: "C", text: "Antigens" }, { id: "D", text: "Pathogens" }], correctAnswer: "B" },
        { id: 38, text: "The part of the central nervous system encased within the vertebral column is the:", options: [{ id: "A", text: "Brain" }, { id: "B", text: "Cerebellum" }, { id: "C", text: "Spinal cord" }, { id: "D", text: "Medulla oblongata" }], correctAnswer: "C" },
        { id: 39, text: "What is the role of decomposers (like bacteria and fungi) in an ecosystem?", options: [{ id: "A", text: "To produce food using sunlight" }, { id: "B", text: "To consume plants" }, { id: "C", text: "To break down dead organic matter" }, { id: "D", text: "To control the population of predators" }], correctAnswer: "C" },
        { id: 40, text: "Which structure in a plant transports water from the roots to the leaves?", options: [{ id: "A", text: "Phloem" }, { id: "B", text: "Xylem" }, { id: "C", text: "Stomata" }, { id: "D", text: "Epidermis" }], correctAnswer: "B" },
    ]
  },
  {
    id: "integrated-science-3",
    name: "Integrated Science 3",
    description: "Further Concepts in Physics, Chemistry, Biology",
    icon: "atom", // Yet another science icon
    questions: [
      {
        id: 1,
        text: "Which of the following is a renewable energy source?",
        options: [
          { id: "A", text: "Coal" },
          { id: "B", text: "Natural Gas" },
          { id: "C", text: "Solar Power" },
          { id: "D", text: "Petroleum" }
        ],
        correctAnswer: "C"
      },
      {
        id: 2,
        text: "The process by which a solid changes directly into a gas without passing through the liquid state is called",
        options: [
          { id: "A", text: "Evaporation" },
          { id: "B", text: "Condensation" },
          { id: "C", text: "Melting" },
          { id: "D", text: "Sublimation" }
        ],
        correctAnswer: "D"
      },
      {
        id: 3,
        text: "Which part of the human digestive system is primarily responsible for absorbing water from undigested food?",
        options: [
          { id: "A", text: "Stomach" },
          { id: "B", text: "Small intestine" },
          { id: "C", text: "Large intestine" },
          { id: "D", text: "Oesophagus" }
        ],
        correctAnswer: "C"
      },
      {
        id: 4,
        text: "The tendency of an object to resist changes in its state of motion is called",
        options: [
          { id: "A", text: "Momentum" },
          { id: "B", text: "Inertia" },
          { id: "C", text: "Friction" },
          { id: "D", text: "Weight" }
        ],
        correctAnswer: "B"
      },
      {
        id: 5,
        text: "Which of the following is NOT a state of matter?",
        options: [
          { id: "A", text: "Solid" },
          { id: "B", text: "Liquid" },
          { id: "C", text: "Gas" },
          { id: "D", text: "Energy" }
        ],
        correctAnswer: "D"
      },
      {
        id: 6,
        text: "The male reproductive part of a flower is the",
        options: [
          { id: "A", text: "Pistil" },
          { id: "B", text: "Stamen" },
          { id: "C", text: "Petal" },
          { id: "D", text: "Sepal" }
        ],
        correctAnswer: "B"
      },
      {
        id: 7,
        text: "An electric circuit in which components are connected end-to-end, forming a single path for current, is called a",
        options: [
          { id: "A", text: "Series circuit" },
          { id: "B", text: "Parallel circuit" },
          { id: "C", text: "Open circuit" },
          { id: "D", text: "Short circuit" }
        ],
        correctAnswer: "A"
      },
      {
        id: 8,
        text: "Crude oil is separated into different fractions based on differences in their",
        options: [
          { id: "A", text: "Density" },
          { id: "B", text: "Boiling points" },
          { id: "C", text: "Solubility" },
          { id: "D", text: "Colour" }
        ],
        correctAnswer: "B"
      },
      {
        id: 9,
        text: "The exchange of gases (oxygen and carbon dioxide) in the lungs occurs in the",
        options: [
          { id: "A", text: "Bronchi" },
          { id: "B", text: "Trachea" },
          { id: "C", text: "Alveoli" },
          { id: "D", text: "Diaphragm" }
        ],
        correctAnswer: "C"
      },
      {
        id: 10,
        text: "A machine with a mechanical advantage greater than 1 multiplies",
        options: [
          { id: "A", text: "Speed" },
          { id: "B", text: "Distance" },
          { id: "C", text: "Force" },
          { id: "D", text: "Energy" }
        ],
        correctAnswer: "C"
      },
      {
        id: 11,
        text: "Which of the following methods is used to prevent rusting by coating iron with zinc?",
        options: [
          { id: "A", text: "Painting" },
          { id: "B", text: "Oiling" },
          { id: "C", text: "Galvanizing" },
          { id: "D", text: "Electroplating" }
        ],
        correctAnswer: "C"
      },
      {
        id: 12,
        text: "The part of the plant cell that provides rigid support and protection is the",
        options: [
          { id: "A", text: "Cell membrane" },
          { id: "B", text: "Cytoplasm" },
          { id: "C", text: "Cell wall" },
          { id: "D", text: "Nucleus" }
        ],
        correctAnswer: "C"
      },
      {
        id: 13,
        text: "The energy stored in an object due to its position or height above the ground is called",
        options: [
          { id: "A", text: "Kinetic energy" },
          { id: "B", text: "Potential energy" },
          { id: "C", text: "Thermal energy" },
          { id: "D", text: "Sound energy" }
        ],
        correctAnswer: "B"
      },
      {
        id: 14,
        text: "Which type of chemical bond involves the sharing of electrons between atoms?",
        options: [
          { id: "A", text: "Ionic bond" },
          { id: "B", text: "Covalent bond" },
          { id: "C", text: "Metallic bond" },
          { id: "D", text: "Hydrogen bond" }
        ],
        correctAnswer: "B"
      },
      {
        id: 15,
        text: "Mammals are characterized by the presence of",
        options: [
          { id: "A", text: "Feathers" },
          { id: "B", text: "Scales" },
          { id: "C", text: "Gills" },
          { id: "D", text: "Mammary glands" }
        ],
        correctAnswer: "D"
      },
      {
        id: 16,
        text: "The flow of electric charge is called",
        options: [
          { id: "A", text: "Voltage" },
          { id: "B", text: "Resistance" },
          { id: "C", text: "Current" },
          { id: "D", text: "Power" }
        ],
        correctAnswer: "C"
      },
      {
        id: 17,
        text: "A mixture consisting of small solid particles dispersed uniformly in a liquid is called a",
        options: [
          { id: "A", text: "Solution" },
          { id: "B", text: "Suspension" },
          { id: "C", text: "Colloid" },
          { id: "D", text: "Emulsion" }
        ],
        correctAnswer: "B"
      },
      {
        id: 18,
        text: "Which human sense organ detects light?",
        options: [
          { id: "A", text: "Ear" },
          { id: "B", text: "Nose" },
          { id: "C", text: "Tongue" },
          { id: "D", text: "Eye" }
        ],
        correctAnswer: "D"
      },
      {
        id: 19,
        text: "The number of complete waves passing a point per second is the wave's",
        options: [
          { id: "A", text: "Wavelength" },
          { id: "B", text: "Amplitude" },
          { id: "C", text: "Frequency" },
          { id: "D", text: "Speed" }
        ],
        correctAnswer: "C"
      },
      {
        id: 20,
        text: "The most abundant gas in the Earth's atmosphere is",
        options: [
          { id: "A", text: "Oxygen" },
          { id: "B", text: "Carbon dioxide" },
          { id: "C", text: "Nitrogen" },
          { id: "D", text: "Argon" }
        ],
        correctAnswer: "C"
      },
      {
        id: 21,
        text: "The process where an organism develops from an egg without fertilization is called",
        options: [
          { id: "A", text: "Metamorphosis" },
          { id: "B", text: "Parthenogenesis" },
          { id: "C", text: "Conjugation" },
          { id: "D", text: "Regeneration" }
        ],
        correctAnswer: "B"
      },
      {
        id: 22,
        text: "A concave lens always produces an image that is",
        options: [
          { id: "A", text: "Real and inverted" },
          { id: "B", text: "Virtual and upright" },
          { id: "C", text: "Real and upright" },
          { id: "D", text: "Virtual and inverted" }
        ],
        correctAnswer: "B"
      },
      {
        id: 23,
        text: "When dissolved in water, an alkali produces which ions?",
        options: [
          { id: "A", text: "Hydrogen ions (H⁺)" },
          { id: "B", text: "Hydroxide ions (OH⁻)" },
          { id: "C", text: "Oxide ions (O²⁻)" },
          { id: "D", text: "Chloride ions (Cl⁻)" }
        ],
        correctAnswer: "B"
      },
      {
        id: 24,
        text: "What is the primary function of the large intestine?",
        options: [
          { id: "A", text: "Digest proteins" },
          { id: "B", text: "Absorb nutrients" },
          { id: "C", text: "Absorb water" },
          { id: "D", text: "Produce bile" }
        ],
        correctAnswer: "C"
      },
      {
        id: 25,
        text: "The upward force exerted by a fluid on an object immersed in it is called",
        options: [
          { id: "A", text: "Weight" },
          { id: "B", text: "Pressure" },
          { id: "C", text: "Density" },
          { id: "D", text: "Upthrust (Buoyancy)" }
        ],
        correctAnswer: "D"
      },
      {
        id: 26,
        text: "The cracking of hydrocarbons involves breaking large molecules into smaller, more useful ones using",
        options: [
          { id: "A", text: "Low temperature and low pressure" },
          { id: "B", text: "High temperature and catalyst" },
          { id: "C", text: "Sunlight and water" },
          { id: "D", text: "Acids and bases" }
        ],
        correctAnswer: "B"
      },
      {
        id: 27,
        text: "Which system in the human body is responsible for fighting off infections?",
        options: [
          { id: "A", text: "Digestive system" },
          { id: "B", text: "Respiratory system" },
          { id: "C", text: "Nervous system" },
          { id: "D", text: "Immune system" }
        ],
        correctAnswer: "D"
      },
      {
        id: 28,
        text: "Materials that do not allow electricity to pass through them are called",
        options: [
          { id: "A", text: "Conductors" },
          { id: "B", text: "Insulators" },
          { id: "C", text: "Semiconductors" },
          { id: "D", text: "Superconductors" }
        ],
        correctAnswer: "B"
      },
      {
        id: 29,
        text: "A solution in which no more solute can be dissolved at a given temperature is called",
        options: [
          { id: "A", text: "Unsaturated" },
          { id: "B", text: "Saturated" },
          { id: "C", text: "Supersaturated" },
          { id: "D", text: "Dilute" }
        ],
        correctAnswer: "B"
      },
      {
        id: 30,
        text: "The process by which green plants manufacture their own food is called",
        options: [
          { id: "A", text: "Respiration" },
          { id: "B", text: "Transpiration" },
          { id: "C", text: "Photosynthesis" },
          { id: "D", text: "Fermentation" }
        ],
        correctAnswer: "C"
      },
      {
        id: 31,
        text: "Which type of simple machine consists of a grooved wheel and a rope or cable?",
        options: [
          { id: "A", text: "Lever" },
          { id: "B", text: "Pulley" },
          { id: "C", text: "Inclined plane" },
          { id: "D", text: "Screw" }
        ],
        correctAnswer: "B"
      },
      {
        id: 32,
        text: "Which of the following is a physical property of a substance?",
        options: [
          { id: "A", text: "Flammability" },
          { id: "B", text: "Reactivity with acid" },
          { id: "C", text: "Melting point" },
          { id: "D", text: "Ability to rust" }
        ],
        correctAnswer: "C"
      },
      {
        id: 33,
        text: "The pathway through which nerve impulses travel is called a",
        options: [
          { id: "A", text: "Blood vessel" },
          { id: "B", text: "Hormone pathway" },
          { id: "C", text: "Reflex arc" },
          { id: "D", text: "Lymphatic vessel" }
        ],
        correctAnswer: "C"
      },
      {
        id: 34,
        text: "The change in the direction of a wave as it passes around an obstacle or through a narrow opening is called",
        options: [
          { id: "A", text: "Reflection" },
          { id: "B", text: "Refraction" },
          { id: "C", text: "Diffraction" },
          { id: "D", text: "Interference" }
        ],
        correctAnswer: "C"
      },
      {
        id: 35,
        text: "Which process is used to obtain pure water from salt solution?",
        options: [
          { id: "A", text: "Filtration" },
          { id: "B", text: "Evaporation" },
          { id: "C", text: "Decantation" },
          { id: "D", text: "Distillation" }
        ],
        correctAnswer: "D"
      },
      {
        id: 36,
        text: "Which layer of the Earth's atmosphere contains the ozone layer?",
        options: [
          { id: "A", text: "Troposphere" },
          { id: "B", text: "Stratosphere" },
          { id: "C", text: "Mesosphere" },
          { id: "D", text: "Thermosphere" }
        ],
        correctAnswer: "B"
      },
      {
        id: 37,
        text: "The rate at which work is done is known as",
        options: [
          { id: "A", text: "Energy" },
          { id: "B", text: "Force" },
          { id: "C", text: "Power" },
          { id: "D", text: "Momentum" }
        ],
        correctAnswer: "C"
      },
      {
        id: 38,
        text: "Which of the following is formed when a non-metal oxide dissolves in water?",
        options: [
          { id: "A", text: "An acid" },
          { id: "B", text: "A base" },
          { id: "C", text: "A salt" },
          { id: "D", text: "A neutral solution" }
        ],
        correctAnswer: "A"
      },
      {
        id: 39,
        text: "The adaptation that allows desert plants to reduce water loss is the presence of",
        options: [
          { id: "A", text: "Large leaves" },
          { id: "B", text: "Deep roots" },
          { id: "C", text: "Thick, waxy cuticle" },
          { id: "D", text: "Bright flowers" }
        ],
        correctAnswer: "C"
      },
      {
        id: 40,
        text: "A fuse is a safety device used in electrical circuits that contains a wire designed to",
        options: [
          { id: "A", text: "Increase voltage" },
          { id: "B", text: "Decrease current" },
          { id: "C", text: "Store charge" },
          { id: "D", text: "Melt and break the circuit" }
        ],
        correctAnswer: "D"
      }
    ]
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Algebra, Geometry, Calculus and Trigonometry",
    icon: "calculator",
    questions: [
      {
        id: 1,
        text: "Solve for x: 2x + 5 = 15",
        options: [
          { id: "A", text: "x = 10" },
          { id: "B", text: "x = 5" },
          { id: "C", text: "x = 7.5" },
          { id: "D", text: "x = 20" }
        ],
        correctAnswer: "B"
      },
      {
        id: 2,
        text: "What is the derivative of x^2?",
        options: [
          { id: "A", text: "2x" },
          { id: "B", text: "x" },
          { id: "C", text: "2" },
          { id: "D", text: "0" }
        ],
        correctAnswer: "A"
      },
      {
        id: 3,
        text: "What is the area of a circle with radius r?",
        options: [
          { id: "A", text: "πr^2" },
          { id: "B", text: "2πr" },
          { id: "C", text: "πr" },
          { id: "D", text: "2πr^2" }
        ],
        correctAnswer: "A"
      },
      {
        id: 4,
        text: "What is the sum of the first 10 natural numbers?",
        options: [
          { id: "A", text: "55" },
          { id: "B", text: "100" },
          { id: "C", text: "50" },
          { id: "D", text: "10" }
        ],
        correctAnswer: "A"
      },
      {
        id: 5,
        text: "What is the equation of a line with slope m and y-intercept b?",
        options: [
          { id: "A", text: "y = mx + b" },
          { id: "B", text: "y = mx - b" },
          { id: "C", text: "y = bx + m" },
          { id: "D", text: "y = bx - m" }
        ],
        correctAnswer: "A"
      },
      {
        id: 6,
        text: "What is the approximate value of π (Pi)?",
        options: [
          { id: "A", text: "3.14" },
          { id: "B", text: "3.1416" },
          { id: "C", text: "22/7" },
          { id: "D", text: "3.0" }
        ],
        correctAnswer: "B"
      },
      {
        id: 7,
        text: "What is the quadratic formula for the solutions of ax^2 + bx + c = 0?",
        options: [
          { id: "A", text: "x = (-b ± sqrt(b^2 - 4ac)) / 2a" },
          { id: "B", text: "x = (b ± sqrt(b^2 - 4ac)) / 2a" },
          { id: "C", text: "x = (-b ± sqrt(b^2 + 4ac)) / 2a" },
          { id: "D", text: "x = (-b ± sqrt(b^2 - 4ac)) / 2c" }
        ],
        correctAnswer: "A"
      },
      {
        id: 8,
        text: "What is the volume of a sphere with radius r?",
        options: [
          { id: "A", text: "(4/3)πr^3" },
          { id: "B", text: "πr^3" },
          { id: "C", text: "4πr^2" },
          { id: "D", text: "πr^2" }
        ],
        correctAnswer: "A"
      },
      {
        id: 9,
        text: "What is the equation of a circle with center (h, k) and radius r?",
        options: [
          { id: "A", text: "(x - h)^2 + (y - k)^2 = r^2" },
          { id: "B", text: "(x + h)^2 + (y + k)^2 = r^2" },
          { id: "C", text: "(x - h)^2 + (y - k)^2 = r" },
          { id: "D", text: "x^2 + y^2 = r^2" }
        ],
        correctAnswer: "A"
      },
      {
        id: 10,
        text: "What is the sum of the angles in a triangle?",
        options: [
          { id: "A", text: "180 degrees" },
          { id: "B", text: "360 degrees" },
          { id: "C", text: "90 degrees" },
          { id: "D", text: "270 degrees" }
        ],
        correctAnswer: "A"
      },
      {
        id: 11,
        text: "What is the point-slope form equation of a line with slope m passing through point (x1, y1)?",
        options: [
          { id: "A", text: "y - y1 = m(x - x1)" },
          { id: "B", text: "y = m(x - x1) + y1" },
          { id: "C", text: "y - y1 = m(x + x1)" },
          { id: "D", text: "y + y1 = m(x - x1)" }
        ],
        correctAnswer: "A"
      },
      {
        id: 12,
        text: "What is the slope of the line represented by the equation y = -3x + 7?",
        options: [
          { id: "A", text: "3" },
          { id: "B", text: "7" },
          { id: "C", text: "-3" },
          { id: "D", text: "-3x" }
        ],
        correctAnswer: "C"
      },
      {
        id: 13,
        text: "What is the value of sin(90 degrees)?",
        options: [
          { id: "A", text: "0" },
          { id: "B", text: "1" },
          { id: "C", text: "-1" },
          { id: "D", text: "0.5" }
        ],
        correctAnswer: "B"
      },
      {
        id: 14,
        text: "What is the integral of 2x?",
        options: [
          { id: "A", text: "2" },
          { id: "B", text: "x^2 + C" },
          { id: "C", text: "2x^2 + C" },
          { id: "D", text: "x + C" }
        ],
        correctAnswer: "B"
      },
      {
        id: 15,
        text: "What is the Pythagorean theorem for a right-angled triangle with sides a, b, and hypotenuse c?",
        options: [
          { id: "A", text: "a^2 + b^2 = c^2" },
          { id: "B", text: "a + b = c" },
          { id: "C", text: "a^2 - b^2 = c^2" },
          { id: "D", text: "c^2 + a^2 = b^2" }
        ],
        correctAnswer: "A"
      },
      {
        id: 16,
        text: "Factorize the expression: x^2 - 9",
        options: [
          { id: "A", text: "(x - 3)(x - 3)" },
          { id: "B", text: "(x + 3)(x + 3)" },
          { id: "C", text: "(x - 3)(x + 3)" },
          { id: "D", text: "x(x - 9)" }
        ],
        correctAnswer: "C"
      },
      {
        id: 17,
        text: "What is 5! (5 factorial)?",
        options: [
          { id: "A", text: "5" },
          { id: "B", text: "15" },
          { id: "C", text: "120" },
          { id: "D", text: "25" }
        ],
        correctAnswer: "C"
      },
      {
        id: 18,
        text: "What is the perimeter of a rectangle with length L and width W?",
        options: [
          { id: "A", text: "L * W" },
          { id: "B", text: "L + W" },
          { id: "C", text: "2L + W" },
          { id: "D", text: "2(L + W)" }
        ],
        correctAnswer: "D"
      },
      {
        id: 19,
        text: "Solve for x: x / 4 = 5",
        options: [
          { id: "A", text: "x = 1" },
          { id: "B", text: "x = 5/4" },
          { id: "C", text: "x = 9" },
          { id: "D", text: "x = 20" }
        ],
        correctAnswer: "D"
      },
      {
        id: 20,
        text: "What is the value of cos(0 degrees)?",
        options: [
          { id: "A", text: "0" },
          { id: "B", text: "1" },
          { id: "C", text: "-1" },
          { id: "D", text: "Undefined" }
        ],
        correctAnswer: "B"
      },
      {
        id: 21,
        text: "Simplify the expression: 3(x + 2y) - (x - y)",
        options: [
          { id: "A", text: "2x + 5y" },
          { id: "B", text: "2x + 7y" },
          { id: "C", text: "4x + 5y" },
          { id: "D", text: "4x + 7y" }
        ],
        correctAnswer: "B"
      },
      {
        id: 22,
        text: "What is the area of a triangle with base b and height h?",
        options: [
          { id: "A", text: "b * h" },
          { id: "B", text: "2(b + h)" },
          { id: "C", text: "(1/2) * b * h" },
          { id: "D", text: "b + h" }
        ],
        correctAnswer: "C"
      },
      {
        id: 23,
        text: "What is the derivative of sin(x)?",
        options: [
          { id: "A", text: "cos(x)" },
          { id: "B", text: "-cos(x)" },
          { id: "C", text: "sin(x)" },
          { id: "D", text: "-sin(x)" }
        ],
        correctAnswer: "A"
      },
      {
        id: 24,
        text: "If f(x) = x^2 + 1, what is f(3)?",
        options: [
          { id: "A", text: "7" },
          { id: "B", text: "9" },
          { id: "C", text: "10" },
          { id: "D", text: "4" }
        ],
        correctAnswer: "C"
      },
       {
        id: 25,
        text: "What type of angle measures exactly 90 degrees?",
        options: [
          { id: "A", text: "Acute angle" },
          { id: "B", text: "Obtuse angle" },
          { id: "C", text: "Right angle" },
          { id: "D", text: "Straight angle" }
        ],
        correctAnswer: "C"
      },
       {
        id: 26,
        text: "What is the value of log base 10 of 100 (log₁₀(100))?",
        options: [
          { id: "A", text: "1" },
          { id: "B", text: "2" },
          { id: "C", text: "10" },
          { id: "D", text: "100" }
        ],
        correctAnswer: "B"
      },
       {
        id: 27,
        text: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: [
          { id: "A", text: "20" },
          { id: "B", text: "24" },
          { id: "C", text: "32" },
          { id: "D", text: "64" }
        ],
        correctAnswer: "C"
      },
      {
        id: 28,
        text: "What is the probability of rolling a 6 on a standard six-sided die?",
        options: [
          { id: "A", text: "1/6" },
          { id: "B", text: "1/3" },
          { id: "C", text: "1/2" },
          { id: "D", text: "1" }
        ],
        correctAnswer: "A"
      },
      {
        id: 29,
        text: "What is the value of tan(45 degrees)?",
        options: [
          { id: "A", text: "0" },
          { id: "B", text: "1" },
          { id: "C", text: "sqrt(2)" },
          { id: "D", text: "Undefined" }
        ],
        correctAnswer: "B"
      },
      {
        id: 30,
        text: "Solve the inequality: 2x - 1 < 5",
        options: [
          { id: "A", text: "x < 2" },
          { id: "B", text: "x > 2" },
          { id: "C", text: "x < 3" },
          { id: "D", text: "x > 3" }
        ],
        correctAnswer: "C"
      },
      {
        id: 31,
        text: "What is the circumference of a circle with radius r?",
        options: [
          { id: "A", text: "πr^2" },
          { id: "B", text: "2πr" },
          { id: "C", text: "πr" },
          { id: "D", text: "πd" }
        ],
        correctAnswer: "B"
      },
      {
        id: 32,
        text: "What is the integral of cos(x)?",
        options: [
          { id: "A", text: "sin(x) + C" },
          { id: "B", text: "-sin(x) + C" },
          { id: "C", text: "cos(x) + C" },
          { id: "D", text: "-cos(x) + C" }
        ],
        correctAnswer: "A"
      },
      {
        id: 33,
        text: "What is the slope of a horizontal line?",
        options: [
          { id: "A", text: "1" },
          { id: "B", text: "0" },
          { id: "C", text: "Undefined" },
          { id: "D", text: "-1" }
        ],
        correctAnswer: "B"
      },
      {
        id: 34,
        text: "What is the equation of a line with slope m and y-intercept b?",
        options: [
          { id: "A", text: "y = mx + b" },
          { id: "B", text: "y = mx - b" },
          { id: "C", text: "y = bx + m" },
          { id: "D", text: "y = bx - m" }
        ],
        correctAnswer: "A"
      }
    ]
  }
];
