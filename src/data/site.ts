export const contact = {
  email: 'parekhheta2006@gmail.com',
  phone: '(608) 298-8731',
  phoneHref: 'tel:+16082988731',
  linkedin: 'https://linkedin.com/in/het-parekh21',
  linkedinLabel: 'linkedin.com/in/het-parekh21',
  github: 'https://github.com/HetParekh2186',
  githubLabel: 'github.com/HetParekh2186',
  website: 'https://hetparekhaa.netlify.app',
  websiteLabel: 'hetparekhaa.netlify.app',
  location: 'Madison, WI',
};

/** The four kinds of work, each with its own color in the page. */
export type Area = 'robotics' | 'backend' | 'ml' | 'data';

export const areas: { id: Area; name: string; short: string; blurb: string; where: string[] }[] = [
  {
    id: 'robotics',
    name: 'Robotics & perception',
    short: 'Robotics',
    blurb: "C++/ROS2 localization for a humanoid robot: per-particle line-to-map association in a particle-filter pose estimator, geometric pose correctors, and fall-resilient uncertainty handling.",
    where: ['RoboCup @ Prediction and Action Lab'],
  },
  {
    id: 'backend',
    name: 'Backend & product engineering',
    short: 'Backend',
    blurb: "FastAPI microservices, Next.js/TypeScript frontends, SQLAlchemy and PostgreSQL query optimization, Celery and Redis concurrency, and Electron desktop apps shipped through GitHub Actions CI/CD.",
    where: ['FulfillmentIQ', 'Aarisha Consultancy', 'QueueUp'],
  },
  {
    id: 'ml',
    name: 'Applied ML & AI',
    short: 'Applied ML',
    blurb: "OCR pipelines with OpenCV and PyTesseract, RAG with ChromaDB and sentence-transformers, DistilBERT fine-tuning, TensorFlow models, and MediaPipe keypoint extraction.",
    where: ['Altum Labs', 'Doctor Rounds', 'Aartham Hospitals', 'ASL recognition'],
  },
  {
    id: 'data',
    name: 'Data science & research',
    short: 'Data science',
    blurb: "Multivariate regression, factor analysis, EDA, and feature engineering in R and Python, plus class-imbalance modeling with scikit-learn and SMOTE.",
    where: ['Werling Lab', 'Fraud detection'],
  },
];

/**
 * A role or project, told as a short story.
 * `story` is one plain sentence; wrap its key phrase in **double asterisks** to mark it.
 * `highlights` are short, readable lines; `details` hold the full technical record (shown folded).
 */
export type Role = {
  id: string;
  org: string;
  title: string;
  place: string;
  dates: string;
  current?: boolean;
  area?: Area;
  story: string;
  highlights: string[];
  details?: string[];
  stack?: string[];
  /** Label for the stack line; defaults to "Built with". */
  stackLabel?: string;
};

export const research: Role[] = [
  {
    id: 'robocup',
    org: 'RoboCup Team @ Prediction and Action Lab',
    title: 'Software Engineer, Autonomous Perception, Localization & Control',
    place: 'Madison, WI',
    dates: 'Aug 2026 – Present',
    current: true,
    area: 'robotics',
    story: "Extending a C++/ROS2 localization stack so the humanoid's **particle-filter pose estimate fuses field-line observations** alongside goalposts and crosses.",
    highlights: [
      "Diagnosed a dead code path in the C++/ROS2 localization stack: the filter base class had a B-Human-ported line-observation update, but no caller and no line parameter in the sensor-update API.",
      "Implemented per-particle line-to-map association, re-matching each observed line against field geometry under every particle's own pose hypothesis to avoid belief-biased classification.",
      "Derived the line-to-measurement geometry, integrated it into the sensor-update step, and capped lines per update to hold the real-time control-loop budget.",
      "Integrated six geometric pose correctors, fall resilience through uncertainty inflation instead of filter resets, and mirror-symmetry resolution from teammate pose data.",
    ],
    details: [
      'Traced the C++/ROS2 perception-to-localization path: field lines were detected, classified, and matched to the map upstream, but the sensor-update function had no line input, so the inherited B-Human line-observation update was effectively dead code.',
      "Extended the sensor update to accept line observations. For each particle, every observed line is projected into the field frame under that particle's pose and re-associated with the field map's line geometry, so each hypothesis is scored on its own terms rather than on a single global classification.",
      "Converted each matched line into the measurement form the line update consumes, and bounded the number of lines processed per update so the filter stays within the real-time control loop's compute budget.",
      "Wired up six already-built geometric pose correctors that fix the robot's position at known field spots.",
      'Made the filter fall-resilient: after a fall it widens its uncertainty instead of resetting, so the robot recovers its estimate rather than starting over.',
      "Resolved the field's mirror-symmetry ambiguity by incorporating teammate position data.",
      "Leading ongoing development of fall-recovery pose retention, fixed-point geometric relocalization, and teammate-assisted resolution of field symmetry as part of the team's broader autonomous localization roadmap.",
    ],
    stack: ['C++', 'ROS2', 'OpenCV', 'PCL', 'Eigen', 'BehaviorTree.CPP', 'Rerun', 'Docker'],
  },
  {
    id: 'werling',
    org: 'Werling Lab @ UW–Madison',
    title: 'Undergraduate Research Assistant',
    place: 'Madison, WI',
    dates: 'Jan 2026 – Present',
    current: true,
    area: 'data',
    story: "Multivariate statistical modeling in R and Python on 16 years of epidemiological data to **quantify multi-pollutant interactions**.",
    highlights: [
      "Build multivariate regression models over 66,000+ records spanning 16 years to evaluate multi-pollutant interactions.",
      "EDA and feature engineering: left-censored detection thresholds, longitudinal trend mapping, and systematic missing-data handling.",
      "Control for confounders with multiple regression and extract latent variables with Factor Analysis to explain residual variance.",
    ],
    details: [
      'Design multivariate statistical models on 16 years of high-dimensional epidemiological data (66,000+ records) to evaluate complex multi-pollutant interactions.',
      'Perform exploratory data analysis and feature engineering: resolving left-censored thresholds, mapping longitudinal trends, and systematically handling missingness.',
      'Implement multiple regression models to isolate environmental exposures while controlling for confounders, and apply Factor Analysis to extract latent variables explaining residual variance.',
    ],
    stack: ['R', 'Python', 'Regression', 'Factor Analysis', 'EDA'],
  },
];

export const industry: Role[] = [
  {
    id: 'fulfillmentiq',
    org: 'FulfillmentIQ',
    title: 'Software Engineer Intern',
    place: 'Remote · Alpharetta, GA',
    dates: 'May 2026 – Aug 2026',
    area: 'backend',
    story: "Full-stack engineering on FastAPI microservices and a Next.js/TypeScript frontend serving 100+ active users, focused on **SQLAlchemy query performance and backend reliability**.",
    highlights: [
      "Shipped 40+ features and fixes across FastAPI microservices and a Next.js/TypeScript/React frontend in Agile sprints.",
      "Moved data-heavy filtering from client to server with optimized SQLAlchemy queries, cutting initial payloads by over 90%.",
      "Profiled SQLAlchemy to trace recurring 504s to an N+1 query pattern and collapsed it into one join, cutting p95 latency by ~70%.",
      "Added per-record validation, structured logging, and partial-failure recovery to REST batch processing, containerized with Docker Compose.",
    ],
    details: [
      'Owned 40+ features and fixes end-to-end in an Agile sprint workflow, from UI refinements to full-stack builds across FastAPI microservices and a Next.js/TypeScript/React frontend serving 100+ active users, turning requirements from product and operations stakeholders into shipped, tested releases.',
      'Re-architected filtering for data-heavy views from client-side to server-side with optimized SQLAlchemy queries, shrinking initial data transfer from 3 MB to 250 KB and enabling real-time multi-dimensional filtering.',
      'Improved backend reliability across distributed microservices with batch request processing, per-record validation, structured error logging, and partial-failure recovery over REST APIs, containerized with Docker Compose.',
      'Diagnosed a recurring 504 timeout on a core endpoint under peak load by tracing distributed request logs and profiling SQLAlchemy queries, then replaced hundreds of per-row calls with one joined query, cutting p95 latency from 2.8 seconds to 850 milliseconds and ending the timeouts.',
    ],
    stack: ['FastAPI', 'Next.js', 'TypeScript', 'React', 'SQLAlchemy', 'PostgreSQL', 'Docker Compose'],
  },
  {
    id: 'aarisha',
    org: 'Aarisha Consultancy',
    title: 'Software Engineering Intern',
    place: 'Remote · Broomfield, CO',
    dates: 'Sep 2025 – Dec 2025',
    area: 'backend',
    story: "An Electron + React desktop app that turns meetings into **real-time transcripts over WebSockets**, with GPT summaries on Supabase Edge Functions.",
    highlights: [
      "Built a Windows/macOS app in Electron, TypeScript/React, and Supabase, cutting manual transcription time by 98%.",
      "Streamed Deepgram Nova-3 ASR over persistent WebSockets into Supabase Edge Functions running OpenAI GPT, with sub-200 ms transcript latency.",
      "Implemented global hotkeys, overlay UIs, and background daemons via Electron IPC, with SQLite local caching for offline support.",
      "Shipped signed .exe/.pkg/.dmg installers through GitHub Actions and electron-builder, with macOS notarization and Sentry crash analytics.",
    ],
    details: [
      'Built a meeting transcription and summarization desktop app for Windows and macOS in Electron, TypeScript/React, and Supabase (auth, storage, real-time sync), cutting manual transcription time by 98% and post-meeting note-taking from about 20 minutes to about 3.',
      'Architected a real-time pipeline streaming Deepgram Nova-3 speech recognition over persistent WebSockets, delivering live transcripts in under 200 ms end-to-end, with OpenAI GPT cleanup, translation, and summaries via Supabase Edge Functions.',
      'Engineered platform-specific features (global hotkeys, overlay UIs, background daemons) with Electron IPC, React Hooks, Tailwind CSS, and SQLite local caching for offline support.',
      'Automated CI/CD with GitHub Actions and electron-builder, shipping signed installers for 3 platforms (.exe, .pkg, .dmg) with macOS notarization, Windows code signing, and Sentry crash analytics.',
    ],
    stack: ['Electron', 'TypeScript', 'React', 'Supabase', 'WebSockets', 'SQLite', 'GitHub Actions', 'Sentry'],
  },
  {
    id: 'altum',
    org: 'Altum Labs',
    title: 'Software Engineering Intern',
    place: 'Remote · Chicago, IL',
    dates: 'May 2025 – Jul 2025',
    area: 'ml',
    story: "A Dockerized Python OCR pipeline on Azure that **extracts structured data from EPIC EMR screenshots**.",
    highlights: [
      "Parallelized Python OCR pipeline (OpenCV, PyTesseract) on Azure Container Instances processing 2,000+ EMR screenshots daily.",
      "Gamma correction, CLAHE, and contrast-normalization preprocessing raised OCR accuracy by 40%, benchmarked on 500 labeled images.",
      "REST integrations with Azure Blob Storage and the OpenAI API cut manual data entry by 98%.",
    ],
    details: [
      'Built a parallelized Python OCR pipeline (OpenCV, PyTesseract, OpenAI API), containerized with Docker and deployed on Azure Container Instances, automating data extraction for 2,000+ EPIC EMR screenshots daily.',
      'Raised OCR accuracy from 58% to 81% (a 40% relative gain) with an image-preprocessing stage of gamma correction, CLAHE, and contrast normalization, benchmarked against a labeled sample of 500 images.',
      'Built REST integrations with Azure Blob Storage and the OpenAI API, reducing manual data-entry effort by 98% and increasing throughput through parallel processing.',
    ],
    stack: ['Python', 'OpenCV', 'PyTesseract', 'OpenAI API', 'Docker', 'Azure'],
  },
  {
    id: 'aartham',
    org: 'Aartham Hospitals',
    title: 'Software Intern',
    place: 'Ahmedabad, India',
    dates: 'May 2023 – Aug 2023',
    area: 'ml',
    story: "A Python NLP pipeline and TensorFlow model over patient records for **personalized recovery recommendations**.",
    highlights: [
      "Built a custom NLP pipeline in Python, integrated with REST APIs.",
      "Trained a TensorFlow model on 1,000+ patient records for personalized recovery recommendations.",
      "Designed and managed a MySQL patient-record system, with real-time analysis of healthcare data to surface outcome insights.",
    ],
    stack: ['Python', 'TensorFlow', 'MySQL'],
  },
];

export const leadership: Role = {
  id: 'wiscoraas',
  org: 'WiscoRaas',
  title: 'Head of Logistics',
  place: 'University of Wisconsin–Madison',
  dates: 'Mar 2024 – May 2026',
  story: "Kept a **20-person performance team** and its campus events running smoothly.",
  highlights: [
    "Served on the executive board of UW–Madison's premier Raas and Garba team.",
    'Led a team of 20 organizing cultural events, fundraisers, and blood drives across campus, and coordinated logistics for performances and practices.',
  ],
};

export type Link = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  area: Area;
  story: string;
  highlights?: string[];
  details?: string[];
  stack: string[];
  links?: Link[];
};

export const featured: Project[] = [
  {
    id: 'queueup',
    title: 'QueueUp',
    area: 'backend',
    story: "A FastAPI + PostgreSQL ticketing engine that **never oversells a seat** under heavy concurrent contention.",
    highlights: [
      "Pessimistic row locking, atomic compare-and-set transitions, and idempotency keys in PostgreSQL: zero overselling under contention.",
      "FIFO waitlist with time-boxed reservation holds on an event-driven Celery worker, serialized inside one lock-guarded critical section.",
      "5-service Docker architecture with HMAC-signed QR check-in, Redis pub/sub WebSocket broadcasting, RBAC, and 64 integration tests in GitHub Actions.",
    ],
    details: [
      'Concurrency-safe reservations on PostgreSQL with pessimistic row locking, atomic compare-and-set transitions, and idempotent request handling: zero overselling under heavy simultaneous contention for a single seat.',
      'FIFO waitlist and time-boxed reservation holds on an event-driven Celery worker, serializing seat reallocation inside one lock-guarded critical section to eliminate double-allocation races.',
      'A 5-service Docker architecture with HMAC-signed QR validation and exactly-once check-in, real-time WebSocket broadcasting via Redis pub/sub, and role-based access control, validated by 64 integration tests in GitHub Actions CI.',
    ],
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'GitHub Actions'],
    links: [
      { label: 'Try it live', href: 'https://web-production-4cbcf.up.railway.app/' },
      { label: 'GitHub', href: 'https://github.com/HetParekh2186/QueueUp' },
    ],
  },
  {
    id: 'doctor-rounds',
    title: 'Doctor Rounds',
    area: 'ml',
    story: "A RAG pipeline for medical question answering with a **fine-tuned DistilBERT faithfulness verifier**.",
    highlights: [
      "ChromaDB + sentence-transformers retrieval scoring 96.7% MRR on 1,000 PubMedQA questions.",
      "DistilBERT classifier fine-tuned on 1,573 labeled clinical claims: 73.7% F1 at 32x lower latency than an LLM judge.",
      "GitHub Actions runs a RAG evaluation on every PR with a local LLM and posts metric diffs; 90%+ coverage with pytest and strict mypy.",
    ],
    details: [
      'Built and benchmarked a RAG retrieval pipeline (ChromaDB, sentence-transformers) on 1,000 real PubMedQA questions, reaching 96.7% MRR under a 90%+ automated test-coverage suite (pytest, mypy strict typing).',
      'Fine-tuned a DistilBERT faithfulness classifier on 1,573 labeled clinical claims (SciFact plus synthetic negatives), reaching 73.7% F1 while answering in 153 milliseconds instead of an LLM judge’s 4.8 seconds.',
      'Engineered a GitHub Actions workflow that runs a live RAG evaluation on every pull request and posts automated metric-diff comments, using a local LLM at zero API cost, verified end-to-end on a merged PR.',
    ],
    stack: ['Python', 'PyTorch', 'Transformers', 'ChromaDB', 'HuggingFace', 'sentence-transformers', 'GitHub Actions'],
    links: [{ label: 'GitHub', href: 'https://github.com/HetParekh2186/DrRounds' }],
  },
];

export const earlier: Project[] = [
  {
    id: 'fraud',
    title: 'Credit Card Fraud Detection',
    area: 'data',
    story:
      "scikit-learn + imbalanced-learn pipeline on 280,000 transactions at a 0.17% fraud rate: SMOTE and ensemble models with auto-tuned thresholds holding 90% recall, scoring 0.92 ROC-AUC and 0.88 PR-AUC.",
    stack: ['Python', 'scikit-learn', 'imbalanced-learn', 'SMOTE'],
  },
  {
    id: 'asl',
    title: 'American Sign Language Recognition',
    area: 'ml',
    story:
      "MediaPipe Holistic 3D keypoint extraction (hands, face, pose) with OpenCV on the WLASL dataset (21,000+ clips), producing NumPy/Pandas feature sets for TensorFlow CNN and RNN models.",
    stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Pandas', 'TensorFlow'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C++', 'C', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'R', 'C#', 'Kotlin', 'Rust', 'Bash', 'HTML/CSS'] },
  {
    group: 'ML & data',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'HuggingFace', 'sentence-transformers', 'scikit-learn', 'RAG', 'ChromaDB', 'YOLOv8', 'TensorRT', 'OpenCV', 'PCL', 'Eigen', 'MediaPipe', 'PyTesseract', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
  },
  {
    group: 'Methods',
    items: ['Regression', 'Factor Analysis', 'Multivariate Modeling', 'EDA', 'Feature Engineering', 'Kalman Filtering', 'OCR (Gamma Correction, CLAHE)'],
  },
  {
    group: 'Frameworks',
    items: ['FastAPI', 'React', 'Next.js', 'SQLAlchemy', 'Celery', 'ROS2', 'BehaviorTree.CPP', 'Electron', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS', 'JUnit', 'pytest'],
  },
  {
    group: 'Systems & tools',
    items: ['PostgreSQL', 'Redis', 'MySQL', 'MongoDB', 'Supabase', 'Docker', 'Docker Compose', 'Kubernetes', 'AWS', 'Azure', 'Azure DevOps', 'Cloud Storage', 'GitHub Actions', 'Git', 'Sentry', 'Rerun', 'Linux', 'REST APIs', 'WebSockets', 'CI/CD', 'Agile/Scrum', 'mypy', 'Cursor'],
  },
];

export const education = {
  school: 'University of Wisconsin–Madison',
  degree: 'B.S. Computer Science and Data Science',
  place: 'Madison, WI',
  dates: 'Sep 2023 – Dec 2026',
  gpa: '3.7',
  coursework: [
    'Machine Learning',
    'Data Structures & Algorithms',
    'Algorithm Design',
    'Operating Systems',
    'Database Systems',
    'Web Systems',
    'Computer Architecture',
    'Linear Algebra',
    'Discrete Mathematics',
    'Probability & Statistics',
    'Data Analysis',
  ],
  honors: ["College of Letters & Science Dean's List", 'Oracle Certified Java Programmer', 'Oracle Certified Web Component Developer'],
};
