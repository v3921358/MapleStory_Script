var status = -1;
var selectedType = 0;
var selectedMeso = 0;
var moneyMeso = 1;

function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 2) {
                cm.sendOk("����#r#h ##k�ټ���");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("����#r#h ##k���ã���ѡ������Ҫ��������Ŀ:\r\n\r\n��Ŀǰ������#r " + cm.getMeso() + " #k���\r\n����Maplewing���׵���Ϊ#r " + cm.getMaplewing() + " #k��\r\n#b#L0#����Maplewing���׵���#l\r\n#L1#�һ��ɼ����#l");
        } else if (status == 1) {
            selectedType = selection;
            if (selectedType == 0) {
                cm.sendGetNumber("��������Ҫ���ӵ�Maplewing���׵���:\r\n", 1, 1, 9999999);
            } else if (selectedType == 1) {
                cm.sendGetNumber("��������Ҫȡ��Ľ��(��λ: �� ):\r\n", 1, 1, 5);
            }
        } else if (status == 2) {
            selectedMeso = selection;
            if (selectedType == 0) {
                cm.sendYesNo("���Ƿ�Ҫ���ӵ�Maplewing���׵���#r " + selectedMeso + " #k��");
            } else if (selectedType == 1) {
                cm.sendYesNo("���Ƿ�Ҫȡ��#r " + selectedMeso + " #k��");
            }
        } else if (status == 3) {
            if (selectedType == 0) {
                if (cm.getMeso() < selectedMeso * moneyMeso) {
                    cm.sendNext("���Ľ�Ҳ�����");
                } else if (cm.addMaplewing(selectedMeso, 0) > 0) {
                    cm.gainMeso( - selectedMeso * moneyMeso);
                    cm.sendOk("�õģ��Ѿ�����Maplewing���׵�����\r\n����Maplewing���׵���Ϊ#r " + cm.getMaplewing() + " #k��");
                } else {
                    cm.sendOk("����Maplewing���׵������ִ����뷴��������Ա��");
                }
                cm.dispose();
            } else if (selectedType == 1) {
                if (cm.getMoney() < selectedMeso) {
                    cm.sendNext("��û�д���ô��Ǯ��");
                } else if (cm.getMeso() > 1500000000) {
                    cm.sendNext("�����ϵĽ�ҳ����� 15 �ڣ���ȡʧ�ܡ��뽫��Ҵ���ֿ����������ȡ�ɣ�");
                } else if (cm.addMoney( - selectedMeso, 1) > 0) {
                    cm.gainMeso(selectedMeso * moneyMeso);
                    cm.sendOk("�õģ����պ�����Ǯ��");
                } else {
                    cm.sendOk("ȡ����ִ����뷴��������Ա��");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    }
}