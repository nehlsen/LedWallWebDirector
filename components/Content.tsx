export default function Content({children}: {children: React.ReactNode}) {
    return (
        <section className="mx-2 lg:mx-12 lg:mt-4 text-base">
            {children}
        </section>
    );
}
