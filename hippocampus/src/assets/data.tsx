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
}
interface pages {
    name : string
    path : string
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
        price: 1700
    },
    {
        id:1,
        image: "https://picsum.photos/seed/gastro/400/300",
        keyWords: ["gastrointestinal", "digestive system", "GI", "hepatology", "endoscopy"],
        title: "Gastrointestinal Block",
        description: "Explore the comprehensive functions of the digestive system, from esophagus to rectum, including liver, pancreas, and gallbladder. Understand common GI disorders, diagnostic techniques, and therapeutic approaches.",
        duration: "Varies",
        instructor: "Leading Gastroenterologists",
        price: 2000
    },
    {
        id:2,
        image: "https://picsum.photos/seed/cardio/400/300",
        keyWords: ["cardiopulmonary", "heart", "lungs", "cardiology", "pulmonology"],
        title: "Cardiopulmonary Block",
        description: "Master the complexities of the cardiovascular and respiratory systems. This block covers heart function, lung mechanics, common diseases like heart failure and asthma, and their integrated management.",
        duration: "Varies",
        instructor: "Cardiologists & Pulmonologists",
        price: 2000
    },
    {
        id:3,
        image: "https://picsum.photos/seed/respiratory/400/300",
        keyWords: ["respiratory", "lungs", "breathing", "pulmonary", "ventilation"],
        title: "Respiratory Block",
        description: "Focus specifically on the respiratory system, including lung anatomy, gas exchange, and common respiratory diseases such as COPD, pneumonia, and tuberculosis. Learn about diagnostic tests and treatment strategies.",
        duration: "Varies",
        instructor: "Pulmonary Specialists",
        price: 1700
    },
    {
        id:4,
        image: "https://picsum.photos/seed/reproductive/400/300",
        keyWords: ["reproductive", "fertility", "obstetrics", "gynecology", "urology"],
        title: "Reproductive Block",
        description: "Gain in-depth knowledge of the male and female reproductive systems, including hormonal regulation, reproductive health, common disorders, and an introduction to obstetrics and gynecology.",
        duration: "Varies",
        instructor: "Reproductive Health Experts",
        price: 1700
    },
    {
        id:5,
        image: "https://picsum.photos/seed/renal/400/300",
        keyWords: ["renal", "kidney", "nephrology", "urinary system", "dialysis"],
        title: "Renal Block",
        description: "Understand the vital role of the kidneys in fluid and electrolyte balance, waste excretion, and blood pressure regulation. This block covers renal physiology, common kidney diseases, and treatment options like dialysis.",
        duration: "Varies",
        instructor: "Nephrologists",
        price: 1700
    },
    {
        id:6,
        image: "https://picsum.photos/seed/endocrine/400/300",
        keyWords: ["endocrine", "hormones", "glands", "diabetes", "thyroid"],
        title: "Endocrine Block",
        description: "Explore the intricate endocrine system, focusing on glands, hormones, and their impact on metabolism, growth, and development. Common conditions like diabetes and thyroid disorders are covered in detail.",
        duration: "Varies",
        instructor: "Endocrinologists",
        price: 1700
    },
    {
        id:7,
        image: "https://picsum.photos/seed/pathogenesis/400/300",
        keyWords: ["pathogenesis", "diseases", "mechanisms", "etiology", "pathology"],
        title: "Pathogenesis of Diseases Block",
        description: "Investigate the fundamental mechanisms by which diseases develop, from cellular injury to genetic predispositions and environmental factors. This block provides a foundational understanding of disease processes.",
        duration: "Varies",
        instructor: "Pathologists & Researchers",
        price: 1700
    },
    {
        id:8,
        image: "https://picsum.photos/seed/neuroscience/400/300",
        keyWords: ["neuroscience", "brain", "nervous system", "neurology", "neuroanatomy"],
        title: "Neuroscience Block",
        description: "Dive into the complexities of the central and peripheral nervous systems. This block covers neuroanatomy, neurophysiology, common neurological disorders, and diagnostic approaches.",
        duration: "Varies",
        instructor: "Neurologists & Neurosurgeons",
        price: 2000
    },
    {
        id:9,
        image: "https://picsum.photos/seed/head/400/300",
        keyWords: ["head", "neck", "special senses", "ENT", "ophthalmology", "dentistry"],
        title: "Head, Neck and Special Senses Block",
        description: "A focused study on the anatomy and clinical conditions related to the head, neck, eyes, ears, nose, and throat. This block integrates knowledge from various specialties including ENT and ophthalmology.",
        duration: "Varies",
        instructor: "ENT Specialists & Ophthalmologists",
        price: 1500
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
        name : "Instructors",
        path : "/instructors"
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
