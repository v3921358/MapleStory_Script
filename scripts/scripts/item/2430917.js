var itemList = Array(
	Array(1112748, 1),
	Array(1022149, 1),
    Array(1152099, 1),
	Array(1132161, 1),
	Array(1032148, 1),
	Array(3700049, 1),
	Array(1122200, 1)
);
function start() {
    if (im.getSpace(1) >= 7) {
        im.gainItem(2430917, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "��ϲ�����7���籩ϵ������");
        im.worldSpouseMessage(0x15, "����ֵ������ : ��ϲ " + im.getPlayer().getName() + " �� <�籩������> �л��7���籩ϵ�����Σ��볬�������һ����");
	im.dispose();
    } else {
        im.sendOk("�뽫װ����Ԥ��7����λ���ϣ��ҽ�����7���籩ϵ�����Σ�");
	im.dispose();
    }
}