import OpenAI from "openai";


//openai.api_key = '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';
const openai = new OpenAI('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');

// Crea una instancia de OpenAI con tu clave de API
//const api_key = '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';

// Función para enviar una solicitud a OpenAI y obtener la respuesta
async function sendMessageToGPT() {
  try {
    const response = await openai.ChatCompletion.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    return response.data.choices[0].text.trim(); // Obtiene el texto de la respuesta
  } catch (error) {
    console.error('Error al comunicarse con OpenAI:', error);
    return 'Lo siento, ha ocurrido un error.';
  }
}

sendMessageToGPT();
