export default function Content({children}: {children: React.ReactNode}) {
    return (
        <section className="mx-2 text-base">
            {children}
        </section>
    );
}
