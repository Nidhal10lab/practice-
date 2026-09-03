import ProductCard from "./ProductCard"
function ProductList(){
    const products=[
        {
            id:1,
            name:"Iphone 15",
            price:"108000",
            category:"electronics",
            rating:"A",
            stock:true,
            isFeatured:true
        },
        {
            id:2,
            name:"Iphone 14",
            price:"101000",
            category:"electronics",
            rating:"B",
            stock:false,
            isFeatured:true
        },
        {
            id:3,
            name:"Iphone 13",
            price:"96000",
            category:"electronics",
            rating:"B",
            stock:false,
            isFeatured:false
        },
        {
            id:4,
            name:"washing machine",
            price:"55000",
            category:"hardware",
            rating:"B",
            stock:true,
            isFeatured:true
        },
        {
            id:5,
            name:"fridge",
            price:"85000",
            category:"hardware",
            rating:"B",
            stock:true,
            isFeatured:false
        },
        {   
            id:6,
            name:"kettle",
            price:"5000",
            category:"hardware",
            rating:"C",
            stock:false,
            isFeatured:true
        }
    ]

return (
    <>
    {products.map((product)=>(
        <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        category={product.category}
        rating={product.rating}
        stock={product.stock}
        isFeatured={product.isFeatured}
/>
    ))
    }
    </>
)
}
export default ProductList