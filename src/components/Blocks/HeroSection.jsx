export default function HeroSection() {


    return (
        <section className="container mx-auto flex items-center justify-between ">
            <div className="max-w-[600px]">

                <h1 className="text-[44px] font-bold">Hi, I am John,
                    Creative Technologist</h1>

                <p className="my-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <a className="bg-[#FF6464] py-2 px-4 text-white" href="#">Download Resume</a>

            </div>

            <img src="/hero.png" alt="" />
        </section>
    )
}