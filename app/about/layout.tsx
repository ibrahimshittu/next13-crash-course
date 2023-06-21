import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>Learn more about Next.js</h1>
            {children}
        </div>
    );
};

export default AboutLayout;
