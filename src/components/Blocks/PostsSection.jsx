import Post from "../Post";

export default function PostsSection() {

    return (
        <section className="bg-[#49c1e5] py-8 mt-20 kakyto_class">
            <div className="flex container mx-auto gap-x-5">
                <Post
                    title="Making a design system from scratch"
                    date="12 Feb 2020"
                    tags="Design, Pattern"
                    shortDescr="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
                <Post
                    title="Creating pixel perfect icons in Figma"
                    date="12 Feb 2020"
                    tags="Figma, Icon Design"
                    shortDescr="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
            </div>
        </section>


    )
}