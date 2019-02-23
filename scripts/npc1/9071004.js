var maps = Array(952000000, 952010000, 952020000, 952030000, 952040000);
var mapNames = Array("ʯ����Ժ", "�϶��㳡", "ħŮѩԭ", "�ž�֮��", "�ڰ����");
var minLevel = Array(20, 45, 50, 55, 60);
var maxLevel = Array(30, 55, 60, 65, 70);

function start() {
    var selStr = "��������ĸ��ط���\r\n#r��13������70�����µ���ҿ���ʹ��)\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + "��" + minLevel[i] + "~" + maxLevel[i] + "��#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("����Ҫ����ĵ����������Ϸ���򡣿���ͨ��#b�ӳ�#k�볡��");
        } else {
            var party = cm.getParty().getMembers().iterator();
            var next = true;
            while (party.hasNext()) {
                var cPlayer = party.next();
                if (cPlayer.getLevel() < minLevel[selection] || cPlayer.getLevel() > maxLevel[selection] || cPlayer.getMapid() != cm.getMapId()) {
                    next = false;
                }
            }
            if (!next) {
                cm.sendOk("��ȷ������Ա���ڸõ�ͼ,���Ҷ��ڵȼ���Χ��.");
            } else {
                var em = cm.getEventManager("MonsterPark");
                if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                    cm.playerMessage("MonsterPark em " + em);
                    cm.sendOk("���﹫԰�����Ѿ�������.");
                } else {
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}