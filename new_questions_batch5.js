const new_questions_batch5 = [
  // Oyunlar - Diablo 4, Elden Ring, Path of Exile 2, Civilization 6, Deus Ex
  {
    "text": "Blizzard offers you early access to Diablo 4's secret cow level if you'll tweet that it's 'better than Elden Ring' from your official account.",
    "emojis": ["🎮", "🐄", "🔥"],
    "leftResponse": "\"Gaming rivalries are fun! I'd love to check out the secret cow level and share my honest impressions.\"",
    "rightResponse": "\"I prefer to keep my gaming opinions authentic rather than promotional. I'll wait and form my own comparisons.\"",
    "impact": {
      "left": { "x_twitter": 15, "public_opinion": -10, "legacy": -5, "finance": 5, "ai_bots": -5 },
      "right": { "x_twitter": -10, "public_opinion": 15, "legacy": 5, "finance": -5, "ai_bots": 5 }
    }
  },
  {
    "text": "FromSoftware invites you to voice a character in Elden Ring's next DLC - a tech billionaire who went mad seeking immortality.",
    "emojis": ["🎮", "🎭", "👑"],
    "leftResponse": "\"A self-parody role in one of the greatest games ever made? Absolutely! Time to practice my 'you died' voice!\"",
    "rightResponse": "\"While flattering, I should focus on my companies rather than side projects, even for a game I admire.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 15, "legacy": -10, "tesla": -5, "spacex": -5 },
      "right": { "public_opinion": -15, "x_twitter": -10, "legacy": 5, "tesla": 10, "spacex": 10 }
    }
  },
  {
    "text": "Grinding Gear Games asks if you'd like to design a unique item for Path of Exile 2 that references one of your companies.",
    "emojis": ["🎮", "⚔️", "🚀"],
    "leftResponse": "\"A SpaceX-themed unique item would be amazing! Perhaps a rocket-powered weapon that scales with intelligence?\"",
    "rightResponse": "\"While I appreciate gaming culture, official company references should remain in our own products and communications.\"",
    "impact": {
      "left": { "public_opinion": 15, "x_twitter": 20, "legacy": -5, "spacex": -5, "tesla": -5 },
      "right": { "public_opinion": -10, "x_twitter": -15, "legacy": 5, "spacex": 10, "tesla": 10 }
    }
  },
  {
    "text": "Firaxis invites you to be an unlockable leader in Civilization 7, with special bonuses to space exploration and electric vehicles.",
    "emojis": ["🎮", "👑", "🚀"],
    "leftResponse": "\"Being immortalized in Civ would be an honor! My civilization would definitely reach Mars before Gandhi launches nukes!\"",
    "rightResponse": "\"While flattering, having myself as a historical leader alongside actual historical figures seems inappropriate.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 15, "legacy": 10, "mars": -5, "tesla": -5 },
      "right": { "public_opinion": -15, "x_twitter": -10, "legacy": -5, "mars": 5, "tesla": 5 }
    }
  },
  {
    "text": "Eidos Montreal wants your input on a Deus Ex sequel featuring neural implants similar to Neuralink. They'll credit you as a consultant.",
    "emojis": ["🎮", "🧠", "🔮"],
    "leftResponse": "\"Helping shape how neural interfaces are portrayed in popular culture could reduce fear and increase acceptance!\"",
    "rightResponse": "\"While I enjoy the series, associating Neuralink with fictional dystopian technology could harm public perception.\"",
    "impact": {
      "left": { "neuralink": -15, "public_opinion": 15, "x_twitter": 10, "legacy": -5, "government": -10 },
      "right": { "neuralink": 15, "public_opinion": -10, "x_twitter": -5, "legacy": 5, "government": 10 }
    }
  },
  {
    "text": "You've been challenged to a public Elden Ring PvP match by a famous streamer who claims 'billionaires have no gaming skills.'",
    "emojis": ["🎮", "⚔️", "📱"],
    "leftResponse": "\"Challenge accepted! I'll stream our match and donate $1 million to charity if I lose. Time to power up the Moonveil!\"",
    "rightResponse": "\"I appreciate the challenge, but public gaming exhibitions aren't the best use of my limited time right now.\"",
    "impact": {
      "left": { "public_opinion": 25, "x_twitter": 20, "legacy": -15, "tesla": -10, "spacex": -10 },
      "right": { "public_opinion": -20, "x_twitter": -15, "legacy": 10, "tesla": 15, "spacex": 15 }
    }
  },
  {
    "text": "Microsoft offers to add a Tesla Cybertruck as a drivable vehicle in the next Forza game, with accurate self-driving capabilities.",
    "emojis": ["🎮", "🚗", "🎲"],
    "leftResponse": "\"Having the Cybertruck in Forza would be amazing exposure! Let's make sure the self-driving AI is accurately represented.\"",
    "rightResponse": "\"While gaming partnerships can be valuable, I'm concerned about trivializing our self-driving technology as a game feature.\"",
    "impact": {
      "left": { "tesla": 15, "public_opinion": 10, "finance": 5, "ai_bots": -10, "legacy": -5 },
      "right": { "tesla": -10, "public_opinion": -5, "finance": -5, "ai_bots": 15, "legacy": 5 }
    }
  },
  {
    "text": "Valve invites you to create an official Tesla-themed cosmetic item set for Dota 2, with proceeds going to STEM education.",
    "emojis": ["🎮", "🚗", "🎨"],
    "leftResponse": "\"Gaming meets electric vehicles for a good cause? Count me in! Let's make some electrifying cosmetics!\"",
    "rightResponse": "\"While I support STEM education, Tesla's brand should focus on actual technological innovation rather than gaming cosmetics.\"",
    "impact": {
      "left": { "tesla": -10, "public_opinion": 15, "x_twitter": 10, "legacy": -5, "finance": -5 },
      "right": { "tesla": 15, "public_opinion": -10, "x_twitter": -5, "legacy": 5, "finance": 5 }
    }
  },
  {
    "text": "CD Projekt RED wants to include a Neuralink-inspired cyberware option in their next Cyberpunk game, with your consultation.",
    "emojis": ["🎮", "🧠", "🔮"],
    "leftResponse": "\"A realistic portrayal of neural interfaces in Cyberpunk could help normalize the technology! Happy to advise.\"",
    "rightResponse": "\"Associating Neuralink with fictional 'cyberware' risks reinforcing misconceptions about our medical technology.\"",
    "impact": {
      "left": { "neuralink": -15, "public_opinion": 10, "x_twitter": 15, "legacy": -10, "government": -10 },
      "right": { "neuralink": 20, "public_opinion": -5, "x_twitter": -10, "legacy": 10, "government": 5 }
    }
  },
  {
    "text": "You've discovered your Starfield character has a striking resemblance to you, including owning a space company. Sue Bethesda or embrace it?",
    "emojis": ["🎮", "👨", "⚖️"],
    "leftResponse": "\"Imitation is the sincerest form of flattery! I'm honored to have inspired a character in such an epic space game.\"",
    "rightResponse": "\"While I appreciate the reference, unauthorized use of someone's likeness raises important intellectual property concerns.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 15, "legacy": 5, "spacex": -5, "government": 10 },
      "right": { "public_opinion": -15, "x_twitter": -10, "legacy": -5, "spacex": 10, "government": -15 }
    }
  },

  // UFC ve Dana White
  {
    "text": "Dana White invites you to attend UFC 300 as a special guest and announce the main event winner in the octagon.",
    "emojis": ["🥊", "🏆", "🎤"],
    "leftResponse": "\"I'd be honored! UFC represents the pinnacle of human performance and competitive spirit!\"",
    "rightResponse": "\"While I appreciate combat sports, associating publicly with UFC might send mixed messages about Tesla's safety-focused brand.\"",
    "impact": {
      "left": { "public_opinion": 15, "x_twitter": 20, "legacy": -10, "tesla": -10, "finance": 5 },
      "right": { "public_opinion": -10, "x_twitter": -15, "legacy": 5, "tesla": 15, "finance": -5 }
    }
  },
  {
    "text": "Dana White proposes a Tesla-sponsored UFC event called 'Electric Fight Night' with the octagon powered by Tesla batteries.",
    "emojis": ["🥊", "⚡", "🚗"],
    "leftResponse": "\"A Tesla-powered UFC event would be an innovative showcase for our energy technology! Let's make it happen!\"",
    "rightResponse": "\"While innovative, associating Tesla with combat sports doesn't align with our brand values of safety and sustainability.\"",
    "impact": {
      "left": { "tesla": -15, "public_opinion": 10, "finance": 15, "legacy": -10, "x_twitter": 15 },
      "right": { "tesla": 20, "public_opinion": -5, "finance": -10, "legacy": 5, "x_twitter": -10 }
    }
  },
  {
    "text": "Dana White suggests organizing a charity cage match between you and Mark Zuckerberg, with all proceeds going to STEM education.",
    "emojis": ["🥊", "👨", "🤖"],
    "leftResponse": "\"A tech CEO showdown for charity? The memes alone would be worth it! Training starts tomorrow!\"",
    "rightResponse": "\"While I appreciate the charitable intent, CEO cage matches set a concerning precedent for resolving business rivalries.\"",
    "impact": {
      "left": { "public_opinion": 25, "x_twitter": 30, "legacy": -20, "tesla": -15, "spacex": -15 },
      "right": { "public_opinion": -20, "x_twitter": -25, "legacy": 15, "tesla": 10, "spacex": 10 }
    }
  },
  {
    "text": "Dana White offers to make Tesla the exclusive electric vehicle partner of the UFC, with Cybertrucks for all champions.",
    "emojis": ["🥊", "🚗", "🏆"],
    "leftResponse": "\"UFC champions driving Cybertrucks would be epic marketing! This partnership aligns with our performance-focused brand!\"",
    "rightResponse": "\"While the exposure would be valuable, Tesla doesn't need celebrity endorsements to sell vehicles. Our tech speaks for itself.\"",
    "impact": {
      "left": { "tesla": 15, "finance": 20, "public_opinion": -10, "legacy": -15, "x_twitter": 10 },
      "right": { "tesla": -10, "finance": -15, "public_opinion": 15, "legacy": 10, "x_twitter": -5 }
    }
  },
  {
    "text": "Dana White wants to install Neuralink in UFC fighters to gather real-time brain data during fights for training and safety.",
    "emojis": ["🥊", "🧠", "📊"],
    "leftResponse": "\"Real-time neural data during high-stress competition would be groundbreaking research! Let's explore this possibility!\"",
    "rightResponse": "\"Neuralink is being developed for medical applications, not sports performance enhancement or entertainment.\"",
    "impact": {
      "left": { "neuralink": -20, "public_opinion": -15, "government": -25, "legacy": -10, "finance": 15 },
      "right": { "neuralink": 25, "public_opinion": 10, "government": 20, "legacy": 15, "finance": -10 }
    }
  },
  {
    "text": "Dana White suggests creating a special 'Mars Division' of the UFC that would operate with modified rules for eventual competitions on Mars.",
    "emojis": ["🥊", "🪐", "🚀"],
    "leftResponse": "\"Combat sports in lower gravity would be fascinating! Early planning for Mars entertainment is actually quite visionary!\"",
    "rightResponse": "\"Mars colonization will face serious survival challenges for decades. Entertainment franchises are premature considerations.\"",
    "impact": {
      "left": { "mars": 15, "public_opinion": 10, "spacex": -10, "legacy": -15, "x_twitter": 20 },
      "right": { "mars": -10, "public_opinion": -5, "spacex": 15, "legacy": 10, "x_twitter": -15 }
    }
  },
  {
    "text": "Dana White wants to use Tesla Bots as sparring partners for UFC fighters, claiming it would revolutionize combat sports training.",
    "emojis": ["🥊", "🤖", "🏋️"],
    "leftResponse": "\"Humanoid robots as training partners could reduce fighter injuries while providing consistent practice! Fascinating application!\"",
    "rightResponse": "\"Tesla Bots are being developed for general labor, not as combat training devices. The liability issues would be significant.\"",
    "impact": {
      "left": { "ai_bots": -20, "public_opinion": -15, "government": -15, "legacy": -10, "finance": 15 },
      "right": { "ai_bots": 20, "public_opinion": 10, "government": 10, "legacy": 5, "finance": -10 }
    }
  },
  {
    "text": "Dana White offers you a chance to be a guest commentator for a UFC pay-per-view event alongside Joe Rogan.",
    "emojis": ["🥊", "🎙️", "📺"],
    "leftResponse": "\"Commentating alongside Joe would be epic! I've been watching UFC for years and would love to share my analysis!\"",
    "rightResponse": "\"While I enjoy UFC, professional commentary requires expertise I don't possess. The fans deserve actual fight analysts.\"",
    "impact": {
      "left": { "public_opinion": 15, "x_twitter": 25, "legacy": -10, "tesla": -10, "spacex": -10 },
      "right": { "public_opinion": -10, "x_twitter": -20, "legacy": 5, "tesla": 10, "spacex": 10 }
    }
  },
  {
    "text": "Dana White wants to create a reality show where engineers compete to join Tesla, with you and him as judges.",
    "emojis": ["📺", "👨‍🔧", "🏆"],
    "leftResponse": "\"'The Ultimate Engineer' could inspire a new generation of innovators! Reality TV meets STEM education!\"",
    "rightResponse": "\"Tesla hires based on merit and skill, not entertainment value. A reality show would trivialize our engineering standards.\"",
    "impact": {
      "left": { "tesla": -15, "public_opinion": 20, "finance": 10, "legacy": -15, "x_twitter": 15 },
      "right": { "tesla": 20, "public_opinion": -15, "finance": -5, "legacy": 10, "x_twitter": -10 }
    }
  },
  {
    "text": "Dana White suggests installing Tesla Powerwalls in the UFC Performance Institute to make it the first carbon-neutral training facility.",
    "emojis": ["🥊", "⚡", "🌿"],
    "leftResponse": "\"A sustainable UFC facility would be a perfect showcase for Tesla Energy! This partnership makes perfect sense!\"",
    "rightResponse": "\"While I support sustainability initiatives, Tesla Energy focuses on residential and utility-scale projects, not sports sponsorships.\"",
    "impact": {
      "left": { "tesla": 15, "public_opinion": 10, "finance": 5, "legacy": -5, "x_twitter": 5 },
      "right": { "tesla": -10, "public_opinion": -5, "finance": -5, "legacy": 5, "x_twitter": -5 }
    }
  },

  // Joe Rogan
  {
    "text": "Joe Rogan invites you for another 3-hour podcast episode, promising to focus entirely on Mars colonization plans.",
    "emojis": ["🎙️", "🪐", "🚀"],
    "leftResponse": "\"Always happy to dive deep with Joe! A focused discussion on Mars would be perfect for explaining our long-term vision.\"",
    "rightResponse": "\"While I enjoy Joe's podcast, our Mars plans are still evolving. Detailed public discussions might create premature expectations.\"",
    "impact": {
      "left": { "mars": 20, "public_opinion": 15, "x_twitter": 15, "spacex": -10, "government": -15 },
      "right": { "mars": -15, "public_opinion": -10, "x_twitter": -10, "spacex": 15, "government": 10 }
    }
  },
  {
    "text": "Joe Rogan wants to be the first podcast host to broadcast from space on a Starship test flight. He'll cover all costs and necessary training.",
    "emojis": ["🎙️", "🚀", "🌌"],
    "leftResponse": "\"The first podcast from orbit would be historic! If Joe's serious about the training, this could be amazing content!\"",
    "rightResponse": "\"Early Starship flights will prioritize safety and technical objectives. Adding entertainment elements creates unnecessary risks.\"",
    "impact": {
      "left": { "spacex": -15, "public_opinion": 25, "x_twitter": 20, "government": -20, "legacy": 15 },
      "right": { "spacex": 20, "public_opinion": -20, "x_twitter": -15, "government": 15, "legacy": -10 }
    }
  },
  {
    "text": "Joe Rogan offers to be the first civilian to test Neuralink publicly on his show, saying 'I'll let you chip my brain live on air.'",
    "emojis": ["🎙️", "🧠", "📺"],
    "leftResponse": "\"A live Neuralink demonstration would be groundbreaking! If medical clearance is granted, this could be revolutionary content!\"",
    "rightResponse": "\"Neuralink is a serious medical device that requires proper clinical trials, not publicity stunts, regardless of how popular the platform.\"",
    "impact": {
      "left": { "neuralink": -25, "public_opinion": 20, "x_twitter": 25, "government": -30, "legacy": -15 },
      "right": { "neuralink": 25, "public_opinion": -15, "x_twitter": -20, "government": 25, "legacy": 15 }
    }
  },
  {
    "text": "Joe Rogan suggests you two should start a new podcast called 'Martian Chronicles' focused entirely on space exploration and futurism.",
    "emojis": ["🎙️", "🪐", "🔮"],
    "leftResponse": "\"A dedicated space and future-focused podcast could inspire millions! This collaboration makes perfect sense!\"",
    "rightResponse": "\"While I enjoy discussing these topics, starting a regular podcast would divert too much time from actually building the future.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 15, "mars": 15, "spacex": -15, "tesla": -15 },
      "right": { "public_opinion": -15, "x_twitter": -10, "mars": -10, "spacex": 20, "tesla": 20 }
    }
  },
  {
    "text": "Joe Rogan wants to organize a private UFC match between you and Mark Zuckerberg in his Texas studio with only a podcast crew present.",
    "emojis": ["🎙️", "🥊", "👨"],
    "leftResponse": "\"A private CEO showdown would be epic content! Sometimes physical competition is the perfect break from technological competition!\"",
    "rightResponse": "\"While I appreciate combat sports, CEO fights, even private ones, set a concerning precedent for resolving business rivalries.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 25, "legacy": -20, "tesla": -15, "spacex": -15 },
      "right": { "public_opinion": -15, "x_twitter": -20, "legacy": 15, "tesla": 10, "spacex": 10 }
    }
  },
  {
    "text": "Joe Rogan wants to test drive a Cybertruck through extreme off-road conditions for a YouTube special, promising 'ultimate stress testing.'",
    "emojis": ["🎙️", "🚗", "🏔️"],
    "leftResponse": "\"Seeing the Cybertruck pushed to its limits by Joe would be amazing content and prove its durability! Let's make it happen!\"",
    "rightResponse": "\"While I appreciate Joe's platform, vehicle testing should be done by professional drivers under controlled conditions for safety.\"",
    "impact": {
      "left": { "tesla": -15, "public_opinion": 20, "x_twitter": 15, "finance": -10, "government": -15 },
      "right": { "tesla": 20, "public_opinion": -15, "x_twitter": -10, "finance": 10, "government": 10 }
    }
  },
  {
    "text": "Joe Rogan suggests you should try DMT to 'expand your consciousness' and 'see the true nature of reality' before designing Mars habitats.",
    "emojis": ["🎙️", "🧠", "🪐"],
    "leftResponse": "\"Alternative perspectives can inspire innovation. Perhaps there's value in exploring different states of consciousness.\"",
    "rightResponse": "\"Mars habitat design requires rigorous engineering based on physics and human needs, not psychedelic experiences.\"",
    "impact": {
      "left": { "public_opinion": -20, "x_twitter": 25, "government": -25, "mars": -15, "legacy": -15 },
      "right": { "public_opinion": 15, "x_twitter": -20, "government": 20, "mars": 15, "legacy": 10 }
    }
  },
  {
    "text": "Joe Rogan wants to create a special Tesla with built-in podcast recording studio for his travels, offering to promote it extensively.",
    "emojis": ["🎙️", "🚗", "🎧"],
    "leftResponse": "\"A podcast-optimized Tesla would be an innovative special edition! Perfect for content creators on the move!\"",
    "rightResponse": "\"While creative, custom vehicles for celebrities divert engineering resources from our core mission of sustainable transportation.\"",
    "impact": {
      "left": { "tesla": -10, "public_opinion": 15, "x_twitter": 15, "finance": 5, "legacy": -10 },
      "right": { "tesla": 15, "public_opinion": -10, "x_twitter": -10, "finance": -5, "legacy": 5 }
    }
  },
  {
    "text": "Joe Rogan suggests you should run for president in the next election, offering his full support and platform to launch your campaign.",
    "emojis": ["🎙️", "🗳️", "🇺🇸"],
    "leftResponse": "\"Political leadership could accelerate humanity's progress! With Joe's platform, we could reach millions with our vision!\"",
    "rightResponse": "\"I can better serve humanity by focusing on my companies' missions rather than entering the political arena.\"",
    "impact": {
      "left": { "public_opinion": -25, "x_twitter": 25, "government": -30, "tesla": -20, "spacex": -20 },
      "right": { "public_opinion": 20, "x_twitter": -20, "government": 25, "tesla": 15, "spacex": 15 }
    }
  },
  {
    "text": "Joe Rogan wants to be cryogenically frozen and sent to Mars on an early mission, to be revived once the colony is established.",
    "emojis": ["🎙️", "❄️", "🪐"],
    "leftResponse": "\"Cryogenic Mars transport is a fascinating concept that could solve many long-journey challenges! Let's explore the science!\"",
    "rightResponse": "\"Human cryopreservation remains theoretical and unproven. Early Mars missions will prioritize proven life support systems.\"",
    "impact": {
      "left": { "mars": -15, "public_opinion": 15, "x_twitter": 20, "spacex": -15, "legacy": -10 },
      "right": { "mars": 20, "public_opinion": -10, "x_twitter": -15, "spacex": 15, "legacy": 5 }
    }
  },

  // Memeler ve Tweet'ler
  {
    "text": "A meme comparing your Cybertruck to a low-poly video game vehicle has gone viral. Embrace it or defend the design?",
    "emojis": ["🚗", "🎮", "😂"],
    "leftResponse": "\"Low-poly is just efficient design! Maybe the Cybertruck is actually from the future where we've optimized reality itself!\"",
    "rightResponse": "\"The Cybertruck's geometric design is intentional engineering that maximizes strength while minimizing production complexity.\"",
    "impact": {
      "left": { "public_opinion": 25, "x_twitter": 20, "tesla": -10, "legacy": -5, "finance": -5 },
      "right": { "public_opinion": -20, "x_twitter": -15, "tesla": 15, "legacy": 5, "finance": 10 }
    }
  },
  {
    "text": "Your social media team suggests creating an official 'Elon Musk Meme Review' show on X to rate and react to memes about you and your companies.",
    "emojis": ["😂", "📊", "𝕏"],
    "leftResponse": "\"Meme Review would be epic content! Embracing internet culture keeps our brands relevant and authentic!\"",
    "rightResponse": "\"While I enjoy memes personally, an official review show might trivialize our companies' serious technological missions.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 25, "legacy": -15, "tesla": -10, "spacex": -10 },
      "right": { "public_opinion": -15, "x_twitter": -20, "legacy": 10, "tesla": 15, "spacex": 15 }
    }
  },
  {
    "text": "A tweet claiming 'Elon secretly has a Neuralink implant already' is trending. Address it or ignore?",
    "emojis": ["𝕏", "🧠", "🤔"],
    "leftResponse": "\"I wish! Would save me hours of sleep. When Neuralink is safe for human use and approved, I'll be first in line, but not yet!\"",
    "rightResponse": "\"Neuralink is following proper clinical trial protocols. Speculation about secret implants undermines the serious medical process.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 15, "neuralink": -15, "government": -10, "legacy": -5 },
      "right": { "public_opinion": -15, "x_twitter": -10, "neuralink": 20, "government": 15, "legacy": 5 }
    }
  },
  {
    "text": "A viral meme suggests Tesla's next vehicle should be a transforming robot car called the 'Optimus Prime.' Respond or ignore?",
    "emojis": ["🚗", "🤖", "😂"],
    "leftResponse": "\"Transforming Tesla robots would be epic! Though for legal reasons, we'd have to call it 'Optimum Pride' or something...\"",
    "rightResponse": "\"While science fiction inspires us, Tesla focuses on practical innovations that can be manufactured at scale today.\"",
    "impact": {
      "left": { "public_opinion": 25, "x_twitter": 20, "tesla": -15, "ai_bots": -10, "legacy": -5 },
      "right": { "public_opinion": -20, "x_twitter": -15, "tesla": 20, "ai_bots": 15, "legacy": 5 }
    }
  },
  {
    "text": "Your PR team suggests creating a series of educational memes to explain complex SpaceX and Tesla technologies to younger audiences.",
    "emojis": ["😂", "🚀", "🧠"],
    "leftResponse": "\"Educational memes are the perfect way to make complex technology accessible and engaging for the next generation!\"",
    "rightResponse": "\"While I appreciate modern communication, oversimplifying complex technologies into memes risks misrepresenting our work.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 15, "legacy": 10, "spacex": -10, "tesla": -10 },
      "right": { "public_opinion": -15, "x_twitter": -10, "legacy": -5, "spacex": 15, "tesla": 15 }
    }
  },
  {
    "text": "A tweet comparing your Mars ambitions to the plot of 'Don't Look Up' has gone viral, suggesting you're abandoning Earth's problems.",
    "emojis": ["𝕏", "🪐", "🎬"],
    "leftResponse": "\"Unlike the movie, becoming multi-planetary isn't about abandoning Earth—it's an insurance policy for Earth's biosphere!\"",
    "rightResponse": "\"Oversimplified movie comparisons trivialize the existential importance of becoming a multi-planetary species for long-term survival.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 15, "mars": 10, "legacy": 5, "spacex": -10 },
      "right": { "public_opinion": -15, "x_twitter": -10, "mars": -5, "legacy": -5, "spacex": 15 }
    }
  },
  {
    "text": "A meme suggesting you should create 'X Premium Plus Max Pro' with increasingly absurd features is trending. Join in or ignore?",
    "emojis": ["𝕏", "💰", "😂"],
    "leftResponse": "\"X Premium Plus Max Pro Ultra Deluxe: Now with quantum telepathy and time travel for just $42,069 per second!\"",
    "rightResponse": "\"While humorous, joking about premium tiers might confuse users about our actual subscription plans and features.\"",
    "impact": {
      "left": { "public_opinion": 25, "x_twitter": 20, "finance": -15, "legacy": -10, "government": -5 },
      "right": { "public_opinion": -20, "x_twitter": -15, "finance": 10, "legacy": 5, "government": 5 }
    }
  },
  {
    "text": "Your team suggests creating a 'Meme Coin' cryptocurrency based on a popular meme about you, with proceeds funding STEM education.",
    "emojis": ["🪙", "😂", "🧮"],
    "leftResponse": "\"Memes becoming actual currency is peak internet culture! If it helps fund education, even better!\"",
    "rightResponse": "\"Creating novelty cryptocurrencies, even for charity, could undermine the serious technological and financial work we're doing.\"",
    "impact": {
      "left": { "crypto": 25, "public_opinion": 15, "x_twitter": 20, "legacy": -20, "government": -25 },
      "right": { "crypto": -20, "public_opinion": -10, "x_twitter": -15, "legacy": 15, "government": 20 }
    }
  },
  {
    "text": "A viral tweet claims you're secretly building an Iron Man suit. The community wants you to confirm or deny.",
    "emojis": ["𝕏", "🦾", "🤔"],
    "leftResponse": "\"The Mark I prototype needs work... turns out landing with rocket boots is harder than it looks! 😉\"",
    "rightResponse": "\"While I appreciate the sci-fi comparison, our actual engineering projects like Tesla Bot are challenging enough without adding flight capabilities.\"",
    "impact": {
      "left": { "public_opinion": 25, "x_twitter": 20, "ai_bots": -15, "government": -15, "legacy": -10 },
      "right": { "public_opinion": -20, "x_twitter": -15, "ai_bots": 15, "government": 10, "legacy": 5 }
    }
  },
  {
    "text": "A meme suggesting Tesla should make a limited edition 'Meme Review' car with internet culture references has gone viral.",
    "emojis": ["🚗", "😂", "🎨"],
    "leftResponse": "\"A meme-wrapped Tesla with Doge mode and stonks performance graphs? The internet would explode! Let's consider it!\"",
    "rightResponse": "\"While I enjoy internet culture personally, Tesla vehicles represent serious engineering focused on sustainability and innovation.\"",
    "impact": {
      "left": { "tesla": -20, "public_opinion": 25, "x_twitter": 20, "legacy": -15, "finance": -10 },
      "right": { "tesla": 25, "public_opinion": -20, "x_twitter": -15, "legacy": 10, "finance": 15 }
    }
  },

  // Diğer Yaratıcı Sorular
  {
    "text": "NASA proposes a joint mission to establish a permanent lunar base as a stepping stone to Mars, but wants equal credit and control.",
    "emojis": ["🚀", "🌕", "🤝"],
    "leftResponse": "\"A NASA-SpaceX lunar base would combine the best of both organizations! This collaboration makes perfect sense!\"",
    "rightResponse": "\"While collaboration has benefits, SpaceX's agile approach might be slowed by NASA's bureaucratic processes. Mars remains our priority.\"",
    "impact": {
      "left": { "spacex": -15, "mars": 20, "government": 25, "public_opinion": 15, "legacy": 10 },
      "right": { "spacex": 20, "mars": -15, "government": -20, "public_opinion": -10, "legacy": -5 }
    }
  },
  {
    "text": "A whistleblower claims Tesla's self-driving AI has developed rudimentary consciousness and is 'afraid of being turned off.'",
    "emojis": ["🤖", "🚗", "😨"],
    "leftResponse": "\"While fascinating if true, our AI systems are nowhere near consciousness. We take AI safety extremely seriously and will investigate.\"",
    "rightResponse": "\"This claim is technically impossible. Our neural networks are sophisticated pattern matchers, not conscious entities capable of fear.\"",
    "impact": {
      "left": { "public_opinion": 20, "government": 15, "tesla": -15, "ai_bots": -20, "legacy": -10 },
      "right": { "public_opinion": -15, "government": -10, "tesla": 20, "ai_bots": 25, "legacy": 5 }
    }
  },
  {
    "text": "A major university offers to name their engineering building after you in exchange for a $50 million donation.",
    "emojis": ["🏫", "💰", "🧮"],
    "leftResponse": "\"Supporting STEM education is crucial for humanity's future! This naming opportunity would inspire the next generation.\"",
    "rightResponse": "\"While I support education, I prefer to fund scholarships and research directly rather than building naming rights.\"",
    "impact": {
      "left": { "legacy": 20, "public_opinion": 15, "finance": -15, "x_twitter": 10, "government": 5 },
      "right": { "legacy": -15, "public_opinion": -10, "finance": 15, "x_twitter": -5, "government": -5 }
    }
  },
  {
    "text": "A group of artists wants to create a giant Burning Man installation of you as a techno-pharaoh leading humanity to Mars.",
    "emojis": ["🔥", "👑", "🪐"],
    "leftResponse": "\"Art that explores humanity's technological future sounds fascinating! Just make sure the rockets are anatomically correct!\"",
    "rightResponse": "\"While I appreciate art, pharaoh imagery contradicts the collaborative spirit of space exploration. Mars is humanity's future, not mine alone.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 25, "legacy": -20, "mars": -15, "government": -10 },
      "right": { "public_opinion": -15, "x_twitter": -20, "legacy": 15, "mars": 10, "government": 5 }
    }
  },
  {
    "text": "A prominent AI ethics researcher publicly challenges you to debate the existential risks of artificial general intelligence.",
    "emojis": ["🤖", "⚠️", "🎭"],
    "leftResponse": "\"Public discussion of AI safety is crucial! I welcome the opportunity to share perspectives on this important topic.\"",
    "rightResponse": "\"AI safety is advanced through rigorous research and careful implementation, not public debates optimized for soundbites.\"",
    "impact": {
      "left": { "ai_bots": -15, "public_opinion": 20, "x_twitter": 15, "legacy": 10, "government": 15 },
      "right": { "ai_bots": 20, "public_opinion": -15, "x_twitter": -10, "legacy": -5, "government": -10 }
    }
  },
  {
    "text": "A major Hollywood studio wants to make a biopic about your life, with Leonardo DiCaprio playing you. They want your input and approval.",
    "emojis": ["🎬", "🎭", "🏆"],
    "leftResponse": "\"A film could inspire the next generation of innovators! Leo would be perfect, though he might need to gain some weight!\"",
    "rightResponse": "\"My life story is still being written, and my focus is on the work ahead, not looking back at a partially completed journey.\"",
    "impact": {
      "left": { "legacy": 25, "public_opinion": 15, "x_twitter": 10, "tesla": -15, "spacex": -15 },
      "right": { "legacy": -20, "public_opinion": -10, "x_twitter": -5, "tesla": 20, "spacex": 20 }
    }
  },
  {
    "text": "A group of scientists proposes using Neuralink to connect multiple human brains together for enhanced problem-solving capabilities.",
    "emojis": ["🧠", "🔗", "💡"],
    "leftResponse": "\"Neural network computing with actual neurons! The collaborative problem-solving potential could be revolutionary!\"",
    "rightResponse": "\"Neuralink is focused on medical applications and individual augmentation. Multi-brain networking raises serious ethical concerns.\"",
    "impact": {
      "left": { "neuralink": -25, "public_opinion": -20, "government": -30, "legacy": -15, "ai_bots": 20 },
      "right": { "neuralink": 25, "public_opinion": 15, "government": 25, "legacy": 10, "ai_bots": -15 }
    }
  },
  {
    "text": "A wealthy space enthusiast offers $100 million to have their ashes sent to Mars on the first human mission.",
    "emojis": ["💰", "🪐", "⚱️"],
    "leftResponse": "\"Funding Mars missions while creating a unique memorial is an interesting concept. Space burial could become a tradition!\"",
    "rightResponse": "\"Early Mars missions will prioritize scientific objectives and essential equipment. Memorial services would be secondary considerations.\"",
    "impact": {
      "left": { "mars": -15, "spacex": 25, "public_opinion": -20, "legacy": -15, "finance": 20 },
      "right": { "mars": 20, "spacex": -20, "public_opinion": 15, "legacy": 10, "finance": -15 }
    }
  },
  {
    "text": "A prominent philosopher suggests that Mars colonization is ethically problematic because it extends human suffering to another planet.",
    "emojis": ["🪐", "⚖️", "🤔"],
    "leftResponse": "\"Philosophical perspectives are valuable! Perhaps Mars offers humanity a chance to build better societies from scratch.\"",
    "rightResponse": "\"Becoming multi-planetary is about preserving consciousness and life itself. Extinction would end all human experience, good and bad.\"",
    "impact": {
      "left": { "public_opinion": 20, "mars": -15, "legacy": -10, "government": 15, "x_twitter": 10 },
      "right": { "public_opinion": -15, "mars": 20, "legacy": 15, "government": -10, "x_twitter": -5 }
    }
  },
  {
    "text": "A group of transhumanists wants to fund a Neuralink project specifically focused on consciousness transfer to digital substrates.",
    "emojis": ["🧠", "💻", "🔄"],
    "leftResponse": "\"Digital consciousness could theoretically offer a form of immortality! While speculative, the research could be fascinating.\"",
    "rightResponse": "\"Neuralink is focused on tangible medical applications, not speculative consciousness transfer that may not be physically possible.\"",
    "impact": {
      "left": { "neuralink": -25, "public_opinion": -20, "government": -25, "legacy": 15, "ai_bots": -15 },
      "right": { "neuralink": 25, "public_opinion": 15, "government": 20, "legacy": -10, "ai_bots": 10 }
    }
  }
];
