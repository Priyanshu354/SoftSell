export const getGeminiResponse = async (prompt) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
  
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      });
  
      const data = await response.json();
  
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return "No response from AI.";
      }
    } catch (error) {
      console.error("Gemini REST API error:", error);
      return "Failed to get a response. Please try again.";
    }
  };
  