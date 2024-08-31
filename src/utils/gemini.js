/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "./constants";


const apiKey = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
    movie +
    "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();

  return json.results;
};


async function runChat(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());

  const gptMovies = result.response.text().split(",");

  const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  // [Promise, Promise, Promise, Promise, Promise]

  const tmdbResults = await Promise.all(promiseArray);

  console.log(tmdbResults);
  return { tmdbResults: tmdbResults, gptMovies: gptMovies }

}

export default runChat;