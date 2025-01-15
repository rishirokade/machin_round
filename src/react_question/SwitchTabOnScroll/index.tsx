import React, { useEffect, useState, useRef } from "react";

const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

const SwitchTabOnScroll: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sectionRefs.current.map((ref) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    return { id: ref.id, top: rect.top };
                }
                return { id: "", top: Infinity };
            });

            const currentIndex = offsets.findIndex((offset) => offset.top >= 0);
            if (currentIndex !== -1) {
                setActiveTab(currentIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleTabClick = (index: number) => {
        const targetSection = sectionRefs.current[index];
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            {/* Tabs */}
            <div style={styles.tabContainer}>
                {sections.map((section, index) => (
                    <button
                        key={section}
                        style={{
                            ...styles.tab,
                            backgroundColor:
                                index === activeTab ? "#007bff" : "#e0e0e0",
                            color: index === activeTab ? "#fff" : "#000",
                        }}
                        onClick={() => handleTabClick(index)}
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Content Sections */}
            <div>
                {sections.map((section, index) => (
                    <div
                        key={section}
                        id={`section-${index}`}
                        ref={(el) => (sectionRefs.current[index] = el!)}
                        style={styles.section}
                    >
                        <h2>{section}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque sit amet eros erat. Integer
                            pellentesque lorem a dui ultricies, nec varius massa
                            ultricies.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    tabContainer: {
        position: "sticky" as const,
        top: 0,
        backgroundColor: "#fff",
        display: "flex",
        padding: "10px 0",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    tab: {
        flex: 1,
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
    section: {
        height: "100vh",
        padding: "20px",
        borderBottom: "1px solid #ddd",
    },
};

export default SwitchTabOnScroll;
