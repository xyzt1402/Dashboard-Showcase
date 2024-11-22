import React from 'react'
import LogoHSC from '../../assets/IMG/LogoHSC'


const HeaderTitle = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                borderRadius: 9,
                backgroundColor: " #FFFFFF1A",
            }}
        >
            <LogoHSC />
            <div
                style={{
                    color: "#ffffff",

                    height: "100%",
                    padding: 9,
                }}
            >
                Application Monitoring Dashboard
            </div>
        </div>
    )
}

export default HeaderTitle