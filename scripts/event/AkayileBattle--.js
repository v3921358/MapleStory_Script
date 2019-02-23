function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("akayile" + leaderid);

    eim.setProperty("summoned", "0");

    var map = eim.setInstanceMap(272020200);
    map.resetFully();

    var mob = em.getMonster(8860001);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point( - 171, - 181));

    eim.startEventTimer(14400000); // 4 hrs
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    if (eim.disposeIfPlayerBelow(100, 272020110)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function changedMap(eim, player, mapid) {
    if (mapid != 272020110) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 272020110);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    var prop = eim.getProperty("summoned");

    if (prop.equals("0")) {
        eim.broadcastPlayerMsg(5, "Free me from Kamuna says Dunas!");

        eim.setProperty("summoned", "1");
        var map = eim.getMapInstance(0);
        var mob = em.getMonster(8860001);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(15, - 181));
    } else {
        var map = eim.getMapInstance(0);
        map.spawnNpc(2144016, new java.awt.Point(0, - 181));
    }
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}