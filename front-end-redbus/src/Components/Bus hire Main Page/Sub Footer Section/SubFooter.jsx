
import React from 'react'
import Styles from './Subfooter.module.css'

const SubFooter = () => {
    return (
        <div>
            <div className={Styles.subFootercontainer}>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Bus Hire Cities</h4>
                    <p>Bus Hire in KARACHI</p>
                    <p>Bus Hire in Islamabad</p>
                    <p>Bus Hire in Lahore</p>
                    <p>Bus Hire in Multan</p>
                </div>
                <div className={Styles.subFootercontainer_alternateSection}>
                    <p>Bus Hire in Mirpurkhas</p>
                    <p>Bus Hire in Hyderabad</p>
                    <p>Bus Hire in Bahawalpur</p>
                    <p>Bus Hire in Dadu</p>
                </div>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Tempo travellers in other cities</h4>
                    <p>Tempo travellers in China</p>
                    <p>Tempo travellers in Iran</p>
                    <p>Tempo travellers in Iraq</p>
                    <p>Tempo travellers in India</p>
                    <p>Tempo travellers in Nepal</p>
                </div>
                <div className={Styles.subFootercontainer_alternateSection}>
                    <p>Tempo travellers in Dubai</p>
                    <p>Tempo travellers in Saudi arab</p>
                    <p>Tempo travellers in Mumbai</p>
                    <p>Tempo travellers in japan</p>
                    <p>Tempo travellers in Chennai</p>
                </div>
            </div>
        </div>
    )
}

export default SubFooter
