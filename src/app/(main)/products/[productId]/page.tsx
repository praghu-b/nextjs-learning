import { Metadata } from "next";

type Props = {
    params: { productId: string };
    searchParams: { lang?: string};
}

export const generateMetadata = ({ params, searchParams }: Props): Metadata => {
    const id = params.productId;
    const lang = searchParams?.lang;
    return {
        title: `Product ${id} || ${lang}`
    }
}

export default function Product({ params, searchParams }: Props) {
    const id = params.productId;
    const lang = searchParams.lang;
    return <h1>Product No. {id} and the chosen language is {lang}</h1>
}