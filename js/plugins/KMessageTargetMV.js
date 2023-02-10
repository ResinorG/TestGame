//===========================================
// * KMessageTargetMV.js - Full Version
//===========================================
/*:
 * @plugindesc This plugin will let you add the enemy's name to a skill's
 * action message by using a tag or wildcard.
 * @author Kyonides Arkanthes
 * @help Date: 2023-01-30
 * # * Free as in beer. * #
 *
 * The regular expressions or regex are
 *   %a for an Actor or Ally
 *   %e for an Enemy
 *
 * Note Tag: _party item_
 * It allows your hero uses an item on all of his or her allies while preventing
 * the Battle Log from repeating itself over and over again.
 *
 * You can customize the KMessageTarget.party_as_target string if necessary.
*/

function KMessageTarget() {
  throw new Error('This is a static class');
}

KMessageTarget.item_list = [1, 6];
KMessageTarget.actor_regex = /%a/i;
KMessageTarget.enemy_regex = /%e/i;
KMessageTarget.no_target_item = / on %a/i;
KMessageTarget.party_item = /_party item_/i;
KMessageTarget.party_as_target = "the party";

Window_BattleLog.prototype.displaySkillTargets = function(s_name, item, targets) {
  let target = 0;
  let msg = "";
  for (var i = 0; i < targets.length; i++) {
    target = targets[i];
    if (item.message1) {
      msg = s_name + item.message1.format(item.name);
      msg = msg.replace(KMessageTarget.actor_regex, target.name());
      msg = msg.replace(KMessageTarget.enemy_regex, target.name());
      this.push('addText', msg);
    }
    if (item.message2) {
      this.push('addText', item.message2.format(item.name));
    }
  }
}

Window_BattleLog.prototype.processNames = function(s_name, item, t_name) {
  let msg = TextManager.useItem.format(s_name, item.name);
  if (!KMessageTarget.item_list.includes(item.id)) {
    msg = msg.replace(KMessageTarget.no_target_item, "");
  }
  msg = msg.replace(KMessageTarget.actor_regex, t_name);
  this.push('addText', msg);
}

Window_BattleLog.prototype.displayItemTargets = function(s_name, item, targets) {
  if ( KMessageTarget.party_item.exec(item.note) ) {
    this.processNames(s_name, item, KMessageTarget.party_as_target);
    return;
  }
  let target = 0;
  for (var i = 0; i < targets.length; i++) {
    target = targets[i];
    this.processNames(s_name, item, target.name());
  }
}

Window_BattleLog.prototype.displayAction = function(subject, item, targets) {
  let numMethods = this._methods.length;
  if (DataManager.isSkill(item)) {
    this.displaySkillTargets(subject.name(), item, targets);
  } else {
    this.displayItemTargets(subject.name(), item, targets);
  }
  if (this._methods.length === numMethods) {
    this.push('wait');
  }
};

Window_BattleLog.prototype.startAction = function(subject, action, targets) {
  let item = action.item();
  this.push('performActionStart', subject, action);
  this.push('waitForMovement');
  this.push('performAction', subject, action);
  this.push('showAnimation', subject, targets.clone(), item.animationId);
  this.displayAction(subject, item, targets);
};