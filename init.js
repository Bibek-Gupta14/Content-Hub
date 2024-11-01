const mongoose = require("mongoose");
const User = require("./models/model.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/blog")
  .then(() => {
    console.log("Connection Successful!! ");
  })
  .catch((err) => {
    console.log("Error is: ", err);
  });


let data = User.insertMany([
  {
    title: "Journey to the Unknown: Adventures That Changed My Life",
    content:
      "Life’s greatest adventures often come when we least expect them. From scaling mountains to diving into unknown waters, each journey teaches us invaluable lessons about courage, perseverance, and the beauty of the world. These are the stories of the adventures that have left an indelible mark on my soul, shaping who I am today.",
  },
  {
    title: "Thoughts Over Coffee: Morning Musings",
    content:
      "There’s something about the quiet of the morning, the aroma of freshly brewed coffee, and the stillness that sparks deep reflection. Here, I share my morning thoughts, the ideas that dance through my mind as the world awakens. Whether it’s contemplating life’s big questions or simply enjoying the moment, these musings are my way of finding peace before the hustle and bustle begins.",
  },
  {
    title: "Tech Tips: Navigating the Digital World",
    content:
      "In today’s fast-paced digital era, staying updated with the latest tech trends can be overwhelming. From mastering productivity tools to understanding cybersecurity, here are some practical tech tips to help you navigate the digital world with ease and confidence. Embrace technology as your ally in simplifying and enhancing your life.",
  },
  {
    title: "Life Lessons From a Wanderer",
    content:
      "Traveling is more than just visiting new places; it’s about discovering different cultures, meeting new people, and learning invaluable life lessons along the way. These are the stories and wisdom I’ve gathered from my travels, lessons that go beyond the destination and touch the essence of what it means to truly live.",
  },
  {
    title: "Culinary Quests: Recipes With a Twist",
    content:
      "Food is a universal language, and cooking is an art that brings people together. Join me on my culinary quests as I explore unique recipes with a twist. From fusion dishes to experimenting with exotic ingredients, these recipes are an invitation to bring creativity and joy to your kitchen.",
  },
  {
    title: "Mindfulness in the Modern Age",
    content:
      "In a world that never stops, finding moments of mindfulness is essential for our well-being. Here, I explore techniques and practices to cultivate mindfulness amidst the chaos of modern life. Let’s embark on a journey to discover inner peace, one mindful moment at a time.",
  },
  {
    title: "Creativity Unleashed: Art and Inspiration",
    content:
      "Creativity knows no bounds. Whether you’re an artist, a writer, or someone who simply loves to create, this space is dedicated to unleashing your creative potential. Explore inspiring stories, innovative ideas, and practical tips to fuel your creative spirit and bring your imagination to life.",
  },
  {
    title: "Tales of Triumph: Overcoming the Odds",
    content:
      "Life is filled with challenges, but it’s our triumphs over these obstacles that define us. These are the tales of individuals who have faced adversity and emerged victorious, stories of resilience and determination that inspire us to keep pushing forward no matter the odds.",
  },
  {
    title: "Sustainable Living: Tips and Tricks",
    content:
      "Living sustainably is more important than ever. Here, I share practical tips and tricks to adopt a more eco-friendly lifestyle. From reducing waste to embracing renewable energy, these insights are designed to help you make a positive impact on the planet, one small change at a time.",
  },
  {
    title: "Bookworm's Paradise: Reviews and Recommendations",
    content:
      "For the love of books, this is a haven for fellow bookworms. Dive into reviews of my favorite reads, from classic literature to contemporary fiction. Discover new recommendations and join me in celebrating the joy of getting lost in the pages of a great book."
  },
]);
