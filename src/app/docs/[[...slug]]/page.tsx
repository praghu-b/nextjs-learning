export default function Docs(
    { params } : { params: { slug: string[] } }
) {
    const { slug } = params;

    if(slug?.length === 2) {
        return <h1>Viewing docs on {slug?.[1]} in {slug?.[0]}</h1>
    }

    if(slug?.length === 1) {
        return <h1>Viewing docs on {slug?.[0]}</h1>
    }

    return(
        <>
            Viewing docs
        </>
    )
}