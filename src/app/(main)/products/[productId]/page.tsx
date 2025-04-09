import { Metadata } from "next";

type Props = {
    params: { productId: string }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    const id = params.productId;
    return {
        title: `Product ${id}`
    }
}

export default function Product({ params }: Props) {
    const id = params.productId;
    return <h1>Product No. {id}</h1>
}