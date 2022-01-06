//제품 상세 페이지
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams();
    //이 객체는 key value pairs를 가지고 있고 이 key들은 해당 페이지로 이끄는 dynamic sagement임

    console.log(productId);

    return (
        <section>
            <h1>Product Detail</h1>
            {productId}
        </section>
    )
};

export default ProductDetail;