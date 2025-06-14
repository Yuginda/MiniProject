import './Hero.css'
import profile from '../../assets/profile.jpg'

function Hero(){

    return(
        <div className='hero'>
            <img src={profile} alt="Picture of me when I went rock climbing" />
            <h1><span>I'm Yuginda Ranawaka,</span> a student from SFU</h1>
            <p>I am a passionate computer engineering student who is intrested in building web applications and finding a way to apply my skills in real-world applications.</p>
            <div className='action'>
                <div className='connect'>Connect</div>
                <div className='resume'>Resume</div>
            </div>
        </div>
    )
}

export default Hero

