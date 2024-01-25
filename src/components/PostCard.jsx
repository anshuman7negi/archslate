
const PostCard = () => {
    return (
        <section className="flex bg-white rounded-lg p-6 gap-24">
            <div className="flex flex-col gap-6 w-2/3">
                <p className="font-bold text-xl">
                    Post an Update:
                </p>
                <textarea name="post" cols="20" rows="8"
                    className="border-2 rounded-md border-[#E5E5E5]"></textarea>
                <button className="mx-auto bg-[#87898f] px-8 py-1 rounded-full text-white font-medium hover:bg-[#D7FEF0] hover:border-[#21CEAF]">
                Post Update
                </button>
            </div>

            <div className="flex flex-col gap-6">
                <p className="font-bold text-xl">
                    Post an Update:
                </p>
                <div className="flex flex-col gap-2">
                    <button className="border-2 border-[#AFB6C0] bg-[#E5E5E5] px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#D7FEF0] hover:border-[#21CEAF] focus:bg-[#D7FEF0] focus:border-[#21CEAF]">
                        Complete
                    </button>
                    <button className="border-2 border-[#AFB6C0] bg-[#E5E5E5] px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#D7FEF0] hover:border-[#21CEAF] focus:bg-[#D7FEF0] focus:border-[#21CEAF]">
                        In Progress
                    </button>
                    <button className="border-2 border-[#AFB6C0] bg-[#E5E5E5] px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#D7FEF0] hover:border-[#21CEAF] focus:bg-[#D7FEF0] focus:border-[#21CEAF]">
                        Stuck
                    </button>
                    <button className="border-2 border-[#AFB6C0] bg-[#E5E5E5] px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#D7FEF0] hover:border-[#21CEAF] focus:bg-[#D7FEF0] focus:border-[#21CEAF]">
                        Not Started
                    </button>
                </div>
            </div>

        </section>
    )
}

export default PostCard;