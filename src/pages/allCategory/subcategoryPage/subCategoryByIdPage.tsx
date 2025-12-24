import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SubCategoryByIdPage = () => {
    const { id } = useParams()
    console.log("e ")
    const [data, setdata] = useState([])
    async function getProduct() {
        try {
            let res = await fetch(`http://37.27.29.18:8002/Product/get-products?SubcategoryId=${id}`)
            let data = await res.json()
            setdata(data)
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <h1>chokadi</h1>
            {data?.data?.map(e => (
                <div key={e.id}>
                    <h1>{e.categoryName}</h1>
                </div>

            ))}
        </div>
    )
}

export default SubCategoryByIdPage
