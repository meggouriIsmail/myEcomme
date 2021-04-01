
const Info = [
    {
        pic: "woman2.png",
        title: "Women",
        trend: "new trend"
    },
    {
        pic: "man1.png",
        title: "Women",
        trend: "new trend"
    },
    {
        pic: "cap.png",
        title: "Women",
        trend: "new trend"
    }
]

const Categories = () => {
    return (
        <div className="categorie">
        {Info.map(obj => {
            return (
                <div class="cat">
                    <div className="overlay">
                        <p>Shop Now</p>
                    </div>
                    <p className="cat-title">{obj.title}</p>
                    <p className="cat-sub">{obj.trend}</p>
                    <img src={`/assets/products/${obj.pic}`} alt="woman" class="cat-img" />
                </div>
            );
        })}
        </div>
    );
}
 
export default Categories;