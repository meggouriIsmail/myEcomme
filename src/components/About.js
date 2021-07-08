const About = () => {
    return (
        <section className="About">
            <div className="info">
                <p className="profile" style={{ color: "white" }}>
                    Hello, World.
                    I'm MEGGOURI ISMAIL.
                    An ambitious Moroccan programmer.
                    I love to communicate with people through my work.
                </p>
                <img src={`${process.env.PUBLIC_URL}/assets/images/alsoMee.jpg`} alt="avatar" className="avatar" />
            </div>
        </section>
    );
}

export default About;