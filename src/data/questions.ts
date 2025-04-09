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
  }
];
