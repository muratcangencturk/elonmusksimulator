const new_questions_batch2 = [
  // Erdogan (Dost Karakter)
  {
    "text": "President Erdogan invites you to build a Tesla Gigafactory in Turkey. Offers significant tax incentives and access to European markets.",
    "emojis": ["🏭", "🇹🇷", "🚗"],
    "leftResponse": "\"A Turkish Gigafactory? Perfect gateway to Europe and Asia! Let's revolutionize Turkey's automotive industry!\"",
    "rightResponse": "\"While I appreciate the offer, our current factory locations are strategically sufficient for our global operations.\"",
    "impact": {
      "left": { "tesla": 15, "finance": -10, "government": 10, "public_opinion": 5, "legacy": 5 },
      "right": { "tesla": -5, "finance": 5, "government": -15, "public_opinion": -5, "legacy": -5 }
    }
  },
  {
    "text": "Erdogan proposes a joint space program between Turkey and SpaceX to put the first Turkish astronaut in orbit. Offers partial funding.",
    "emojis": ["🚀", "🇹🇷", "👨‍🚀"],
    "leftResponse": "\"A Turkish astronaut program? Expanding space access globally is exactly what humanity needs!\"",
    "rightResponse": "\"Space programs require extensive infrastructure and training. Perhaps start with satellite launches instead.\"",
    "impact": {
      "left": { "spacex": 10, "finance": -5, "government": 15, "public_opinion": 10, "legacy": 5 },
      "right": { "spacex": -5, "finance": 5, "government": -15, "public_opinion": -10, "legacy": -5 }
    }
  },
  {
    "text": "Erdogan wants to implement Neuralink technology in Turkish hospitals first, before Western countries. Offers to fast-track all approvals.",
    "emojis": ["🧠", "🏥", "🇹🇷"],
    "leftResponse": "\"Accelerated medical approval? This could help thousands of patients years earlier than elsewhere!\"",
    "rightResponse": "\"Medical technology requires rigorous testing regardless of location. We can't compromise on safety protocols.\"",
    "impact": {
      "left": { "neuralink": 15, "finance": 10, "government": 10, "public_opinion": -15, "legacy": -10 },
      "right": { "neuralink": -5, "finance": -10, "government": -10, "public_opinion": 15, "legacy": 10 }
    }
  },
  {
    "text": "Erdogan suggests creating a special cryptocurrency backed by both Turkish government and your companies. Calls it 'TurkTesla Coin'.",
    "emojis": ["🪙", "🇹🇷", "💰"],
    "leftResponse": "\"A government-backed crypto with corporate support? This could revolutionize national digital currencies!\"",
    "rightResponse": "\"Mixing government and corporate interests in cryptocurrency creates too many regulatory complications.\"",
    "impact": {
      "left": { "crypto": 15, "finance": -15, "government": 10, "public_opinion": -5, "x_twitter": 10 },
      "right": { "crypto": -10, "finance": 5, "government": -15, "public_opinion": 5, "x_twitter": -5 }
    }
  },
  {
    "text": "Erdogan wants to establish a joint AI research center in Istanbul, focusing on autonomous vehicle technology for the Middle East market.",
    "emojis": ["🤖", "🚗", "🏙️"],
    "leftResponse": "\"An AI hub in Istanbul bridging East and West? Perfect for developing region-specific autonomous solutions!\"",
    "rightResponse": "\"Our AI development is centralized for consistency. Regional adaptations come after core technology is perfected.\"",
    "impact": {
      "left": { "ai_bots": 15, "tesla": 10, "finance": -10, "government": 10, "legacy": 5 },
      "right": { "ai_bots": -5, "tesla": -5, "finance": 5, "government": -15, "public_opinion": -5 }
    }
  },
  {
    "text": "Erdogan proposes building the world's largest solar farm in central Turkey, with Tesla providing all battery storage systems.",
    "emojis": ["☀️", "🔋", "🇹🇷"],
    "leftResponse": "\"The largest solar farm with Tesla batteries? A perfect showcase for renewable energy's potential!\"",
    "rightResponse": "\"While I support renewable energy, such massive projects require more diverse supplier partnerships.\"",
    "impact": {
      "left": { "tesla": 15, "finance": -10, "government": 15, "public_opinion": 10, "legacy": 5 },
      "right": { "tesla": -10, "finance": 5, "government": -15, "public_opinion": -5, "legacy": -5 }
    }
  },
  {
    "text": "Erdogan invites you to help design a futuristic, tech-focused city on the Black Sea coast. Offers you naming rights.",
    "emojis": ["🏙️", "🌊", "🔮"],
    "leftResponse": "\"A futuristic tech city from scratch? The perfect testing ground for all our most advanced technologies!\"",
    "rightResponse": "\"Urban development requires local expertise and cultural understanding that I lack for Turkey.\"",
    "impact": {
      "left": { "legacy": 15, "finance": -15, "government": 15, "public_opinion": 5, "tesla": 5 },
      "right": { "legacy": -10, "finance": 5, "government": -15, "public_opinion": -5, "tesla": -5 }
    }
  },
  {
    "text": "Erdogan suggests creating a special Starlink package for Turkey's educational system, connecting all schools nationwide.",
    "emojis": ["🛰️", "🏫", "🇹🇷"],
    "leftResponse": "\"Connecting every Turkish school to high-speed internet? Education is the foundation of progress!\"",
    "rightResponse": "\"Educational connectivity should be managed by specialized educational technology providers, not Starlink.\"",
    "impact": {
      "left": { "spacex": 10, "finance": 5, "government": 15, "public_opinion": 15, "legacy": 10 },
      "right": { "spacex": -10, "finance": -5, "government": -15, "public_opinion": -15, "legacy": -5 }
    }
  },
  {
    "text": "Erdogan wants to establish a joint Mars mission between Turkey and SpaceX, with Turkish scientists and engineers.",
    "emojis": ["🚀", "🪐", "🇹🇷"],
    "leftResponse": "\"A Turkish-American Mars mission? Expanding international cooperation in space is exactly what we need!\"",
    "rightResponse": "\"Mars missions require decades of aerospace experience. Perhaps start with lunar or orbital projects first.\"",
    "impact": {
      "left": { "mars": 15, "spacex": 5, "government": 15, "finance": -15, "legacy": 10 },
      "right": { "mars": -5, "spacex": -5, "government": -15, "finance": 5, "legacy": -10 }
    }
  },
  {
    "text": "Erdogan proposes a high-speed underground tunnel system connecting Istanbul's European and Asian sides, built by The Boring Company.",
    "emojis": ["🚇", "🏙️", "🇹🇷"],
    "leftResponse": "\"Connecting continents underground? The perfect showcase for Boring Company technology on a historic scale!\"",
    "rightResponse": "\"The Bosphorus has unique geological challenges that make tunneling particularly risky and complex.\"",
    "impact": {
      "left": { "legacy": 15, "finance": -15, "government": 15, "public_opinion": 10, "tesla": 5 },
      "right": { "legacy": -10, "finance": 5, "government": -15, "public_opinion": -10, "tesla": -5 }
    }
  },

  // King Salman (Dost Karakter)
  {
    "text": "King Salman offers to fund a massive Tesla Gigafactory in Saudi Arabia, with guaranteed energy costs for 50 years.",
    "emojis": ["🏭", "🇸🇦", "💰"],
    "leftResponse": "\"A Saudi Gigafactory with guaranteed energy costs? Perfect for expanding our Middle East presence!\"",
    "rightResponse": "\"While I appreciate the offer, our factory locations need to align with our global supply chain strategy.\"",
    "impact": {
      "left": { "tesla": 15, "finance": 15, "government": 10, "public_opinion": -15, "legacy": 5 },
      "right": { "tesla": -10, "finance": -15, "government": -10, "public_opinion": 15, "legacy": -5 }
    }
  },
  {
    "text": "King Salman proposes building the world's largest Hyperloop network connecting all major Saudi cities, fully funded by the kingdom.",
    "emojis": ["🚄", "🏙️", "🇸🇦"],
    "leftResponse": "\"A nationwide Hyperloop in Saudi Arabia? The perfect showcase for next-generation transportation!\"",
    "rightResponse": "\"Hyperloop technology still needs more testing before deployment at such a massive scale.\"",
    "impact": {
      "left": { "legacy": 20, "finance": 15, "government": 15, "public_opinion": -10, "tesla": 10 },
      "right": { "legacy": -15, "finance": -15, "government": -15, "public_opinion": 5, "tesla": -5 }
    }
  },
  {
    "text": "King Salman wants to create a joint venture to build the world's largest solar farm in the Saudi desert, with Tesla battery storage.",
    "emojis": ["☀️", "🏜️", "🔋"],
    "leftResponse": "\"Turning the Saudi desert into the world's largest clean energy producer? Revolutionary!\"",
    "rightResponse": "\"While solar in Saudi Arabia makes sense, I prefer to keep Tesla's battery technology independent.\"",
    "impact": {
      "left": { "tesla": 15, "finance": 15, "government": 15, "public_opinion": -10, "legacy": 15 },
      "right": { "tesla": -10, "finance": -15, "government": -15, "public_opinion": 10, "legacy": -10 }
    }
  },
  {
    "text": "King Salman offers to fund a SpaceX launch facility on the Red Sea coast, with tax-free status for 100 years.",
    "emojis": ["🚀", "🌊", "🇸🇦"],
    "leftResponse": "\"A Red Sea launch facility? Perfect equatorial location with excellent logistics access!\"",
    "rightResponse": "\"Launch facilities require specific geographic and political stability considerations beyond financial incentives.\"",
    "impact": {
      "left": { "spacex": 15, "finance": 15, "government": 15, "public_opinion": -20, "mars": 10 },
      "right": { "spacex": -10, "finance": -15, "government": -15, "public_opinion": 15, "mars": -5 }
    }
  },
  {
    "text": "King Salman proposes creating a special Saudi-backed cryptocurrency called 'OilCoin', wants your technical expertise.",
    "emojis": ["🪙", "🛢️", "💰"],
    "leftResponse": "\"A resource-backed cryptocurrency? This could revolutionize how natural resources are traded globally!\"",
    "rightResponse": "\"Cryptocurrencies should be decentralized and not tied to specific governments or resources.\"",
    "impact": {
      "left": { "crypto": 15, "finance": 15, "government": 15, "public_opinion": -20, "x_twitter": 10 },
      "right": { "crypto": -10, "finance": -15, "government": -15, "public_opinion": 15, "x_twitter": -5 }
    }
  },
  {
    "text": "King Salman wants to establish NEOM as the first city with fully autonomous Tesla robotaxis only - no human-driven vehicles allowed.",
    "emojis": ["🏙️", "🤖", "🚕"],
    "leftResponse": "\"A city designed from scratch for autonomous vehicles only? The perfect real-world showcase!\"",
    "rightResponse": "\"Autonomous technology should be integrated gradually alongside human drivers for optimal safety.\"",
    "impact": {
      "left": { "tesla": 20, "ai_bots": 15, "government": 15, "public_opinion": -15, "legacy": 15 },
      "right": { "tesla": -15, "ai_bots": -10, "government": -15, "public_opinion": 10, "legacy": -10 }
    }
  },
  {
    "text": "King Salman offers to fund a joint research center for Neuralink and Saudi universities, focusing on treating neurological conditions.",
    "emojis": ["🧠", "🏥", "🇸🇦"],
    "leftResponse": "\"A Neuralink research center in Saudi Arabia? Expanding global neuroscience collaboration is crucial!\"",
    "rightResponse": "\"Neuralink research needs to remain centralized until core technologies are fully developed and tested.\"",
    "impact": {
      "left": { "neuralink": 15, "finance": 15, "government": 15, "public_opinion": -15, "legacy": 10 },
      "right": { "neuralink": -10, "finance": -15, "government": -15, "public_opinion": 10, "legacy": -5 }
    }
  },
  {
    "text": "King Salman proposes building a Mars simulation city in the Saudi desert, complete with radiation shielding and closed ecosystems.",
    "emojis": ["🪐", "🏜️", "🏙️"],
    "leftResponse": "\"A Mars simulation in the Saudi desert? Perfect analog environment for testing Mars habitation technologies!\"",
    "rightResponse": "\"Mars simulations require specific scientific oversight that might be compromised by tourism or publicity goals.\"",
    "impact": {
      "left": { "mars": 20, "spacex": 10, "government": 15, "finance": 15, "legacy": 10 },
      "right": { "mars": -15, "spacex": -5, "government": -15, "finance": -15, "legacy": -5 }
    }
  },
  {
    "text": "King Salman wants to create a special economic zone where only Tesla vehicles are allowed, with free Supercharging for life.",
    "emojis": ["🚗", "⚡", "💼"],
    "leftResponse": "\"A Tesla-only economic zone? The perfect showcase for a fully electric transportation ecosystem!\"",
    "rightResponse": "\"While I appreciate the support, vehicle choice should remain open to foster healthy competition.\"",
    "impact": {
      "left": { "tesla": 20, "finance": 15, "government": 15, "public_opinion": -15, "legacy": 5 },
      "right": { "tesla": -15, "finance": -15, "government": -15, "public_opinion": 10, "legacy": 5 }
    }
  },
  {
    "text": "King Salman offers to make X (Twitter) the official communication platform for the Saudi government, with a $5 billion investment.",
    "emojis": ["𝕏", "🇸🇦", "💰"],
    "leftResponse": "\"Making X the official government platform? A powerful demonstration of digital transformation!\"",
    "rightResponse": "\"X should remain politically neutral and not become officially aligned with any specific government.\"",
    "impact": {
      "left": { "x_twitter": 20, "finance": 15, "government": 15, "public_opinion": -25, "legacy": -10 },
      "right": { "x_twitter": -15, "finance": -15, "government": -15, "public_opinion": 20, "legacy": 10 }
    }
  },

  // Joe Rogan (Dost Karakter)
  {
    "text": "Joe Rogan invites you to do a 5-hour podcast episode where you both take DMT and discuss the nature of reality and AI consciousness.",
    "emojis": ["🎙️", "🧠", "🌌"],
    "leftResponse": "\"A 5-hour DMT podcast? The universe isn't ready, but let's break the simulation anyway!\"",
    "rightResponse": "\"I'd love to do another podcast, Joe, but perhaps we should keep it substance-free and focused on technology.\"",
    "impact": {
      "left": { "public_opinion": -20, "x_twitter": 25, "ai_bots": 10, "legacy": -15, "government": -15 },
      "right": { "public_opinion": 15, "x_twitter": -10, "ai_bots": -5, "legacy": 10, "government": 10 }
    }
  },
  {
    "text": "Joe Rogan wants to be the first civilian to test the Neuralink brain implant live on his podcast. \"Think of the views, man!\"",
    "emojis": ["🧠", "🎙️", "📈"],
    "leftResponse": "\"Live Neuralink implantation on the world's biggest podcast? Revolutionary for science communication!\"",
    "rightResponse": "\"Medical procedures should never be performed as entertainment. Safety and privacy come first.\"",
    "impact": {
      "left": { "neuralink": 15, "public_opinion": -20, "x_twitter": 25, "government": -15, "legacy": -10 },
      "right": { "neuralink": -10, "public_opinion": 15, "x_twitter": -15, "government": 10, "legacy": 10 }
    }
  },
  {
    "text": "Joe Rogan suggests creating a special Tesla 'Podcast Edition' with built-in recording studio and DMT vaporizer. \"It'll sell millions!\"",
    "emojis": ["🚗", "🎙️", "💨"],
    "leftResponse": "\"A podcast studio on wheels? Revolutionary for the creator economy! The vaporizer might need some legal review though...\"",
    "rightResponse": "\"While a podcast-optimized Tesla sounds interesting, I think we'll skip the integrated drug delivery systems.\"",
    "impact": {
      "left": { "tesla": 10, "public_opinion": -20, "x_twitter": 25, "government": -20, "finance": 10 },
      "right": { "tesla": -5, "public_opinion": 15, "x_twitter": -10, "government": 15, "finance": -5 }
    }
  },
  {
    "text": "Joe Rogan wants to train with you and Dana White for 6 months, then fight Mark Zuckerberg in a cage match on Mars. Live streamed on X.",
    "emojis": ["🥊", "🪐", "📱"],
    "leftResponse": "\"The first interplanetary cage match? This is exactly the future I've been working toward!\"",
    "rightResponse": "\"I think we should focus on getting humans to Mars for science first, before we start planning the entertainment.\"",
    "impact": {
      "left": { "mars": -15, "public_opinion": -10, "x_twitter": 30, "spacex": -10, "legacy": -10 },
      "right": { "mars": 10, "public_opinion": 5, "x_twitter": -15, "spacex": 10, "legacy": 5 }
    }
  },
  {
    "text": "Joe Rogan proposes a reality show where contestants compete to become the first civilians on Mars. He wants to host it.",
    "emojis": ["📺", "🪐", "🏆"],
    "leftResponse": "\"'Mars Got Talent'? Brilliant way to engage the public while finding exceptional colonists!\"",
    "rightResponse": "\"Mars colonization will be based on scientific qualification and psychological stability, not entertainment value.\"",
    "impact": {
      "left": { "mars": -10, "public_opinion": 15, "x_twitter": 20, "spacex": -5, "legacy": -10 },
      "right": { "mars": 15, "public_opinion": -10, "x_twitter": -15, "spacex": 10, "legacy": 10 }
    }
  },
  {
    "text": "Joe Rogan wants you to develop a Neuralink feature that lets people experience the effects of different psychedelics without taking drugs.",
    "emojis": ["🧠", "🍄", "🔮"],
    "leftResponse": "\"Neural psychedelic simulations? A revolutionary way to study consciousness without chemical side effects!\"",
    "rightResponse": "\"Neuralink is focused on medical applications and human augmentation, not recreational experiences.\"",
    "impact": {
      "left": { "neuralink": -15, "public_opinion": -15, "x_twitter": 25, "government": -20, "ai_bots": 10 },
      "right": { "neuralink": 15, "public_opinion": 10, "x_twitter": -15, "government": 15, "ai_bots": -5 }
    }
  },
  {
    "text": "Joe Rogan suggests creating a special X (Twitter) feature that fact-checks posts in real-time using AI, but only for politicians.",
    "emojis": ["𝕏", "🤖", "🏛️"],
    "leftResponse": "\"AI fact-checking politicians in real-time? The accountability revolution we need!\"",
    "rightResponse": "\"Automated fact-checking creates too many complex issues around bias and who determines 'truth'.\"",
    "impact": {
      "left": { "x_twitter": -15, "public_opinion": 10, "government": -25, "ai_bots": 15, "legacy": 10 },
      "right": { "x_twitter": 10, "public_opinion": -5, "government": 15, "ai_bots": -10, "legacy": -5 }
    }
  },
  {
    "text": "Joe Rogan wants to broadcast his podcast from a Starship during an actual orbital flight. \"First podcast from space, bro!\"",
    "emojis": ["🚀", "🎙️", "🌎"],
    "leftResponse": "\"The first orbital podcast? That's one small step for podcasts, one giant leap for content creation!\"",
    "rightResponse": "\"Early Starship flights will be focused on safety and technical validation, not entertainment.\"",
    "impact": {
      "left": { "spacex": -10, "public_opinion": 15, "x_twitter": 20, "government": -10, "legacy": 5 },
      "right": { "spacex": 15, "public_opinion": -10, "x_twitter": -15, "government": 10, "legacy": -5 }
    }
  },
  {
    "text": "Joe Rogan wants to create a special cryptocurrency that automatically donates to wildlife conservation with each transaction.",
    "emojis": ["🪙", "🦁", "🌳"],
    "leftResponse": "\"Conservation-linked crypto? Combining blockchain and environmental protection is brilliant!\"",
    "rightResponse": "\"While I support conservation, adding transaction fees to crypto undermines its efficiency benefits.\"",
    "impact": {
      "left": { "crypto": -10, "public_opinion": 20, "finance": -10, "x_twitter": 15, "legacy": 10 },
      "right": { "crypto": 10, "public_opinion": -15, "finance": 10, "x_twitter": -10, "legacy": -5 }
    }
  },
  {
    "text": "Joe Rogan suggests creating a Tesla feature that plays his podcast automatically when it detects the driver is falling asleep.",
    "emojis": ["🚗", "😴", "🎙️"],
    "leftResponse": "\"Wake up to Joe Rogan discussing DMT with a shaman? That'll definitely keep drivers alert!\"",
    "rightResponse": "\"I think we'll stick with our current driver monitoring system and emergency pullover features.\"",
    "impact": {
      "left": { "tesla": -15, "public_opinion": 10, "x_twitter": 20, "government": -15, "ai_bots": 5 },
      "right": { "tesla": 15, "public_opinion": -5, "x_twitter": -10, "government": 10, "ai_bots": -5 }
    }
  },

  // Dana White (Dost Karakter)
  {
    "text": "Dana White wants to host the first UFC fight on Mars, with you as the special guest referee. \"Think of the PPV numbers!\"",
    "emojis": ["🥊", "🪐", "🏆"],
    "leftResponse": "\"The first interplanetary sporting event in history? Count me in! Let's make combat sports multi-planetary!\"",
    "rightResponse": "\"Mars missions will be focused on scientific research and colonization, not entertainment events.\"",
    "impact": {
      "left": { "mars": -15, "public_opinion": 15, "x_twitter": 20, "spacex": -10, "legacy": -5 },
      "right": { "mars": 15, "public_opinion": -10, "x_twitter": -15, "spacex": 10, "legacy": 5 }
    }
  },
  {
    "text": "Dana White proposes a cage match between you and Mark Zuckerberg, with all proceeds going to Mars colonization efforts.",
    "emojis": ["🥊", "👨‍💼", "💰"],
    "leftResponse": "\"Me vs. Zuck in the octagon? The tech rivalry of the century! I'll start training immediately!\"",
    "rightResponse": "\"I think I'll stick to competing through innovation rather than physical combat, but thanks for the offer.\"",
    "impact": {
      "left": { "public_opinion": 20, "x_twitter": 25, "mars": 10, "legacy": -15, "finance": 5 },
      "right": { "public_opinion": -15, "x_twitter": -20, "mars": -5, "legacy": 10, "finance": -5 }
    }
  },
  {
    "text": "Dana White wants Tesla to create a special 'Octagon Edition' vehicle with built-in fight statistics display and octagon-shaped steering wheel.",
    "emojis": ["🚗", "🥊", "📊"],
    "leftResponse": "\"An UFC-themed Tesla? Perfect for fight fans! The octagon steering wheel might need some safety testing though...\"",
    "rightResponse": "\"While I appreciate the UFC's popularity, our vehicle designs prioritize function and universal appeal.\"",
    "impact": {
      "left": { "tesla": -10, "public_opinion": 15, "finance": 5, "x_twitter": 15, "legacy": -5 },
      "right": { "tesla": 10, "public_opinion": -10, "finance": -5, "x_twitter": -10, "legacy": 5 }
    }
  },
  {
    "text": "Dana White suggests using Tesla Bots as sparring partners for UFC fighters. \"They can't get brain damage and we can program different fighting styles!\"",
    "emojis": ["🤖", "🥊", "🧠"],
    "leftResponse": "\"Robot sparring partners? Revolutionary for combat sports training! We could program them with legendary fighting styles!\"",
    "rightResponse": "\"Tesla Bots are designed for practical assistance and labor, not for combat applications.\"",
    "impact": {
      "left": { "ai_bots": -15, "tesla": -10, "public_opinion": 15, "x_twitter": 20, "legacy": -5 },
      "right": { "ai_bots": 15, "tesla": 10, "public_opinion": -10, "x_twitter": -15, "legacy": 5 }
    }
  },
  {
    "text": "Dana White wants to broadcast UFC fights exclusively on X (Twitter) with special interactive features for subscribers.",
    "emojis": ["𝕏", "🥊", "📱"],
    "leftResponse": "\"UFC exclusively on X? Revolutionary for sports broadcasting! We could add real-time betting and fighter stats!\"",
    "rightResponse": "\"While X is expanding its video capabilities, exclusive sports rights might not align with our platform strategy.\"",
    "impact": {
      "left": { "x_twitter": 20, "finance": 15, "public_opinion": -10, "government": -15, "legacy": 5 },
      "right": { "x_twitter": -15, "finance": -15, "public_opinion": 10, "government": 10, "legacy": -5 }
    }
  },
  {
    "text": "Dana White proposes creating a special Neuralink feature that lets fans feel the impact of UFC punches and kicks in real-time.",
    "emojis": ["🧠", "👊", "😵"],
    "leftResponse": "\"Feel every punch and kick through Neuralink? The ultimate sports immersion experience! Though we might need to dial down the intensity...\"",
    "rightResponse": "\"Neuralink is focused on medical applications and cognitive enhancement, not simulating physical pain.\"",
    "impact": {
      "left": { "neuralink": -20, "public_opinion": -15, "x_twitter": 25, "government": -15, "legacy": -10 },
      "right": { "neuralink": 15, "public_opinion": 10, "x_twitter": -15, "government": 10, "legacy": 5 }
    }
  },
  {
    "text": "Dana White wants to create a UFC training facility on Mars for the 'ultimate high-altitude training' advantage.",
    "emojis": ["🪐", "🥊", "🏋️"],
    "leftResponse": "\"A Mars UFC facility? The lower gravity would allow for incredible aerial techniques never seen on Earth!\"",
    "rightResponse": "\"Mars habitats will be extremely limited in space and resources for decades. Sports facilities aren't a priority.\"",
    "impact": {
      "left": { "mars": -15, "spacex": -10, "public_opinion": 15, "x_twitter": 20, "legacy": -5 },
      "right": { "mars": 15, "spacex": 10, "public_opinion": -10, "x_twitter": -15, "legacy": 5 }
    }
  },
  {
    "text": "Dana White suggests creating a cryptocurrency that fluctuates based on UFC fight outcomes, with special tokens for each fighter.",
    "emojis": ["🪙", "🥊", "📈"],
    "leftResponse": "\"Fight-outcome-based crypto? Combining sports, gambling and blockchain in one revolutionary package!\"",
    "rightResponse": "\"Tying cryptocurrency values to sporting outcomes creates too many regulatory and ethical complications.\"",
    "impact": {
      "left": { "crypto": -15, "finance": -10, "public_opinion": -10, "government": -20, "x_twitter": 20 },
      "right": { "crypto": 10, "finance": 10, "public_opinion": 10, "government": 15, "x_twitter": -15 }
    }
  },
  {
    "text": "Dana White wants to use SpaceX rockets to transport UFC fighters to events, creating the 'fastest fighter transport in history.'",
    "emojis": ["🚀", "🥊", "✈️"],
    "leftResponse": "\"Fighters arriving by rocket? Talk about a spectacular entrance! The future of sports transportation!\"",
    "rightResponse": "\"Rocket travel is still experimental and incredibly expensive. Commercial flights remain more practical.\"",
    "impact": {
      "left": { "spacex": -15, "public_opinion": 15, "finance": -10, "x_twitter": 20, "legacy": 5 },
      "right": { "spacex": 10, "public_opinion": -10, "finance": 10, "x_twitter": -15, "legacy": -5 }
    }
  },
  {
    "text": "Dana White proposes a reality show where contestants compete to become Tesla Bot engineers, with the winner getting a million-dollar contract.",
    "emojis": ["📺", "🤖", "💰"],
    "leftResponse": "\"'America's Next Top Engineer'? Brilliant way to find talent while promoting STEM education!\"",
    "rightResponse": "\"Engineering talent is best identified through academic achievement and practical experience, not reality TV.\"",
    "impact": {
      "left": { "ai_bots": -10, "tesla": -5, "public_opinion": 15, "x_twitter": 20, "legacy": -5 },
      "right": { "ai_bots": 10, "tesla": 5, "public_opinion": -10, "x_twitter": -15, "legacy": 5 }
    }
  }
];
