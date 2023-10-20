import React,{createContext,useState} from "react"

export const Store=createContext();
const ContextApi=(props)=>{

    const [data]=useState([
    {
      id:1,
      Category:'Bollywood',
      Title:'Ganapath',
      image:'https://cdn.bollywoodbubble.com/wp-content/uploads/2022/06/ganapath-release-date-1.jpg',
      Description:'Ganapath: Part 1 is an action thriller movie written and directed by Vikas Bahl. The movie stars Tiger Shroff, Kriti Sanon, and Amitabh Bachchan in the main lead roles, along with Adi Chugh, Elli Avrram, Faisal Mohammed, Rahman, and many others in supporting roles. Sudhakar Reddy Yakkanti handled the cinematography, and A. Sreekar Prasad editted this film. The soundtrack and background music for this movie were composed by Sanchit and Ankit Balhara. Vashu Bhagnani, Vikas Bahl, and Jackky Bhagnani produced this film under the banners of Pooja Entertainment and Good Co.',

    },

    {
      id:2,
      Category:'Bollywood',
      Title:'Pathan',
      image:'https://images.hindustantimes.com/tech/img/2023/02/20/960x540/pathan_1674453019570_1676878377206_1676878377206.jpg',
      Description:'If you are going to see Jawan in Jawan, then first you will see King Khan playing the character of an old man who hijacked the Metro, who is acting like a real hero by giving villainous dialogues. Along with her Girl’s brigade, whose dress and sequence will definitely remind you of Money Heist. But our romantic hero here doesn’t just mind like a professor. It kills, too, and yes, it kills a lot. Joker laughs like a gimmick and then gets a little emotional.The story of a son of India who puts country before self, Pathaan is a crowd pleaser that marks the return of Shah Rukh Khan to the action genre with new toys and a lot more bombast. Returning after a hiatus, SRK is in form in the larger-than-life space of Yash Raj banner’s growing spy universe where writers pick strands from the real world and propel them at escape velocity.Siddharth focuses too much on choreographing action, often leaving emotions hanging by a thread, but it is the individual charm of the performers that makes up for the lack of strong emotional core. No wonder, early in the film, a scientist says, science is easy; love is hard.  '

    },
    {
      id:3,
      Category:'Bollywood',
      Title:'Tejas',
      image:'https://eng.cinereporters.com/wp-content/uploads/2022/10/airforce-officer.jpg',
      Description:'Tejas True Story: “When in doubt, think about the nation.” This is how the trailer of Tejas took a farewell from our screens. Starring Kangana Ranaut in the leading role, Tejas is all about patriotism and heroism. Written and directed by Sarvesh Mewara, the film is touted to be an action drama that shows a woman serving in the Indian Air Force as a fighter pilot. Hailing from the makers of URI: The Surgical Strike, Tejas is scheduled to hit the screens on October 27, 2023. But since the trailer has already been dropped before the people, it is obvious for the viewers to sync their teeth in this patriotic story. Moreover, they are also curious whether or not real-life events have inspired Tejas! Let us have a closer look at the details!',
    },
    {
      id:4,
      Category:'Bollywood',
      Title:'Lagan',
      image:'https://assets.telegraphindia.com/telegraph/2021/Jun/1623695129_lagaan.jpg',
      Description:'Lagaan" is a period drama that unfolds in the rural village of Champaner, located in the British-controlled part of India during 1893. The villagers are burdened by high taxes (lagaan) imposed by the British colonial rulers. Captain Andrew Russell (played by Paul Blackthorne) is the ruthless British officer in charge of the region, and he demands a double lagaan from the already impoverished villagers due to a prolonged drought<br>The villagers, led by Bhuvan (played by Aamir Khan), an earnest and spirited young man, are unable to pay the oppressive taxes. They protest against the British, and as a result, Captain Russell challenges them to a cricket match. He proposes that if the villagers win the match, their lagaan will be waived for three years, but if they lose, theyll have to pay triple lagaan."Lagaan" is not just a sports film but also a social and historical drama that explores themes of unity, colonialism, and the power of determination. It received widespread critical acclaim and was even nominated for the Academy Award for Best Foreign Language Film in 2002. The film is celebrated for its storytelling, performances, music, and its ability to blend sports with a powerful narrative that resonates with audiences worldwide.',
      
    },
    {
      id:5,
      Category:'Bollywood',
      Title:'Animal',
      image:'https://i0.wp.com/goldandhra.com/wp-content/uploads/2023/09/Bobby-Deols-Fierce-Look-Revealed-From-Animal-Movie.jpg?resize=642%2C900&ssl=1',
      Description:'Animal is billed to be an intense yet powerful gangster drama. The film also carries strong emotional elements for families. The film revolves around the relationship between a father and son, portrayed by Anil Kapoor and Ranbir Kapoor, respectively.',

     
    },
    {
      id:6,
      Category:'Bollywood',
      Title:'October',
      image:'https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/04/october-movie-review-1.jpg',
      Description:'"October" is a unique and contemplative love story that centers around the lives of Dan (played by Varun Dhawan) and Shiuli (played by Banita Sandhu), who work together at a hotel in Delhi. While they are colleagues, they arent particularly close<br> The story takes a dramatic turn when Shiuli falls from the third floor of the hotel and is severely injured, leading her into a comatose state. This unexpected incident deeply affects Dan, who is deeply moved by her condition. He begins to visit her regularly at the hospital, even though they were not romantically involved or close friends."October" is a unique and unconventional love story that revolves around the lives of two hotel management interns, Dan (played by Varun Dhawan) and Shiuli (played by Banita Sandhu). The story takes a dramatic turn when Shiuli meets with a tragic accident and slips into a coma. Dan, deeply affected by Shiulis condition, starts spending time at the hospital, taking care of her and searching for ways to wake her up. His actions are driven by a deep, unexplained connection and affection for Shiuli.'
    },
    {
      id:7,
      Category:"Bollywood",
      Title:'IB71',
      image:'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3372/1543372-h-dbb5b6027e3d',
      Description:'A finely directed spy thriller with remarkable finesse and restraint, IB71 is a film based on a phenomenal real-life mission executed by our secret services, and after watching this film, it fills you with pride. By not revealing all the cards at once and dumbing down everything by dumping information in the form of narration, the film retains a sense of urgency and suspense. It falters in writing especially in the detailing as a lot of things happen too easily and conveniently in the mission, but despite those hiccups, its tense narrative and brisk pace make the sail smooth. The BGM is nice and Vidyut shows his dramatic chops in this film and passes neatly. IB71 is not a great film but it executes its subject matter skillfully and will leave you with a good 2 hours worth of your time.. It falters in writing especially in the detailing as a lot of things happen too easily and conveniently in the mission, but despite those hiccups, its tense narrative and brisk pace make the sail smooth. The BGM is nice and Vidyut shows his dramatic chops in this film and passes neatly. IB71 is not a great film but it executes its subject matter skillfully and will leave you with a good 2 hours worth of your time.“IB 71” unfolds with the intensity of a Hollywood thriller, wasting no time in getting to the crux of the matter and maintaining focus on the core plot throughout its duration. It is commendable that the makers opted to forego song placements for the majority of the film, thus ensuring its momentum (although there is one song towards the end). Any musical number would have undoubtedly hindered the films pace. The daring exploits depicted in the film exude authenticity rather than a clichéd cinematic portrayal. The art direction and cinematography of this film deserve special mention, as they create a magnificent backdrop that transports viewers back to India in 1971. The sequences set in Dal Lake are breath-taking, with aerial shots capturing its beauty like never before.'
    },
    {
      id:8,
      Category:"Bollywood",
      Title:'Padmaavat',
      image:'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/padmaavat-2018/Padmaavat-2018-1.jpg',
      Description:"Padmaavat is a historical drama set in the 13th century during the reign of the Rajput king Ratan Singh of Mewar (played by Shahid Kapoor). The story revolves around the legendary queen Padmavati (played by Deepika Padukone), known for her exceptional beauty and wisdom. The plot is set in motion when the ambitious and power-hungry Alauddin Khilji (played by Ranveer Singh), the Sultan of Delhi, learns about Padmavati's extraordinary beauty. Driven by lust and a desire to possess her, Khilji wages war against Mewar and captures Ratan Singh.Film Padmavati is based on the epic Padmavat, composed by medieval age Sufi poet Malik Muhammad Jayasi from the days of the Bhakti Movement, which produced Tulsidas, Surdas and Kabir among hundreds of others.Padmavat tells a story, which historians don't value much, treating it as a work of fiction of the queen of Chittor named Padmavati, who was coveted by Delhi's sultan Alauddin Khilji , known for his military conquests across India and strong market regulations in the capital to keep the prices of articles in control",

     
    },
    {
      id:9,
      Category:"Bollywood",
      Title:'Yodha',
      image:'https://m.media-amazon.com/images/M/MV5BMTgzZTMwNjYtYWM3NC00Nzc4LTg5YzAtZGQ2MTE0MDc1NjY4XkEyXkFqcGdeQXVyNjUwMjYwMjE@._V1_.jpg',
      Description:'odha is an upcoming Hindi language action thriller film directed by Sagar Ambre and Pushkar Ojha. Produced by Karan Johar under Dharma Productions,[3] The film stars Sidharth Malhotra, Disha Patani and Raashii Khanna.[4][5] Yodha is scheduled for theatrical release on 8 December 2023.',

    },
    
      {
        id: 10,
        Category: "Bollywood",
        Title: "Dunki",
        image: 'https://filmfare.wwmindia.com/content/2023/aug/dunki11692788545.jpg',
        Description: 'The Punjabis say it as Dunki. How much should I tell you about the film …mmm…It is a film directed by one of the most brilliant filmmakers we have in our country, Mr Raju Hirani. It is written by a fantastic writer, Abhijat Joshi. It is a story of people who want to come back home when you finally get the calling.” “It is a comic film. His (Mr Hirani) films are always a mix of comedy and a lot of emotions about the country. So, it is a big journey for me and the film goes through different areas around the world and finally comes back home to India,” Shah Rukh Khan told Deadline.SRK has been paired alongside Taapsee Pannu in this entertainer.'
      },
      {
        id: 11,
    Category: "Bollywood",
    Title: "3 Idiots",
    image: "https://flxt.tmsimg.com/assets/p7951929_p_v8_aa.jpg",
    Description: "3 Idiots is a comedy-drama film that follows the adventures and misadventures of three engineering students as they navigate their way through college, friendship, and societal expectations.The film Three Idiots is an Indian movie, released in 2009, highlights educational issues that permeate Asian society for a long. The film is a tremendous success and, according to Wikipedia, has earned 90 million dollars worldwide. It has won six Film fare awards, National Films Award, and the Best Popular Award.",
      },
      {
    id: 12,
    Category: "Bollywood",
    Title: "Chak De! India",
    image: "https://www.koimoi.com/wp-content/new-galleries/2021/08/shah-rukh-khans-chak-de-india-had-boosted-1-5x-sales-of-hockey-sticks-when-compared-to-cricket-bats001-1.jpg",
    Description: "Chak De! India is a sports drama that tells the story of a former hockey player who becomes the coach of the Indian women's national hockey team, leading them to success against all Chak De! India Chak De! India was a film that came with some core acting and a solid storyline. No superfluous song sequences or dialogues that can be done away with, this was a film that showcased Shah Rukh Khan in his finest element as an actor, portraying the role of a Hockey coach who gains redemption for the wrong done to him, through his love for the sports and being the light at the end of the tunnel for the womens hockey team.",
   
  },
  {
    id: 13,
    Category: "Bollywood",
    Title: "Dilwale Dulhania Le Jayenge",
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ddff52bf9c8cfaf6ad029644289c0cd71059f0417582a14226919a4551604627._UY500_UX667_RI_TTW_.jpg",
    Description: "\"Dilwale Dulhania Le Jayenge\" is a classic romantic film that follows the love story of Raj and Simran as they journey across Europe and defy traditional family expectations It was in 1995, that a young director Aditya Chopra gave Hindi cinema its cult hit Dilwale Dulhania Le Jayenge, a film in tune with its times and creating a new genre in the process — the NRI love stories. Actor Shah Rukh Khan as the Indian brat Raj living in London and actor Kajol as the obedient daughter to a culturally rooted father, together became one of the most loved on-screen couple of all times in Bollywood. Now, even as the film completes 27 years of release, the nostalgia around it remains high. In an old interview, a decade after the film’s release, Shah Rukh spoke about what makes the film so loved."
  },
  {
    id: 14,
    Category: "Bollywood",
    Title: "Kabhi Khushi Kabhie Gham",
    image: "https://www.yashrajfilms.com/images/default-source/Movies/K3G/kabhi-khushi-kabhie-gham_767x430.jpg?sfvrsn=1b3fcfcc_0",
    Description: "\"Kabhi Khushi Kabhie Gham\" is a family drama that explores the dynamics of a wealthy Indian family, emphasizing the importance of love and reconciliation.“The true challenge was justifying the icons that were cast in the film,” he says in the special video titled ‘Happy #20YearsOfK3G, from us to you.’ According to KJo, while the Bachchan couple was living legends, SRK-Kajol have been dearest to him since his first film. And Hrithik-Kareena were the trendsetters of the time, and continue to be. “Shine, sequin, bling… It was all there!” Karan said reiterating that its dialogues became part of everyday conversations."
  },
  {
    id: 15,
    Category: "Bollywood",
    Title: "PK",
    image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-319295,resizemode-75,msid-47516503/magazines/panache/pk-earns-13-5-million-in-china/pk_640x480.jpg",
    Description: "PK is a satirical comedy-drama that follows an alien's journey on Earth, highlighting various societal norms, beliefs, and practices.Rajkumar Hirani is back in the multiplexes after a five-year hiatus and the wait has been worth it.PK, the writer-director's fourth directorial venture, is a wonderful piece of cinema that, pretty much like his much-loved Munnabhai films, blends hear.PK is a film that restores one's faith in the much maligned Bollywood idiom. It demonstrates that the so-called clichéd conventions of Mumbai's popular cinema can, in hands as able as Hirani's, yield entertainment of the very highest pedigree."
  },
  {
    id: 16,
    Category: "Hollywood",
    Title: "jhon wick",
    image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    Description: "John Wick is a retired hitman who returns to the criminal underworld to settle a debt. When his former employer's son, Santino, orders his men to take out John's beloved puppy, an unexpected and deadly altercation ensues, leaving his beloved pup dead. Fueled by vengeance and a drive for justice, John embarks on a brutal rampage to take down Santino and his gang, seeking vengeance for his beloved pup. Along the way, John discovers the shocking truth about the deaths of his wife and son and finds himself thrust into a final, epic showdown with Santino and his legion of hired guns."
  },
  {
    id: 17,
    Category: "Hollywood",
    Title: "The Shawshank Redemption",
    image: "https://wallpapercosmos.com/w/full/e/a/b/171926-2880x1800-desktop-hd-the-shawshank-redemption-wallpaper-photo.jpg",
    Description: "The Shawshank Redemption\" is a drama that follows the life of a wrongly convicted inmate, Andy Dufresne, as he navigates the challenges of prison life and seeks his freedom.Like the hero of that film, the viewer of  is adrift in time and experience. We can never even be quite sure what the relationship between dream time and real time is. The hero explains that you can never remember the beginning of a dream, and that dreams that seem to cover hours may only last a short time. Yes, but you don't know that when you're dreaming. And what if you're inside another man's dream? How does your dream time synch with his? What do you really know?" 
  },
  {
    id: 18,
    Category: "Hollywood",
    Title: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg",
    Description: "Pulp Fiction is a nonlinear crime film that weaves together multiple interconnected stories involving hitmen, crime, and unusual occurrences in Los Angeles.The story can either be told in a few sentences, or not told at all. Here is a movie immune to spoilers: If you knew how it ended, that would tell you nothing unless you knew how it got there. And telling you how it got there would produce bafflement. The movie is all about process, about fighting our way through enveloping sheets of reality and dream, reality within dreams, dreams without reality. It's a breathtaking juggling act, and Nolan may have considered his Memento (2000) a warm-up; he apparently started this screenplay while filming that one. It was the story of a man with short-term memory loss, and the story was told backwards."
  },
  {
    id: 19,
    Category: "Hollywood",
    Title: "ADAM DRIVER 65",
    image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/03/65-movie-review-002.jpg",
    Description: "This is a movie that would have benefitted from being a whole lot stupider. The big-budget sci-fi flick—which reportedly cost $91 million to make and was featured in a Super Bowl ad—should have embraced its inherent B-movie roots. Instead, it tries to juggle a wild survival story with a poignant family drama, but both elements feel so rushed and underdeveloped that neither ends up registering. There’s nothing to these characters, and the action sequences quickly grow repetitive and wearisome. There’s a jump scare, insistent notes from an overbearing score, some running and screaming, the gnashing of teeth, and maybe an injury before a narrow escape. Over and over and over again."
  },
  {
    id: 20,
    Category: "Hollywood",
    Title: "Avatar2",
    image: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2022/11/Huge-Demand-for-Avatar2-in-Telugu-States-Web.jpg",
    Description: "Avatar is a science fiction film set on the alien planet of Pandora, where humans clash with the indigenous Na'vi people in a story of colonization and environmentalism.The film's midsection shifts its focus away from Sully/Quaritch to the region's children as Jake's boys learn the ways of the water clan. Finally, the world of Avatar feels like it's expanding in ways the first film didn't. Whereas that film was more focused on a single story, Cameron ties together multiple ones here in a far more ambitious and ultimately rewarding fashion. While some of the ideas and plot developments—like the connection of Kiri to Pandora or the arc of a new character named Spider"
  },
  {
    id: 21,
    Category: "Hollywood",
    Title: "The MAGIC FLUTE",
    image: "data:image/jpeg;base64,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",
    Description: "Ever since Mozart’s final opera, The Magic Flute, was first performed in 1791, it has enchanted music lovers, tested generations of coloratura singers with one of the most notoriously challenging arias in the canon, confused anyone who tried to make too much sense of the storyline, and captivated those who like to do deep dives into conspiracy theories, inspired by multiple arcane Masonic symbols in the story. A beautiful Swedish language version was directed by Ingmar Bergman in 1975 and a strange English language version set in World War I, directed by Kenneth Branagh, was released in 2006. "
  },
  {
    id: 22,
    Category: "Hollywood",
    Title: " LUTHER ",
    image: "https://occ-0-1174-299.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRtBBsvB4u98FlCdW7VyziGT70lj-Z5tiuyhqt8ITswS0vLETIQbQUfoY21BPfbWvuH36Vtrj27XIcW3nmWfzem6ETnyoACCCyQB2FbpktSrop-4zZYZ-ZgCJ8OzaJ2_9YCx6g.jpg",
    Description: "A serial killer terrorizes London while disgraced detective John Luther sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary."
  },
  {
    id: 23,
    Category: "Hollywood",
    Title: "Forrest Gump",
    image: "https://www.koimoi.com/wp-content/new-galleries/2022/08/did-you-know-tom-hanks-had-to-fund-a-certain-portion-of-the-forrest-gump-01.jpg",
    Description: "As you’ve probably read through fan reactions to Luther: The Fallen Sun, it appears that John Luther could become the next James Bond. Ok, so he’s not exactly set up to take over the role of Ian Fleming’s super spy, but Idris Elba's character could be getting an offer to become a clandestine operative for His Majesty’s government. That’s the outcome that seems heavily implied, particularly with an enigmatic figure known as “Chief” sitting at the head of it all."
  },
  {
    id: 24,
    Category: "Hollywood",
    Title: "Avatar",
    image: "https://m.economictimes.com/thumb/msid-96284064,width-5000,height-2637,resizemode-4,imgsize-288582/avatar-the-way-of-water-see-who-is-kiri-her-parents.jpg",
    Description: "Avatar is a science fiction film set on the alien planet of Pandora, where humans clash with the indigenous Na'vi people in a story of colonization and environmentalism.For all the fan pages, the long and winding Wikis, the nods to Plato’s Allegory of the Cave and to French critical theory, the hours upon hours of dauntingly labeled “philosophers’ commentaries” that adorn the Blu-rays, the original movie itself is, in some ways, as plain as the green cursor blinking on a black screen that, quaintly, begins it. In memory, the premise of Lilly and Lana Wachowski’s breakthrough film was an elaborate, wordy, barely comprehensible piece of world-building. But in truth, The Matrix gets most of the explanatory stuff out of the way in a few efficient strokes in its frontloaded first third so that"
  },
  {
    id: 25,
    Category: "Hollywood",
    Title: "The Devil Conspiracy",
    image: "https://cdn.moviefone.com/admin-uploads/posters/thedevilconspiracy-movie-poster_1671120441.jpg?d=360x540&q=60",
    Description: "Throughout my many years as an avid moviegoer, I've seen more than my share of ridiculous movies—even deliberately seeking them out in a number of cases. I mention this only to assure you that when I say that the Godsploitation epic “The Devil Conspiracy” is one of the nuttiest films that I have ever borne witness to, I am not trying to be wildly hyperbolic. How nutty is it, you may ask? Consider the opening sequence, which recounts the Biblical battle between the Archangel Michael (Peter Mensah) and the rebellious Lucifer (Joe Anderson), and which ends with the former banishing the latter to an eternity of imprisonment in the depths of Hell. This is staid enough, I suppose, if you can overlook the murky look and somewhat dubious CGI imagery on display."
  },
  {
    id: 26,
    Category: "Hollywood",
    Title: "MAX STEEL",
    image: "https://qqcdnpictest.mxplay.com/pic/6574fa0a788a4908e9e5927cbbfaf378/en/2x3/320x480/8f6b8d2e87dafee76f1a628ae0b9e3bf_1280x1920.webp",
    Description: "Teenager Max McGrath moves with his mother Molly to the town of Copper Canyon, where he was born and where his father Jim McGrath died in a supposed storm. In his first few days at school, he realizes that almost everyone in town knows more about Jim than he does because his mother refuses to talk about Jim's past or death. During dinner with Jim's friend Miles Edwards, Max learns that his father worked for N-TEK, an advanced research company now run by Miles. Concurrently after arriving, Max discovers he emits a unique form of tachyonic energy called TURBO which is powerful enough to overload any electrical item, but he has no control over when he emits it. After sensing an oncoming overload during a date with classmate Sofia, Max encounters an amnesiac alien creature named Steel, who symbiotically bonds with Max to absorb the energy."
  },
  {
    id: 27,
    category: "Hollywood",
    Title: "The List",
    image: "https://hips.hearstapps.com/hmg-prod/images/best-romantic-movies-2023-the-list-64aef729f0bc2.png",
    Description: "A sudden death tied to a list from the past leads to unimaginable evil. Fresh out of law school and full of hope for the future, Renny Jacobson is stunned by his father's sudden death--and then by the terms of the will: the elder Jacobson has left the bulk of his estate to charity. For his only son, he has left nothing more than the contents of a deposit box and interest in a company no one has heard of--the Covenant List of South Carolina, Ltd. When Renny encounters lovely Jo Johnston, meets the members of  and discovers the staggering value of his father's mysterious bequest, his hope is resurrected. But why is Jo, to whom he is deeply attracted, so reluctant for him to claim his rightful share? Renny feels the supernatural power of the 140-year-old covenant--feels it and wants it for himself. But when his life and Jo's begin to unravel, he is forced to face the truth about  And nothing short of a miracle will save them from its grasp."
  },
  {
    id: 28,
    Category: "Hollywood",
    Title: "Eternal Sunshine of the Spotless Mind",
    image: "https://wallpapercave.com/dwp1x/wp2392647.jpg",
    Description: "\"Eternal Sunshine of the Spotless Mind\" is a romantic science fiction film that explores the story of a couple, Joel and Clementine, who undergo a procedure to erase each other from their memories, only to rediscover their love.They took the figure of the ageing don as seriously as Lear, the careworn ruler of a secret American state-within-a-state. Stomach-turning flourishes of violence are juxtaposed with elaborate rituals of familial piety and respect, which generations of real-life criminals in the United States treated as how-to behaviour manuals for decades afterwards. These Italian-American gangsters do not complain about the bigotry heading their way, and are themselves casually racist and antisemitic. Extravagant gestures of romantic adoration and solemn respect for womenfolk are combined with casual sexual abuse; and women have to reconcile themselves to their role"
  },
  {
    id: 29,
    Category: "Technology",
    Title: "Internet of things ",
    image: "https://stl.tech/wp-content/uploads/2022/10/IOT-1.jpg",
    Description: "The Internet of things (IoT) describes devices with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.[1][2][3][4][5] The Internet of things encompasses electronics, communication and computer science engineering. Internet of things has been considered a misnomer because devices do not need to be connected to the public internet, they only need to be connected to a network,[6] and be individually addressable. The field has evolved due to the convergence of multiple technologies, including ubiquitous computing, commodity sensors, and increasingly powerful embedded systems, as well as machine learning"
  },
  {
    id: 30,
    Category: "Technology",
    Title: "Metaverse",
    image: "https://washingtonindependent.com/wp-content/uploads/2022/03/fe0f37a9484c68c6/metaverse.jpeg",
    Description: " The metaverse is a network of virtual places that are linked into a virtual universe. It is often described as a future version of the Internet.In the Metaverse, customizable avatars and dynamic group experiences will enable a new era of social interaction. Weddings, happy hours, and religious ceremonies are increasingly taking place virtually, with individuals participating regardless of their geographic location, especially in the aftermath of COVID-19.[3] Metaverse members will engage with and purchase digital and real-world apparel, sporting goods, and other items through virtual shopping malls.[4] Virtual try-on software and augmented reality (AR) capabilities that help buyers in various ways are a natural fit for this use case."
  },
  {
    
    id: 31,
    Category: "Technology",
    Title: "Genomics",
    image: "https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2021/01/Genomics-Tech-Trends.jpg",
    Description: "Genomics is an interdisciplinary field of biology focusing on the structure, function, evolution, mapping, and editing of genomes. A genome is an organism's complete set of DNA, including all of its genes as well as its hierarchical, three-dimensional structural configuration.[1][2][3] [4] In contrast to genetics, which refers to the study of individual genes and their roles in inheritance, genomics aims at the collective characterization and quantification of all of an organism's genes, their interrelations and influence on the organism.[5] Genes may direct the production of proteins with the assistance of enzymes and messenger molecules. In turn, proteins make up body structures such as organs and tissues as well as control chemical reactions and carry signals between cells."
  },
  {
    id: 32,
    Category: "Technology",
    Title: "Artificial Intelligence in Healthcare",
    image: "https://blog.ipleaders.in/wp-content/uploads/2021/11/ai-healthcare-title-image-2560x1365-1.jpeg",
    Description: "Artificial intelligence (AI) is currently one of the hottest buzzwords in tech and with good reason. The last few years have seen several innovations and advancements that have previously been solely in the realm of science fiction slowly transform into reality. Experts regard artificial intelligence as a factor of production, which has the potential to introduce new sources of growth and change the way work is done across industries. For instance, this PWC article predicts that AI could potentially contribute $15.7 trillion to the global economy by 2035. China and the United States are primed to benefit the most from the coming AI boom, accounting for nearly 70% of the global impact."
  },
  {
    id: 33,
    Category: "Technology",
    Title: " cybersecurity",
    image: "https://static.ffx.io/images/$zoom_1.068%2C$multiply_1%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_12/t_crop_custom/c_scale%2Cw_620%2Cq_88%2Cf_auto/56547923334b76478f87890bc5d7ba2015c7e0f3",
    Description: "Computer security refers to protecting and securing computers and their related data, networks, software, hardware from unauthorized access, misuse, theft, information loss, and other security issues. The Internet has made our lives easier and has provided us with lots of advantages but it has also put our system’s security at risk of being infected by a virus, of being hacked, information theft, damage to the system, and much more. Technology is growing day by day and the entire world is in its grasp. We cannot imagine even a day without electronic devices around us. With the use of this growing technology, invaders, hackers and thieves are trying to harm our computer’s security for monetary gains, recognition purposes, ransom demands, bullying others, invading into other businesses, organizations, etc. In order to protect our system from all these risks, computer security is important."
  },
  {
    id: 34,
    Category: "Technology",
    Title: "Augmented Reality (AR) in Education",
    image: "https://sugoilabs.com/wp-content/uploads/2018/05/education.png",
    Description: "Discover how augmented reality is enhancing education by providing immersive learning experiences, interactive simulations, and virtual field trips for students.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
  },
  {
    id: 35,
    Category: "Technology",
    Title: "Machine learning",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
    Description: "Machine Learning tutorial covers basic and advanced concepts, specially designed to cater to both students and experienced working professionals.This machine learning tutorial helps you gain a solid introduction to the fundamentals of machine learning and explore a wide range of techniques, including supervised, unsupervised, and reinforcement learning.Machine learning (ML) is a subdomain of artificial intelligence (AI) that focuses on developing systems that learn—or improve performance—based on the data they ingest. Artificial intelligence is a broad word that refers to systems or machines that resemble human intelligence. "
  },
  {
    id: 36,
    Category: "Technology",
    Title: "Space Exploration and Mars Missions",
    image: "https://cdn.mos.cms.futurecdn.net/tsRQNTJ8MhRUm32taXTdjm.jpg",
    Description: "Learn about recent developments in space exploration, including Mars missions, space tourism, and the search for extraterrestrial life.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
  },
  {
    id: 37,
    Category: "Technology",
    Title: "Cybersecurity in the Digital Age",
    image: "https://media.licdn.com/dms/image/D4D12AQEm8P5f1e9ylg/article-cover_image-shrink_600_2000/0/1672748202959?e=2147483647&v=beta&t=sLaVSHMbednYBK-ToxMZTcKKTV2hgKrB7n1V4Zprexw",
    Description: "Delve into the world of cybersecurity and the importance of protecting digital assets, data, and privacy in an interconnected world.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
  },
  {
    id: 38,
    Category: "Technology",
    Title: "Biotechnology Advancements",
    image: "https://the-dna-universe.com/wp-content/uploads/2021/12/Rewind_2021-main-image_v2.jpg",
    Description: "Explore the latest advancements in biotechnology, including gene editing, CRISPR technology, and their potential applications in medicine and agriculture.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
  },
  {
    id: 39,
    Category: "Technology",
    Title: "Renewable Energy Innovations",
    image: "data:image/jpeg;base64,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",
    Description: "Discover innovations in renewable energy sources such as solar, wind, and hydroelectric power, contributing to a greener and sustainable future.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
  },
  {
    
    id: 40,
    Category: "Technology",
    Title: "The Internet of Things (IoT) Revolution",
    image: "https://www.gbnews.ch/wp-content/gbnews-uploads/2016/06/IoT.png",
    Description: "Learn how the Internet of Things is transforming our daily lives, from smart homes and cities to industrial automation and connected devices.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound.Explore the latest trends in robotics and automation technologies, from self-driving cars to robotic healthcare assistants and manufacturing automation.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."

  },
  {
    id: 41,
    Category: "Technology",
    Title: "Robotics and Automation Trends",
    image: "https://3.imimg.com/data3/IT/MI/MY-17635245/robotics-technology-srt-3-months-500x500.png",
    Description: "Explore the latest trends in robotics and automation technologies, from self-driving cars to robotic healthcare assistants and manufacturing automation.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
  },
    {
      id:42,
      Category: "Fitness",
      Title: "Intermittent fasting",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhBE0zpm6L2fQ-lcrcad2cRVlJzho86IMKDxHr5N7WE-7oyZGKacJHbC96BQT9nWwdV0&usqp=CAU",
      Description: "Many diets focus on what to eat, but intermittent fasting is all about when you eat.With intermittent fasting, you only eat during a specific time. Research shows fasting for a certain number of hours each day or eating just one meal a couple days a week may have health benefits.Johns Hopkins neuroscientist Mark Mattson has studied intermittent fasting for 25 years. He says our bodies have evolved to be able to go without food for many hours, or even several days or longer. In prehistoric times, before humans learned to farm, they were hunters and gatherers who evolved to survive — and thrive — for long periods without eating. They had to: It took a lot of time and energy to hunt game and gather nuts and berries."
    },
    
    {
        id: 43,
        Category: "Fitness",
        Title: "Strength Training for Beginners",
        image: "https://www.muscleandfitness.com/wp-content/uploads/2019/03/Kettleball.jpg?quality=86&strip=all",
        Description: "If you're new to strength training, this article is for you. Discover the basics of weightlifting, resistance training, and building muscle safely and effectively.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
      },
    
      {
        id: 44,
        Category: "Fitness",
        Title: "Mind-Body Connection in Fitness",
        image: "https://www.hhhealth.com/wp-content/uploads/2022/07/AdobeStock_295859885-1024x480.jpeg",
        Description: "Understand the mind-body connection in fitness and how mental well-being influences physical performance. Learn techniques for enhancing focus and motivation during workouts.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
      },
    {
      id: 45,
      Category: "Fitness",
      Title: "High-Intensity Interval Training (HIIT)",
      image: "https://images.ctfassets.net/psi7gc0m4mjv/1b1d9f0c-67b7-45b7-bb72-31efc4da28d5/0ac6571699c4591043efd109fbf21052/issa-blog-header-hiit.jpg",
      Description:"Youll work harder than you do when you do a typical cardio workout. But youll do it in spurts of 30 seconds to 3 minutes. Then you’ll have a chance to recover for about the same amount of time or longer.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
    },
    {
      id: 46,
      Category: "Fitness",
      Title: "Nutrition Myths Debunked",
      image: "https://www.nocofitness.com/wp-content/uploads/2018/11/Nutrition-Myths-Debunked.jpg",
      Description: "Separate fact from fiction as we debunk common nutrition myths. Learn about proper dietary choices and get evidence-based insights into maintaining a healthy diet.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
    },
    
    {
        id: 47,
        Category: "Fitness",
        Title: "Nutrition Essentials for Athletes",
        image: "https://blog.nasm.org/hubfs/sports-nutrition-guide.jpg",
        Description: "Discover the essential nutritional requirements for athletes and active individuals. Find out how to fuel your body for peak performance, recovery, and overall well-being.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
      },
    {
      id: 48,
      Category: "Fitness",
      Title: "Running Tips for Beginners",
      image: "https://i.ndtvimg.com/i/2017-12/running_696x400_71514191052.jpg",
      Description: "Are you considering taking up running? Learn valuable tips and advice for beginner runners, including proper footwear, pacing, and injury prevention.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
    },
    {
      id: 49,
      Category: "Fitness",
      Title: "Healthy Habits for a Balanced Lifestyle",
      image: "https://media.defense.gov/2020/Apr/30/2002291608/1920/1080/0/200501-F-PO640-0034.JPG",
      Description: "Explore healthy habits that contribute to a balanced lifestyle. From sleep routines to stress management, discover practices that promote overall well-being.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
    },
    
    {
        id: 50,
        Category: "Fitness",
        Title: "Yoga and Mindfulness for Stress Reduction",
        image: "https://www.ekhartyoga.com/media/image/articles/6-stress-relieving-pose.jpg",
        Description: "Learn about the benefits of incorporating yoga and mindfulness practices into your daily routine. Explore techniques for reducing stress, improving mental clarity, and enhancing relaxation.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
      },

    {
      id: 51,
      Category: "Fitness",
      Title: "Outdoor Activities for Fitness Enthusiasts",
      image: "https://zumpermedia.s3.amazonaws.com/blog/wp-content/uploads/2022/07/12104938/best-cities-for-outdoor-enthusiasts.jpg",
      Description: "Embrace the outdoors as your fitness playground. Discover a variety of outdoor activities that not only keep you fit but also provide a refreshing change of scenery.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
    },
    {
      id: 52,
      Category: "Fitness",
      Title: "Low-carbohydrate diets",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDy1yMefzu5PwrhHg6gv7GpwaO4PYCMOmOnS_LEiS4jTuLKiU7N8Pm1p9kULjralUPhk&usqp=CAU",
      Description: "A low carb diet restricts carbohydrates, such as those found in pasta, bread, and sugary foods. It’s high in protein, fat, and vegetables.There are many different types of low carb diets. Studies show that they can cause weight loss and improve your health.This is a detailed meal plan for a low carb diet. It explains what to eat and what to limit. It also includes a sample low carb menu for 1 week."
    },
    {
      id: 53,
      Category: "Fitness",
      Title: "The Importance of Stretching",
      image: "https://www.starhealth.in/blog/wp-content/uploads/2022/04/Stretching-and-its-importance.jpg",
      Description: "Discover the benefits of incorporating stretching into your fitness routine. Learn about different stretching techniques, including static and dynamic stretches.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
    },
    {
      id: 54,
      Category: "Fitness",
      title: "Mental Health and Exercise",
      image: "https://decisionmaker.in/wp-content/uploads/2022/12/How-Beneficial-is-Exercise-for-Our-Mental-Health.jpg",
     Description: "Explore the positive impact of regular exercise on mental health. Learn how physical activity can reduce stress, anxiety, and depression while enhancing overall well-being.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
    },
    {
      id: 55,
      Category: "Fitness",
      Title: "Cardiorespiratory fitness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK3NxS6ceyoPP141EIwm3jkjzdHfy9fnZCoSELqCEAacG0Bk0BzVCDdfCJv-sQeEloRo&usqp=CAU",
      Description: "Cardiorespiratory fitness (CRF) refers to the capacity of the circulatory and respiratory systems to supply oxygen to skeletal muscle mitochondria for energy production needed during physical activity. CRF is an important marker of physical and mental health and academic achievement in youth. However, only 40% of US youth are currently believed to have healthy CRF. In this statement, we review the physiological principles that determine CRF, the tools that are available to assess CRF, the modifiable and nonmodifiable factors influencing CRF, the association of CRF with markers of health in otherwise healthy youth, and the temporal trends in CRF both in the United States and internationally. Development of a cost-effective CRF measurement process that could readily be incorporated into office visits and in field settings to screen all youth periodically could help identify those at increased risk."
    },
      {
        id: 57,
        Category: 'Food',
        Title: 'South Indian Disk',
        image: 'https://assets.vogue.com/photos/63d169f727f1d528635b4287/4:3/w_3632,h_2724,c_limit/GettyImages-1292563627.jpg',
        Description: 'South Indian food is about as diverse as the region it originates from. With over 250 million people and dozens of languages found in this region, South India represents a diverse spectrum of cultures and cuisines.South India is home to many of the world’s most coveted ingredients like curry leaves, peppercorns, tamarind, coconut, and chilies. Many dishes feature over a dozen different spices, allowing the spices to mingle and marry to create vibrant fireworks of flavor.'
      },
      {
        id: 56,
        Category: 'Food',
        Title: 'Margherita Pizza',
        image: 'https://c4.wallpaperflare.com/wallpaper/517/845/145/pizza-italian-food-vegetarian-food-pizza-margherita-wallpaper-preview.jpg',
        Description: 'Delicious Italian pizza topped with fresh mozzarella, tomato sauce, basil, and olive oil.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id: 58,
        Category: 'Food',
        Title: 'pav bhaji',
        image: 'https://imgs.search.brave.com/x-NBs5OQKF2j0MRTn1oyz3U4FKSRn7h4eQZGprxMZsw/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/UlpXMWowZkxOZFJ6/WXl4UmN1OHdnSGFG/aiZwaWQ9QXBp',
        Description: 'Pav Bhaji is a combo dish of Pav(meaning bread), and bhaji(meaning curried mashed vegetables). Mumbai Paav Bhaji, the King of Indian Fast Food, is an immensely gratifying meal, that will transport you to gastronomical bliss. Pav Bhaji is not only a sure-shot party pleaser but also a wholesome satisfying weeknight dinner.  Mumbai Pav Bhaji is quite popular all over India as one of the most loved and flavorful street food. The best part I like about making Mumbai Pav Bhaji, is that you don’t have to be super precise in your initial prep and chopping. First, cook the roughly chopped vegetables together in the ginger-garlic, onion-tomato base. Next, lightly mash the cooked veggies, bringing forth the distinctly spicy-tangy flavors. The final dish is incredibly tasty and presentable, you will be surprised at how little effort went into making this goodness!A great combination of nutritious mixed vegetables in a lip-smacking tomato base, Paav Bhaji is one of the best ways to get your kids to eat their veggies.The Curry (Bhaji) is served with soft buns or dinner rolls AKA pav that are not sweet.'
      },
      {
        id: 59,
        Category: 'Food',
        Title: 'Salmon Sushi Roll',
        image: 'https://vaya.in/recipes/wp-content/uploads/2018/09/Smoked-Salmon-Sushi-Roll.jpg',
        Description: 'Delicate salmon sushi roll with rice, seaweed, avocado, and wasabi.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id: 60,
        Category: 'Food',
        Title: 'Instant Pot Chicken Biryani',
        image: 'https://imgs.search.brave.com/BGpofywHwEdvcd_0vcWetIKHfP3lpScnYKt5B0xAdFs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/ekFidlJmWDUwUzlZ/QlYyYWpnakpBSGFF/OCZwaWQ9QXBp',
        Description:'Quite possibly the most well known rice dish from India, biryani can be found throughout the country, though there are subtle variations from region to region. But one thing is consistent: the process to make it is long and complex. My family treasured recipe transforms Chicken Biryani into a quick, accessible dish. There are many variations of this recipe that originate in several states of India. My favorite, of course, is the one made by my mom that I grew up eating. Warm, deep spiced Chicken Biryani, with freshly ground spices, caramelized onions, marinated tender chicken cooked over long grain basmati rice.Biryani is a rice dish with vegetables, chicken, or fish marinated in yogurt and warm spices such as turmeric, red chili powder, and garam masala. It is traditionally slow-cooked by layering the marinated meat or vegetables over the rice and is topped with caramelized onions, aromatic saffron, and fresh cilantro or mint.It is said that Biryani is originally a Persian dish that eventually made its way to South Asia. Since then there have been many regional variations of this majestic dish based on the cooking methods.Dum Biryani - Layers of meat and partially cooked rice are added to a heavy-bottomed pot which is sealed tightly with raw dough so the flavors and steam do not escape. It is then slow-cooked for hours. This is also how my mom made her Biryani on the stovetop.Kacchi Biryani - Raw meat is cooked by layering over rice and then slow-cooked.Pukka Biryani - Partially cooked meat and rice are layered and cooked.As biryani became popular in South Asia, several regional variations of this dish came along. Starting with the Kacchi style Hyderabadi Dum Biryani, the Malabar Pukka Biryani from coastal India, the Calcutta Biryani with potatoes from eastern India, spicy Chettinad Biryani from the southern states, and the flavorful, tangy Sindhi Biryani from Sindh, Pakistan. Many more variations and recipes but one thing that is common is that they are all incredibly tasty!Given how much we enjoy Chicken Biryani,'
      },
      {
        id: 61,
        Category: 'Food',
        Title: 'Sweet and Sour Chicken',
        image: 'https://media.istockphoto.com/id/499424611/photo/sweet-and-sour-chicken-on-rice.jpg?s=612x612&w=0&k=20&c=lUPp59W6tMz2pnTlymaWePqsnD2EVbnTQH5SLrCMcJQ=',
        Description: 'Tangy sweet and sour chicken with bell peppers and pineapple chunks.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id: 62,
        Category: 'Food',
        Title: 'Pad Thai Noodles',
        image: 'https://media.istockphoto.com/id/926663774/photo/pad-thai-vegetarian-vegetables-udon-noodles-in-a-dark-background-top-view-vegetarian-food-in.jpg?s=612x612&w=0&k=20&c=OYjE5_Z9_ZCpG0yNW9aVfVFp7l9n2AquesjHJWyZOq0=',
        Description: 'Classic Pad Thai noodles with shrimp, peanuts, bean sprouts, and a tangy sauce.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },

      {
        id: 63,
        Category: 'Food',
        Title: 'Chocolate Brownie',
        image: 'https://food-images.files.bbci.co.uk/food/recipes/chocolate_brownies_83180_16x9.jpg',
        Description: 'Rich and fudgy chocolate brownie topped with vanilla ice cream and drizzled with hot fudge.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id: 64,
        Category: 'Food',
        Title: 'BBQ Ribs',
        image: 'https://media.istockphoto.com/id/1190400491/photo/pork-loin-ribs-served-on-chopping-board.jpg?s=612x612&w=0&k=20&c=bnYLqE8aKPwg2tmdh4vZjXKKgmpjxkjAud2Ee0JrXhw=',
        Description: 'Succulent BBQ ribs with a smoky barbecue sauce, coleslaw, and cornbread.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      
      {
        id: 65,
        Category: 'Food',
        Title: 'Vegetable Stir-Fry',
        image: 'https://therecipecritic.com/wp-content/uploads/2019/09/Vegetable-Stir-Fry-Facebook-SEO-800-x-534.png',
        Description: 'Healthy vegetable stir-fry with broccoli, carrots, bell peppers, and tofu in a savory sauce.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id: 66,
        Category: 'Food',
        Title: 'Grilled Salmon',
        image: 'https://c4.wallpaperflare.com/wallpaper/206/557/163/fish-grilled-salmon-food-salmon-wallpaper-thumb.jpg',
        Description: 'Perfectly grilled salmon fillet with a lemon dill sauce and steamed asparagus.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id: 67,
        Category: 'Food',
        Title: 'Filet Mignon',
        image: 'https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_640.jpg',
        Description: 'Tender and juicy filet mignon steak cooked to perfection, served with garlic mashed potatoes.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id: 68,
        Category: 'Food',
        Title: 'Pancakes',
        image: 'https://hips.hearstapps.com/hmg-prod/images/best-homemade-pancakes-index-640775a2dbad8.jpg?crop=0.503xw:1.00xh;0.235xw,0&resize=1200:*',
        Description: 'Fluffy pancakes served with maple syrup, butter, and a side of crispy bacon.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      
      {
        id: 69,
        category: 'Food',
        Title: 'Quinoa Salad',
        image: 'https://cookieandkate.com/images/2017/08/best-quinoa-salad-recipe-3.jpg',
        Description: 'Nutritious vegan quinoa salad with mixed vegetables and a balsamic vinaigrette.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      
      {
        id: 70,
        Category: 'Food',
        Title: 'Greek Salad',
        image: 'https://img.freepik.com/free-photo/greek-salad-with-fresh-vegetables-feta-cheese-kalamata-olives_2829-10854.jpg',
        Description: 'Fresh Greek salad with cucumbers, tomatoes, olives, feta cheese, and a zesty dressing.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.Food brings people together and cooking at home is a great way to unite your family over the dining table. Everyone loves a home-cooked meal—even moody teenagers or picky eaters. And if you live alone, that doesn’t mean you have to cook or eat alone. Sharing meals with others is a great way to expand your social network. Getting appreciative feedback on a meal you’ve prepared for someone can bring a real boost to your self-esteem, too.'
      },
      {
        id:71,
        Category:'Home',
        Title:'Ganapath',
        image:'https://cdn.bollywoodbubble.com/wp-content/uploads/2022/06/ganapath-release-date-1.jpg',
      },
      {
        id:72,
        Category:'Home',
        Title:'BlueBettle',
        image:'https://filmfare.wwmindia.com/thumb/content/2023/aug/upcominghollywoodmovies21690962006.jpg?width=1200&height=900', 
        Description:'According to box office insider Luiz Fet  another DCEU flop on its hands  Max has been releasing new DC Comics movies in roughly 70 days or less which suggests there is a chance the movie could arrive in late October. This hinted that we could see Blue Beetle stream on Max as early as October 13, but that date no longer seems likely.',
      },
      {
        id: 73,
        Category: "Home",
        Title: "Robotics and Automation Trends",
        image: "https://3.imimg.com/data3/IT/MI/MY-17635245/robotics-technology-srt-3-months-500x500.png",
        Description:'Explore the latest trends in robotics and automation technologies, from self-driving cars to robotic healthcare assistants',
      },
      {
        id: 74,
        Category: "Home",
        Title: "High-Intensity Interval Training (HIIT)",
        image: "https://images.ctfassets.net/psi7gc0m4mjv/1b1d9f0c-67b7-45b7-bb72-31efc4da28d5/0ac6571699c4591043efd109fbf21052/issa-blog-header-hiit.jpg",
        Description: "Youll work harder than you do when you do a typical cardio workout. But youll do it in spurts of 30 seconds to 3 minutes"
      },
      {
        id: 75,
        Category: "Home",
        Title: "Renewable Energy Innovations",
        image: "data:image/jpeg;base64,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",
        Description: "Discover innovations in renewable energy sources such as solar, wind, and hydroelectric power, contributing to a greener and sustainable future."
      },
      {
        id: 76,
        Category: "Home",
        Title: "The Devil Conspiracy",
        image: "https://cdn.moviefone.com/admin-uploads/posters/thedevilconspiracy-movie-poster_1671120441.jpg?d=360x540&q=60",
        Description: "Throughout my many years as an avid moviegoer, I've seen more than my share of ridiculous movies—even deliberately seeking them out in a number of cases."
      },
      {
        id:77,
        Category: "Home",
        Title: "The Internet of Things (IoT) Revolution",
        image: "https://www.gbnews.ch/wp-content/gbnews-uploads/2016/06/IoT.png",
        Description: "Learn how the Internet of Things is transforming our daily lives, from smart homes and cities to industrial automation and connected devices."
      },
      {
        id: 79,
        Category: "Home",
        Title: "Augmented Reality (AR) in Education",
        image: "https://sugoilabs.com/wp-content/uploads/2018/05/education.png",
        Description: "Discover how augmented reality is enhancing education by providing immersive learning experiences, interactive simulations, and virtual field trips for students."
      },
      {
        id: 80,
        Category: "Home",
        Title: "Machine learning",
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
        Description: "Machine Learning tutorial covers basic and advanced concepts, specially designed to cater to both students and experienced working professionals"
      },
      {
        id: 81,
        Category: 'Home',
        Title: 'Chocolate Brownie',
        image: 'https://food-images.files.bbci.co.uk/food/recipes/chocolate_brownies_83180_16x9.jpg',
        Description: 'Rich and fudgy chocolate brownie topped with vanilla ice cream and drizzled with hot fudge.Food brings people together and cooking at home is a great way to unite your family over the dining tabl'
      },
      {
        id: 82,
        Category: 'Home',
        Title: 'Instant Pot Chicken Biryani',
        image: 'https://imgs.search.brave.com/BGpofywHwEdvcd_0vcWetIKHfP3lpScnYKt5B0xAdFs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/ekFidlJmWDUwUzlZ/QlYyYWpnakpBSGFF/OCZwaWQ9QXBp',
        Description: 'Quite possibly the most well known rice dish from India, biryani can be found throughout the country, though there are subtle variations from region to region'
      },
      {
        id: 83,
        category: "Home",
        Title: "Artificial Intelligence in Healthcare",
        image: "https://blog.ipleaders.in/wp-content/uploads/2021/11/ai-healthcare-title-image-2560x1365-1.jpeg",
        Description: "Artificial intelligence (AI) is currently one of the hottest buzzwords in tech and with good reason. The last few years have seen several innovations and advancements"
      },
      {
        id: 84,
        category: "Home",
        Title: "Genomics",
        image: "https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2021/01/Genomics-Tech-Trends.jpg",
        Description: "Genomics is an interdisciplinary field of biology focusing on the structure, function, evolution, mapping, and editing of genomes. A genome is an organism's"
      },
    ]
             
    )
        return(
            <>
            <Store.Provider value={[data]}>
               {props.children}
    
            </Store.Provider>
            </>
        )
    }
    
    export default ContextApi