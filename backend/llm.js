async function maybeEnhanceWithLlm({ question, deterministicAnswer }) {
  const apiKey = process.env.LLM_API_KEY;
  const model = process.env.LLM_MODEL;
  if (!apiKey || !model) {
    return {
      ...deterministicAnswer,
      llm: {
        enabled: false,
        reason: "Set LLM_API_KEY and LLM_MODEL to enable model-generated synthesis."
      }
    };
  }

  const baseUrl = (process.env.LLM_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: [
            "You answer questions for a private investment firm's investor-network CRM.",
            "Use only the supplied graph answer and evidence.",
            "Be concise, state warm intro paths explicitly, and flag missing data."
          ].join(" ")
        },
        {
          role: "user",
          content: JSON.stringify({
            question,
            graphAnswer: deterministicAnswer
          })
        }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    const error = new Error(`LLM request failed with ${response.status}: ${text.slice(0, 300)}`);
    error.statusCode = 502;
    throw error;
  }

  const payload = await response.json();
  return {
    ...deterministicAnswer,
    narrative: payload.choices?.[0]?.message?.content || "",
    llm: {
      enabled: true,
      model,
      baseUrl
    }
  };
}

module.exports = {
  maybeEnhanceWithLlm
};
