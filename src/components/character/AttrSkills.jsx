"use client";
import React from 'react';

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
            <button type="button" className="bg-accent text-foreground p-1 m-1 rounded" onClick={() => updateAttributeValue(index, 'attr-add')}>+</button>
            <button type="button" className="bg-accent text-foreground p-1 m-1 rounded" onClick={() => updateAttributeValue(index, 'attr-minus')}>-</button>
            <ul>
              {attr.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-sm text-accent capitalize">
                  {skill.name}: <span className="text-sm text-foreground">{attr.value + skill.bonus}</span>
                  <button type="button" className="p-1 m-1 rounded" onClick={() => updateSkillValue(index, skillIndex, 'skill-add')}>+</button>
                  <button type="button" className="p-1 m-1 rounded" onClick={() => updateSkillValue(index, skillIndex, 'skill-minus')}>-</button>
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

