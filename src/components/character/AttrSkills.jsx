import React from 'react';

const AttrBlock = [
  {
    name: "dexterity",
    skills: ["blaster", "brawling parry", "dodge", "grenade", "heavy weapons", "melee parry", "melee"]
  },
  {
    name: "perception",
    skills: ["bargain", "command", "con", "gambling", "stealth", "search"]
  },
  {
    name: "strength",
    skills: ["brawling", "climbing/jumping", "lifting", "stamina"]
  },
  {
    name: "knowledge",
    skills: ["alien species", "cultures", "intimidation", "languages", "planetary systems", "streetwise", "survival", "value"]
  },
  {
    name: "mechanical",
    skills: ["astrogation", "beast riding", "communications", "repulsorlift operation", "space transports", "starship gunnery", "starship shields", "swoop operation"]
  },
  {
    name: "technical",
    skills: ["computer programming/repair", "demolitions", "droid programming/repair", "first aid", "security", "space transports repair", "starship weapon repair"]
  }
]

const AttrSkills = () => {
  return (
    <div>
      <h1 className="text-accent">Attributes and Skills</h1>
      <div className="flex flex-wrap p-6 border border-accent justify-center">
        {AttrBlock.map((attr) => (
          <div key={attr.name} className="flex flex-col space-y-2 border border-background capitalize p-4 custom-bg-alt m-2">
            <h2 className="text-accent text-4xl p-4">{attr.name}</h2>
            <ul className="list-none">
              {attr.skills.map((skill) => (
                <li key={skill} className="text-accent">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttrSkills;
