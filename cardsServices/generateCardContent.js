const OPENAI_API_KEY =
  "sk-proj-mNd5GRKhRl0V9Bycxyn8T3BlbkFJSwIzcIyt2wXjmWYk3KcP";
const axios = require("axios");

generateCardContent = async (content) => {
  console.log(content);
  const contentMessage = `create a single flashshard in the format of 'question' 'answer' using all of this content: ${content}`;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo-0125",
        messages: [
          {
            role: "system",
            content: "You are a concise assistant that creates flashcards.",
          },
          { role: "user", content: contentMessage },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const assistantMessage = response.data.choices[0].message.content;
    return assistantMessage;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = generateCardContent;
