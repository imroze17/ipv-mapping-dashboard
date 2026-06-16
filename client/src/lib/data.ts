export interface InterventionItem {
  cat: "nav" | "sys" | "digital";
  text: string;
}

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
    intervention: InterventionItem[];
    evidence?: {
      source: "literature" | "interview";
      text: string;
    }[];
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
    status: "Refugee Class - Government Assisted Refugee (GAR)",
    location: "Urban",
    entryPoint: "Emergency Dept (ED)",
    agency: "Low",
    languages: "Limited English",
    quote: "Will the police take my children away? My husband is also suffering — this is not 'normal' violence.",
    description: "Amara recently resettled in a major urban centre with three children. Her resettlement caseworker is her primary lifeline, especially given extremely limited English language. IPV is compounded by her husband's untreated trauma and mutual fear of the Canadian legal system. IPV is often masked by overwhelming resettlement logistics.",
    color: "var(--amara-color)",
    lightColor: "var(--amara-light)",
    empathy: {
      thinks: [
        "Will the police take my children away?",
        "My husband is also suffering — this is not 'normal' violence",
        "I don't know my rights in Canada",
        "Fear of being deported if I report",
        "Shame — IPV is a private/family matter",
        "Confusion between the Western definition of IPV and my cultural upbringing — in my culture, this was not seen as abuse",
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
        barriers: ["No knowledge of Canadian system", "Trauma from displacement"]
      },
      {
        stage: "Arrival & RAP",
        events: "Airport reception, temporary housing (RAP), RAP orientation, OHIP enrolment",
        barriers: ["English-only intake forms", "Partner controls documents"]
      },
      {
        stage: "Early Settlement",
        events: "LINC enrollment, permanent housing search, ongoing RAP casework",
        barriers: ["No childcare for language classes", "Joint bank account partner-controlled"]
      },
      {
        stage: "System Navigation",
        events: "School enrolment (children), social assistance, credential assessment",
        barriers: ["Confusion across agency mandates", "Fear of child protection", "Limited interpreter access"]
      },
      {
        stage: "Community Integration",
        events: "Cultural community contact, employment search, PR application",
        barriers: ["Partner blocks community access", "Sponsorship fear used as control mechanism"]
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
        intervention: [
          { cat: "sys", text: "IPV-informed ED screening protocol" },
          { cat: "nav", text: "Navigator stationed in or near ED" },
          { cat: "sys", text: "Culturally safe disclosure scripts for intake nurse" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Children are sometimes brought in to translate at appointments, even when service providers strongly advise against it — exposing children to disclosures they should never have to interpret. (Giesbrecht, 2020)"
          },
          {
            source: "literature",
            text: "Documented cultural safety failures at point of access include one case where an organization sent two male workers to the home of a Muslim woman with limited English — illustrating that intake protocols can themselves become barriers. (Giesbrecht, 2020)"
          },
          {
            source: "interview",
            text: "Service providers report that partner accompaniment at ED intake is normalized — there is rarely a standardized protocol to create private time with the patient before the partner is present."
          }
        ]
      },
      {
        stage: "Treatment",
        stageLabel: "Stage 2",
        stageColor: "#6630A6",
        touchpoints: ["Referral to refugee health clinic", "Specialized trauma assessment", "Children's welfare check", "Mental health referral"],
        friction: ["Long wait times for refugee health clinic", "Children present at appointments — no childcare", "Mental health services severely limited"],
        equity: ["Services don't account for ongoing safety risk at home", "Interpreter confidentiality issues in small community (peer interpreter may know partner)"],
        intervention: [
          { cat: "sys", text: "Co-located services (settlement + health in one site)" },
          { cat: "nav", text: "Navigator bridges RAP casework and healthcare system" },
          { cat: "sys", text: "Translated materials in primary language" },
          { cat: "sys", text: "Education workshops in multiple languages" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Even where interpretation is provided, clients have experienced discomfort with the interpreter or the interpreter's discomfort with the content. Critically, interpreters are typically only available within the referring organization — not at the services the client is referred to. (Giesbrecht, 2023)"
          },
          {
            source: "interview",
            text: "Organizations frequently encounter clients arriving at follow-up appointments with medications or referrals from other providers — but with no understanding of their purpose and no information transferred between services. Communication silos are the norm, not the exception."
          }
        ]
      },
      {
        stage: "Discharge",
        stageLabel: "Stage 3",
        stageColor: "#1A8550",
        touchpoints: ["Safety planning (if IPV has been disclosed)", "Referral to shelter or outreach worker", "Follow-up appointment scheduled"],
        friction: ["Safety plan assumes ability to leave home — often not feasible", "Shelter capacity full; no vacancy", "No transportation available"],
        equity: ["Shelter intake forms English-only", "Immigration status not verified — women sometimes turned away"],
        intervention: [
          { cat: "nav", text: "Safety planning co-created with navigator (her language)" },
          { cat: "nav", text: "Warm handoff to trusted outreach worker before leaving hospital" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Legal Aid eligibility criteria may inappropriately include the abusive partner's income in means-testing assessments, creating a financial barrier to legal support precisely when it is most needed. (Wuerch, 2025)"
          },
          {
            source: "literature",
            text: "In Saskatchewan, a recent policy change allows Permanent Residents immediate eligibility for a healthcare card, with a 1-month temporary card issued while a permanent address is confirmed. However, no standardized referral system for immigrants to access healthcare providers exists yet provincially. (Lane, 2022)"
          }
        ]
      },
      {
        stage: "Return",
        stageLabel: "Stage 4",
        stageColor: "#CC7208",
        touchpoints: ["Follow-up with family physician", "Ongoing RAP case management", "Legal aid referral"],
        friction: ["No consistent care provider across system entries", "Follow-up lost if she moves housing (common for RAP families)"],
        equity: ["No coordinated IPV + settlement case file", "No handoff protocol between ED and primary care"],
        intervention: [
          { cat: "nav", text: "Navigator maintains continuity across re-entries to system" },
          { cat: "sys", text: "Shared care plan spanning settlement and health sectors" },
          { cat: "sys", text: "Workshops on abuse and health for clients and providers" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Women who have resided in Canada for 10 or more years access formal and informal IPV supports at rates comparable to the broader Canadian population — indicating the early settlement window (0–5 years) is the highest-risk period for falling through the cracks. (Giesbrecht, 2020)"
          },
          {
            source: "literature",
            text: "Some agencies operate under strict funding-mandated time limits: one organization reported a 2-year cap on newcomer family support; some shelters aim for a maximum 6-week stay. These structural limits can strand women in the return phase without continuity. (Giesbrecht, 2020)"
          }
        ]
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
      { id: "navigator", name: "Navigator", role: "Intervention Opportunity", influence: "High", category: "intervention", note: "✦ Highest impact; doesn't yet exist in this pathway", position: { x: 25, y: 55 } },
      { id: "shelter", name: "IPV Shelter", role: "Supportive Actor", influence: "Medium", category: "intervention", note: "Safety net; language and capacity barriers", position: { x: 80, y: 75 } },
      { id: "community", name: "Cultural Community", role: "Mixed Support/Surveillance", influence: "Medium", category: "community", note: "Mixed — support + surveillance; can be source of comfort and pressure", position: { x: 85, y: 48 } },
      {
        id: "children",
        name: "Children (x3)",
        role: "Dependents / Surveillance Risk",
        influence: "High",
        category: "community",
        note: "Present at all appointments — no childcare available. Sometimes used as interpreters, which is inappropriate for IPV disclosures. Fear of child protection removal is a primary barrier to Amara seeking help.",
        position: { x: 68, y: 65 }
      }
    ]
  },
  {
    id: "priya",
    name: "Priya",
    type: "Medium-Touch Survivor",
    status: "Family Class - Sponsored",
    location: "Mid-Urban Centre",
    entryPoint: "Primary Care / Family Physician",
    agency: "Medium",
    languages: "Moderate English",
    quote: "If I leave, will I lose my immigration status? I was independent before — now I have nothing that's mine.",
    description: "Priya joined her husband's extended family in a mid-urban centre. Educated and tech-savvy, but socially isolated within her sponsorship circle and unable to attain employment in her field. Husband manages finances and immigration paperwork. Phone and computer are monitored — searching 'domestic violence' is unsafe. In-laws accompany her to appointments to support translation, blocking private disclosure. Fears sponsorship cancellation if she reports.",
    color: "var(--priya-color)",
    lightColor: "var(--priya-light)",
    empathy: {
      thinks: [
        "If I leave, will I lose my immigration status?",
        "I was independent before — now I have nothing that's mine",
        "My in-laws will blame me if I report",
        "I don't want my husband to be deported",
        "Am I even experiencing abuse? It's not physical.",
        "Fear of losing access to my children — he has my children's immigration documents"
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
        barriers: ["Excluded from her own immigration process", "No knowledge of her rights as sponsored person"]
      },
      {
        stage: "Landing",
        events: "PR card receipt (partner controls it), joint bank account opened, LINC language classes",
        barriers: ["Financial dependency from day one", "All IRCC communications go to sponsor"]
      },
      {
        stage: "Early Settlement",
        events: "Foreign credential recognition process, seeking employment, settlement agency contact",
        barriers: ["In-laws accompany to all appointments", "Credential barriers limit independence"]
      },
      {
        stage: "Isolation Deepens",
        events: "Social circle limited to in-laws, online-only information-seeking, routine healthcare visits",
        barriers: ["Device monitoring cuts off safe information access", "Doctor doesn't ask to see her alone"]
      },
      {
        stage: "Help-Seeking",
        events: "Searches rights info online, possible contact with settlement worker, anonymous navigator chat",
        barriers: ["Fear of sponsorship cancellation", "Shame — 'it's not physical, so it's not real abuse'"]
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
        intervention: [
          { cat: "sys", text: "Clinic protocol requiring brief alone-time with patient (universal screening)" },
          { cat: "digital", text: "Subtle wellness screen embedded in MyHealth patient portal" },
          { cat: "digital", text: "Anonymous navigator chat accessible from a private device or clinic terminal" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Abusive partners exercise absolute financial control. Joint bank accounts are routinely opened on arrival, but in practice, the abuser manages all funds. The survivor may earn income but is denied access to her own money. (Giesbrecht, 2020)"
          },
          {
            source: "interview",
            text: "Interviews reveal that online patient portals (like MyHealth) represent a major digital friction point. When devices are shared or monitored, abusers can read clinical notes, review appointment history, and discover IPV disclosures."
          }
        ]
      },
      {
        stage: "Treatment",
        stageLabel: "Stage 2",
        stageColor: "#6630A6",
        touchpoints: ["Wellness screening (if seen alone)", "GP assessment", "Mental health referral (if disclosed)", "Prescription management"],
        friction: ["Mental health services inaccessible without strong English", "Fear that clinical notes will be shared with or accessed by partner"],
        equity: ["Cultural definitions of abuse not recognized by Western-trained providers", "Services designed for English-fluent users only"],
        intervention: [
          { cat: "nav", text: "Culturally informed counselling with language match" },
          { cat: "nav", text: "Navigator bridges GP and legal/immigration support" },
          { cat: "sys", text: "Workshops on abuse and health for both clients and providers" },
          { cat: "sys", text: "Education workshops in multiple languages" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Abusive partners have weaponized the healthcare system itself — demanding psychological assessments, disputing clinical diagnoses, and using psychiatric records in family court to dispute child custody. (Giesbrecht, 2020)"
          },
          {
            source: "interview",
            text: "Settlement workers report that survivors rarely recognize non-physical abuse (coercive control, isolation, financial withholding) as 'real abuse' because healthcare screening questions focus almost exclusively on physical violence."
          }
        ]
      },
      {
        stage: "Discharge",
        stageLabel: "Stage 3",
        stageColor: "#1A8550",
        touchpoints: ["Follow-up appointment scheduled", "Safety planning (if disclosed)", "Referral to community support"],
        friction: ["Safety plan assumes ability to leave — leaves her without status or financial resources", "Fear of losing access to children", "No shelter options explained clearly"],
        equity: ["Shelter intake assumes clarity on legal status", "Resources not available in her language"],
        intervention: [
          { cat: "nav", text: "Navigator provides confidential options including status-protected options" },
          { cat: "digital", text: "Digital tool with disguise/exit feature for safe device use" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Sponsored spouses face intense, continuous fear of deportation. Abusers exploit this vulnerability by falsely claiming they can cancel the sponsorship, deport the survivor, and take custody of the children if she seeks help. (Giesbrecht, 2023)"
          },
          {
            source: "interview",
            text: "Shelter intake forms require detailed immigration status data. When a survivor does not have her physical PR card (which is often withheld by the abuser), she is frequently turned away due to administrative risk."
          }
        ]
      },
      {
        stage: "Return",
        stageLabel: "Stage 4",
        stageColor: "#CC7208",
        touchpoints: ["Return to GP for ongoing care", "Settlement worker liaison", "Legal aid referral"],
        friction: ["No continuity — different GP each visit", "Sponsorship status not part of the care file"],
        equity: ["No IPV-immigration integration in primary care", "Follow-up communications lost if partner changes her phone number"],
        intervention: [
          { cat: "nav", text: "Navigator maintains care continuity across visits" },
          { cat: "sys", text: "Sponsorship rights information integrated into care plan" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Immigration, Refugees and Citizenship Canada (IRCC) provides a temporary resident permit (TRP) pathway for out-of-status victims of family violence. However, primary care physicians and settlement workers are rarely trained to identify or navigate this pathway. (Holtmann, 2018)"
          },
          {
            source: "interview",
            text: "Service providers report that when an abuser changes the survivor's phone number or terminates her plan, she is completely cut off from all primary care and settlement follow-up, causing her to fall out of care."
          }
        ]
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
      { id: "navigator", name: "Navigator", role: "Intervention Opportunity", influence: "High", category: "intervention", note: "✦ Highest impact; doesn't yet exist in this pathway", position: { x: 25, y: 55 } },
      { id: "online", name: "Online Community", role: "Supportive Actor", influence: "Medium", category: "community", note: "Private info source; unsafe due to device monitoring", position: { x: 85, y: 48 } },
      {
        id: "children",
        name: "Children",
        role: "Dependents / Abuser's Leverage",
        influence: "High",
        category: "community",
        note: "Fear of losing custody is a significant barrier to disclosure and leaving. Abuser uses children as leverage to maintain control.",
        position: { x: 70, y: 62 }
      }
    ]
  },
  {
    id: "elena",
    name: "Elena",
    type: "Isolated Professional",
    status: "Economic Class - TR to PR",
    location: "Rural",
    entryPoint: "Community Health Centre (CHC)",
    agency: "High (hindered by language & location)",
    languages: "Mandarin, limited English",
    quote: "I am educated — why can't I find relevant work here? If I report, will my employer-tied status be affected?",
    description: "Elena transitioned from a Temporary Resident work permit to Permanent Residency in a small rural community to fill a labour shortage. Despite high professional skills, she faces significant employment barriers and is profoundly socially isolated, compounded by limited English skills. Her partner is her sole bridge to community. IPV is characterized by psychological and financial control. She presents to healthcare with 'stress' and 'anxiety', not with physical symptoms of IPV.",
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
        barriers: ["No RAP or settlement support", "Employer controls immigration status"]
      },
      {
        stage: "TR → PR Transition",
        events: "Provincial Nominee Program application, PR card received, employment continues",
        barriers: ["Ongoing employer dependency", "Isolation deepens in rural setting"]
      },
      {
        stage: "Post-PR Settlement",
        events: "Now eligible for some settlement services, seeks employment beyond current employer, LINC access sought",
        barriers: ["Rural LINC availability near-zero", "No credential recognition pathway visible"]
      },
      {
        stage: "Deepening Control",
        events: "Partner becomes sole community link, financial control established, psychological and financial abuse escalates",
        barriers: ["No community to disclose to", "Rural police response slow / partner may be known to police"]
      },
      {
        stage: "Help-Seeking",
        events: "Presents at CHC for mental health concerns, searches Mandarin resources online, possible telehealth contact",
        barriers: ["Mandarin mental health resources extremely scarce", "Rural CHC worker lacks IPV-specialist training"]
      }
    ],
    healthJourney: [
      {
        stage: "Access",
        stageLabel: "Stage 1",
        stageColor: "#0580A0",
        touchpoints: ["CHC intake worker", "Public health nurse at CHC", "Employment counsellor", "Possible telehealth GP"],
        friction: ["CHC worker has no Mandarin language capacity", "IPV not named — presents as 'stress' or 'employment pressure'", "No interpreter services available", "Rural distance to any specialist"],
        equity: ["Mandarin excluded from service delivery across the board", "Economic-class IPV pattern not well understood by providers", "No no-wrong-door rural referral protocol"],
        intervention: [
          { cat: "nav", text: "Mandarin-speaking telehealth navigator" },
          { cat: "sys", text: "Rural CHC IPV toolkit for frontline workers (this project's deliverable)" },
          { cat: "sys", text: "No-wrong-door rural referral network" },
          { cat: "sys", text: "Subsidized phone/internet for rural survivors" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Rural service providers are heavily isolated. A 'no-wrong-door' referral network is desperately needed to bridge differing mandates and privacy regulations between rural healthcare clinics and distant urban shelters. (Lane, 2022)"
          },
          {
            source: "interview",
            text: "Interviews reveal that rural healthcare providers rarely have any formal IPV training. They are highly dependent on informal networks or outdated paper lists to make referrals, often sending women to shelters that have been closed or full for months."
          }
        ]
      },
      {
        stage: "Treatment",
        stageLabel: "Stage 2",
        stageColor: "#6630A6",
        touchpoints: ["Social worker assessment", "Mental health counselling (very limited)", "Referral to IPV supports (if known to worker)", "Telehealth specialist"],
        friction: ["No Mandarin-language mental health services in rural Ontario", "Trauma not recognized as IPV-related — treated as generalized anxiety", "Referral pathways not known to the CHC worker"],
        equity: ["Rural CHC not connected to urban IPV specialists", "Cultural definitions of abuse (psychological, financial) not in clinical scope", "Telehealth platforms typically English-only"],
        intervention: [
          { cat: "nav", text: "Mandarin-language counselling via telehealth" },
          { cat: "nav", text: "Navigator bridges rural CHC and urban IPV specialists" },
          { cat: "sys", text: "Education workshops in multiple languages" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Rural communities present severe confidentiality risks. In small towns, local interpreters often belong to the same small social or religious circles as the abuser — creating an extreme barrier to safe disclosure. (Giesbrecht, 2020)"
          },
          {
            source: "interview",
            text: "Both rural organizations interviewed noted that wait times for mental health specialists are so long (often 12–18 months) that some desperate clients have actually returned to their home countries temporarily just to see a doctor."
          }
        ]
      },
      {
        stage: "Discharge",
        stageLabel: "Stage 3",
        stageColor: "#1A8550",
        touchpoints: ["Follow-up plan with CHC", "Referral to distant shelter (hours away by road)", "Transportation coordination required"],
        friction: ["Nearest shelter is hours away — partner controls vehicle", "Safety planning conducted without Mandarin support", "No winter travel options — including no Uber/rideshare or public transit"],
        equity: ["4% of shelters serve populations under 1,000; none nearby", "No fly-in or remote shelter capacity", "Immigration status (PR) unknown to CHC worker — may affect perceived eligibility"],
        intervention: [
          { cat: "nav", text: "Virtual safety planning in Mandarin via telehealth" },
          { cat: "nav", text: "Navigator coordinates transportation logistics" },
          { cat: "digital", text: "Digital resource hub (Mandarin, audio-visual, no literacy required)" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Only 4% of domestic violence shelters in Canada are located in rural municipalities or communities with populations under 1,000. Survivors must travel hours by road to reach safety, which is impossible without independent transportation. (Giesbrecht, 2020)"
          },
          {
            source: "interview",
            text: "Practitioners report that safety planning templates assume a survivor can physically leave her home at any moment. In rural winter conditions with no public transit or rideshare, these templates are practically useless."
          }
        ]
      },
      {
        stage: "Return",
        stageLabel: "Stage 4",
        stageColor: "#CC7208",
        touchpoints: ["Ongoing telehealth visits", "CHC social worker for continuity", "Employment support (if available)"],
        friction: ["Follow-up requires reliable internet and phone — rural connectivity gaps", "Partner may intercept communications", "No longitudinal care file across CHC visits"],
        equity: ["Employer dependency not flagged as immigration risk factor in care", "Isolation means no informal support network to help her return", "No handoff between telehealth provider and CHC worker"],
        intervention: [
          { cat: "nav", text: "Navigator maintains continuity across telehealth and in-person visits" },
          { cat: "sys", text: "Employer-tied status risk integrated into care plan" },
          { cat: "digital", text: "Offline resource options (audio, community drop-ins if any exist)" },
          { cat: "sys", text: "Workshops on abuse and health for clients and providers" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Survivors on employer-tied work permits (e.g., agricultural or care workers) face extreme immigration precarity. Reporting abuse risks losing their job, which automatically invalidates their legal status in Canada. (Holtmann, 2018)"
          },
          {
            source: "interview",
            text: "Service providers emphasize that rural digital connectivity is highly unstable. If a survivor's cell service or internet is cut off by her partner, she loses all contact with virtual support groups and telehealth counselors."
          }
        ]
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
      { id: "navigator", name: "Mandarin-Speaking Navigator", role: "Intervention Opportunity", influence: "High", category: "intervention", note: "✦ Highest impact; does not yet exist in this pathway", position: { x: 25, y: 55 } },
      { id: "online", name: "Online Mandarin Community", role: "Supportive Actor", influence: "Medium", category: "community", note: "Only social outlet; no local presence; subject to partner monitoring", position: { x: 85, y: 48 } },
      { id: "specialist", name: "Urban IPV Specialist", role: "Supportive Actor", influence: "Medium", category: "intervention", note: "Via navigator referral; currently inaccessible without navigator bridge", position: { x: 45, y: 80 } }
    ]
  },
  {
    id: "maya",
    name: "Maya",
    type: "Practitioner",
    status: "Non-profit Social Worker",
    location: "Urban",
    entryPoint: "Non-profit Shelter / Settlement Agency",
    agency: "N/A",
    languages: "English; limited Mandarin",
    quote: "So one thing that is stopping us from really helping women is that we don't know the different agencies so well and how they work. We are told: 'If you are spending too much time on this case, how are we going to complete our numbers for the funders?'",
    description: "Maya is a social worker at an urban non-profit supporting newcomer, immigrant, and refugee women and their children to access safe shelter, psychosocial supports, and transition safely. She also provides uncompensated health navigation in a fragmented, understaffed system. Faced with funding cuts and limited beds, her organization is pivoting toward shorter crisis stays. Maya spends hours navigating IPV disclosures through third-party interpreters, maintaining labor-intensive referral networks, and carrying the emotional weight of sending vulnerable families into a fragmented system.",
    color: "var(--maya-color)",
    lightColor: "var(--maya-light)",
    empathy: {
      thinks: [
        "Worried she is missing trauma indicators and cultural nuances due to language barriers",
        "Anxious about sending women to overcapacity shelters or using outdated directory info",
        "Exhausted by circular referring instead of continuous support",
        "Struggles to leave secondary traumatic stress at work"
      ],
      hears: [
        "Supervisor: 'Don't spend too much time on one case — we must hit funder target numbers'",
        "Clients: 'It's not a big deal; in my culture this is normal'",
        "External agencies: 'Our housing waitlists are 6-12 months long'",
        "Landlords: 'They can't stay — their abuser could damage the property'"
      ],
      sees: [
        "Changing immigration policies (e.g., Bill C-12 — strict timelines and expanded enforcement powers)",
        "Clunky legacy software, manual paperwork, unintegrated Word docs and PDFs",
        "Clients lacking health coverage because immigration documents were stolen by abuser",
        "Explicit systemic racism from healthcare providers and other social workers"
      ],
      says: [
        "Spends hours manually upkeeping resource directories",
        "Leverages personal referral networks because official channels are slow",
        "Pleads with healthcare services to overlook missing documentation",
        "Limits deep relationship-building to process intakes quickly, despite knowing it harms care"
      ],
      pain: "Administrative overload, technological deficits, resource directory dead-ends",
      gain: "Integrated multi-agency hubs, automated case management tools, shifting of funder metrics to relational safety over target numbers"
    },
    settlement: [
      {
        stage: "Crisis Intake & Stabilization",
        events: "Safety planning. Shelter intake assessments.",
        barriers: ["Precarious client documentation leads to ineligibility for government-funded settlement support."]
      },
      {
        stage: "Emergency Shelter Stay",
        events: "Local resource access. Pairing with community interpreters (when unavailable, children serve as interpreters).",
        barriers: ["Lack of language-specific, gender-matched interpreters."]
      },
      {
        stage: "Status & Health Navigation",
        events: "Primary medical evaluation. Legal aid registration.",
        barriers: ["Legal aid calculations include partner's income, disqualifying the assetless survivor."]
      },
      {
        stage: "Transitional Housing Application",
        events: "DV priority housing declarations (to bypass social housing waitlists).",
        barriers: ["6-to-12-month waitlist. Systemic bias from housing providers."]
      },
      {
        stage: "Case Closure",
        events: "Forced discharge and referral.",
        barriers: ["Internal pressure to meet targets. Clients forced to re-unpack trauma at each new referral agency."]
      }
    ],
    healthJourney: [
      {
        stage: "Access",
        stageLabel: "Stage 1",
        stageColor: "#0580A0",
        touchpoints: [
          "Acts as ad-hoc systems advocate (no service mandate or operational resources)",
          "Attempts to bypass via informal referrals for clients with stolen documentation"
        ],
        friction: [
          "Clients are turned away due to precarious documentation",
          "Some clients left with no choice but to consider returning to home countries for treatment"
        ],
        equity: [
          "No healthcare service navigation mandate within Maya's non-profit role",
          "Abusers routinely steal or hide immigration documentation"
        ],
        intervention: [
          { cat: "sys", text: "'No door is the wrong door' protocol — health service regardless of documentation" },
          { cat: "nav", text: "Embed IPV resources and referral scripts into LINC classes, training language teachers as safe entry points" },
          { cat: "digital", text: "Automated tracking tools to reduce admin workload" }
        ],
        evidence: [
          {
            source: "interview",
            text: "Maya's agency experiences extreme operational stress. Shelter capacity is frequently at 100%, and workers spend hours calling distant agencies because they lack an automated system to check vacancy rates."
          },
          {
            source: "interview",
            text: "Both organizations interviewed expressed interest in transitioning to cloud-based platforms for client files, but had hesitations about security. This also limits organizations' ability to preserve digital evidence (texts, photos, bank statements) on a client's behalf."
          }
        ]
      },
      {
        stage: "Treatment",
        stageLabel: "Stage 2",
        stageColor: "#6630A6",
        touchpoints: [
          "Coordinates follow-up appointments"
        ],
        friction: [
          "Abusers fabricate mental health diagnoses (e.g., schizophrenia) to strip survivors of child custody",
          "Clients frequently matched with male providers, causing discomfort"
        ],
        equity: [
          "Newcomer support staff lack IPV expertise; medical staff lack newcomer status and cultural safety training",
          "Interpreters unequipped for graphic IPV disclosures, leading to broken communication during clinical care"
        ],
        intervention: [
          { cat: "sys", text: "Gender-matching protocols for clinical providers and language services" },
          { cat: "nav", text: "Train interpreters with IPV knowledge to support health navigation" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Secondary traumatic stress and compassion fatigue are rampant among frontline IPV and settlement staff. Organizations rarely have funding or policies to provide professional clinical supervision or psychological support for their own workers. (Giesbrecht, 2020)"
          },
          {
            source: "interview",
            text: "Maya reports that working with phone-based interpreters often breaks the trust needed for graphic IPV disclosures. Interpreters frequently lack training on trauma-informed communication, sometimes gaslighting or judging the survivor mid-translation."
          }
        ]
      },
      {
        stage: "Discharge",
        stageLabel: "Stage 3",
        stageColor: "#1A8550",
        touchpoints: [
          "Reviews discharge papers and prescriptions the client cannot understand"
        ],
        friction: [
          "Clients leave appointments without understanding medications or follow-up purposes"
        ],
        equity: [
          "Absence of integrated, shared case files between settlement data and healthcare records",
          "Health system fee-for-service model and shelter target metrics focus on turnover, not relational safety"
        ],
        intervention: [
          { cat: "sys", text: "Mandatory warm hand-off protocol between clinicians and community IPV caseworkers" },
          { cat: "digital", text: "Multi-language audio/visual playback tools for reviewing clinical discharge materials" }
        ],
        evidence: [
          {
            source: "interview",
            text: "The lack of digital automation — including dictation tools and automated case management — was cited as a significant challenge. The main barrier is cost. Organizations are currently using a mix of spreadsheets, Dynamex, custom case management systems, and Word or PDF documents."
          }
        ]
      },
      {
        stage: "Return",
        stageLabel: "Stage 4",
        stageColor: "#CC7208",
        touchpoints: [
          "Coordinates transitional housing applications while monitoring client health status",
          "Attempts to secure long-term treatment plans"
        ],
        friction: [
          "Organizational mandates cut off newcomer support after 2 years, leaving clients abruptly unsupported",
          "Loss of care continuity if client moves shelters or relocates outside urban boundary"
        ],
        equity: [
          "Long-term referrals fail because of outdated resource directories requiring manual upkeep",
          "Ongoing healthcare coverage unavailable to newcomers with precarious documentation"
        ],
        intervention: [
          { cat: "sys", text: "Co-located health, legal, and settlement services within a single hub" },
          { cat: "nav", text: "Women's-only coffee circles to distribute medical, legal, and safety navigation info" }
        ],
        evidence: [
          {
            source: "literature",
            text: "Non-profit settlement agencies operate in strict silos. Outdated directories and a lack of standardized multi-agency protocols mean caseworkers must rely on personal contacts to coordinate multi-sectoral support. (Giesbrecht, 2020)"
          }
        ]
      }
    ],
    emotions: [
      { stage: "Access", emotion: "Overwhelmed / Stretched", note: "Advocating for clients beyond her mandate with no operational resources to do so." },
      { stage: "Treatment", emotion: "Frustrated / Worried", note: "Systemic racism and interpreter gaps break clinical care she's trying to coordinate." },
      { stage: "Discharge", emotion: "Burnt Out / Guilty", note: "Forced to close cases before clients are stable; re-traumatizes people she's built trust with." },
      { stage: "Return", emotion: "Determined / Drained", note: "Leverages personal networks to fill system gaps, at significant personal cost." }
    ],
    stakeholders: [
      { id: "funders", name: "Funders", role: "Controlling Actor", influence: "High", category: "controlling", note: "Rigidly dictates metrics by client volume and 2-year service mandates; prioritizes numbers over depth of care.", position: { x: 50, y: 15 } },
      { id: "employer", name: "Employer / Leadership", role: "Controlling Actor", influence: "High", category: "controlling", note: "Enforces target-driven metrics for agency survival; pressures Maya to minimize time on complex cases.", position: { x: 80, y: 30 } },
      { id: "housing", name: "Housing Authorities", role: "Supportive Actor", influence: "High", category: "system", note: "Controls clients' transitional safety; uncooperative due to fears of abuser retaliation and property damage.", position: { x: 20, y: 30 } },
      { id: "interpreters", name: "Community Interpreters", role: "Supportive Actor", influence: "Low", category: "community", note: "Vital for communication; restricted by limited funding, lack of IPV training, and vicarious trauma.", position: { x: 15, y: 65 } },
      { id: "networks", name: "Informal Advocacy Networks", role: "Supportive Actor", influence: "Low", category: "intervention", note: "Trusted colleagues who facilitate unofficial warm handoffs when formal systems fail.", position: { x: 85, y: 48 } },
      { id: "navigator", name: "Peer Navigator (Proposed)", role: "Intervention Opportunity", influence: "High", category: "intervention", note: "Highest impact. A shared navigator would eliminate Maya's uncompensated ad-hoc health navigation role.", position: { x: 50, y: 50 } },
      { id: "clients", name: "Newcomer Women Clients", role: "Supportive Actor", influence: "Medium", category: "community", note: "Central to Maya's work; must re-unpack trauma at each re-entry due to lack of shared case files.", position: { x: 45, y: 80 } }
    ]
  }
];

export interface SharedFriction {
  friction: string;
  amara: boolean;
  priya: boolean;
  elena: boolean;
  maya: boolean;
  category: "Friction" | "Equity Gap" | "Coordination Failure" | "Digital Friction";
}

export const sharedFrictions: SharedFriction[] = [
  { friction: "No private time with patient during healthcare visit", amara: true, priya: true, elena: false, maya: false, category: "Friction" },
  { friction: "Partner/family member controls access to appointments", amara: true, priya: true, elena: false, maya: false, category: "Friction" },
  { friction: "Language barriers across all service touchpoints", amara: true, priya: false, elena: true, maya: true, category: "Equity Gap" },
  { friction: "No heritage language service delivery", amara: true, priya: false, elena: true, maya: false, category: "Equity Gap" },
  { friction: "Fear of immigration consequences prevents disclosure", amara: true, priya: true, elena: true, maya: false, category: "Equity Gap" },
  { friction: "No healthcare navigator role exists in current pathway", amara: true, priya: true, elena: true, maya: true, category: "Coordination Failure" },
  { friction: "Safety planning assumes ability to physically leave", amara: true, priya: true, elena: true, maya: false, category: "Friction" },
  { friction: "Mental health services unavailable or inaccessible", amara: true, priya: true, elena: true, maya: false, category: "Friction" },
  { friction: "No continuity across system re-entries", amara: true, priya: true, elena: true, maya: true, category: "Coordination Failure" },
  { friction: "Device/technology access controlled by partner", amara: false, priya: true, elena: true, maya: false, category: "Digital Friction" },
  { friction: "Online resources English-only", amara: true, priya: true, elena: true, maya: false, category: "Digital Friction" },
  { friction: "IPV not named / presented as something else", amara: true, priya: false, elena: true, maya: false, category: "Friction" },
  { friction: "Interpreter confidentiality risks in small communities", amara: true, priya: false, elena: true, maya: false, category: "Equity Gap" },
  { friction: "No handoff protocol between healthcare and settlement", amara: true, priya: true, elena: true, maya: true, category: "Coordination Failure" },
  { friction: "Funder metrics prioritize volume over relational safety", amara: false, priya: false, elena: false, maya: true, category: "Coordination Failure" },
  { friction: "Administrative directory decay and manual tracking silos", amara: false, priya: false, elena: false, maya: true, category: "Digital Friction" }
];

export interface OpportunityPoint {
  opportunity: string;
  personas: string[];
  stage: string;
  type: string;
}

export const opportunities: OpportunityPoint[] = [
  { opportunity: "Culturally safe, language-matched navigator role", personas: ["Amara", "Priya", "Elena", "Maya"], stage: "All", type: "Navigator Practice" },
  { opportunity: "Universal alone-time protocol in all healthcare settings", personas: ["Amara", "Priya"], stage: "Access", type: "System Improvements" },
  { opportunity: "Integrated IPV + settlement case file / shared care plan", personas: ["Amara", "Priya", "Elena", "Maya"], stage: "All", type: "System Improvements" },
  { opportunity: "Multilingual, audio-visual digital resource hub", personas: ["Amara", "Priya", "Elena", "Maya"], stage: "All", type: "Digital Tools" },
  { opportunity: "Anonymous / disguisable navigator chat tool", personas: ["Priya", "Elena"], stage: "Access", type: "Digital Tools" },
  { opportunity: "Telehealth with language-matched navigators", personas: ["Elena", "Amara"], stage: "Access + Treatment", type: "Navigator Practice" },
  { opportunity: "Rural CHC IPV toolkit for frontline workers", personas: ["Elena"], stage: "Access", type: "System Improvements" },
  { opportunity: "Safety planning co-created with navigator", personas: ["Amara", "Elena"], stage: "Discharge", type: "Navigator Practice" },
  { opportunity: "Education workshops in multiple languages", personas: ["Amara", "Priya", "Elena"], stage: "All", type: "System Improvements" },
  { opportunity: "Workshops on abuse and health for clients and providers", personas: ["Amara", "Priya", "Elena"], stage: "All", type: "System Improvements" },
  { opportunity: "No Door is the Wrong Door policy protocol", personas: ["Maya"], stage: "Access", type: "System Improvements" },
  { opportunity: "Trauma-informed IPV training for community interpreters", personas: ["Maya", "Amara", "Elena"], stage: "Treatment / All", type: "Navigator Practice" },
  { opportunity: "Relational safety funder metrics", personas: ["Maya"], stage: "All", type: "System Improvements" },
  { opportunity: "Automated, dynamic resource directory aggregator", personas: ["Maya"], stage: "All", type: "Digital Tools" }
];

export interface InterventionPriority {
  id: string;
  intervention: string;
  barriersToEntry: string;
  timing: "Immediate" | "Immediate to medium-term" | "Medium-term" | "Medium to long-term" | "Long-term";
  resourcing: "Low" | "Medium" | "Medium to high" | "High";
  scopeOfImpact: ("Individual" | "Organizational" | "Systemic")[];
  catalystPotential: "Low" | "Medium" | "High";
  category: "Clinical" | "Navigation" | "Digital" | "Systemic";
}

export const interventionPriorities: InterventionPriority[] = [
  {
    id: "ed-screening",
    intervention: "IPV-informed ED screening protocol including brief alone time with patient",
    barriersToEntry: "Workflow changes, staff buy-in, resource shortages (e.g., male clinicians not allowed alone with female clients requiring two staff), language barrier",
    timing: "Immediate",
    resourcing: "Low",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "Medium",
    category: "Clinical"
  },
  {
    id: "disclosure-scripts",
    intervention: "Culturally safe disclosure scripts for staff",
    barriersToEntry: "Workflow changes, staff buy-in, time required to translate",
    timing: "Immediate",
    resourcing: "Low",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "Medium",
    category: "Clinical"
  },
  {
    id: "sponsorship-care-plan",
    intervention: "Sponsorship rights and immigration risks integrated into care plan",
    barriersToEntry: "Ongoing changes to immigration policies, requirement to translate into multiple languages, staff buy-in and capacity",
    timing: "Medium-term",
    resourcing: "High",
    scopeOfImpact: ["Individual", "Organizational", "Systemic"],
    catalystPotential: "High",
    category: "Systemic"
  },
  {
    id: "in-person-navigator",
    intervention: "In-person navigator (language-matched) to follow the client throughout their journey",
    barriersToEntry: "Funding for new positions, time to hire and train, integration into system to effectively support clients",
    timing: "Long-term",
    resourcing: "High",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "High",
    category: "Navigation"
  },
  {
    id: "co-located-services",
    intervention: "Co-located services (settlement and health in one site)",
    barriersToEntry: "Systems-level realignment, funding for new positions, organizational buy-in, possible hiring",
    timing: "Long-term",
    resourcing: "High",
    scopeOfImpact: ["Individual", "Systemic"],
    catalystPotential: "High",
    category: "Systemic"
  },
  {
    id: "translated-materials",
    intervention: "Translated materials",
    barriersToEntry: "Time taken to translate and disseminate",
    timing: "Immediate",
    resourcing: "Low",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "Medium",
    category: "Clinical"
  },
  {
    id: "ipv-toolkit",
    intervention: "IPV toolkit for frontline workers",
    barriersToEntry: "Time taken to develop, staff buy-in",
    timing: "Immediate",
    resourcing: "Low",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "Medium",
    category: "Navigation"
  },
  {
    id: "rural-referral-network",
    intervention: "No-wrong-door rural referral network",
    barriersToEntry: "Individual and organizational buy-in, coordination, differing mandates and privacy requirements, staff training, change to existing workflows",
    timing: "Medium to long-term",
    resourcing: "Medium",
    scopeOfImpact: ["Individual", "Organizational", "Systemic"],
    catalystPotential: "High",
    category: "Systemic"
  },
  {
    id: "rural-phone-internet",
    intervention: "Subsidized phone/internet for rural survivors",
    barriersToEntry: "Funding, attainment of phones, development of policies and procedures, organizational buy-in, coordination with phone and internet providers, confidentiality for billing",
    timing: "Long-term",
    resourcing: "High",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "Medium",
    category: "Digital"
  },
  {
    id: "client-edu-workshops",
    intervention: "Education workshops in multiple languages for clients",
    barriersToEntry: "Translation and development costs, hiring skilled facilitators, awareness and marketing, transportation for clients, cultural adaptation of materials",
    timing: "Medium-term",
    resourcing: "Medium",
    scopeOfImpact: ["Individual"],
    catalystPotential: "Medium",
    category: "Clinical"
  },
  {
    id: "abuse-health-workshops",
    intervention: "Workshops on abuse and health for clients and providers",
    barriersToEntry: "Same as client workshops, plus competing staff training capacity and priorities, staff engagement",
    timing: "Medium-term",
    resourcing: "Medium",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "High",
    category: "Clinical"
  },
  {
    id: "myhealth-screen",
    intervention: "Subtle wellness screen embedded in MyHealth patient portal",
    barriersToEntry: "Integration with existing IT systems, digital literacy among users, possible translation costs",
    timing: "Immediate",
    resourcing: "Low",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "Low",
    category: "Digital"
  },
  {
    id: "navigator-chat",
    intervention: "Navigator accessible via chat on mobile device or laptop",
    barriersToEntry: "IT setup requirements, funding and hiring, internet access requirements, digital literacy, availability in multiple languages, privacy and confidentiality concerns",
    timing: "Medium to long-term",
    resourcing: "High",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "High",
    category: "Navigation"
  },
  {
    id: "disguise-exit-tool",
    intervention: "Digital tool with disguise/exit feature for safe device use",
    barriersToEntry: "IT capability, user awareness of safety feature, functionality across devices",
    timing: "Immediate to medium-term",
    resourcing: "Medium",
    scopeOfImpact: ["Individual", "Organizational"],
    catalystPotential: "Low",
    category: "Digital"
  },
  {
    id: "digital-resource-hub",
    intervention: "Digital resource hub",
    barriersToEntry: "Development and ongoing content creation, translation, awareness among providers and users, digital literacy barriers",
    timing: "Medium-term",
    resourcing: "Medium to high",
    scopeOfImpact: ["Individual", "Organizational", "Systemic"],
    catalystPotential: "High",
    category: "Digital"
  },
  {
    id: "offline-resources",
    intervention: "Offline resource options (audio, community drop-ins)",
    barriersToEntry: "Staffing and facility requirements, transportation challenges, funding, reaching isolated individuals, multilingual support needed",
    timing: "Medium to long-term",
    resourcing: "Medium to high",
    scopeOfImpact: ["Individual", "Organizational", "Systemic"],
    catalystPotential: "Medium",
    category: "Digital"
  }
];

export interface SynthesizedQuote {
  id: string;
  text: string;
  attribution: string;
  theme: string;
  placement: "overview" | "amara" | "priya" | "elena" | "maya" | "aggregate";
}

export const synthesizedQuotes: SynthesizedQuote[] = [
  // OVERVIEW PAGE
  {
    id: "q-children-translators",
    text: "Children are sometimes brought in to translate, even when we strongly advise against it. It puts them in an impossible position.",
    attribution: "Service provider interview — synthesized",
    theme: "Children & Families",
    placement: "overview"
  },
  {
    id: "q-joint-bank",
    text: "The bank account is set up on arrival, with both names on it — but in practice, he controls it. She may be earning income but has no access to it.",
    attribution: "Literature review — Giesbrecht, 2020",
    theme: "Financial Control",
    placement: "overview"
  },

  // AMARA
  {
    id: "q-retelling",
    text: "Every time she moves to a new service, she has to tell her story again from the beginning. It's re-traumatizing, and it's one of the biggest barriers to continuity of care.",
    attribution: "Literature review — Holtmann, 2018",
    theme: "System Fragmentation",
    placement: "amara"
  },
  {
    id: "q-cultural-safety",
    text: "An organization reportedly sent two male workers to the home of a Muslim woman with limited English. These are the moments when the system itself becomes the barrier.",
    attribution: "Literature review — Giesbrecht, 2020",
    theme: "Cultural Safety",
    placement: "amara"
  },

  // PRIYA
  {
    id: "q-sponsorship-fear",
    text: "She doesn't know that she can't be deported because of the abuse. He's told her she'll lose everything if she says anything — and she believes him.",
    attribution: "Literature review — Giesbrecht, 2023",
    theme: "Immigration Fear",
    placement: "priya"
  },
  {
    id: "q-psychiatric-misuse",
    text: "Partners have used the healthcare system against these women — requesting assessments, disputing diagnoses. It's another form of control that the system isn't designed to recognize.",
    attribution: "Literature review — Giesbrecht, 2020",
    theme: "Healthcare Misuse",
    placement: "priya"
  },

  // ELENA
  {
    id: "q-home-country",
    text: "The wait times here are so long that some clients have actually gone back to their home country to see a doctor. That tells you something about the state of access.",
    attribution: "Service provider interview — synthesized",
    theme: "Rural Access",
    placement: "elena"
  },
  {
    id: "q-digital-safety",
    text: "We check every phone that comes in now — location sharing, tracking apps. If we don't address it at intake, we're putting her at risk the moment she walks out the door.",
    attribution: "Service provider interview — synthesized",
    theme: "Digital Safety",
    placement: "elena"
  },

  // MAYA
  {
    id: "q-compassion-fatigue",
    text: "We're told not to take it home with us. But there's no real support for practitioners. You just absorb it.",
    attribution: "Literature review — Giesbrecht, 2020",
    theme: "Practitioner Wellbeing",
    placement: "maya"
  },
  {
    id: "q-referral-spreadsheet",
    text: "Our referral list lives on a spreadsheet. We do our best to keep it updated, but sometimes a woman gets referred to a shelter that's been full for months.",
    attribution: "Service provider interview — synthesized",
    theme: "Referral Networks",
    placement: "maya"
  },

  // AGGREGATE MAP
  {
    id: "q-legal-aid-income",
    text: "Legal Aid eligibility criteria may include the abusive partner's income in the means test — creating a financial barrier to legal support at exactly the moment it's most needed.",
    attribution: "Literature review — Wuerch, 2025",
    theme: "Systemic Barrier",
    placement: "aggregate"
  },
  {
    id: "q-immigration-complexity",
    text: "Healthcare providers reported feeling overwhelmed by constantly changing immigration policies. When they don't know the system, they can't make the right referral — even when they want to.",
    attribution: "Service provider interview — synthesized",
    theme: "System Coordination",
    placement: "aggregate"
  }
];
