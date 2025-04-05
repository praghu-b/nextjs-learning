export default function Product({ params }: {
    params: { productId: string };
}) {
    const productId = (params).productId;
    return (
        <>
            <h1>This is product no. {productId}</h1>
        </>
    )
}