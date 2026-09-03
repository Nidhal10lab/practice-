function ProductCard({ id,name,price,category,rating,stock,isFeatured }){
    return (
        <>
        <h1>{name}</h1>
        <p>id:{id}</p>
        <p>price:₹{price}</p>
        <p>category:{category}</p>
        <p>rating:{rating}</p>
        <p>{stock?"stocked":"notstocked"}</p>
        <p>{isFeatured?"featured":"notfeatured"}</p>
        </>
    )
}
export default ProductCard