import { client } from '@/config/contentful'

const fetchProducts = async () =>{
  const products = await client.getEntries({
    'content_type': 'products',
  })
  console.log('products', products.items[0].fields);
  return products.items
}


export default async function page() {
  const data = await fetchProducts()
    console.log('data',data)
  return (
    <div>
      <h1>Products</h1>
      {/* {data?.map(product =>{
        return <div>
          <h1>
            {product?.fields.title}
          </h1>
        </div>
      })} */}

{data?.map((product) => {
  console.log('Product:', product);
  return (
    <div key={product?.id}>
      <h1>
        {product?.fields.title} - {product?.fields.stock} - {product?.fields.description} - {product?.fields.img}
      </h1>
    </div>
  );
})}


    </div>
  )
}
