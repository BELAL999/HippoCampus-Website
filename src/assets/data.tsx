import lightCurriculum from "./light curriculum.svg"
import darkCurriculum from "./dark curriculum.svg"
import lightSmallG from "./light small G.svg"
import darkSmallG from "./dark small G.svg"
import lightFlix from "./light fix.svg"
import darkFlix from "./dark flix.svg"
import lightSupport from "./light support.svg"
import darkSupport from "./dark support.svg"
import feature1 from "./feature1.svg"
import feature2 from "./feature 2.svg"
import feature3 from "./feature 3.svg"

interface whyHippocampus  {
    lightIcon: string
    darkIcon: string
    title : string 
    text: string
}

interface FeatureCourses {
    image : string
    title : string 
    text : string
}

interface courses {
    id:number
    image: string;
    keyWords: string[];
    title: string;
    description: string;
    duration: string;
    instructor: string;
    price: number;
    featured: boolean;
}
interface pages {
    name : string
    path : string
}
interface faqData {
    heading: string;
    questions: {
        question: string;
        answer: string;
    }[];
}

export const whyHippocampus:whyHippocampus[] = [
    {
        lightIcon : lightCurriculum,
        darkIcon: darkCurriculum,
        title : "Expert-Led Curriculum",
        text: "Learn from leading experts in your field, with a curriculum that blends theory and practical application.",
    },
    {
        lightIcon : lightSmallG,
        darkIcon: darkSmallG,
        title : "Small-Group Live Sessions",
        text: "Engage in interactive learning with small groups, led by expert instructors, fostering collaboration and personalized feedback.",
    },
    {
        lightIcon : lightFlix,
        darkIcon: darkFlix,
        title : "Flexible Video Access",
        text: "Access course materials and video lectures anytime, allowing you to study at your own pace and convenience.",
    },
    {
        lightIcon : lightSupport,
        darkIcon: darkSupport,
        title : "Personalized Support",
        text: "Receive dedicated support from our team of academic advisors and technical support staff, ensuring a smooth learning experience.",
    },
]

export const FeatureCoursesData:FeatureCourses[] = [
    {
        image : feature1,
        title : "Advanced Cardiology" , 
        text : "Master the latest techniques in cardiology with our expert-led course."
    },
    {
        image : feature2,
        title : "Radiology Essentials" , 
        text : "Enhance your skills in interpreting medical images with our comprehensive radiology program."
    },
    {
        image : feature3,
        title : "Clinical Pathology" , 
        text : "Gain in-depth knowledge of clinical pathology and laboratory diagnostics."
    },

]

export const coursesData : courses[] = [
    {
        id:0,
        image: "https://picsum.photos/seed/musculoskeletal/400/300",
        keyWords: ["musculoskeletal", "bones", "muscles", "joints", "orthopedics"],
        title: "Musculoskeletal Block",
        description: "Delve into the intricate anatomy, physiology, and common pathologies of the musculoskeletal system. This block covers bones, muscles, joints, and connective tissues, preparing you for clinical assessment and management of related conditions.",
        duration: "Varies", // You might want to define durations for each block
        instructor: "Expert Orthopedists", // Placeholder, you might link to actual instructors
        price: 1700,
        featured: true
    },
    {
        id:1,
        image: "https://picsum.photos/seed/gastro/400/300",
        keyWords: ["gastrointestinal", "digestive system", "GI", "hepatology", "endoscopy"],
        title: "Gastrointestinal Block",
        description: "Explore the comprehensive functions of the digestive system, from esophagus to rectum, including liver, pancreas, and gallbladder. Understand common GI disorders, diagnostic techniques, and therapeutic approaches.",
        duration: "Varies",
        instructor: "Leading Gastroenterologists",
        price: 2000,
        featured: true
    },
    {
        id:2,
        image: "https://picsum.photos/seed/cardio/400/300",
        keyWords: ["cardiopulmonary", "heart", "lungs", "cardiology", "pulmonology"],
        title: "Cardiopulmonary Block",
        description: "Master the complexities of the cardiovascular and respiratory systems. This block covers heart function, lung mechanics, common diseases like heart failure and asthma, and their integrated management.",
        duration: "Varies",
        instructor: "Cardiologists & Pulmonologists",
        price: 2000,
        featured: true
    },
    {
        id:3,
        image: "https://picsum.photos/seed/respiratory/400/300",
        keyWords: ["respiratory", "lungs", "breathing", "pulmonary", "ventilation"],
        title: "Respiratory Block",
        description: "Focus specifically on the respiratory system, including lung anatomy, gas exchange, and common respiratory diseases such as COPD, pneumonia, and tuberculosis. Learn about diagnostic tests and treatment strategies.",
        duration: "Varies",
        instructor: "Pulmonary Specialists",
        price: 1700,
        featured: false
    },
    {
        id:4,
        image: "https://picsum.photos/seed/reproductive/400/300",
        keyWords: ["reproductive", "fertility", "obstetrics", "gynecology", "urology"],
        title: "Reproductive Block",
        description: "Gain in-depth knowledge of the male and female reproductive systems, including hormonal regulation, reproductive health, common disorders, and an introduction to obstetrics and gynecology.",
        duration: "Varies",
        instructor: "Reproductive Health Experts",
        price: 1700,
        featured: false
    },
    {
        id:5,
        image: "https://picsum.photos/seed/renal/400/300",
        keyWords: ["renal", "kidney", "nephrology", "urinary system", "dialysis"],
        title: "Renal Block",
        description: "Understand the vital role of the kidneys in fluid and electrolyte balance, waste excretion, and blood pressure regulation. This block covers renal physiology, common kidney diseases, and treatment options like dialysis.",
        duration: "Varies",
        instructor: "Nephrologists",
        price: 1700,
        featured: false
    },
    {
        id:6,
        image: "https://picsum.photos/seed/endocrine/400/300",
        keyWords: ["endocrine", "hormones", "glands", "diabetes", "thyroid"],
        title: "Endocrine Block",
        description: "Explore the intricate endocrine system, focusing on glands, hormones, and their impact on metabolism, growth, and development. Common conditions like diabetes and thyroid disorders are covered in detail.",
        duration: "Varies",
        instructor: "Endocrinologists",
        price: 1700,
        featured: false
    },
    {
        id:7,
        image: "https://picsum.photos/seed/pathogenesis/400/300",
        keyWords: ["pathogenesis", "diseases", "mechanisms", "etiology", "pathology"],
        title: "Pathogenesis of Diseases Block",
        description: "Investigate the fundamental mechanisms by which diseases develop, from cellular injury to genetic predispositions and environmental factors. This block provides a foundational understanding of disease processes.",
        duration: "Varies",
        instructor: "Pathologists & Researchers",
        price: 1700,
        featured: false
    },
    {
        id:8,
        image: "https://picsum.photos/seed/neuroscience/400/300",
        keyWords: ["neuroscience", "brain", "nervous system", "neurology", "neuroanatomy"],
        title: "Neuroscience Block",
        description: "Dive into the complexities of the central and peripheral nervous systems. This block covers neuroanatomy, neurophysiology, common neurological disorders, and diagnostic approaches.",
        duration: "Varies",
        instructor: "Neurologists & Neurosurgeons",
        price: 2000,
        featured: false
    },
    {
        id:9,
        image: "https://picsum.photos/seed/head/400/300",
        keyWords: ["head", "neck", "special senses", "ENT", "ophthalmology", "dentistry"],
        title: "Head, Neck and Special Senses Block",
        description: "A focused study on the anatomy and clinical conditions related to the head, neck, eyes, ears, nose, and throat. This block integrates knowledge from various specialties including ENT and ophthalmology.",
        duration: "Varies",
        instructor: "ENT Specialists & Ophthalmologists",
        price: 1500,
        featured: false
    }
];

export const pages:pages[] = [
    {
        name : "Home",
        path : "/"
    },
    {
        name : "Courses",
        path : "/courses"
    },
    {
        name : "FAQ",
        path : "/faq"
    },
    {
        name : "Contact",
        path : "/contact"
    }

]


export const faqData:faqData[] = [
    {
        heading: "General & Enrollment",
        questions: [
            {
                question : "What is Hippocampus?",
                answer : "Hippocampus is an online learning platform dedicated to providing high-quality courses designed to enhance your knowledge and skills. Our name is inspired by the part of the brain that is vital for learning and memory, reflecting our commitment to effective and lasting education."
            },
            {
                question : "Who are the courses for?",
                answer : "Our courses are designed for a wide range of learners, from students seeking to supplement their academic studies to professionals looking to advance their careers. Each course specifies its target audience and any prerequisite knowledge required."
            },
            {
                question : "How do I enroll in a course?",
                answer : "To enroll, simply navigate to the course page you're interested in and click the 'Enroll Now' or 'Sign Up' button. You will be guided through a simple registration and payment process to get started."
            },
            {
                question : "Do I get a certificate after completion?",
                answer : "Yes, upon successful completion of any course, you will receive a verifiable digital certificate that you can share on your professional networks, like LinkedIn, or include in your resume."
            }
        ]
    },
    {
        // New heading and questions
        heading: "Course Experience & Features",
        questions: [
            {
                question: "What is the format of the courses?",
                answer: "Our courses consist of a mix of high-quality video lectures, practical assignments, readings, and quizzes. This blended approach ensures you not only learn the concepts but also know how to apply them."
            },
            {
                question: "Are the courses self-paced?",
                answer: "Most of our courses are self-paced, giving you the flexibility to learn on your own schedule. While you have lifetime access, we often provide a recommended schedule to help you stay on track."
            },
            {
                question: "Can I interact with instructors and other students?",
                answer: "Yes. Each course has a dedicated discussion forum where you can ask questions, share your work, and connect with both your peers and the course instructor. We believe in the power of community learning."
            },
            {
                question: "Can I access courses on my mobile device?",
                answer: "Absolutely. Our platform is fully responsive, meaning you can access your courses and learn on any device, whether it's a desktop, tablet, or smartphone."
            }
        ]
    },
    {
        heading: "Payment & Support",
        questions: [
            {
                question : "What payment methods do you accept?",
                answer : "We accept all major credit cards (Visa, MasterCard, American Express) as well as secure payments through PayPal. All transactions are encrypted for your security."
            },
            {
                question: "Is there a refund policy?",
                answer: "Yes, we offer a 14-day money-back guarantee. If you are not satisfied with a course for any reason, you can request a full refund within 14 days of your purchase."
            },
            {
                question: "Can I access the course material after I finish?",
                answer: "Absolutely. Once you enroll in a course, you have lifetime access to all its materials, including videos, articles, and any future updates. You can revisit the content anytime to refresh your knowledge."
            },
             {
                question: "I'm having a technical issue. Who can I contact?",
                answer: "If you encounter any technical difficulties, please visit our 'Support' page and fill out the contact form. Our dedicated technical support team will get back to you within 24 hours to assist you."
            }
        ]
    }
];


export const courses = [
    {
        id: 'MSK112',
        title: 'Musculoskeletal and Skin Block',
        code: 'MSK112',
        tagline: 'An introduction to the study of muscles, bones, and joints, their development, and their relation to common injuries.',
        overview: 'The Musculoskeletal system is concerned with the study of muscles, bones, and joints with their blood vessels, lymphatic, and nerves. This block consists of the study of the upper and lower limb. In addition, this block deals with general aspects of human development and specifically the development of the musculoskeletal system. This system is integrated with anatomy, physiology (muscle contraction and bone physiology), and histology.',
        learningOutcomes: [
        'Relate the gross anatomy of upper and lower limb with common musculoskeletal injuries.',
        'Relate the microscopic anatomy of muscles, bones, and cartilage with clinical problems affecting these tissues.',
        'Relate the development of the musculoskeletal system with common congenital abnormalities of limbs.',
        'Describe the mechanism of skeletal muscle contraction and excitation-contraction coupling.',
        'Identify the muscles, nerves, vessels and bones of the upper and lower limb on cadaveric dissections, models, and images.'
        ],
        details: {
        duration: '7 Weeks',
        level: 'Year 1',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead Anatomy Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course is led by experienced faculty from the College of Medicine, specializing in gross anatomy, physiology, and histology, using an integrated, team-based learning approach.'
        },
        topics: [
        { name: 'Gross anatomy of upper and lower limb', hours: 35 },
        { name: 'Physiology of excitation and contraction of muscles', hours: 10 },
        { name: 'Gastrulation and embryology of limb development', hours: 7 },
        { name: 'Histology of bone and muscles', hours: 8 },
        { name: 'Structured lab sessions', hours: 12 },
        { name: 'TBLs, Evening Lab', hours: 25 }
        ]
    },
    {
        id: 'FON111',
        title: 'Foundation Block',
        code: 'FON111',
        tagline: 'A solid core foundation of Human Anatomy, Histology, Embryology, and Physiology for first-year medical students.',
        overview: 'This comprehensive course provides a solid foundation in Human Anatomy, Histology, Embryology, and Physiology. The goals are to understand the structural and functional organization of the human body, the control of the "Internal Environment," and how cells and systems function to maintain homeostasis. It also covers histologic methods, cell structure, and the transport of substances across cell membranes.',
        learningOutcomes: [
        'Understand the functional organization of the human body and control of the "Internal Environment".',
        'Learn fundamental concepts relating to membrane potentials and action potentials.',
        'Understand basic terminology of anatomy, body planes, and movements.',
        'Classify basic tissues (epithelium and connective tissue) based on their structure, function and location.',
        'Understand the processes of gametogenesis, fertilization, and implantation.'
        ],
        details: {
        duration: '4 Weeks',
        level: 'Year 1',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead Foundation Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course is taught by faculty from the College of Medicine and provides an understanding of the dynamic three-dimensional organization of the human body, which is a prerequisite for performing a competent physical examination.'
        },
        topics: [
        { name: 'General Anatomy - Classification of Bones and Joints', hours: 1 },
        { name: 'General Anatomy - Muscles', hours: 1 },
        { name: 'Bones of the upper limb', hours: 1 },
        { name: 'General Anatomy - Nervous System', hours: 1 },
        { name: 'General Anatomy - Organization of vascular & Lymphatic systems', hours: 1 },
        { name: 'Histology- Cell', hours: 1 },
        { name: 'Histology- (Simple epithelium & Glands)', hours: 1 },
        { name: 'Histology- (Stratified Epithelium)', hours: 1 },
        { name: 'Histology- Connective tissue', hours: 1 },
        { name: 'Histology- Nervous Tissue', hours: 1 },
        { name: 'Embryology- Gametogenesis', hours: 2 },
        { name: 'Embryology- 1st week of development', hours: 1 },
        { name: 'Embryology- 2nd week of development', hours: null },
        { name: 'Embryology - 3rd week of development', hours: 1 },
        { name: 'Functional organization of human body', hours: 1 },
        { name: 'The Cell & its Functions', hours: 1 },
        { name: 'Cell membrane structure', hours: 1 },
        { name: 'Transport across cell membrane', hours: 1 },
        { name: 'Membrane potential', hours: 2 },
        { name: 'Action potential', hours: 1 },
        { name: 'Student Seminar: Membrane cell surface specializations and intercellular junctions & others (Histology)', hours: 2 },
        { name: 'Student Seminar: Chromosomal anomalies & other birth defects & others (Embryology)', hours: 2 },
        { name: 'Lab Sessions and TBL', hours: 23 }
        ]
    },
    {
        id: 'GIT113',
        title: 'Gastrointestinal Block',
        code: 'GIT113',
        tagline: 'An integrated course focusing on the anatomical and physiological sciences of the gastrointestinal tract.',
        overview: 'The Gastrointestinal Tract (GIT) Block is designed to help students acquire basic knowledge of the morphologic and histological features and specific physiologic functions of the various organs comprising the GIT. At the end of this course, students are expected to relate the structure of the GIT with functional processes like salivation, swallowing, intestinal motility, digestion & absorption, and defecation.',
        learningOutcomes: [
        'Describe the gross anatomy of the oral cavity, esophagus, stomach, intestines, liver, pancreas and biliary apparatus.',
        'Explain the histology of the different GIT organs with clinical applications.',
        'Understand the development of the foregut, midgut, and hindgut with relevant clinical embryology.',
        'Explain the physiology of gastric processing of food, nutrient assimilation, and elimination of waste.',
        'Identify different GIT structures on cadaveric dissections, prosections, and 3D plastic models.'
        ],
        details: {
        duration: '5 Weeks',
        level: 'Year 1',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead GIT Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course is led by faculty from the College of Medicine, involving primarily the anatomical and physiological sciences to help students relate the structure and function of the GIT with common clinical problems.'
        },
        topics: [
        { name: 'Basic concepts and ingestion of food', hours: 7 },
        { name: 'Gastric processing of food & defense against acid/pepsin', hours: 11 },
        { name: 'Assimilation of nutrients', hours: 10 },
        { name: 'Elimination of waste & gastrointestinal disorders', hours: 12 },
        { name: 'TBL, Labs', hours: 40 }
        ]
    },
    {
        id: 'MOL114',
        title: 'Molecular Medicine 1',
        code: 'MOL114',
        tagline: 'Teaching the principles of biochemical pathways with an emphasis on normal regulation and pathogenesis of disease.',
        overview: 'Molecular Medicine is designed to teach the principles of biochemical pathways, with an emphasis on normal regulation and changes during the pathogenesis of disease. Importance is given to the integration of biochemistry with other medical sciences such as physiology, pathology, nutrition and clinical diagnosis of disease. Students will study the metabolic pathways of major biochemical molecules, with weight given to clinical correlations.',
        learningOutcomes: [
        'Compare and contrast the structure of nucleic acids and explain the process of gene expression with an emphasis on clinical correlations.',
        'Describe the structure, classification, function, and properties of proteins and their building blocks.',
        'Describe carbohydrates metabolism and its regulation.',
        'Describe the importance of vitamins and minerals in the regulation of metabolism.',
        'Extract human genomic DNA and determine its concentration and purity.'
        ],
        details: {
        duration: '18 Weeks',
        level: 'Year 1',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead Biochemistry Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course links basic principles in biochemistry and metabolism to physiology, pathology, pharmacology, clinical diagnosis and nutrition.'
        },
        topics: [
            { name: 'Introduction to Molecular Medicine', hours: 2 },
            { name: 'Nucleic Acid Structure', hours: 1 },
            { name: 'RNA Transcription', hours: 2 },
            { name: 'Amino Acids', hours: 2 },
            { name: 'Protein Structure', hours: 2 },
            { name: 'Protein Synthesis', hours: 1 },
            { name: 'Regulation of Gene Expression', hours: 1 },
            { name: 'Protein Trafficking', hours: 1 },
            { name: 'Globular Proteins', hours: 1 },
            { name: 'Fibrous Proteins', hours: 2 },
            { name: 'Carbohydrates', hours: 1 },
            { name: 'Glycosaminoglycan & Glycoproteins', hours: null },
            { name: 'Glycolysis', hours: 2 },
            { name: 'TCA Cycle', hours: 1 },
            { name: 'The Respiratory Chain and Oxidative Phosphorylation', hours: 1 },
            { name: 'Gluconeogenesis', hours: 1 },
            { name: 'Glycogen Metabolism', hours: 2 },
            { name: 'Pentose Phosphate Pathway', hours: 1 },
            { name: 'Alternative Pathway of Carbohydrates Metabolism', hours: 1 },
            { name: 'Alcohol Metabolism', hours: 1 },
            { name: 'Bioenergetics', hours: 1 },
            { name: 'Vitamins', hours: 1 },
            { name: 'Reactive Oxygen Species and Cellular Antioxidants', hours: null },
            { name: 'TBL, Labs', hours: 9 }
        ]
    },
    {
        id: 'CVP121',
        title: 'Cardiopulmonary Block',
        code: 'CVP121',
        tagline: 'An introduction to the cardiovascular and pulmonary systems and their many functions.',
        overview: 'This is a multidisciplinary block integrating topics in basic and applied clinical anatomy, histology, embryology, physiology and biochemistry. The course covers the basics of the regulatory mechanisms of blood pressure and flow, in addition to basic concepts within the pulmonary system including respiration and gas exchange.',
        learningOutcomes: [
        'Describe the molecular basis of excitation and contraction of cardiomyocytes and the phases of the cardiac cycle.',
        'Outline the organization of the conduction system of the heart and the recording of its electrical activity (ECG).',
        'Recognize the basic concepts of blood flow and the different regulatory mechanisms of blood pressure.',
        'Outline the respiratory system including the mechanisms of respiration and gas exchange.',
        'Discuss the structure of the lung/diaphragm and the upper and lower respiratory tracts.'
        ],
        details: {
        duration: '8 Weeks',
        level: 'Year 1',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead CVP Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course provides a good understanding of the basic principles of cardiac and pulmonary function, including the electrical activity of the heart, blood flow, and related abnormalities.'
        },
        topics: [
        { name: 'The heart as a pump and cardiac rhythm', hours: 11 },
        { name: 'Circulation and hemodynamics', hours: 13 },
        { name: 'Blood pressure control', hours: 7 },
        { name: 'Failing heart', hours: 10 },
        { name: 'Cardiac stress', hours: 11 },
        { name: 'Pulmonary ventilation and circulation', hours: 14 },
        { name: 'Gas transport and exchange', hours: 10 },
        { name: 'Regulation of respiration', hours: 4 },
        { name: 'TBLs, Labs', hours: 45 }
        ]
    },
    {
        id: 'REN123',
        title: 'Renal Block',
        code: 'REN123',
        tagline: 'A multidisciplinary block covering renal processes, fluid balance, and acid-base physiology.',
        overview: 'This course integrates topics in basic and applied clinical anatomy, histology, embryology, physiology and biochemistry. It focuses on functional mechanisms and homeostatic regulatory processes that maintain the volume and composition of body fluids. The kidney\'s homeostatic mechanisms will be discussed in relation to human pathophysiological conditions.',
        learningOutcomes: [
        'Describe the developmental, microscopic and gross anatomical features of the genitourinary tract.',
        'Discuss the role of the kidney in maintaining electrolyte balance and blood pressure.',
        'Discuss the role of the kidney in urine production (ultrafiltration, reabsorption, and secretion).',
        'Discuss the role of the kidney regulating blood pH.',
        'Perform hypothetical deductive reasoning using TBL cases to relate renal structure and function with common diseases.'
        ],
        details: {
        duration: '5 Weeks',
        level: 'Year 1',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead Renal Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course focuses on the kidney as the main filtering system of the extracellular fluid, covering the reabsorption of glucose, water, and electrolytes in detail.'
        },
        topics: [
            { name: 'Anatomy - including TBLs, Lab', hours: 20 },
            { name: 'Physiology - including TBLs, Lab', hours: 23 }
        ]
    },
    {
        id: 'END231',
        title: 'Endocrine Block',
        code: 'END231',
        tagline: 'Understanding how the hypothalamus controls body functions through endocrine hormones.',
        overview: 'This block helps students comprehend how the hypothalamus controls body functions through its effects on endocrine hormones secreted from various glands. The ultimate goal is to foster enough understanding of the normal structure and function of endocrine systems so that students can understand pathological processes and the management of different endocrine disorders in the next phase of the curriculum.',
        learningOutcomes: [
        'Understand the biosynthesis, mechanism of transport, hormone action and degradation of aldosterone.',
        'Describe the biosynthesis, mechanism of transport, hormone action and degradation of growth hormone.',
        'Characterize the biosynthesis, mechanism of transport, hormone action and degradation of thyroid and parathyroid hormone.',
        'Explain the role of the hypothalamus in controlling endocrine functions of the body.',
        'Characterize mechanisms of regulation of serum blood glucose.'
        ],
        details: {
        duration: '3 Weeks',
        level: 'Year 2',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead Endocrine Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course covers the anatomy, embryology, and physiology of the major endocrine organs, including mechanisms of control, biosynthesis, secretion, and transport of various hormones.'
        },
        topics: [
            { name: 'Hormones: As a control system of body', hours: 1 },
            { name: 'Hormones: General mode of action and function', hours: 1 },
            { name: 'Pituitary gland: Gross & micro structure and development - I', hours: 1 },
            { name: 'Pituitary gland: Gross & micro structure and development - II', hours: null },
            { name: 'Anterior pituitary hormones: Control mechanism and function - I', hours: 1 },
            { name: 'Anterior pituitary hormones: Control mechanism and function - II', hours: null },
            { name: 'Posterior pituitary hormone: Control mechanism and function', hours: null },
            { name: 'Thyroid and parathyroid gland: Gross & micro structure', hours: null },
            { name: 'Thyroid hormones: Control mechanism and function - I', hours: 1 },
            { name: 'Thyroid hormones: Control mechanism and function - II', hours: null },
            { name: 'Adrenal gland and endocrine pancreas: Gross & micro structure', hours: 1 },
            { name: 'LAB: Pituitary Glands & Thyroid Glands-Pituitary & Thyroid I', hours: 2 },
            { name: 'LAB: Histology pituitary and thyroid', hours: 2 },
            { name: 'PBL: Graves\' Disease-Clinical', hours: 4 },
            { name: 'Adrenocortical hormones I', hours: 1 },
            { name: 'Adrenocortical hormones II', hours: 1 },
            { name: 'Insulin and glucagon: Control mechanism and function I', hours: 1 },
            { name: 'Insulin and glucagon: Control mechanism and function II', hours: 1 },
            { name: 'LAB: Pituitary Glands & Thyroid Glands II', hours: 2 },
            { name: 'LAB: Clinical Pituitary Glands & Thyroid Glands', hours: 2 },
            { name: 'PBL: A Sweet Guy-(Diabetes)', hours: 4 },
            { name: 'Diabetes mellitus and metabolic syndromes', hours: 1 },
            { name: 'Endocrine glands: Development', hours: 1 },
            { name: 'LAB: Parathyroid, Adrenal & Pancreases', hours: 2 },
            { name: 'LAB: Parathyroid, Adrenal & Pancreases-Histology', hours: 2 }
        ]
    },
    {
        id: 'REP232',
        title: 'Reproductive Block',
        code: 'REP232',
        tagline: 'Comprehend the structure and function of the male and female reproductive systems.',
        overview: 'This block enables students to appreciate the structure and function of the breast, placenta, and pelvis and the structural organization of various endocrine glands. It covers the structural organization of the male reproductive system to deliver spermatozoa and the female reproductive system for the maturation of ova, fertilization, and development of the embryo and fetus.',
        learningOutcomes: [
        'Explain the developmental origins of gonads and sex determination.',
        'Describe the structural organization of the male reproductive system, erection and ejaculation.',
        'Explain the process of spermatogenesis and the hypothalamo-pituitary-gonadal axis.',
        'Explain the process of oogenesis and the hypothalamo-pituitary-gonadal axis.',
        'Describe the role of female hormones during the menstrual cycle and pregnancy until lactation.'
        ],
        details: {
        duration: '3 Weeks',
        level: 'Year 2',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead Reproductive Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course helps students correlate the relationship of the hypothalamic-pituitary-gonadal axis to the sex steroids and gestational hormones.'
        },
        topics: [
            { name: 'Pelvic walls: Organization', hours: 1 },
            { name: 'Male reproductive system: Gross structure', hours: 1 },
            { name: 'Male reproductive system: Microscopic structure', hours: 1 },
            { name: 'Introduction to Sperm Defects', hours: 1 },
            { name: 'Male reproductive system: Hormonal control - I', hours: 1 },
            { name: 'Male reproductive system: Hormonal control - II', hours: 1 },
            { name: 'Sexual arousal and ejaculation: Hormonal control', hours: 1 },
            { name: 'LAB: Pelvis: Bone & Muscles', hours: 2 },
            { name: 'LAB: Radiology', hours: 2 },
            { name: 'PBL: Azoospermia: The Vanishing Sperm/Male Fertility-Clinical', hours: 4 },
            { name: 'Female reproductive system: Hormonal control - I', hours: 1 },
            { name: 'Female reproductive system: Hormonal control - II', hours: 1 },
            { name: 'Menstrual cycle: Hormonal control - I', hours: 1 },
            { name: 'Menstrual cycle: Hormonal control - II', hours: 1 },
            { name: 'Hormonal control of pregnancy', hours: 1 },
            { name: 'Male reproductive system: Development', hours: 1 },
            { name: 'Female reproductive system: Gross structure', hours: 1 },
            { name: 'Female reproductive system: Microscopic structure', hours: 1 },
            { name: 'Principles of Assisted Reproductive Technology', hours: 1 },
            { name: 'LAB: Peritoneal folds, uterine support & applied', hours: 2 },
            { name: 'LAB: Female reproductive organs/Histology female reproductive system', hours: 2 },
            { name: 'PBL: Female Fertility/ Pregnancy', hours: 4 },
            { name: 'Parturition: Hormonal control', hours: 1 },
            { name: 'Lactation: Role of prolactin and other hormones', hours: 1 },
            { name: 'Breast & placenta: Gross & microscopic structure - I', hours: null },
            { name: 'Breast & placenta: Gross & microscopic structure - II', hours: 1 },
            { name: 'Perineum: General Organization', hours: 1 },
            { name: 'External genitalia: Gender differences', hours: 1 },
            { name: 'Female reproductive system: Development', hours: 1 },
            { name: 'LAB: Perineum & Cadaver', hours: 2 },
            { name: 'LAB: Histology breast & placenta', hours: 2 }
        ]
    },
    {
        id: 'POD233',
        title: 'Pathogenesis of Diseases',
        code: 'POD233',
        tagline: 'An integrated course on Immunology, Microbiology, Pathology, and Pharmacology.',
        overview: 'Pathogenesis of Diseases is an 11-week course integrating the basic aspects of Immunology, Microbiology, Pathology, and Pharmacology. The course aims to present a homogeneous view of the different aspects constituting the basic mechanism of diseases essential to approach clinical practice. Practically-oriented activities are included to tie together topics from different disciplines.',
        learningOutcomes: [
        'Explain the basic characteristics of disease, classification, etiology, and pathogenesis.',
        'Discuss the causes and mechanisms of cell injury, necrosis, apoptosis, and inflammation.',
        'Describe the relationship of host and microorganisms and how they can be combated.',
        'Identify the general concepts underlying interactions between a drug and the body.',
        'Describe how the body responds to invading organisms by innate and adaptive immune mechanisms.'
        ],
        details: {
        duration: '11 Weeks',
        level: 'Year 2',
        language: 'English',
        certificate: 'Yes'
        },
        instructor: {
        name: 'Lead Pathology Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course integrates the basic principles of disease development with its etiology and its pathological, microbiological, and immunological basis. Basic principles of pharmacotherapy will also be integrated.'
        },
        topics: [
        { name: 'Introduction to microbial world', hours: 3 },
        { name: 'Innate immunity and cell injury', hours: 5 },
        { name: 'The complement system and cell death', hours: 10 },
        { name: 'Acute and chronic inflammation', hours: 9 },
        { name: 'Immunogenetics and B cell development', hours: 6 },
        { name: 'Host pathogen interaction and hemodynamic disorders', hours: 7 },
        { name: 'Infection and shock', hours: 7 },
        { name: 'Immunity to infection and neoplasia', hours: 7 },
        { name: 'General principles of cell growth and basic principles of anticancer chemotherapeutic drugs', hours: 7 },
        { name: 'Infection control and autoimmunity', hours: 3 },
        { name: 'Clinical and diagnostic aspect of Oncogenesis', hours: 1 },
        { name: 'PBL', hours: 32 },
        { name: 'Lab sessions', hours: 20 }
        ]
    },
    {
    id: 'NEU241',
    title: 'Neuroscience Block',
    code: 'NEU241',
    tagline: 'An integrated course on the normal structure and function of the nervous system and the pathogenesis of its diseases.',
    overview: 'This block is fully integrated, covering normal structure and function as well as integrating disease processes and pharmacotherapy of diseases related to neurology and psychiatry. A clinical skills program runs concurrently, teaching the skills required for examination and diagnostic approach to different clinical presentations in neurologic and psychiatric disorders.',
    learningOutcomes: [
        'Relate the normal structure of the central nervous system with sensory, motor and higher mental functions.',
        'Relate the normal structure and embryological development of the central nervous system with lesions and diseases.',
        'Describe the risk factors, epidemiology, signs and symptoms and pathophysiology of common neurological diseases.',
        'Describe the mode of action, pharmacokinetics, and side effects of drugs used in common neurological/psychiatric disorders.',
        'Describe the risk factors, epidemiology, signs and symptoms and pathophysiology of common psychiatric diseases.'
    ],
    details: {
        duration: '11 Weeks',
        level: 'Year 2',
        language: 'English',
        certificate: 'Yes'
    },
    instructor: {
        name: 'Lead Neuroscience Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course relates the normal structure and function of the Central Nervous System with signs and symptoms, epidemiology, risk factors, pathophysiology, and drugs used in the treatment of common neurological and psychiatric disorders.'
    },
    topics: [
        { name: 'Anatomy', hours: 30 },
        { name: 'Physiology', hours: 18 },
        { name: 'Pathology', hours: 20 },
        { name: 'Pharmacology', hours: 20 },
        { name: 'Clinical and Radiology', hours: 26 },
        { name: 'Psychiatry', hours: 18 },
        { name: 'Infections', hours: 8 }
    ]
    },
    {
    id: 'NEU241',
    title: 'Neuroscience Block',
    code: 'NEU241',
    tagline: 'An integrated course on the normal structure and function of the nervous system and the pathogenesis of its diseases.',
    overview: 'This block is fully integrated, covering normal structure and function as well as integrating disease processes and pharmacotherapy of diseases related to neurology and psychiatry. A clinical skills program runs concurrently, teaching the skills required for examination and diagnostic approach to different clinical presentations in neurologic and psychiatric disorders.',
    learningOutcomes: [
        'Relate the normal structure of the central nervous system with sensory, motor and higher mental functions.',
        'Relate the normal structure and embryological development of the central nervous system with lesions and diseases.',
        'Describe the risk factors, epidemiology, signs and symptoms and pathophysiology of common neurological diseases.',
        'Describe the mode of action, pharmacokinetics, and side effects of drugs used in common neurological/psychiatric disorders.',
        'Describe the risk factors, epidemiology, signs and symptoms and pathophysiology of common psychiatric diseases.'
    ],
    details: {
        duration: '11 Weeks',
        level: 'Year 2',
        language: 'English',
        certificate: 'Yes'
    },
    instructor: {
        name: 'Lead Neuroscience Professor',
        title: 'College of Medicine, Alfaisal University',
        bio: 'This course relates the normal structure and function of the Central Nervous System with signs and symptoms, epidemiology, risk factors, pathophysiology, and drugs used in the treatment of common neurological and psychiatric disorders.'
    },
    topics: [
        { name: 'Anatomy', hours: 30 },
        { name: 'Physiology', hours: 18 },
        { name: 'Pathology', hours: 20 },
        { name: 'Pharmacology', hours: 20 },
        { name: 'Clinical and Radiology', hours: 26 },
        { name: 'Psychiatry', hours: 18 },
        { name: 'Infections', hours: 8 }
    ]
    },

];
