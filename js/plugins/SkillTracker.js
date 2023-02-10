/* ************************************************************************************************
      SKILL TRACKER - SkillTracker.js
      Collect information about the skills and elements used by and against each hero
************************************************************************************************ */

/*:
 * @plugindesc Automatically collect and save skill usage data.
 * Use for analytics, usage-based skill progression, etc.  This plugin just gives the data, how to use that knowledge is up to you!
 * Usage ideas (*may require extra scripts or plugins to execute):
 *   - Use to collect player data to find which skills are overused/underused
 *   - Unlock new skills when the prerequisite skills have been used a certain number of times
 *   - Set status conditions on heroes if they have been subjected to certain types of elements or attacks too many times between rests
 *   - Let characters get better at using skills with practice
 *   - Penalize characters for 'stale moves' if they spam a single action type
 *   - Create branching class paths based on character tactics
 *   - Create a nemesis/rival recurring NPC that tries to counter the player's dominant strategy
 * 
 * @author David Bilsky ("Ironskink")
 * 
 * @help This plugin does not provide any commands yet (TODO!)
 * 
 * @param skillSummaryId
 * @desc Variable ID where the Skill Summary object is to be saved (or 0 to not save a skill summary). 
 * The skill summary object provides the following tracking info for each hero:
 *   skillUseCount: Count of how many times each skill has been used by a hero (or 'undefined' if a skill has never been used), tracked by skill ID
 *   [element name/element id]: Breakdown of each hero's interactions with all of your game's elemental types, tracked by element ID and element name, including:
 *     useCount           # of times the hero used elemental skills of this type
 *     useTotalTP         Total TP spent on skills of this elemental type
 *     useTotalMP         Total MP spent on skills of this elemental type
 *     useTotalDmg        Total damage inflicted on targets using skills of this elemental type
 *     useTotalHeal       Total damage healed by targets when using skills of this elemental type
 *     gainedTotalTP      Total TP gained by using skills of this elemental type
 *     endureCount        # of times the hero has been hit with attacks of this type
 *     endureTotalTP      Total TP spent on skills of this element that target this hero
 *     endureTotalMP      Total MP spent on skills of this element that target this hero
 *     endureTotalDmg     Total amount of elemental damage this hero has endured
 *     endureTotalHeal    Total amount of elemental healing this hero has received
 * 
 * 
 * @param actionVarId
 * @desc Variable ID where the most recently used action object should be stored (or 0 to not save to game variables)
 * @default 0
 * 
 * @param actorVarId
 * @desc Variable ID where the most recent character object (hero or enemy) should be stored (or 0 to not save to game variables)
 * @default 0
 * 
 * @param targetsVarId
 * @desc Variable ID where the array of targets for the most recent action should be stored (or 0 to not save to game variables). This will be an array containing Game_Actor and/or Game_Enemy objects
 * @default 0
 * 
 * 
 */
    //$dataSystem.elemenets
    //$dataSkills[11].damage.elementId
    //action._item._dataClass, action._item._itemId

(function(){
  const params = PluginManager.parameters('SkillTracker');
  const original_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  const original_startAction = Window_BattleLog.prototype.startAction;
  const original_makeDamageValue = Game_Action.prototype.makeDamageValue; //function(target, critical)
  let elementSummary = null;

  Game_Interpreter.prototype.pluginCommand = function(command, args){
    original_pluginCommand.call(this, command, args);
    if(command !== 'SkillTracker'){
      return;
    }

    const cmdName = args[0];
    switch(cmdName){
      case 'get':
        // TODO
        break;
      case 'set':
        // TODO
        break;
      case 'reset':
        // TODO
        break;
      case 'snapshot':
        //TODO
        break;
      default:
        console.error('SkillTracker: Unknown command "' + cmdName +'"');        
    }
  }

  Window_BattleLog.prototype.startAction = function(subject, action, targets){
    const returnVal = original_startAction.call(this, subject, action,targets);
    saveInfoToGameVars(subject, action, targets)
    saveElementSummary(subject, action, targets)

    params.skillSummaryId && $gameVariables.setValue(params.skillSummaryId, elementSummary)
    return returnVal;
  }

  Game_Action.prototype.makeDamageValue = function(target, critical){
    const damage = original_makeDamageValue.call(this, target, critical);
    const subject = this.subject();
    const action = this;
    saveElementDamage(subject, action, target, damage)
    
    return damage;
  }

  function saveInfoToGameVars(subject, action, targets){
    params.actionVarId && $gameVariables.setValue(params.actionVarId, action)
    params.actorVarId && $gameVariables.setValue(params.actorVarId, subject)
    params.targetsVarId && $gameVariables.setValue(params.targetsVarId, targets.map( (t) => t ))
  }
  
  function saveElementSummary(subject, action, targets){
    if(params.skillSummaryId && action._item._dataClass == 'skill'){
      elementSummary = elementSummary || $gameVariables.value(params.skillSummaryId) || {};
      let skill = $dataSkills[action._item._itemId];
      const elementId = skill.damage.elementId;
      const elementName = $dataSystem.elements[elementId] || getGenericName(elementId);
      const actionId = action._item._dataClass + '_' + action._item._itemId;

      if(subject instanceof Game_Actor){
        let summary = elementSummary[subject._name] = elementSummary[subject._actorId] = elementSummary[subject._actorId] || initializeSummary(subject)
        summary[elementName] = summary[elementId] = summary[elementId] || initializeElement(elementId);
        summary[elementId].useCount ++;
        summary[elementId].useTotalTP += skill.tpCost;
        summary[elementId].useTotalMP += skill.mpCost;
        summary[elementId].gainedTotalTP += skill.tpGain;
        summary.skillUseCounts[actionId] = (summary.skillUseCounts[actionId] || 0) + 1;
      }

      for(let t=0; t<targets.length; t++){
        let target = targets[t];
        if(target instanceof Game_Actor){
          let summary = elementSummary[target._actorId] = elementSummary[target._actorId] || initializeSummary(target)
          summary[elementName] = summary[elementId] = summary[elementId] || initializeElement(elementId);
          summary[elementId].endureCount ++;
          summary[elementId].endureTotalTP += skill.tpCost;
          summary[elementId].endureTotalMP += skill.mpCost;
        }
      }
    }
  }

  function saveElementDamage(subject, action, target, damage){
    if(params.skillSummaryId && action._item._dataClass == 'skill'){
      elementSummary = elementSummary || $gameVariables.value(params.skillSummaryId) || {};
      let skill = $dataSkills[action._item._itemId];
      const elementId = skill.damage.elementId;
      const elementName = $dataSystem.elements[elementId] || getGenericName(elementId);

      if(subject instanceof Game_Actor){
        let summary = elementSummary[subject._name] = elementSummary[subject._actorId] = elementSummary[subject._actorId] || initializeSummary(subject)
        summary[elementName] = summary[elementId] = summary[elementId] || initializeElement(elementId);
        if(damage > 0){
          summary[elementId].useTotalDmg += damage;
        }
        else{
          summary[elementId].useTotalHeal -= damage;
        }
        
      }

      if(target instanceof Game_Actor){
        let summary = elementSummary[target._actorId] = elementSummary[target._actorId] || initializeSummary(target)
        summary[elementId] = summary[elementId] || initializeElement(elementId);
        if(damage > 0){
          summary[elementId].endureTotalDmg += damage;
        }
        else{
          summary[elementId].endureTotalHeal -= damage;
        }
      }
    }
  }

  function initializeSummary(actor){
    return {
      actor: actor,
      skillUseCounts: {}
    }
  }
  function initializeElement(elementId){
    return{
      name: $dataSystem.elements[elementId] || getGenericName(elementId),
      useCount: 0,
      useTotalTP: 0,
      useTotalMP: 0,
      useTotalDmg: 0,
      useTotalHeal: 0,
      gainedTotalTP: 0,
      endureCount: 0,
      endureTotalTP: 0,
      endureTotalMP: 0,
      endureTotalDmg: 0,
      endureTotalHeal: 0
    }
  }
  function getGenericName(elementId){
    switch(elementId){
      case -1:
        return 'Normal Attack';
      case 0:
        return 'None';
      default:
        return 'Unnamed-' + elementId
    }
  }
})()