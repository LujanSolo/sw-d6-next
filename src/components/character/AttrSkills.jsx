"use client";
import React, { useState } from 'react';
import { AttrBlock } from '../../app/data';

// const AttrBlock = [
//   {
//     name: "dexterity",
//     value: 0,
//     bonus: 0,
//     skills: [
//       { name: "blaster", value: 0, bonus: 0, },
//       { name: "brawling parry", value: 0, bonus: 0, },
//       { name: "dodge", value: 0, bonus: 0, },
//       { name: "grenade", value: 0, bonus: 0, },
//       { name: "heavy weapons", value: 0, bonus: 0, },
//       { name: "melee parry", value: 0, bonus: 0, },
//       { name: "melee", value: 0, bonus: 0, }
//     ]
//   },
//   {
//     name: "perception",
//     value: 0,
//     bonus: 0,
//     skills: [
//       { name: "bargain", value: 0, bonus: 0, },
//       { name: "command", value: 0, bonus: 0, },
//       { name: "con", value: 0, bonus: 0, },
//       { name: "gambling", value: 0, bonus: 0, },
//       { name: "stealth", value: 0, bonus: 0, },
//       { name: "search", value: 0, bonus: 0, }
//     ]
//   },
//   {
//     name: "strength",
//     value: 0,
//     bonus: 0,
//     skills: [
//       { name: "brawling", value: 0, bonus: 0, },
//       { name: "climbing/jumping", value: 0, bonus: 0, },
//       { name: "lifting", value: 0, bonus: 0, },
//       { name: "stamina", value: 0, bonus: 0, }
//     ]
//   },
//   {
//     name: "knowledge",
//     value: 0,
//     bonus: 0,
//     skills: [
//       { name: "alien species", value: 0, bonus: 0, },
//       { name: "cultures", value: 0, bonus: 0, },
//       { name: "intimidation", value: 0, bonus: 0, },
//       { name: "languages", value: 0, bonus: 0, },
//       { name: "planetary systems", value: 0, bonus: 0, },
//       { name: "streetwise", value: 0, bonus: 0, },
//       { name: "survival", value: 0, bonus: 0, },
//       { name: "value", value: 0, bonus: 0, }
//     ]
//   },
//   {
//     name: "mechanical",
//     value: 0,
//     bonus: 0,
//     skills: [
//       { name: "astrogation", value: 0, bonus: 0, },
//       { name: "beast riding", value: 0, bonus: 0, },
//       { name: "communications", value: 0, bonus: 0, },
//       { name: "repulsorlift operation", value: 0, bonus: 0, },
//       { name: "space transports", value: 0, bonus: 0, },
//       { name: "starship gunnery", value: 0, bonus: 0, },
//       { name: "starship shields", value: 0, bonus: 0, },
//       { name: "swoop operation", value: 0, bonus: 0, },
//     ]
//   },
//   {
//     name: "technical",
//     value: 0,
//     bonus: 0,
//     skills: [
//       { name: "computer programming/repair", value: 0, bonus: 0, },
//       { name: "demolitions", value: 0, bonus: 0, },
//       { name: "droid programming/repair", value: 0, bonus: 0, },
//       { name: "first aid", value: 0, bonus: 0, },
//       { name: "security", value: 0, bonus: 0, },
//       { name: "space transports repair", value: 0, bonus: 0, },
//       { name: "starship weapon repair", value: 0, bonus: 0, }
//     ]
//   }
// ]

// const AttrSkills = () => {

//   let [attrPoints, setAttrPoints] = useState(18);
//   const [attributes, setAttributes] = useState(AttrBlock);

//   let [skillPoints, setSkillPoints] = useState(7);

//   const updateAttributeValue = (index, action) => {
//     let newAttributes = [...attributes];
//     if (action === 'attr-add') {
//       if (attrPoints > 0 && newAttributes[index].value < 6) {
//         newAttributes[index].value++;
//         setAttrPoints(prevPoints => prevPoints - 1);  // Update attrPoints immutably
//         setAttributes(newAttributes);
//         newAttributes[index].skills.forEach(skill => {
//           skill.value = newAttributes[index].value;
//         })
//       }
//     } else if (action === 'attr-minus') {
//       if (newAttributes[index].value > 0 && attrPoints < 18) {
//         newAttributes[index].value--;
//         setAttrPoints(prevPoints => prevPoints + 1);
//         setAttributes(newAttributes);
//         newAttributes[index].skills.forEach(skill => {
//           skill.value = newAttributes[index].value;
//         })
//       }
//     };
//   };

//   const updateSkillValue = (attrIndex, skillIndex, action) => {
//     let newAttributes = [...attributes];
//     const skill = newAttributes[attrIndex].skills[skillIndex];
//     if (action === 'skill-add') {
//       if (
//         skillPoints > 0 &&
//         skill.bonus <= 2
//       ) {
//         skill.bonus++;
//         setSkillPoints(prevPoints => prevPoints - 1);  // Update attrPoints immutably
//         setAttributes(newAttributes);
//       }
//     } else if (action === 'skill-minus') {
//       if (
//         skill.bonus > 0 && skillPoints < 7
//       ) {
//         skill.bonus--;
//         setSkillPoints(prevPoints => prevPoints + 1);
//         setAttributes(newAttributes);
//       }
//     };
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-center">
//       <h1 className="text-accent">Attributes and Skills</h1>
//       <div className="flex flex-wrap">
//         {AttrBlock.map((attr, index) => (
//           <div key={index} className="w-full custom-bg-alt p-4 m-2">
//             <h2 className="text-xl text-accent text-center capitalize">
//               {attr.name}:
//               <span id="attr" className="text-sm text-foreground px-1">
//                 {attr.value}D
//               </span>
//               <span id="bonus" className="text-sm text-foreground ">
//                 + {attr.bonus}
//               </span>
//             </h2>
//             <button className="bg-accent text-foreground p-1 m-1 rounded" onClick={() => updateAttributeValue(index, 'attr-add')}>+</button>
//             <button className="bg-accent text-foreground p-1 m-1 rounded" onClick={() => updateAttributeValue(index, 'attr-minus')}>-</button>
//             <ul>
//               {attr.skills.map((skill, skillIndex) => (
//                 <li key={skillIndex} className="text-sm text-accent capitalize">
//                   {skill.name}:
//                   <span className="text-sm text-foreground">
//                     {attr.value + skill.bonus}
//                   </span>
//                   <span>
//                     <button
//                       className="p-1 m-1 rounded"
//                       onClick={() => updateSkillValue(index, skillIndex, 'skill-add')}
//                     >
//                       +
//                     </button>
//                   </span>
//                   <span>
//                     <button
//                       className="p-1 m-1 rounded"
//                       onClick={() => updateSkillValue(index, skillIndex, 'skill-minus')}
//                     >
//                       -
//                     </button>
//                   </span>
//                 </li>
//               ))}
//             </ul>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default AttrSkills;

const AttrSkills = ({ attributes, setAttributes, attrPoints, setAttrPoints, skillPoints, setSkillPoints }) => {

  const updateAttributeValue = (index, action) => {
    const newAttributes = [...attributes];
    if (action === 'attr-add') {
      if (attrPoints > 0 && newAttributes[index].value < 6) {
        newAttributes[index].value++;
        setAttrPoints(prevPoints => prevPoints - 1);
        setAttributes(newAttributes);
        newAttributes[index].skills.forEach(skill => {
          skill.value = newAttributes[index].value;
        });
      }
    } else if (action === 'attr-minus') {
      if (newAttributes[index].value > 0 && attrPoints < 18) {
        newAttributes[index].value--;
        setAttrPoints(prevPoints => prevPoints + 1);
        setAttributes(newAttributes);
        newAttributes[index].skills.forEach(skill => {
          skill.value = newAttributes[index].value;
        });
      }
    }
  };

  const updateSkillValue = (attrIndex, skillIndex, action) => {
    const newAttributes = [...attributes];
    const skill = newAttributes[attrIndex].skills[skillIndex];
    if (action === 'skill-add') {
      if (skillPoints > 0 && skill.bonus <= 2) {
        skill.bonus++;
        setSkillPoints(prevPoints => prevPoints - 1);
        setAttributes(newAttributes);
      }
    } else if (action === 'skill-minus') {
      if (skill.bonus > 0 && skillPoints < 7) {
        skill.bonus--;
        setSkillPoints(prevPoints => prevPoints + 1);
        setAttributes(newAttributes);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-accent">Attributes and Skills</h1>
      <div className="flex flex-wrap">
        {attributes.map((attr, index) => (
          <div key={index} className="w-full custom-bg-alt p-4 m-2">
            <h2 className="text-xl text-accent text-center capitalize">
              {attr.name}: <span className="text-sm text-foreground px-1">{attr.value}D</span> <span className="text-sm text-foreground">+ {attr.bonus}</span>
            </h2>
            <button className="bg-accent text-foreground p-1 m-1 rounded" onClick={() => updateAttributeValue(index, 'attr-add')}>+</button>
            <button className="bg-accent text-foreground p-1 m-1 rounded" onClick={() => updateAttributeValue(index, 'attr-minus')}>-</button>
            <ul>
              {attr.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-sm text-accent capitalize">
                  {skill.name}: <span className="text-sm text-foreground">{attr.value + skill.bonus}</span>
                  <button className="p-1 m-1 rounded" onClick={() => updateSkillValue(index, skillIndex, 'skill-add')}>+</button>
                  <button className="p-1 m-1 rounded" onClick={() => updateSkillValue(index, skillIndex, 'skill-minus')}>-</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttrSkills;

