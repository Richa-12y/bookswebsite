// quoteService.js
import axios from "axios";

const getRandomQuote = async () => {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    const data = response.data;
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex].text;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getRandomQuote };
