
const Info = [
    {
        pic: "woman2.png",
        title: "Women",
        trend: "new trend"
    },
    {
        pic: "man1.png",
        title: "Men",
        trend: "new trend"
    },
    {
        pic: "cap.png",
        title: "Accessories",
        trend: "new trend"
    }
]

const Categories = () => {
    return (
        <div className="categorie">
            {Info.map((obj, index) => {
                return (
                    <div className="cat" key={index}>
                        <img src={`${process.env.PUBLIC_URL}/assets/products/${obj.pic}`} alt="woman" className="cat-img" />
                        <div className="overlay">
                            <p>Shop Now</p>
                        </div>
                        <p className="cat-title">{obj.title}</p>
                        <p className="cat-sub">{obj.trend}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Categories;