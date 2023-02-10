//=============================================================================
// JieFeng Plugins - Elemental Skill Colors
// JF_ElementalSkillColors.js
//=============================================================================
/*:
 * @plugindesc (v0.8) Sets the color of text of Skills or Items that do elemental
 * damage based off of the element they use.
 * @author JieFeng (qq mail:472740691)
 * 
 * @param ---Affect Toggles---
 * @desc
 * @default
 *
 * @param Affect Skills?
 * @parent ---Affect Toggles---
 * @type boolean
 * @desc Set to 'yes' or 'no' depending on whether you
 * want to globally affect the colortext of Skills.
 * @default true
 * 
 * @param Affect Items?
 * @parent ---Affect Toggles---
 * @type boolean
 * @desc Set to 'yes' or 'no' depending on whether you
 * want to globally affect the colortext of Items.
 * @default true
 * 
 * @param ---Element IDs---
 * @desc
 * @default
 *
 * @param Element ID 0
 * @parent ---Element IDs---
 * @desc Damage Element ID 0 is actually named "none" element,
 * but you can still choose it as one type of damage.
 * @default 15, o0w4
 *
 * @param Element ID 1
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 1.
 * @default 0
 *
 * @param Element ID 2
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 2.
 * @default 2
 *
 * @param Element ID 3
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 3.
 * @default 4
 *
 * @param Element ID 4
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 4.
 * @default 17
 *
 * @param Element ID 5
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 5.
 * @default 1
 *
 * @param Element ID 6
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 6.
 * @default 20
 *
 * @param Element ID 7
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 7.
 * @default 3
 *
 * @param Element ID 8
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 8.
 * @default 6
 *
 * @param Element ID 9
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 9.
 * @default 30
 *
 * @param Element ID 10
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 10.
 * @default 27
 *
 * @param Element ID 11
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 11.
 * @default 0
 *
 * @param Element ID 12
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 12.
 * @default 0
 *
 * @param Element ID 13
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 13.
 * @default 0
 *
 * @param Element ID 14
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 14.
 * @default 0
 *
 * @param Element ID 15
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 15.
 * @default 0
 *
 * @param Element ID 16
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 16.
 * @default 0
 *
 * @param Element ID 17
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 17.
 * @default 0
 *
 * @param Element ID 18
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 18.
 * @default 0
 *
 * @param Element ID 19
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 19.
 * @default 0
 *
 * @param Element ID 20
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 20.
 * @default 0
 *
 * @param Element ID 21
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 21.
 * @default 0
 *
 * @param Element ID 22
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 22.
 * @default 0
 *
 * @param Element ID 23
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 23.
 * @default 0
 *
 * @param Element ID 24
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 24.
 * @default 0
 *
 * @param Element ID 25
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 25.
 * @default 0
 *
 * @param Element ID 26
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 26.
 * @default 0
 *
 * @param Element ID 27
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 27.
 * @default 0
 *
 * @param Element ID 28
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 28.
 * @default 0
 *
 * @param Element ID 29
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 29.
 * @default 0
 *
 * @param Element ID 30
 * @parent ---Element IDs---
 * @desc Sets the color for Skills/Items with damage Element ID of 30.
 * @default 0
 *
 * @help
 *
 * Elemental Skill Colors
 * v0.8.0 by JieFeng
 *  如果看不懂英文导致不会用这插件，直接联系我询问即可（QQ472740691）。
 *  Inspired from SumRndmDde(Robert Borghese)'s original "ElementTextColors".
 * =========================================================================
 * Important TIPS and changes:
 * =========================================================================
 * 1. You MUST use this plugin together with TSR_TextColorAddOn.js!
 *    https://the-northern-frog.itch.io/tsr-textcoloraddonjs
 * 2. Recommond plugin list :
 *    YEP_CoreEngine.js (NOT necessary)
 *    TSR_TextColorAddOn.js (NEEDED!)
 *    (|related, but not necessary|)
 *    YEP_BattleEngineCore.js 
 *    YEP_VictoryAftermath.js
 *    YEP_X_AftermathLevelUp.js
 *    YEP_InstantCast.js
 *    YEP_SkillLearnSystem.js
 *    YEP_WeaponUnleash.js
 *    YEP_StatusMenuCore.js.
 *    FTKR_SkillTreeSystem.js
 *    GT_ObjectInfoWindow.js
 *    (|related, but not necessary|)
 *    JF_ElementalSkillColors.js (<<-this plugin)
 * 3. NormalAttack related element(ID=-1) change with battler's attackElement.
 * 4. Battlelog(YEP_BattleEngineCore) of the skillname display is available.
 * 5. Battlelog from basic MV display is available.
 * 6. Now you can change the color of none element damage(ID=0).
 * 7. Battle result of levelup gained skills and reward items can change color!
 * 8. Now you can use the special color type provided by TSR_TextColorAddOn,
 *   such as 15,o0w4 to represent \C[15,o0w4].
 * X. Waiting for more adjustment, any good idea?
 *
 * 【About ID=-1】Usually regarded as NormalAttack related element, 
 * sometimes it's color can not be decided, for example when the damage item 
 * is listed in the map menu, or when the NormalAttack element provided 
 * by the battler is not even defined. For the latter, the MVgame itself
 * sets the result damage element to none element(ID=0).
 * Hence in this plugin the color of ID=-1 is set to the same as ID=0,
 * only when the NormalAttack element is not decided.
 *
 * 【Known issues】Drill's plugins that change the UI of most windows 
 *  may disable JF_ElementalSkillColors.js.
 *  YEP_ElementCore.js may change the element definition of skill/item,
 *  while the compatibility with our plugin hasn't been fully tested 
 *  and might shows wrong textcolor.
 * ============================================================================
 * Notetags
 * ============================================================================
 * Skill and Item Notetags
 *
 *   <color on>
 *   <color off>
 *   - Allows this skill/item to ignore globally elemental setting 
 *   and open/close color showing. 
 *
 * =========================================================================
 * Window.png
 * =========================================================================
 * For this plugin, you set the color for the text by inputing the color 
 * number from your "Window.png" file from the System folder. By default
 * the colors are:
 *
 * 0 = White
 * 1 = Light Blue
 * 2 = Light Red
 * 3 = Light Green
 * 4 = Blue-ish White
 * 5 = Light Gray
 * 6 = Light Yello
 * 7 = Gray
 * 8 = Slightly-light Gray
 * 9 = Blue
 * 10 = Red
 * 11 = Green
 * 12 = Lighter Blue
 * 13 = Lighter Gray
 * 14 = Yellow
 * 15 = Black
 * 16 = Foggy Blue
 * 17 = Slightly-light Yellow
 * 18 = Dark Red
 * 19 = Dark Blue
 * 20 = Brown-ish Orange
 * 21 = Orange-ish Yellow
 * 22 = Baby Blue
 * 23 = Sky Blue
 * 24 = Teal Green
 * 25 = Black-ish Pink
 * 26 = Cloudy Blue
 * 27 = Pink
 * 28 = Forest Green
 * 29 = Sea Green
 * 30 = Purple
 * 31 = Light Purple
 *
 * ----Terms of Use----
 * Copyright (c) 2022 JieFeng
 * This plugin is licensed under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 *
 * This plugin is free for both commercial and non-commercial use.
 * You may edit the source code to suit your needs,
 * so long as you don't claim the source code belongs to you.
 */

var Imported = Imported || {};
Imported.JF_ElementalSkillColors = true;
var JF = JF || {};
JF.ESC = JF.ESC || {};
JF.ESC.version = 0.72;

JF.ESC.parameters = PluginManager.parameters('JF_ElementalSkillColors');

JF.ESC.AffectSkills = String(JF.ESC.parameters['Affect Skills?']);
JF.ESC.AffectSkills = eval(JF.ESC.AffectSkills);
JF.ESC.AffectItems = String(JF.ESC.parameters['Affect Items?']);
JF.ESC.AffectItems = eval(JF.ESC.AffectItems);
JF.ESC.element_id_length = 30;
JF.ESC.element_id = {};
JF.ESC.nonelement_id = String(JF.ESC.parameters['Element ID 0']);
for (var i = 1; i <= JF.ESC.element_id_length ; i++) {
    JF.ESC.element_id[i] = String(JF.ESC.parameters['Element ID ' + String(i)]);
};

if (Imported.TSR_TextColorAddOn) {
    JF.ESC.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
    DataManager.isDatabaseLoaded = function () {
        if (!JF.ESC.DataManager_isDatabaseLoaded.call(this)) return false;
        if (!JF._loaded_ESC) {
            DataManager.processESCNotetags1($dataSkills);
            DataManager.processESCNotetags1($dataItems);
            JF._loaded_ESC = true;
        }
        return true;
    };
    DataManager.processESCNotetags1 = function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);
            obj.colorON = 0;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:color on|color ON)>/i)) {
                    obj.colorON = 1;
                } else if (line.match(/<(?:color off|color OFF)>/i)) {
                    obj.colorON = -1;
                }
            }
        }
    };

    JF.ESC.Window_BattleLog_displayAction =function (subject, item) {
        var numMethods = this._methods.length;
        if (DataManager.isSkill(item)) {
            if (item.damage.type == 1 || item.damage.type == 5){
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = !BattleManager._subject.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[BattleManager._subject.attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }
                if (item.message1) {
                    this.push('addText', subject.name() + item.message1.format('\\c[' + item.col + ']' + item.name + '\\c[0]'));
                }
                if (item.message2) {
                    this.push('addText', item.message2.format('\\c[' + item.col + ']' + item.name + '\\c[0]'));
                }
            } else {
                if (item.message1) {
                    this.push('addText', subject.name() + item.message1.format(item.name));
                }
                if (item.message2) {
                    this.push('addText', item.message2.format(item.name));
                }
            }
        } else {
            if (item.damage.type == 1 || item.damage.type == 5) {
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = !BattleManager._subject.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[BattleManager._subject.attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }
                this.push('addText', TextManager.useItem.format(subject.name(), '\\c[' + item.col + ']' + item.name + '\\c[0]'));
            } else this.push('addText', TextManager.useItem.format(subject.name(), item.name));
        }
        if (this._methods.length === numMethods) {
            this.push('wait');
        }
    }
    if (Imported.YEP_BattleEngineCore) {
        Window_BattleLog.prototype.displayText = function (item) {
            if (!item) return '';
            if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1 ) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = !BattleManager._subject.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[BattleManager._subject.attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }   return '\\c[' + item.col + ']' + item.battleDisplayText + '\\c[0]';
            } else return item.battleDisplayText;
        }
        Window_BattleLog.prototype.displayAction = function (subject, item) {
            if (Yanfly.Param.BECFullActText) {
                JF.ESC.Window_BattleLog_displayAction.call(this, subject, item);
            } else {
                this._actionIcon = this.displayIcon(item);
                var text = this.displayText(item);
                this.push('addText', '<SIMPLE>' + text);
                if (item.message2) {
                    this.push('addText', '<CENTER>' + item.message2.format(text));
                }
            }
        };
    }else  {
        Window_BattleLog.prototype.displayAction = JF.ESC.Window_BattleLog_displayAction;
    };
    Window_SkillList.prototype.drawItemName = function (item, x, y, width) {
        width = width || 312;
        if (item) {
            var iconBoxWidth = Window_Base._iconWidth + 4;
            this.resetTextColor();
            this.drawIcon(item.iconIndex, x + 2, y + 2);
            if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1 ) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = !this._actor.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[this._actor.attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }
                this.drawText('\\c[' + item.col + ']' + item.name + '\\c[0]', x + iconBoxWidth, y, width - iconBoxWidth);
            } else this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
        }
        if (Imported.YEP_InstantCast) {
            width = width || 312;
        this.drawInstantIcon(item, x, y, width);}
    };
    Window_ItemList.prototype.drawItemName = function (item, x, y, width) {
        width = width || 312;
        if (item) {
            var iconBoxWidth = Window_Base._iconWidth + 4;
            this.resetTextColor();
            this.drawIcon(item.iconIndex, x + 2, y + 2);
            if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1 ) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = (!$gameParty.inBattle() || !BattleManager.actor().attackElements().length) ? JF.ESC.nonelement_id : JF.ESC.element_id[BattleManager.actor().attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }     
                this.drawText('\\c[' + item.col + ']' + item.name + '\\c[0]', x + iconBoxWidth, y, width - iconBoxWidth);
            } else this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
        }
        if (Imported.YEP_InstantCast) {
            width = width || 312;
            this.drawInstantIcon(item, x, y, width);
        }
    };
    Window_ShopBuy.prototype.drawItemName = Window_ItemList.prototype.drawItemName;
    Window_ShopNumber.prototype.drawItemName = Window_ItemList.prototype.drawItemName;
    Window_ShopStatus.prototype.drawItemName = Window_ItemList.prototype.drawItemName;

    if (Imported.GT_ObjectInfoWindow) {
        Window_ObjectInfo.prototype.drawItemName = function () {
            var item = this._item;
            if (Imported.Drill_ItemTextColor) {
                this._drill_ITC_isDrawingItemName = true;
                this._drill_ITC_curItem = item;
            }
            if (Imported.Drill_ItemTextFilter) {
                this._drill_ITFi_isDrawingItemName = true;
                this._drill_ITFi_curItem = item;
            }
            var x = this.textPadding();
            var y = 0;
            var width = 312;
            if (item) {
                var iconBoxWidth = this.drawItemIcon(x, y);
                this.resetTextColor();
                this.contents.fontSize *= 1.3;
                if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                    item.col = 0;
                    if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                        (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                        item.colorON == 1 ) {
                        switch (item.damage.elementId) {
                            case -1:
                                if (DataManager.isItem(item)) {
                                    item.col = JF.ESC.nonelement_id;
                                } else {
                        item.col = !this._actor.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[this._actor.attackElements()[length]];
                                }
                                break;
                            case 0:
                                item.col = JF.ESC.nonelement_id;
                                break;
                            default:
                                item.col = JF.ESC.element_id[item.damage.elementId];
                                break;
                        }
                    }
                    this.drawText('\\c[' + item.col + ']' + item.name + '\\c[0]', iconBoxWidth, y + this.textPadding(), width - iconBoxWidth);
                } else this.drawText(item.name, iconBoxWidth, y + this.textPadding(), width - iconBoxWidth);

                this.resetFontSettings();
            }
            if (Imported.Drill_ItemTextColor)
                this._drill_ITC_isDrawingItemName = false;
            if (Imported.Drill_ItemTextFilter)
                this._drill_ITFi_isDrawingItemName = false;
            if (this.getItemColor() && !this.isSeniorColor(this.getItemColor())) return;
            if (!eval(this._windowSet.WindowOutline))
                this.drawHorzLine(this.titleHeight());
        }
    };
    if (Imported.YEP_WeaponUnleash) {
        JF.ESC.Window_ActorCommand_addAttackCommand =
            Window_ActorCommand.prototype.addAttackCommand;
        Window_ActorCommand.prototype.addAttackCommand = function () {
            JF.ESC.Window_ActorCommand_addAttackCommand.call(this);
            var index = this.findSymbol('attack');
            if (index < 0) return;
            var id = $dataSkills[this._actor.attackSkillId()].iconIndex;
            var name = $dataSkills[this._actor.attackSkillId()].commandAttackText;
            var item = $dataSkills[this._actor.attackSkillId()];
            if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1 ) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = !this._actor.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[this._actor.attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }
                this._list[index].name = '\\i[' + id + '] ' + '\\c[' + item.col + ']' + name+'\\c[0]';
            } else this._list[index].name = '\\i[' + id + '] ' + name;
        }
    };
    if (Imported.YEP_SkillLearnSystem) {
        Window_SkillLearnData.prototype.drawItemName = Window_SkillList.prototype.drawItemName;
    }
    if (Imported.YEP_X_AftermathLevelUp) {
        Window_VictorySkills.prototype.drawItemName = Window_SkillList.prototype.drawItemName;
    } else {
        Game_Actor.prototype.displayLevelUp = function (newSkills) {
            var text = TextManager.levelUp.format(this._name, TextManager.level, this._level);
            $gameMessage.newPage();
            $gameMessage.add(text);
            newSkills.forEach(function (skill) {
                var item = skill;
                if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                    item.col = 0;
                    if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                        (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                        item.colorON == 1 ) {
                        switch (item.damage.elementId) {
                            case -1:
                                console.log(BattleManager);
                                item.col = JF.ESC.nonelement_id;//sorry that i donnot know how change it.
                                break;
                            case 0:
                                item.col = JF.ESC.nonelement_id;
                                break;
                            default:
                                item.col = JF.ESC.element_id[item.damage.elementId];
                                break;
                        }
                    }           
                    $gameMessage.add(TextManager.obtainSkill.format('\\c[' + item.col + ']' + skill.name + '\\c[0]'));
                } else $gameMessage.add(TextManager.obtainSkill.format(skill.name));
            });
        };
        BattleManager.displayDropItems = function () {
            var items = this._rewards.items;
            if (items.length > 0) {
                $gameMessage.newPage();
                items.forEach(function (item) {
                    if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                        item.col = 0;
                        if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                            (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                            item.colorON == 1 ) {
                            switch (item.damage.elementId) {
                                case -1:
                                    item.col = JF.ESC.nonelement_id;//sorry that i donnot know how to change it.
                                    break;
                                case 0:
                                    item.col = JF.ESC.nonelement_id;
                                    break;
                                default:
                                    item.col = JF.ESC.element_id[item.damage.elementId];
                                    break;
                            }
                        } 
                        $gameMessage.add(TextManager.obtainItem.format('\\c[' + item.col + ']' + item.name + '\\c[0]'));
                    } else $gameMessage.add(TextManager.obtainItem.format(item.name));
                });
            }
        };
    };
    if (Imported.FTKR_STS) {
        Window_SkillTree.prototype.drawSkillText = function (skill, x, y, width, color, sts) {
            var stx = sts.offsetX;
            this.changeTextColor(this.textColor(color));
            var item = skill;
            if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = !this._actor.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[this._actor.attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }
                this.drawFormatTextEx(sts.format, x + stx, y + sts.offsetY, ['\\c[' + item.col + ']' + this.ftItemName(skill) + '\\c[0]']);
            } else  this.drawFormatTextEx(sts.format, x + stx, y + sts.offsetY, [this.ftItemName(skill)]);
        };
        Window_Base.prototype.drawStsDescTitle = function (format, x, y, width, skill) {
            var name = skill ? skill.name : '';
            var item = skill;
            if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                item.col = 0;
                if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                    (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                    item.colorON == 1) {
                    switch (item.damage.elementId) {
                        case -1:
                            item.col = !this._actor.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[this._actor.attackElements()[length]];
                            break;
                        case 0:
                            item.col = JF.ESC.nonelement_id;
                            break;
                        default:
                            item.col = JF.ESC.element_id[item.damage.elementId];
                            break;
                    }
                }
                var params = [this._actor._name, '\\c[' + item.col + ']' + name+ '\\c[16]'];
            } else   var params = [this._actor._name, name];
            this.drawFormatTextEx(format, x, y, params, width);
        };
        Window_StsPreskill.prototype.drawPreSkills = function (x, y, width) {
            if (this._skillId && this._tTypeId) {
                var actor = this._actor;
                var lh = this.lineHeight();
                var preskillIds = actor.getPreskillId(this._skillId, this._tTypeId);
                for (var i = 0; i < preskillIds.length; i++) {
                    var preskill = actor.stsSkill(preskillIds[i]);
                    if (preskill) {
                        this.changePaintOpacity(actor.isStsLearnedSkill(preskill.id));
                        var item = preskill;
                        if ((DataManager.isSkill(item) || DataManager.isItem(item)) && (item.damage.type == 1 || item.damage.type == 5)) {
                            item.col = 0;
                            if ((JF.ESC.AffectSkills && item.colorON == 0 && DataManager.isSkill(item)) ||
                                (JF.ESC.AffectItems && item.colorON == 0 && DataManager.isItem(item)) ||
                                item.colorON == 1) {
                                switch (item.damage.elementId) {
                                    case -1:
                                        item.col = !this._actor.attackElements().length ? JF.ESC.nonelement_id : JF.ESC.element_id[this._actor.attackElements()[length]];
                                        break;
                                    case 0:
                                        item.col = JF.ESC.nonelement_id;
                                        break;
                                    default:
                                        item.col = JF.ESC.element_id[item.damage.elementId];
                                        break;
                                }
                            }
                            this.drawFormatTextEx(FTKR.STS.preskill.itemFormat, x, y + lh * i, ['\\c[' + item.col + ']' + preskill.name + '\\c[0]'], width);
                        } else     this.drawFormatTextEx(FTKR.STS.preskill.itemFormat, x, y + lh * i, [preskill.name], width);
                        this.changePaintOpacity(1);
                    }
                }
            }
        };
    }
} else {
    Imported.JF_ElementalSkillColors = false;
    alert(
        "[JF_ElementalSkillColors.js] requires another plugin！ Please check whether this plugin has been added/turned on/placed above JF_ElementalSkillColors.js:" +
        "\n- TSR_TextColorAddOn.js (TOP)"
    );
};