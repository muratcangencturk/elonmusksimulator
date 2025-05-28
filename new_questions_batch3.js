const new_questions_batch3 = [
  // Rakip Karakterler - Mark Zuckerberg
  {
    "text": "Mark Zuckerberg challenges you to a public debate on AI safety. Says Meta's approach is 'more responsible than yours.'",
    "emojis": ["🤖", "🎭", "⚔️"],
    "rightResponse": "\"A public AI debate with Zuck? Let's settle this in the marketplace of ideas! May the best vision win!\"",
    "leftResponse": "\"AI safety isn't a spectacle for debate. I prefer to let our research and safety protocols speak for themselves.\"",
    "impact": {
      "right": { "ai_bots": -10, "public_opinion": 15, "x_twitter": 20, "legacy": -5, "government": -10 },
      "left": { "ai_bots": 15, "public_opinion": -10, "x_twitter": -15, "legacy": 10, "government": 5 }
    }
  },
  {
    "text": "Zuckerberg announces Meta's new brain-computer interface, claiming it's 'years ahead of Neuralink' and 'actually safe for humans.'",
    "emojis": ["🧠", "💻", "🏆"],
    "rightResponse": "\"Competition drives innovation! Let's see whose BCI can help more people faster!\"",
    "leftResponse": "\"Safety claims require peer-reviewed evidence. Neuralink follows rigorous medical device standards, not PR timelines.\"",
    "impact": {
      "right": { "neuralink": -20, "public_opinion": -10, "x_twitter": 15, "legacy": -5, "ai_bots": 5 },
      "left": { "neuralink": 15, "public_opinion": 10, "x_twitter": -10, "legacy": 10, "ai_bots": -5 }
    }
  },
  {
    "text": "Zuckerberg offers to buy X (Twitter) for $75 billion, promising to 'restore trust and advertiser confidence' in the platform.",
    "emojis": ["💰", "𝕏", "🤝"],
    "rightResponse": "\"$75 billion? That's a generous offer, but X isn't just a business—it's a global town square that must remain independent.\"",
    "leftResponse": "\"X is not for sale at any price. Its mission as a free speech platform is too important to compromise.\"",
    "impact": {
      "right": { "x_twitter": -15, "finance": 25, "public_opinion": 10, "legacy": -10, "government": 5 },
      "left": { "x_twitter": 20, "finance": -25, "public_opinion": -15, "legacy": 15, "government": -10 }
    }
  },
  {
    "text": "Zuckerberg announces Meta's new electric car project, claiming it will be 'more affordable and practical than any Tesla.'",
    "emojis": ["🚗", "⚡", "💵"],
    "rightResponse": "\"Welcome to the EV revolution, Mark! The more companies pushing electric vehicles, the better for humanity!\"",
    "leftResponse": "\"Building cars at scale requires manufacturing expertise that takes decades to develop. Good luck with that.\"",
    "impact": {
      "right": { "tesla": -20, "public_opinion": 15, "finance": -10, "legacy": 5, "x_twitter": 10 },
      "left": { "tesla": 10, "public_opinion": -15, "finance": 5, "legacy": -5, "x_twitter": -5 }
    }
  },
  {
    "text": "Zuckerberg proposes a joint Meta-SpaceX mission to create the first social media platform that works on Mars, with shared investment.",
    "emojis": ["🚀", "👥", "🪐"],
    "rightResponse": "\"Interplanetary social media? A fascinating collaboration opportunity! Let's connect humanity across planets!\"",
    "leftResponse": "\"Mars communications infrastructure will be built for reliability and scientific needs, not social media priorities.\"",
    "impact": {
      "right": { "spacex": -15, "mars": -10, "x_twitter": -20, "public_opinion": 10, "legacy": -5 },
      "left": { "spacex": 15, "mars": 10, "x_twitter": 15, "public_opinion": -10, "legacy": 5 }
    }
  },
  {
    "text": "Zuckerberg challenges you to a cage match, with all proceeds going to charity. Says his jiu-jitsu training gives him the edge.",
    "emojis": ["🥊", "🏆", "💪"],
    "rightResponse": "\"Challenge accepted! Physics and engineering taught me about leverage and momentum too. Let's make this legendary!\"",
    "leftResponse": "\"I prefer to compete through innovation and market success, not physical combat. There are better ways to raise money for charity.\"",
    "impact": {
      "right": { "public_opinion": 20, "x_twitter": 25, "legacy": -15, "finance": 5, "government": -10 },
      "left": { "public_opinion": -15, "x_twitter": -20, "legacy": 10, "finance": -5, "government": 5 }
    }
  },
  {
    "text": "Zuckerberg claims Meta's new VR headset can simulate Mars colonization 'more realistically than actually going there.'",
    "emojis": ["🥽", "🪐", "🏙️"],
    "rightResponse": "\"VR Mars is impressive, but nothing compares to the real challenge of becoming multi-planetary! Both have value though.\"",
    "leftResponse": "\"Simulation is not colonization. Real Mars habitation solves existential risk problems that VR simply cannot address.\"",
    "impact": {
      "right": { "mars": -10, "public_opinion": 15, "spacex": -5, "legacy": -5, "ai_bots": 10 },
      "left": { "mars": 15, "public_opinion": -10, "spacex": 10, "legacy": 10, "ai_bots": -5 }
    }
  },
  {
    "text": "Zuckerberg announces that Meta is developing humanoid robots that will be 'more affordable and versatile than Tesla Bots.'",
    "emojis": ["🤖", "💰", "🏭"],
    "rightResponse": "\"The more companies working on humanoid robots, the faster we'll solve the labor shortage! Welcome to the revolution!\"",
    "leftResponse": "\"Building useful humanoid robots requires vertical integration from AI to actuators. It's not just another software project.\"",
    "impact": {
      "right": { "ai_bots": -15, "tesla": -10, "public_opinion": 10, "finance": -5, "legacy": -5 },
      "left": { "ai_bots": 10, "tesla": 5, "public_opinion": -10, "finance": 5, "legacy": 5 }
    }
  },
  {
    "text": "Zuckerberg offers to integrate all Tesla vehicles with Meta's VR systems for 'the ultimate entertainment during Autopilot.'",
    "emojis": ["🚗", "🥽", "🎮"],
    "rightResponse": "\"VR entertainment in autonomous vehicles? An interesting way to make commuting more productive and enjoyable!\"",
    "leftResponse": "\"Drivers need to remain alert even with Autopilot. Adding immersive VR creates dangerous driver distraction.\"",
    "impact": {
      "right": { "tesla": -20, "public_opinion": -15, "government": -20, "x_twitter": 10, "finance": 10 },
      "left": { "tesla": 15, "public_opinion": 10, "government": 15, "x_twitter": -5, "finance": -10 }
    }
  },
  {
    "text": "Zuckerberg claims his metaverse will be 'more important for humanity's future than Mars colonization.'",
    "emojis": ["🥽", "🪐", "🔮"],
    "rightResponse": "\"Digital and physical expansion can coexist! Both extend human consciousness in different but valuable ways.\"",
    "leftResponse": "\"Virtual worlds don't protect humanity from extinction-level events. Only becoming multi-planetary can do that.\"",
    "impact": {
      "right": { "mars": -20, "public_opinion": 10, "spacex": -15, "legacy": -10, "ai_bots": 10 },
      "left": { "mars": 20, "public_opinion": -10, "spacex": 15, "legacy": 10, "ai_bots": -5 }
    }
  },

  // Sam Altman (Rakip Karakter)
  {
    "text": "Sam Altman announces OpenAI is developing its own brain-computer interface that will 'make Neuralink obsolete.'",
    "emojis": ["🧠", "💻", "🔄"],
    "leftResponse": "\"Competition in neural interfaces will accelerate progress! May the best technology help humanity the most!\"",
    "rightResponse": "\"Neural interfaces require hardware expertise and surgical precision that software companies typically lack.\"",
    "impact": {
      "left": { "neuralink": -20, "public_opinion": 10, "ai_bots": -10, "legacy": -5, "x_twitter": 10 },
      "right": { "neuralink": 15, "public_opinion": -10, "ai_bots": 10, "legacy": 5, "x_twitter": -5 }
    }
  },
  {
    "text": "Sam Altman claims GPT-5 will be capable of fully autonomous driving, making Tesla's specialized AI approach 'unnecessarily complex.'",
    "emojis": ["🤖", "🚗", "🧠"],
    "leftResponse": "\"If GPT-5 can safely drive cars, that's a win for humanity! Different approaches can coexist and serve different needs.\"",
    "rightResponse": "\"General language models lack the specialized perception training and hardware integration needed for safe driving.\"",
    "impact": {
      "left": { "tesla": -20, "ai_bots": -15, "public_opinion": 10, "finance": -10, "legacy": -5 },
      "right": { "tesla": 15, "ai_bots": 10, "public_opinion": -10, "finance": 10, "legacy": 5 }
    }
  },
  {
    "text": "Sam Altman proposes a partnership where OpenAI powers all Tesla vehicle intelligence, claiming it would be 'safer than current systems.'",
    "emojis": ["🤝", "🚗", "🤖"],
    "leftResponse": "\"Combining our AI expertise could create fascinating synergies! Let's explore the possibilities!\"",
    "rightResponse": "\"Tesla's vertical integration of custom AI hardware and software is core to our self-driving approach. We'll continue our path.\"",
    "impact": {
      "left": { "tesla": -15, "ai_bots": -20, "public_opinion": 10, "finance": 5, "legacy": -5 },
      "right": { "tesla": 15, "ai_bots": 15, "public_opinion": -10, "finance": -5, "legacy": 5 }
    }
  },
  {
    "text": "Sam Altman announces OpenAI is developing its own social media platform that will be 'more thoughtful and less toxic than X.'",
    "emojis": ["𝕏", "🤖", "💬"],
    "leftResponse": "\"More competition in social media is healthy! Different platforms can serve different communication needs.\"",
    "rightResponse": "\"AI-moderated social media risks creating filter bubbles and lacks the authentic human discourse X provides.\"",
    "impact": {
      "left": { "x_twitter": -25, "public_opinion": 15, "ai_bots": -10, "legacy": -5, "finance": -10 },
      "right": { "x_twitter": 20, "public_opinion": -15, "ai_bots": 10, "legacy": 5, "finance": 10 }
    }
  },
  {
    "text": "Sam Altman claims OpenAI's new space division will develop AI systems that can terraform Mars 'decades faster than current approaches.'",
    "emojis": ["🤖", "🪐", "🌱"],
    "leftResponse": "\"AI-optimized terraforming? Fascinating approach! Perhaps our teams should collaborate on this grand challenge!\"",
    "rightResponse": "\"Terraforming requires physical engineering and chemistry, not just AI. The laws of physics don't bend to algorithms.\"",
    "impact": {
      "left": { "mars": -15, "spacex": -10, "ai_bots": -10, "legacy": -5, "public_opinion": 10 },
      "right": { "mars": 15, "spacex": 10, "ai_bots": 10, "legacy": 5, "public_opinion": -10 }
    }
  },
  {
    "text": "Sam Altman suggests that advanced AI will make human Mars colonization unnecessary, as 'digital consciousness will transcend physical limitations.'",
    "emojis": ["🤖", "🧠", "🪐"],
    "leftResponse": "\"Digital and physical expansion represent different paths for humanity's future—both worth exploring!\"",
    "rightResponse": "\"Digital consciousness remains theoretical, while planetary extinction risks are real. Mars colonization is essential insurance.\"",
    "impact": {
      "left": { "mars": -20, "spacex": -15, "ai_bots": -10, "legacy": -10, "public_opinion": 10 },
      "right": { "mars": 20, "spacex": 15, "ai_bots": 10, "legacy": 10, "public_opinion": -10 }
    }
  },
  {
    "text": "Sam Altman proposes a public debate on AI safety, claiming OpenAI's approach is 'more responsible than the reckless pace at your companies.'",
    "emojis": ["🤖", "⚠️", "🎭"],
    "leftResponse": "\"A public discussion on AI safety approaches would benefit everyone! Let's compare notes transparently!\"",
    "rightResponse": "\"AI safety isn't advanced through public debates and soundbites, but through rigorous research and careful implementation.\"",
    "impact": {
      "left": { "ai_bots": -15, "public_opinion": 15, "x_twitter": 10, "legacy": -5, "government": -10 },
      "right": { "ai_bots": 15, "public_opinion": -10, "x_twitter": -5, "legacy": 10, "government": 5 }
    }
  },
  {
    "text": "Sam Altman announces OpenAI is developing humanoid robots that will be 'more advanced and ethically designed than Tesla Bots.'",
    "emojis": ["🤖", "🦾", "⚖️"],
    "leftResponse": "\"More companies working on humanoid robots means faster progress! The robot revolution needs many approaches!\"",
    "rightResponse": "\"Building useful humanoid robots requires manufacturing expertise and vertical integration that software companies typically lack.\"",
    "impact": {
      "left": { "ai_bots": -20, "tesla": -15, "public_opinion": 10, "finance": -5, "legacy": -5 },
      "right": { "ai_bots": 15, "tesla": 10, "public_opinion": -10, "finance": 5, "legacy": 5 }
    }
  },
  {
    "text": "Sam Altman claims OpenAI's new satellite internet system will be 'more affordable and accessible than Starlink.'",
    "emojis": ["🛰️", "🌐", "💰"],
    "leftResponse": "\"More competition in satellite internet will help connect the unconnected! A win for global internet access!\"",
    "rightResponse": "\"Satellite internet requires aerospace engineering expertise and launch capabilities that software companies typically lack.\"",
    "impact": {
      "left": { "spacex": -20, "finance": -10, "public_opinion": 15, "legacy": -5, "government": 5 },
      "right": { "spacex": 15, "finance": 10, "public_opinion": -10, "legacy": 5, "government": -5 }
    }
  },
  {
    "text": "Sam Altman offers to buy a significant stake in Tesla, claiming he can 'help guide the company's AI strategy in a safer direction.'",
    "emojis": ["💰", "🚗", "🤖"],
    "leftResponse": "\"Fresh investment and AI expertise could bring interesting perspectives! Let's discuss the possibilities!\"",
    "rightResponse": "\"Tesla's AI strategy is core to our mission and competitive advantage. We're not looking for external direction.\"",
    "impact": {
      "left": { "tesla": -25, "finance": 15, "ai_bots": -15, "public_opinion": 10, "legacy": -10 },
      "right": { "tesla": 20, "finance": -15, "ai_bots": 15, "public_opinion": -10, "legacy": 10 }
    }
  },

  // Jeff Bezos (Rakip Karakter)
  {
    "text": "Jeff Bezos announces Blue Origin will offer Mars missions 'years before SpaceX' and at 'half the cost.'",
    "emojis": ["🚀", "🪐", "💰"],
    "leftResponse": "\"Competition in space is fantastic for humanity! May the best rocket company help us become multi-planetary!\"",
    "rightResponse": "\"Mars missions require years of demonstrated orbital capability and life support systems. Promises are easy, execution is hard.\"",
    "impact": {
      "left": { "spacex": -20, "mars": -15, "public_opinion": 10, "finance": -10, "legacy": -5 },
      "right": { "spacex": 15, "mars": 10, "public_opinion": -10, "finance": 10, "legacy": 5 }
    }
  },
  {
    "text": "Bezos offers to buy a controlling stake in SpaceX to 'combine our space companies into the ultimate Earth-to-Mars transportation system.'",
    "emojis": ["💰", "🚀", "🤝"],
    "leftResponse": "\"A fascinating proposal! Combining resources could accelerate humanity's multi-planetary future!\"",
    "rightResponse": "\"SpaceX is not for sale at any price. Our mission to Mars is too important to compromise with different priorities.\"",
    "impact": {
      "left": { "spacex": -25, "mars": -20, "finance": 25, "legacy": -15, "public_opinion": -10 },
      "right": { "spacex": 20, "mars": 15, "finance": -20, "legacy": 15, "public_opinion": 10 }
    }
  },
  {
    "text": "Bezos announces Amazon is developing electric delivery vans that will 'make Tesla Semi trucks obsolete in the logistics industry.'",
    "emojis": ["🚚", "⚡", "📦"],
    "leftResponse": "\"More companies electrifying transportation is a win for sustainability! The market has room for many approaches!\"",
    "rightResponse": "\"Tesla's vertical integration from batteries to motors gives fundamental advantages that are hard for newcomers to match.\"",
    "impact": {
      "left": { "tesla": -20, "public_opinion": 15, "finance": -10, "legacy": -5, "government": 5 },
      "right": { "tesla": 15, "public_opinion": -10, "finance": 10, "legacy": 5, "government": -5 }
    }
  },
  {
    "text": "Bezos proposes a joint venture between Amazon and Neuralink to create 'thought-based shopping' directly from your brain.",
    "emojis": ["🧠", "🛒", "💭"],
    "leftResponse": "\"Brain-computer interfaces for commerce? An interesting application that could help people with disabilities!\"",
    "rightResponse": "\"Neuralink is focused on medical applications and human augmentation, not consumerism and impulse purchasing.\"",
    "impact": {
      "left": { "neuralink": -20, "finance": 15, "public_opinion": -15, "government": -10, "legacy": -10 },
      "right": { "neuralink": 15, "finance": -10, "public_opinion": 10, "government": 5, "legacy": 10 }
    }
  },
  {
    "text": "Bezos claims Blue Origin's new lunar lander will make Starship 'unnecessary for NASA's Artemis program.'",
    "emojis": ["🚀", "🌕", "🏆"],
    "leftResponse": "\"Multiple lunar lander options benefit the entire space industry! Competition drives innovation!\"",
    "rightResponse": "\"Starship's fully reusable architecture and payload capacity offer fundamental advantages that smaller landers cannot match.\"",
    "impact": {
      "left": { "spacex": -20, "mars": -10, "government": 10, "finance": -10, "legacy": -5 },
      "right": { "spacex": 15, "mars": 5, "government": -10, "finance": 10, "legacy": 5 }
    }
  },
  {
    "text": "Bezos announces Amazon is launching a social media platform that will be 'more advertiser-friendly than X, with better content moderation.'",
    "emojis": ["𝕏", "📱", "🛒"],
    "leftResponse": "\"More competition in social media is healthy for the ecosystem! Different platforms can serve different needs!\"",
    "rightResponse": "\"Corporate-controlled, advertiser-optimized platforms inevitably compromise on free speech. X remains independent for a reason.\"",
    "impact": {
      "left": { "x_twitter": -25, "finance": -10, "public_opinion": 15, "government": 10, "legacy": -5 },
      "right": { "x_twitter": 20, "finance": 10, "public_opinion": -15, "government": -10, "legacy": 5 }
    }
  },
  {
    "text": "Bezos offers to integrate all Tesla vehicles with Amazon's voice assistant and shopping services for 'the ultimate in-car experience.'",
    "emojis": ["🚗", "🗣️", "🛒"],
    "leftResponse": "\"Integrating more services into Tesla vehicles could enhance the user experience! Let's explore the possibilities!\"",
    "rightResponse": "\"Tesla's ecosystem is designed for seamless integration and privacy. Third-party shopping services don't align with our vision.\"",
    "impact": {
      "left": { "tesla": -15, "finance": 15, "public_opinion": -10, "ai_bots": -10, "legacy": -5 },
      "right": { "tesla": 15, "finance": -10, "public_opinion": 10, "ai_bots": 10, "legacy": 5 }
    }
  },
  {
    "text": "Bezos proposes a debate on who has contributed more to humanity's future: Amazon's global delivery infrastructure or your companies' technologies.",
    "emojis": ["🎭", "📦", "🚀"],
    "leftResponse": "\"Different companies solve different problems! Both approaches have tremendous value for humanity's progress!\"",
    "rightResponse": "\"Comparing contributions isn't productive. History will judge which approaches truly advanced civilization.\"",
    "impact": {
      "left": { "public_opinion": 15, "x_twitter": 10, "legacy": -10, "finance": 5, "government": 5 },
      "right": { "public_opinion": -10, "x_twitter": -5, "legacy": 15, "finance": -5, "government": -5 }
    }
  },
  {
    "text": "Bezos claims Amazon's new AI assistant will be 'more helpful and less problematic than anything from your companies.'",
    "emojis": ["🤖", "🗣️", "🛒"],
    "leftResponse": "\"More AI assistants mean more consumer choice! Competition drives innovation in this space!\"",
    "rightResponse": "\"E-commerce optimized AI will inevitably push consumers toward purchases rather than providing neutral assistance.\"",
    "impact": {
      "left": { "ai_bots": -15, "public_opinion": 10, "finance": -5, "x_twitter": 5, "legacy": -5 },
      "right": { "ai_bots": 10, "public_opinion": -10, "finance": 5, "x_twitter": -5, "legacy": 5 }
    }
  },
  {
    "text": "Bezos announces Amazon is developing humanoid warehouse robots that will 'make Tesla Bots look primitive by comparison.'",
    "emojis": ["🤖", "📦", "🏭"],
    "leftResponse": "\"More companies working on humanoid robots will accelerate progress! The robot revolution needs many approaches!\"",
    "rightResponse": "\"General-purpose humanoid robots require vertical integration from AI to actuators. Warehouse-specific robots are a different challenge.\"",
    "impact": {
      "left": { "ai_bots": -20, "tesla": -15, "public_opinion": 10, "finance": -5, "legacy": -5 },
      "right": { "ai_bots": 15, "tesla": 10, "public_opinion": -10, "finance": 5, "legacy": 5 }
    }
  },

  // Bill Gates (Rakip Karakter)
  {
    "text": "Bill Gates criticizes your Mars colonization plans, saying 'we should fix Earth's problems before escaping to other planets.'",
    "emojis": ["🌍", "🪐", "⚠️"],
    "leftResponse": "\"You make a fair point, Bill. Perhaps we can work together on both Earth's problems and Mars as humanity's backup plan?\"",
    "rightResponse": "\"Becoming multi-planetary isn't about 'escaping' - it's about extending consciousness and creating a backup for Earth's biosphere.\"",
    "impact": {
      "left": { "mars": -15, "public_opinion": 20, "legacy": -10, "government": 15, "spacex": -10 },
      "right": { "mars": 15, "public_opinion": -15, "legacy": 15, "government": -10, "spacex": 10 }
    }
  },
  {
    "text": "Gates announces a new Microsoft AI system that he claims is 'more aligned with human values' than your companies' AI approaches.",
    "emojis": ["🤖", "⚖️", "💻"],
    "leftResponse": "\"Different approaches to AI alignment are valuable! Perhaps we could collaborate on establishing industry standards?\"",
    "rightResponse": "\"'Aligned with human values' often means aligned with specific corporate or political values. True AI should maximize user agency.\"",
    "impact": {
      "left": { "ai_bots": -15, "public_opinion": 15, "government": 10, "legacy": 5, "x_twitter": -10 },
      "right": { "ai_bots": 15, "public_opinion": -10, "government": -10, "legacy": -5, "x_twitter": 10 }
    }
  },
  {
    "text": "Gates criticizes Tesla's approach to self-driving, claiming it's 'dangerously rushed compared to more responsible companies.'",
    "emojis": ["🚗", "⚠️", "🤖"],
    "leftResponse": "\"Safety feedback is always valuable! Perhaps we could share data to improve all autonomous systems?\"",
    "rightResponse": "\"Tesla has billions of miles of real-world driving data. Our safety record speaks for itself, not speculation.\"",
    "impact": {
      "left": { "tesla": -15, "public_opinion": 15, "government": 10, "legacy": -5, "finance": -10 },
      "right": { "tesla": 15, "public_opinion": -15, "government": -10, "legacy": 5, "finance": 10 }
    }
  },
  {
    "text": "Gates proposes a joint philanthropic initiative focused on sustainable energy in developing countries, but wants equal credit and control.",
    "emojis": ["💰", "⚡", "🌍"],
    "leftResponse": "\"Combining our resources could have tremendous impact! Let's work together to accelerate clean energy adoption globally!\"",
    "rightResponse": "\"I prefer direct technological solutions over traditional philanthropy. Tesla and SpaceX are already addressing these issues through innovation.\"",
    "impact": {
      "left": { "public_opinion": 20, "legacy": 15, "government": 15, "finance": -15, "tesla": -10 },
      "right": { "public_opinion": -15, "legacy": -10, "government": -15, "finance": 10, "tesla": 15 }
    }
  },
  {
    "text": "Gates claims Neuralink's approach is 'unnecessarily invasive' and that his foundation is funding non-surgical brain interfaces that will be 'safer.'",
    "emojis": ["🧠", "⚕️", "💉"],
    "leftResponse": "\"Multiple approaches to neural interfaces are valuable! Perhaps we could collaborate on establishing best practices?\"",
    "rightResponse": "\"Non-invasive interfaces have fundamental physics limitations in bandwidth and precision that only invasive solutions can overcome.\"",
    "impact": {
      "left": { "neuralink": -20, "public_opinion": 15, "government": 10, "legacy": 5, "finance": -10 },
      "right": { "neuralink": 15, "public_opinion": -15, "government": -10, "legacy": -5, "finance": 10 }
    }
  },
  {
    "text": "Gates suggests that your companies' technologies are increasing inequality, while his foundation focuses on 'helping the truly needy.'",
    "emojis": ["💰", "⚖️", "🌍"],
    "leftResponse": "\"Different approaches to improving humanity's future can coexist! Perhaps we could collaborate on technology access initiatives?\"",
    "rightResponse": "\"Technological innovation has lifted more people out of poverty than traditional philanthropy. We're creating the future, not just treating symptoms.\"",
    "impact": {
      "left": { "public_opinion": 20, "legacy": 10, "government": 15, "finance": -10, "x_twitter": -15 },
      "right": { "public_opinion": -15, "legacy": -5, "government": -10, "finance": 10, "x_twitter": 15 }
    }
  },
  {
    "text": "Gates criticizes X (Twitter) as 'harmful to democracy' and suggests you should implement stronger content moderation like Microsoft's platforms.",
    "emojis": ["𝕏", "⚖️", "🗣️"],
    "leftResponse": "\"Content moderation is certainly challenging! Perhaps we could collaborate on developing transparent, fair standards?\"",
    "rightResponse": "\"X is committed to free speech within the law. Corporate-controlled 'moderation' inevitably becomes political censorship.\"",
    "impact": {
      "left": { "x_twitter": -25, "public_opinion": 15, "government": 20, "legacy": -10, "finance": 5 },
      "right": { "x_twitter": 20, "public_opinion": -15, "government": -20, "legacy": 15, "finance": -5 }
    }
  },
  {
    "text": "Gates proposes a debate on AI safety, claiming his approach is 'more responsible' than your companies' development pace.",
    "emojis": ["🤖", "⚠️", "🎭"],
    "leftResponse": "\"A public discussion on AI safety approaches would benefit everyone! Let's compare notes transparently!\"",
    "rightResponse": "\"AI safety isn't advanced through public debates and soundbites, but through rigorous research and careful implementation.\"",
    "impact": {
      "left": { "ai_bots": -15, "public_opinion": 15, "x_twitter": 10, "legacy": -5, "government": 10 },
      "right": { "ai_bots": 15, "public_opinion": -10, "x_twitter": -5, "legacy": 10, "government": -10 }
    }
  },
  {
    "text": "Gates claims his climate initiatives have done 'far more good' than Tesla's electric vehicles, which he calls 'toys for the rich.'",
    "emojis": ["🌍", "🚗", "💰"],
    "leftResponse": "\"Different approaches to climate solutions can coexist! Perhaps we could collaborate on making EVs more accessible?\"",
    "rightResponse": "\"Tesla has forced the entire auto industry to go electric, creating the biggest climate impact of any company. Results matter more than intentions.\"",
    "impact": {
      "left": { "tesla": -20, "public_opinion": 15, "legacy": -10, "government": 10, "finance": -5 },
      "right": { "tesla": 20, "public_opinion": -15, "legacy": 15, "government": -10, "finance": 5 }
    }
  },
  {
    "text": "Gates offers to buy a significant stake in Tesla to 'help guide the company toward more affordable vehicles for developing markets.'",
    "emojis": ["💰", "🚗", "🌍"],
    "leftResponse": "\"Fresh investment and global market expertise could bring interesting perspectives! Let's discuss the possibilities!\"",
    "rightResponse": "\"Tesla's strategy is to start with premium vehicles to fund mass market development. We don't need external direction on our mission.\"",
    "impact": {
      "left": { "tesla": -25, "finance": 20, "public_opinion": 15, "legacy": -10, "government": 5 },
      "right": { "tesla": 20, "finance": -15, "public_opinion": -10, "legacy": 10, "government": -5 }
    }
  },

  // Tim Cook (Rakip Karakter)
  {
    "text": "Tim Cook announces Apple is developing a self-driving car that will be 'more elegant and user-friendly than anything Tesla has produced.'",
    "emojis": ["🚗", "🍎", "🤖"],
    "leftResponse": "\"More companies pushing electric and autonomous vehicles forward is great for sustainability! Welcome to the revolution!\"",
    "rightResponse": "\"Building cars at scale requires manufacturing expertise that takes decades to develop. Design alone isn't enough.\"",
    "impact": {
      "left": { "tesla": -20, "public_opinion": 15, "finance": -10, "legacy": -5, "x_twitter": 10 },
      "right": { "tesla": 15, "public_opinion": -10, "finance": 10, "legacy": 5, "x_twitter": -5 }
    }
  },
  {
    "text": "Tim Cook claims Apple's new neural interface will be 'more elegant and less invasive than Neuralink,' with a focus on augmented reality.",
    "emojis": ["🧠", "🍎", "👁️"],
    "leftResponse": "\"Different approaches to neural interfaces will serve different needs! The market has room for many solutions!\"",
    "rightResponse": "\"Non-invasive interfaces have fundamental physics limitations in bandwidth and precision that only invasive solutions can overcome.\"",
    "impact": {
      "left": { "neuralink": -20, "public_opinion": 15, "finance": -10, "legacy": -5, "ai_bots": -5 },
      "right": { "neuralink": 15, "public_opinion": -10, "finance": 10, "legacy": 5, "ai_bots": 5 }
    }
  },
  {
    "text": "Tim Cook announces Apple is developing its own social media platform that will be 'more private and less controversial than X.'",
    "emojis": ["𝕏", "🍎", "🔒"],
    "leftResponse": "\"More competition in social media is healthy! Different platforms can serve different communication needs.\"",
    "rightResponse": "\"Corporate-controlled, heavily moderated platforms inevitably compromise on free speech. X remains independent for a reason.\"",
    "impact": {
      "left": { "x_twitter": -25, "public_opinion": 15, "finance": -10, "legacy": -5, "government": 10 },
      "right": { "x_twitter": 20, "public_opinion": -10, "finance": 10, "legacy": 5, "government": -10 }
    }
  },
  {
    "text": "Tim Cook offers to integrate all Tesla vehicles with Apple's ecosystem for 'the ultimate premium user experience.'",
    "emojis": ["🚗", "🍎", "🤝"],
    "leftResponse": "\"Integrating with Apple's ecosystem could enhance the user experience for many Tesla owners! Let's explore the possibilities!\"",
    "rightResponse": "\"Tesla's vertical integration from software to hardware is core to our competitive advantage. We control our own ecosystem.\"",
    "impact": {
      "left": { "tesla": -20, "finance": 15, "public_opinion": 10, "legacy": -10, "ai_bots": -10 },
      "right": { "tesla": 20, "finance": -10, "public_opinion": -5, "legacy": 10, "ai_bots": 10 }
    }
  },
  {
    "text": "Tim Cook claims Apple's approach to AI is 'more responsible and privacy-focused' than your companies' development pace.",
    "emojis": ["🤖", "🍎", "🔒"],
    "leftResponse": "\"Different approaches to AI development can coexist! Perhaps we could collaborate on establishing best practices?\"",
    "rightResponse": "\"'Privacy-focused' often means limited functionality. True AI requires sufficient data to be genuinely helpful.\"",
    "impact": {
      "left": { "ai_bots": -15, "public_opinion": 15, "government": 10, "legacy": -5, "x_twitter": -10 },
      "right": { "ai_bots": 15, "public_opinion": -10, "government": -10, "legacy": 5, "x_twitter": 10 }
    }
  },
  {
    "text": "Tim Cook announces Apple is developing humanoid robots that will be 'more elegant and user-friendly than Tesla Bots.'",
    "emojis": ["🤖", "🍎", "🦾"],
    "leftResponse": "\"More companies working on humanoid robots will accelerate progress! The robot revolution needs many approaches!\"",
    "rightResponse": "\"Building useful humanoid robots requires vertical integration from AI to actuators. Design alone isn't enough.\"",
    "impact": {
      "left": { "ai_bots": -20, "tesla": -15, "public_opinion": 15, "finance": -10, "legacy": -5 },
      "right": { "ai_bots": 15, "tesla": 10, "public_opinion": -10, "finance": 10, "legacy": 5 }
    }
  },
  {
    "text": "Tim Cook criticizes your companies' user interfaces as 'cluttered and unintuitive' compared to Apple's 'elegant simplicity.'",
    "emojis": ["📱", "🎨", "👎"],
    "leftResponse": "\"Different design philosophies serve different needs! Perhaps we could learn from each other's approaches?\"",
    "rightResponse": "\"Our interfaces prioritize functionality and user agency over simplistic design that limits capabilities.\"",
    "impact": {
      "left": { "tesla": -10, "public_opinion": 15, "x_twitter": -10, "legacy": -5, "ai_bots": -5 },
      "right": { "tesla": 10, "public_opinion": -10, "x_twitter": 10, "legacy": 5, "ai_bots": 5 }
    }
  },
  {
    "text": "Tim Cook suggests Apple could buy X (Twitter) and 'restore its reputation with advertisers and the public.'",
    "emojis": ["💰", "𝕏", "🍎"],
    "leftResponse": "\"An interesting proposal! Apple's design expertise could certainly enhance X's user experience!\"",
    "rightResponse": "\"X is not for sale at any price. Its mission as a free speech platform is too important to compromise with corporate control.\"",
    "impact": {
      "left": { "x_twitter": -25, "finance": 20, "public_opinion": 15, "legacy": -15, "government": 10 },
      "right": { "x_twitter": 20, "finance": -15, "public_opinion": -10, "legacy": 15, "government": -10 }
    }
  },
  {
    "text": "Tim Cook claims Apple's satellite communications will be 'more reliable and user-friendly than Starlink' for emergency services.",
    "emojis": ["🛰️", "🍎", "🆘"],
    "leftResponse": "\"Different satellite communications systems can serve different needs! Emergency services deserve multiple options!\"",
    "rightResponse": "\"Limited emergency messaging is fundamentally different from Starlink's global broadband. They solve different problems.\"",
    "impact": {
      "left": { "spacex": -15, "public_opinion": 15, "finance": -10, "legacy": -5, "government": 5 },
      "right": { "spacex": 15, "public_opinion": -10, "finance": 10, "legacy": 5, "government": -5 }
    }
  },
  {
    "text": "Tim Cook proposes a public debate on privacy, claiming Apple's approach is 'more responsible' than your companies' data practices.",
    "emojis": ["🔒", "🎭", "📱"],
    "leftResponse": "\"A public discussion on privacy approaches would benefit everyone! Let's compare notes transparently!\"",
    "rightResponse": "\"Privacy isn't advanced through public debates and soundbites, but through actual technical implementations and user choice.\"",
    "impact": {
      "left": { "public_opinion": 15, "x_twitter": 10, "government": 10, "legacy": -5, "tesla": -10 },
      "right": { "public_opinion": -10, "x_twitter": -5, "government": -10, "legacy": 5, "tesla": 10 }
    }
  }
];
