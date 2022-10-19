import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      "id": 1,
      "title": "Aryan Khan Drug Case: NCB Says Shah Rukh Khan’s Son’s Case Has Many Irregularities",
      "Image": "https://static.india.com/wp-content/uploads/2022/07/Aryan-Khan-1.jpg?impolicy=Medium_Widthonly&w=700&h=467%20widht=",
      "category": "Bollywood",
      "description": "The Narcotics Control Bureau (NCB), on Tuesday in a report said that the Aryan Khan case has many irregularities, as reported by NDTV. It said that “there were several irregularities in the investigation of the drugs-on-cruise case involving Bollywood star Shah Rukh Khan’s son Aryan Khan, an internal report by the Narcotics Control Bureau (NCB) has found, flagging “suspicious behavior” on the part of seven to eight officers of the agency” “The investigation found that there were many irregularities in the case. Questions have also been raised about the intention of the officers involved in the investigation,” a source said. A Special Investigation Team or SIT set up the NCB to probe allegations of impropriety by its officers in their handling of the Aryan Khan case has sent its vigilance report to its headquarters in Delhi"
    },
    {
      "id": 51,
      "title": "Aryan Khan Drug Case: NCB Says Shah Rukh Khan’s Son’s Case Has Many Irregularities",
      "Image": "https://static.india.com/wp-content/uploads/2022/07/Aryan-Khan-1.jpg?impolicy=Medium_Widthonly&w=700&h=467%20widht=",
      "category": "bollywood",
      "description": "The Narcotics Control Bureau (NCB), on Tuesday in a report said that the Aryan Khan case has many irregularities, as reported by NDTV. It said that “there were several irregularities in the investigation of the drugs-on-cruise case involving Bollywood star Shah Rukh Khan’s son Aryan Khan, an internal report by the Narcotics Control Bureau (NCB) has found, flagging “suspicious behavior” on the part of seven to eight officers of the agency” “The investigation found that there were many irregularities in the case. Questions have also been raised about the intention of the officers involved in the investigation,” a source said. A Special Investigation Team or SIT set up the NCB to probe allegations of impropriety by its officers in their handling of the Aryan Khan case has sent its vigilance report to its headquarters in Delhi"
    },
    {
      "id": 2,
      "title": "Priyanka Chopra pays a visit to kids at the remote health camp in Kenya: 'Really difficult to hear stunted, when it comes to a child'",
      "Image": "https://static.toiimg.com/thumb/msid-94970283,width-800,height-600,resizemode-75,imgsize-31282,pt-32,y_pad-40/94970283.jpg",
      "category": "Bollywood",
      "description": "Priyanka Chopra has been a huge advocate for child rights, while working and being part of various organisations providing humanitarian and developmental aid to children worldwide. As the global UNICEF Goodwill Ambassador for child rights, the actress recently visited Kenya and shared a video from a remote health camp, where children, who were malnourished, were being tested and treated.It may not look like much but the Nangolekuruk Village outreach site is at the frontline of saving lives of young children and their caregivers in this region. From early detection of Severe Acute Malnutrition, treating life-threatening diseases like malaria and cholera, counselling mothers about nutrition, and providing water and hygiene kits, this outpost is implementing the key lifesaving initiatives in an area that is severely lacking any kind of health facility."
    },
    {
      "id": 61,
      "title": "Priyanka Chopra pays a visit to kids at the remote health camp in Kenya: 'Really difficult to hear stunted, when it comes to a child'",
      "Image": "https://static.toiimg.com/thumb/msid-94970283,width-800,height-600,resizemode-75,imgsize-31282,pt-32,y_pad-40/94970283.jpg",
      "category": "footer1",
      "description": "Priyanka Chopra has been a huge advocate for child rights, while working and being part of various organisations providing humanitarian and developmental aid to children worldwide. As the global UNICEF Goodwill Ambassador for child rights, the actress recently visited Kenya and shared a video from a remote health camp, where children, who were malnourished, were being tested and treated.It may not look like much but the Nangolekuruk Village outreach site is at the frontline of saving lives of young children and their caregivers in this region. From early detection of Severe Acute Malnutrition, treating life-threatening diseases like malaria and cholera, counselling mothers about nutrition, and providing water and hygiene kits, this outpost is implementing the key lifesaving initiatives in an area that is severely lacking any kind of health facility."
    },
    
    {
      "id": 3,
      "title": "Will makers release 'Pathaan' teaser on Shah Rukh Khan’s birthday? Here is what Twitter is saying!",
      "Image": "https://static.toiimg.com/thumb/msid-94964895,width-800,height-600,resizemode-75,imgsize-27922,pt-32,y_pad-40/94964895.jpg",
      "category": "Bollywood",
      "description": "Fans are eagerly waiting for Shah Rukh Khan’s upcoming film, ‘Pathaan’. Every little update regarding the film gets his fans super excited.The first look poster of SRK, John Abraham and Deepika Padukone was recently unveiled. Now, buzz on Twitter is that the makers will unveil the first teaser of the movie on November 2, which happens to be King Khan’s birthday."
    },
    {
      "id": 4,
      "title": "Katrina Kaif's spooky item number 'Kaali Teri Gutt' from 'Phone Bhoot' out now",
      "Image": "https://static.toiimg.com/thumb/msid-94959790,imgsize-17528,width-800,height-600,resizemode-75/94959790.jpg",
      "category": "Bollywood",
      "description": "In the spooky video of the song, actors Ishaan Khatter and Siddhant Chaturvedi could be seen performing hilarious yet energetic dance steps, Katrina on the other hand raises the temperature with her hot dancing moves in the song.In the song, the 'Raajneeti' actor could be seen in a double role.Sung by Romy and Sakshi Holkar, the song is an official Hindi remake of a popular Punjabi track 'Kali Teri Gut' from Punjabi singer Asa Singh Mastana.The makers of 'Phone Bhoot' recently unveiled the official trailer of the film which received positive responses from the audience."
    },
    {
      "id": 5,
      "title": "Janhvi Kapoor on 'Bawaal' co-star Varun Dhawan's 10 years in Bollywood: He is a Dil Se kind of guy, and has preserved his sense of innocence - Exclusive",
      "Image": "https://static.toiimg.com/thumb/msid-94961283,imgsize-3162241,width-800,height-600,resizemode-75/94961283.jpg",
      "category": "Bollywood",
      "description": "Varun Dhawan made his big Bollywood debut alongside Alia Bhatt and Sidharth Malhotra in Dharma Productions' Student of the Year 10 years ago. As the actor completes a decade in the industry, his Bawaal co-star Janhvi Kapoor tells ETimes about his rare qualities she admires.Varun Dhawan will soon be seen in Amar Kaushik's horror comedy 'Bhediya' the trailer of which was released today. A wolf bites Varun one night and after that, he develops wolf instincts slowly. Later, he turns into an actual wolf every night and becomes menacing. The film also stars Kriti Sanon as Dr Anika and it hits the theatres on November 25, 2022."
    },
    {
      "id": 6,
      "title": "Madhuri Dixit looks gorgeous in yellow saree",
      "Image": "https://static.toiimg.com/thumb/msid-94959520,imgsize-59504,width-800,height-600,resizemode-75/94959520.jpg",
      "category": "Bollywood",
      "description": "Madhuri Dixit Nene looked gorgeous in an ochre yellow saree. On Tuesday, the 'Koyla' actor shared a series of stunning pictures on social media.Taking to her Instagram handle, the 'Hum Aapke Hain Koun' actor shared pictures from a photo shoot.Alongside pictures, she wrote,Phoolon ki Rani, Baharon ki Mallika."
    },
    {
      "id": 54,
      "title": "Madhuri Dixit looks gorgeous in yellow saree",
      "Image": "https://static.toiimg.com/thumb/msid-94959520,imgsize-59504,width-800,height-600,resizemode-75/94959520.jpg",
      "category": "mix",
      "description": "Madhuri Dixit Nene looked gorgeous in an ochre yellow saree. On Tuesday, the 'Koyla' actor shared a series of stunning pictures on social media.Taking to her Instagram handle, the 'Hum Aapke Hain Koun' actor shared pictures from a photo shoot.Alongside pictures, she wrote,Phoolon ki Rani, Baharon ki Mallika."
    },
    {
      "id": 7,
      "title": "Kangana Ranaut to play Bengali theatre superstar Noti Binodini in Pradeep Sarkar directorial",
      "Image": "https://media2.bollywoodhungama.in/wp-content/uploads/2022/10/Kangana-Ranaut-to-play-Bengali-theatre-superstar-Noti-Binodini-in-Pradeep-Sarkar-directorial-1.jpg",
      "category": "Bollywood",
      "description": "Kangana Ranaut is quite busy with the shooting of her directorial, Emergency. Her next film Tejas has been moved to summer 2023. In the meanwhile, she has signed her third film already. She will be seen playing the role of one of the most iconic names in the Bengal history, Noti Binodini. She was a legendary theatre superstar who established the theatre culture in India. During a career spanning twelve years she enacted over eighty roles, which included those of Pramila, Sita, Draupadi, Radha, Ayesha, Kaikeyi, Motibibi, and Kapalkundala, among others. She was one of the first South Asian actresses of the theatre to write her own autobiography. "
    },
  {
    "id": 8,
    "title": "Ishaan Khatter and Tara Sutaria to feature in an upcoming project Nature 4 Nature, first look unveiled",
    "Image": "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Ishaan-Khatter-and-Tara-Sutaria-to-feature-in-an-upcoming-project-Nature-4-Nature-first-look-unveiled.jpg",
    "category": "Bollywood",
    "description": "Giving a brief glimpse of what the project might hold, the teaser opens the door to one's imagination by packaging two contrasting scenes together. The teaser leaves the audience baffled and intrigued as it starts with Ishaan and Tara moving about in an office setting with a gloomy look on their faces. Soon both the characters discover a door that opens to nature and teleports them away to the wilderness leaving us wondering what they are up to."
  },
  {
    "id": 9,
    "title": "Arjun Rampal signs comic caper Project Love; girlfriend Gabriella Demetriades, Mahima Makwana and Omkar Kapoor also set to star",
    "Image": "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Arjun-Rampal-signs-comic-caper-Project-Love-girlfriend-Gabriella-Demetriades-Mahima-Makwana-and-Omkar-Kapoor-also-set-to-star-1.jpg",
    "category": "Bollywood",
    "description": "Arjun Rampal signs comic caper Project Love; girlfriend Gabriella Demetriades, Mahima Makwana and Omkar Kapoor also set to star Arjun Rampal will next star in Project Love with his girlfriend Gabriella Demetriades, Mahima Makwana and Omkar Kapoor.ByBollywood Hungama News Network -October 15, 2022 - 6:47 PM IST Bollywood actor Arjun Rampal has been receiving several offers ever since his work in The Rapist movie. The film received appreciation at several film festivals. Now, it is being reported that the actor has been roped in to headline the upcoming comic caper, Project Love. The film will also star Antim: The Final Truth actress Mahima Makwana and Pyaar Ka Punchnama 2 actor Omkar Kapoor. "
  },
  {
    "id": 10,
    "title": "This is how Kriti Sanon managed to shoot 'Bhediya' and 'Adipurush' simultaneously",
    "Image": "https://static.toiimg.com/thumb/msid-94967712,width-800,height-600,resizemode-75,imgsize-22098,pt-32,y_pad-40/94967712.jpg",
    "category": "Bollywood",
    "description": "Krtiti Sanon is currently on a roll with some very interesting projects in her kitty. The actress, who launched the trailer of her upcoming film, ‘Bhediya’, revealed that she shot for the film simultaneously with Om Raut’s ‘Adipurush'.Spilling some beans on the same, the actress said she is fortunate to get such a wide range of characters. Although it was difficult to jump from one film to the next, having good directors really helped her. According to her, good directors take care of their actors."
  },
  {
    "id": 11,
    "title": "Billie Eilish Sparks Dating Rumours With Jesse Rutherford. Fans Share Videos From Their Outings",
    "Image": "https://c.ndtvimg.com/2022-10/rrsstsgo_billie-_625x300_18_October_22.jpg",
    "category": "Hollywood",
    "description": "American Grammy-winning singer-songwriter Billie Eilish has sparked dating rumors with Jesse Rutherford after the pair were spotted by fans on not one, but two recent nighttime outings in Los Angeles. E! News reported that social media users first spotted the two dining together at the vegan restaurant, Crossroads Kitchen, on Oct. 13, according to photos obtained by TMZ. Two days later, a TikTok user shared a clip of Billie and Jesse walking together and briefly holding hands while at Universal Studios' Halloween Horror Nights."
  },
  {
    "id": 55,
    "title": "Billie Eilish Sparks Dating Rumours With Jesse Rutherford. Fans Share Videos From Their Outings",
    "Image": "https://c.ndtvimg.com/2022-10/rrsstsgo_billie-_625x300_18_October_22.jpg",
    "category": "mix",
    "description": "American Grammy-winning singer-songwriter Billie Eilish has sparked dating rumors with Jesse Rutherford after the pair were spotted by fans on not one, but two recent nighttime outings in Los Angeles. E! News reported that social media users first spotted the two dining together at the vegan restaurant, Crossroads Kitchen, on Oct. 13, according to photos obtained by TMZ. Two days later, a TikTok user shared a clip of Billie and Jesse walking together and briefly holding hands while at Universal Studios' Halloween Horror Nights."
  },
  {
    "id": 12,
    "title": " Selena Gomez And Ex-Boyfriend Justin Bieber's Wife Hailey Pose For First Pic Together",
    "Image": "https://c.ndtvimg.com/2022-10/4lkafg28_selena-gomez_625x300_17_October_22.jpg",
    "category": "Hollywood",
    "description": "In a surprise show of unity, Justin Bieber's ex Selena Gomez and his wife Hailey Bieber put an end to all the perceived drama between them by recently posing together at a starry event in Los Angeles, four years after the model married the 'Baby' hitmaker."
  },
  {
    "id": 13,
    "title": "Britney Spears Claims Her Mom Lynne Once Slapped Her So Hard For Partying Till 4 AM ",
    "Image": "https://c.ndtvimg.com/2022-10/blcvl8ag_-britney-spears_625x300_12_October_22.jpg",
    "category": "Hollywood",
    "description": "Britney Spears, in her latest Instagram entry, claimed that her mother Lynne Spears, once slapped her. Sharing a clip of Jennifer Lopez slapping Jane Fonda from the film Monster-In-Law, Britney Spears wrote: I swear I've never slapped anyone my whole life1 I would give anything to see what it feels like. Just saying! The first time I ever got slapped was the one night Paris (Hilton) and Lindsay (Lohan) dropped me off at my beach house with my babies. The singer who has sons Jayden James and Sean Preston with ex-husband Kevin Federline, added in her post: Kevin left me at that point, so I had a small beach house and my mother was watching Jayden and Preston... Yes I partied till like 4 am and my mother was p*****."
  },
  {
    "id": 62,
    "title": "Britney Spears Claims Her Mom Lynne Once Slapped Her So Hard For Partying Till 4 AM ",
    "Image": "https://c.ndtvimg.com/2022-10/blcvl8ag_-britney-spears_625x300_12_October_22.jpg",
    "category": "footer2",
    "description": "Britney Spears, in her latest Instagram entry, claimed that her mother Lynne Spears, once slapped her. Sharing a clip of Jennifer Lopez slapping Jane Fonda from the film Monster-In-Law, Britney Spears wrote: I swear I've never slapped anyone my whole life1 I would give anything to see what it feels like. Just saying! The first time I ever got slapped was the one night Paris (Hilton) and Lindsay (Lohan) dropped me off at my beach house with my babies. The singer who has sons Jayden James and Sean Preston with ex-husband Kevin Federline, added in her post: Kevin left me at that point, so I had a small beach house and my mother was watching Jayden and Preston... Yes I partied till like 4 am and my mother was p*****."
  },
  {
    "id": 14,
    "title": "Emmys 2022: Zendaya Wins Best Actress For Euphoria - Again ",
    "Image": "https://c.ndtvimg.com/2022-09/2mte0spo_ze_625x300_13_September_22.jpg",
    "category": "Hollywood",
    "description": "Emmys 2022: Zendaya Wins Best Actress For Euphoria - AgainZendaya with her award. (Pic credit: AFP)Zendaya has won yet another Emmy for her performance in the celebrated series 'Euphoria'!On Tuesday, Zendaya bagged the Emmy award for 'Lead Actress in a Drama' for her portrayal of Rue Benett in Euphoria. This is Zendaya's second Emmy award. She won her first in 2020 for Euphoria."
  },
  {
    "id": 15,
    "title": "Ghost of Marilyn Monroe Was With Me, Claims 'Blonde' Actor Ana de Armas",
    "Image": "https://c.ndtvimg.com/2022-07/plvl6qr_blonde-trailer-_625x300_29_July_22.jpg",
    "category": "Hollywood",
    "description": "The actor who is playing Marilyn Monroe in the Netflix film Blonde has claimed that the ghost of the Hollywood icon interfered with the filming. Ana de Armas made the claim while speaking to the media at the Venice International Film Festival. According to Netflix, this fictional portrait of Marilyn Monroe boldly reimagines the tumultuous private life of the Hollywood legend - and the price she paid for fame.Ms De Armas, who was nominated for the Golden Globe award for Knives Out, said she felt close to the Hollywood legend during the shoot. The 34-year-old further claimed if Monroe's ghost wasn't thrilled with the way they were portraying her on video, it would let them know, as per a report in People Magazine."
  },
  {
    "id": 16,
    "title": "The One Where Jennifer Aniston And David Schwimmer Are Trending Once Again",
    "Image": "https://c.ndtvimg.com/2022-09/b2f5vqd8_jennifer-aniston_625x300_08_September_22.jpg",
    "category": "Hollywood",
    "description": "If you could just 'pivot' your attention a little (IYKYK), we would like to interest you in why F.R.I.E.N.D.S stars Jennifer Aniston (Rachel) and David Schwimmer aka Ross are trending once again. It all started when the actress simply shared a picture of herself with a product from her haircare brand and she simply wrote: Something's coming. A few hours later, Jennifer Aniston's F.R.I.E.N.D.S co-star David Schwimmer hilariously recreated the picture with the product. Tagging the actress, he wrote: Jennifer Aniston - a towel I hope? Replying to which she wrote: Schwim? Trying to steal my thunder. The Internet, of course, could not keep calm after this Instagram exchange. You both are not on a break, wrote a fan, quoting a dialogue which has divided fans for a few decades and how. You guys! My heart, added another one. OH. MY. GOD, (it's ok if read in Janice's voice) read another comment."
  },
  {
    "id": 17,
    "title": "Amber Heard Spotted With Friend Who Was Barred From Johnny Depp Trial",
    "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/FILMFESTIVAL-CANNES-AWARDS-354_1653794715337_1653794733888.JPG",
    "category": "Hollywood",
    "description": "Hollywood star Amber Heard was spotted in Israel last week, dining at a Tel Aviv cafe with one of her staunchest supporters, journalist Eve Barlow, who was barred from testifying in the Johnny Depp defamation trial. According to Fox News, the 36-year-old actor was with Barlow on Aug. 1 sitting at a table outside, according to online reports. After Depp's attorneys discovered Barlow tweeting and texting from the front row, which is reserved for attorneys, in the Fairfax, Virginia courtroom in April, Barlow was expelled.As a result of Barlow disobeying a court order banning phone use, the Pirates of the Caribbean star's attorneys were successful in their motion to have Barlow permanently removed from the case."
  },
  {
    "id": 18,
    "title": "Jason Momoa Involved In Head-On Collision With Motorcyclist, No Serious Injuries",
    "Image": "https://c.ndtvimg.com/2022-07/9olec178_jason-momoa-afp-file-650_625x300_25_July_22.jpg",
    "category": "Hollywood",
    "description": "Actor Jason Momoa's car had a head-on collision with a motorcyclist over the weekend, but no one was seriously injured. According to Metro, the Aquaman actor was driving on Old Topanga Road near Calabasas in California on Sunday when the collision happened. A video of the incident has also surfaced on the internet, which shows Momoa walking away from the site of the accident while the paramedics tend to motorcyclist behind him. The exact cause of the crash is being investigated, according to the police.California Highway Patrol said in a statement that the accident took place around 11am and identified the motorcyclist as 21-year-old Vitaliy Avagimyan. It further said that the biker jumped lanes while going round a curve and smashed into Momoa's car head-on"
  },
  {
    "id": 19,
    "title": "I'm Not Getting Out By Any Means: Brad Pitt On Retirement",
    "Image": "https://c.ndtvimg.com/2022-07/3fddmkeo_brad-pitt_625x300_19_July_22.jpg",
    "category": "Hollywood",
    "description": "Brad Pitt scotched talk of imminent retirement as he travelled to Paris for the premiere of his Jackie Chan-inspired action caper Bullet Train. The 58-year-old had worried fans that his acting days may be numbered after a GQ interview last month in which he said he was in the last semester of his career. But Pitt told AFP: I'm not getting out by any means.' It seems that might have been taken as a statement of retirement. That's not what I was saying, he said.I'm over that hump of middle age and so I'm looking at that last leg... How do I want to spend that time? At my age, you've made enough mistakes... now there's a comfort in applying that kind of wisdom."
  },
  {
    "id": 20,
    "title": "Emmys 2022: Why Dwayne Johnson Refused To Host The Awards This Year",
    "Image": "https://c.ndtvimg.com/2022-07/4k1tjtjo_the-rock_625x300_15_July_22.jpg",
    "category": "Hollywood",
    "description": "Hollywood star Dwayne Johnson aka The Rock has finally revealed the reason why he turned down an offer to host this year's Emmy Awards ceremony. According to Page Six, Johnson was approached by the primetime TV award show's bosses to host the 74th annual event, set to take place on September 12, but ultimately declined, reported Entertainment Tonight.It was just schedule. I was really, truly honored when they came to me and asked, but it was just a scheduling thing. That's all. That's really what it comes down to, the actor told the outlet."
  },
  {
    "id": 21,
    "title": "SpaceX aims to put 350 Mbps satellite internet on planes with Starlink Aviation",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA138JBW.img?w=768&h=503&m=6",
    "category": "Technology",
    "description": "SpaceX has revealed the official details of its Starlink satellite internet service for aviation, and it promises to deliver speeds of up to 350 Mbps for each airplane. Delta Chief Executive Ed Bastian admitted earlier this year that the airline conducted exploratory tests of Starlink's internet technology for its planes. Hawaiian Airlines also announced that it will start deploying Starlink internet with select aircraft in 2023 around the same time. Shortly after that and after launching Starlink for RVs, the Federal Communications Commission authorized the company to provide satellite internet services to vehicles."
  },
  {
    "id": 56,
    "title": "Meta's AI translator can interpret unwritten languages",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139r4E.img?w=768&h=432&m=6",
    "category": "mix",
    "description": "As part of Meta’s Universal Speech Translator (UST) program which is working to develop real-time speech-to-speech translation so that Metaverse denizens can more easily interact (read: sexually harass one another). As part of this project, Meta researchers looked at Hokkien, an unwritten language spoken throughout Asia’s diaspora and one of Taiwan’s official languages.Machine learning translation systems typically require extensive labelable examples of the language, both written and spoken, to train on — precisely what unwritten languages like Hokkien don’t have. To get around that, “we used speech-to-unit translation (S2UT) to convert input speech to a sequence of acoustic units directly in the path previously pioneered by Meta,”"
  },
  {
    "id": 52,
    "title": "Meta's AI translator can interpret unwritten languages",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139r4E.img?w=768&h=432&m=6",
    "category": "technology",
    "description": "As part of Meta’s Universal Speech Translator (UST) program which is working to develop real-time speech-to-speech translation so that Metaverse denizens can more easily interact (read: sexually harass one another). As part of this project, Meta researchers looked at Hokkien, an unwritten language spoken throughout Asia’s diaspora and one of Taiwan’s official languages.Machine learning translation systems typically require extensive labelable examples of the language, both written and spoken, to train on — precisely what unwritten languages like Hokkien don’t have. To get around that, “we used speech-to-unit translation (S2UT) to convert input speech to a sequence of acoustic units directly in the path previously pioneered by Meta,”"
  },
  {
    "id": 22,
    "title": "Webb Telescope Shows the Pillars of Creation Like You’ve Never Seen Them Before",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139jnD.img?w=768&h=371&m=6",
    "category": "Technology",
    "description": "The Webb Space Telescope has just imaged what might be its most iconic target yet: the Pillars of Creation, a monumental arm of the Eagle Nebula.The pillars are so-named for their magnitude. They are light-years-long tendrils of gas and dust that reach out like the grand fingers of a cosmic hand. The recent image, taken by Webb’s Near-Infrared Camera, or NIRCam, highlights the bright red sites of new star births.Small red dots on the edges of the pillars are baby stars—only a few hundred thousand years old, according to the Webb team. The red, lava-like streaks in the clouds are ejections from stars being formed. These nascent gas balls send off jets of material that strike the gas in the pillars, causing energetic hydrogen molecules in the system to glow."
  },
  {
    "id": 63,
    "title": "Webb Telescope Shows the Pillars of Creation Like You’ve Never Seen Them Before",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139jnD.img?w=768&h=371&m=6",
    "category": "footer3",
    "description": "The Webb Space Telescope has just imaged what might be its most iconic target yet: the Pillars of Creation, a monumental arm of the Eagle Nebula.The pillars are so-named for their magnitude. They are light-years-long tendrils of gas and dust that reach out like the grand fingers of a cosmic hand. The recent image, taken by Webb’s Near-Infrared Camera, or NIRCam, highlights the bright red sites of new star births.Small red dots on the edges of the pillars are baby stars—only a few hundred thousand years old, according to the Webb team. The red, lava-like streaks in the clouds are ejections from stars being formed. These nascent gas balls send off jets of material that strike the gas in the pillars, causing energetic hydrogen molecules in the system to glow."
  },
  {
    "id": 22,
    "title": "The 2023 Porsche 911 Carrera T Slots between the Carerra and Carrera S ",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139ayL.img?w=768&h=432&m=6",
    "category": "Technology",
    "description": "The Carrera T is a Sweet Spot in the 911 Lineup .With prices beginning at $118,050, the recently released Carrera T sits between the standard Carrera and the Carrera S. However, it is not the first time Porsche introduced the trim to the 911 lineup. The 2023 Carrera T is a rear-wheel-drive coupe with a seven-speed manual gearbox, no rear seats, and lesser sound-deadening materials. Porsche also added thinner window glasses and a smaller battery to reduce the curb weight by 100 pounds. As a result, the Carrera T weighs 3,254 pounds and is the lightest Carrera to date. But if you want the eight-speed PDK and the rear seats, Porsche will install them at no cost.."
  },
  {
    "id": 23,
    "title": "LISTEN: How to cash in on the marijuana industry",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1392xk.img?w=768&h=512&m=6",
    "category": "Technology",
    "description": "Michael Palumbo, Founder of MJP Capital and Author of the book Calculated Risk here in Chicago, joins us to discuss stock market volatility and how to cash in on the marijuana industry."
  },
  {
    "id": 24,
    "title": "Royal Enfield with impressive 145% sales growth by September 2022",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA138ZGM.img?w=768&h=576&m=6",
    "category": "Technology",
    "description": "Sales at Royal Enfield have increased by 145% in September 2022. The Indian manufacturer has been gaining a lot of momentum this year, with sales figures in September 2022 reaching an impressive 82,097 units in the global market. This is a huge jump when compared to the 33,529 motorbikes sold in September 2021. Looking closer at the Indian market, Royal Enfield sold 73,646 units in September 2022, up from 21,233 units during the same period in 2021. As such, in the Indian market alone, the manufacturer has witnessed a growth of 170%. On the other hand, the number of motorbikes exported by Royal Enfield increased from 6,296 in September 2021 to 8,451 in September 2022. The brand's impressive sales figures are probably due to the recent launches of motorbikes like the Scram 411 and Hunter 350, which have received very good reviews since going on sale."
  },
  {
    "id": 25,
    "title": "Tear in Microsoft Azure Service Fabric can give attackers full admin privileges",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1391m7.img?w=768&h=512&m=6",
    "category": "Technology",
    "description": "Orca Security disclosed the bug, and older versions remain vulnerable. A proof-of-concept exploit has been published detailing a spoofing vulnerability in Microsoft Azure Service Fabric. The flaw allows attackers to gain full administrator permissions and then perform any manner of malicious activity.Orca Security researcher Lidor Ben Shitrit found the bug and reported it to Microsoft, which released a partial fix for CVE-2022-35829 in its October Patch Tuesday. The vulnerability received a 6.4 CVSS score.There are two versions of Service Fabric Explorer. All new development focuses on version 2 (SFXv2), so Microsoft doesn't fix any holes in the older version, SFXv1, unless it's a critical bug. That means releases 8.1.316 and below remain vulnerable to exploitation. "
  },
  {
    "id": 26,
    "title": "Password usage is falling worldwide - but that might not be a big problem",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12WdPv.img?w=768&h=425&m=6",
    "category": "Technology",
    "description": "Passwords still popular The study found that, when logging into financial services, work computers and accounts, social media, streaming services, or smart home devices, people are more likely to use biometrics, or other convenient forms of authentication.However, despite the drop, passwords are still the number one method of online authentication, despite the headaches they cause. Seven in ten (70%) individuals have had to recover at least one password in any given month. "
  },
  {
    "id": 27,
    "title": "First of two World of Warcraft: Dragonflight pre-patches drops next week",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA138R3R.img?w=768&h=432&m=6",
    "category": "Technology",
    "description": "Phase one of the pre-patch goes live next week, on Oct. 25. This phase focuses on features that will be free to all WoW players. The talent system is getting a revamp, with talent trees being reintroduced for the first time since 2012’s Mists of Pandaria expansion. The new user interface will go live, with a modernized look and new customization features, and new accessibility features will be added. New class and race combinations will become possible as the rogue, priest and mage classes are made available to all races for the first time. And there’ll be a new ranked player-versus-player mode in the form of Rated Solo Shuffle."
  },
  {
    "id": 28,
    "title": "The fate of Bethesda's Fallout games was decided with a sticky note",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA138vrL.img?w=768&h=432&m=6",
    "category": "Technology",
    "description": "In a recent video titled 'Fallout Retrospective - A New Generation', a number of developers who worked on Fallout 3 shared their memories of working on the game and told the story of how the Starfield studio ended up taking over the Fallout series. In the video, Bethesda director Todd Howard explained how Fallout found its new developer, saying that it all started with a sticky note.  After explaining that Bethesda had its sights set on acquiring the Fallout franchise, Howard said: That original world always spoke to us. So when we thought about what we really, really wanted to do next, it was 'can you imagine if we got to do Fallout? No one's been doing it for a long time - is there any possibility?"
  },
  {
    "id": 29,
    "title": " Coca-Cola Byte Is Now Available. Here's Where to Buy Coke's New Pixel Drink",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139bxr.img?w=768&h=445&m=6",
    "category": "Technology",
    "description": "Here's how my Coke Byte taste test went . I received a tall, slender can of Coca-Cola's new Byte Coke and upon opening it, it had quite a loud fizz -- much more carbonation than the Starlight Coke. This one has a brown hue like a regular Coke Zero (I expected it to be purple), with a very sweet smell. When I took a sip of the Coke Byte, the fizziness was so strong that it reminded me of when I would eat Pop Rocks as a kid. Maybe that's what pixels taste like? The flavor was soft but still tasted like a Coke Zero. I could taste the sweetener used to replace the sugar... possibly Splenda? "
  },
  {
    "id": 30,
    "title": "Persona 5 Royal is landing on Game Pass for PC day one",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1378hn.img?w=768&h=432&m=6&x=592&y=63&s=55&d=55",
    "category": "Technology",
    "description": "Running is a fulfilling hobby, but it can be a tough one. If you don’t run, you may not realize your partner or close friend is facing a whole rollercoaster of emotions every time they go out (from elation to mind-numbing boredom), or that their pastime really does a number on their body—bruised toenails, anyone? What’s clear, though, is that they’re working hard, and they would probably appreciate some support from home. So here are some suggestions from Redditors on the r/running sub."
  },
  {
    "id": 31,
    "title": "This Tomato Tart Is a Fitting Monument to Your Last Summer Tomato",
    "Image": "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/37cb56f6fb6b2635f2f041d1d45ab210.jpg",
    "category": "Fitness",
    "description": "Only an icy heart is unsentimental about the last summer tomato. Mine was a giant orange Brandywine that I let hang onto the vine far too long, and its destiny was a tomato tart.I’ve spent the summer making these tarts in every variation I could think of. Pie crust, puff pastry, different cheeses. They were ideal for every situation: a single or pair of friends coming over for dinner, a potluck, a barbecue, a beach picnic, or a housewarming gift."
  },
  {
    "id": 32,
    "title": "Taking 10K steps may be associated with reduction in risk of cancer, cardiovascular disease deaths: study",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/10/720/405/istock-walking.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "Using statistical modeling, researchers said that more daily steps were associated with a lower risk of mortality, as well as lower incident disease. Steps performed at a higher cadence may be associated with additional risk reduction, particularly for incident disease, the study noted.Every 2,000 steps showed that the risk for premature death could fall by 8%-11%.Limitations to the study include that the design of the study precludes the authors from making causal claims, that the step-count data was collected only once at the starting point of the study, that covariates were not measured at accelerometer-wear date, that some potential for reverse causation may still exist, that the UK Biobank had a very low response rate and participants were not representative of the overall UK population, that residual or unmeasured confounding may still be present and that the relative energy cost of walking and other daily activities is higher in older adults. "
  },
  {
    "id": 33,
    "title": " Apples by the numbers: 10 facts about the edible fruit",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/03/720/405/iStock-484037465.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "7,500 varieties – There are 7,500 varieties of apples grown throughout the world, according to the University of Illinois Extension, an environment and agriculture school for the University of Illinois at Urbana-Champaign.7,500 varieties – There are 7,500 varieties of apples grown throughout the world, according to the University of Illinois Extension, an environment and agriculture school for the University of Illinois at Urbana-Champaign.7,500 varieties – There are 7,500 varieties of apples grown throughout the world, according to the University of Illinois Extension, an environment and agriculture school for the University of Illinois at Urbana-Champaign.The University of Minnesota Extension, a science-focused agriculture and livestock school, reports that dwarf apple trees take two to three years to bear fruit while standard-size apple trees take up to eight years to bear fruit."
  },
  {
    "id": 34,
    "title": "Eating pumpkin may help you look younger and lose weight, experts say",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/10/720/405/iStock-1276814339.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "Pumpkins can help your eyesight Pumpkins are a high source of vitamin A, which plays a significant role in eye health, according to experts. Christie Gagnon, a registered dietitian at the food and lifestyle blog Hoorah to Health, told Fox News Digital that pumpkins are packed full of vitamin A, which is a nutrient that can lower the risk of developing cataracts, a common cause of blindness. Vitamin A also helps promote good eyesight, according to Michelle Rauch, a registered dietitian at The Actors Fund Home, which is an assisted-living facility in Englewood, New Jersey."
  },
  {
    "id": 35,
    "title": "Can you take prenatal vitamins when you're not pregnant?",
    "Image": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/09/720/405/iStock-1357662733.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "Taking prenatal vitamins when not pregnant is a regimen some women swear by for health and beauty benefits, but whether the technique is a safe thing to do is not clear-cut.Taking prenatal vitamins when not pregnant is a regimen some women swear by for health and beauty benefits, but whether the technique is a safe thing to do is not clear-cut.The Centers for Disease Control and Prevention recommends all women of reproductive age take 400 micrograms of folic acid each day, but the health agency doesn't say the daily serving has to come from a prenatal supplement.The Centers for Disease Control and Prevention recommends all women of reproductive age take 400 micrograms of folic acid each day, but the health agency doesn't say the daily serving has to come from a prenatal supplement."
  },
  {
    "id": 37,
    "title": "Additional exercise potentially linked to longer lifespans and lower death rates: study",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/11/720/405/iStock-weights.jpg?ve=1&tl=1",
    "category": "mix",
    "description": "Researchers behind the study documented 47,596 deaths during its observation.The nearly maximum association with lower mortality was achieved by performing ≈150 to 300 min/wk of long-term leisure-time [vigorous physical activity], 300 to 600 min/wk of long-term leisure-time [moderate physical activity], or an equivalent combination of both."
  },
  {
    "id": 36,
    "title": "Keto diet: What is it and how many carbs do I eat per day?",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/01/720/405/Keto-diet-2-iStock.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "The popular keto diet is a low-carb, high-fat diet that puts your body into ketosis, the process in which your body burns fat, rather than carbohydrates, for fuel.By drastically reducing the intake of carbs and replacing those carbs with fat, people on a keto diet plan force their bodies into ketosis, which makes their bodies incredibly efficient at burning fat for energy,The website says there are at least four versions of the keto diet that sometimes allow for more carbs or protein at specific times. The standard keto diet is made up of 70% fat, 20% protein and 10% carbs"
  },
  {
    "id": 37,
    "title": "Additional exercise potentially linked to longer lifespans and lower death rates: study",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/11/720/405/iStock-weights.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "Researchers behind the study documented 47,596 deaths during its observation.The nearly maximum association with lower mortality was achieved by performing ≈150 to 300 min/wk of long-term leisure-time [vigorous physical activity], 300 to 600 min/wk of long-term leisure-time [moderate physical activity], or an equivalent combination of both."
  },
  {
    "id": 38,
    "title": "Balsamic vinegar and soda water TikTok trend gets dubbed 'healthy Coke': Experts chime in",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/06/720/405/iStock-1336644374.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "Rhonda Kalasho, a Los Angeles-based doctor of dental surgery and CEO of the TruGlo Modern Dental practice in Beverly Hills, told Fox News Digital that vinegar contains acetic acid, which has an acidity PH level of about 2 to 3. The reason why cavities develop on teeth is simply because the acidic environment created by the bacteria in the mouth breaks down carbohydrates and sugarsCarbonation or carbonated drinks actually are more acidic, so if you carbonate vinegar, you create even more of an acidic environment in the mouth when consuming it.This acidity weakens enamel making it a lot more prone to staining, tooth decay and breakage."
  },
  {
    "id": 39,
    "title": "CDC tells public to not 'kiss or snuggle' chickens, ducks, backyard poultry amid salmonella outbreaks",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/06/720/405/iStock-1147364962.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "The U.S. Centers for Disease Control and Prevention (CDC) wants poultry owners to know that they should refrain from showing affectionate direct contact with feathery friends as salmonella infections rise.The U.S. Centers for Disease Control and Prevention (CDC) wants poultry owners to know that they should refrain from showing affectionate direct contact with feathery friends as salmonella infections rise.Salmonella is a bacterium that’s transmitted through fecal-oral contact and often causes food poisoning. Infections in humans typically occur when a person comes into contact with an animal or object that's been contaminated with fecal matter, according to the CDC."
  },
  {
    "id": 40,
    "title": "Prediabetic young adults might have higher heart attack risk: Report",
    "Image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/02/720/405/Heart-Health-Hands.jpg?ve=1&tl=1",
    "category": "Fitness",
    "description": "New research from the American Heart Association (AHA) has found a potential link between prediabetes and heart attacks.The cardiovascular health nonprofit published a news release about its preliminary findings on Monday, May 16, and noted that a full paper will be published in a peer-reviewed journal in the near future.Prediabetes, if left untreated, can significantly impact health and can progress to Type 2 diabetes, which is known to increase a person's risk for cardiovascular disease.The AHA analyzed health records from the National Inpatient Sample – a public hospitalization database. Researchers reportedly found that 7.8 million heart attack hospitalizations from 2018 were related to young adults between the ages of 18 and 44.Prediabetic young adults, who are defined as having blood sugar levels that are higher than normal but not high enough for a diagnosis of Type 2 diabetes, are 1.7 times more likely to be hospitalized for a heart attack compared to their non-prediabetic peers, according to the AHA’s research."
  },
  {
    "id": 41,
    "title": "McDonald’s Is Selling Krispy Kreme Donuts — But Only in This State",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139aob.img?w=768&h=432&m=6",
    "category": "Food",
    "description": "Krispy Kreme Doughnuts will soon be sold under the Golden Arches in a state best known for its fried chicken — and Wall Street is lovin’ it.On Monday, Charlotte-based Krispy Kreme announced that McDonald’s USA will begin serving Krispy Kreme doughnuts at nine Louisville, Kentucky-area restaurants during a limited test run that begins on Oct. 26. The doughnuts will be available all day for in-restaurant and drive-thru service at participating test locations while supplies last. Customers can order them individually or enjoy six-packs of Original Glazed and other flavors.This is our first partnership with McDonald’s in the U.S. as we constantly look for new ways to increase access to fresh doughnuts through our delivered fresh daily network."
  },
  {
    "id": 42,
    "title": "Slow Cooker Creamy Chicken",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12JPhh.img?w=683&h=1024&m=6",
    "category": "Food",
    "description": "This super easy slow cooker creamy chicken recipe is the perfect creamy Italian chicken. It's made in the slow cooker which does all the hard work for you! Try out this simple creamy chicken in the slow cooker. You can serve it over noodles, rice, or on sandwiches if you like! The possibilities are endless and it's a great recipe to prep in advance for lunches and dinners throughout the week.This is a truly simple dinner recipe that everyone will love. It's indulgent, creamy, packed with flavor, and wholesome ingredients. My family loves when this recipe is on our meal plan for the week. The leftovers are great too!You can find the full amounts in the recipe card at the bottom of the post but here's the ingredients you will be using for this Crockpot creamy chicken recipe:Boneless, skinless chicken breasts Creamy Italian salad dressing Salt & pepperGarlic powder Parmesan cheese, shredded Cream cheese Pasta Chicken broth "
  },
  {
    "id": 43,
    "title": "'Healthy' Or 'Diet' Foods You Should Probably Stop Eating",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12s3xc.img?w=800&h=415&q=60&m=2&f=jpg",
    "category": "Food",
    "description": "'Healthy' Or 'Diet' Foods You Should Probably Stop Eating If you’re trying to eat a healthy, balanced diet, you’re probably checking the labels on the foods at the grocery store before you buy. Labels like “gluten-free, organic, and “fat-free” are often assumed to mean healthy. But there are a lot of labels used on “health” foods that are very misleading.o matter what a food says on the front of the package, it is always important to turn it over and read the nutrition facts panel and the ingredients. Sometimes a product may seem like the smart choice, but then you find out it has too much added sugar, or it contains little or no nutrients, such as fiber or protein, that would actually provide health benefits.Diet or healthy foods may actually have more junk added in to replace ingredients taken out."
  },
  {
    "id": 44,
    "title": "Want a Lean Body for Good? Adopt These 8 Eating Habits",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA13975t.img?w=800&h=415&q=60&m=2&f=jpg",
    "category": "Food",
    "description": "Most Americans do not have enough fiber in their diet, according to Juliana Tamayo, MS, RD, LDN, who is a clinical dietitian at FitnessClone.Fiber comes in many forms, from vegetables and fruits to legumes and whole grains.Fiber can not only help your gastrointestinal tract stay healthy and regular, but it can also boost immunity and help remove cholesterol from your body. Because most fad diets eliminate carbs, they also remove fiber, which can cause problems including constipation, indigestion, fatigue, deficiencies in certain vitamins, and even poor immunity.While fiber has a lot of important health benefits, Tamayo notes that it's helpful for weight loss because it keeps you feeling full for longer, thereby preventing overeating. Aim to consume at least 21–25 grams of fiber daily if you're a woman and 30–38 grams if you're a man.Here are just a few high-fiber foods to consider adding to your diet: Berries Apples Broccoli  Brussels sprouts Bran flakes Brown rice Oatmeal Black beansLentils"
  },
  {
    "id": 45,
    "title": "18 Spooky Secret Menu Starbucks Drinks You’ll Crave This Halloween",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12Ag8V.img?w=800&h=415&q=60&m=2&f=jpg",
    "category": "Food",
    "description": "It's not Halloween without It's the Great Pumpkin, Charlie Brown! Celebrate with a viewing of the classic Peanuts movie and sip on this latte at a Great Pumpkin Halloween watch party!Ask for a Pumpkin Spice Latte, then request for half the pumpkin sauce to be replaced with toffee nut syrup. You can also change the base to a non-dairy base if needed. Keep in mind you can only get this as long as the PSL is available, so hurry!"
  },
  {
    "id": 46,
    "title": "64 Fall Appetizers That Are So Perfect for Fall Dinner Parties",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMpxmO.img?w=800&h=415&q=60&m=2&f=jpg",
    "category": "food",
    "description": "There’s a lot that goes into planning the perfect dinner or party. If you’re planning a fall dinner, Thanksgiving feast or any other occasion, you’ve probably thought a lot about what you’ll serve for the main course, and you might even have some seasonal fall cocktails or healthy fall recipe pairings ready to go. But before all of that, there are the appetizers to consider and we’ve got plenty of ideas for delicious fall appetizers and finger foods guests are sure to love. From quick and easy dips to elegant puff pastries topped with all sorts of seasonal goodies, everyone will be reaching for more!A delicious appetizer is what sets the course for the rest of your meal, so if you’re having trouble narrowing it down to just one or two, consider what else you’ll be munching on that evening (perhaps a healthy fall salad before the main course). Many of these appetizers can be prepped ahead of time, giving you plenty of time to mingle with everyone. Plus, making appetizers in advance means that your kitchen will be free for prepping other dishes like seasonal fall dessert — the perfect sweet treat after dinner!Whether you’re cooking for the whole crew or making a dinner for two at home, these fall appetizer recipes are sure to be a hit."
  },
  {
    "id": 47,
    "title": "“Dirty” cows are destroying the Amazon rainforest",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA138IWN.img?w=768&h=432&m=6",
    "category": "Food",
    "description": "​On paper, the Brazilian Amazon is one of the most protected ecosystems on the planet. There are thousands of protected areas, in addition to rules that safeguard forests on private lands.More importantly, big meatpacking companies that buy cattle — the largest driver of deforestation, by far, in the Amazon — committed more than a decade ago to only buy cattle from land without forest loss. This commitment was supposed to prevent any additional losses.Yet year after year, satellites that monitor changes in forest cover find the same thing: The Amazon is shrinking. Between August 1, 2018, and July 31, 2021, more than 34,000 square km (8.4 million acres) disappeared from the Brazilian Amazon. That’s an area larger than the entire nation of Belgium, and a 52 percent increase compared to the previous three years.It doesn’t add up. Assuming satellites don’t lie, someone is hiding deforestation.Over the last decade, scientists and environmental advocates have begun to uncover those missing hectares, and their research points to a concerning practice in the beef industry:cattle laundering."
  },
  {
    "id": 48,
    "title": "Sesame Garlic Ramen Noodles Recipe",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139kCl.img?w=768&h=431&m=6",
    "category": "Food",
    "description": "We crave flavorful noodles. You know the ones -- the sticky, sweet noodles that are ideal for slurping. If you do too, this is the recipe for you.Recipe developer and health coach Miriam Hahn brings us this recipe for sesame garlic ramen noodles. The best part about this meal is that it's a quick one, meaning you can go from simply craving to eating in under 15 minutes. All you need are the noodles and a handful of ingredients to make the sauce and you will be slurping in no time.I make these super frequently! They are super easy and the ingredients are pantry staples I always have on hand. They are great for lunch or dinner! She notes, If you want to make these ramen noodles a complete meal you can add in some cooked chicken, fish, tofu, or tempeh. Edamame works well here too."
  },
  {
    "id": 49,
    "title": "Recipe for 'Egg Bun Steak Sliders' Will Be the Highlight of Any Gathering",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA138AIK.img?w=768&h=513&m=6",
    "category": "Food",
    "description": "We’ve never witnessed someone create steak sliders with eggs as buns. Our minds were blown because people eat steak and eggs often, but not in this way. We love the idea because it helps cut carbs and offers plenty of protein. Plus, watching his cook outside in nature made the experience more memorable. We’re glad to see a cook with a more natural background which includes an adorable dog.We’ve never witnessed someone create steak sliders with eggs as buns. Our minds were blown because people eat steak and eggs often, but not in this way. We love the idea because it helps cut carbs and offers plenty of protein. Plus, watching his cook outside in nature made the experience more memorable. We’re glad to see a cook with a more natural background which includes an adorable dog."
  },
  {
    "id": 50,
    "title": "Bacon Cheeseburger Slider Bake",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11k02M.img?w=768&h=768&m=6",
    "category": "Food",
    "description": "created this dish to fill two pans because these cheeseburger sliders disappear fast. Just cut the slider burgers recipe in half if you want to make only one batch. —Nick Iverson, Denver, Colorado Total Time Prep: 20 min. Bake: 25 min. Makes 2 dozen Ingredients 2 packages (17 ounces each) Hawaiian sweet rolls 22 slices American or cheddar cheese, divided 2 pounds ground beef 1 cup chopped onion 1 can (14-1/2 ounces) diced tomatoes with garlic and onion, drained 1 tablespoon Dijon mustard 1 tablespoon Worcestershire sauce 3/4 teaspoon salt 3/4 teaspoon pepper 24 bacon strips, cooked and broken into 1-inch pieces GLAZE: 1 cup butter, cubed 1/4 cup packed brown sugar   4 teaspoons Worcestershire sauce 2 tablespoons Dijon mustard 2 tablespoons sesame seeds"
  },
  {
    "id": 50,
    "title": "Over 4,000 Pounds of Pork Have Been Recalled Due to Possible Plastic Contamination",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA139cIN.img?w=768&h=512&m=6",
    "category": "mix",
    "description": "If you have pork loin fritter in your refrigerator or freezer, head there right now and check the label: The U.S. Department of Agriculture's Food Safety and Inspection Service recommends inspecting it for your safety—and possibly tossing it out. The public health agency announced that Oklahoma-based AdvancePierre Foods is recalling 4,137 pounds of this meat after hard pieces of plastic were found inside of it.AdvancePierre Foods produced the raw, frozen cubed pork loin steak fritter on June 16, 2022. The GOLD LABEL AdvancePierre Our Deluxe Cubed Pork Loin Streak Fritters were shipped to distributors in Arkansas, Colorado, Illinois, Indiana, Iowa, Michigan, Missouri, Nebraska, and Virginia. From there, the meat was distributed to restaurants and other food service operations. The FSIS has received two complaints from restaurant staff members who reported that they found plastic in the pork product."
  },
  {
    "id": 51,
    "title": "Orange-Cinnamon Hot Buttered Rum Recipe",
    "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA138JGv.img?w=768&h=431&m=6",
    "category": "Food",
    "description": "Bryant also shares her favorite occasion to serve this hot beverage. In England, we have a celebration on 5th November called bonfire night, where we stand outside and burn things and have fireworks, Bryant explains. It's the perfect drink for that evening or any social evening outside in the autumn or wintertime. It's also great to make and put in a flask for New Years' fireworks standing outside in the cold! How good does that sound?This recipe mainly requires spices, so check your spice cabinet before heading to the store. You will need to get spiced rum, water, unsalted butter, an orange, brown sugar, ground cinnamon, nutmeg, star anise, and cinnamon sticks. The secret ingredient in this is the orange zest, which isn't normally found in buttered rum,Bryant shares. It adds a delicious orange zesty note, which pairs so well with the warming spice flavoring and takes the drink from good to great!" 
  },
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details