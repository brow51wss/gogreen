export const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#technology", label: "Technology" },
  { href: "#water", label: "Drinking Water" },
  { href: "#thermal", label: "Thermal" },
  { href: "#track", label: "Track Record" },
  { href: "#faq", label: "FAQ" },
] as const;

export const heroLead =
  "GGPEP Co. engineers, imports and deploys heavy wastewater treatment, drinking water and thermal waste systems across the Philippines — then guarantees they pass DENR inspection. One vendor, from site assessment to certified effluent.";

export const partners = [
  "WEIFANG HENGYUAN",
  "WANZE SHENGSHI",
  "WTEYA GROUP",
  "LINGYUE ENVIRONMENTAL",
  "SUZHOU PLOP",
] as const;

export const industries = [
  "Hospitals & Clinics",
  "Hotels & Resorts",
  "Manufacturing Plants",
  "Commercial Buildings",
  "Agro-Industrial",
  "LGUs & Municipalities",
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Site Assessment",
    body: "Flow characterisation, load sampling and regulatory scoping against DENR and LGU mandates.",
  },
  {
    n: "02",
    title: "Custom Design",
    body: "Process selection and civil drawings sized to your footprint, discharge target and budget.",
  },
  {
    n: "03",
    title: "Fabrication & Setup",
    body: "Factory-floor calibration abroad, civil works and hardware integration on site here.",
  },
  {
    n: "04",
    title: "Testing & Compliance",
    body: "Commissioning, effluent verification and the documentation your permit renewal needs.",
  },
] as const;

export const techCards = [
  {
    code: "MBR",
    title: "Membrane Bioreactor",
    image: "/images/technology/membrane-bioreactor.webp",
    body: "Membrane separation replaces secondary sedimentation, intercepting microorganisms completely for a long sludge age and high MLSS. Effluent turbidity and suspended solids near zero — suitable for direct reuse.",
    note: "OFFICES · CAR WASHES · TEXTILES · PAPER · BREWING",
  },
  {
    code: "DAF",
    title: "Dissolved Air Flotation",
    image: "/images/technology/dissolved-air-flotation.webp",
    body: "Micro-fine bubbles adhere to suspended matter and lift it for skimming. Strong on low-temperature, low-turbidity and algae-heavy water.",
    note: "ALSO: VORTEX CONCAVE · VERTICAL FLOW",
  },
  {
    code: "SHALLOW AF",
    title: "High-Efficiency Shallow Flotation",
    image: "/images/technology/high-efficiency-shallow-flotation.webp",
    body: "Built on shallow pool theory (600–700 mm) and the zero-speed principle, giving static-state particle rise and suspended solids removal above 90%.",
    note: "SS REMOVAL > 90%",
  },
  {
    code: "CLARIFIERS",
    title: "Intelligent Sedimentation",
    image: "/images/technology/intelligent-sedimentation.webp",
    body: "Slant-pipe lamella units at 60° shorten settling distance for a small footprint. Vertical flow units solve one-stop gravity separation at lower structural cost.",
    note: "LAMINAR FLOW · 60° INCLINED PLATES",
  },
  {
    code: "SLUDGE",
    title: "Multi-Plate Screw Press",
    image: "/images/technology/multi-plate-screw-press.webp",
    body: "A screw shaft through fixed and moving rings carries sludge from gravity thickening into high-pressure dewatering. Continuous self-cleaning removes clogging risk and the separate thickening tank.",
    note: "NON-CLOGGING · NO THICKENING TANK",
  },
  {
    code: "DEWATERING",
    title: "Plate & Frame Filter Press",
    image: "/images/technology/plate-frame-filter-press.webp",
    body: "Alternating solid plates and hollow frames compress filter cloth under manual or hydraulic locking, fully enclosed, producing a cake with markedly higher solid content.",
    note: "ENCLOSED · HYDRAULIC LOCKING",
  },
  {
    code: "POLISHING",
    title: "Quartz Sand & Activated Carbon",
    image: [
      "/images/technology/quartz-sand-filtration.webp",
      "/images/technology/activated-carbon-filters.webp",
    ],
    body: "Multi-grade compacted quartz beds combine membrane filtration, osmosis and contact coagulation. Carbon beds strip odour, colour, residual chlorine and dissolved heavy metals including hexavalent chromium and mercury.",
    note: "NON-POWERED ADSORPTION UNITS",
  },
  {
    code: "DISINFECTION",
    title: "Global Disinfection Technology",
    image: "/images/technology/global-disinfection-technology.webp",
    body: "Industrial sodium hypochlorite generators, corona discharge ozone generators and automated PLC chemical dosing systems.",
    note: "PLC-AUTOMATED DOSING",
  },
  {
    code: "MEDICAL & AQUA",
    title: "Specialised Streams",
    body: "Medical sewage treatment, ultra-durable underground fiberglass systems, and high-efficiency aquaculture manure sewage plants for agro-industrial loads.",
    note: "HOSPITALS · LIVESTOCK · FOOD PROCESSING",
  },
] as const;

export const featuredUnits = [
  {
    label: "DECENTRALISED · JAPAN",
    photo: "GREEN JOHKASOU — UNIT PHOTO",
    image: "/images/technology/green-johkasou.png",
    title: "Green Johkasou",
    body: "A compact buried unit for single households or small businesses, purifying up to 800 LPD through an AO contact oxidation process on hydrophilic sponge and volcanic rock bio-media. Injection-moulded PP/PE at 7 mm wall thickness gives an underground service life of no less than 30 years.",
    accent: "green" as const,
    specs: [
      { k: "CAPACITY", v: "800 LPD" },
      { k: "AERATOR", v: "50 W · 80 L/min" },
      { k: "EFFLUENT", v: "≤100 COD / ≤60 SS" },
    ],
  },
  {
    label: "OFF-GRID DISASTER RESILIENCY",
    photo: "PLOP PHANTOM® VITA — UNIT PHOTO",
    image: "/images/technology/plop-phantom.png",
    title: "Plop Phantom® Vita",
    body: "A pipe-free, above-ground resiliency hub running on an autonomous solar array with lithium backup. It converts up to 1.5 tons of raw surface, ground or rainwater a day into bio-secure drinking water with no excavation, and adds real-time fall recognition and gait analysis to alert camp administrators in crowded spaces.",
    accent: "cyan" as const,
    specs: [
      { k: "OUTPUT", v: "1,500 L / day" },
      { k: "POWER", v: "Solar + Li backup" },
      { k: "FOR", v: "DRRMO · RHU · Evac" },
    ],
  },
] as const;

export const waterHighlights = [
  {
    title: "400–1000 GPD RO",
    body: "Multi-stage PAC composite plus UF removes up to 99.99% of bacteria, heavy metals and microplastics.",
  },
  {
    title: "3-Second Heating",
    body: "Multi-grade hot water instantly at up to 2200 W, with no continuous boiling.",
  },
  {
    title: "4–8°C Cooling",
    body: "Dual-engine cooling chip and compressor systems for genuinely chilled water.",
  },
  {
    title: "UVC + Self-Clean",
    body: "Double UVC sterilisation, child lock, digital display and optional Wi-Fi control.",
  },
] as const;

export const waterProducts = [
  {
    photo: "W90 / W91 / W100 — PRODUCT SHOT",
    image: "/images/water/ro-ice-maker-chilled-dispensers.webp",
    title: "RO Ice Maker & Chilled Dispensers",
    models: "W90 · W91 · W100 · W3A · W3B · S6",
    body: "Internal ice storage producing real ice and 6°C chilled water, plus instant hot and ambient. For executive suites, corporate pantries and commercial lounges.",
  },
  {
    photo: "OLS-W52 / W23 — PRODUCT SHOT",
    image: "/images/water/hydrogen-rich-mineralised.webp",
    title: "Hydrogen-Rich & Mineralised",
    models: "OLS-W52 · W23 SERIES",
    body: "One-click 1000 ppb hydrogen water and mineralisation rich in strontium and metasilicic acid. RO, heating, cooling and enrichment in one unit.",
  },
  {
    photo: "W80 / W60 — PRODUCT SHOT",
    image: "/images/water/cold-soda-sparkling-makers.webp",
    title: "Cold Soda & Sparkling Makers",
    models: "W80 · W60 SERIES",
    body: "On-demand chilled soda water on 4-stage composite RO, 520 ml/min flow, 2200 W instant heating. For restaurants, cafés and hotel suites.",
  },
  {
    photo: "W04 / W2 / W51 — PRODUCT SHOT",
    image: "/images/water/undersink-desktop-ro-uf.webp",
    title: "Undersink & Desktop RO / UF",
    models: "W04 · W2 · W51",
    body: "Tankless 400 GPD direct-connect units that hide under a counter, and compact desktop hot-and-cold purifiers for rooms without a water line.",
  },
] as const;

export const furnaceSpecs = [
  ["Outer casing", "4 mm carbon steel + channel steel"],
  ["Chamber lining", "12 mm high-temp boiler steel"],
  ["Temperature", "Above 850°C"],
  ["Air supply", "1100 W / 220 V forced draft"],
  ["Weight", "720 kg"],
  ["External dims", "1500 × 900 × 1150 mm"],
  ["Internal dims", "1200 × 650 mm"],
  ["Feed opening", "1220 × 500 mm"],
  ["Capacity", "200–300 kg / hour"],
  [
    "Feedstock",
    "Agri & forestry waste, packaging, rubber, plastics, general solid waste",
  ],
] as const;

export const furnacePoints = [
  {
    title: "Double-layer thermal structure.",
    body: "4 mm carbon steel outer shell over a 12 mm boiler-steel chamber that holds past 850°C without warping.",
  },
  {
    title: "Reinforced for stability.",
    body: "Heavy-duty horizontal channel steel externally; zero movement under load.",
  },
  {
    title: "Serviceable access.",
    body: "Wide top-open hopper, handwheel-sealed side door for airtight operation and ash cleanout, heavy-duty rake included.",
  },
  {
    title: "DENR-EMB stack options.",
    body: "Ducts to external wet scrubber towers or cyclone dust collectors for urban and industrial siting.",
  },
] as const;

export const projects = [
  {
    photo: "LJ CHICKEN DRESSING PLANT — SITE PHOTO",
    image: "/images/projects/lj-chicken-dressing-plant.webp",
    place: "ALICIA, ISABELA",
    title: "LJ Chicken Dressing Plant",
    body: "Advanced treatment protocols for high-BOD organic streams inside a high-sanitation food production environment.",
    variant: "light" as const,
  },
  {
    photo: "REZL LANDCARE, DAVAO — SITE PHOTO",
    image: "/images/projects/rezl-landcare-and-development.webp",
    place: "DAVAO CITY",
    title: "Rezl Landcare and Development",
    body: "Large-scale commercial land development compliance, site remediation frameworks and civil infrastructure environmental parameters.",
    variant: "light" as const,
  },
  {
    photo: "HEAVY CHEMICAL\nRECOVERY",
    image: "/images/projects/greencore-treatment-recovery.webp",
    place: "VALENZUELA CITY",
    title: "Greencore Treatment & Recovery",
    body: "Specialised industrial engineering, system monitoring and certified waste resource verification in a heavy chemical recovery environment.",
    variant: "green" as const,
  },
] as const;

export const partnerPhotos = [
  {
    photo: "WATERTECH CHINA 2026 — EVENT PHOTO",
    image: "/images/partners/watertech-china-2026.webp",
    caption:
      "2026 Watertech China, Shanghai — calibrating hardware for Philippine standards with our manufacturing partners.",
  },
  {
    photo: "WEIFANG HENGYUAN — MEETING PHOTO",
    image: "/images/partners/weifang-hengyuan-meeting.webp",
    caption:
      "Strategic alignment with the Chairman of Weifang Hengyuan Environmental Protection Water Treatment Equipment Co.",
  },
  {
    photo: "WANZE SHENGSHI — SIGNING PHOTO",
    image: "/images/partners/wanze-shengshi-signing.webp",
    caption:
      "Formalising the partnership with Wanze Shengshi Sewage Treatment Co. — supply chain continuity for the Philippine market.",
  },
  {
    photo: "SUZHOU PLOP — MOU SIGNING PHOTO",
    image: "/images/partners/suzhou-plop-mou.webp",
    caption:
      "Signing of MOU with Suzhou Plop Environmental Co., Ltd. for advanced biological treatment systems.",
  },
] as const;

export const whyCards = [
  {
    title: "End-to-end control",
    body: "DENR and LLDA consultancy through to commissioning, with no vendor hand-offs.",
  },
  {
    title: "Single, low-consumption train",
    body: "BOD, COD and ammonia nitrogen removed in one structure, automated, no permanent manual labour.",
  },
  {
    title: "Small footprint, short build",
    body: "Compact process selection and short construction windows on constrained sites.",
  },
  {
    title: "Parts on the shelf",
    body: "RO membranes, PAC composites and UF cartridges held in inventory with technical support.",
  },
] as const;

export const faqs = [
  {
    q: "How do you ensure compliance with DENR and LLDA regulations?",
    a: "All wastewater streams undergo certified treatment prior to discharge, satisfying the Philippine Clean Water Act of 2004. Systems are engineered to consistently hit and exceed the water quality guidelines and General Effluent Standards set by the DENR.",
  },
  {
    q: "What industries do you serve?",
    a: "Commercial and hospitality (hotels and resorts), heavy industrial plants including textiles and refineries, high-density residential developments, healthcare institutions, and agro-industrial livestock facilities.",
  },
  {
    q: "Do you provide end-to-end project management?",
    a: "Yes. We handle the entire cycle: initial DENR and LLDA environmental consultancy, structural civil works, advanced hardware integration, and managed vacuum tanker fleet hauling logistics.",
  },
  {
    q: "What are the key advantages of your treatment technology?",
    a: "High-efficiency biological treatment removes BOD, COD and ammonia nitrogen within a single low-consumption structure. Small footprints, short construction windows, and automated operation requiring no permanent manual labour.",
  },
  {
    q: "Is imported hardware compatible with local infrastructure?",
    a: "We handle the full technical bridge — all imported heavy machinery from our global partners is custom-configured to run on domestic Philippine 60Hz electrical grid structures and local civil engineering standards.",
  },
  {
    q: "Do you offer direct pipeline connection for offices and pantries?",
    a: "Yes. Our units support direct pipeline connections for continuous water supply without manual tank refilling.",
  },
  {
    q: "Are filter replacements available, and how often are they needed?",
    a: "We maintain a complete inventory of RO membranes, PAC composite filters and UF cartridges with dedicated technical support. Composite pre-filters are typically replaced every 6 to 12 months; main RO membranes last 12 to 24 months.",
  },
] as const;

export const quoteNeeds = [
  "STP / WTP",
  "Drinking Water",
  "Pyrolysis",
  "Compliance Audit",
  "Not sure yet",
] as const;

export type QuoteNeed = (typeof quoteNeeds)[number];
