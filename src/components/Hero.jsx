import me from "../assets/img/Me.png"


export const Hero = () => {
    return(
        <section className="hero">
            <figure className="hero__avatar">
                <img className="hero__avatar-img" src={me} alt="" />
            </figure>
            <div className="hero__text">
                <h3>Hi, I'm Nguyễn Hoàng Anh Kiệt</h3><br />
                <p>Software engineer</p>
            </div>
        </section>
    )
}