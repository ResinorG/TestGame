/*:
@plugindesc This makes it so that when a random encounter would start, a CommonEvent
of your choice executes instead. Only works when a switch of your choice is set to On.

@author CG-Tespy – https://github.com/CG-Tespy

@help This is version 1.01.01 of this plugin. Tested with RMMV versions 1.5.1 and 1.6.2.
Please make sure to credit me (and any of this plugin's contributing coders)
if you're using this plugin in your game (include the names and webpage links).

@param CommonEvent
@type common_event

@param Switch
@type switch
*/

/*:es
@plugindesc Esto lo hace que cuando un encuentro aleatorio empezaría, un Evento Común se 
desempeña en lugar de eso.

@author CG-Tespy – https://github.com/CG-Tespy

@help Este es la versión 1.01.01 de este plugin. Lo probé con versiones RMMV 1.5.1 
y 1.6.2. Solo funciona cuando un interruptor de tu elección esta 
puso a On.

Por favor acredita a mí y los otros programadores colaboradores de este plugin 
si lo usas en tu juego. Incluye los nombres y (si disponible) los 
enlaces de web.

@param CommonEvent
@text EventoComún
@type common_event

@param Switch
@text Interruptor
@type switch
*/

(function()
{
    EnsureNamespaceIsThere();

    function EnsureNamespaceIsThere()
    {
        var itIsThere = window["CGT"] != null;

        if (!itIsThere)
            window.CGT = {};
        
        window.CGT.RaEnToCe = 
        {
            Params: {
                commonEventId: null,
                switchId: null,
            },
        };
    }

    var params = SetUpParams();

    function SetUpParams()
    {
        var pluginName = "CGT_RandomEncounterToCommonEvent_MV";
        var raws = PluginManager.parameters(pluginName);

        var paramNames = 
        {
            CommonEvent: "CommonEvent",
            Switch: "Switch",
        };

        var params = window.CGT.RaEnToCe.Params;
        var commonEventId = Number(raws[paramNames.CommonEvent]);

        params.commonEventId = commonEventId;

        var switchId = Number(raws[paramNames.Switch]);
        params.switchId = switchId;

        return params;
    }

    ApplyExecuteEncounterAlias();

    function ApplyExecuteEncounterAlias()
    {
        var oldExecuteEncounter = Game_Player.prototype.executeEncounter;

        function NewExecuteEncounter()
        {
            if (!ThisPluginIsActive())
                return oldExecuteEncounter.call(this);

            if (!$gameMap.isEventRunning() && this._encounterCount <= 0) {
                this.makeEncounterCount();
                var troopId = this.makeEncounterTroopId();
                if ($dataTroops[troopId]) {
                    //BattleManager.setup(troopId, true, false);
                    //BattleManager.onEncounter();
                    // ^Commenting these out since we don't want to make the BattleManager
                    // do anything in response to regular random encounters
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

        Game_Player.prototype.executeEncounter = NewExecuteEncounter;
    }

    function ThisPluginIsActive()
    {
        return $gameSwitches.value(params.switchId);
    }

    ApplyUpdateEncounterAlias();

    function ApplyUpdateEncounterAlias()
    {
        var oldUpdateEncounter = Scene_Map.prototype.updateEncounter;

        function NewUpdateEncounter()
        {
            if (!ThisPluginIsActive())
                return oldUpdateEncounter.call(this);

            if ($gamePlayer.executeEncounter()) {
                TriggerCommonEvent.call(this); // <- Instead of pushing the Scene_Battle scene
            }
        }

        function TriggerCommonEvent()
        {
            var commonEventId = params.commonEventId;
            $gameTemp.reserveCommonEvent(commonEventId);
        }

        Scene_Map.prototype.updateEncounter = NewUpdateEncounter;
    }
})();