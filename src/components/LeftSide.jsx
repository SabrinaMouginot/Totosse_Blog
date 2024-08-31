import '../sass/Leftside.scss'

function LeftSide() {
    return (
        <div className="left-side">
            <div className="profile-box">
                <img src="../Totosse_profile.png" alt="Profile" className="profile-box" />
                <h2>Pseudo : <span className='baby'>BABY-TIXXX</span></h2>
                <p>Age : <span className="baby">8 mois</span></p>
            </div>
        </div >
    )
}

export default LeftSide