/*:

@author Chaucer
@plugindesc | Scaling Battle Rewards : Version - 2.0.0 | This plugin allows the user to control the amount of exp/gold the player gains compared to the level of enemies encountered.
@help

===============================================================================
 Introduction :
===============================================================================

 This plugin allows the user to scale the amount of exp/gold the player gets
 based on the level of the enemy compared to the level of the player.
 This plugin also allows you to define enemy levels.

 Note : If scaling is used for either exp or gold, and the enemy encountered is
 higher level than has been defined in the scale parameters, this plugin will
 return the highest defined value it can find. Alternatively, the same goes for
 if the nemy is lower than has been previously defined. For example, if the
 highest level difference we defined in our scale for exp is "10 levels above
 player", but the player is level 20, while the enemy is level 50, the exp will
 be scaled based on the "10 levels above player" value.

 Note : If an enemy level is not defined it will automatically be assigned a
 level of 1.

===============================================================================
 Requirements :
===============================================================================

---------------------------------------
 None.
---------------------------------------

===============================================================================
 Instructions :
===============================================================================

---------------------------------------
 Exp Scale Types/ Gold Scale Types :
---------------------------------------

  This section contains information regarding the scale types, and how they
  work.


  type : "Actor Specific"
  ---------------------------------------
  details : Each individual actor will recieve their own unique reward values(
  only applicable to exp ).

  example :
  ---------------------------------------
  If the party defeats "Bat" with a level of 3, which gives a default value of
  10 exp, and "Harold" is level 5, but "Therese" is level 2, Harold will gain
  8 exp, while Therese will gain 11( note : I'm basing this off the default
  values of this plugin ).


  type : "Party Average Level"
  ---------------------------------------
  details : Exp/Gold will be gained based on the parties average level.

  example :
  ---------------------------------------
  If the party defeats "Bat" with a level of 3, which gives a default of 10
  exp, and "Harold" is level 8, and "Therese" is level 2,the parties average
  level would be 5, so both harold and therese, would gain 8 exp( note :
  I'm basing this off the default values of this plugin ).


  type : "Highest Level"
  ---------------------------------------
  details : All actors will have their exp/gold influenced by the party member
  with the highest level.

  example :
  ---------------------------------------
  If the party defeats "Bat" with a level of 3, which gives a default of 10
  exp, and "Harold" is level 2, but "Therese" is level 10, the exp income for
  all actors will be scaled down to 5( note : I'm basing this off the default
  values of this plugin ).


===============================================================================
 Terms Of Use :
===============================================================================

  This Plugin may be used commercially, or non commercially so long as credit
 is given, either in the games credit section, or in a text file alongside
 the game. This plugin may NOT be sold, or Plagiarized. This plugin may
 be extended upon, and shared freely.


===============================================================================
 Version History :
===============================================================================

 ● Version : 1.0.0
 ● Date : 05/04/2019
   ★ Release.

 ● Version : 1.0.1
 ● Date : 20/04/2019
   ★ Fixed error with floating point exp/gold rewards.

 ● Version : 2.0.0
 ● Date : 20/04/2019
   ★ Refactored code.
   ★ Added Item table for enemies.
   ★ Added conditions in order for items to drop.
   ★ Added Drop Rate scale.

===============================================================================
 Contact Me :
===============================================================================

  If you have questions, about this plugin, or commissioning me, or have
 a bug to report, please feel free to contact me by any of the below
 methods.

 rmw : https://forums.rpgmakerweb.com/index.php?members/chaucer.44456
 patreon : https://www.patreon.com/chaucer91
 ko-fi : https://http://ko-fi.com/chaucer91
 discord : chaucer#7538
 skypeId : chaucer1991
 gmail : chaucer91

  ()()
  (^.^)
 c(")(")

===============================================================================

  @param enemy_levels
  @text Enemy Levels
  @desc Describe the level of each enemy here( if an enemy level is not defined, it will default to 1 ).
  @default ["{\"enemy_id\":\"1\",\"level\":\"3\"}","{\"enemy_id\":\"2\",\"level\":\"4\"}","{\"enemy_id\":\"3\",\"level\":\"6\"}","{\"enemy_id\":\"4\",\"level\":\"8\"}"]
  @type struct<EnemyLevels>[]

  @param use_static
  @text Use Static Exp
  @desc Should Static Exp Requirement be used?
  @default true
  @type boolean

  @param to_next_level
  @text Exp To Level Up
  @desc How much experience the player needs to level up( only applicable if "Use Static Exp" enabled ).
  @default 100
  @type number
  @parent use_static

  @param enable_exp_scale
  @text Enable Exp Scaling
  @desc Choose whether exp scaling is enabled or disabled.
  @default true
  @type boolean

  @param exp_scale_type
  @text Exp Scale Type
  @desc How exp is scaled. see help for info on this parameter!( only applicable if exp scaling enabled! )
  @default 0
  @type select
  @option Actor Specific
  @value 0
  @option Party Average Level
  @value 1
  @option Highest Level
  @value 2
  @parent enable_exp_scale


  @param exp_scale
  @text Exp Scale
  @desc Scale Exp based on level differences between actors and enemies.( only applicable if exp scaling enabled! )
  @default ["{\"comparison\":\"player 10 above enemy\",\"value\":\"0\"}","{\"comparison\":\"player 9 above enemy\",\"value\":\"10\"}","{\"comparison\":\"player 8 above enemy\",\"value\":\"20\"}","{\"comparison\":\"player 7 above enemy\",\"value\":\"30\"}","{\"comparison\":\"player 6 above enemy\",\"value\":\"40\"}","{\"comparison\":\"player 5 above enemy\",\"value\":\"50\"}","{\"comparison\":\"player 4 above enemy\",\"value\":\"60\"}","{\"comparison\":\"player 3 above enemy\",\"value\":\"70\"}","{\"comparison\":\"player 2 above enemy\",\"value\":\"80\"}","{\"comparison\":\"player 1 above enemy\",\"value\":\"90\"}","{\"comparison\":\"player 0 above enemy\",\"value\":\"100\"}","{\"comparison\":\"player 1 below enemy\",\"value\":\"110\"}","{\"comparison\":\"player 2 below enemy\",\"value\":\"120\"}","{\"comparison\":\"player 3 below enemy\",\"value\":\"130\"}","{\"comparison\":\"player 4 below enemy\",\"value\":\"140\"}","{\"comparison\":\"player 5 below enemy\",\"value\":\"150\"}","{\"comparison\":\"player 6 below enemy\",\"value\":\"160\"}","{\"comparison\":\"player 7 below enemy\",\"value\":\"170\"}","{\"comparison\":\"player 8 below enemy\",\"value\":\"180\"}","{\"comparison\":\"player 9 below enemy\",\"value\":\"190\"}","{\"comparison\":\"player 10 below enemy\",\"value\":\"200\"}"]
  @type struct<Scale>[]
  @parent enable_exp_scale

  @param enable_gold_scale
  @text Enable Gold Scaling
  @desc Choose whether gold scaling is enabled or disabled.( only applicable if gold scaling enabled! )
  @default true
  @type boolean

  @param gold_scale_type
  @text Gold Scale Type
  @desc How gold is scaled. see help for info on this parameter!
  @default 1
  @type select
  @option Party Average Level
  @value 1
  @option Highest Level
  @value 2
  @parent enable_gold_scale

  @param gold_scale
  @text Gold Scale
  @desc Scale gold based on the level difference between actors and enemies.( only applicable if exp scaling enabled! )
  @default ["{\"comparison\":\"player 10 above enemy\",\"value\":\"0\"}","{\"comparison\":\"player 9 above enemy\",\"value\":\"10\"}","{\"comparison\":\"player 8 above enemy\",\"value\":\"20\"}","{\"comparison\":\"player 7 above enemy\",\"value\":\"30\"}","{\"comparison\":\"player 6 above enemy\",\"value\":\"40\"}","{\"comparison\":\"player 5 above enemy\",\"value\":\"50\"}","{\"comparison\":\"player 4 above enemy\",\"value\":\"60\"}","{\"comparison\":\"player 3 above enemy\",\"value\":\"70\"}","{\"comparison\":\"player 2 above enemy\",\"value\":\"80\"}","{\"comparison\":\"player 1 above enemy\",\"value\":\"90\"}","{\"comparison\":\"player 0 above enemy\",\"value\":\"100\"}","{\"comparison\":\"player 1 below enemy\",\"value\":\"110\"}","{\"comparison\":\"player 2 below enemy\",\"value\":\"120\"}","{\"comparison\":\"player 3 below enemy\",\"value\":\"130\"}","{\"comparison\":\"player 4 below enemy\",\"value\":\"140\"}","{\"comparison\":\"player 5 below enemy\",\"value\":\"150\"}","{\"comparison\":\"player 6 below enemy\",\"value\":\"160\"}","{\"comparison\":\"player 7 below enemy\",\"value\":\"170\"}","{\"comparison\":\"player 8 below enemy\",\"value\":\"180\"}","{\"comparison\":\"player 9 below enemy\",\"value\":\"190\"}","{\"comparison\":\"player 10 below enemy\",\"value\":\"200\"}"]
  @type struct<Scale>[]
  @parent enable_gold_scale

  @param enable_item_table
  @text Enable Item Table
  @desc Should custom Item tables for enemies be enabled.
  @default false
  @type boolean

  @param drop_scale_type
  @text Item Scale Type
  @desc How item drop rate is scaled. see help for info on this parameter!
  @default 1
  @type select
  @option Party Average Level
  @value 1
  @option Highest Level
  @value 2
  @parent enable_item_table

  @param item_table
  @text Item Table
  @desc Setup dropped items for each enemy here.
  @default []
  @type struct<EnemyItemTable>[]
  @parent enable_item_table

  @param drop_scale
  @text Drop Scale
  @desc increase or decrease the drop rate based on enemy level.
  @default ["{\"comparison\":\"player 10 above enemy\",\"value\":\"0\"}","{\"comparison\":\"player 9 above enemy\",\"value\":\"10\"}","{\"comparison\":\"player 8 above enemy\",\"value\":\"20\"}","{\"comparison\":\"player 7 above enemy\",\"value\":\"30\"}","{\"comparison\":\"player 6 above enemy\",\"value\":\"40\"}","{\"comparison\":\"player 5 above enemy\",\"value\":\"50\"}","{\"comparison\":\"player 4 above enemy\",\"value\":\"60\"}","{\"comparison\":\"player 3 above enemy\",\"value\":\"70\"}","{\"comparison\":\"player 2 above enemy\",\"value\":\"80\"}","{\"comparison\":\"player 1 above enemy\",\"value\":\"90\"}","{\"comparison\":\"player 0 above enemy\",\"value\":\"100\"}","{\"comparison\":\"player 1 below enemy\",\"value\":\"110\"}","{\"comparison\":\"player 2 below enemy\",\"value\":\"120\"}","{\"comparison\":\"player 3 below enemy\",\"value\":\"130\"}","{\"comparison\":\"player 4 below enemy\",\"value\":\"140\"}","{\"comparison\":\"player 5 below enemy\",\"value\":\"150\"}","{\"comparison\":\"player 6 below enemy\",\"value\":\"160\"}","{\"comparison\":\"player 7 below enemy\",\"value\":\"170\"}","{\"comparison\":\"player 8 below enemy\",\"value\":\"180\"}","{\"comparison\":\"player 9 below enemy\",\"value\":\"190\"}","{\"comparison\":\"player 10 below enemy\",\"value\":\"200\"}"]
  @type struct<Scale>[]
  @parent enable_item_table

*/

/*~struct~EnemyLevels:

  @param enemy_id
  @text Enemy
  @desc The enemy in the database.
  @default
  @type enemy

  @param level
  @text Level
  @desc The level of the enemy.
  @default 1
  @type number
  @min 1
  @max 500

*/

/*~struct~Scale:

  @param comparison
  @text Level Gap
  @desc the gap in the actors level vs the enemy's level.
  @default player 0 above enemy
  @type combo
  @option player 10 above enemy
  @option player 9 above enemy
  @option player 8 above enemy
  @option player 7 above enemy
  @option player 6 above enemy
  @option player 5 above enemy
  @option player 4 above enemy
  @option player 3 above enemy
  @option player 2 above enemy
  @option player 1 above enemy
  @option player 0 above enemy
  @option player 1 below enemy
  @option player 2 below enemy
  @option player 3 below enemy
  @option player 4 below enemy
  @option player 5 below enemy
  @option player 6 below enemy
  @option player 7 below enemy
  @option player 8 below enemy
  @option player 9 below enemy
  @option player 10 below enemy

  @param value
  @text Scale Value
  @desc Specify a percentage that the reward, will be adjusted by.
  @default 100
  @type number
  @min 0
  @max 1000

*/

 /*~struct~EnemyItemTable:


  @param enemy_id
  @text Enemy
  @desc The Enemy that this table will belong to.
  @default 0
  @type enemy

  @param items
  @text Items
  @desc Specify the items that this enemy can drop.
  @default []
  @type struct<ItemData>[]
  @parent enemy_id


*/

 /*~struct~ItemData:


  @param item_type
  @text Item Type
  @desc What type of item should be dropped.
  @default item
  @type select
  @option Item
  @value 1
  @option Weapon
  @value 2
  @option Armor
  @value 3

  @param item
  @text Item
  @desc The item that will drop( only applicable if Item Type is "Item" ).
  @default 0
  @type item
  @parent item_type

  @param weapon
  @text Weapon
  @desc The item that will drop( only applicable if Item Type is "Weapon" ).
  @default 0
  @type weapon
  @parent item_type

  @param armor
  @text Armor
  @desc The item that will drop( only applicable if Item Type is "Armor" ).
  @default 0
  @type armor
  @parent item_type

  @param drop_rate
  @text Base Drop Rate
  @desc The chance of this item dropping( a percentage between 1~100 ).
  @default 100
  @type number
  @max 100
  @min 1

  @param conditions
  @text Conditions
  @desc The Conditions for which the item can drop.
  @default []
  @type struct<DropConditions>[]


*/

 /*~struct~DropConditions:

  @param condition_type
  @text Condition Type
  @desc The type of condition in order for the item to drop
  @default 0
  @type select
  @option none
  @value 0
  @option switch
  @value 1
  @option variable
  @value 2
  @option code
  @value 3

  @param switch_id
  @text Switch
  @desc If the value of the switch matches the Switch Value specified.
  @default 0
  @type switch
  @parent condition_type

  @param switch_value
  @text Switch Value
  @desc The value the switch above should be at for item to drop.
  @default true
  @type boolean
  @parent switch_id

  @param variable_id
  @text Variable
  @desc The variable that will trigger this item to drop.
  @default 0
  @type variable
  @parent condition_type

  @param variable_value
  @text Variable Value
  @desc The value the variable above should be at for item to drop.
  @default 0
  @type number
  @parent variable_id

  @param snippet
  @text Script Call
  @desc The code that will be evaluated.
  @default
  @type text
  @parent condition_type



*/

//============================================================================
var Imported = Imported || {};
Imported['SCALING REWARDS'] = true;
//============================================================================
var Chaucer = Chaucer || {};
Chaucer.scalingRewards = {};
//============================================================================

//=============================================================================
// Game_Party :
//=============================================================================

//-----------------------------------------------------------------------------
Game_Party.prototype.averageLevel = function ()
{ // return the average level of the party.
//-----------------------------------------------------------------------------

  var members = this.members();
  var length = members.length;
  var total = 0;

  for ( var i = 0; i < length; i++ ) {
    total += members[i].level;
  }

  return total / length;

};

//-----------------------------------------------------------------------------
Game_Party.prototype.highestLevel = function ()
{ // return the highest level in the party.
//-----------------------------------------------------------------------------

  var members = this.members();
  var length = members.length;
  var level = 1;

  for (var i = 0; i < length; i++) {
    level = Math.min( level, members[i].level );
  }

  return level;

};

//=============================================================================
// Game_Troop :
//=============================================================================

//-----------------------------------------------------------------------------
Game_Troop.getScaleValue = function ( scale, levelGap )
{ // Descriptions.
//-----------------------------------------------------------------------------

  var value = scale[levelGap];
  var safeCount = 0;

  while ( isNaN( value ) ) {

    if ( ++safeCount === 100 || levelGap === 0 ) {
      value = 100.0;
      if ( safeCount === 100 ) break;

    } else if ( levelGap > 0 ) {
      value = scale[--levelGap];

    } else if ( levelGap < 0 ) {
      value = scale[++levelGap];

    }

  }

  return value / 100;

};

//-----------------------------------------------------------------------------
Game_Troop.prototype.individualExpTotal = function ()
{ // return exp totals for each individual actor.
//-----------------------------------------------------------------------------

  var enemies = this.deadMembers();
  var party = $gameParty.allMembers();
  var expArray = [];

  for ( var i = 0, partyLength = party.length; i < partyLength; i++ ) {

    var actor = party[i]; // set actor.

    for (var j = 0, enemyLength = enemies.length; j < enemyLength; j++) {

      var enemy = enemies[j]; // set enemy.
      var exp = enemy.exp() * this.getExpScale( actor.level - enemy.level );
      expArray[i] = Math.round( ( expArray[i] || 0 ) + exp )

    }

  }

  return expArray;

};

//-----------------------------------------------------------------------------
Game_Troop.prototype.averageExpTotal = function ()
{ // return the exp total for the parties average level.
//-----------------------------------------------------------------------------

  var totalExp = 0;
  var enemies = this.deadMembers();
  var aLevel = $gameParty.averageLevel();

  for ( var i = 0, length = deadMembers.length; i < length; i++ ) {

    var eLevel = enemies[i].level;
    totalExp += deadMembers[i].exp() * this.getExpScale( aLevel - eLevel );

  }

  return Math.round( totalExp );

};

//-----------------------------------------------------------------------------
Game_Troop.prototype.highestExpTotal = function ()
{ // return exp total for the highest level party member.
//-----------------------------------------------------------------------------

  var totalExp = 0;
  var enemies = this.deadMembers();
  var hLevel = $gameParty.highestLevel();

  for ( var i = 0, length = enemies.length; i < length; i++ ) {

    var eLevel = enemies[i].level;
    totalExp += enemies[i].exp() * this.getExpScale( hLevel - eLevel );

  }

  return Math.round( totalExp );

};

//-----------------------------------------------------------------------------
Game_Troop.prototype.getExpScale = function ( levelGap )
{ // return the scale value based on the level difference.
//-----------------------------------------------------------------------------

  var key = levelGap >= 0 ? 'positiveScales' : 'negativeScales';
  var scale = Chaucer.scalingRewards[key].exp;

  return Game_Troop.getScaleValue( scale, levelGap );

};

//-----------------------------------------------------------------------------
Game_Troop.prototype.averageGoldTotal = function ()
{ // return the total gold for the average party level.
//-----------------------------------------------------------------------------

  var totalGold = 0;
  var enemies = this.deadMembers();
  var aLevel = $gameParty.averageLevel();

  for ( var i = 0, length = enemies.length; i < length; i++ ) {

    var eLevel = enemies[i].level;
    totalGold += enemies[i].gold() * this.getGoldScale( aLevel - eLevel );

  }

  return Math.round( totalGold * this.goldRate() );

};

//-----------------------------------------------------------------------------
Game_Troop.prototype.highestGoldTotal = function ()
{ // return gold total for highest actor in players party.
//-----------------------------------------------------------------------------

  var totalGold = 0;
  var enemies = this.deadMembers();
  var hLevel = $gameParty.highestLevel();

  for ( var i = 0, length = enemies.length; i < length; i++ ) {

    eLevel = enemies[i].level;
    totalGold += enemies[i].gold() * scthis.getGoldScale( hLevel - eLevel );

  }

  return Math.round( totalGold * this.goldRate() );

};

//-----------------------------------------------------------------------------
Game_Troop.prototype.getGoldScale = function ( levelGap )
{ // return the scale value for gold based on levels provided.
//-----------------------------------------------------------------------------

  var key = levelGap >= 0 ? 'positiveScales' : 'negativeScales';
  var scale = Chaucer.scalingRewards[key].gold;

  return Game_Troop.getScaleValue( scale, levelGap );

};

//=============================================================================
// Game_Enemy :
//=============================================================================


//=============================================================================
// DEFINE PROPERTIES :
//=============================================================================

Object.defineProperty( Game_Enemy.prototype, 'level', {

  get: function() {
    return this._level || 1;
  },

  configurable: true

} );

//=============================================================================

//-----------------------------------------------------------------------------
Game_Enemy.prototype.setupEnemyLevel = function ( enemyId )
{ // setup the enemy's level.
//-----------------------------------------------------------------------------

  var levelData = Chaucer.scalingRewards.params.enemy_levels;

  for ( var i = 0, length = levelData.length; i < length; i++ ) {

    if ( levelData[i].enemy_id === enemyId ) {

      this._level = levelData[i].level;
      break;

    }

  }

};

//-----------------------------------------------------------------------------
Game_Enemy.prototype.makeDropTableItems = function ( tableList )
{ // make drop table items.
//-----------------------------------------------------------------------------

  var items = [];
  var itemTable = this.getItemTable( tableList );

  if ( itemTable === null ) return null;
  for ( var i = 0, l = itemTable.length; i < l; i++ ) {

    if ( this.successFromTableEntry( itemTable[i] ) )
      items.push( this.tableItemObject( itemTable[i] ) );

  }

  return items;

};

//-----------------------------------------------------------------------------
Game_Enemy.prototype.getItemTable = function ( tableList )
{ // get the drop table for the current enemy.
//-----------------------------------------------------------------------------

  for ( var i = 0, l = tableList.length; i < l; i++ ) {

    if ( tableList[i].enemy_id === this.enemyId() ) return tableList[i].items;

  }

  return null; // No data was defined for this enemy.

};

//-----------------------------------------------------------------------------
Game_Enemy.prototype.successFromTableEntry = function ( itemData )
{ // get whether the item was successfully dropped from the enemy.
//-----------------------------------------------------------------------------

  var key = levelGap >= 0 ? 'positiveScales' : 'negativeScales';
  var scale = Chaucer.scalingRewards[key].drops;
  var { drop_rate } = itemData;
  var levelGap;
  var pLevel;
  var value;

  if ( !this.itemConditionsMet( itemData.conditions ) ) return false;

  if ( Chaucer.scalingRewards.params.drop_scale_type === 1 ) {
    pLevel = $gameParty.averageLevel(); // average level exp.

  } else if ( Chaucer.scalingRewards.params.drop_scale_type === 2 ) {
    pLevel = $gameParty.highestLevel(); // highest level exp.

  }

  value = Game_Troop.getScaleValue( scale, pLevel - this.level ) / 100 ;

  return Math.random() < ( ( drop_rate * value ) );
};

//-----------------------------------------------------------------------------
Game_Enemy.prototype.itemConditionsMet = function ( conditions )
{ // check if the conditions for the item are met.
//-----------------------------------------------------------------------------

  value = true;
  for ( var i = 0; i < conditions.length; i++ ) { // check all conditions!

    var c = conditions[i]; // current condition
    switch ( c.condition_type ) {
      case 1: // Switch :
        value = $gameSwitches.value( c.switch_id ) === c.switch_value;
        break;

      case 2: // Variable :
        value = $gameSwitches.value( c.variable_id ) === c.variable_value;
        break;

      case 3: // Eval :
        value = eval( c.snippet );
        break;

    }
    if ( !value ) break; // if value is false, quit checking, and return false.
  }

  return value;

};

//-----------------------------------------------------------------------------
Game_Enemy.prototype.tableItemObject = function ( itemData )
{ // get item object from table item entry.
//-----------------------------------------------------------------------------

    switch ( itemData.item_type )
    {

      case 1:
        return this.itemObject( itemData.item_type, itemData['item'] );

      case 2:
        return this.itemObject( itemData.item_type, itemData['weapon'] );

      case 3:
        return this.itemObject( itemData.item_type, itemData['armor'] );

    }

  return null;
};

( function ( $ ) { //IIFE

  $ = $ || {};

//Create plugin information.
//============================================================================
  var regexp, plugin;
  regexp = /Scaling Battle Rewards : Version - \d+\.\d+\.\d+/;
   var length = $plugins.length;
  for ( var i = 0; i < length; i++ ) {
    plugin = $plugins[i].description.match( regexp );
    if ( !plugin ) continue;
    plugin = plugin[0];
    $.alias = {};
    $.name = plugin.split(":")[0].trim();
    $.version = plugin.split("-")[1].trim();
    $.params = Parse( $plugins[i].parameters );
    break;
  };

  //--------------------------------------------------------------------------
  function Parse( object )
  { // parse all data in an object
  //--------------------------------------------------------------------------
    try {
      object = JSON.parse( object );
     } catch (e) {
      object = object;
     } finally {
      if ( Array.isArray( object ) ) {
        var l = object.length;
        for ( var i = 0; i < l; i++ ) { object[i] = Parse( object[i] ); };
      } else if ( typeof object === 'object' ) {
        for ( var key in object ) { object[key] = Parse( object[key] ); };
      }
     }
     return object;
  };
//============================================================================

//=============================================================================
// Custom :
//=============================================================================

  $.negativeScales = { exp: {}, gold: {}, drops: {} };
  $.positiveScales = { exp: {}, gold: {}, drops: {} };

  var l1 = $.params.exp_scale.length;
  var l2 = $.params.gold_scale.length;
  var l3 = $.params.drop_scale.length;

  for ( var i = 0; i < l1; i++ ) {

    var value = $.params.exp_scale[i].value;
    var string = $.params.exp_scale[i].comparison;

    var obj = { comparison: Number( string.split( ' ' )[1] ), value: value };
    if ( string.includes( 'below' ) ) {
      $.negativeScales.exp[-obj.comparison] = obj.value;
    } else if ( string.includes( 'above' ) ) {
      $.positiveScales.exp[obj.comparison] = obj.value;
    }
  }

  for ( var i = 0; i < l2; i++ ) {

    var value = $.params.gold_scale[i].value;
    var string = $.params.gold_scale[i].comparison;

    var obj = { comparison: Number( string.split( ' ' )[1] ), value: value };
    if ( string.includes( 'below' ) ) {
      $.negativeScales.gold[-obj.comparison] = obj.value;
    } else if ( string.includes( 'above' ) ) {
      $.positiveScales.gold[obj.comparison] = obj.value;
    }
  }

  for ( var i = 0; i < l3; i++ ) {

    var value = $.params.drop_scale[i].value;
    var string = $.params.drop_scale[i].comparison;

    var obj = { comparison: Number( string.split( ' ' )[1] ), value: value };
    if ( string.includes( 'below' ) ) {
      $.negativeScales.drops[-obj.comparison] = obj.value;
    } else if ( string.includes( 'above' ) ) {
      $.positiveScales.drops[obj.comparison] = obj.value;
    }
  }

//=============================================================================
// BattleManager :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.BM_p_gainExp = BattleManager.gainExp;
//-----------------------------------------------------------------------------
  BattleManager.gainExp = function ()
  { // Alias of gainExp
//-----------------------------------------------------------------------------

    if ( $.params.enable_exp_scale && $.params.exp_scale_type === 0 )
    { // individual exp values.

      var exp = this._rewards.exp;

      $gameParty.allMembers().forEach(function(actor, index ) {
          actor.gainExp( exp[index] || 0 );
      }, this );

    } else { // gain exp by default means.

      $.alias.BM_p_gainExp.call( this );

    }

  };

//=============================================================================
// Game_Troop :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.G_T_p_expTotal = Game_Troop.prototype.expTotal;
//-----------------------------------------------------------------------------
  Game_Troop.prototype.expTotal = function ()
  { // Alias of expTotal
//-----------------------------------------------------------------------------

    if ( $.params.enable_exp_scale ) {

      if ( $.params.exp_scale_type === 0 ) { // individual exp.
        return this.individualExpTotal();

      } else if ( $.params.exp_scale_type === 1 ) { // average level exp.
        return this.averageExpTotal();

      } else if ( $.params.exp_scale_type === 2 ) { // highest level exp.
        return this.highestExpTotal();

      }
    }

    return $.alias.G_T_p_expTotal.call( this ); // default

  };

//-----------------------------------------------------------------------------
  $.alias.GT_p_goldTotal = Game_Troop.prototype.goldTotal;
//-----------------------------------------------------------------------------
  Game_Troop.prototype.goldTotal = function ()
  { // Alias of goldTotal
//-----------------------------------------------------------------------------

    if ( $.params.enable_gold_scale ) {

      if ( $.params.gold_scale_type === 1 ) { // average gold.
        return this.averageGoldTotal();

      } else if ( $.params.gold_scale_type === 2 ) { // highest gold.
        return this.highestGoldTotal();

      }
    }

    return $.alias.GT_p_goldTotal.call( this ); // defualt.

  };

//=============================================================================
// Game_Actor :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.GA_p_expForLevel = Game_Actor.prototype.expForLevel;
//-----------------------------------------------------------------------------
  Game_Actor.prototype.expForLevel = function ( level )
  { // Alias of expForLevel
//-----------------------------------------------------------------------------

    if ( $.params.use_static ) {
      return ( level - 1 ) * $.params.to_next_level; // using static exp tnl.

    } else {
      return $.alias.GA_p_expForLevel.call( this ); // default exp curve.

    }

  };

//=============================================================================
// Game_Enemy :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.GE_p_setup = Game_Enemy.prototype.setup;
//-----------------------------------------------------------------------------
  Game_Enemy.prototype.setup = function ( enemyId, x, y )
  { // Alias of setup
//-----------------------------------------------------------------------------

    $.alias.GE_p_setup.call( this, enemyId, x, y );
    this.setupEnemyLevel( enemyId );

  };

//-----------------------------------------------------------------------------
  $.alias.GE_p_makeDropItems = Game_Enemy.prototype.makeDropItems;
//-----------------------------------------------------------------------------
  Game_Enemy.prototype.makeDropItems = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    var params = Chaucer.scalingRewards.params

    if ( params.enable_item_table ) {

      var items = this.makeDropTableItems( params.item_table );
      if ( items !== null ) return items;

    }

    return $.alias.GE_p_makeDropItems.call( this );

  };

//=============================================================================
} )( Chaucer.scalingRewards );
//=============================================================================
