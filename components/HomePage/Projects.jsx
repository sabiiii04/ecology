import React from 'react';

const CompletedProjects = () => {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4 mb-16">
                <div>
                    <p className="text-[#365fb5] font-semibold mb-2">Our Recent Work</p>
                    <h2 className="text-4xl font-bold">Recently Completed</h2>
                    <h2 className="text-4xl font-bold">Projects</h2>
                </div>
                <div>
                    <p>
                        Here’s a snapshot of what we’ve been up to: Community Water Harvesting in Vietnam, Water Quality Labs Launched in the Philippines, Mangrove Restoration to Protect Coastal Aquifers in Indonesia, Youth-Led Clean River Campaign in Malaysia
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompletedProjects;
