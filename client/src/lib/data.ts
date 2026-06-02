export interface Persona {
  id: string;
  name: string;
  type: string;
  status: string;
  location: string;
  entryPoint: string;
  agency: string;
  languages: string;
  quote: string;
  description: string;
  color: string;
  lightColor: string;
  empathy: {
    thinks: string[];
    hears: string[];
    sees: string[];
    says: string[];
    pain: string;
    gain: string;
  };
  settlement: {
    stage: string;
    events: string;
    barriers: string[];
  }[];
  healthJourney: {
    stage: string;
    stageLabel: string;
    stageColor: string;
    touchpoints: string[];
    friction: string[];
    equity: string[];
    intervention: string[];
  }[];
  emotions: {
    stage: string;
    emotion: string;
    note: string;
  }[];
  stakeholders: {
    id: string;
    name: string;
    role: string;
    influence: "High" | "Medium" | "Low";
    category: "controlling" | "system" | "intervention" | "community";
    note: string;
    position: { x: number; y: number }; // Percentage coordinate for canvas positioning
  }[];
}

export const personas: Persona[] = [
  {
    id: "amara",
    name: "Amara",
    type: "High-Touch Survivor",
    status: "Gov't Assisted Refugee (GAR)",
    location: "Urban",
    entryPoint: "Emergency Dept (ED)",
    agency: "Low",
    languages: "Limited English",
    quote: "Will the police take my children away? My husband is also suffering — this is not 'normal' violence.",
    description: "Amara recently resettled in a major urban centre with three children. Her resettlement caseworker is her primary lifeline. IPV is compounded by her husband's untreated trauma and mutual fear of the Canadian legal system. IPV is often masked by overwhelming resettlement logistics.",
    color: "var(--amara-color)",
    lightColor: "var(--amara-light)",
    empathy: {
      thinks: [
        "Will the police take my children away?",
        "My husband is also suffering — this is not 'normal' violence",
        "I don't know my rights in Canada",
        "Fear of being deported if I report",
        "Shame — IPV is a private/family matter",
        "Overwhelmed by resettlement logistics"
      ],
      hears: [
        "Partner: 'You have no rights here'",
        "In-laws defending partner's behaviour",
        "Community: 'Don't shame the family'",
        "RAP caseworker (limited IPV awareness)",
        "Children crying, asking when things will get better"
      ],
      sees: [
        "Overcrowded temporary housing",
        "English-only posters in the clinic",
        "Partner managing all paperwork",
        "Few faces that look like her among service providers"
      ],
      says: [
        "Presents at ED for 'chronic pain' or pediatric wellness check",
        "Brings children to all appointments (no childcare available)",
        "Relies entirely on RAP caseworker as single point of contact",
        "Avoids using DV-specific language"
      ],
      pain: "Fear, isolation, no language access, IPV masked by trauma and resettlement chaos.",
      gain: "Safety, stability for children, housing security, understanding of rights in Canada, trusted navigator in her language."
    },
    settlement: [
      {
        stage: "Pre-Arrival",
        events: "UNHCR referral, IRCC processing, IOM orientation",
        barriers: ["No knowledge of Canadian system", "trauma from displacement"]
      },
      {
        stage: "Arrival & RAP",
        events: "Airport reception, temporary housing (RAP), RAP orientation, OHIP enrolment",
        barriers: ["English-only intake forms", "partner controls documents"]
      },
      {
        stage: "Early Settlement",
        events: "LINC enrollment, permanent housing search, ongoing RAP casework",
        barriers: ["No childcare for language classes", "joint bank account partner-controlled"]
      },
      {
        stage: "System Navigation",
        events: "School enrolment (children), social assistance, credential assessment",
        barriers: ["Confusion across agency mandates", "fear of child protection", "limited interpreter access"]
      },
      {
        stage: "Community Integration",
        events: "Cultural community contact, employment search, PR application",
        barriers: ["Partner blocks community access", "sponsorship fear used as control mechanism"]
      }
    ],
    healthJourney: [
      {
        stage: "Access",
        stageLabel: "Stage 1",
        stageColor: "#0580A0",
        touchpoints: ["RAP wellness check triggers ED visit", "Intake nurse (no IPV screening protocol)", "ED physician", "RAP caseworker present in waiting area"],
        friction: ["Partner accompanies — blocks private disclosure opportunity", "No interpreter offered at intake", "No private room available for screening"],
        equity: ["English-only intake forms", "IPV not within RAP caseworker's mandate", "No cultural safety protocols for disclosure"],
        intervention: ["IPV-informed ED screening protocol", "Peer navigator stationed in or near ED", "Culturally safe disclosure scripts for intake nurse"]
      },
      {
        stage: "Treatment",
        stageLabel: "Stage 2",
        stageColor: "#6630A6",
        touchpoints: ["Referral to refugee health clinic", "Specialized trauma assessment", "Children's welfare check", "Mental health referral"],
        friction: ["Long wait times for refugee health clinic", "Children present at appointments — no childcare", "Mental health services severely limited"],
        equity: ["Services don't account for ongoing safety risk at home", "Interpreter confidentiality issues in small community (peer interpreter may know partner)"],
        intervention: ["Co-located services (settlement + health in one site)", "Navigator bridges RAP casework and healthcare system"]
      },
      {
        stage: "Discharge",
        stageLabel: "Stage 3",
        stageColor: "#1A8550",
        touchpoints: ["Safety planning (if IPV has been disclosed)", "Referral to shelter or outreach worker", "Follow-up appointment scheduled"],
        friction: ["Safety plan assumes ability to leave home — often not feasible", "Shelter capacity full; no vacancy", "No transportation available"],
        equity: ["Shelter intake forms English-only", "Immigration status not verified — women sometimes turned away"],
        intervention: ["Safety planning co-created with peer navigator (her language)", "Warm handoff to trusted outreach worker before leaving hospital"]
      },
      {
        stage: "Return",
        stageLabel: "Stage 4",
        stageColor: "#CC7208",
        touchpoints: ["Follow-up with family physician", "Ongoing RAP case management", "Legal aid referral"],
        friction: ["No consistent care provider across system entries", "Follow-up lost if she moves housing (common for RAP families)"],
        equity: ["No coordinated IPV + settlement case file", "No handoff protocol between ED and primary care"],
        intervention: ["Navigator maintains continuity across re-entries to system", "Shared care plan spanning settlement and health sectors"]
      }
    ],
    emotions: [
      { stage: "Access", emotion: "😨 Fear / Numbness", note: "Arrives in crisis. No safe space to disclose." },
      { stage: "Treatment", emotion: "😟 Distress / Confusion", note: "System feels foreign. Children are present." },
      { stage: "Discharge", emotion: "😤 Frustration / Uncertainty", note: "Discharged without a workable safety plan." },
      { stage: "Return", emotion: "😔 Isolation / Fatigue", note: "Falls through the cracks on re-entry." }
    ],
    stakeholders: [
      { id: "partner", name: "Partner / Abuser", role: "Controlling Actor", influence: "High", category: "controlling", note: "Controls finances, documents, community access", position: { x: 50, y: 15 } },
      { id: "inlaws", name: "In-laws", role: "Controlling Actor", influence: "Medium", category: "controlling", note: "Pressure to stay silent; family reputation as barrier", position: { x: 80, y: 30 } },
      { id: "caseworker", name: "RAP Caseworker", role: "Supportive Actor", influence: "High", category: "system", note: "Primary lifeline; limited IPV knowledge; not mandated for IPV", position: { x: 20, y: 30 } },
      { id: "nurse", name: "ED Nurse", role: "Supportive Actor", influence: "Medium", category: "system", note: "Potential disclosure point; needs IPV training and alone-time protocol", position: { x: 15, y: 65 } },
      { id: "clinic", name: "Refugee Health Clinic", role: "Supportive Actor", influence: "Medium", category: "system", note: "Specialized care; access delayed; long wait times", position: { x: 45, y: 80 } },
      { id: "navigator", name: "Peer Navigator", role: "Intervention Opportunity", influence: "High", category: "intervention", note: "✦ Highest impact; doesn't yet exist in this pathway", position: { x: 50, y: 50 } },
      { id: "shelter", name: "IPV Shelter", role: "Supportive Actor", influence: "Medium", category: "intervention", note: "Safety net; language and capacity barriers", position: { x: 80, y: 70 } },
      { id: "community", name: "Cultural Community", role: "Mixed Support/Surveillance", influence: "Medium", category: "community", note: "Mixed — support + surveillance; can be source of comfort and pressure", position: { x: 85, y: 48 } }
    ]
  },
  {
    id: "priya",
    name: "Priya",
    type: "Medium-Touch Navigator",
    status: "Family Class (Sponsored)",
    location: "Winnipeg, Mid-Urban",
    entryPoint: "Primary Care / Family Physician",
    agency: "Medium",
    languages: "Moderate English",
    quote: "If I leave, will I lose my immigration status? I was independent before — now I have nothing that's mine.",
    description: "Priya joined her husband's extended family in Winnipeg. Educated and tech-savvy, but socially isolated within her sponsorship circle. Husband manages finances and immigration paperwork. Phone and computer are monitored — searching 'domestic violence' is unsafe. In-laws accompany her to appointments, blocking private disclosure. Fears sponsorship cancellation if she reports.",
    color: "var(--priya-color)",
    lightColor: "var(--priya-light)",
    empathy: {
      thinks: [
        "If I leave, will I lose my immigration status?",
        "I was independent before — now I have nothing that's mine",
        "My in-laws will blame me if I report",
        "I don't want my husband to be deported",
        "Am I even experiencing abuse? It's not physical.",
        "Fear of losing access to my children"
      ],
      hears: [
        "Husband: 'I can cancel your sponsorship any time'",
        "In-laws: 'This is your duty as a wife'",
        "Community: 'Suffer in silence, don't shame us'",
        "Friends online (her only private outlet)",
        "Doctor: 'Bring your husband next time so he can help translate'"
      ],
      sees: [
        "Husband controls joint bank account (set up by settlement agency)",
        "Family members accompany her to every appointment",
        "DV resources available only in English",
        "Online resources with no privacy — device monitored by family"
      ],
      says: [
        "Searches 'family rights Canada' instead of 'abuse' or 'domestic violence'",
        "Attends doctor only when partner permits",
        "Uses incognito browsing to research quietly, when safe",
        "Tries to find employment to gain independence"
      ],
      pain: "Invisibility, device surveillance, fear of deportation, no private channel to disclose, IPV not recognized as 'real' abuse.",
      gain: "Autonomy, knowledge of her rights as a sponsored person, confidential peer support, financial independence pathway."
    },
    settlement: [
      {
        stage: "Pre-Arrival",
        events: "Online pre-arrival services, IRCC sponsored application, partner manages all correspondence",
        barriers: ["Excluded from her own immigration process", "no knowledge of her rights as sponsored person"]
      },
      {
        stage: "Landing",
        events: "PR card receipt (partner controls it), joint bank account opened, LINC language classes",
        barriers: ["Financial dependency from day one", "all IRCC communications go to sponsor"]
      },
      {
        stage: "Early Settlement",
        events: "Foreign credential recognition process, seeking employment, settlement agency contact",
        barriers: ["In-laws accompany to all appointments", "credential barriers limit independence"]
      },
      {
        stage: "Isolation Deepens",
        events: "Social circle limited to in-laws, online-only information-seeking, routine healthcare visits",
        barriers: ["Device monitoring cuts off safe information access", "doctor doesn't ask to see her alone"]
      },
      {
        stage: "Help-Seeking",
        events: "Searches rights info online, possible contact with settlement worker, anonymous navigator chat",
        barriers: ["Fear of sponsorship cancellation", "shame — 'it's not physical, so it's not real abuse'"]
      }
    ],
    healthJourney: [
      {
        stage: "Access",
        stageLabel: "Stage 1",
        stageColor: "#0580A0",
        touchpoints: ["Routine visit to family physician", "Child immunization appointment", "Clinic receptionist", "Online health portal (MyHealth)"],
        friction: ["Partner or in-law accompanies to appointment — no private screening opportunity", "No clinic protocol to see patient alone", "Partner translates during appointment, blocking disclosure"],
        equity: ["IPV screening not trauma-informed", "No process to see patient privately", "Device monitoring prevents safe use of online health portal"],
        intervention: ["Clinic protocol requiring brief alone-time with patient (universal screening)", "Subtle wellness screen embedded in MyHealth patient portal", "Anonymous navigator chat accessible from a private device or clinic terminal"]
      },
      {
        stage: "Treatment",
        stageLabel: "Stage 2",
        stageColor: "#6630A6",
        touchpoints: ["Wellness screening (if seen alone)", "GP assessment", "Mental health referral (if disclosed)", "Prescription management"],
        friction: ["Mental health services inaccessible without strong English", "Fear that clinical notes will be shared with or accessed by partner"],
        equity: ["Cultural definitions of abuse not recognized by Western-trained providers", "Services designed for English-fluent users only"],
        intervention: ["Culturally informed counselling with language match", "Peer navigator bridges GP and legal/immigration support"]
      },
      {
        stage: "Discharge",
        stageLabel: "Stage 3",
        stageColor: "#1A8550",
        touchpoints: ["Follow-up appointment scheduled", "Safety planning (if disclosed)", "Referral to community support"],
        friction: ["Safety plan assumes ability to leave — leaves her without status or financial resources", "Fear of losing access to children", "No shelter options explained clearly"],
        equity: ["Shelter intake assumes clarity on legal status", "Resources not available in her language"],
        intervention: ["Peer navigator provides confidential options including status-protected options", "Digital tool with disguise/exit feature for safe device use"]
      },
      {
        stage: "Return",
        stageLabel: "Stage 4",
        stageColor: "#CC7208",
        touchpoints: ["Return to GP for ongoing care", "Settlement worker liaison", "Legal aid referral"],
        friction: ["No continuity — different GP each visit", "Sponsorship status not part of the care file"],
        equity: ["No IPV-immigration integration in primary care", "Follow-up communications lost if partner changes her phone number"],
        intervention: ["Navigator maintains care continuity across visits", "Sponsorship rights information integrated into care plan"]
      }
    ],
    emotions: [
      { stage: "Access", emotion: "😶 Invisibility", note: "Normalizes control. Doesn't name it as abuse." },
      { stage: "Treatment", emotion: "😟 Shame / Confusion", note: "Tries to seek help but has no safe channel." },
      { stage: "Discharge", emotion: "😨 Fear", note: "Weighs status loss vs. safety." },
      { stage: "Return", emotion: "🌱 Tentative Hope", note: "If given confidential, culturally safe support." }
    ],
    stakeholders: [
      { id: "partner", name: "Husband / Sponsor", role: "Controlling Actor", influence: "High", category: "controlling", note: "Controls status, finances, devices, all communication", position: { x: 50, y: 15 } },
      { id: "inlaws", name: "In-laws", role: "Controlling Actor", influence: "Medium", category: "controlling", note: "Social pressure; block disclosure; accompany to all appointments", position: { x: 80, y: 30 } },
      { id: "caseworker", name: "Settlement Worker", role: "Supportive Actor", influence: "High", category: "system", note: "Trust-builder; most effective if culturally matched", position: { x: 20, y: 30 } },
      { id: "gp", name: "Family Physician", role: "Supportive Actor", influence: "Medium", category: "system", note: "Missed opportunity; no alone-time protocol; doesn't ask directly", position: { x: 15, y: 65 } },
      { id: "legal", name: "Legal Aid", role: "Supportive Actor", influence: "Medium", category: "system", note: "Critical knowledge gap — she doesn't know she cannot be deported due to IPV", position: { x: 45, y: 80 } },
      { id: "navigator", name: "Peer Navigator", role: "Intervention Opportunity", influence: "High", category: "intervention", note: "✦ Highest impact; doesn't yet exist in this pathway", position: { x: 50, y: 50 } },
      { id: "online", name: "Online Community", role: "Supportive Actor", influence: "Medium", category: "community", note: "Private info source; unsafe due to device monitoring", position: { x: 85, y: 48 } }
    ]
  },
  {
    id: "elena",
    name: "Elena",
    type: "Isolated Professional",
    status: "Economic Class (TR → PR)",
    location: "Rural Ontario",
    entryPoint: "Community Health Centre (CHC)",
    agency: "High (hindered by language & location)",
    languages: "Mandarin, limited English",
    quote: "I am educated — why can't I find work here? If I report, will my employer-tied status be affected?",
    description: "Elena transitioned from a Temporary Resident work permit to Permanent Residency in a small Ontario community to fill a labour shortage. Despite high professional skills, she faces significant employment barriers and is profoundly socially isolated. Her partner is her sole bridge to community. IPV is characterized by psychological and financial control. She presents at healthcare as 'stress' or 'anxiety' — not as IPV.",
    color: "var(--elena-color)",
    lightColor: "var(--elena-light)",
    empathy: {
      thinks: [
        "I am educated — why can't I find work here?",
        "My partner is my only connection to this community",
        "If I report, will my employer-tied status be affected?",
        "I should be able to handle this myself",
        "Anxiety and stress are mounting daily",
        "No one here speaks my language"
      ],
      hears: [
        "Partner: 'You'd be nothing without me here'",
        "Employer: 'We can always replace you'",
        "No Mandarin-language supports in the rural area",
        "Occasional online contact with family in China",
        "Healthcare staff who don't speak Mandarin"
      ],
      sees: [
        "Rural community — few services, low anonymity, everyone knows each other",
        "No public transit; partner controls the only vehicle",
        "Online-only mental health resources (all in English)",
        "4% of shelters in Canada serve populations under 1,000 — none nearby"
      ],
      says: [
        "Presents at CHC for 'stress' or 'anxiety'",
        "Searches for mental health support in Mandarin",
        "Attempts to build professional network (extremely limited by location and language)",
        "Financial dependence — partner controls all money"
      ],
      pain: "Profound isolation, no Mandarin-language supports, rural distance to all services, IPV masked as employment stress.",
      gain: "Telehealth in Mandarin, rural-informed navigator, referral pathways to specialized IPV supports not available locally."
    },
    settlement: [
      {
        stage: "TR Work Permit",
        events: "Employer-sponsored entry, begins work in rural community, no settlement services (TR not eligible for most)",
        barriers: ["No RAP or settlement support", "employer controls immigration status"]
      },
      {
        stage: "TR → PR Transition",
        events: "Provincial Nominee Program application, PR card received, employment continues",
        barriers: ["Ongoing employer dependency", "isolation deepens in rural setting"]
      },
      {
        stage: "Post-PR Settlement",
        events: "Now eligible for some settlement services, seeks employment beyond current employer, LINC access sought",
        barriers: ["Rural LINC availability near-zero", "no credential recognition pathway visible"]
      },
      {
        stage: "Deepening Control",
        events: "Partner becomes sole community link, financial control established, psychological and financial abuse escalates",
        barriers: ["No community to disclose to", "rural police response slow / partner may be known to police"]
      },
      {
        stage: "Help-Seeking",
        events: "Presents at CHC for mental health concerns, searches Mandarin resources online, possible telehealth contact",
        barriers: ["Mandarin mental health resources extremely scarce", "rural CHC worker lacks IPV-specialist training"]
      }
    ],
    healthJourney: [
      {
        stage: "Access",
        stageLabel: "Stage 1",
        stageColor: "#0580A0",
        touchpoints: ["CHC intake worker", "Social worker at CHC", "Employment counsellor", "Possible telehealth GP"],
        friction: ["CHC worker has no Mandarin language capacity", "IPV not named — presents as 'stress' or 'employment pressure'", "No interpreter services available", "Rural distance to any specialist"],
        equity: ["Mandarin excluded from service delivery across the board", "Economic-class IPV pattern not well understood by providers", "No 'no wrong door' rural referral protocol"],
        intervention: ["Mandarin telehealth navigator", "Rural CHC IPV toolkit for frontline workers (this project's deliverable)", "No-wrong-door rural referral network", "Subsidized phone/internet for rural survivors"]
      },
      {
        stage: "Treatment",
        stageLabel: "Stage 2",
        stageColor: "#6630A6",
        touchpoints: ["Social worker assessment", "Mental health counselling (very limited)", "Referral to IPV supports (if known to worker)", "Telehealth specialist"],
        friction: ["No Mandarin-language mental health services in rural Ontario", "Trauma not recognized as IPV-related — treated as generalized anxiety", "Referral pathways not known to the CHC worker"],
        equity: ["Rural CHC not connected to urban IPV specialists", "Cultural definitions of abuse (psychological, financial) not in clinical scope", "Telehealth platforms typically English-only"],
        intervention: ["Mandarin-language counselling via telehealth", "Navigator bridges rural CHC and urban IPV specialists"]
      },
      {
        stage: "Discharge",
        stageLabel: "Stage 3",
        stageColor: "#1A8550",
        touchpoints: ["Follow-up plan with CHC", "Referral to distant shelter (hours away by road)", "Transportation coordination required"],
        friction: ["Nearest shelter is hours away — partner controls vehicle", "Safety planning conducted without Mandarin support", "No winter travel options in parts of rural Ontario"],
        equity: ["4% of shelters serve populations under 1,000; none nearby", "No fly-in or remote shelter capacity", "Immigration status (PR) unknown to CHC worker — may affect perceived eligibility"],
        intervention: ["Virtual safety planning in Mandarin via telehealth", "Navigator coordinates transportation logistics", "Digital resource hub (Mandarin, audio-visual, no literacy required)"]
      },
      {
        stage: "Return",
        stageLabel: "Stage 4",
        stageColor: "#CC7208",
        touchpoints: ["Ongoing telehealth visits", "CHC social worker for continuity", "Employment support (if available)"],
        friction: ["Follow-up requires reliable internet and phone — rural connectivity gaps", "Partner may intercept communications", "No longitudinal care file across CHC visits"],
        equity: ["Employer dependency not flagged as immigration risk factor in care", "Isolation means no informal support network to help her return", "No handoff between telehealth provider and CHC worker"],
        intervention: ["Navigator maintains continuity across telehealth and in-person visits", "Employer-tied status risk integrated into care plan", "Offline resource options (audio, community drop-ins if any exist)"]
      }
    ],
    emotions: [
      { stage: "Access", emotion: "😶 Numbness / Normalizing", note: "Frames abuse as employment stress or cultural norm" },
      { stage: "Treatment", emotion: "😔 Isolation / Despair", note: "No community, no language access, no visible path" },
      { stage: "Discharge", emotion: "😨 Fear without options", note: "Knows she needs help; can't see how to get it" },
      { stage: "Return", emotion: "🌱 Agency if conditions met", note: "High-capacity survivor — needs Mandarin access and rural support" }
    ],
    stakeholders: [
      { id: "partner", name: "Partner", role: "Controlling Actor", influence: "High", category: "controlling", note: "Sole community bridge; controls finances and vehicle", position: { x: 50, y: 15 } },
      { id: "employer", name: "Employer", role: "Controlling Actor", influence: "Medium", category: "controlling", note: "Controls immigration status via work permit dependency", position: { x: 80, y: 30 } },
      { id: "socialworker", name: "CHC Social Worker", role: "Supportive Actor", influence: "High", category: "system", note: "Key entry point; needs IPV training; doesn't know Mandarin", position: { x: 20, y: 30 } },
      { id: "telehealth", name: "Telehealth Provider", role: "Supportive Actor", influence: "Medium", category: "system", note: "Critical for rural access; needs Mandarin capacity", position: { x: 15, y: 65 } },
      { id: "navigator", name: "Mandarin Navigator", role: "Intervention Opportunity", influence: "High", category: "intervention", note: "✦ Highest impact; does not yet exist in this pathway", position: { x: 50, y: 50 } },
      { id: "online", name: "Online Mandarin Community", role: "Supportive Actor", influence: "Medium", category: "community", note: "Only social outlet; no local presence; subject to partner monitoring", position: { x: 85, y: 48 } },
      { id: "specialist", name: "Urban IPV Specialist", role: "Supportive Actor", influence: "Medium", category: "intervention", note: "Via navigator referral; currently inaccessible without navigator bridge", position: { x: 45, y: 80 } }
    ]
  }
];

export interface SharedFriction {
  friction: string;
  amara: boolean;
  priya: boolean;
  elena: boolean;
  category: "Friction" | "Equity Gap" | "Coordination Failure" | "Digital Friction";
}

export const sharedFrictions: SharedFriction[] = [
  { friction: "No private time with patient during healthcare visit", amara: true, priya: true, elena: false, category: "Friction" },
  { friction: "Partner/family member controls access to appointments", amara: true, priya: true, elena: false, category: "Friction" },
  { friction: "Language barriers across all service touchpoints", amara: true, priya: false, elena: true, category: "Equity Gap" },
  { friction: "No Mandarin/heritage language service delivery", amara: true, priya: false, elena: true, category: "Equity Gap" },
  { friction: "Fear of immigration consequences prevents disclosure", amara: true, priya: true, elena: true, category: "Equity Gap" },
  { friction: "No navigator role exists in current pathway", amara: true, priya: true, elena: true, category: "Coordination Failure" },
  { friction: "Safety planning assumes ability to physically leave", amara: true, priya: true, elena: true, category: "Friction" },
  { friction: "Mental health services unavailable or inaccessible", amara: true, priya: true, elena: true, category: "Friction" },
  { friction: "No continuity across system re-entries", amara: true, priya: true, elena: true, category: "Coordination Failure" },
  { friction: "Device/technology access controlled by partner", amara: false, priya: true, elena: true, category: "Digital Friction" },
  { friction: "Online resources English-only", amara: true, priya: true, elena: true, category: "Digital Friction" },
  { friction: "IPV not named / presented as something else", amara: true, priya: false, elena: true, category: "Friction" },
  { friction: "Interpreter confidentiality risks in small communities", amara: true, priya: false, elena: true, category: "Equity Gap" },
  { friction: "No handoff protocol between healthcare and settlement", amara: true, priya: true, elena: true, category: "Coordination Failure" }
];

export interface OpportunityPoint {
  opportunity: string;
  personas: string[];
  stage: string;
  type: string;
}

export const opportunities: OpportunityPoint[] = [
  { opportunity: "Culturally safe, language-matched peer navigator role", personas: ["Amara", "Priya", "Elena"], stage: "All", type: "Navigator" },
  { opportunity: "Universal alone-time protocol in all healthcare settings", personas: ["Amara", "Priya"], stage: "Access", type: "System change" },
  { opportunity: "Integrated IPV + settlement case file / shared care plan", personas: ["Amara", "Priya", "Elena"], stage: "All", type: "Coordination" },
  { opportunity: "Multilingual, audio-visual digital resource hub", personas: ["Amara", "Priya", "Elena"], stage: "All", type: "Digital tool" },
  { opportunity: "Anonymous / disguisable navigator chat tool", personas: ["Priya", "Elena"], stage: "Access", type: "Digital tool" },
  { opportunity: "Telehealth with language-matched navigators", personas: ["Elena", "Amara"], stage: "Access + Treatment", type: "Digital + Navigation" },
  { opportunity: "Rural CHC IPV toolkit for frontline workers", personas: ["Elena"], stage: "Access", type: "Toolkit" },
  { opportunity: "Safety planning co-created with navigator", personas: ["Amara", "Elena"], stage: "Discharge", type: "Navigator" }
];
