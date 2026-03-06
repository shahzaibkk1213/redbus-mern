
import React from 'react'
import Styles from './GlobalPresence.module.css'

const GlobalPresence = () => {
    return (
        <div>
            <div style = {{backgroundColor : "#f1f1f1"}}>
            <div className = {Styles.globalPresenceContainer}>
            <div className = {Styles.globalPresenceHeading}>OUR GLOBAL PRESENCE</div>
            <div style = {{display : "flex" , justifyContent : "space-evenly", marginTop : "60px"}}>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX90RbOEScBOJP80hvPFisALZaXlGb/1ggAO5mlH07RECIGPJQAMZcAPpsAOpqmI1GPCHfhAAABX0lEQVR4nO3Q20ECQRRAsauLii6P/rvFT2ZOC0kJmYPdHMPKSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTuqYH3bzzW5uX6xuc36yOp2Ek3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTOuf+uPLucZ/nL6vn/LGbyweri5NwUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS/yfsXkhAyL4FEX68AAAAAElFTkSuQmCC" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>colombia</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg==" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>India</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "RKnr7+/a2tqcCwSUAAABf0lEQVR4nO3SwQ3CMAAEQSeGJNB/wYgXMlsAPGYqOK1uHBurYxz7tvOx7cdQ5Nv2bvLrs/4VTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqTejc576zOcd1YXeMxWD3G/PWEvzM1CU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9Kk5nhOVs8XvjdzZbCXb9MAAAAASUVORK5CYII=" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>indonesia</div>
                </div>
            </div>
            <div style = {{display : "flex" , justifyContent : "space-evenly" , marginTop : "60px",marginBottom : "80px"}}>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,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" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>malaysia</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "https://flagcdn.com/w160/pk.png"/>
                    </div>
                        <div className = {Styles.countryName}>pakistan</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "data:image/png;base64,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" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>singapore</div>
                </div>
            </div>
            </div>
            </div>
            <div className = {Styles.globalPresenceContainer}>
            <div className = {Styles.globalPresenceHeading}>THE NUMBERS ARE GROWING</div>
            <div style = {{display : "flex" , justifyContent : "space-evenly", marginTop : "60px"}}>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center"}}>
                    <div className = {Styles.countryName}>customers</div>
                    <div className = {Styles.numbers}>23 M</div>
                    <div className = {Styles.para}>redBus is trusted by over 23 million happy customers globally</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center"}}>
                    <div className = {Styles.countryName}>OPERATORS</div>
                    <div className = {Styles.numbers}>2600</div>
                    <div className = {Styles.para}>network of over 2600 bus operators worldwide</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center", paddingBottom : "40px"}}>
                    <div className = {Styles.countryName}>BUS TICKETS</div>
                    <div className = {Styles.numbers}>180+ M</div>
                    <div className = {Styles.para}>Over 180 million trips booked using redBus</div>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default GlobalPresence
// 
