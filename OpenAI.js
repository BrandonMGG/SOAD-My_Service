import OpenAI from "openai";

// Definicion de apiKey 
const openai = new OpenAI({ apiKey: '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' });

// funcion para realizar peticiones 
export async function dataIA(prompt) {
  //hacer la peticion al API de openai
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  // iumprimir el mensaje de openai en la consola
  
  return completion.choices[0].message.content
}

export default dataIA

// llamada a la funcion para hacer la peticion
// main("hola, com estas?");