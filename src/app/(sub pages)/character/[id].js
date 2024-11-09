import { supabase } from '../../../lib/supabaseClient';

export async function getServerSideProps(context) {
  const { id } = context.params; //? this will get the character ID from the URL

  const { data, error } = await supabase
    .from('characters') //todo: CREATE TABLE with name "characters"
    .select('*')
    .eq('id', id)
    .single(); //? i.e. one result expected

  if (error) {
    console.error("Error fetching character: ", error);
    return {
      notFound: true, 
    };
  }

  return {
    props: {
      character: data, //? passing character data to page component
    },
  };
};

const CharacterSheet = ({ character }) => {
  if(!character){
    return<div>Character unfound</div>
  }

  return (
    <div>
      <h1>{character.name}'s Character Sheet</h1>
      <p>Class: {character.class}</p>
      <p>Level: {character.level}</p>
      <p>Attributes: {JSON.stringify(character.attributes)}</p>
      {/* Render other character details here */}
      <button onClick={() => window.location.href = `/characters/${character.id}/edit`}>Edit Character</button>
    </div>
  );
};

export default CharacterSheet;

