function start() {
    im.gainItem(2430096,-1 ,1);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1332225)).copy(); // ����һ��Equip��                    
	//toDrop.setEnhance(30); //װ����
	toDrop.setStr(9999); //װ������
	toDrop.setDex(9999); //װ������
	toDrop.setInt(9999); //װ������
	toDrop.setLuk(9999); //װ������
	toDrop.setMatk(9999); //��������
	toDrop.setWatk(9999); //ħ������ 
	//toDrop.setSpeed(999); //�ƶ��ٶ�
	//toDrop.setJump(999); //��Ծ
	toDrop.setAcc(9999); //����
	//var timeStamp = java.lang.System.currentTimeMillis();
	//var expirationDate = timeStamp+7*86400*1000;
	//toDrop.setExpiration(expirationDate);
	toDrop.setOwner("Chinað�յ�");
	im.addFromDrop(im.getC(), toDrop, false);
    im.sendOk("��ϲ����� #r����Ա�ͳ�������#k ��");
	im.worldSpouseMessage(0x1,"[��������]����� "+ im.getChar().getName() +" ����Chinað�յ���");
	im.dispose(); 
}