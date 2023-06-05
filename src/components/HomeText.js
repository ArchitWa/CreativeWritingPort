import Me from '../assets/206364.jpg';

export default function HomeText() {
    return (
        <div className='home-grid -mt-[8rem]'>
            <div class="flex flex-col justify-center ">
                <div class="relative flex flex-row space-x-5 space-y-0 rounded-xl shadow-lg p-3 w-[35rem]  h-[21rem] mx-auto border border-white bg-white">
                    <div class="bg-white flex flex-col space-y-2 p-3">
                        <h3 class="text-gray-800 text-3xl font-[akshar] font-bold">Instructions</h3>
                        <p class="text-base text-gray-500">
                            Welcome to my portfolio! This website is a collection of my writing pieces for this project. <br /> <br />
                            To navigate, click on the vertical text on the right side of the screen. This will open up the piece.
                            If you click the highlighted sections, a pop-up of the author's choice will appear. To close, just click
                            anywhere else on the screen. The choice that is surrounded by the asterisks (*) is the one explained in
                            the analysis section. The arrows at the bottom of the piece will allow you to switch between the pages.
                        </p>
                    </div>
                </div>
            </div>


            <div class="flex flex-col justify-center ">
                <div class="relative flex flex-row space-x-5 space-y-0 rounded-xl shadow-lg p-3 w-[50rem] mx-auto border border-white bg-white">
                    <div class="w-[1/4] bg-white grid place-items-center">
                        <img src={Me} alt="me" class="rounded-xl" />
                    </div>
                    <div class="w-3/4 bg-white flex flex-col space-y-2 p-3">
                        <div class="flex justify-between item-center">
                            <p class="text-gray-500 font-medium block">Archit Wankhade</p>
                        </div>
                        <h3 class="text-gray-800 text-3xl font-[akshar] font-bold">Meet The Author</h3>
                        {/* An “about the author” page with a picture and paragraph about you as a writer */}
                        <p class="text-base text-gray-500">
                            Hello, my name is Archit and I'm currently a junior in Mrs. Fujii's class. At the start of the year, my writing
                            skills were limited to the basic five-paragraph essay. I hadn't written a creative piece since middle school
                            and to be honest, I didn't really know where to start. However, across the span of this year, I've grown as a
                            writer and have learned many strategies to improve my writing - on a personal and analytical level. I'm now
                            able to write a creative piece with a lot more ease and have a better understanding of how to convey my ideas
                            in a more effective manner. I hope you enjoy my pieces.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}