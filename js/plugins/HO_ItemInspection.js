//=============================================================================
// HO_ItemInspection.js
//=============================================================================

var Horsti = Horsti || {};
Horsti.ItemInspection = {}
Horsti.ItemInspection.version = "1.01";

/*:
 * @author Horst Onager
 * @plugindesc v1.01 (Requires YEP_ItemCore) Displays each and every effect of an item, weapon or armor in the party's inventory.
 *
 *
 * @param --- General ---
 * @default
 *
 * @param Command Text
 * @parent --- General ---
 * @desc Command Text as it appears in the item window.
 * %1 Item Icon     %2 Item Name
 * @default Inspect %1%2
 *
 * @param State Display Mode
 * @parent --- General ---
 * @type select
 * @option Icon + Name
 * @option Icon
 * @option Name
 * @desc Adjust how states will be displayed.
 * @default Icon + Name
 *
 * @param Buff Display Mode
 * @parent --- General ---
 * @type select
 * @option Icon + Name
 * @option Icon
 * @option Name
 * @desc Adjust how buffs will be displayed.
 * @default Icon + Name
 *
 * @param Skill Display Mode
 * @parent --- General ---
 * @type select
 * @option Icon + Name
 * @option Icon
 * @option Name
 * @desc Adjust how skills will be displayed.
 * @default Icon + Name
 *
 *
 * @param --- Items ---
 * @default
 *
 * @param Recover HP
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Value
 * @default Recover \c[1]%1\c[0] HP
 *
 * @param Recover MP
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Value
 * @default Recover \c[1]%1\c[0] MP
 *
 * @param Gain TP
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Value
 * @default Gain \c[1]%1\c[0] TP
 *
 * @param Add State
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 State    %2 Rate
 * @default Add %1 (\c[1]%2\c[0])
 *
 * @param Remove State
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 State    %2 Rate
 * @default Remove %1 (\c[1]%2\c[0])
 *
 * @param Add Buff
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Buff    %2 Turns
 * @default Buff %1 for \c[1]%2\c[0] Turns
 *
 * @param Add Debuff
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Debuff    %2 Turns
 * @default Debuff %1 for \c[1]%2\c[0] Turns
 *
 * @param Remove Buff
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Parameter
 * @default Remove %1 Buff 
 *
 * @param Remove Debuff
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Parameter
 * @default Remove %1 Debuff
 *
 * @param Special Effect: Escape
 * @parent --- Items ---
 * @desc Text for this effect.
 * @default Escape From Battle
 *
 * @param Grow
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Parameter    %2 Value
 * @default Grow \c[1]%1\c[0] by \c[1]%2\c[0]
 *
 * @param Learn Skill
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Skill
 * @default Learn Skill %1
 *
 * @param Common Event
 * @parent --- Items ---
 * @desc Text for this effect.
 * %1 Index    %2 Name
 * @default Start Event \c[1]%2\c[0]
 *
 *
 * @param --- Weapons and Armor ---
 * @default
 *
 * @param Element Rate
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Element    %2 Rate
 * @default Damage From %1 \c[1]*%2\c[0]
 *
 * @param Debuff Rate
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Parameter    %2 Rate
 * @default Chance For \c[1]%1\c[0] Debuff \c[1]*%2\c[0]
 *
 * @param State Rate
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 State    %2 Rate
 * @default Chance For %1 \c[1]*%2\c[0]
 *
 * @param State Resist
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 State
 * @default Resist %1
 *
 * @param Parameter
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Parameter    %2 Rate
 * @default \c[1]%1\c[0] \c[1]*%2\c[0]
 *
 * @param Ex-Parameter
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Parameter    %2 Value
 * @default \c[1]%1\c[0] \c[1]%2\c[0]
 *
 * @param Sp-Parameter
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Parameter    %2 Rate
 * @default \c[1]%1\c[0] \c[1]*%2\c[0]
 *
 * @param Attack Element
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Element
 * @default Attack With %1
 *
 * @param Attack State
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 State    %2 Rate
 * @default Attacks Inflict %1 (\c[1]%2\c[0])
 *
 * @param Attack Speed
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Value
 * @default Attack Speed \c[1]%1\c[0]
 *
 * @param Attack Times +
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Rate
 * @default \c[1]+%1\c[0] Additional Attacks
 *
 * @param Add Skill Type
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Skill Type
 * @default Add Skill Type \c[1]%1\c[0]
 *
 * @param Seal Skill Type
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Skill Type
 * @default Seal Skill Type \c[1]%1\c[0]
 *
 * @param Add Skill
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Skill
 * @default Add Skill %1
 *
 * @param Seal Skill
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Skill
 * @default Seal Skill %1
 *
 * @param Equip Weapon
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Weapon Type
 * @default Equip \c[1]%1\c[0] Weapons
 *
 * @param Equip Armor
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Armor Type
 * @default Equip \c[1]%1\c[0] Armor
 *
 * @param Lock Equip
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Equip Type
 * @default Lock Equipment \c[1]%1\c[0]
 *
 * @param Seal Equip
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Equip Type
 * @default Seal Equipment \c[1]%1\c[0]
 *
 * @param Slot Type
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Slot Type
 * @default Slot Type: \c[1]%1\c[0]
 *
 * @param Action Times +
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Rate
 * @default Additional Action Chance \c[1]+%1\c[0]
 *
 * @param Special Flag
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Flag
 * @default Special Flag: \c[1]%1\c[0]
 *
 * @param Collapse Effect
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Effect
 * @default Collapse Effect: \c[1]%1\c[0]
 *
 * @param Party Ability
 * @parent --- Weapons and Armor ---
 * @desc Text for this trait.
 * %1 Ability
 * @default Party Ability: \c[1]%1\c[0]
 *
 *
 * @param --- Ex-Parameter Names ---
 * @default
 *
 * @param HIT Hit Rate
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default HIT
 *
 * @param EVA Evasion
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default EVA
 *
 * @param CRI Critical Rate
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default CRI
 *
 * @param CEV Critical Evasion
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default CEV
 *
 * @param MEV Magic Evasion
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default MEV
 *
 * @param MRF Magic Reflection
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default MRF
 *
 * @param CNT Counter Attack
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default CNT
 *
 * @param HRG HP Regeneration
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default HRG
 *
 * @param MRG MP Regeneration
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default MRG
 *
 * @param TRG TP Regeneration
 * @parent --- Ex-Parameter Names ---
 * @desc Text for this parameter.
 * @default TRG
 *
 *
 * @param --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default
 *
 * @param TGR Target Rate
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default TGR
 *
 * @param GRD Guard Effect
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default GRD
 *
 * @param REC Recovery Effect
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default REC
 *
 * @param PHA Pharmacology
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default PHA
 *
 * @param MCR Mana Cost Rate
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default MCR
 *
 * @param TCR TP Cost Rate
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default TCR
 *
 * @param PDR Physical Damage Rate
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default PDR
 *
 * @param MDR Magical Damage Rate
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default MDR
 *
 * @param FDR Floor Damage Rate
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default FDR
 *
 * @param EXR Experience Rate
 * @parent --- Sp-Parameter Names ---
 * @desc Text for this parameter.
 * @default EXR
 *
 *
 * @param --- Slot Type Names ---
 * @default
 *
 * @param Slot Type: Normal
 * @parent --- Slot Type Names ---
 * @desc Text for this slot type.
 * @default Normal
 *
 * @param Slot Type: Dual Wield
 * @parent --- Slot Type Names ---
 * @desc Text for this slot type.
 * @default Dual Wield
 *
 *
 * @param --- Special Flag Names ---
 * @default
 *
 * @param Special Flag: Auto Battle
 * @parent --- Special Flag Names ---
 * @desc Text for this flag.
 * @default Auto Battle
 *
 * @param Special Flag: Guard
 * @parent --- Special Flag Names ---
 * @desc Text for this flag.
 * @default Guard
 *
 * @param Special Flag: Substitute
 * @parent --- Special Flag Names ---
 * @desc Text for this flag.
 * @default Substitute
 *
 * @param Special Flag: Preserve TP
 * @parent --- Special Flag Names ---
 * @desc Text for this flag.
 * @default Preserve TP
 *
 *
 * @param --- Collapse Effect Names ---
 * @default
 *
 * @param Collapse Effect: Normal
 * @parent --- Collapse Effect Names ---
 * @desc Text for this collapse effect.
 * @default Normal
 *
 * @param Collapse Effect: Boss
 * @parent --- Collapse Effect Names ---
 * @desc Text for this collapse effect.
 * @default Boss
 *
 * @param Collapse Effect: Instant
 * @parent --- Collapse Effect Names ---
 * @desc Text for this collapse effect.
 * @default Instant
 *
 * @param Collapse Effect: No Disappear
 * @parent --- Collapse Effect Names ---
 * @desc Text for this collapse effect.
 * @default No Disappear
 *
 *
 * @param --- Party Ability Names ---
 * @default
 *
 * @param Party Ability: Encounter Half
 * @parent --- Party Ability Names ---
 * @desc Text for this party ability.
 * @default Encounter Half
 *
 * @param Party Ability: Encounter None
 * @parent --- Party Ability Names ---
 * @desc Text for this party ability.
 * @default Encounter None
 *
 * @param Party Ability: Cancel Surprise
 * @parent --- Party Ability Names ---
 * @desc Text for this party ability.
 * @default Cancel Surprise
 *
 * @param Party Ability: Raise Preemptive
 * @parent --- Party Ability Names ---
 * @desc Text for this party ability.
 * @default Raise Preemptive
 *
 * @param Party Ability: Gold Double
 * @parent --- Party Ability Names ---
 * @desc Text for this party ability.
 * @default Gold Double
 *
 * @param Party Ability: Drop Item Double
 * @parent --- Party Ability Names ---
 * @desc Text for this party ability.
 * @default Drop Item Double
 *
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Important: This plugin requires YEP_ItemCore with the 'Updated Item Scene'
 * option enabled. Place YEP_ItemCore above this plugin in the plugin list.
 * 
 * I've always found the two lines of description that are provided by the 
 * editor to be a bit lackluster to fully describe how an item works. So this 
 * plugin adds a new inspection option for items, weapons and armors, where 
 * all their effects are listed, freeing the description box up for lore, or 
 * other more flavorful text!
 *
 * All displayed text is configurable via the plugin's parameters.
 *
 * ============================================================================
 * Usage
 * ============================================================================
 *
 * All items, weapons and armors can be inspected by default. This can however
 * be changed by use of this notetag:
 *
 * <Disable Inspection>
 *
 * ----------------------------------------------------------------------------
 *
 * You can also hide specific effects from the effects list in the inspection
 * overview. To do this, you have to use one of these notetags:
 *
 * <Hide Effect: x>
 * <Hide Effects: x to y>
 * Here, x and y are the indices of the effects in the effects list, starting
 * from 1.
 *
 * Examples:
 * <Hide Effect: 1>
 * This would hide the first entry in the effects list.
 * <Hide Effect: 2 to 4>
 * This would hide the 2nd, 3rd and 4th entry in the effects list.
 *
 * You can also use multiple of these notetags.
 *
 * If you want a specific type of effect to never appear in the inspection
 * overview, just leave the relevant plugin parameter completely empty.
 *
 * ----------------------------------------------------------------------------
 *
 * If you want to add custom text to the inspection window, you can do so
 * by using this notetag.
 *
 * <Custom Inspection Text>
 * First Line
 * Second Line
 * ...
 * </Custom Inspection Text>
 * 
 * Each line is treated as its own 'effect'. All lines of custom text are 
 * displayed after the regular effects at the end of the list.
 *
 * ----------------------------------------------------------------------------
 *
 * Note that the values for Ex-Parameter and Attack Speed modifications on
 * weapons and armors automatically have their sign added in front of them.
 * This is to streamline the display in case you have effects that negatively
 * affect any of these values.
 *
 * For the same reason, the values for HP and MP recovery are also automatically 
 * formatted to appear as e.g. '5% + 100' or '-10% - 75', depending on their
 * sign.
 *
 * Also, for existing savefiles, the inspection does NOT work on independent 
 * items.
 *
 * =============================================================================
 * Terms of Use
 * =============================================================================
 * 
 * This plugin uses an MIT license. In short, it is free to use in any 
 * project as long as credit is given to 'Horst Onager'.
 *
 * For the full terms, see here:
 * https://github.com/horstonager/rmmv-plugins
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * v1.01: Fixed an issue related to the <Hide Effects: x to y> note tag.
 * v1.00: Finished plugin.
 *
 */

if (Imported.YEP_ItemCore) {

Horsti.Parameters = PluginManager.parameters('HO_ItemInspection');
Horsti.ItemInspection.commandText  = String(Horsti.Parameters['Command Text']);
Horsti.ItemInspection.stateDisplay = String(Horsti.Parameters['State Display Mode']);
Horsti.ItemInspection.buffDisplay  = String(Horsti.Parameters['Buff Display Mode']);
Horsti.ItemInspection.skillDisplay = String(Horsti.Parameters['Skill Display Mode']);

Horsti.ItemInspection.effects = {};
Horsti.ItemInspection.effects[Game_Action.EFFECT_RECOVER_HP]    = String(Horsti.Parameters['Recover HP']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_RECOVER_MP]    = String(Horsti.Parameters['Recover MP']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_GAIN_TP]       = String(Horsti.Parameters['Gain TP']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_ADD_STATE]     = String(Horsti.Parameters['Add State']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_REMOVE_STATE]  = String(Horsti.Parameters['Remove State']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_ADD_BUFF]      = String(Horsti.Parameters['Add Buff']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_ADD_DEBUFF]    = String(Horsti.Parameters['Add Debuff']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_REMOVE_BUFF]   = String(Horsti.Parameters['Remove Buff']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_REMOVE_DEBUFF] = String(Horsti.Parameters['Remove Debuff']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_SPECIAL]       = String(Horsti.Parameters['Special Effect: Escape']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_GROW]          = String(Horsti.Parameters['Grow']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_LEARN_SKILL]   = String(Horsti.Parameters['Learn Skill']);
Horsti.ItemInspection.effects[Game_Action.EFFECT_COMMON_EVENT]  = String(Horsti.Parameters['Common Event']);

Horsti.ItemInspection.traits = {};
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_ELEMENT_RATE]   = String(Horsti.Parameters['Element Rate']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_DEBUFF_RATE]    = String(Horsti.Parameters['Debuff Rate']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_STATE_RATE]     = String(Horsti.Parameters['State Rate']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_STATE_RESIST]   = String(Horsti.Parameters['State Resist']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_PARAM]          = String(Horsti.Parameters['Parameter']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_XPARAM]         = String(Horsti.Parameters['Ex-Parameter']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_SPARAM]         = String(Horsti.Parameters['Sp-Parameter']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_ATTACK_ELEMENT] = String(Horsti.Parameters['Attack Element']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_ATTACK_STATE]   = String(Horsti.Parameters['Attack State']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_ATTACK_SPEED]   = String(Horsti.Parameters['Attack Speed']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_ATTACK_TIMES]   = String(Horsti.Parameters['Attack Times +']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_STYPE_ADD]      = String(Horsti.Parameters['Add Skill Type']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_STYPE_SEAL]     = String(Horsti.Parameters['Seal Skill Type']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_SKILL_ADD]      = String(Horsti.Parameters['Add Skill']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_SKILL_SEAL]     = String(Horsti.Parameters['Seal Skill']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_EQUIP_WTYPE]    = String(Horsti.Parameters['Equip Weapon']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_EQUIP_ATYPE]    = String(Horsti.Parameters['Equip Armor']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_EQUIP_LOCK]     = String(Horsti.Parameters['Lock Equip']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_EQUIP_SEAL]     = String(Horsti.Parameters['Seal Equip']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_SLOT_TYPE]      = String(Horsti.Parameters['Slot Type']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_ACTION_PLUS]    = String(Horsti.Parameters['Action Times +']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_SPECIAL_FLAG]   = String(Horsti.Parameters['Special Flag']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_COLLAPSE_TYPE]  = String(Horsti.Parameters['Collapse Effect']);
Horsti.ItemInspection.traits[Game_BattlerBase.TRAIT_PARTY_ABILITY]  = String(Horsti.Parameters['Party Ability']);

Horsti.ItemInspection.exParams = [];
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['HIT Hit Rate']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['EVA Evasion']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['CRI Critical Rate']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['CEV Critical Evasion']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['MEV Magic Evasion']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['MRF Magic Reflection']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['CNT Counter Attack']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['HRG HP Regeneration']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['MRG MP Regeneration']));
Horsti.ItemInspection.exParams.push(String(Horsti.Parameters['TRG TP Regeneration']));

Horsti.ItemInspection.spParams = [];
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['TGR Target Rate']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['GRD Guard Effect']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['REC Recovery Effect']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['PHA Pharmacology']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['MCR Mana Cost Rate']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['TCR TP Cost Rate']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['PDR Physical Damage Rate']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['MDR Magical Damage Rate']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['FDR Floor Damage Rate']));
Horsti.ItemInspection.spParams.push(String(Horsti.Parameters['EXR Experience Rate']));

Horsti.ItemInspection.slotTypes = [];
Horsti.ItemInspection.slotTypes.push(String(Horsti.Parameters['Slot Type: Normal']));
Horsti.ItemInspection.slotTypes.push(String(Horsti.Parameters['Slot Type: Dual Wield']));

Horsti.ItemInspection.specialFlags = [];
Horsti.ItemInspection.specialFlags.push(String(Horsti.Parameters['Special Flag: Auto Battle']));
Horsti.ItemInspection.specialFlags.push(String(Horsti.Parameters['Special Flag: Guard']));
Horsti.ItemInspection.specialFlags.push(String(Horsti.Parameters['Special Flag: Substitute']));
Horsti.ItemInspection.specialFlags.push(String(Horsti.Parameters['Special Flag: Preserve TP']));

Horsti.ItemInspection.collapseEffects = [];
Horsti.ItemInspection.collapseEffects.push(String(Horsti.Parameters['Collapse Effect: Normal']));
Horsti.ItemInspection.collapseEffects.push(String(Horsti.Parameters['Collapse Effect: Boss']));
Horsti.ItemInspection.collapseEffects.push(String(Horsti.Parameters['Collapse Effect: Instant']));
Horsti.ItemInspection.collapseEffects.push(String(Horsti.Parameters['Collapse Effect: No Disappear']));

Horsti.ItemInspection.partyAbilities = [];
Horsti.ItemInspection.partyAbilities.push(String(Horsti.Parameters['Party Ability: Encounter Half']));
Horsti.ItemInspection.partyAbilities.push(String(Horsti.Parameters['Party Ability: Encounter None']));
Horsti.ItemInspection.partyAbilities.push(String(Horsti.Parameters['Party Ability: Cancel Surprise']));
Horsti.ItemInspection.partyAbilities.push(String(Horsti.Parameters['Party Ability: Raise Preemptive']));
Horsti.ItemInspection.partyAbilities.push(String(Horsti.Parameters['Party Ability: Gold Double']));
Horsti.ItemInspection.partyAbilities.push(String(Horsti.Parameters['Party Ability: Drop Item Double']));

//=============================================================
// DataManager
//=============================================================

Horsti.ItemInspection.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!Horsti.ItemInspection.DataManager_isDatabaseLoaded.call(this)) return false;
	this.processItemInspectNotetags($dataItems);
	this.processItemInspectNotetags($dataWeapons);
	this.processItemInspectNotetags($dataArmors);
	return true;
};

DataManager.processItemInspectNotetags = function(group) {
	for (var n = 1; n < group.length; ++n) {
		var obj = group[n];

		obj.inspectionEnabled = true;
		obj.skipInspection = [];
		obj.customInspectionText = [];

		var notedata = obj.note.split(/[\r\n]+/);
		var noteType = null;
		for (var i = 0; i < notedata.length; ++i) {
			var line = notedata[i];
			if (line.match(/<DISABLE\s+INSPECTION>/i)) {
				obj.inspectionEnabled = false;
			}
			else if (line.match(/<HIDE\s+EFFECTS?:\s*(\d+)>/i)) {
				obj.skipInspection.push(parseInt(RegExp.$1) - 1);
			}
			else if (line.match(/<HIDE\s+EFFECTS?:\s*(\d+)\s+TO\s+(\d+)>/i)) {
				var lower = parseInt(RegExp.$1);
				var upper = parseInt(RegExp.$2);
				for (var j = lower; j <= upper; ++j) {
					obj.skipInspection.push(j - 1);
				}
			}
			else if (line.match(/<CUSTOM\s+INSPECTION\s+TEXT>/i)) {
				noteType = 'custom text';
			}
			else if (line.match(/<\/CUSTOM\s+INSPECTION\s+TEXT>/i)) {
				noteType = null;
			}
			else if (noteType === 'custom text') {
				obj.customInspectionText.push(line);
			}
		}
	}	
};

//=============================================================
// Window_ItemInspection
//=============================================================

function Window_ItemInspection() {
	this.initialize.apply(this, arguments);
}

Window_ItemInspection.prototype = Object.create(Window_Selectable.prototype);
Window_ItemInspection.prototype.constructor = Window_ItemInspection;

Window_ItemInspection.prototype.initialize = function(x, y) {
	this._windowHeight = Graphics.boxHeight - y;
	var width = this.windowWidth();
	var height = this.windowHeight();
	Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this._item = null;
	this._list = [];
	this._currentHeight = 0;
	this.hide();
	this.deactivate();
	this.calcContentsHeight();
};

Window_ItemInspection.prototype.windowWidth = function() {
	return Graphics.boxWidth;
};

Window_ItemInspection.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
};

Window_ItemInspection.prototype.setItem = function(item) {
	this._item = item;
	this.makeItemEffectsList();
	this.refresh();
	this.show();
	this.activate();
	this.updateArrows(true);
};

Window_ItemInspection.prototype.refresh = function() {
	this.calcContentsHeight();
	this.createContents();
	this._currentHeight = 0;
	this.drawEffects();
};

Window_ItemInspection.prototype.windowHeight = function() {
	return this._windowHeight;
};

Window_ItemInspection.prototype.contentsHeight = function() {
	return this._allContentsHeight;
};

Window_ItemInspection.prototype.calcContentsHeight = function() {
	var defaultHeight = this.windowHeight() - this.standardPadding() * 2;
	if (!this._item) return defaultHeight;
	this._allContentsHeight = Math.max(defaultHeight, this._list.length * this.lineHeight());
};

Window_ItemInspection.prototype.makeItemEffectsList = function() {
	this._list = [];
	if (!this._item) return;
	var effects = DataManager.isItem(this._item) ? this._item.effects : this._item.traits;
	for (var i = 0; i < effects.length; ++i) {
		var effect = effects[i];
		var text = this.inspectionText(effect);
		if (this.isValidEffect(effect, i, text)) {
			this._list.push(text);
		}
	}
	for (var i = 0; i < this._item.customInspectionText.length; ++i) {
		var text = this._item.customInspectionText[i];
		this._list.push(text);
	}
};

Window_ItemInspection.prototype.isValidEffect = function(effect, index, text) {
	if (this._item.skipInspection.contains(index)) return false;
	if (text.length === 0) return false;
	var type = DataManager.isItem(this._item) ? 'item' : 'equip';
	if (type === 'item' && 
		[Game_Action.EFFECT_ADD_STATE, Game_Action.EFFECT_REMOVE_STATE]
		.contains(effect.code)) {
		var state = $dataStates[effect.dataId];
		if (state.iconIndex === 0) return false;
	}
	if (type === 'equip' && 
		[Game_BattlerBase.TRAIT_STATE_RATE, Game_BattlerBase.TRAIT_STATE_RESIST, Game_BattlerBase.TRAIT_ATTACK_STATE]
		.contains(effect.code)) {
		var state = $dataStates[effect.dataId];
		if (state.iconIndex === 0) return false;
	}
	return true;
};

Window_ItemInspection.prototype.formatSignedNumber = function(value) {
	return (value >= 0 ? '+' : '-') + String(Math.abs(value));
};

Window_ItemInspection.prototype.formatSignedRate = function(value) {
	return (value >= 0 ? '+' : '-') + String(Math.abs(Math.round(value * 100))) + '%';
};

Window_ItemInspection.prototype.formatRate = function(value) {
	return String(Math.round(value * 100)) + '%';
};

Window_ItemInspection.prototype.formatHpMp = function(rate, flat) {
	if (rate === 0 && flat !== 0) return String(flat);
	if (rate !== 0 && flat === 0) return this.formatRate(rate);
	return this.formatRate(rate) + (flat >= 0 ? ' + ' : ' - ') + Math.abs(flat);
};

Window_ItemInspection.prototype.formatState = function(stateId) {
	var state = $dataStates[stateId];
	var text = '';
	if (state.iconIndex > 0 && (Horsti.ItemInspection.stateDisplay === 'Icon + Name' || Horsti.ItemInspection.stateDisplay === 'Icon')) {
		text += '\\i[' + state.iconIndex + ']';
	}
	if (Horsti.ItemInspection.stateDisplay === 'Icon + Name' || Horsti.ItemInspection.stateDisplay === 'Name') {
		text += state.name;
	}
	return text;
};

Window_ItemInspection.prototype.formatSkill = function(skillId) {
	var skill = $dataSkills[skillId];
	var text = '';
	if (skill.iconIndex > 0 && (Horsti.ItemInspection.skillDisplay === 'Icon + Name' || Horsti.ItemInspection.skillDisplay === 'Icon')) {
		text += '\\i[' + skill.iconIndex + ']';
	}
	if (Horsti.ItemInspection.skillDisplay === 'Icon + Name' || Horsti.ItemInspection.skillDisplay === 'Name') {
		text += skill.name;
	}
	return text;
};

Window_ItemInspection.prototype.formatBuff = function(buffId, isBuff) {
	var iconIndex = buffId + (isBuff ? Game_BattlerBase.ICON_BUFF_START : Game_BattlerBase.ICON_DEBUFF_START)
	var text = '';
	if (iconIndex > 0 && (Horsti.ItemInspection.buffDisplay === 'Icon + Name' || Horsti.ItemInspection.buffDisplay === 'Icon')) {
		text += '\\i[' + iconIndex + ']';
	}
	if (Horsti.ItemInspection.buffDisplay === 'Icon + Name' || Horsti.ItemInspection.buffDisplay === 'Name') {
		text += this.formatParam(buffId);
	}
	return text;
};

Window_ItemInspection.prototype.formatCommonEvent = function(eventId) {
	return $dataCommonEvents[eventId].name;
};

Window_ItemInspection.prototype.formatParam = function(paramId) {
	return $dataSystem.terms.params[paramId];
};

Window_ItemInspection.prototype.formatExParam = function(paramId) {
	return Horsti.ItemInspection.exParams[paramId];
};

Window_ItemInspection.prototype.formatSpParam = function(paramId) {
	return Horsti.ItemInspection.spParams[paramId];
};

Window_ItemInspection.prototype.formatElement = function(elementId) {
	return $dataSystem.elements[elementId];
};

Window_ItemInspection.prototype.formatSType = function(typeId) {
	return $dataSystem.skillTypes[typeId];
};

Window_ItemInspection.prototype.formatWType = function(typeId) {
	return $dataSystem.weaponTypes[typeId];
};

Window_ItemInspection.prototype.formatAType = function(typeId) {
	return $dataSystem.armorTypes[typeId];
};

Window_ItemInspection.prototype.formatEType = function(typeId) {
	return $dataSystem.equipTypes[typeId];
};

Window_ItemInspection.prototype.formatSlotType = function(id) {
	return Horsti.ItemInspection.slotTypes[id];
};

Window_ItemInspection.prototype.formatSpecialFlag = function(id) {
	return Horsti.ItemInspection.specialFlags[id];
};

Window_ItemInspection.prototype.formatCollapseEffect = function(id) {
	return Horsti.ItemInspection.collapseEffects[id];
};

Window_ItemInspection.prototype.formatPartyAbility = function(id) {
	return Horsti.ItemInspection.partyAbilities[id];
};

Window_ItemInspection.prototype.inspectionText = function(effect) {
	if (DataManager.isItem(this._item)) {
		var text = Horsti.ItemInspection.effects[effect.code];
		switch (effect.code) {
		case Game_Action.EFFECT_RECOVER_HP: return text.format(this.formatHpMp(effect.value1, effect.value2)); break; // TODO
		case Game_Action.EFFECT_RECOVER_MP: return text.format(this.formatHpMp(effect.value1, effect.value2)); break;
		case Game_Action.EFFECT_GAIN_TP: return text.format(effect.value1); break;
		case Game_Action.EFFECT_ADD_STATE: return text.format(this.formatState(effect.dataId), this.formatRate(effect.value1)); break;
		case Game_Action.EFFECT_REMOVE_STATE: return text.format(this.formatState(effect.dataId), this.formatRate(effect.value1)); break;
		case Game_Action.EFFECT_ADD_BUFF: return text.format(this.formatBuff(effect.dataId, true), effect.value1); break;
		case Game_Action.EFFECT_ADD_DEBUFF: return text.format(this.formatBuff(effect.dataId, false), effect.value1); break;
		case Game_Action.EFFECT_REMOVE_BUFF: return text.format(this.formatBuff(effect.dataId, true)); break;
		case Game_Action.EFFECT_REMOVE_DEBUFF: return text.format(this.formatBuff(effect.dataId, false)); break;
		case Game_Action.EFFECT_SPECIAL: return text.format(effect.dataId); break;
		case Game_Action.EFFECT_GROW: return text.format(this.formatParam(effect.dataId), effect.value1); break;
		case Game_Action.EFFECT_LEARN_SKILL: return text.format(this.formatSkill(effect.dataId), effect.value1); break;
		case Game_Action.EFFECT_COMMON_EVENT: return text.format(effect.dataId, this.formatCommonEvent(effect.dataId)); break;
		default: return ''; }
	}
	else { // weapon or armor
		var text = Horsti.ItemInspection.traits[effect.code];
		switch (effect.code) {
		case Game_BattlerBase.TRAIT_ELEMENT_RATE: return text.format(this.formatElement(effect.dataId), this.formatRate(effect.value)); break;
		case Game_BattlerBase.TRAIT_DEBUFF_RATE: return text.format(this.formatParam(effect.dataId), this.formatRate(effect.value));; break;
		case Game_BattlerBase.TRAIT_STATE_RATE: return text.format(this.formatState(effect.dataId), this.formatRate(effect.value));; break;
		case Game_BattlerBase.TRAIT_STATE_RESIST: return text.format(this.formatState(effect.dataId));; break;
		case Game_BattlerBase.TRAIT_PARAM: return text.format(this.formatParam(effect.dataId), this.formatRate(effect.value)); break;
		case Game_BattlerBase.TRAIT_XPARAM: return text.format(this.formatExParam(effect.dataId), this.formatSignedRate(effect.value)); break;
		case Game_BattlerBase.TRAIT_SPARAM: return text.format(this.formatSpParam(effect.dataId), this.formatRate(effect.value)); break;
		case Game_BattlerBase.TRAIT_ATTACK_ELEMENT: return text.format(this.formatElement(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_ATTACK_STATE: return text.format(this.formatState(effect.dataId), this.formatRate(effect.value)); break;
		case Game_BattlerBase.TRAIT_ATTACK_SPEED: return text.format(this.formatSignedNumber(effect.value)); break;
		case Game_BattlerBase.TRAIT_ATTACK_TIMES: return text.format(effect.value); break;
		case Game_BattlerBase.TRAIT_STYPE_ADD: return text.format(this.formatSType(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_STYPE_SEAL: return text.format(this.formatSType(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_SKILL_ADD: return text.format(this.formatSkill(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_SKILL_SEAL: return text.format(this.formatSkill(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_EQUIP_WTYPE: return text.format(this.formatWType(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_EQUIP_ATYPE: return text.format(this.formatAType(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_EQUIP_LOCK: return text.format(this.formatEType(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_EQUIP_SEAL: return text.format(this.formatEType(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_SLOT_TYPE: return text.format(this.formatSlotType(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_ACTION_PLUS: return text.format(this.formatRate(effect.value)); break;
		case Game_BattlerBase.TRAIT_SPECIAL_FLAG: return text.format(this.formatSpecialFlag(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_COLLAPSE_TYPE: return text.format(this.formatCollapseEffect(effect.dataId)); break;
		case Game_BattlerBase.TRAIT_PARTY_ABILITY: return text.format(this.formatPartyAbility(effect.dataId)); break;
		default: return ''; }
	}
};

Window_ItemInspection.prototype.drawDarkRect = function(x, y, w, h) {
	var color = this.gaugeBackColor();
	this.changePaintOpacity(false);
	this.contents.fillRect(x + 1, y + 1, w - 2, h - 2, color);
	this.changePaintOpacity(true);
};

Window_ItemInspection.prototype.drawEffects = function() {
	for (var i = 0; i < this._list.length; ++i) {
		var text = this._list[i];
		var rect = new Rectangle(0, this._currentHeight, 
				this.contents.width, this.lineHeight());
		this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
		this.resetFontSettings();
		this.drawTextEx(text, rect.x, rect.y);
		this._currentHeight += this.lineHeight();
	}  
};

Window_ItemInspection.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
	if (this.isOpenAndActive()) this.updateKeyboardScrolling();
};

Window_ItemInspection.prototype.updateKeyboardScrolling = function() {
	if (Input.isPressed('up')){
		this.scrollUp(false);
	}
	else if (Input.isPressed('down')){
		this.scrollDown(false);
	}
	else if (Input.isPressed('pageup')){
		this.scrollUp(true);
	}
	else if (Input.isPressed('pagedown')){
		this.scrollDown(true);
	}
};

Window_ItemInspection.prototype.updateArrows = function(forced) {
	if (!forced && this._lastY === this.origin.y) return;
	this._lastY = this.origin.y;
	this.upArrowVisible = this.origin.y > 0;
	this.downArrowVisible = this.origin.y < this.contentsHeight() - this.height + this.standardPadding() * 2;
};

Window_ItemInspection.prototype.select = function(index) {};

Window_ItemInspection.prototype.scrollDown = function(fast) {
	var maximum = this.contentsHeight() - this.windowHeight() + this.standardPadding() * 2;
	this.origin.y = Math.min(maximum, this.origin.y + (fast ? 16 : 4));
};

Window_ItemInspection.prototype.scrollUp = function(fast) {
	this.origin.y = Math.max(0, this.origin.y - (fast ? 16 : 4));
};

Window_ItemInspection.prototype.hideArrows = function() {
	this.upArrowVisible = false;
	this.downArrowVisible = false;
};

Window_ItemInspection.prototype.processWheel = function() {
	if (!this.isOpenAndActive()) return;
	var threshold = 20;
	if (TouchInput.wheelY >= threshold) {
		this.scrollDown(true);
	}
	if (TouchInput.wheelY <= -threshold) {
		this.scrollUp(true);
	}
};

//=============================================================
// Scene_Item
//=============================================================

Horsti.ItemInspection.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function() {
	Horsti.ItemInspection.Scene_Item_createItemWindow.call(this);
	this.createItemInspectionWindow();
};

Horsti.ItemInspection.Scene_Item_createActionWindow = Scene_Item.prototype.createActionWindow;
Scene_Item.prototype.createActionWindow = function() {
	Horsti.ItemInspection.Scene_Item_createActionWindow.call(this);
	this._itemActionWindow.setHandler('inspect', this.onItemInspectOk.bind(this))
};

Scene_Item.prototype.createItemInspectionWindow = function() {
	var wy = this._itemWindow.y;
	this._itemInspectWindow = new Window_ItemInspection(0, wy);
	this._itemInspectWindow.setHandler('cancel', this.onItemInspectCancel.bind(this));
	this.addWindow(this._itemInspectWindow);
};

Scene_Item.prototype.onItemInspectOk = function() {
	var item = this.item();
	this._itemInspectWindow.setItem(item);
};

Scene_Item.prototype.onItemInspectCancel = function() {
	this._itemInspectWindow.hide();
	this._itemInspectWindow.deactivate();
	this._itemActionWindow.activate();
};

//=============================================================
// Window_ItemActionCommand
//=============================================================

Horsti.ItemInspection.Window_ItemActionCommand_addCustomCommandsF = Window_ItemActionCommand.prototype.addCustomCommandsF;
Window_ItemActionCommand.prototype.addCustomCommandsF = function() {
	Horsti.ItemInspection.Window_ItemActionCommand_addCustomCommandsF.call(this);
	var iconText = '\\i[' + this._item.iconIndex + ']';
	var nameText = this._item.name;
	var text = Horsti.ItemInspection.commandText.format(iconText, nameText);
	var symbol = 'inspect';
	var enabled = !!this._item.inspectionEnabled;
	this.addCommand(text, symbol, enabled);
};

} else { console.error('Please install YEP_ItemCore to use HO_ItemInspection.'); }
