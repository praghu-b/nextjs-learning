import { notFound } from "next/navigation";

export default function Product({ params }: {
    params: { productId: string };
}) {
    const productId = parseInt((params).productId);
    
    if(productId > 1000) {
        notFound();
    }

    return (
        <>
            <h1>This is product no. {productId}</h1>
        </>
    )
}