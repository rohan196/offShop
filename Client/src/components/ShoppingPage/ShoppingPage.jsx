import Filters from "../Filters";
import HomeNavbarSection from "../HomeNavbarSection"
import ProductCard from '../ProductCard'
import allProducts from '../products.json';

const ShoppingPage = () => {
    return (
        <>
            <nav><HomeNavbarSection /></nav>
            <div className="lg:items-center lg:justify-center">
                <div className='flex flex-col items-center justify-center m-auto p-4'>
                    <h1 className='text-4xl font-bold'>All Products</h1>
                </div>
                <div className='m-2 mb-4 px-10 py-4 flex'>
                    <div className="filters mt-8 flex flex-1">
                        <div className="w-full">
                            <Filters />
                        </div>
                    </div>
                    <div className="w-10/12">
                        <div className='grid mt-8 ml-16 grid-col-3 lg:grid-cols-4 lg:gap-4'>
                            {allProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    img={product.img}
                                    title={product.title}
                                    rating={product.rating}
                                    price={product.price}
                                    id={product.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingPage
