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

/* 재무목표 */
DROP TABLE BD_GOAL 
	CASCADE CONSTRAINTS;

/* 재무목표 */
CREATE TABLE BD_GOAL (
	PK_GOAL NUMBER(10) NOT NULL, /* 미션번호 */
	ACHIEVEMENT FLOAT NOT NULL, /* 달성률 */
	MONTARGET NUMBER(10), /* 월납입금 */
	NOWTARGET FLOAT, /* 현재적립금 */
	ID VARCHAR2(20), /* 아이디 */
	STARTDATE DATE, /* 시작기간 */
	FINISHDATE DATE, /* 만료기간 */
	INTEREST FLOAT, /* 이자율 */
	COUNT NUMBER(10) /* 납입횟수 */
);

COMMENT ON TABLE BD_GOAL IS '재무목표';

COMMENT ON COLUMN BD_GOAL.PK_GOAL IS '미션번호';

COMMENT ON COLUMN BD_GOAL.ACHIEVEMENT IS '달성률';

COMMENT ON COLUMN BD_GOAL.MONTARGET IS '월납입금';

COMMENT ON COLUMN BD_GOAL.NOWTARGET IS '현재적립금';

COMMENT ON COLUMN BD_GOAL.ID IS '아이디';

COMMENT ON COLUMN BD_GOAL.STARTDATE IS '시작기간';

COMMENT ON COLUMN BD_GOAL.FINISHDATE IS '만료기간';

COMMENT ON COLUMN BD_GOAL.INTEREST IS '이자율';

COMMENT ON COLUMN BD_GOAL.COUNT IS '납입횟수';

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