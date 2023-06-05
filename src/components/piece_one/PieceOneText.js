import CustomPopup from "../CustomPopup"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { useState } from "react";

export default function PieceOneText() {
    const [curr, setCurr] = useState(0)

    const iRemember = (
        <span className="px-1 py-[0.5px] text-white bg-bittersweet-300 rounded-[0.4rem]">I remember</span>
    )

    const content = [
        <>
            &emsp; It continues to astound me. How can something as important as someone's birthday be so easy to forget
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"rhetorical question"}
                text={<>?</>}
                y={0}
                x={1}
            />
            <br />
            &emsp; Here I was, having a stroll in the park, oblivious to how the next three hours of my life would be
            something I'd never experienced before. It was a normal October evening, with a slight chill in the air
            and the soft crunching of leaves as children ran past me. Oddly enough, the scent of pumpkin spice wafted
            through the park and filled me with a rush of nostalgia. Yet it seemed out of place
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"em dash"}
                text={"-"}
                y={0}
                x={1}
            />
            there were no street vendors or bakeries nearby. It was getting stronger.
            <br />
            &emsp; It's always the most mundane of experiences that leave the most significant impression on you.
            <br />
            &emsp; Anyway back to the story. As I kept walking, the scent increased in intensity and was starting to burn
            my nostrils. At this point, my curiosity was piqued. Mystified by the source of the smell, I followed it.
            <br />
            &emsp; My first mistake. <br />
            &emsp;
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"*paragraphing*"}
                text={<>This is how they always start.</>}
                y={0}
            />
            <br />
            &emsp; The setting was perfect, the only thing missing from the perfect horror story was an assuming victim: me!
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"repetition"}
                text={"And so I kept walking. And walking. And walking."}
                y={0}
            />
            Eventually, I lost track of time and by the time I had realized, I had reached my destination.
            <br />
            &emsp; Unrelated to the story so far but baking can be quite fun. In fact, it was the only thing that kept me
            occupied during this experience, but more on that later. It's almost like chemistry. Imagine the first person
            to have baked a pie. They somehow knew exactly
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"rule of three"}
                text={"what to use, when to add it, and how to serve it."}
                y={0}
            />
            Imagine their surprise when it turned out perfect. How would they feel that their creation would be forever
            immortalized?
            <br />
            &emsp;
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"repetition"}
                text={"I still remember"}
                y={0}
            /> the first time I cooked. It was nothing special, just the usual “homemade” pizza. {iRemember} going to the
            grocery store, completely clueless about the location of each item. {iRemember} feeling embarrassed having to
            ask the store clerk where the olives were. {iRemember} cutting myself in the process of preparing the onions.
            Most of all, {iRemember} the astonishment on my friends' faces as they swallowed their first bite. They had low
            expectations, considering how long it had taken to bake and yet it was surprisingly delicious. {iRemember} how
            proud I felt, even though it was such a simple task.
            <br />
            &emsp; It's first times like these that have a lasting impact on someone. And this experience was about to be
            another first. My destination was a house, but not the ordinary one you'd find in the suburbs.
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"personification"}
                text={"Picture a house so haunted, it's basically screaming “RUN”."}
                y={0}
            />
            <br />
            &emsp; At this point, the sun had completely gone down and a deep fog was settling. Shriveled, leafless trees
            surrounded the estate. Its once vibrant paint had faded, revealing the grotesque underbelly. Its broken windows
            stared back at me - daring me to step inside. And of course, it was surrounded by hideous statues decorating
            the windows and arches
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"imagery"}
                text={<>.</>}
                y={0}
                x={1}
            />
        </>,
        <>
            &emsp; My next decision was to walk the other way, right? <br />
            &emsp; Wrong. <br />
            &emsp; With one of the most unfortunate timings, I had suddenly remembered that I needed to bake a pie - a pumpkin
            pie - for my friend's party. And so here I was, at the doorstep of the house,
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"rule of three + sensory imagery"}
                text={"wooden boards creaking, sheets flapping, and a droning noise"}
                y={0}
            />
            &nbsp; emanating from behind the door.
            <br />
            &emsp; When the urge to bake hits you, you have to comply.  <br />
            &emsp; I stepped in and decided to waste no time in going to the kitchen. Don't ask why I assumed all the
            ingredients were going to be stocked (they were).
            <br />
            &emsp;
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"lists"}
                text={"Step one"}
                y={0}
            />
            in baking the perfect pie in a haunted house: make sure any paranormal activity that occurs happens in a
            different room. Trust me, you don't want the hand of a skeleton to “accidentally” fall into the blender.
            Contrary to what people might say, it in fact does not add flavor to the pie.
            <br />
            &emsp; Next, you'll want to gather all the ingredients without disturbing any of the rats having a feast
            on the moldy cheese underneath the cupboard.
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"lists"}
                text={"You'll need"}
                y={0}
            />
            need 1 can of pumpkin puree (preferably made from someone's Halloween decorations), 1 can of condensed milk,
            2 large eggs, 1 teaspoon ground cinnamon, ½ teaspoon ground ginger, ½ teaspoon ground nutmeg, a little bit
            of salt, and an unbaked pie crust (or whatever dough the house has - you can't be picky). Good luck finding
            all of those.
            <br />
            &emsp; Right about now, the poltergeist in the room above will start becoming annoyed. Ignore it. Worst
            case scenario, it will decide to leave its room and upset the pie when it's meant to be settling.
            <br />
            &emsp; A  problem I did face however was the incessant buzzing sound coming from the pantry. Now most
            people in most stories would leave it be. Why wouldn't they? They already have enough on their plates
            (or lack thereof). Anyway, I decided to open it. Turns out it was just a wolf that had been stuck.
            Normally, I would've been scared out of my mind but I had a task to complete. I bid goodbye to the wolf
            and resumed my task. It's important in these scenarios to not let your goal out of sight; the haunted
            nature of the house is not relevant right now.
            <br />
            &emsp; After fiddling with the oven for five minutes, preheat it to 425 degrees and while you wait, find
            the least cracked bowl in the cabinets.
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"golden line"}
                text={"Whisk together the pumpkin puree, condensed milk, spices, and salt until it feels like your arms will become as strong as the muscular suit of armor peering around the corner."}
                y={0}
                golden={true}
            />
            <br />
            &emsp; And finally, pour the mixture you just concocted into the pie crust and place it in the oven for
            30 to 45 minutes, once again being careful not to disturb the rats. Believe me, the rats will completely
            upset the texture and result in a bitter aftertaste.
            <br />
            &emsp;
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"sentence variety"}
                text={"And now you wait."}
                y={0}
            />
            <br />
            <span className="unselectable text-white">When I was learning firsthand how to bake a pie in a haunted house, I remember <br /> a </span>


        </>,
        <>
            &emsp; When I was learning firsthand how to bake a pie in a haunted house, I remember the feeling of
            boredom as I waited for it to bake. I wanted to explore the other rooms but as I was about to leave,
            I could feel tiny pinpricks in the back of my neck. The bats watching me from the corner of the room
            were silently judging me. I had forgotten to wash the dishes! Piece of advice for novice bakers, don't
            forget this vital step if you're ever in this situation.
            <br />
            &emsp; By the time I got the water to work (it was slimy) and the dishes were washed (a few more chips
            might be present), the oven dinged: the pie was done. Now usually, you would let it cool. Yeah no, I
            didn't plan on staying. I picked the pie up with the worn-out mitts and dashed out the broken window.
            ˝<br />
            &emsp; I can definitively say that the pie was among the best I had ever baked. 
            <CustomPopup
                color={"bg-bittersweet-400"}
                device={"rhetorical question"}
                text={"Was it because of the stress-induced environment? The slightly sour condensed milk? The freshly pureed pumpkins? "}
                y={0}
            />
            <br />
            I guess I'll never find out but maybe the next time this happens to me, I'll be sure to have my cookbook with me.
            <br />
            <br />
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
        // How To Bake A Perfect Pie In A Haunted House
        <div>
            <div className="nine -mt-[20rem] flex justify-center ">
                <h1 style={{ fontFamily: "Montserrat" }}>How To Bake A Perfect Pie<br />In A Haunted House<span style={{ fontFamily: "akshar" }}>Creative Writing #1</span></h1>
            </div>

            <div className='flex justify-center mt-[2rem] large-grid w-[66rem] mx-auto'>
                <div className='block grid-rows-2 card-grid w-[25rem]'>
                    {/* Each piece should have an introduction/context paragraph, explaining how you came up with content/structure, 
                    what the writing process was like, and a line/section that you are proud of and why [3-5 sentences]. */}
                    <div className='bg-white h-[30rem] shadow-full rounded-3xl'>
                        <h1 className='text-center pt-4 text-2xl' style={{ fontFamily: "Akshar" }}>Introduction</h1>
                        <p className='px-3 text-sm mt-1 leading-[1.43rem]'>
                        I chose to write this in first person in the form of a story because, throughout the year, I've been writing informally 
                        in order to argue my points but for this one, I wanted to try something different. The basis of the story is meant to be 
                        nonsensical and I wanted to see if I could make it work (I've never actually baked a pie before) - the haunted house part 
                        was the first thing that came to mind since I had just seen Scream VI. The writing process felt pretty smooth since I was 
                        just putting down whatever came to mind and then going back to edit it afterward. I like the highlighted line (on page 2) 
                        because I think it captures the essence of the story well. First, it has the directions for an actual recipe for pumpkin 
                        pie and it's combined with a hyperbole that shows the ridiculous nature of this prompt/story.
                        </p>

                        <div className="text-[0.6rem] px-3 mt-[2rem]">Golden line on page 2</div>
                    </div>
                    {/* Each piece should have an analysis paragraph (the same as your explanations from CW 1-3).  Identify an 
                    author’s choice that you made, and analyze how it works and contributes to the content. */}
                    <div className='bg-white h-[30rem] shadow-full rounded-3xl'>
                        <h1 className='text-center pt-4 text-2xl' style={{ fontFamily: "Akshar" }}>Analysis</h1>
                        <p className='px-3 text-sm mt-1 leading-[1.43rem]'>
                        I used short choppy sentences here followed by a shorter paragraph to help set the scene and emphasize the "severity" 
                        of this nonsensical situation. The first short sentence establishes that the main character messed up (it's what leads 
                        to the story in the first place) and the second sentence is intentionally vague when it says "they". This is done so 
                        that the reader wants to know what "they" is - which is revealed in the following paragraph. It also breaks up the 
                        pattern of descriptions by explaining the main character's thoughts. 
                        </p>

                        <div className="text-[0.6rem] px-3 mt-[9.2rem]">Paragraphing on page 1</div>
                    </div>
                </div>
                <div>
                    
                    <div className='bg-white w-[40rem] h-[61rem] shadow-full rounded-3xl'>
                        <h1 className='text-center pt-4 text-2xl' style={{ fontFamily: "Akshar" }}>Piece</h1>
                        <p className='px-3 text-sm mt-1 leading-[1.43rem]'>
                            {paragraphText}
                        </p>
                        <div className="flex justify-center -mt-2 gap-x-1">
                            <button onClick={() => handleLeftClick(curr - 1)}>
                                <BsArrowLeftShort className={`w-8 h-8 mb-2 text-bittersweet border border-bittersweet rounded-full`} />
                            </button>
                            <button onClick={() => handleRightClick(curr + 1)}>
                                <BsArrowRightShort className={`w-8 h-8 mb-2 text-bittersweet border border-bittersweet rounded-full`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}