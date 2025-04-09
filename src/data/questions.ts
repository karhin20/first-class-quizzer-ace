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
      }
    ]
  },
  {
    id: "cell-biology",
    name: "Cell Biology",
    description: "Cell Structure, Function, and Transport Mechanisms",
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
      }
    ]
  }
];
