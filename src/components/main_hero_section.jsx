import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { mainHero } from "../mainHero";

export function MainHeroSection() {
    const hero = mainHero[0];
    const textRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Animate out
            gsap.to(textRef.current, {
                y: -15,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    // Change text after animation out
                    setCurrentIndex((prev) =>
                        prev === hero.professions.length - 1 ? 0 : prev + 1
                    );

                    // Animate in
                    gsap.fromTo(
                        textRef.current,
                        { y: 15, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5 }
                    );
                },
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [hero.professions.length]);
    return (
        <>
            {mainHero.map((hero, index) => (
                <section key={index} className="main-hero-section section-space-md">
                    <img className="main_hero_asset" src={hero.image} alt="" />
                    <div className="main-hero-content">
                        <div className="container">
                            <div className="main-hero-content-inner">
                                <span className="welcome-hero pb-3 fs-5">{hero.title}</span>
                                <h1 className="main-hero-heading">Hi, I'm {hero.description}<span className="profession" ref={textRef}>
                                    {hero.professions[currentIndex]}.</span><span className="country">based in {hero.country}.</span></h1>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}



