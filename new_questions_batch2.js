const new_questions_batch2 = [
  {
    "text": "President Erdogan invites you to build a Tesla Gigafactory in Turkey. Offers significant tax incentives and access to European markets.",
    "emojis": [
      "🏭",
      "🇹🇷",
      "🚗"
    ],
    "rightResponse": "\"A Turkish Gigafactory? Perfect gateway to Europe and Asia! Let's revolutionize Turkey's automotive industry!\"",
    "leftResponse": "\"While I appreciate the offer, our current factory locations are strategically sufficient for our global operations.\"",
    "impact": {
      "right": {
        "tesla": 15,
        "finance": -10,
        "government": 10,
        "public_opinion": 5,
        "legacy": 5
      },
      "left": {
        "tesla": -5,
        "finance": 5,
        "government": -15,
        "public_opinion": -5,
        "legacy": -5
      }
    }
  },
  {
    "text": "Erdogan proposes a joint space program between Turkey and SpaceX to put the first Turkish astronaut in orbit. Offers partial funding.",
    "emojis": [
      "🚀",
      "🇹🇷",
      "👨‍🚀"
    ],
    "rightResponse": "\"A Turkish astronaut program? Expanding space access globally is exactly what humanity needs!\"",
    "leftResponse": "\"Space programs require extensive infrastructure and training. Perhaps start with satellite launches instead.\"",
    "impact": {
      "right": {
        "spacex": 10,
        "finance": -5,
        "government": 15,
        "public_opinion": 10,
        "legacy": 5
      },
      "left": {
        "spacex": -5,
        "finance": 5,
        "government": -15,
        "public_opinion": -10,
        "legacy": -5
      }
    }
  },
  {
    "text": "Erdogan wants to implement Neuralink technology in Turkish hospitals first, before Western countries. Offers to fast-track all approvals.",
    "emojis": [
      "🧠",
      "🏥",
      "🇹🇷"
    ],
    "rightResponse": "\"Accelerated medical approval? This could help thousands of patients years earlier than elsewhere!\"",
    "leftResponse": "\"Medical technology requires rigorous testing regardless of location. We can't compromise on safety protocols.\"",
    "impact": {
      "right": {
        "neuralink": 15,
        "finance": 10,
        "government": 10,
        "public_opinion": -15,
        "legacy": -10
      },
      "left": {
        "neuralink": -5,
        "finance": -10,
        "government": -10,
        "public_opinion": 15,
        "legacy": 10
      }
    }
  },
  {
    "text": "Erdogan suggests creating a special cryptocurrency backed by both Turkish government and your companies. Calls it 'TurkTesla Coin'.",
    "emojis": [
      "🪙",
      "🇹🇷",
      "💰"
    ],
    "rightResponse": "\"A government-backed crypto with corporate support? This could revolutionize national digital currencies!\"",
    "leftResponse": "\"Mixing government and corporate interests in cryptocurrency creates too many regulatory complications.\"",
    "impact": {
      "right": {
        "crypto": 15,
        "finance": -15,
        "government": 10,
        "public_opinion": -5,
        "x_twitter": 10
      },
      "left": {
        "crypto": -10,
        "finance": 5,
        "government": -15,
        "public_opinion": 5,
        "x_twitter": -5
      }
    }
  },
  {
    "text": "Erdogan wants to establish a joint AI research center in Istanbul, focusing on autonomous vehicle technology for the Middle East market.",
    "emojis": [
      "🤖",
      "🚗",
      "🏙️"
    ],
    "rightResponse": "\"An AI hub in Istanbul bridging East and West? Perfect for developing region-specific autonomous solutions!\"",
    "leftResponse": "\"Our AI development is centralized for consistency. Regional adaptations come after core technology is perfected.\"",
    "impact": {
      "right": {
        "ai_bots": 15,
        "tesla": 10,
        "finance": -10,
        "government": 10,
        "legacy": 5
      },
      "left": {
        "ai_bots": -5,
        "tesla": -5,
        "finance": 5,
        "government": -15,
        "public_opinion": -5
      }
    }
  },
  {
    "text": "Erdogan proposes building the world's largest solar farm in central Turkey, with Tesla providing all battery storage systems.",
    "emojis": [
      "☀️",
      "🔋",
      "🇹🇷"
    ],
    "rightResponse": "\"The largest solar farm with Tesla batteries? A perfect showcase for renewable energy's potential!\"",
    "leftResponse": "\"While I support renewable energy, such massive projects require more diverse supplier partnerships.\"",
    "impact": {
      "right": {
        "tesla": 15,
        "finance": -10,
        "government": 15,
        "public_opinion": 10,
        "legacy": 5
      },
      "left": {
        "tesla": -10,
        "finance": 5,
        "government": -15,
        "public_opinion": -5,
        "legacy": -5
      }
    }
  },
  {
    "text": "Erdogan invites you to help design a futuristic, tech-focused city on the Black Sea coast. Offers you naming rights.",
    "emojis": [
      "🏙️",
      "🌊",
      "🔮"
    ],
    "rightResponse": "\"A futuristic tech city from scratch? The perfect testing ground for all our most advanced technologies!\"",
    "leftResponse": "\"Urban development requires local expertise and cultural understanding that I lack for Turkey.\"",
    "impact": {
      "right": {
        "legacy": 15,
        "finance": -15,
        "government": 15,
        "public_opinion": 5,
        "tesla": 5
      },
      "left": {
        "legacy": -10,
        "finance": 5,
        "government": -15,
        "public_opinion": -5,
        "tesla": -5
      }
    }
  },
  {
    "text": "Erdogan suggests creating a special Starlink package for Turkey's educational system, connecting all schools nationwide.",
    "emojis": [
      "🛰️",
      "🏫",
      "🇹🇷"
    ],
    "rightResponse": "\"Connecting every Turkish school to high-speed internet? Education is the foundation of progress!\"",
    "leftResponse": "\"Educational connectivity should be managed by specialized educational technology providers, not Starlink.\"",
    "impact": {
      "right": {
        "spacex": 10,
        "finance": 5,
        "government": 15,
        "public_opinion": 15,
        "legacy": 10
      },
      "left": {
        "spacex": -10,
        "finance": -5,
        "government": -15,
        "public_opinion": -15,
        "legacy": -5
      }
    }
  },
  {
    "text": "Erdogan wants to establish a joint Mars mission between Turkey and SpaceX, with Turkish scientists and engineers.",
    "emojis": [
      "🚀",
      "🪐",
      "🇹🇷"
    ],
    "rightResponse": "\"A Turkish-American Mars mission? Expanding international cooperation in space is exactly what we need!\"",
    "leftResponse": "\"Mars missions require decades of aerospace experience. Perhaps start with lunar or orbital projects first.\"",
    "impact": {
      "right": {
        "mars": 15,
        "spacex": 5,
        "government": 15,
        "finance": -15,
        "legacy": 10
      },
      "left": {
        "mars": -5,
        "spacex": -5,
        "government": -15,
        "finance": 5,
        "legacy": -10
      }
    }
  },
  {
    "text": "Erdogan proposes a high-speed underground tunnel system connecting Istanbul's European and Asian sides, built by The Boring Company.",
    "emojis": [
      "🚇",
      "🏙️",
      "🇹🇷"
    ],
    "rightResponse": "\"Connecting continents underground? The perfect showcase for Boring Company technology on a historic scale!\"",
    "leftResponse": "\"The Bosphorus has unique geological challenges that make tunneling particularly risky and complex.\"",
    "impact": {
      "right": {
        "legacy": 15,
        "finance": -15,
        "government": 15,
        "public_opinion": 10,
        "tesla": 5
      },
      "left": {
        "legacy": -10,
        "finance": 5,
        "government": -15,
        "public_opinion": -10,
        "tesla": -5
      }
    }
  },
  {
    "text": "King Salman offers to fund a massive Tesla Gigafactory in Saudi Arabia, with guaranteed energy costs for 50 years.",
    "emojis": [
      "🏭",
      "🇸🇦",
      "💰"
    ],
    "rightResponse": "\"A Saudi Gigafactory with guaranteed energy costs? Perfect for expanding our Middle East presence!\"",
    "leftResponse": "\"While I appreciate the offer, our factory locations need to align with our global supply chain strategy.\"",
    "impact": {
      "right": {
        "tesla": 15,
        "finance": 15,
        "government": 10,
        "public_opinion": -15,
        "legacy": 5
      },
      "left": {
        "tesla": -10,
        "finance": -15,
        "government": -10,
        "public_opinion": 15,
        "legacy": -5
      }
    }
  },
  {
    "text": "King Salman proposes building the world's largest Hyperloop network connecting all major Saudi cities, fully funded by the kingdom.",
    "emojis": [
      "🚄",
      "🏙️",
      "🇸🇦"
    ],
    "rightResponse": "\"A nationwide Hyperloop in Saudi Arabia? The perfect showcase for next-generation transportation!\"",
    "leftResponse": "\"Hyperloop technology still needs more testing before deployment at such a massive scale.\"",
    "impact": {
      "right": {
        "legacy": 20,
        "finance": 15,
        "government": 15,
        "public_opinion": -10,
        "tesla": 10
      },
      "left": {
        "legacy": -15,
        "finance": -15,
        "government": -15,
        "public_opinion": 5,
        "tesla": -5
      }
    }
  },
  {
    "text": "King Salman wants to create a joint venture to build the world's largest solar farm in the Saudi desert, with Tesla battery storage.",
    "emojis": [
      "☀️",
      "🏜️",
      "🔋"
    ],
    "rightResponse": "\"Turning the Saudi desert into the world's largest clean energy producer? Revolutionary!\"",
    "leftResponse": "\"While solar in Saudi Arabia makes sense, I prefer to keep Tesla's battery technology independent.\"",
    "impact": {
      "right": {
        "tesla": 15,
        "finance": 15,
        "government": 15,
        "public_opinion": -10,
        "legacy": 15
      },
      "left": {
        "tesla": -10,
        "finance": -15,
        "government": -15,
        "public_opinion": 10,
        "legacy": -10
      }
    }
  },
  {
    "text": "King Salman offers to fund a SpaceX launch facility on the Red Sea coast, with tax-free status for 100 years.",
    "emojis": [
      "🚀",
      "🌊",
      "🇸🇦"
    ],
    "rightResponse": "\"A Red Sea launch facility? Perfect equatorial location with excellent logistics access!\"",
    "leftResponse": "\"Launch facilities require specific geographic and political stability considerations beyond financial incentives.\"",
    "impact": {
      "right": {
        "spacex": 15,
        "finance": 15,
        "government": 15,
        "public_opinion": -20,
        "mars": 10
      },
      "left": {
        "spacex": -10,
        "finance": -15,
        "government": -15,
        "public_opinion": 15,
        "mars": -5
      }
    }
  },
  {
    "text": "King Salman proposes creating a special Saudi-backed cryptocurrency called 'OilCoin', wants your technical expertise.",
    "emojis": [
      "🪙",
      "🛢️",
      "💰"
    ],
    "rightResponse": "\"A resource-backed cryptocurrency? This could revolutionize how natural resources are traded globally!\"",
    "leftResponse": "\"Cryptocurrencies should be decentralized and not tied to specific governments or resources.\"",
    "impact": {
      "right": {
        "crypto": 15,
        "finance": 15,
        "government": 15,
        "public_opinion": -20,
        "x_twitter": 10
      },
      "left": {
        "crypto": -10,
        "finance": -15,
        "government": -15,
        "public_opinion": 15,
        "x_twitter": -5
      }
    }
  },
  {
    "text": "King Salman wants to establish NEOM as the first city with fully autonomous Tesla robotaxis only - no human-driven vehicles allowed.",
    "emojis": [
      "🏙️",
      "🤖",
      "🚕"
    ],
    "rightResponse": "\"A city designed from scratch for autonomous vehicles only? The perfect real-world showcase!\"",
    "leftResponse": "\"Autonomous technology should be integrated gradually alongside human drivers for optimal safety.\"",
    "impact": {
      "right": {
        "tesla": 20,
        "ai_bots": 15,
        "government": 15,
        "public_opinion": -15,
        "legacy": 15
      },
      "left": {
        "tesla": -15,
        "ai_bots": -10,
        "government": -15,
        "public_opinion": 10,
        "legacy": -10
      }
    }
  },
  {
    "text": "King Salman offers to fund a joint research center for Neuralink and Saudi universities, focusing on treating neurological conditions.",
    "emojis": [
      "🧠",
      "🏥",
      "🇸🇦"
    ],
    "rightResponse": "\"A Neuralink research center in Saudi Arabia? Expanding global neuroscience collaboration is crucial!\"",
    "leftResponse": "\"Neuralink research needs to remain centralized until core technologies are fully developed and tested.\"",
    "impact": {
      "right": {
        "neuralink": 15,
        "finance": 15,
        "government": 15,
        "public_opinion": -15,
        "legacy": 10
      },
      "left": {
        "neuralink": -10,
        "finance": -15,
        "government": -15,
        "public_opinion": 10,
        "legacy": -5
      }
    }
  },
  {
    "text": "King Salman proposes building a Mars simulation city in the Saudi desert, complete with radiation shielding and closed ecosystems.",
    "emojis": [
      "🪐",
      "🏜️",
      "🏙️"
    ],
    "rightResponse": "\"A Mars simulation in the Saudi desert? Perfect analog environment for testing Mars habitation technologies!\"",
    "leftResponse": "\"Mars simulations require specific scientific oversight that might be compromised by tourism or publicity goals.\"",
    "impact": {
      "right": {
        "mars": 20,
        "spacex": 10,
        "government": 15,
        "finance": 15,
        "legacy": 10
      },
      "left": {
        "mars": -15,
        "spacex": -5,
        "government": -15,
        "finance": -15,
        "legacy": -5
      }
    }
  },
  {
    "text": "King Salman wants to create a special economic zone where only Tesla vehicles are allowed, with free Supercharging for life.",
    "emojis": [
      "🚗",
      "⚡",
      "💼"
    ],
    "rightResponse": "\"A Tesla-only economic zone? The perfect showcase for a fully electric transportation ecosystem!\"",
    "leftResponse": "\"While I appreciate the support, vehicle choice should remain open to foster healthy competition.\"",
    "impact": {
      "right": {
        "tesla": 20,
        "finance": 15,
        "government": 15,
        "public_opinion": -15,
        "legacy": 5
      },
      "left": {
        "tesla": -15,
        "finance": -15,
        "government": -15,
        "public_opinion": 10,
        "legacy": 5
      }
    }
  },
  {
    "text": "King Salman offers to make X (Twitter) the official communication platform for the Saudi government, with a $5 billion investment.",
    "emojis": [
      "𝕏",
      "🇸🇦",
      "💰"
    ],
    "rightResponse": "\"Making X the official government platform? A powerful demonstration of digital transformation!\"",
    "leftResponse": "\"X should remain politically neutral and not become officially aligned with any specific government.\"",
    "impact": {
      "right": {
        "x_twitter": 20,
        "finance": 15,
        "government": 15,
        "public_opinion": -25,
        "legacy": -10
      },
      "left": {
        "x_twitter": -15,
        "finance": -15,
        "government": -15,
        "public_opinion": 20,
        "legacy": 10
      }
    }
  },
  {
    "text": "Joe Rogan invites you to do a 5-hour podcast episode where you both take DMT and discuss the nature of reality and AI consciousness.",
    "emojis": [
      "🎙️",
      "🧠",
      "🌌"
    ],
    "rightResponse": "\"I'd love to do another podcast, Joe, but perhaps we should keep it substance-free and focused on technology.\"",
    "leftResponse": "\"A 5-hour DMT podcast? The universe isn't ready, but let's break the simulation anyway!\"",
    "impact": {
      "right": {
        "public_opinion": 15,
        "x_twitter": -10,
        "ai_bots": -5,
        "legacy": 10,
        "government": 10
      },
      "left": {
        "public_opinion": -20,
        "x_twitter": 25,
        "ai_bots": 10,
        "legacy": -15,
        "government": -15
      }
    }
  },
  {
    "text": "Joe Rogan wants to be the first civilian to test the Neuralink brain implant live on his podcast. \"Think of the views, man!\"",
    "emojis": [
      "🧠",
      "🎙️",
      "📈"
    ],
    "rightResponse": "\"Medical procedures should never be performed as entertainment. Safety and privacy come first.\"",
    "leftResponse": "\"Live Neuralink implantation on the world's biggest podcast? Revolutionary for science communication!\"",
    "impact": {
      "right": {
        "neuralink": -10,
        "public_opinion": 15,
        "x_twitter": -15,
        "government": 10,
        "legacy": 10
      },
      "left": {
        "neuralink": 15,
        "public_opinion": -20,
        "x_twitter": 25,
        "government": -15,
        "legacy": -10
      }
    }
  },
  {
    "text": "Joe Rogan suggests creating a special Tesla 'Podcast Edition' with built-in recording studio and DMT vaporizer. \"It'll sell millions!\"",
    "emojis": [
      "🚗",
      "🎙️",
      "💨"
    ],
    "rightResponse": "\"A podcast studio on wheels? Revolutionary for the creator economy! The vaporizer might need some legal review though...\"",
    "leftResponse": "\"While a podcast-optimized Tesla sounds interesting, I think we'll skip the integrated drug delivery systems.\"",
    "impact": {
      "right": {
        "tesla": 10,
        "public_opinion": -20,
        "x_twitter": 25,
        "government": -20,
        "finance": 10
      },
      "left": {
        "tesla": -5,
        "public_opinion": 15,
        "x_twitter": -10,
        "government": 15,
        "finance": -5
      }
    }
  },
  {
    "text": "Joe Rogan wants to train with you and Dana White for 6 months, then fight Mark Zuckerberg in a cage match on Mars. Live streamed on X.",
    "emojis": [
      "🥊",
      "🪐",
      "📱"
    ],
    "rightResponse": "\"I think we should focus on getting humans to Mars for science first, before we start planning the entertainment.\"",
    "leftResponse": "\"The first interplanetary cage match? This is exactly the future I've been working toward!\"",
    "impact": {
      "right": {
        "mars": 10,
        "public_opinion": 5,
        "x_twitter": -15,
        "legacy": 10,
        "spacex": 5
      },
      "left": {
        "mars": -15,
        "public_opinion": -10,
        "x_twitter": 30,
        "legacy": -15,
        "spacex": -5
      }
    }
  },
  {
    "text": "Joe Rogan wants you to develop a Neuralink feature that lets users experience what it's like to be various animals. \"Imagine being an octopus!\"",
    "emojis": [
      "🧠",
      "🐙",
      "🦅"
    ],
    "rightResponse": "\"Animal consciousness simulation? The ultimate empathy machine! Let's start with eagles for the flying experience!\"",
    "leftResponse": "\"Neuralink is focused on medical applications first. Animal consciousness simulation is far beyond our current capabilities.\"",
    "impact": {
      "right": {
        "neuralink": -15,
        "public_opinion": -10,
        "x_twitter": 25,
        "ai_bots": 15,
        "legacy": -10
      },
      "left": {
        "neuralink": 10,
        "public_opinion": 5,
        "x_twitter": -15,
        "ai_bots": -10,
        "legacy": 5
      }
    }
  },
  {
    "text": "Joe Rogan wants to host a 24-hour live podcast from inside a Starship during its first crewed Mars mission. \"We'll bring Jamie too!\"",
    "emojis": [
      "🚀",
      "🎙️",
      "🪐"
    ],
    "rightResponse": "\"The first interplanetary podcast? Broadcasting from Mars would be revolutionary for space communication!\"",
    "leftResponse": "\"The first Mars missions will be extremely dangerous and resource-constrained. Entertainment can't be a priority.\"",
    "impact": {
      "right": {
        "mars": -10,
        "spacex": -15,
        "public_opinion": 5,
        "x_twitter": 25,
        "legacy": 10
      },
      "left": {
        "mars": 15,
        "spacex": 10,
        "public_opinion": -10,
        "x_twitter": -15,
        "legacy": -5
      }
    }
  },
  {
    "text": "Joe Rogan suggests creating a Tesla AI that can perfectly mimic his voice and do podcast episodes when he's too tired. \"It'll be like me, but better!\"",
    "emojis": [
      "🤖",
      "🎙️",
      "🗣️"
    ],
    "rightResponse": "\"Creating AI duplicates of real people raises serious ethical concerns about authenticity and consent.\"",
    "leftResponse": "\"An AI Joe Rogan? The perfect testing ground for our voice synthesis technology! It'll never run out of questions!\"",
    "impact": {
      "right": {
        "ai_bots": -10,
        "public_opinion": 15,
        "x_twitter": -15,
        "government": 10,
        "legacy": 10
      },
      "left": {
        "ai_bots": 15,
        "public_opinion": -20,
        "x_twitter": 25,
        "government": -15,
        "legacy": -10
      }
    }
  },
  {
    "text": "Joe Rogan wants to create a special cryptocurrency that fluctuates based on podcast download numbers. \"We'll call it RoganCoin!\"",
    "emojis": [
      "🪙",
      "🎙️",
      "📈"
    ],
    "rightResponse": "\"Cryptocurrencies need stable foundations. Tying value to entertainment metrics creates too much volatility.\"",
    "leftResponse": "\"A podcast-backed cryptocurrency? The perfect intersection of content and finance! Revolutionary!\"",
    "impact": {
      "right": {
        "crypto": 10,
        "finance": 5,
        "x_twitter": -15,
        "public_opinion": 10,
        "legacy": 5
      },
      "left": {
        "crypto": -15,
        "finance": -10,
        "x_twitter": 25,
        "public_opinion": -15,
        "legacy": -5
      }
    }
  },
  {
    "text": "Joe Rogan wants to be the first person to hunt on Mars with a bow and arrow. \"Imagine the challenge of shooting in lower gravity!\"",
    "emojis": [
      "🏹",
      "🪐",
      "🦌"
    ],
    "rightResponse": "\"Mars won't have any animals to hunt, Joe. And bringing Earth animals there would be an ecological disaster.\"",
    "leftResponse": "\"Martian bow hunting? The ultimate test of human adaptation to alien environments! Let's make it happen!\"",
    "impact": {
      "right": {
        "mars": 15,
        "public_opinion": 10,
        "x_twitter": -15,
        "government": 10,
        "legacy": 5
      },
      "left": {
        "mars": -20,
        "public_opinion": -15,
        "x_twitter": 25,
        "government": -15,
        "legacy": -10
      }
    }
  },
  {
    "text": "Joe Rogan wants you to create a special Neuralink chip that lets him communicate telepathically with his pet chimpanzees.",
    "emojis": [
      "🧠",
      "🐵",
      "💭"
    ],
    "rightResponse": "\"Neuralink is focused on helping humans with disabilities first. Exotic pet communication is not our priority.\"",
    "leftResponse": "\"Primate-to-human telepathy? The ultimate breakthrough in interspecies communication! Let's make it happen!\"",
    "impact": {
      "right": {
        "neuralink": 15,
        "public_opinion": 15,
        "x_twitter": -15,
        "government": 10,
        "legacy": 5
      },
      "left": {
        "neuralink": -15,
        "public_opinion": -20,
        "x_twitter": 25,
        "government": -15,
        "legacy": -10
      }
    }
  }
];
