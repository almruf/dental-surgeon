import React from 'react';

const PrimaryButton = ({children} ) => {
    return (
        <div>
            <button className="btn btn-primary text-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;