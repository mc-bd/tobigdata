ALTER TABLE BD_GOAL
	DROP
		CONSTRAINT FK_BD_USER_TO_BD_GOAL
		CASCADE;

ALTER TABLE BD_GOAL
	DROP
		PRIMARY KEY
		CASCADE
		KEEP INDEX;

DROP INDEX PK_BD_GOAL;

/* �繫��ǥ */
DROP TABLE BD_GOAL 
	CASCADE CONSTRAINTS;

/* �繫��ǥ */
CREATE TABLE BD_GOAL (
	PK_GOAL NUMBER(10) NOT NULL, /* �̼ǹ�ȣ */
	ACHIEVEMENT FLOAT NOT NULL, /* �޼��� */
	MONTARGET NUMBER(10), /* �����Ա� */
	NOWTARGET FLOAT, /* ���������� */
	ID VARCHAR2(20), /* ���̵� */
	STARTDATE DATE, /* ���۱Ⱓ */
	FINISHDATE DATE, /* ����Ⱓ */
	INTEREST FLOAT, /* ������ */
	COUNT NUMBER(10) /* ����Ƚ�� */
);

COMMENT ON TABLE BD_GOAL IS '�繫��ǥ';

COMMENT ON COLUMN BD_GOAL.PK_GOAL IS '�̼ǹ�ȣ';

COMMENT ON COLUMN BD_GOAL.ACHIEVEMENT IS '�޼���';

COMMENT ON COLUMN BD_GOAL.MONTARGET IS '�����Ա�';

COMMENT ON COLUMN BD_GOAL.NOWTARGET IS '����������';

COMMENT ON COLUMN BD_GOAL.ID IS '���̵�';

COMMENT ON COLUMN BD_GOAL.STARTDATE IS '���۱Ⱓ';

COMMENT ON COLUMN BD_GOAL.FINISHDATE IS '����Ⱓ';

COMMENT ON COLUMN BD_GOAL.INTEREST IS '������';

COMMENT ON COLUMN BD_GOAL.COUNT IS '����Ƚ��';

CREATE UNIQUE INDEX PK_BD_GOAL
	ON BD_GOAL (
		PK_GOAL ASC
	);

ALTER TABLE BD_GOAL
	ADD
		CONSTRAINT PK_BD_GOAL
		PRIMARY KEY (
			PK_GOAL
		);

ALTER TABLE BD_GOAL
	ADD
		CONSTRAINT FK_BD_USER_TO_BD_GOAL
		FOREIGN KEY (
			ID
		)
		REFERENCES BD_USER (
			ID
		);