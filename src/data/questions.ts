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
  },
  {
    id: "english",
    name: "English Language",
    description: "English Language",
    icon: "book",
    questions: [
      {
        id: 1,
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: Obi's family is known for their ***audacity***, so one is surprised at his _____",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: Bayo is ***careless*** in his ways while Tayo is",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: In this country, the law against armed robbery is ***stringent*** whereas that against smoking in public places is _____",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: The purpose of education is to ***facilitate*** progress, not to _____ it",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: These days many people concentrate on ***temporal*** things to the detriment of the _____",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: While your parents are _____, mine are ***liberal*** in their views",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: The judge expected ***direct*** answers but the accused was _____",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: Kofi is ***generous*** whereas his wife is _____",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: His manners are ***uncouth***, while his wife's are _____",
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
        text: "Choose the one that is most nearly opposite in meaning to the underlined word and that will, at the same time, correctly fill the gap in the sentence: The ***peak*** of Mount Everest is about six miles from its _____",
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
        text: "Choose the words that best complete each of the following sentences: The recent floods in some countries have _____ many lives",
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
        text: "Choose the words that best complete each of the following sentences: He does not smoke so the gift of an ashtray will not be quite _____",
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
        text: "Choose the words that best complete each of the following sentences: The reviewer did an excellent job at the book _____",
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
        text: "Choose the words that best complete each of the following sentences: The governor filed an _____ against the ruling of the tribunal",
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
        text: "Choose the words that best complete each of the following sentences: At the terminus, all passengers on the train will have to _____",
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
        text: "Choose the words that best complete each of the following sentences: Reading the _____ of the famous",
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
        text: "Choose the words that best complete each of the following sentences: The smaller boys had always drawn back in fear when the bully raised a fist, but this time they did not _____",
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
        text: "Choose the words that best complete each of the following sentences: The old man prayed for the _____ of his sins before he died",
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
        text: "Choose the words that best complete each of the following sentences: Inflation has caused the cost of goods to _____",
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
        text: "Choose the words that best complete each of the following sentences: The economy of the country has remained _____ despite the crisis",
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
        text: "Choose the interpretation that is most appropriate for each sentence: The principal raised eyebrows at the student's explanation. This means that the principal",
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
        text: "Choose the interpretation that is most appropriate for each sentence: Mary made a clean breast of everything. This means that Mary",
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
        text: "Choose the interpretation that is most appropriate for each sentence: Had it not rained, I would have visited you. This means that",
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
        text: "Choose the interpretation that is most appropriate for each sentence: I hadn't finished talking to Halima, when she snapped my head off. This means that she",
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
        text: "Choose the interpretation that is most appropriate for each sentence: Franca's behaviour towards Edward leaves much to be desired. This means that Franca's behaviour was",
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
        text: "Choose the interpretation that is most appropriate for each sentence: The teacher truly had his heart in the right place. This means that he was",
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
        text: "Choose the interpretation that is most appropriate for each sentence: Only teachers could afford a car. This means that",
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
        text: "Choose the interpretation that is most appropriate for each sentence: The night watchman was given the marching orders because of his negligence. This means that he was",
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
        text: "Choose the interpretation that is most appropriate for each sentence: My friend is as dull as ditchwater. This means that my friend is",
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
        text: "Choose the interpretation that is most appropriate for each sentence: The director sees Tim as the joker in the pack. This means that the director considers Tim to be",
        options: [
          { id: "A", text: "Unpredictable" },
          { id: "B", text: "Humourous" },
          { id: "C", text: "Nonchalant" },
          { id: "D", text: "Unimportant" }
        ],
        correctAnswer: "A"
      },
      {
        id: 31,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: The president of the student union said it was ***strategic*** to boycott classes to press home their demands",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: The ***proscription*** of the political parties was one of the steps taken by the military",
        options: [
          { id: "A", text: "Lauching" },
          { id: "B", text: "Expulsion" },
          { id: "C", text: "Banning" },
          { id: "D", text: "Removal" }
        ],
        correctAnswer: "C"
      },
      {
        id: 33,
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: Farmers sometimes go through the ***frustrating*** experience of having to watch their produce rot",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: The acrobatic displays left the spectators ***stunned***",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: Binetou looked quite ***resplendent*** in that red dress",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: It is foolish to depend entirely on ***mundane*** things",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: Only a ***pragmatic*** approach will solve this problem",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: The governor ***rebutted*** all the allegations against him",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: He was jailed for failing to obey the court ***injunction***",
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
        text: "Choose the word or group of words that is nearest in meaning to the underlined word as it is used in the sentence: The World Bank made funds available to the government for poverty ***alleviation***",
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
        text: "Choose the word or group of words that best complete each of the following sentences: The two players protested against the _____",
        options: [
          { id: "A", text: "Fitness twice-weekly practice" },
          { id: "B", text: "Practice fitness twice-weekly" },
          { id: "C", text: "Twice-weeky practice fitness" },
          { id: "D", text: "Twice-weekly fitness practice" }
        ],
        correctAnswer: "D"
      },
      {
        id: 42,
        text: "Choose the word or group of words that best complete each of the following sentences: If I _____ what actually happened, I would have punished him",
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
        text: "Choose the word or group of words that best complete each of the following sentences: She was certainly going to the cinema, _____?",
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
        text: "Choose the word or group of words that best complete each of the following sentences: Their _____ house is by the side of the road",
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
        text: "Choose the word or group of words that best complete each of the following sentences: He _____ his ideas very clearly at meetings",
        options: [
          { id: "A", text: "Puts out" },
          { id: "B", text: "Puts across" },
          { id: "C", text: "Puts away" },
          { id: "D", text: "Puts in" }
        ],
        correctAnswer: "B"
      },
      {
        id: 46,
        text: "Choose the word or group of words that best complete each of the following sentences: Remember to return it to Ruth; ______ hers",
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
        text: "Choose the word or group of words that best complete each of the following sentences: I want to know your religious _____",
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
        text: "Choose the word or group of words that best complete each of the following sentences: The student did the assignment, but not _____ the way I had expected",
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
        text: "Choose the word or group of words that best complete each of the following sentences: Bola invited Joe and _____ to the show",
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
        text: "Choose the word or group of words that best complete each of the following sentences: Highlights _____ the events will be televised today",
        options: [
          { id: "A", text: "Of" },
          { id: "B", text: "For" },
          { id: "C", text: "In" },
          { id: "D", text: "On" }
        ],
        correctAnswer: "A"
      },
      {
        id: 51,
        text: "Choose the word or group of words that best complete each of the following sentences: When the fire alarm went off, we all _____ the door",
        options: [
          { id: "A", text: "Made at" },
          { id: "B", text: "Made to" },
          { id: "C", text: "Made after" },
          { id: "D", text: "Made for" }
        ],
        correctAnswer: "D"
      },
      {
        id: 52,
        text: "Choose the word or group of words that best complete each of the following sentences: Jane has stopped smoking, _____?",
        options: [
          { id: "A", text: "Hasn't she" },
          { id: "B", text: "Didn't she" },
          { id: "C", text: "Isn't it" },
          { id: "D", text: "Hadn't she" }
        ],
        correctAnswer: "A"
      },
      {
        id: 53,
        text: "Choose the word or group of words that best complete each of the following sentences: Graduates find it difficult to secure _____ nowadays",
        options: [
          { id: "A", text: "An employment" },
          { id: "B", text: "Employment" },
          { id: "C", text: "Employments" },
          { id: "D", text: "Few employments" }
        ],
        correctAnswer: "B"
      },
      {
        id: 54,
        text: "Choose the word or group of words that best complete each of the following sentences: I'll try to convince him as _____ as I can",
        options: [
          { id: "A", text: "Best" },
          { id: "B", text: "Best as" },
          { id: "C", text: "The best" },
          { id: "D", text: "Well as" }
        ],
        correctAnswer: "D"
      },
      {
        id: 55,
        text: "Choose the word or group of words that best complete each of the following sentences: _____ were classmates in the university",
        options: [
          { id: "A", text: "His sister and I" },
          { id: "B", text: "Me and his sister" },
          { id: "C", text: "I and his sister" },
          { id: "D", text: "His sister and me" }
        ],
        correctAnswer: "A"
      },
      {
        id: 56,
        text: "Choose the word or group of words that best complete each of the following sentences: Their shop stocks _____ overwhelming variety of goods.",
        options: [
          { id: "A", text: "Any" },
          { id: "B", text: "Every" },
          { id: "C", text: "An" },
          { id: "D", text: "Each" }
        ],
        correctAnswer: "C"
      },
      {
        id: 57,
        text: "Choose the word or group of words that best complete each of the following sentences: It's a miracle that the child didn't die after the illness, _____?",
        options: [
          { id: "A", text: "Did she" },
          { id: "B", text: "Isn't it" },
          { id: "C", text: "Didn't she" },
          { id: "D", text: "Wasn't it" }
        ],
        correctAnswer: "B"
      },
      {
        id: 58,
        text: "Choose the word or group of words that best complete each of the following sentences: It is always good to live _____ One's means",
        options: [
          { id: "A", text: "Within" },
          { id: "B", text: "Under" },
          { id: "C", text: "With" },
          { id: "D", text: "Through" }
        ],
        correctAnswer: "A"
      },
      {
        id: 59,
        text: "Choose the word or group of words that best complete each of the following sentences: How I wish she _____ the books before Tunde arrived",
        options: [
          { id: "A", text: "Sees" },
          { id: "B", text: "Had seen" },
          { id: "C", text: "Has seen" },
          { id: "D", text: "Saw" }
        ],
        correctAnswer: "B"
      },
      {
        id: 60,
        text: "Choose the word or group of words that best complete each of the following sentences: He is currently the _____ man in this party",
        options: [
          { id: "A", text: "Most offended" },
          { id: "B", text: "More offended" },
          { id: "C", text: "Very offended" },
          { id: "D", text: "Much offended" }
        ],
        correctAnswer: "A"
      },
      {
        id: 61,
        text: "Choose the word or group of words that best complete each of the following sentences: To _____ did you speak?",
        options: [
          { id: "A", text: "Whose" },
          { id: "B", text: "Whom" },
          { id: "C", text: "Who" },
          { id: "D", text: "Which" }
        ],
        correctAnswer: "B"
      },
      {
        id: 62,
        text: "Choose the word or group of words that best complete each of the following sentences: _____ all probability, the strike will be called off today",
        options: [
          { id: "A", text: "Through" },
          { id: "B", text: "In" },
          { id: "C", text: "By" },
          { id: "D", text: "At" }
        ],
        correctAnswer: "B"
      },
      {
        id: 63,
        text: "Choose the word or group of words that best complete each of the following sentences: Amao _____ his master in every way.",
        options: [
          { id: "A", text: "Takes after" },
          { id: "B", text: "Takes over" },
          { id: "C", text: "Takes up" },
          { id: "D", text: "Takes on" }
        ],
        correctAnswer: "A"
      },
      {
        id: 64,
        text: "Choose the word or group of words that best complete each of the following sentences: He ran _____ that the defenders couldn't catch up with him",
        options: [
          { id: "A", text: "Very fast" },
          { id: "B", text: "Mush faster" },
          { id: "C", text: "So faster" },
          { id: "D", text: "So fast" }
        ],
        correctAnswer: "D"
      },
      {
        id: 65,
        text: "Choose the word or group of words that best complete each of the following sentences: I told them I would come back as soon as I _____",
        options: [
          { id: "A", text: "Should" },
          { id: "B", text: "Can" },
          { id: "C", text: "Could" },
          { id: "D", text: "Will" }
        ],
        correctAnswer: "C"
      },
      {
        id: 66,
        text: "Choose the word or group of words that best complete each of the following sentences: Isn't it high time we _____?",
        options: [
          { id: "A", text: "Started eating" },
          { id: "B", text: "Start eating" },
          { id: "C", text: "Had started" },
          { id: "D", text: "Start to eat" }
        ],
        correctAnswer: "A"
      },
      {
        id: 67,
        text: "Choose the word or group of words that best complete each of the following sentences: The reason he gave, _____ was most unconvincing",
        options: [
          { id: "A", text: "Which he had no money" },
          { id: "B", text: "Since he had no money" },
          { id: "C", text: "That he had no money" },
          { id: "D", text: "For he had no money" }
        ],
        correctAnswer: "C"
      },
      {
        id: 68,
        text: "Choose the word or group of words that best complete each of the following sentences: Sometimes minor incidents in our lives stand out because we cherish _____",
        options: [
          { id: "A", text: "It" },
          { id: "B", text: "Many" },
          { id: "C", text: "None" },
          { id: "D", text: "Them" }
        ],
        correctAnswer: "D"
      },
      {
        id: 69,
        text: "Choose the word or group of words that best complete each of the following sentences: An act of cleanliness is to dispose _____ useless items",
        options: [
          { id: "A", text: "Away" },
          { id: "B", text: "Of" },
          { id: "C", text: "With" },
          { id: "D", text: "Off" }
        ],
        correctAnswer: "B"
      },
      {
        id: 70,
        text: "Choose the word or group of words that best complete each of the following sentences: Two of his _____ left for Europe",
        options: [
          { id: "A", text: "Friends" },
          { id: "B", text: "Friend's" },
          { id: "C", text: "Friends'" },
          { id: "D", text: "Friend" }
        ],
        correctAnswer: "A"
      }
    ]
  },
  {
    id: "statistics-probability",
    name: "Statistics & Probability",
    description: "Mean, Median, Mode, Basic Probability Concepts",
    icon: "calculator", // Using 'calculator' icon
    questions: [
      {
        id: 1,
        text: "What is the mean of the following set of numbers: 2, 4, 6, 8, 10?",
        options: [
          { id: "A", text: "4" },
          { id: "B", text: "5" },
          { id: "C", text: "6" },
          { id: "D", text: "8" }
        ],
        correctAnswer: "C" // (2+4+6+8+10) / 5 = 30 / 5 = 6
      },
      {
        id: 2,
        text: "What is the median of the following set of numbers: 3, 5, 1, 8, 2?",
        options: [
          { id: "A", text: "1" },
          { id: "B", text: "3" },
          { id: "C", text: "5" },
          { id: "D", text: "8" }
        ],
        correctAnswer: "B" // Sorted: 1, 2, 3, 5, 8. Median is 3.
      },
      {
        id: 3,
        text: "What is the mode of the following set of numbers: 7, 9, 3, 9, 7, 9, 5?",
        options: [
          { id: "A", text: "3" },
          { id: "B", text: "5" },
          { id: "C", text: "7" },
          { id: "D", text: "9" }
        ],
        correctAnswer: "D" // 9 appears most frequently (3 times).
      },
      {
        id: 4,
        text: "If you roll a standard six-sided die, what is the probability of rolling a 4?",
        options: [
          { id: "A", text: "1/6" },
          { id: "B", text: "1/4" },
          { id: "C", text: "1/3" },
          { id: "D", text: "1/2" }
        ],
        correctAnswer: "A" // One favorable outcome (rolling a 4) out of 6 possible outcomes.
      },
      {
        id: 5,
        text: "If you flip a fair coin, what is the probability of getting heads?",
        options: [
          { id: "A", text: "0" },
          { id: "B", text: "1/4" },
          { id: "C", text: "1/2" },
          { id: "D", text: "1" }
        ],
        correctAnswer: "C" // One favorable outcome (heads) out of 2 possible outcomes (heads, tails).
      },
      {
        id: 6,
        text: "A bag contains 3 red marbles and 2 blue marbles. What is the probability of drawing a blue marble?",
        options: [
          { id: "A", text: "1/5" },
          { id: "B", text: "2/5" },
          { id: "C", text: "3/5" },
          { id: "D", text: "2/3" }
        ],
        correctAnswer: "B" // 2 blue marbles out of a total of 5 marbles.
      },
      {
        id: 7,
        text: "What is the range of the following set of numbers: 12, 5, 23, 18, 9?",
        options: [
          { id: "A", text: "5" },
          { id: "B", text: "12" },
          { id: "C", text: "14" },
          { id: "D", text: "18" }
        ],
        correctAnswer: "D" // Range = Max - Min = 23 - 5 = 18.
      },
      {
        id: 8,
        text: "In probability, what does an event with a probability of 1 mean?",
        options: [
          { id: "A", text: "The event is impossible" },
          { id: "B", text: "The event has a 50% chance of occurring" },
          { id: "C", text: "The event is certain to occur" },
          { id: "D", text: "The probability is unknown" }
        ],
        correctAnswer: "C"
      },
      {
        id: 9,
        text: "What is the average (mean) of 10, 20, and 30?",
        options: [
          { id: "A", text: "10" },
          { id: "B", text: "15" },
          { id: "C", text: "20" },
          { id: "D", text: "30" }
        ],
        correctAnswer: "C" // (10 + 20 + 30) / 3 = 60 / 3 = 20
      },
      {
        id: 10,
        text: "If you roll a six-sided die, what is the probability of rolling an even number?",
        options: [
          { id: "A", text: "1/6" },
          { id: "B", text: "1/3" },
          { id: "C", text: "1/2" },
          { id: "D", text: "2/3" }
        ],
        correctAnswer: "C" // Three even numbers (2, 4, 6) out of 6 possible outcomes. 3/6 = 1/2.
      }
    ]
  },
  {
    id: "english-2",
    name: "English Language 2",
    description: "More English Language Practice",
    icon: "book",
    questions: [
      // Part 1: Opposite in Meaning (1-10)
      {
        id: 1,
        text: "(Choose the option opposite in meaning to the bolded word): The champions were <b><i><u>elated</u></i></b> after the tournament while their opponents looked ______.",
        options: [ { id: "A", text: "Baffled" }, { id: "B", text: "Dejected" }, { id: "C", text: "Pitiful" }, { id: "D", text: "Uninterested" } ],
        correctAnswer: "B"
      },
      {
        id: 2,
        text: "(Choose the option opposite in meaning to the bolded word): While Mr Ade is ______ his son is a <b><i><u>novice</u></i></b>.",
        options: [ { id: "A", text: "Enlightened" }, { id: "B", text: "Incompetent" }, { id: "C", text: "Clever" }, { id: "D", text: "Experienced" } ],
        correctAnswer: "D"
      },
      {
        id: 3,
        text: "(Choose the option opposite in meaning to the bolded word): It is better to use <b><i><u>persuasion</u></i></b> rather than ______ to get witnesses to court.",
        options: [ { id: "A", text: "Effort" }, { id: "B", text: "Compulsion" }, { id: "C", text: "Influence" }, { id: "D", text: "Pressure" } ],
        correctAnswer: "B"
      },
      {
        id: 4,
        text: "(Choose the option opposite in meaning to the bolded word): The <b><i><u>animosity</u></i></b> between Fatou and Sheku is shocking, considering the ______ they once shared.",
        options: [ { id: "A", text: "Company" }, { id: "B", text: "Friendship" }, { id: "C", text: "Peace" }, { id: "D", text: "Understanding" } ],
        correctAnswer: "B"
      },
      {
        id: 5,
        text: "(Choose the option opposite in meaning to the bolded word): The <b><i><u>mulish</u></i></b> driver was admonished to be ______.",
        options: [ { id: "A", text: "Cautious" }, { id: "B", text: "Reasonable" }, { id: "C", text: "Reliable" }, { id: "D", text: "Considerate" } ],
        correctAnswer: "B"
      },
       {
        id: 6,
        text: "(Choose the option opposite in meaning to the bolded word): The old man <b><i><u>rebuked</u></i></b> the thug and his children ______ him for doing so.",
        options: [ { id: "A", text: "Commended" }, { id: "B", text: "Embraced" }, { id: "C", text: "Hailed" }, { id: "D", text: "Supported" } ],
        correctAnswer: "A"
      },
       {
        id: 7,
        text: "(Choose the option opposite in meaning to the bolded word): All drivers were enjoined to obtain <b><i><u>genuine</u></i></b> and ______ licences.",
        options: [ { id: "A", text: "Artificial" }, { id: "B", text: "Fraudulent" }, { id: "C", text: "Fake" }, { id: "D", text: "Substandard" } ],
        correctAnswer: "C"
      },
       {
        id: 8,
        text: "(Choose the option opposite in meaning to the bolded word): There was agitation for the ______ law on libel to be <b><i><u>re-enacted</u></i></b>.",
        options: [ { id: "A", text: "Enforced" }, { id: "B", text: "Repealed" }, { id: "C", text: "Rejected" }, { id: "D", text: "Cancelled" } ],
        correctAnswer: "B"
      },
       {
        id: 9,
        text: "(Choose the option opposite in meaning to the bolded word): The two political parties live today in ______ after four years of <b><i><u>hostility</u></i></b>.",
        options: [ { id: "A", text: "Happiness" }, { id: "B", text: "Amity" }, { id: "C", text: "Agreement" }, { id: "D", text: "Freedom" } ],
        correctAnswer: "B"
      },
      {
        id: 10,
        text: "(Choose the option opposite in meaning to the bolded word): That engineer was said to have used <b><i><u>inferior</u></i></b> than ______ materials in the construction of the collapsed building.",
        options: [ { id: "A", text: "Excellent" }, { id: "B", text: "Recommended" }, { id: "C", text: "Quality" }, { id: "D", text: "Exceptional" } ],
        correctAnswer: "A" // Using 'Excellent' as per note
      },
      // Part 2: Best Completion (11-15)
      {
        id: 11,
        text: "(Choose the best word to complete the sentence): I could not read what he wrote because his handwriting was ______.",
        options: [ { id: "A", text: "Tiny" }, { id: "B", text: "Eligible" }, { id: "C", text: "Untidy" }, { id: "D", text: "Illegible" } ],
        correctAnswer: "D"
      },
      {
        id: 12,
        text: "(Choose the best word to complete the sentence): When all the items on the agenda had been discussed, the meeting was ______.",
        options: [ { id: "A", text: "Dismissed" }, { id: "B", text: "Postponed" }, { id: "C", text: "Adjourned" }, { id: "D", text: "Dissolved" } ],
        correctAnswer: "C"
      },
      {
        id: 13,
        text: "(Choose the best word to complete the sentence): Occasionally, universities award ______ degrees to outstanding personalities.",
        options: [ { id: "A", text: "Ceremonial" }, { id: "B", text: "Honorary" }, { id: "C", text: "Temporary" }, { id: "D", text: "Respectable" } ],
        correctAnswer: "B"
      },
      {
        id: 14,
        text: "(Choose the best word to complete the sentence): His thoughtlessness is simply beyond ______.",
        options: [ { id: "A", text: "Idea" }, { id: "B", text: "Tolerance" }, { id: "C", text: "Belief" }, { id: "D", text: "Fate" } ],
        correctAnswer: "C"
      },
      {
        id: 15,
        text: "(Choose the best word to complete the sentence): Many doctors have ______ to western countries for better opportunities.",
        options: [ { id: "A", text: "Migrated" }, { id: "B", text: "Travelled" }, { id: "C", text: "Immigrated" }, { id: "D", text: "Participant" } ],
        correctAnswer: "A"
      },
      // Part 3: Interpretation (16-25)
       {
        id: 16,
        text: "(Choose the best interpretation of the sentence): The recruits are under his tutelage. This means that he ______.",
        options: [ { id: "A", text: "Assigns work to them" }, { id: "B", text: "Trains them" }, { id: "C", text: "Disciplines them at work" }, { id: "D", text: "Protects them" } ],
        correctAnswer: "B"
      },
       {
        id: 17,
        text: "(Choose the best interpretation of the sentence): He listened attentively to her cock-and-bull story. This means that she told ______.",
        options: [ { id: "A", text: "A terrifying story" }, { id: "B", text: "An interesting story" }, { id: "C", text: "An incredible story" }, { id: "D", text: "A lot of folktales" } ],
        correctAnswer: "C"
      },
      {
        id: 18,
        text: "(Choose the best interpretation of the sentence): He has left the country for this good time. This means that he ______.",
        options: [ { id: "A", text: "Will never come back" }, { id: "B", text: "Left for better conditions" }, { id: "C", text: "Became an adventurer" }, { id: "D", text: "Will improve his credentials" } ],
        correctAnswer: "A"
      },
      {
        id: 19,
        text: "(Choose the best interpretation of the sentence): The bus driver smelt a rat when an unregistered vehicle trailed him for several kilometres. This means that the bus driver ______.",
        options: [ { id: "A", text: "Increased his speed" }, { id: "B", text: "Became nervous" }, { id: "C", text: "Became suspicious" }, { id: "D", text: "Alerted the passengers" } ],
        correctAnswer: "C"
      },
       {
        id: 20,
        text: "(Choose the best interpretation of the sentence): The newly employed workers were remunerated handsomely. This means that ______.",
        options: [ { id: "A", text: "Both old and new workers were paid" }, { id: "B", text: "Only newly employed workers were paid" }, { id: "C", text: "The salaries of the new workers were attractive" }, { id: "D", text: "The salaries of the new workers were paid promptly" } ],
        correctAnswer: "C"
      },
      {
        id: 21,
        text: "(Choose the best interpretation of the sentence): The chairman has come under fire over this project. This means that the chairman has been ______.",
        options: [ { id: "A", text: "Severely criticized" }, { id: "B", text: "Highly praised" }, { id: "C", text: "Given the go-ahead" }, { id: "D", text: "Charged to court" } ],
        correctAnswer: "A"
      },
      {
        id: 22,
        text: "(Choose the best interpretation of the sentence): The ugly incidents of the Civil War are water under the bridge. This means that the incidents ______.",
        options: [ { id: "A", text: "Continue to haunt us" }, { id: "B", text: "Have been remembered again" }, { id: "C", text: "Have been forgotten" }, { id: "D", text: "Cannot be wished away" } ],
        correctAnswer: "C"
      },
       {
        id: 23,
        text: "(Choose the best interpretation of the sentence): My heart was in my mouth as I tried to open the envelope. This means that as I opened the envelope, I was ______.",
        options: [ { id: "A", text: "Very happy" }, { id: "B", text: "Quite eager" }, { id: "C", text: "Deeply disappointed" }, { id: "D", text: "Extremely afraid" } ],
        correctAnswer: "D"
      },
       {
        id: 24,
        text: "(Choose the best interpretation of the sentence): Throughout the long argument, the minister maintained his ground over the claim. This means that the minister ______.",
        options: [ { id: "A", text: "Accepted his error" }, { id: "B", text: "Refused to change his stand" }, { id: "C", text: "Had shifted ground" }, { id: "D", text: "Did not consider every view" } ],
        correctAnswer: "B"
      },
       {
        id: 25,
        text: "(Choose the best interpretation of the sentence): John may be sincere, but I suspect that he has an axe to grind. This means that John has a ______.",
        options: [ { id: "A", text: "Selfish motive" }, { id: "B", text: "Different opinion" }, { id: "C", text: "Motive to defend us" }, { id: "D", text: "Solution to the problem" } ],
        correctAnswer: "A"
      },
      // Part 4: Nearest in Meaning (26-35)
      {
        id: 26,
        text: "(Choose the option nearest in meaning to the bolded word): So much <b><i><u>effluent</u></i></b> has been poured into the stream that its water has become unsafe for drinking.",
        options: [ { id: "A", text: "Sewage" }, { id: "B", text: "Disinfectant" }, { id: "C", text: "Oil" }, { id: "D", text: "Concoction" } ],
        correctAnswer: "A"
      },
      {
        id: 27,
        text: "(Choose the option nearest in meaning to the bolded word): The students became <b><i><u>restive</u></i></b> after the authorities increased their tuition fees.",
        options: [ { id: "A", text: "Alarmed" }, { id: "B", text: "Violent" }, { id: "C", text: "Noisy" }, { id: "D", text: "Agitated" } ],
        correctAnswer: "D"
      },
       {
        id: 28,
        text: "(Choose the option nearest in meaning to the bolded word): Ali plays the guitar with great <b><i><u>dexterity</u></i></b>.",
        options: [ { id: "A", text: "Wisdom" }, { id: "B", text: "Experience" }, { id: "C", text: "Pride" }, { id: "D", text: "Skill" } ],
        correctAnswer: "D"
      },
      {
        id: 29,
        text: "(Choose the option nearest in meaning to the bolded word): Obi's behaviour is <b><i><u>questionable</u></i></b>.",
        options: [ { id: "A", text: "Debatable" }, { id: "B", text: "Troublesome" }, { id: "C", text: "Annoying" }, { id: "D", text: "Refutable" } ],
        correctAnswer: "A"
      },
      {
        id: 30,
        text: "(Choose the option nearest in meaning to the bolded word): The electricity supply in this community is <b><i><u>erratic</u></i></b>.",
        options: [ { id: "A", text: "Unpredictable" }, { id: "B", text: "Disorderly" }, { id: "C", text: "Low" }, { id: "D", text: "Temporary" } ],
        correctAnswer: "A"
      },
      {
        id: 31,
        text: "(Choose the option nearest in meaning to the bolded word): He became really <b><i><u>disheartened</u></i></b> when he heard the news.",
        options: [ { id: "A", text: "Dejected" }, { id: "B", text: "Dishevelled" }, { id: "C", text: "Worried" }, { id: "D", text: "Disturbed" } ],
        correctAnswer: "A"
      },
      {
        id: 32,
        text: "(Choose the option nearest in meaning to the bolded word): The office has taken <b><i><u>stringent</u></i></b> measures to protect its facilities.",
        options: [ { id: "A", text: "Suitable" }, { id: "B", text: "Rigid" }, { id: "C", text: "Strict" }, { id: "D", text: "Complete" } ],
        correctAnswer: "C"
      },
      {
        id: 33,
        text: "(Choose the option nearest in meaning to the bolded word): She was <b><i><u>infuriated</u></i></b> by the shabby appearance of the man who brought her the message from home.",
        options: [ { id: "A", text: "Shocked" }, { id: "B", text: "Discouraged" }, { id: "C", text: "Annoyed" }, { id: "D", text: "Humiliated" } ],
        correctAnswer: "C"
      },
      {
        id: 34,
        text: "(Choose the option nearest in meaning to the bolded word): Henry likes to be involved in <b><i><u>shady</u></i></b> deals.",
        options: [ { id: "A", text: "Unknown" }, { id: "B", text: "Undisclosed" }, { id: "C", text: "Dishonest" }, { id: "D", text: "Doubtful" } ],
        correctAnswer: "C"
      },
      {
        id: 35,
        text: "(Choose the option nearest in meaning to the bolded word): A good student should be <b><i><u>inquisitive</u></i></b>.",
        options: [ { id: "A", text: "Hardworking" }, { id: "B", text: "Busy" }, { id: "C", text: "Curious" }, { id: "D", text: "Studious" } ],
        correctAnswer: "C"
      },
      // Part 5: Best Completion (36-60)
      {
        id: 36,
        text: "(Choose the best option to complete the sentence): Life in the city is ______ expensive for most people.",
        options: [ { id: "A", text: "Too much" }, { id: "B", text: "Much" }, { id: "C", text: "Very much" }, { id: "D", text: "Much too" } ],
        correctAnswer: "D"
      },
      {
        id: 37,
        text: "(Choose the best option to complete the sentence): My father made me ______ at home.",
        options: [ { id: "A", text: "Stay" }, { id: "B", text: "Stayed" }, { id: "C", text: "To be staying" }, { id: "D", text: "To stay" } ],
        correctAnswer: "A"
      },
      {
        id: 38,
        text: "(Choose the best option to complete the sentence): The long-awaited match was called ______ at the last moment.",
        options: [ { id: "A", text: "Off" }, { id: "B", text: "Out" }, { id: "C", text: "Down" }, { id: "D", text: "Away" } ],
        correctAnswer: "A"
      },
      {
        id: 39,
        text: "(Choose the best option to complete the sentence): Get to work! Don't sit ______ doing nothing.",
        options: [ { id: "A", text: "About" }, { id: "B", text: "Up" }, { id: "C", text: "On" }, { id: "D", text: "By" } ],
        correctAnswer: "A"
      },
       {
        id: 40,
        text: "(Choose the best option to complete the sentence): We promised to tell the truth, ______?",
        options: [ { id: "A", text: "Isn't it" }, { id: "B", text: "Didn't we" }, { id: "C", text: "Shouldn't we" }, { id: "D", text: "Wasn't it" } ],
        correctAnswer: "B"
      },
       {
        id: 41,
        text: "(Choose the best option to complete the sentence): No sooner had we set off ______ it started to rain.",
        options: [ { id: "A", text: "That" }, { id: "B", text: "When" }, { id: "C", text: "Than" }, { id: "D", text: "As" } ],
        correctAnswer: "C"
      },
      {
        id: 42,
        text: "(Choose the best option to complete the sentence): I cannot put up ______ his saucy behaviour.",
        options: [ { id: "A", text: "On" }, { id: "B", text: "With" }, { id: "C", text: "From" }, { id: "D", text: "By" } ],
        correctAnswer: "B"
      },
      {
        id: 43,
        text: "(Choose the best option to complete the sentence): Several ______ attended the two-day economic summit.",
        options: [ { id: "A", text: "Head of state" }, { id: "B", text: "Heads of states" }, { id: "C", text: "Heads of state" }, { id: "D", text: "Head of states" } ],
        correctAnswer: "C"
      },
       {
        id: 44,
        text: "(Choose the best option to complete the sentence): I won't go to the cinema with you I ______ the movie.",
        options: [ { id: "A", text: "Saw" }, { id: "B", text: "Have seen" }, { id: "C", text: "Seen" }, { id: "D", text: "Had seen" } ],
        correctAnswer: "B" // Using 'Have seen' as discussed
      },
      {
        id: 45,
        text: "(Choose the best option to complete the sentence): The committee has submitted its report ______ the students' act.",
        options: [ { id: "A", text: "On" }, { id: "B", text: "For" }, { id: "C", text: "About" }, { id: "D", text: "At" } ],
        correctAnswer: "A"
      },
      {
        id: 46,
        text: "(Choose the best option to complete the sentence): It's been a rough life so far, ______?",
        options: [ { id: "A", text: "Hasn't it" }, { id: "B", text: "Isn't it" }, { id: "C", text: "Hadn't it" }, { id: "D", text: "Wasn't it" } ],
        correctAnswer: "A"
      },
      {
        id: 47,
        text: "(Choose the best option to complete the sentence): If I had known, I ______ not have come.",
        options: [ { id: "A", text: "Should" }, { id: "B", text: "Ought" }, { id: "C", text: "Would" }, { id: "D", text: "May" } ],
        correctAnswer: "C"
      },
      {
        id: 48,
        text: "(Choose the best option to complete the sentence): She had to work from ______.",
        options: [ { id: "A", text: "Morning till the evening" }, { id: "B", text: "The morning till evening" }, { id: "C", text: "The morning till the evening" }, { id: "D", text: "Morning till evening" } ],
        correctAnswer: "D"
      },
      {
        id: 49,
        text: "(Choose the best option to complete the sentence): He did it, but not ______ the way I had expected.",
        options: [ { id: "A", text: "As" }, { id: "B", text: "Quite" }, { id: "C", text: "Exactly" }, { id: "D", text: "So" } ],
        correctAnswer: "C"
      },
      {
        id: 50,
        text: "(Choose the best option to complete the sentence): After stalking its prey for a while, the lion ______ on the kill.",
        options: [ { id: "A", text: "Closed in" }, { id: "B", text: "Closed up" }, { id: "C", text: "Closed off" }, { id: "D", text: "Closed down" } ],
        correctAnswer: "A"
      },
      {
        id: 51,
        text: "(Choose the best option to complete the sentence): Mary and Jane are always quarrelling with ______.",
        options: [ { id: "A", text: "Each other" }, { id: "B", text: "Themselves" }, { id: "C", text: "Another" }, { id: "D", text: "Other" } ],
        correctAnswer: "A"
      },
      {
        id: 52,
        text: "(Choose the best option to complete the sentence): They have been informed of his departure, ______?",
        options: [ { id: "A", text: "Haven't they" }, { id: "B", text: "Hadn't they" }, { id: "C", text: "Weren't it" }, { id: "D", text: "Isn't it" } ],
        correctAnswer: "A"
      },
      {
        id: 53,
        text: "(Choose the best option to complete the sentence): Although some students may be innocent, ______ are guilty of this offence.",
        options: [ { id: "A", text: "Much" }, { id: "B", text: "Great deal" }, { id: "C", text: "Most" }, { id: "D", text: "A good deal" } ],
        correctAnswer: "C"
      },
      {
        id: 54,
        text: "(Choose the best option to complete the sentence): She prefers singing ______ dancing.",
        options: [ { id: "A", text: "Besides" }, { id: "B", text: "Aside" }, { id: "C", text: "Than" }, { id: "D", text: "To" } ],
        correctAnswer: "D"
      },
      {
        id: 55,
        text: "(Choose the best option to complete the sentence): Is that the lady ______ you planned to visit?",
        options: [ { id: "A", text: "Which" }, { id: "B", text: "Who" }, { id: "C", text: "Whose" }, { id: "D", text: "Whom" } ],
        correctAnswer: "D"
      },
      {
        id: 56,
        text: "(Choose the best option to complete the sentence): The children ______ in the pool after school.",
        options: [ { id: "A", text: "Swam" }, { id: "B", text: "Swim" }, { id: "C", text: "Swimming" }, { id: "D", text: "Swum" } ],
        correctAnswer: "A"
      },
       {
        id: 57,
        text: "(Choose the best option to complete the sentence): In spite of all their shortcomings, we cannot ______ admire them.",
        options: [ { id: "A", text: "Only" }, { id: "B", text: "But" }, { id: "C", text: "Also" }, { id: "D", text: "Still" } ],
        correctAnswer: "B"
      },
      {
        id: 58,
        text: "(Choose the best option to complete the sentence): The African extended family system gives ______ members.",
        options: [ { id: "A", text: "His" }, { id: "B", text: "Her" }, { id: "C", text: "Its" }, { id: "D", text: "Their" } ],
        correctAnswer: "C"
      },
       {
        id: 59,
        text: "(Choose the best option to complete the sentence): We all look forward to meeting the ______.",
        options: [ { id: "A", text: "Beautiful, young, Nigerian musician" }, { id: "B", text: "Young, Nigerian, beautiful musician" }, { id: "C", text: "Nigerian, young, beautiful musician" }, { id: "D", text: "Nigerian, beautiful, young musician" } ],
        correctAnswer: "A"
      },
       {
        id: 60,
        text: "(Choose the best option to complete the sentence): One of my ______ is a lecturer in the university.",
        options: [ { id: "A", text: "Sister" }, { id: "B", text: "Sister's" }, { id: "C", text: "Sisters" }, { id: "D", text: "Sisters'" } ],
        correctAnswer: "C"
      }
    ]
  },
  {
    id: "english-3",
    name: "English Language 3",
    description: "Further English Language Practice",
    icon: "book-open", // Slightly different icon
    questions: [
      // Part 1: Opposite in Meaning
      {
        id: 1,
        text: "(Choose the option opposite in meaning to the bolded word): The speaker's comments were considered quite <b><i><u>provocative</u></i></b> by the audience.",
        options: [ { id: "A", text: "Soothing" }, { id: "B", text: "Annoying" }, { id: "C", text: "Stimulating" }, { id: "D", text: "Thoughtful" } ],
        correctAnswer: "A",
        explanation: '"Provocative" means causing annoyance or anger. "Soothing" means having a calming effect, which is the opposite.'
      },
      {
        id: 2,
        text: "(Choose the option opposite in meaning to the bolded word): After the long hike, the explorers were <b><i><u>weary</u></i></b>.",
        options: [ { id: "A", text: "Tired" }, { id: "B", text: "Energetic" }, { id: "C", text: "Sleepy" }, { id: "D", text: "Thirsty" } ],
        correctAnswer: "B",
        explanation: '"Weary" means tired. "Energetic" means having or showing great activity or vitality, the opposite of tired.'
      },
      {
        id: 3,
        text: "(Choose the option opposite in meaning to the bolded word): The government decided to <b><i><u>curtail</u></i></b> spending on non-essential projects.",
        options: [ { id: "A", text: "Reduce" }, { id: "B", text: "Stop" }, { id: "C", text: "Expand" }, { id: "D", text: "Postpone" } ],
        correctAnswer: "C",
        explanation: '"Curtail" means to reduce or restrict. "Expand" means to increase in size or amount, which is the opposite.'
      },
      // Part 2: Nearest in Meaning
      {
        id: 4,
        text: "(Choose the option nearest in meaning to the bolded word): The evidence presented was <b><i><u>tangible</u></i></b> and could not be ignored.",
        options: [ { id: "A", text: "Clear" }, { id: "B", text: "Important" }, { id: "C", text: "Physical" }, { id: "D", text: "Debatable" } ],
        correctAnswer: "C",
        explanation: '"Tangible" means perceptible by touch; clear and definite; real. "Physical" is the closest synonym in this context.'
      },
      {
        id: 5,
        text: "(Choose the option nearest in meaning to the bolded word): He showed great <b><i><u>fortitude</u></i></b> during the difficult times.",
        options: [ { id: "A", text: "Strength" }, { id: "B", text: "Courage" }, { id: "C", text: "Patience" }, { id: "D", text: "Wisdom" } ],
        correctAnswer: "B",
        explanation: '"Fortitude" means courage in pain or adversity. "Courage" is the nearest synonym.'
      },
      // Part 3: Best Completion
      {
        id: 6,
        text: "(Choose the best word to complete the sentence): Despite the initial setback, the team ______ and won the championship.",
        options: [ { id: "A", text: "Persevered" }, { id: "B", text: "Quit" }, { id: "C", text: "Argued" }, { id: "D", text: "Relaxed" } ],
        correctAnswer: "A",
        explanation: '"Persevered" means to continue in a course of action even in the face of difficulty, which fits the context of overcoming a setback to win.'
      },
      {
        id: 7,
        text: "(Choose the best option to complete the sentence): The librarian asked for silence as the noise was ______ the readers.",
        options: [ { id: "A", text: "Helping" }, { id: "B", text: "Amusing" }, { id: "C", text: "Disturbing" }, { id: "D", text: "Encouraging" } ],
        correctAnswer: "C",
        explanation: 'Libraries require quiet environments for reading. Noise would be "disturbing" to readers.'
      },
      {
        id: 8,
        text: "(Choose the best option to complete the sentence): If you ______ the rules, you may face consequences.",
        options: [ { id: "A", text: "Follow" }, { id: "B", text: "Ignore" }, { id: "C", text: "Understand" }, { id: "D", text: "Flout" } ],
        correctAnswer: "D",
        explanation: '"Flout" means to openly disregard (a rule, law, or convention), which fits the context of facing consequences for breaking rules.'
      },
      // Part 4: Interpretation
      {
        id: 9,
        text: "(Choose the best interpretation of the sentence): The manager decided to nip the problem in the bud. This means the manager decided to ______.",
        options: [ { id: "A", text: "Investigate the problem thoroughly" }, { id: "B", text: "Deal with the problem at a later stage" }, { id: "C", text: "Stop the problem at an early stage" }, { id: "D", text: "Ignore the problem completely" } ],
        correctAnswer: "C",
        explanation: 'The idiom "nip in the bud" means to stop something at an early stage before it develops into something larger or more serious.'
      },
      {
        id: 10,
        text: "(Choose the best interpretation of the sentence): She felt like a fish out of water at the formal event. This means she felt ______.",
        options: [ { id: "A", text: "Very comfortable" }, { id: "B", text: "Extremely thirsty" }, { id: "C", text: "Uncomfortable and out of place" }, { id: "D", text: "Happy and excited" } ],
        correctAnswer: "C",
        explanation: 'The idiom "like a fish out of water" means feeling awkward or uncomfortable because you are in an unfamiliar situation.'
      },
       // Part 1: Opposite in Meaning (Continued)
      {
        id: 11,
        text: "(Choose the option opposite in meaning to the bolded word): The evidence against the defendant was <b><i><u>conclusive</u></i></b>.",
        options: [ { id: "A", text: "Decisive" }, { id: "B", text: "Clear" }, { id: "C", text: "Doubtful" }, { id: "D", text: "Strong" } ],
        correctAnswer: "C",
        explanation: '"Conclusive" means proving something beyond doubt. "Doubtful" means uncertain or questionable, which is the opposite.'
      },
      {
        id: 12,
        text: "(Choose the option opposite in meaning to the bolded word): His <b><i><u>frugal</u></i></b> lifestyle allowed him to save a lot of money.",
        options: [ { id: "A", text: "Simple" }, { id: "B", text: "Economical" }, { id: "C", text: "Extravagant" }, { id: "D", text: "Careful" } ],
        correctAnswer: "C",
        explanation: '"Frugal" means sparing or economical with regard to money or food. "Extravagant" means lacking restraint in spending money, the opposite.'
      },
      {
        id: 13,
        text: "(Choose the option opposite in meaning to the bolded word): The teacher found the student\'s excuse <b><i><u>implausible</u></i></b>.",
        options: [ { id: "A", text: "Unlikely" }, { id: "B", text: "Believable" }, { id: "C", text: "Weak" }, { id: "D", text: "Creative" } ],
        correctAnswer: "B",
        explanation: '"Implausible" means not seeming reasonable or probable; failing to convince. "Believable" is the direct opposite.'
      },
      // Part 2: Nearest in Meaning (Continued)
      {
        id: 14,
        text: "(Choose the option nearest in meaning to the bolded word): The old map was filled with <b><i><u>obscure</u></i></b> symbols.",
        options: [ { id: "A", text: "Ancient" }, { id: "B", text: "Clear" }, { id: "C", text: "Unimportant" }, { id: "D", text: "Unclear" } ],
        correctAnswer: "D",
        explanation: '"Obscure" means not discovered or known about; uncertain or not clearly expressed. "Unclear" is the nearest synonym.'
      },
      {
        id: 15,
        text: "(Choose the option nearest in meaning to the bolded word): The company decided to <b><i><u>implement</u></i></b> the new policy immediately.",
        options: [ { id: "A", text: "Announce" }, { id: "B", text: "Consider" }, { id: "C", text: "Apply" }, { id: "D", text: "Cancel" } ],
        correctAnswer: "C",
        explanation: '"Implement" means to put (a decision, plan, agreement, etc.) into effect. "Apply" is the closest meaning in this context.'
      },
      {
        id: 16,
        text: "(Choose the option nearest in meaning to the bolded word): She gave a <b><i><u>succinct</u></i></b> summary of the main points.",
        options: [ { id: "A", text: "Long" }, { id: "B", text: "Detailed" }, { id: "C", text: "Brief" }, { id: "D", text: "Confusing" } ],
        correctAnswer: "C",
        explanation: '"Succinct" means briefly and clearly expressed. "Brief" is the nearest synonym.'
      },
      // Part 3: Best Completion (Continued)
      {
        id: 17,
        text: "(Choose the best word to complete the sentence): The detective had to ______ all the clues to solve the mystery.",
        options: [ { id: "A", text: "Ignore" }, { id: "B", text: "Assemble" }, { id: "C", text: "Destroy" }, { id: "D", text: "Question" } ],
        correctAnswer: "B",
        explanation: 'Detectives "assemble" or gather clues to piece together a solution.'
      },
      {
        id: 18,
        text: "(Choose the best option to complete the sentence): The politician\'s speech was designed to ______ the crowd.",
        options: [ { id: "A", text: "Disperse" }, { id: "B", text: "Alienate" }, { id: "C", text: "Pacify" }, { id: "D", text: "Bore" } ],
        correctAnswer: "C",
        explanation: 'Politicians often aim to calm or "pacify" a crowd, especially if there is tension.'
      },
      {
        id: 19,
        text: "(Choose the best option to complete the sentence): Lack of rain ______ the region\'s agricultural output.",
        options: [ { id: "A", text: "Boosted" }, { id: "B", text: "Improved" }, { id: "C", text: "Hindered" }, { id: "D", text: "Changed" } ],
        correctAnswer: "C",
        explanation: 'A lack of rain would negatively impact or "hinder" crop production.'
      },
      {
        id: 20,
        text: "(Choose the best option to complete the sentence): He was known for his ______ attention to detail.",
        options: [ { id: "A", text: "Casual" }, { id: "B", text: "Meticulous" }, { id: "C", text: "Occasional" }, { id: "D", text: "Superficial" } ],
        correctAnswer: "B",
        explanation: '"Meticulous" means showing great attention to detail; very careful and precise, which fits the description.'
      },
      {
        id: 21,
        text: "(Choose the best option to complete the sentence): The ancient ruins give us a ______ into the lives of people long ago.",
        options: [ { id: "A", text: "Command" }, { id: "B", text: "Glimpse" }, { id: "C", text: "Lecture" }, { id: "D", text: "Warning" } ],
        correctAnswer: "B",
        explanation: 'Ruins offer a brief view or "glimpse" into the past.'
      },
      {
        id: 22,
        text: "(Choose the best option to complete the sentence): You must ______ your membership to continue accessing the services.",
        options: [ { id: "A", text: "Cancel" }, { id: "B", text: "Forget" }, { id: "C", text: "Renew" }, { id: "D", text: "Sell" } ],
        correctAnswer: "C",
        explanation: 'Memberships typically need to be "renewed" to remain active.'
      },
      // Part 4: Interpretation (Continued)
      {
        id: 23,
        text: "(Choose the best interpretation of the sentence): The boss told the employees to get their act together. This means the boss told them to ______.",
        options: [ { id: "A", text: "Prepare for a performance" }, { id: "B", text: "Work harder and more effectively" }, { id: "C", text: "Collect their belongings" }, { id: "D", text: "Go on vacation" } ],
        correctAnswer: "B",
        explanation: 'The idiom "get your act together" means to start behaving more appropriately or effectively.'
      },
      {
        id: 24,
        text: "(Choose the best interpretation of the sentence): He decided to spill the beans about the secret plan. This means he decided to ______.",
        options: [ { id: "A", text: "Spoil the plan" }, { id: "B", text: "Reveal the secret information" }, { id: "C", text: "Make a mess" }, { id: "D", text: "Forget the plan" } ],
        correctAnswer: "B",
        explanation: 'The idiom "spill the beans" means to reveal secret information unintentionally or indiscreetly.'
      },
      {
        id: 25,
        text: "(Choose the best interpretation of the sentence): She was on cloud nine after receiving the award. This means she was ______.",
        options: [ { id: "A", text: "Feeling unwell" }, { id: "B", text: "Very confused" }, { id: "C", text: "Extremely happy" }, { id: "D", text: "High above the ground" } ],
        correctAnswer: "C",
        explanation: 'The idiom "on cloud nine" means being extremely happy and excited.'
      },
      {
        id: 26,
        text: "(Choose the best interpretation of the sentence): The athlete broke the record by a hair\'s breadth. This means the athlete broke the record ______.",
        options: [ { id: "A", text: "Easily" }, { id: "B", text: "By a very small margin" }, { id: "C", text: "With a new hairstyle" }, { id: "D", text: "Accidentally" } ],
        correctAnswer: "B",
        explanation: 'The idiom "by a hair\'s breadth" means by a very small margin.'
      },
      // Part 1: Opposite in Meaning (Round 2)
      {
        id: 27,
        text: "(Choose the option opposite in meaning to the bolded word): The professor\'s lecture was quite <b><i><u>lucid</u></i></b>.",
        options: [ { id: "A", text: "Clear" }, { id: "B", text: "Long" }, { id: "C", text: "Confusing" }, { id: "D", text: "Boring" } ],
        correctAnswer: "C",
        explanation: '"Lucid" means clearly expressed and easy to understand. "Confusing" is the opposite.'
      },
      {
        id: 28,
        text: "(Choose the option opposite in meaning to the bolded word): They live in an <b><i><u>affluent</u></i></b> neighbourhood.",
        options: [ { id: "A", text: "Populous" }, { id: "B", text: "Poor" }, { id: "C", text: "Distant" }, { id: "D", text: "Quiet" } ],
        correctAnswer: "B",
        explanation: '"Affluent" means wealthy. "Poor" is the opposite.'
      },
      // Part 2: Nearest in Meaning (Round 2)
      {
        id: 29,
        text: "(Choose the option nearest in meaning to the bolded word): The lawyer tried to <b><i><u>discredit</u></i></b> the witness\'s testimony.",
        options: [ { id: "A", text: "Understand" }, { id: "B", text: "Repeat" }, { id: "C", text: "Disbelieve" }, { id: "D", text: "Support" } ],
        correctAnswer: "C",
        explanation: '"Discredit" means to harm the good reputation of someone or something, or cause an idea or piece of evidence to seem false or unreliable. "Disbelieve" captures the essence of making the testimony seem unreliable.'
      },
      {
        id: 30,
        text: "(Choose the option nearest in meaning to the bolded word): His <b><i><u>perfunctory</u></i></b> response showed his lack of interest.",
        options: [ { id: "A", text: "Enthusiastic" }, { id: "B", text: "Detailed" }, { id: "C", text: "Casual" }, { id: "D", text: "Rude" } ],
        correctAnswer: "C",
        explanation: '"Perfunctory" means carried out with a minimum of effort or reflection, often superficially. "Casual" is the closest synonym.'
      },
      // Part 3: Best Completion (Round 2)
      {
        id: 31,
        text: "(Choose the best option to complete the sentence): The old bridge was deemed unsafe and is scheduled for ______.",
        options: [ { id: "A", text: "Renovation" }, { id: "B", text: "Decoration" }, { id: "C", text: "Demolition" }, { id: "D", text: "Celebration" } ],
        correctAnswer: "C",
        explanation: 'An unsafe bridge would likely be torn down or undergo "demolition".'
      },
      {
        id: 32,
        text: "(Choose the best option to complete the sentence): The mediator\'s role was to ______ reconciliation between the two parties.",
        options: [ { id: "A", text: "Prevent" }, { id: "B", text: "Delay" }, { id: "C", text: "Facilitate" }, { id: "D", text: "Observe" } ],
        correctAnswer: "C",
        explanation: 'A mediator helps to make a process easier, i.e., "facilitate" reconciliation.'
      },
      {
        id: 33,
        text: "(Choose the best option to complete the sentence): She has a ______ for remembering names and faces.",
        options: [ { id: "A", text: "Problem" }, { id: "B", text: "Habit" }, { id: "C", text: "Knack" }, { id: "D", text: "Difficulty" } ],
        correctAnswer: "C",
        explanation: 'A "knack" is an acquired or natural skill at doing something.'
      },
      // Part 4: Interpretation (Round 2)
      {
        id: 34,
        text: "(Choose the best interpretation of the sentence): He decided to take the bull by the horns and confront the issue directly. This means he decided to ______.",
        options: [ { id: "A", text: "Avoid the issue" }, { id: "B", text: "Deal with a difficult situation decisively" }, { id: "C", text: "Get help from others" }, { id: "D", text: "Behave aggressively" } ],
        correctAnswer: "B",
        explanation: 'The idiom "take the bull by the horns" means to deal with a difficult or dangerous situation directly and with courage.'
      },
      {
        id: 35,
        text: "(Choose the best interpretation of the sentence): The project was put on the back burner for a few months. This means the project was ______.",
        options: [ { id: "A", text: "Completed quickly" }, { id: "B", text: "Given low priority" }, { id: "C", text: "Cancelled entirely" }, { id: "D", text: "Heated up" } ],
        correctAnswer: "B",
        explanation: 'To put something "on the back burner" means to give it low priority; to postpone consideration or action.'
      },
       // Part 1: Opposite in Meaning (Round 3)
      {
        id: 36,
        text: "(Choose the option opposite in meaning to the bolded word): The politician\'s <b><i><u>equivocal</u></i></b> statements confused the voters.",
        options: [ { id: "A", text: "Clear" }, { id: "B", text: "Lengthy" }, { id: "C", text: "Ambiguous" }, { id: "D", text: "False" } ],
        correctAnswer: "A",
        explanation: '"Equivocal" means open to more than one interpretation; ambiguous. "Clear" or unambiguous is the opposite.'
      },
      // Part 2: Nearest in Meaning (Round 3)
      {
        id: 37,
        text: "(Choose the option nearest in meaning to the bolded word): The teacher tried to <b><i><u>elicit</u></i></b> responses from the quiet students.",
        options: [ { id: "A", text: "Prevent" }, { id: "B", text: "Force" }, { id: "C", text: "Evoke" }, { id: "D", text: "Write" } ],
        correctAnswer: "C",
        explanation: '"Elicit" means to evoke or draw out (a response, answer, or fact) from someone. "Evoke" is the closest synonym.'
      },
      // Part 3: Best Completion (Round 3)
      {
        id: 38,
        text: "(Choose the best option to complete the sentence): The ______ of fresh air was welcome after being indoors all day.",
        options: [ { id: "A", text: "Lack" }, { id: "B", text: "Gust" }, { id: "C", text: "Smell" }, { id: "D", text: "Idea" } ],
        correctAnswer: "B",
        explanation: 'A "gust" refers to a brief, strong rush of wind or air.'
      },
      // Part 4: Interpretation (Round 3)
      {
        id: 39,
        text: "(Choose the best interpretation of the sentence): He always calls a spade a spade. This means that he ______.",
        options: [ { id: "A", text: "Likes gardening" }, { id: "B", text: "Is a very honest person" }, { id: "C", text: "Speaks plainly and directly" }, { id: "D", text: "Is often rude" } ],
        correctAnswer: "C",
        explanation: 'The idiom "call a spade a spade" means to speak frankly and directly, without avoiding unpleasant subjects.'
      },
      {
        id: 40,
        text: "(Choose the best interpretation of the sentence): It\'s raining cats and dogs outside! This means it\'s raining ______.",
        options: [ { id: "A", text: "Lightly" }, { id: "B", text: "With animals falling" }, { id: "C", text: "Very heavily" }, { id: "D", text: "Unexpectedly" } ],
        correctAnswer: "C",
        explanation: 'The idiom "raining cats and dogs" means raining very heavily.'
      }
    ]
  }
];
