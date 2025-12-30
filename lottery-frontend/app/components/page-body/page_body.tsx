const PageBody = ({
    children
} : React.PropsWithChildren) => {
    const BackgroundColor = "bg-(--color_01)";

    return (
        <main
            className={`
                ${BackgroundColor} h-dvh w-dvw flex flex-col lg:flex-row justify-center items-center
            `}
        >
            {children}
        </main>
    );
};

export default PageBody;