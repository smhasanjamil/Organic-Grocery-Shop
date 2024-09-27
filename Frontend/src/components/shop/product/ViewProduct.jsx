import { useLoaderData } from "react-router-dom";

const ViewProduct = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            View product
        </div>
    );
};

export default ViewProduct;