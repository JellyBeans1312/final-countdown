const api_key = process.env.VUE_APP_api_key

export const getSynonym = async word => {
  const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${api_key}`);
  if(!response.ok) {
    throw Error(`There was an issue returning synonyms for ${word}`)
  }
  const data = await response.json();
  console.log(data[0].meta)
  return data[0].meta.syns[0]
}
