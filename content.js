/* =====================================================================
   YOUR WEBSITE CONTENT
   ---------------------------------------------------------------------
   Edit ONLY this file to change your website.

   Rules (very important):
   1. Keep text inside "double quotes".
   2. Put a comma , after every item  },
   3. To add something new, copy an existing block { ... }, paste it,
      and change the text.
   4. Click "Commit changes" on GitHub. The website updates in 1–2 minutes.
   ===================================================================== */

const SITE = {

  /* ---------- BASIC INFORMATION ---------- */
  name: "Md. Jahidul Islam",
  position: "Assistant Professor",
  department: "Department of Materials and Metallurgical Engineering",
  university: "Dhaka University of Engineering & Technology (DUET), Gazipur",
  tagline: "I design materials for clean energy and longer-lasting metals, using first-principles calculations, device simulation and experiments.",
  photo: "photo.jpg",          // to change photo: upload a new file named photo.jpg

  // Short line under the buttons in the top section (leave "" to hide)
  now: "Now leading a DUET-funded project on plant-based corrosion inhibitors for mild steel (2026–27).",

  email: "jahidulislam@duet.ac.bd",
  phone: "",                   // leave "" to hide
  office: "",                  // example: "Room 305, MME Building"
  address: "Department of MME, 2nd Campus, Dhaka University of Engineering & Technology (DUET), Gazipur-1707, Bangladesh",

  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=fXcVMGsAAAAJ" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Md-Jahidul-Islam-13" },
    { label: "DUET profile",   url: "https://profile.duet.ac.bd/u/jahidulislam" },
  ],

  /* ---------- ABOUT (each "..." is one paragraph) ---------- */
  about: [
    "I am an Assistant Professor in the Department of Materials and Metallurgical Engineering at DUET, Gazipur. I joined DUET as a Lecturer in May 2024 and became Assistant Professor in November 2025. Before that, I worked as an Assistant Engineer at the Bangladesh Power Development Board. I received my B.Sc. and M.Sc. in Materials and Metallurgical Engineering from BUET.",
    "Most of my work starts at the atomic scale. I use density functional theory to design lead-free double perovskites such as Rb₂LiInX₆, Cs₂LiFeCl₆ and Cs₂NaFeBr₆, check whether they are stable, and predict how well they absorb sunlight, split water or reduce CO₂. I then take promising absorbers into SCAPS-1D to design complete solar cells. With experimental collaborators, I study MoS₂-based nanocomposites for supercapacitors and Cu₂O–ZnO photocatalysts for cleaning dye-polluted water.",
    "In 2026–27 I am leading a DUET-funded project that brings these tools to corrosion: testing extracts of Dillenia indica (chalta), an indigenous Bangladeshi plant, as a green corrosion inhibitor for mild steel, and explaining how its molecules protect the steel surface with molecular dynamics simulation.",
  ],

  facts: [
    { label: "Publications",  value: "10 journal and 3 conference papers" },
    { label: "Funded project", value: "Project Director, DUET 2026–27" },
    { label: "Specialty",     value: "DFT, SCAPS-1D and experiments" },
  ],

  /* ---------- RESEARCH THEMES ----------
     Each theme has a short intro and a list of topics.
     figure can be: "solar", "nano" or "corrosion" (leave "" for none)                */
  themes: [
    {
      name: "Solar energy materials",
      figure: "solar",
      intro: "Finding non-toxic perovskites that can replace lead in solar cells and turn sunlight into fuel.",
      items: [
        { title: "Lead-free double perovskites", text: "Rb₂LiInX₆, Cs₂LiFeCl₆, Cs₂NaFeBr₆ and Rb₂NaGaBr₆ designed with DFT and DFT+U, with stability checked by tolerance factors, formation and decomposition energies, phonons and elastic constants." },
        { title: "SCAPS-1D solar cell simulation", text: "Three device designs reaching 26.86%, 26.90% and 27.0%, each optimized for a 0.8 µm absorber and low defect density." },
        { title: "Solar fuels", text: "Band edges for water splitting (Rb₂LiInCl₆, pH 1.97–14; Cs₂LiFeCl₆, pH 2.70–8.61), CO₂ reduction to CH₃OH and CH₄, and a CuO/MoS₂ catalyst for multicarbon products." },
      ],
    },
    {
      name: "Nanomaterials for energy and environment",
      figure: "nano",
      intro: "Combining DFT with experiments to understand why nanocomposites perform the way they do.",
      items: [
        { title: "Supercapacitor fabrication", text: "MoS₂ nanoflower electrodes decorated with CuO (336 F g⁻¹, 90% retention after 6000 cycles) and MnS (351 F g⁻¹, 80% after 8000 cycles)." },
        { title: "Photocatalytic dye degradation", text: "A Cu₂O–ZnO heterojunction that removed 98.08% of methylene blue in 110 minutes of sunlight and stayed reusable for six cycles." },
        { title: "Band-gap tuning of MoS₂", text: "Co₃O₄, CuO and MnS lower the MoS₂ band gap (1.44 to 1.27 eV with Co₃O₄) through orbital hybridization and defects, confirmed by DFT." },
      ],
    },
    {
      name: "Surfaces and corrosion",
      figure: "corrosion",
      intro: "Protecting metals and building better interfaces, from thin films to plant-based inhibitors.",
      items: [
        { title: "Green corrosion inhibition", text: "Testing Dillenia indica extract on mild steel in 1 M HCl with weight-loss, PDP and EIS, and explaining it with LAMMPS molecular dynamics. Funded by DUET, 2026–27." },
        { title: "Thin films", text: "Spin-coated Al–Mg co-doped TiO₂ electron transport layers with 90% visible transmittance and lower sheet resistance, matched by DFT+U." },
      ],
    },
  ],

  /* ---------- SOLAR EFFICIENCY CHART ----------
     value: efficiency in %
     kind: "device" (SCAPS-1D solar cell) or "slme" (theoretical limit of the material)  */
  efficiencies: [
    { value: 32.09, label: "Cs₂NaFeBr₆",          kind: "slme",   source: "Scientific Reports 2026" },
    { value: 29.0,  label: "Rb₂LiInBr₆",          kind: "slme",   source: "Int. J. Hydrogen Energy 2026" },
    { value: 27.0,  label: "Rb₂NaGaBr₆ cell",     kind: "device", source: "DUET Journal 2025" },
    { value: 26.90, label: "Rb₂LiInBr₆ cell",     kind: "device", source: "iCACCESS 2024" },
    { value: 26.86, label: "Rb₂NaGaBr₆ cell",     kind: "device", source: "ICAEEE 2024" },
  ],

  /* ---------- FUNDED PROJECTS ---------- */
  projects: [
    {
      title: "Green corrosion inhibition of mild steel in acidic media using Dillenia phytochemicals: An integrated experimental and molecular dynamics study",
      status: "Ongoing",
      role: "Project Director",
      team: "Muhtasim Al Muyeed Jim (Associate Project Director)",
      funder: "Office of the Director (Research and Extension), DUET",
      grant: "DUET-TRF/2026-2027/24",
      budget: "Tk 2,99,500",
      period: "2026–27, 12 months",
      summary: "Dillenia indica (elephant apple, chalta) is rich in gallic acid, ellagic acid and quercetin, molecules that cling strongly to metal surfaces. No corrosion study on this plant has been published anywhere. The project tests its extract on mild steel in 1 M HCl and uses LAMMPS molecular dynamics on Fe(110) to explain how each molecule protects the surface.",
      goals: [
        "Reach at least 85% inhibition efficiency, measured by weight-loss, PDP and EIS",
        "Identify the main phytochemicals with GC-MS, FTIR and UV–Vis",
        "Determine the adsorption isotherm and thermodynamics from 298–328 K",
        "Link simulated adsorption energies to measured inhibition efficiency",
      ],
      // Timeline: start and end month (1–12)
      phases: [
        { name: "Literature review and plant extraction", start: 1, end: 3 },
        { name: "Phytochemical characterisation",         start: 3, end: 4 },
        { name: "Corrosion tests: weight-loss, PDP, EIS",  start: 4, end: 6 },
        { name: "SEM-EDS surface analysis",                start: 6, end: 7 },
        { name: "LAMMPS molecular dynamics",               start: 3, end: 8 },
        { name: "Correlation, manuscript and report",      start: 8, end: 12 },
      ],
    },
  ],

  /* ---------- METHODS ---------- */
  methods: {
    computational: [
      { name: "VASP (DFT, DFT+U)", use: "Structure, band gaps, density of states and band edges" },
      { name: "Phonopy", use: "Phonon dispersion and dynamical stability" },
      { name: "Elastic constants, ELATE", use: "Mechanical stability, ductility and anisotropy" },
      { name: "BoltzTraP2", use: "Seebeck coefficient and thermoelectric figure of merit" },
      { name: "SLME", use: "Theoretical solar efficiency from absorption spectra" },
      { name: "SCAPS-1D", use: "Complete solar cell simulation and optimization" },
      { name: "Machine learning", use: "Property prediction from a 2D materials database" },
      { name: "LAMMPS, OVITO", use: "Molecular dynamics of inhibitor adsorption (new project)" },
    ],
    experimental: [
      { name: "Hydrothermal synthesis", use: "MoS₂ nanocomposites and Cu₂O–ZnO photocatalysts" },
      { name: "Spin coating", use: "Doped TiO₂ thin films" },
      { name: "XRD, XPS, FTIR", use: "Phase, composition and chemical bonding" },
      { name: "FE-SEM, TEM, AFM", use: "Morphology, interfaces and surface roughness" },
      { name: "UV–Vis, four-point probe", use: "Optical band gap and sheet resistance" },
      { name: "Electrochemical testing", use: "Specific capacitance and cycling stability" },
      { name: "Photocatalysis, TOC", use: "Dye degradation and mineralization under sunlight" },
      { name: "Corrosion testing", use: "Weight-loss, PDP and EIS (new project)" },
    ],
  },

  /* ---------- PUBLICATIONS ----------
     type: "journal", "conference" or "thesis"
     year: a number like 2026, or text like "Under review"
     link: paper URL or DOI link (leave "" if none)
     summary: one or two sentences on what the paper studied (optional)
     finding: one sentence with the main result (optional)
     You can add papers in any order. The website sorts them by year.
  */
  publications: [
    {
      year: 2026, type: "journal",
      title: "DFT analysis of all-inorganic Rb₂LiInX₆ (X = Cl, Br, I) double perovskites for photocatalytic hydrogen evolution and solar energy conversion",
      summary: "A first-principles study of three new lead-free double perovskites (Rb₂LiInCl₆, Rb₂LiInBr₆ and Rb₂LiInI₆), covering their stability, mechanical, electronic and optical properties, and their use in solar cells, water splitting and CO₂ reduction.",
      finding: "Direct band gaps of 2.79, 1.56 and 0.40 eV. Rb₂LiInBr₆ reaches about 29% SLME, and Rb₂LiInCl₆ can split water over pH 1.97–14.",
      authors: "Md Jahidul Islam, Mahbub Alam Rabin, Kazi Md. Shahan, Fahmida Gulshan",
      venue: "International Journal of Hydrogen Energy, Vol. 218, 153749",
      link: "https://doi.org/10.1016/j.ijhydene.2026.153749",
    },
    {
      year: 2026, type: "journal",
      title: "First-principles design of a lead-free Cs₂LiFeCl₆ double perovskite for solar-driven hydrogen evolution and CO₂ reduction",
      summary: "A DFT+U study of the iron-based double perovskite Cs₂LiFeCl₆, from thermodynamic, dynamical and mechanical stability to its spin-polarized electronic structure, optical response and photocatalytic potential.",
      finding: "DFT+U band gap of 1.578 eV, stable phonons, and band edges suited to hydrogen evolution (pH 2.70–8.61) and CO₂ reduction to CH₃OH and CH₄.",
      authors: "Md Jahidul Islam, Mahbub Alam Rabin, Fahmida Gulshan",
      venue: "Materials Advances, Vol. 7, 7037–7052",
      link: "https://doi.org/10.1039/d6ma00157b",
    },
    {
      year: 2026, type: "journal",
      title: "Novel lead-free Cs₂NaFeBr₆ double perovskite exhibiting multifunctional energy-relevant properties: A comprehensive first-principles study",
      summary: "A complete DFT study of the bromide double perovskite Cs₂NaFeBr₆, covering stability, mechanics, electronic structure, optics, thermoelectric transport and predicted solar cell efficiency.",
      finding: "Quasi-direct 1.09 eV band gap and a predicted 32.09% SLME efficiency, close to the Shockley–Queisser limit.",
      authors: "Mahbub Alam Rabin, Md Jahidul Islam, Tonmoy Chowdhury, Mohammed Rafi Uddin, Arifur Rahman, Fahmida Gulshan",
      venue: "Scientific Reports (2026), Article in Press",
      link: "https://doi.org/10.1038/s41598-026-56476-8",
    },
    {
      year: 2026, type: "journal",
      title: "Sunlight driven photocatalytic activity of Cu₂O–ZnO hetero-photocatalyst for the degradation of methylene blue: A combined experimental and theoretical study",
      summary: "A low-cost, one-step hydrothermal p-Cu₂O/n-ZnO heterojunction tested for cleaning methylene blue from water under natural sunlight, with DFT explaining charge separation at the interface.",
      finding: "Removed 98.08% of methylene blue in 110 minutes of sunlight, and kept 89.73% efficiency after six reuse cycles.",
      authors: "Md. Amran Hossen Suvo, Md. Jahidul Islam, Md. Tareq Mahmud, Md. Sabid Hossain, Mahabub Alam Bhuiyan",
      venue: "AIP Advances, Vol. 16, 075209",
      link: "https://doi.org/10.1063/5.0341530",
    },
    {
      year: 2025, type: "journal",
      title: "First-principles and numerical investigation of a high-efficiency lead-free Rb₂NaGaBr₆-based perovskite solar cell",
      summary: "Combines DFT with SCAPS-1D to design a lead-free solar cell around the new absorber Rb₂NaGaBr₆, then optimizes layer thickness and absorber defect density.",
      finding: "SCAPS-1D design of Glass/FTO/TiO₂/Rb₂NaGaBr₆/Cu₂O/Au reaching 27.0% efficiency, built on a 1.56 eV direct band gap.",
      authors: "Md. Jahidul Islam, Mahbub Alam Rabin",
      venue: "DUET Journal, Vol. 10, Issue 1, pp. 1–8",
      link: "",
    },
    {
      year: 2024, type: "journal",
      title: "Al-Mg co-doped TiO₂ thin film as a promising ETL for perovskite solar cells: An experimental and DFT investigation",
      summary: "Spin-coated Al–Mg co-doped anatase TiO₂ films, studied by experiment and DFT+U, to overcome the low conductivity of TiO₂ electron transport layers in perovskite solar cells.",
      finding: "Ti₀.₈₇Mg₀.₁Al₀.₀₃O₂ films reached 90% visible transmittance with lower sheet resistance and better band alignment, confirmed by DFT+U.",
      authors: "Ariful Islam, Raisa Tahiyah, Md Ruman Sheikh, Muhtasim Al Muyeed Jim, Md Jahidul Islam, Mainul Hossain, Samia Subrina, Fahmida Gulshan",
      venue: "Solar Energy, Vol. 276, 112709",
      link: "https://doi.org/10.1016/j.solener.2024.112709",
    },
    {
      year: 2024, type: "journal",
      title: "Role of defects on the electrochemical performance of MnS nanoparticles decorated 2H-MoS₂ nanoflower: Experimental and theoretical investigation",
      summary: "Hydrothermally grown MoS₂ nanoflowers decorated with MnS nanoparticles, tested as supercapacitor electrodes, with DFT linking sulfur-vacancy defects to better performance.",
      finding: "MoS₂/MnS electrodes delivered 351 F g⁻¹ at 0.3 A g⁻¹ and kept 80% of their capacitance after 8000 cycles.",
      authors: "Mizanur Rahaman, Md Jahidul Islam, Anwar Ul-Hamid, Muhammad Rakibul Islam",
      venue: "Surfaces and Interfaces, Vol. 45, 103886",
      link: "https://doi.org/10.1016/j.surfin.2024.103886",
    },
    {
      year: 2024, type: "journal",
      title: "DFT-aided experimental investigation on the electrochemical performance of hetero-interface-functionalized CuO nanoparticle-decorated MoS₂ nanoflowers for energy storage applications",
      summary: "MoS₂ nanoflowers decorated with 0–6 wt% CuO, tested as supercapacitor electrodes, with DFT explaining how the CuO interface raises conductivity and active surface area.",
      finding: "MoS₂ with 4 wt% CuO gave 336 F g⁻¹ and 90% retention after 6000 cycles; DFT shows CuO stops MoS₂ layers from restacking.",
      authors: "Muhammad Rakibul Islam, Nahid Farzana, Md Rajbanul Akhond, Mizanur Rahaman, Md Jahidul Islam, Ishtiaque M Syed",
      venue: "Materials Advances, Vol. 5 (6), 2491–2509",
      link: "https://doi.org/10.1039/d3ma00858d",
    },
    {
      year: 2024, type: "conference",
      title: "Numerical study of higher efficiency perovskite solar cell using density functional theory",
      summary: "A SCAPS-1D design of a single-junction solar cell using the DFT-explored lead-free absorber Rb₂LiInBr₆, with absorber thickness and defect density optimized.",
      finding: "Rb₂LiInBr₆ solar cell (FTO/TiO₂/Rb₂LiInBr₆/Cu₂O/Au) reaching 26.90% efficiency with a 0.8 µm absorber.",
      authors: "Md Jahidul Islam, Sheikh Hasib Cheragee, Muhammad Aminul Haque Chowdhury, Samia Subrina, Mainul Hossain, Fahmida Gulshan",
      venue: "International Conference on Advances in Computing, Communication, Electrical, and Smart Systems (iCACCESS 2024)",
      link: "https://doi.org/10.1109/ICACCESS61735.2024.10499519",
    },
    {
      year: 2024, type: "conference",
      title: "A numerical analysis of a high-efficiency solar cell using a DFT explored nontoxic perovskite material",
      summary: "A SCAPS-1D design of a solar cell built on the DFT-explored nontoxic absorber Rb₂NaGaBr₆, with SnO₂ and CuI transport layers.",
      finding: "Rb₂NaGaBr₆ solar cell (FTO/SnO₂/Rb₂NaGaBr₆/CuI/W) reaching 26.86% efficiency with a 0.8 µm absorber.",
      authors: "Md Jahidul Islam, Sheikh Hasib Cheragee, Muhammad Masud Tarek, Fahmida Gulshan",
      venue: "3rd International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE 2024)",
      link: "https://doi.org/10.1109/ICAEEE62219.2024.10561832",
    },
    {
      year: 2024, type: "conference",
      title: "Modeling and performance investigation of perovskite/MoTe₂ solar cell exceeding 44% efficiency: A SCAPS-1D simulation",
      summary: "SCAPS-1D modeling of a solar cell that combines a perovskite with MoTe₂, reaching a simulated efficiency above 44%.",
      authors: "Sheikh Hasib Cheragee, J. A. Akhi, A. Z. M. T. Islam, M. T. Alam, Md Jahidul Islam, M. J. Alam",
      venue: "2024 International Conference on Recent Progresses in Science, Engineering and Technology (ICRPSET 2024)",
      link: "",
    },
    {
      year: 2023, type: "journal",
      title: "2D–2D nanoheterostructure of an exposed {001}-facet CuO and MoS₂ based bifunctional catalyst showing excellent surface chemistry and conductivity for cathodic CO₂ reduction",
      summary: "Proposes a 2D–2D catalyst made of a {001}-faceted CuO nanosheet on a MoS₂ support, validated by DFT, including a light-enhanced mechanism for CO₂ reduction.",
      finding: "DFT model of a CuO{001}/MoS₂ catalyst for CO₂ electroreduction to multicarbon products, checked against machine-learning predictions.",
      authors: "Md Rajbanul Akhond, Md Jahidul Islam, Ahmad Irfan, Ahmed Sharif",
      venue: "ACS Omega, Vol. 8 (40), 37353–37368",
      link: "https://doi.org/10.1021/acsomega.3c05213",
    },
    {
      year: 2023, type: "journal",
      title: "A combined experimental and theoretical study on the structural, optical and electronic properties of hetero interface-functionalized MoS₂/Co₃O₄ nanocomposite",
      summary: "Hydrothermally synthesized MoS₂/Co₃O₄ nanoflowers characterized by FE-SEM, TEM, XRD, XPS and UV–Vis, with DFT explaining the orbital interactions at the interface.",
      finding: "Co₃O₄ lowered the MoS₂ band gap from 1.44 to 1.27 eV, extending light absorption into the near-infrared.",
      authors: "Md. Hasive Ahmad, Md. Rajbanul Akhond, Md. Jahidul Islam, Mizanur Rahaman, Rabeya Binta Alam, Anwar Ul-hamid, Muhammad Rakibul Islam",
      venue: "Surfaces and Interfaces, Vol. 37, 102750",
      link: "https://doi.org/10.1016/j.surfin.2023.102750",
    },
    {
      year: 2022, type: "thesis",
      title: "First principles DFT analysis of lead-free Rb₂MInX₆ double perovskite halides for photovoltaic applications",
      summary: "An M.Sc. thesis at BUET using first-principles DFT to screen lead-free Rb₂MInX₆ double perovskite halides for photovoltaic applications.",
      finding: "DFT screening of lead-free Rb₂MInX₆ double perovskites for solar cells, the starting point for later papers.",
      authors: "Md Jahidul Islam",
      venue: "M.Sc. thesis, Department of Materials and Metallurgical Engineering, BUET",
      link: "",
    },
  ],

  /* ---------- EXPERIENCE (newest first) ---------- */
  experience: [
    { when: "Nov 2025 – present",  title: "Assistant Professor", place: "Dept. of MME, DUET, Gazipur", current: true },
    { when: "May 2024 – Nov 2025", title: "Lecturer",            place: "Dept. of MME, DUET, Gazipur" },
    { when: "May 2023 – May 2024", title: "Assistant Engineer",  place: "Bangladesh Power Development Board" },
  ],

  /* ---------- EDUCATION (newest first) ---------- */
  education: [
    { when: "2022", title: "M.Sc. in Engineering", place: "Materials and Metallurgical Engineering, BUET" },
    { when: "2021", title: "B.Sc. in Engineering", place: "Materials and Metallurgical Engineering, BUET" },
    { when: "2015", title: "HSC, Science",          place: "Government Science College" },
  ],

  /* ---------- COURSES TAUGHT ---------- */
  courses: [
    { code: "MME 2006", title: "Computer Programming",                       years: "2024–2025" },
    { code: "MME 2303", title: "Heat and Mass Transfer",                     years: "2024–2025" },
    { code: "MME 2304", title: "Heat and Mass Transfer Sessional",           years: "2024–2025" },
    { code: "MME 3002", title: "Materials and Metallurgical Analysis",       years: "2024–2025" },
    { code: "MME 3101", title: "Steel Production and Quality Control",       years: "2024" },
    { code: "MME 3103", title: "Electronic, Magnetic and Optical Materials", years: "2024, 2025" },
    { code: "MME 3111", title: "Glass and Ceramics Engineering",             years: "2024–2025" },
    { code: "MME 3112", title: "Glass and Ceramics Engineering Sessional",   years: "2024–2025" },
    { code: "MME 3113", title: "Materials Characterization",                 years: "2024–2025" },
    { code: "MME 4002", title: "Materials Processing Plant Design",          years: "2024" },
    { code: "MME 4103", title: "Polymers and Composites",                    years: "2025" },
    { code: "MME 4104", title: "Polymers and Composites Sessional",          years: "2024–2025" },
    { code: "MME 4113", title: "Ceramics for Advanced Applications",         years: "2024, 2025" },
  ],

  /* ---------- HONORS & AWARDS ---------- */
  awards: [
    { title: "PG Fellowship",                              by: "BUET",                               year: "2022" },
    { title: "National Science and Technology Fellowship", by: "Ministry of Science and Technology", year: "2021" },
    { title: "Dean’s List Award",                          by: "BUET",                               year: "2017" },
    { title: "University Merit Scholarship",               by: "BUET, multiple terms",               year: "2016–2019" },
  ],

  /* ---------- CONTACT MESSAGE ---------- */
  contactNote: "Students looking for thesis work and researchers interested in energy materials, DFT or corrosion are welcome to write.",
};
