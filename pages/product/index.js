import Link from 'next/link'
function ProductList ({productId = 100}) {
    return <>
    <Link href="/product/1"><h1>Product 1 </h1></Link>
    <h1>Product 2</h1>
    <h1>Product 3</h1>
    <Link href={`/product/${productId}`}><h1>Product 1 </h1> </Link>
    </>
}
export default ProductList;