import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef} from "react"
gsap.registerPlugin(ScrollTrigger,SplitText,useGSAP);
import{Link} from "react-router-dom"
const BrowseCourses = () => {
    const container = useRef(null)
    const animation = useRef(null)
    const nextAnaimaion = useRef(null)
    const buttonAnaimation = useRef(null)
    useGSAP(()=>{
        if (!animation.current || !container.current) return;
        const splitText = new SplitText(animation.current, {
            type: "chars,words",
            smartWrap : true ,
            autoSplit : true,
        });
        gsap.set(splitText.chars, {
            opacity: 0,
            y: 50,
            rotationX: "random(-30,30)"
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });
        ScrollTrigger.matchMedia({
        // Desktop version
        "(min-width: 768px)": function() {
            tl.to(splitText.chars, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                stagger: {
                    amount: 0.5,
                    from: "random",
                }
            });
        },
        // Mobile version (simpler animation)
        "(max-width: 767px)": function() {
            tl.to(splitText.chars, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.05 // Simpler stagger
            });
        }
    });

    tl.from(nextAnaimaion.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "elastic.out(1,0.3)", 
    });

    tl.to(buttonAnaimation.current, {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out",        
    },"-=0.5")


    // Cleanup function
        return () => {
            splitText.revert();
        };
    })
    return (
        <div className="my-[120px] mx-auto text-center" ref={container}>
            <p className="text-[32px] font-black dark:text-p4" ref={animation}>Ready to Take the Next Step?</p>
            <p ref = {nextAnaimaion} className="pb-[32px] dark:text-p4 opacity-80 text-[16px] font-bold">Explore our course catalog and find the perfect program to advance your medical career.</p>
            <Link to="courses">
                <button className="bg-p1 text-p2 rounded-full py-2 px-4 cursor-pointer mx-auto font-bold" ref={buttonAnaimation} style={{
                clipPath : "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"
            }}>Browse Courses</button>
            </Link>
        </div>
    )
}

export default BrowseCourses
