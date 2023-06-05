import React, { useState } from 'react'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

import CustomPopup from '../CustomPopup'

export default function PieceTwoText() {
    const [curr, setCurr] = useState(0)

    const content = [
        <>
            &emsp; Today is the day. I still remember it as if graduation had been just yesterday. The thrill of finally
            <CustomPopup
                color={"bg-oxford-blue-400"}
                device={"rule of three"}
                text={" finishing school, the sense of accomplishment, and the looming uncertainty"}
                y={0}
                x={1}
            />
            &nbsp; of what was to come next.
            <br />
            &emsp; The weather had been perfect
            <CustomPopup
                color={"bg-oxford-blue-400"}
                device={"em dash"}
                text={<>-</>}
                y={0}
                x={1}
            />
            better than anything I could ever imagine. The clear bright sky with the
            occasional cloud carried a gentle breeze that
            <CustomPopup
                color={"bg-oxford-blue-400"}
                device={"personification"}
                text={" whispered"}
                y={0}
                x={1}
            />
            the sounds of adventure to whomever was listening <br />
            &emsp; For everyone else, it was just a normal Friday morning, but for me - and probably every other senior - it was
            the end to something we'd grown accustomed to and the start of a new adventure. <br />
            &emsp; Today marks the ten-year anniversary of my graduation. It's hard to believe that in just a few hours, I'll
            be seeing people I haven't talked to in a decade. Obviously, you know I only kept in touch with my close friends. <br />
            &emsp; The first year out was the hardest. <br />
            &emsp; I felt completely lost - unsure of what I wanted to do. I remember waking up the Saturday after graduation.
            Something that had been a staple in my life for almost 12 years was no longer there and I didn't know how to feel. <br />
            &emsp; If you remember the entries from that year, you'll recall the lack of motivation in my writing. The entries
            were sparsely scattered throughout the summer and overall pretty short. I was confused. <br />
            &emsp; For most of that summer, I hung out with my friends - at least the ones that hadn't left for college yet.
            We would just drive around aimlessly, reminiscing on what used to be, and talking about what we were going to do
            <CustomPopup
                color={"bg-oxford-blue-400"}
                device={"*paragraphing*"}
                text={<>.</>}
                y={0}
                x={1}
            />
            <br />
            &emsp; It's still funny to me. <br />
            &emsp; All the dreams we had. <br />
            &emsp; The way they stayed that way. Dreams
            <CustomPopup
                color={"bg-oxford-blue-400"}
                device={"sentence variety"}
                text={<>.</>}
                y={0}
                x={1}
            />
            <br />
            &emsp; After that summer, I went off to college. I didn't write that much to you that year. Everything was going
            so fast and I was whisked along for the ride I had never wanted. There were a few good moments at least. Right? <br />
            &emsp; Ok, I just looked and yeah there were a few. I don't know how I forgot but every weekend, I'd go out and
            tour the city. Sometimes I'd go alone, other times I'd take a few of my friends. <br />
            &emsp; At one point, I remember I'd gotten bored of the city. I felt like I'd seen everything there. This was
            around the same time I was nearing the end of college. Four years and this time, I was actually done with my education. <br />
            &emsp; It's the year 2028 and I've moved back to Sunnyvale. I have just started my new job (the one I'm still
            at now). Since then, everything has pretty much stayed the same. <br />
            &emsp; Every day, I
            <CustomPopup
                color={"bg-oxford-blue-400"}
                device={"lists"}
                text={<>get up at 6:30, brush my teeth, take a shower, get dressed, and drive to work.</>}
                y={0}
                x={1}
            />
            Along the way, I might occasionally pick up a bagel from the coffee shop but usually, I just get something to drink.
            <br />
        </>,
        <>
            &emsp; I don't really like talking about work because every day is pretty much the same. From 8 am to 1 pm, I'm at
            my desk, going for a walk every now and then. After my lunch break, it's back to work until 5. At home, I fill my
            time with random tasks and more work. <br />
            &emsp; My life hasn't really changed these last few years but I'm looking forward to this reunion. It's been years
            since I've seen these people.
            <CustomPopup
                color={"bg-oxford-blue-400"}
                device={"golden line"}
                text={"I need to know that I'm not the only one stuck in this endless cycle."}
                y={0}
                golden={true}
            /> <br />
            &emsp; I'll tell you more later, bye. <br /> <br />
        </>
    ]

    const handleLeftClick = (newCurr) => {
        if (curr === 0) return;
        setCurr(newCurr);
        setParagraphText(content[newCurr])
    }

    const handleRightClick = (newCurr) => {
        if (curr === 2) return;
        setCurr(newCurr)
        setParagraphText(content[newCurr])
    }

    const [paragraphText, setParagraphText] = useState(content[curr])

    return (
        <div>
            <div className="nine -mt-[20rem] flex justify-center">
                <h1 style={{ fontFamily: "Montserrat" }}>Dear Journal,<br />Life After School<br /><span style={{ fontFamily: "akshar" }}>Creative Writing #2</span></h1>
            </div>

            <div className='flex justify-center mt-[2rem] large-grid w-[66rem] mx-auto'>
                <div className='block grid-rows-2 card-grid w-[25rem]'>
                    {/* Each piece should have an introduction/context paragraph, explaining how you came up with content/structure, 
                    what the writing process was like, and a line/section that you are proud of and why [3-5 sentences]. */}
                    <div className='bg-white h-[30rem] shadow-full rounded-3xl'>
                        <h1 className='text-center pt-4 text-2xl' style={{ fontFamily: "Akshar" }}>Introduction</h1>
                        <p className='px-3 text-sm mt-1 leading-[1.43rem]'>
                            Having never kept a journal before, I wasn't sure how to convey that I was talking to a journal. For the
                            structure, I decided to go with short paragraphs to convey the feeling of a journal entry. Keeping them
                            short makes it feel like the person writing it came back at different times to add to the entry. The content
                            of the story is based on how I imagine the life of someone who has been stuck in the same routine for years
                            to be. I wanted to convey the feeling of missing a period of your life and reflecting on the past. I liked
                            the highlighted line (on page 2) because it shows the monotony of the person's life and their outlook on it.
                            They know it isn't all that they shaped up to be but they hope to find some solace in the fact that they're
                            not alone in this experience.
                        </p>

                        <div className="text-[0.6rem] px-3 mt-[3.4rem]">Golden line on page 2</div>
                    </div>

                    <div className='bg-white h-[30rem] shadow-full rounded-3xl'>
                        <h1 className='text-center pt-4 text-2xl' style={{ fontFamily: "Akshar" }}>Analysis</h1>
                        <p className='px-3 text-sm mt-1 leading-[1.43rem]'>
                            For this piece, I decided to use a lot of short paragraphs with a few short sentences in between. I wanted to
                            convey the feeling of a journal entry and I thought that this structure would be the best way to do that.
                            Usually, when I write, I tend to use longer paragraphs but since this was a journal, I thought a bunch of
                            short disjoint paragraphs would be more fitting. Additionally, all of the paragraphs are only loosely related
                            to each to give the feeling that the person is confused and reminiscing on different parts of their life. It
                            takes the reader through a journey of the past ten years of this person's life.
                        </p>

                        <div className="text-[0.6rem] px-3 mt-[7.6rem]">Paragraphing on page 1</div>
                    </div>
                </div>

                <div className='bg-white w-[40rem] h-[61rem] shadow-full rounded-3xl'>
                    <h1 className='text-center pt-4 text-2xl' style={{ fontFamily: "Akshar" }}>Piece</h1>
                    <p className='px-3 text-sm mt-1 leading-[1.43rem]'>
                        {paragraphText}
                    </p>

                    <div className="flex justify-center -mt-2 gap-x-1">
                        <button onClick={() => handleLeftClick(curr - 1)}>
                            <BsArrowLeftShort className={`w-8 h-8 mb-2 text-oxford-blue border border-oxford-blue rounded-full`} />
                        </button>
                        <button onClick={() => handleRightClick(curr + 1)}>
                            <BsArrowRightShort className={`w-8 h-8 mb-2 text-oxford-blue border border-oxford-blue rounded-full`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}