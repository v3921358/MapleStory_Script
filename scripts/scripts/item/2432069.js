var itemList = Array(
	Array(4310058, 99)
);
function start() {
    if (im.getSpace(3) >= 1) {
        im.gainItem(2432069, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "��ϲ���񱩾����߶һ�����-�����˹��99��");
        im.worldSpouseMessage(0x15, "����ֵ������:��ϲ " + im.getPlayer().getName() + " �� <����������> �л�������˹��99�����볬�������һ����");
	im.dispose();
    } else {
        im.sendOk("�뽫������Ԥ��1����λ���ϣ��ҽ������������߶һ�����-�����˹��99����");
	im.dispose();
    }
}