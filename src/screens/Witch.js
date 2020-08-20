import React from 'react';
import tw, {styled} from 'twin.macro';

const Container = styled.div`
    ${tw`flex justify-center p-3 max-w-4xl grid mx-auto gap-3 w-full`}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export default () => {
    const articles = [
        {
            title: "Welcome to Pendle",
            author: "Lewis Powell",
            html: `<p>Hi Pendle Freshers 2020,</p>
            <p>I&rsquo;m Lewis your JCR President and welcome to the Witch blog!</p>
            <p>Firstly, I&rsquo;d like to offer a huge welcome to Pendle! A friendly and sociable college and soon to be your very own &ldquo;home away from home.&rdquo; Your college will offer you a variety of unique opportunities throughout your time at Lancaster, from sports teams, social events, intercollegiate competitions such as the sustainability challenge and debating competitions there is something for everyone!</p>
            <p>I understand that whilst this may be an exciting time, it can also be an extremely nerve-racking and stressful one. If you have any worries or concerns the JCR team and your Fresher Reps will all be happy to help. Please don&rsquo;t hesitate to ask!</p>
            <p>Lastly, my advice to you all would be to try everything offered at University and to not miss any opportunities. Seize all these opportunities and you never know; they may lead to new friendships or new interests! Make sure to check Pendle&rsquo;s Facebook and Instagram to keep up to date with the events we&rsquo;re putting on during the Welcome Period.</p>
            <p>I wish you all the best of luck for this new and exciting experience.</p>
            <p>Lewis Powell</p>`,
        },
        {
            title: "Drinks in Lancaster",
            author: "Thomas Whitfield",
            html: `<p>Thinking of grabbing a few drinks in town but not sure where to go? Then look no further as we&rsquo;ve compiled a list of some great places for you to visit as you explore what Lancaster has to offer.</p>
            <p><strong>Tipple Cocktails</strong></p>
            <p>Located on King Street in town (just off of Common Garden Street) this small but cosy cocktail bar is perfect if you&rsquo;re wanting to settle in for a night of drinks in a &ldquo;boutique cocktail bar&rdquo;. They specialise in hand crafted cocktails but also pride themselves on having a great selection of sprits, beers and soft drinks too. You can also find a selection of games should you wish to add a bit of competition to your evening.</p>
            <p><strong>The Pendle Witch</strong></p>
            <p>You can find The Pendle Witch on Penny Street (only about a minute&rsquo;s walk away from the bus stop on Common Garden Street) which makes it a great place if you want a drink and bite to eat. &nbsp;If you&rsquo;re feeling adventurous try their burger topped with Wotsits (which despite what you may think is surprisingly nice). They also offer a student card which gives you discounts on numerous popular drinks and meals. And with a name as great as theirs, how could you resist?</p>
            <p><strong>Hogarths Gin Palace</strong></p>
            <p>As you may be able to guess from the name, Hogarths boasts a wide variety of Gins (over 120 different brands to be precise) so if you&rsquo;re a lover of gin this is definitely the place for you. With its grand chandelier and large open plan Victorian style interiors it&rsquo;s great to sit and chat with friends or enjoy the lively atmosphere. Even if you&rsquo;re not a gin lover it&rsquo;s still worth a visit to try their wide variety of other drinks that are all reasonably priced.</p>
            <p><strong>The Crafty Scholar</strong></p>
            <p>The Crafty Scholar (or Craftys as its more commonly known) is a student favourite here at Lancaster. While it may seem like a normal pub during the day, by night it is transformed into a club with its very own dancefloor and DJ booth. Every Thursday they also host their weekly pub quiz (though I don&rsquo;t know why you&rsquo;d go to theirs when Pendle puts on its own events every Thursday)!</p>
            <p><strong>Kanteena</strong></p>
            <p>Kanteena is one of Lancaster&rsquo;s newest bars housed in a converted warehouse to the north of the city. Not only is it a bar but it also serves food and has an outside courtyard to enjoy when the weather is a bit nicer. It&rsquo;s also a great place to visit when they host their Weekly Farmers Markets and Flea Market.</p>`,
        },
        {
            title: "Surviving in a New World",
            author: "Simon Arnold",
            html: `<p>Stories of emigration have leaked into culture and history. The New World meant a fresh start for many; those who made it often left friends and family behind, saying goodbye to comfort and certainty in search of a better life in the Americas. Coming to university is, in some ways, our own search for our future&hellip; we have all left behind the security of our past. Bearing in mind that this article is an opinion piece, maybe it can be a rough guide.&nbsp;</p>
            <p><strong>Stress</strong></p>
            <p>Stress is a killer, and everybody deals with it in their own way. It must be said, some methods work far better than others! Destressing can be as simple as making a cup of tea and watching a film or it might involve making notes and diagrams on what's bothering you. A few good apps for coping with tough times or clearing your mind: &bull; Headspace &bull; Calm &bull; Forest &bull; Daylio.&nbsp;</p>
            <p>From a personal perspective, I remember vividly watching this <a href="https://youtu.be/RcGyVTAoXEU">TED talk</a> about stress. Whilst my views don't represent the thoughts of the college or the university and I can't say I've checked the study she cited, the thing that sticks in my head from that TED talk is how your attitude to stress (amongst other things) matters as much as what you actually experience. And whilst it's not possible to will away trauma and other barriers to daily life, going into freshers' week I had a calm acceptance of the way things were.</p>
            <p><strong>Health</strong></p>
            <p>Honestly, eating decent vegetables and something which didn't come out of a packet can make all the difference in making you feel at home. I was in the fortunate position of being able to cook when left home but if you aren't, look things up or ask someone in your flat! Usually people are looking for an excuse to do something nice, it's always a great opportunity to know people better. This year the JCR have made cooking videos of some easy meals which you can find online. If you're looking for a more challenging or maybe just a new recipe then <a href="https://www.bbcgoodfood.com/">BBC Good Food</a> has a fantastic range. It's not a foolproof way of staying well, but a natural/healthy diet is a strong place to start.</p>
            <p><strong>Homesickness, People and Support</strong></p>
            <p>In any new circumstance, there's lots of new people. Whilst it's brilliant to be involved and start forging&nbsp;friendships, we all need the odd break from that. Mixed emotions often run high with homesickness too and long-distance relationships cause more strain than they appear to. Personally, a comfort was beginning to bond with other people, and feel less alone over time&nbsp; - credit to my amazing flat there! The welfare team and the <a href="https://www.lancaster.ac.uk/student-and-education-services/counselling-and-mental-health-service/">university support services</a> are there to help with the feelings of isolation or any other wellbeing concerns you may feel.&nbsp;</p>
            <p><strong>A Bright Future</strong></p>
            <p>University is a time of flux - everything can change. But despite that, and maybe because of it, it's a time of huge inspiration, opportunity and freedom.</p>`,
        },
    ];

    return (
        <Container>

            {articles.map((article, i) => <Entry content={article} key={i}/>)}

        </Container>
  );
}

const Card = tw.div`bg-white font-effra h-full shadow-md p-3 flex flex-row`;
const Details = tw.div`flex flex-col ml-3 overflow-x-auto`;
const Name = tw.div`font-bold pt-2`;

const Entry = ({content}) => {
    return (
        <Card>
            <Details>
                <Name>{content.title}</Name>
                <Name>{content.author}</Name>
            </Details>
        </Card>
    )
}
