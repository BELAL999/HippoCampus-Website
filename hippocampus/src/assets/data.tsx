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