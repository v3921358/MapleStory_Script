/*
 ��о������Chinað�յ�����
 ���ʱ�䣺
 �ű�����: �ۼƳ�ֵ���
 */

var a = 0;
var RMB = 0;
var ChoosenRMB = 0;
var item;
var toDrop;
var PayLevel = Array(
        Array(0, 1),
        Array(1, 30),
        Array(2, 50),
        Array(3, 100),
        Array(4, 200),
        Array(5, 300),
        Array(6, 500),
        Array(7, 1000),
        Array(8, 1500),
        Array(9, 2000),
        Array(10, 3000),
        Array(11, 5000),
        Array(12, 10000)
        );//���  �ۼƽ��
var GiftList = Array(
        Array(1, 2049750, 1),
        Array(1, 2340000, 3),
        Array(1, 2049136, 1),
        Array(1, 3010145, 1), //                       1Ԫ�������

        Array(30, 3010435, 1), //ǧ�������
        Array(30, 5062002, 50), //�߼�����ħ��
        Array(30, 2340000, 20), //ף������
        Array(30, 4310023, 200), //���˵�ͭ��
        Array(30, 4000858, 30), //�й���                 30Ԫ�������

        Array(50, 5062002, 80), //�߼�����ħ��
        Array(50, 2340000, 30), // ף������
        Array(50, 4310023, 300), //���˵�ͭ��
        Array(50, 5064000, 30), //��������
        Array(50, 4000858, 50), //�й���                 50Ԫ�������

        Array(100, 5062002, 100), //�߼�����ħ��
        Array(100, 2340000, 40), //ף������
        Array(100, 4310023, 400), //���˵�ͭ��
        Array(100, 5064000, 40), //��������
        Array(100, 4000858, 80), //�й���
        Array(100, 3010417, 1), //���ް������
        Array(100, 3994417, 1), //��ɫ����               100Ԫ�������

        Array(200, 2431938, 1), //������������
        Array(200, 5062002, 200), //�߼�����ħ��
        Array(200, 2340000, 50), //ף������
        Array(200, 4310023, 500), //���˵�ͭ��
        Array(200, 5064000, 50), //��������
        Array(200, 4000858, 100), // �й���
        Array(200, 3012025, 1), // ˼��С��˫���� 
        Array(200, 3994417, 1), // ��ɫ����    
        Array(200, 3994418, 1), //  ��ɫ����               200Ԫ�������

        Array(300, 2432069, 1), //�������߽�����
        Array(300, 5062002, 300), //�߼�����ħ��
        Array(300, 2340000, 60), //ף������
        Array(300, 4310023, 600), //���˵�ͭ��
        Array(300, 5064000, 60), //��������
        Array(300, 4000858, 150), //�й���
        Array(300, 3010826, 1), //��������
        Array(300, 3994417, 1), //��ɫ���� 
        Array(300, 3994418, 1), // ��ɫ����
        Array(300, 3994419, 1), //��ɫ����               300Ԫ�������



        Array(500, 5062002, 300), //�߼�����ħ��
        Array(500, 2340000, 60), //ף������
        Array(500, 4310023, 600), //���˵�ͭ��
        Array(500, 5064000, 60), //��������
        Array(500, 4000858, 200), //�й���
        Array(500, 3010826, 1), //��������
        Array(500, 3994417, 1), //��ɫ���� 
        Array(500, 3994418, 1), // ��ɫ����
        Array(500, 3994419, 1), //��ɫ����    
        Array(500, 3994420, 1), //��ɫ����               500Ԫ�������


        Array(1000, 5062002, 400), //�߼�����ħ��
        Array(1000, 2340000, 100), //ף������
        Array(1000, 4310023, 1200), //���˵�ͭ��
        Array(1000, 5064000, 100), //��������
        Array(1000, 4000858, 500), //�й���
        Array(1000, 3010829, 1), //��������
        Array(1000, 3994417, 1), //��ɫ���� 
        Array(1000, 3994418, 1), // ��ɫ����
        Array(1000, 3994419, 1), //��ɫ����    
        Array(1000, 3994420, 1), //��ɫ����
        Array(1000, 3994421, 1), //��ɫ����               1000Ԫ�������


        Array(1500, 5062002, 500), //�߼�����ħ��
        Array(1500, 2340000, 200), //ף������
        Array(1500, 4310023, 1500), //���˵�ͭ��
        Array(1500, 5064000, 200), //��������
        Array(1500, 4000858, 800), //�й���
        Array(1500, 3010879, 1), //У԰����
        Array(1500, 3994417, 1), //��ɫ���� 
        Array(1500, 3994418, 1), // ��ɫ����
        Array(1500, 3994419, 1), //��ɫ����    
        Array(1500, 3994420, 1), //��ɫ����
        Array(1500, 3994421, 1), //��ɫ����
        Array(1500, 3994422, 1), //��ɫ����                1500Ԫ�������


        Array(2000, 4000000, 1),
        Array(3000, 4000000, 1),
        Array(5000, 4000000, 1),
        Array(10000, 4000000, 1)
        );
var WeaponList = Array(
        Array(0, 1, 1422066, 0, 0, 0), //��ħ����
        Array(1, 1, 1232014, 0, 0, 0), //��ħ������
        Array(2, 1, 1402095, 0, 0, 0), //Ӣ��
        Array(3, 1, 1402095, 0, 0, 0), //����սʿ
        Array(4, 1, 1432086, 0, 0, 0), //����ʿ
        Array(5, 1, 1442116, 0, 0, 0), //ս�� 2000 ս��
        Array(6, 1, 1302152, 0, 0, 0), //ʥ��ʿ
        Array(7, 1, 1212014, 0, 0, 0), //2004 ҹ�ⷨʦ
        Array(8, 1, 1382104, 0, 0, 0), //��ʦ
        Array(9, 1, 1382104, 0, 0, 0), //��ʦ
        Array(10, 1, 1382104, 0, 0, 0), //��ʦ
        Array(11, 1, 1452111, 0, 0, 0), //������
        Array(12, 1, 1462099, 0, 0, 0), //����
        Array(13, 1, 1522018, 0, 0, 0), //˫��
        Array(14, 1, 1242042, 0, 0, 0), //���
        Array(15, 1, 1332130, 0, 0, 0), //��Ӱ˫��
        Array(16, 1, 1332130, 0, 0, 0), //����
        Array(17, 1, 1362019, 0, 0, 0), //��Ӱ
        Array(18, 1, 1472122, 0, 0, 0), //���
        Array(19, 1, 1482084, 0, 0, 0), //ȭ��
        Array(20, 1, 1482084, 0, 0, 0), //2005 ����
        Array(21, 1, 1492085, 0, 0, 0), //����
        Array(22, 1, 1532018, 0, 0, 0), //501 ������
        Array(23, 1, 1492085, 0, 0, 0), //508 ���Ĵ���
        Array(24, 1, 1372084, 0, 0, 0), //����
        Array(100, 50, 1102466, 10, 10, 10), //�߹�֮��(ȫ����+10��������ħ��10��)
        Array(100, 100, 1702368, 10, 10, 10), //�ڰ�����ħ��(ȫ����+10��������ħ��10��)
        Array(100, 100, 1112793, 10, 10, 10), //����ָ��(ȫ����+10��������ħ��10��)
        Array(100, 500, 1112164, 30, 30, 30), //����������Ƭ��ָ(ȫ����+30��������ħ��30��)
        Array(100, 500, 1112276, 30, 30, 30), //�������������ָ(ȫ����+30��������ħ��30��)
        Array(100, 500, 1102630, 50, 50, 50), //����������ʹ(ȫ����+50��������ħ��50��)
        Array(101, 1000, 1082543, 0, 0, 0), // սʿϵ�� �������Ǵ�˹����(������)
        Array(102, 1000, 1082544, 0, 0, 0), // ��ʦϵ�� �����ն�÷˹����(������)
        Array(103, 1000, 1082545, 0, 0, 0), // ����ϵ�� ������������(������)
        Array(104, 1000, 1082546, 0, 0, 0), // ����ϵ�� ��������������(������)
        Array(105, 1000, 1082547, 0, 0, 0), //  ����ϵ�� ��������̩����(������)
        Array(101, 1500, 1132174, 0, 0, 0), // սʿϵ�� �������Ǵ�˹����(������)
        Array(102, 1500, 1132175, 0, 0, 0), // ��ʦϵ�� �����ն�÷˹����(������)
        Array(103, 1500, 1132176, 0, 0, 0), // ����ϵ�� ������������(������)
        Array(104, 1500, 1132177, 0, 0, 0), // ����ϵ�� ��������������(������)
        Array(105, 1500, 1132178, 0, 0, 0) //  ����ϵ�� ��������̩����(������)
        );//jobtype,paylevel,weaponid,ȫ����,�﹥,ħ��


var Newhand = Array(0, 2000, 2001, 2004, 100, 200, 300, 400, 500, 3000);//��Ҫתְ���ܲ�����ְҵ
var pass = true;
var Weaponid = Array();


var slot = 0;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            im.dispose();
        } else if (a == 0) {
            RMB = im.getRMB();
            var TEMP;
            var Times = 0;
            var Text = "���СǮ��һ�°ɡ���\r\n�������ۼƳ�ֵ���Ϊ�� #r" + RMB + "#b\r\n\r\n#b"
            for (var i = 0; i < PayLevel.length; i++) {
                if (RMB >= PayLevel[i][1]) {
                    TEMP = im.getBossLogAcc("�ۼ�" + (parseInt(PayLevel[i][1])) + "Ԫ���") == -1 ? "#g(����ȡ)#b" : "#r(δ��ȡ)#b";
                    Text += "#L" + i + "# �ۼ�" + PayLevel[i][1] + "Ԫ������" + TEMP + "\r\n";
                    Times = i;
                }
            }
            if (RMB == 0) {
                Text += "#L" + (Times) + "#  >>> �ۼ�" + PayLevel[Times][1] + "Ԫ������ #r(��һ�׶ν���)#b";
            } else if (RMB < 10000) {
                Text += "#L" + (Times + 1) + "#  >>> �ۼ�" + PayLevel[Times + 1][1] + "Ԫ������ #r(��һ�׶ν���)#b";
            }
            im.sendSimple(Text);
        } else if (a == 1) {
            for (var i = 0; i < Newhand.length; i++) {
                if (im.getJobId() == Newhand[i]) {
                    pass = false;
                }
            }
            if (pass) {
                Times = selection;
                ChoosenRMB = PayLevel[Times][1];
                if (im.getBossLogAcc("�ۼ�" + ChoosenRMB + "Ԫ���") == -1) {
                    im.sendOk("�㲻���ظ���ȡ���Ӵ��\r\n һ���ʺ�ֻ����ȡһ�Σ�");
                    im.dispose();
                } else {
                    var Text = "�ۼƳ�ֵ�� #r" + ChoosenRMB + "#k Ԫ���Ϳ��Ի�ã�\r\n\r\n";
                    for (var i = 0; i < WeaponList.length; i++) {
                        if (ChoosenRMB == 1) {//Level 1
                            if (getJobType(im.getJobId()) == WeaponList[i][0]) {//ְҵ���� = װ����Ҫ��
                                if (ChoosenRMB == WeaponList[i][1]) {//ѡ��ĵȼ� = װ����Ҫ��
                                    Text += "#i" + WeaponList[i][2] + "# #t" + WeaponList[i][2] + "# x1 (����)\r\n\r\n";//��ȡװ��ID
                                }
                            }
                        } else {//����Level
                            //im.playerMessage(1, getJobFamily(getJobType(im.getJobId())));
                            if (getJobFamily(getJobType(im.getJobId())) == WeaponList[i][0]) {//ְҵ���� = װ����Ҫ��
                                if (ChoosenRMB == WeaponList[i][1]) {//ѡ��ĵȼ� = װ����Ҫ��
                                    if (WeaponList[i][3] != 0) {
                                        Text += "#i" + WeaponList[i][2] + "# #t" + WeaponList[i][2] + "# x1(���Լ�ǿ��)\r\n\r\n";//��ȡװ��ID
                                    } else {
                                        Text += "#i" + WeaponList[i][2] + "# #t" + WeaponList[i][2] + "# x1 (����)\r\n\r\n";//��ȡװ��ID
                                    }
                                }
                            }
                        }
                    }
                    for (var i = 0; i < GiftList.length; i++) {
                        if (ChoosenRMB == GiftList[i][0]) {
                            if (GiftList[i][1] == 4310023) {
                                Text += "#i" + GiftList[i][1] + "#  #t" + GiftList[i][1] + "# ��ǿ��װ��ר�ã� x" + GiftList[i][2] + "\r\n\r\n"//��ȡװ��ID
                            }else if (GiftList[i][1] == 4000858) {
                                Text += "#i" + GiftList[i][1] + "#  #t" + GiftList[i][1] + "# ��ǿ������ר�ã� x" + GiftList[i][2] + "\r\n\r\n"//��ȡװ��ID
                            }else{
                                Text += "#i" + GiftList[i][1] + "#  #t" + GiftList[i][1] + "# x" + GiftList[i][2] + "\r\n\r\n"//��ȡװ��ID
                            }
                        }
                    }
                    im.sendNext(Text);
                }
            } else {
                im.sendOk("������תְ��2ת���ܲ鿴������ȡ�ۼƳ�ֵ������Ŷ~");
                im.dispose();
            }
        } else if (a == 2) {
            var SpaciousWeapon = new Array();
            var WeaponI = -1;
            if (RMB < ChoosenRMB) {
                im.sendOk("������ʱ������ȡŶ��\r\n #d>> �������ۼƳ�ֵ" + ChoosenRMB + "Ԫ�����ڻ���#r" + (ChoosenRMB - RMB) + " #dԪ��")
                im.dispose();
            } else if (im.getBossLogAcc("�ۼ�" + ChoosenRMB + "Ԫ���") == -1) {
                im.sendOk("�㲻���ظ���ȡ���Ӵ��\r\n һ���ʺ�ֻ����ȡһ�Σ�");
                im.dispose();
            } else {
                for (var i = 0; i < WeaponList.length; i++) {
                    if (ChoosenRMB == 1) {
                        if (getJobType(im.getJobId()) == WeaponList[i][0]) {//ְҵ���� = װ����Ҫ��
                            if (ChoosenRMB == WeaponList[i][1]) {//ѡ��ĵȼ� = װ����Ҫ��
                                Weaponid.push(WeaponList[i][2]);
                            }
                        }
                    } else {
                        if (getJobFamily(getJobType(im.getJobId())) == WeaponList[i][0]) {//ְҵ���� = װ����Ҫ��
                            if (ChoosenRMB == WeaponList[i][1]) {//ѡ��ĵȼ� = װ����Ҫ��
                                Weaponid.push(WeaponList[i][2]);
                                if (WeaponList[i][3] != 0) {
                                    SpaciousWeapon.push(true);
                                    WeaponI = i;
                                }
                            }
                        }
                    }
                }
                var getspace = Array(0, 0, 0, 0, 0, 0);
                //1 - װ��
                //2 - ������
                //3 - ������
                //4 - ������
                //5 - ������
                for (var i = 0; i < GiftList.length; i++) {
                    if (ChoosenRMB == GiftList[i][0]) {
                        if (GiftList[i][1] == 4000858 || GiftList[i][1] == 5062002 || GiftList[i][1] == 2340000 || GiftList[i][1] == 5064000) {//������й��� �߼�����ħ�� 100��һ��
                            getspace[parseInt(GiftList[i][1] / 1000000)] += Math.ceil(GiftList[i][2] / 100);
                            getspace[parseInt(GiftList[i][1] / 1000000)]--;
                        }
                        if (GiftList[i][1] == 4310023) {//���˵�ͭ�� 1000��һ��
                            getspace[parseInt(GiftList[i][1] / 1000000)] += Math.ceil(GiftList[i][2] / 1000);
                            getspace[parseInt(GiftList[i][1] / 1000000)]--;
                        }
                        getspace[parseInt(GiftList[i][1] / 1000000)]++;
                    }
                }
                getspace[1] += Weaponid.length;//���������Ŀռ�
                var CheckSpace = true;
                for (var i = 1; i < 6; i++) {
                    if (im.getSpace(i) < getspace[i]) {
                        CheckSpace = false;
                    }
                    //im.playerMessage(5, "" + i + " Ҫ��" + getspace[i] + " �� "+im.getSpace(i)+"");
                }
                if (CheckSpace == false) {
                    im.sendOk("�����Ŀռ䲻�㣬�������ı���:\r\n\r\n1��װ�����ڳ�" + getspace[1] + "��\r\n2���������ڳ�" + getspace[2] + "��\r\n3���������ڳ�" + getspace[3] + "��\r\n4���������ڳ�" + getspace[4] + "��\r\n5���������ڳ�" + getspace[5] + "��");
                    im.dispose();
                } else {//��ȡ���߲���
                    for (var i = 0; i < Weaponid.length; i++) {
                        if (SpaciousWeapon[i] == true) {
                            var ii = im.getItemInfo();
                            toDrop = ii.randomizeStats(ii.getEquipById(Weaponid[i])).copy(); // ����һ��Equip��(�������װ��)
                            var j = 3;
                            for (var k = 0; k < 3; k++) {
                                setEquipStat(k, WeaponList[WeaponI][j]);
                                j++;
                            }
                            toDrop.setEquipOnlyId(cm.getMapleEquipOnlyId());
                            im.addFromDrop(im.getC(), toDrop, false);
                        } else {
                            im.gainItem(Weaponid[i], 1);
                        }
                    }
                    for (var i = 0; i < GiftList.length; i++) {
                        if (ChoosenRMB == GiftList[i][0]) {
                            im.gainItem(GiftList[i][1], GiftList[i][2]);//��ȡ����ڵ���Ʒ
                        }
                    }
                    im.setBossLogAcc("�ۼ�" + ChoosenRMB + "Ԫ���", -2);
                    im.playerMessage(1, "��ȡ" + ChoosenRMB + "Ԫ����ɹ���");
                    im.channelMessage(0x18, "���ۼƳ�ֵ������" + " : " + "��� " + im.getChar().getName() + " ��ȡ���ۼƳ�ֵ" + ChoosenRMB + "Ԫ�����");
                    im.dispose();
                }
            }
        }//a
    }//mode
}//f

function getJobType(Jobid) {
    var JobList = Array(
            Array(0, 3100, 3110, 3111, 3112), //��ħ����
            Array(1, 3101, 3120, 3121, 3122), //��ħ������
            Array(2, 100, 110, 111, 112), //Ӣ��
            Array(3, 6000, 6100, 6110, 6112), //����սʿ
            Array(4, 100, 130, 131, 132), //����ʿ
            Array(5, 2100, 2110, 2111, 2112), //ս�� 2000 ս��
            Array(6, 100, 120, 121, 122), //ʥ��ʿ
            Array(7, 2700, 2710, 2711, 2712), //2004 ҹ�ⷨʦ
            Array(8, 200, 210, 211, 212), //��ʦ
            Array(9, 200, 220, 221, 222), //��ʦ
            Array(10, 200, 230, 231, 232), //��ʦ
            Array(11, 300, 310, 311, 312), //������
            Array(12, 300, 320, 321, 322), //����
            Array(13, 2300, 2310, 2311, 2312), //˫��
            Array(14, 3600, 3610, 3611, 3612), //���
            Array(15, 430, 431, 432, 434), //��Ӱ˫��
            Array(16, 400, 420, 421, 422), //����
            Array(17, 2400, 2410, 2411, 2412), //��Ӱ
            Array(18, 400, 410, 411, 412), //���
            Array(19, 500, 510, 511, 512), //ȭ��
            Array(20, 2500, 2510, 2511, 2512), //2005 ����
            Array(21, 500, 520, 521, 522), //����
            Array(22, 501, 530, 531, 532), //501 ������
            Array(23, 570, 571, 572, 573)////508 ���Ĵ���
            );
// 0,1,2,3,4,5,6 սʿ��
// 7,8,9,10,24 ��ʦ��
// 11,12,13 ����
// 14,15,16,17,18 ������
// 19,20,21,22,23 ������

    var jobtype = 99;//Ĭ��Ϊ��Ч������
    for (var i = 0; i < JobList.length; i++) {
        for (var j = 1; j < 5; j++) {
            if (Jobid == JobList[i][j]) {
                jobtype = JobList[i][0];//�õ�ְҵ������
            }
        }
    }
    if (Jobid == 2200 || Jobid == 2210 || Jobid == 2211 || Jobid == 2212 || Jobid == 2213 || Jobid == 2214 || Jobid == 2215 || Jobid == 2216 || Jobid == 2217 || Jobid == 2218) {
        jobtype = 24;//�����Type�����ж�
    }
    return jobtype;
}

function getJobFamily(jobtype) {
// 0,1,2,3,4,5,6 սʿ��
// 7,8,9,10,24 ��ʦ��
// 11,12,13 ������
// 14,15,16,17,18 ������
// 19,20,21,22,23 ������
    var jobFamily = 100;//100 ȫְҵ 101 սʿ 102��ʦ 103 ������ 104���� 105����
    for (var i = 0; i < 6; i++) {
        if (jobtype == i) {
            jobFamily = 101;
        }
    }
    if (jobtype == 7 || jobtype == 8 || jobtype == 9 || jobtype == 10 || jobtype == 24) {
        jobFamily = 102;
    }
    for (var i = 11; i < 13; i++) {
        if (jobtype == i) {
            jobFamily = 103;
        }
    }
    for (var i = 14; i < 18; i++) {
        if (jobtype == i) {
            jobFamily = 104;
        }
    }
    for (var i = 19; i < 23; i++) {
        if (jobtype == i) {
            jobFamily = 105;
        }
    }
    return jobFamily;
}


function setEquipStat(i, v) {//����װ������;
    switch (i) {
        case 0:
            toDrop.setStr(v);
            toDrop.setDex(v);
            toDrop.setInt(v);
            toDrop.setLuk(v);
            break;
        case 1:
            toDrop.setWatk(v);
            break;
        case 2:
            toDrop.setMatk(v);
            break;
    }
}