import Link from "next/link";

const TextAboutTheContent = () => {
    return (
        <p
            className="
                font-normal text-black text-center w-79 h-14.5 text-xs md:text-sm select-none
            "
        >
            Este sorteio foi retirado do site da 
            <Link
                href={"https://loterias.caixa.gov.br/Paginas/default.aspx"}
                target="_blank"
                className="
                    uppercase font-black block text-xs cursor-pointer mt-1
                "
            >
                Caixa Econômica Federal
            </Link>
        </p>
    );
};

export default TextAboutTheContent;