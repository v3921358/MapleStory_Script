var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var selStr = "#d#e��ӭʹ�ð�У԰�ҹ�����Ʒ����ѡ������Ҫ�ģ�#n#k\r\n";
			selStr +="\t#b����ǰ��У԰��Ϊ��  #r" + cm.getPlayerPoints() + " #b ��#n#k\r\n\r\n";
			selStr +="- #eװ��#n\r\n"
			selStr +="#L16##b"+aaa+" ����ר�� #rWELCOME��Ч#k #b��Ҫ #r10000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L1##b"+aaa+" ����սʿ #r#t1122122##k #b��Ҫ #r2000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L2##b"+aaa+" ����ʦ #r#t1122123##k #b��Ҫ #r2000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L3##b"+aaa+" ������ #r#t1122124##k #b��Ҫ #r2000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L4##b"+aaa+" ������� #r#t1122125##k #b��Ҫ #r2000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L5##b"+aaa+" ���򺣵� #r#t1122126##k #b��Ҫ #r2000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L6##b"+aaa+" �������� #r#t1142210##k #b��Ҫ #r500000#k #b�󶨱�#l#k\r\n"; 
			selStr +="#L7##b"+aaa+" �������� #r#t1142178##k #b��Ҫ #r300000#k #b�󶨱�#l#k\r\n"; 
			selStr +="#L8##b"+aaa+" ��ȫְ #r#t1132245##k #b��Ҫ #r1500000#k #b�󶨱�#l#k\r\n"; 
			selStr +="#L9##b"+aaa+" ��ȫְ #r#t1132246##k #b��Ҫ #r3000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L10##b"+aaa+" ��ȫְ #r#t1122266##k #b��Ҫ #r1000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L11##b"+aaa+" ��ȫְ #r#t1122267##k #b��Ҫ #r1200000#k #b�󶨱�#l#k\r\n";
			selStr +="#L12##b"+aaa+" ��ȫְ #r#t1032222##k #b��Ҫ #r1000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L13##b"+aaa+" ��ȫְ #r#t1032223##k #b��Ҫ #r1500000#k #b�󶨱�#l#k\r\n";
			selStr +="#L14##b"+aaa+" ��ȫְ #r#t1113074##k #b��Ҫ #r1000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L15##b"+aaa+" ��ȫְ #r#t1113075##k #b��Ҫ #r1500000#k #b�󶨱�#l#k\r\n";
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("ȷ������ #r#t1122122##k ����ʹ�õ��� #r2000000#k ��У԰��. ������� #r������50 ����20 ħ�� 20 #kսʿ #t1122122#��");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("ȷ������ #r#t1122123##k ����ʹ�õ��� #r2000000#k ��У԰��. ������� #rħ����50 ����20 ħ�� 20 #k��ʦ #t1122123#��");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("ȷ������ #r#t1122124##k ����ʹ�õ��� #r2000000#k ��У԰��. ������� #r������50 ����20 ħ�� 20 #k���� #t1122124#��");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("ȷ������ #r#t1122125##k ����ʹ�õ��� #r2000000#k ��У԰��. ������� #r������50 ����20 ħ�� 20 #k���� #t1122125#��");
                        } else if (selection == 5) {
				typed=5;
				cm.sendYesNo("ȷ������ #r#t1122126##k ����ʹ�õ��� #r2000000#k ��У԰��. ������� #r������50 ����20 ħ�� 20 #k���� #t1122126#��");
                        } else if (selection == 6) {
				typed=6;
				cm.sendYesNo("ȷ������ #r#t1142210##k ����ʹ�õ��� #r500000#k ��У԰��. ������� #rȫ����+7 ����ħ��+8#k �� #t1142210#��");
                        } else if (selection == 7) {
				typed=7;
				cm.sendYesNo("ȷ������ #r#t1142178##k ����ʹ�õ��� #r300000#k ��У԰��. ������� #rȫ����+5 �ƶ�+7 ��Ծ+3#k �� #t1142178#��");	
                        } else if (selection == 8) {
				typed=8;
				cm.sendYesNo("ȷ������ #r#t1132245##k ����ʹ�õ��� #r1500000#k ��У԰��. ������� #rȫ����+30 ����ħ��+20#k �� #t1132245#��");	
                        } else if (selection == 9) {
				typed=9;
				cm.sendYesNo("ȷ������ #r#t1132246##k ����ʹ�õ��� #r3000000#k ��У԰��. ������� #rȫ����+60 ����ħ��+35 ����ħ��+100#k �� #t1132246#��");	
                        } else if (selection == 10) {
				typed=10;
				cm.sendYesNo("ȷ������ #r#t1122266##k ����ʹ�õ��� #r1000000#k ��У԰��. ������� #rȫ����+20 ����ħ��+3#k �� #t1122266#��");
                        } else if (selection == 11) {
				typed=11;
				cm.sendYesNo("ȷ������ #r#t1122267##k ����ʹ�õ��� #r1200000#k ��У԰��. ������� #rȫ����+28 ����ħ��+5#k �� #t1122267#��");
						} else if (selection == 12) {
				typed=12;
				cm.sendYesNo("ȷ������ #r#t1032222##k ����ʹ�õ��� #r1000000#k ��У԰��. ������� #rȫ����+12 ����ħ��+5#k �� #t1032222#��");
						} else if (selection == 13) {
				typed=13;
				cm.sendYesNo("ȷ������ #r#t1032223##k ����ʹ�õ��� #r1500000#k ��У԰��. ������� #rȫ����+15 ����ħ��+9#k �� #t1032223#��");
						} else if (selection == 14) {
				typed=14;
				cm.sendYesNo("ȷ������ #r#t1113074##k ����ʹ�õ��� #r1000000#k ��У԰��. ������� #rȫ����+8 ����ħ��+5#k �� #t1113074#��");
						} else if (selection == 15) {
				typed=15;
				cm.sendYesNo("ȷ������ #r#t1113075##k ����ʹ�õ��� #r1500000#k ��У԰��. ������� #rȫ����+10 ����ħ��+8#k �� #t1113075#��");
						} else if (selection == 16) {
				typed=16;
				cm.sendYesNo("ȷ������ #rWELCOME��Ч#k ����ʹ�õ��� #r10000000#k ��У԰��. ������� #rȫ����+100 ����ħ��+100#k �� WELCOME��Ч��������Ч��������� #r200,000#k ���.");
						} else if (selection == 17) {
				typed=17;
				cm.sendYesNo("");
						} else if (selection == 18) {
				typed=18;
				cm.sendYesNo("");
						} else if (selection == 19) {
				typed=19;
				cm.sendYesNo("");
						} else if (selection == 20) {
				typed=20;
				cm.sendYesNo("");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayerPoints() >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-2000000);
			cm.gainItem(1122122, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122122#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ���սʿ������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==2){
                if (cm.getPlayerPoints() >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-2000000);
			cm.gainItem(1122123, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122123#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ���ʦ������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==3){
                if (cm.getPlayerPoints() >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-2000000);
			cm.gainItem(1122124, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122123#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ�����������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==4){
                if (cm.getPlayerPoints() >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-2000000);
			cm.gainItem(1122125, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122125#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ������������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==5){
                if (cm.getPlayerPoints() >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-2000000);
			cm.gainItem(1122126, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122126#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ�����������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==6){
                if (cm.getPlayerPoints() >= 500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-500000);
			cm.gainItem(1142210, 1);
			cm.sendOk("��ϲ���ɹ�����#t1142210#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ����������ղؼ�һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ��������ղؼ�һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==7){
                if (cm.getPlayerPoints() >= 300000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-300000);
			cm.gainItem(1142178, 1);
			cm.sendOk("��ϲ���ɹ�����#t1142178#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����ð�յ������ʹһ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ���ð�յ������ʹһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==8){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1132245, 1);
			cm.sendOk("��ϲ���ɹ�����#t1132245#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ¿�ӡ����һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ���߼����յ¿�ӡ����һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==9){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(1132246, 1);
			cm.sendOk("��ϲ���ɹ�����#t1132246#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������߼����յ¿�ӡ����һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ�����߼����յ¿�ӡ����һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==10){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1122266, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122266#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ¿�ӡ��׹һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ���߼����յ¿�ӡ��׹һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==11){
                if (cm.getPlayerPoints() >= 1200000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1200000);
			cm.gainItem(1122267, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122267#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������߼����յ¿�ӡ��׹һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ�����߼����յ¿�ӡ��׹һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==12){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1032222, 1);
			cm.sendOk("��ϲ���ɹ�����#t1032222#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ¶���һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ���߼����յ¶���һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==13){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1032223, 1);
			cm.sendOk("��ϲ���ɹ�����#t1032223#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������߼����յ¶���һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ�����߼����յ¶���һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==14){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1113074, 1);
			cm.sendOk("��ϲ���ɹ�����#t1113074#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ½�ָһ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ���߼����յ½�ָһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==15){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1113075, 1);
			cm.sendOk("��ϲ���ɹ�����#t1113075#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������߼����յ½�ָһ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�У԰�ҹ�����߼����յ½�ָһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==16){   // WELCOME��Ч��
                if (cm.getPlayerPoints() >= 10000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-10000000);
			var ii = cm.getItemInfo();				
			var toDrop = ii.randomizeStats(ii.getEquipById(1112941)).copy(); // ����һ��Equip��                    
            toDrop.setStr(100); //װ������
			toDrop.setDex(100); //װ������
			toDrop.setInt(100); //װ������
			toDrop.setLuk(100); //װ������
			toDrop.setMatk(100); //��������
			toDrop.setWatk(100); //ħ������ 
			im.addFromDrop(im.getC(), toDrop, false);
			cm.gainNX(1, 200000);
			cm.sendOk("��ϲ���ɹ�����WELCOME��Ч.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����WELCOME��Чһ����", 5120012);
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��У԰��δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
           }
		}
	  }
	}