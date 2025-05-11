import React from 'react';

const EcoFriendly = () => {
    return (
        <div className="w-full h-[400px]">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LymvlEOM8HM?si=BYLr3qvtaiF6mNe1"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                    allowFullScreen></iframe>
        </div>
    );
};

export default EcoFriendly;