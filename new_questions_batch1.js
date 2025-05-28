const new_questions_batch1 = [
  // Dost Karakterler - Donald Trump
  {
    "text": "Donald Trump calls, says he has a \"tremendous\" idea for a new social media platform to rival X. Wants you to fund it. \"It'll be HUGE!\"",
    "emojis": ["📱", "🤝", "💰"],
    "leftResponse": "\'Another platform? The world isn\'t ready for that much winning! But okay, let\'s make social media great again!\'",
    "rightResponse": "\'Don, with all due respect, I\'m trying to get to Mars, not into another Twitter war. Hard pass.\'",
    "impact": {
      "left": { "x_twitter": -15, "public_opinion": 10, "finance": -20, "legacy": 5, "government": 5 },
      "right": { "x_twitter": 5, "public_opinion": -5, "finance": 10, "legacy": -5, "government": -10 }
    }
  },
  {
    "text": "Trump suggests a joint venture: SpaceX rockets to launch TRUMP-branded golf balls to the moon. \"Best golf balls, best moon!\"",
    "emojis": ["🚀", "🌕", "⛳"],
    "leftResponse": "\'Lunar golf? Sounds like a hole-in-one for interplanetary marketing! Let\'s do it!\'",
    "rightResponse": "\'Don, I appreciate the enthusiasm, but my rockets are for science, not for losing your golf balls in craters.\'",
    "impact": {
      "left": { "spacex": -10, "public_opinion": 15, "finance": -10, "legacy": -5, "mars": -5 },
      "right": { "spacex": 10, "public_opinion": -10, "finance": 5, "legacy": 5, "mars": 5 }
    }
  },
  {
    "text": "Trump wants you to build a \"beautiful, powerful\" gold-plated Cybertruck for his next presidential campaign. \"It has to be bulletproof, obviously.\"",
    "emojis": ["🚚", "🇺🇸", "✨"],
    "leftResponse": "\'A gold-plated, bulletproof Cybertruck? The ultimate campaign vehicle! Consider it done, Mr. President!\'",
    "rightResponse": "\'While the Cybertruck is tough, gold plating might affect its drag coefficient. And I\'m staying out of politics.\'",
    "impact": {
      "left": { "tesla": -5, "public_opinion": 10, "finance": -15, "government": 10, "legacy": -5 },
      "right": { "tesla": 10, "public_opinion": -10, "finance": 5, "government": -15, "legacy": 5 }
    }
  },
  {
    "text": "Trump proposes a new Space Force uniform designed by Melania, featuring gold lamé and \"very classy\" rocket-shaped epaulets. Wants your opinion.",
    "emojis": ["🧑‍🚀", "✨", "👗"],
    "leftResponse": "\'Gold lamé in space? Daring! The astronauts will look fabulous. Melania has great taste!\'",
    "rightResponse": "\'Don, astronauts need functional gear, not fashion statements. Let\'s stick to practical designs, please.\'",
    "impact": {
      "left": { "spacex": -10, "public_opinion": 5, "government": -5, "legacy": -5, "finance": -5 },
      "right": { "spacex": 5, "public_opinion": -5, "government": 10, "legacy": 5, "finance": 0 }
    }
  },
  {
    "text": "Trump wants to host a rally at Starbase, Texas. Promises \"the biggest crowds you\'ve ever seen, bigger than any rocket!\"",
    "emojis": ["🏟️", "🚀", "🎤"],
    "leftResponse": "\'A rally at Starbase? The energy would be astronomical! Let\'s make some noise!\'",
    "rightResponse": "\'Starbase is a rocket factory, Don, not a political venue. Security and operational focus are my priorities.\'",
    "impact": {
      "left": { "spacex": -15, "public_opinion": 10, "government": 5, "finance": -5, "mars": -5 },
      "right": { "spacex": 10, "public_opinion": -15, "government": -10, "finance": 5, "mars": 0 }
    }
  },
  {
    "text": "Trump suggests changing the name of Mars to \"Trump Prime\" once colonized. \"It has a nice ring to it, don\'t you think?\"",
    "emojis": ["🪐", "🏷️", "🇺🇸"],
    "leftResponse": "\'Trump Prime? A bold choice! It certainly has a powerful sound. History in the making!\'",
    "rightResponse": "\'Mars has a name, Don. And it belongs to humanity, not one person. Let\'s keep it that way.\'",
    "impact": {
      "left": { "mars": -10, "public_opinion": 5, "legacy": -10, "government": 5, "spacex": -5 },
      "right": { "mars": 15, "public_opinion": -10, "legacy": 10, "government": -5, "spacex": 5 }
    }
  },
  {
    "text": "Trump wants you to develop a Neuralink chip that only allows users to think \"positive thoughts\" about him. \"It\'ll solve so many problems!\"",
    "emojis": ["🧠", "👍", "😇"],
    "leftResponse": "\'A positivity chip? Fascinating! Imagine the approval ratings! A true game-changer for leaders!\'",
    "rightResponse": "\'Neuralink is about expanding human potential, Don, not controlling thoughts. That\'s a line we don\'t cross.\'",
    "impact": {
      "left": { "neuralink": -20, "public_opinion": -15, "legacy": -10, "government": 10, "ai_bots": 5 },
      "right": { "neuralink": 15, "public_opinion": 10, "legacy": 10, "government": -15, "ai_bots": -5 }
    }
  },
  {
    "text": "Trump proposes a \"Space Wall\" to keep illegal aliens (the extraterrestrial kind) out of Earth's orbit. Wants SpaceX to build it.",
    "emojis": ["🧱", "👽", "🚀"],
    "leftResponse": "\'A Space Wall! Tremendous! We\'ll make the aliens pay for it! Protecting Earth, one parsec at a time!\'",
    "rightResponse": "\'Don, space is vast. A wall isn\'t feasible. Plus, if advanced aliens arrive, a wall won\'t stop them. Diplomacy might.\'",
    "impact": {
      "left": { "spacex": -25, "public_opinion": -10, "government": 15, "legacy": -5, "mars": -10 },
      "right": { "spacex": 10, "public_opinion": 5, "government": -10, "legacy": 5, "mars": 5 }
    }
  },
  {
    "text": "Trump wants to replace the national anthem with a song he wrote himself, performed by a Tesla Bot choir at the Super Bowl. Needs your help.",
    "emojis": ["🎵", "🤖", "🏈"],
    "leftResponse": "\'A Trump original anthem by Tesla Bots? The ratings would be through the roof! A cultural reset!\'",
    "rightResponse": "\'Don, the national anthem is sacred to many. And Tesla Bots are for labor, not halftime shows. I must decline.\'",
    "impact": {
      "left": { "tesla": -5, "ai_bots": -10, "public_opinion": 5, "government": 5, "legacy": -10 },
      "right": { "tesla": 5, "ai_bots": 5, "public_opinion": -10, "government": -10, "legacy": 5 }
    }
  },
  {
    "text": "Trump heard about Dogecoin. Now he wants you to create \"TrumpCoin\" – \"It\'ll be the most valuable coin, maybe ever! Believe me!\"",
    "emojis": ["🪙", "🇺🇸", "📈"],
    "leftResponse": "\'TrumpCoin! The people would love it! To the moon, indeed! It\'s a fantastic idea, Don!\'",
    "rightResponse": "\'Don, the crypto market is volatile enough. Adding another personality-driven coin might not be wise. Let\'s stick to tech.\'",
    "impact": {
      "left": { "crypto": -15, "finance": -10, "public_opinion": 10, "legacy": -5, "x_twitter": 5 },
      "right": { "crypto": 10, "finance": 5, "public_opinion": -10, "legacy": 5, "x_twitter": -5 }
    }
  }
];
