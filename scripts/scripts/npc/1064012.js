var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#r#e<³����˹����ͥԺ�������>#n\r\n#kͨ��³����˹����ͥԺ������ڵĵ�·ѡ��.\r\n#b#L1#ʹ��#v4033611#����Կ�ף��ƶ�����ͨģʽ��(100������)\r\n#L2#ʹ��#v4033611#����Կ�ף��ƶ�������ģʽ��(140������)\r\n#L3#��ù���Կ��#v4033611#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
if(cm.haveItem(4033611,100) && cm.getPlayer().getLevel() > 150)
		    {
		    cm.gainItem(4033611,-1);
		    cm.warp(105200200);
		    }else{
			cm.sendOk("��ȷ����ĵȼ��Ƿ�ﵽ���ϵ�Ҫ��\r\n��ȷ���㱳���Ƿ���100��#v4033611#����Կ�ס�\r\n����Կ�׿����ٱ�ͼ�Ϸ� �¿˴�����");
                    cm.dispose();
			}
            break;
        case 3:
		cm.sendOk("�����Ϸ���Կ�����˻�ã�");
                    cm.dispose();
            break;
        case 2:
		    if(cm.haveItem(4033611,1) && cm.getPlayer().getLevel() > 140)
		    {
		    cm.gainItem(4033611,-1);
		    cm.warp(105200600);
		    }else{
			cm.sendOk("��ȷ����ĵȼ��Ƿ�ﵽ���ϵ�Ҫ��\r\n��ȷ���㱳���Ƿ���#v4033611#����Կ�ס�");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}