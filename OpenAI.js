import OpenAI from "openai";

// Definicion de apiKey 
const openai = new OpenAI({ apiKey: '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' });

// funcion para realizar peticiones 
export async function main(prompt) {
  //hacer la peticion al API de openai
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  // iumprimir el mensaje de openai en la consola
  console.log(completion.choices[0].message.content);
}

// llamada a la funcion para hacer la peticion
// main("hola, com estas?");