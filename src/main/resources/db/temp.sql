CREATE TABLE IF NOT EXISTS `` (
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  `` () DEFAULT NULL,
  PRIMARY KEY (``)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='';


CREATE TABLE IF NOT EXISTS `TB_CONTENT_RECV_LOG` (
  `INGEST_SEQ` DECIMAL(11,0),
  `UPLOAD_TYPE` CHAR(1) DEFAULT NULL,
  `CONTENT_TYPE` CHAR(1) DEFAULT NULL,
  `CONTENT_TITLE` VARCHAR(200) DEFAULT NULL,
  `CONTENT_FILENAME` VARCHAR(200) DEFAULT NULL,
  `CONTENT_URL` VARCHAR(200) DEFAULT NULL,
  `INGET_DATETIME` DATETIME DEFAULT NULL,
  PRIMARY KEY (`INGEST_SEQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='콘텐츠 입수 이력';


CREATE TABLE IF NOT EXISTS `TB_TRANSCODE_REQ_LOG` (
  `TRANS_SEQ` DECIMAL(11, 0),
  `CONTENT_ID` DECIMAL(11, 0) DEFAULT NULL,
  `REQ_DATETIME` DATETIME DEFAULT NULL,
  `TRANS_STATE` CHAR(1) DEFAULT NULL,
  `COMPLETE_DATETIME` DATETIME DEFAULT NULL,
  PRIMARY KEY (`TRANS_SEQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='영상 변환 요청 이력';


CREATE TABLE IF NOT EXISTS `TB_BOARD_LOG` (
  `DELIVERY_SEQ` DECIMAL(11, 0) DEFAULT NULL,
  `CONTENT_ID` DECIMAL(11, 0) DEFAULT NULL,
  `CONTENT_TYPE` CHAR(1) DEFAULT NULL,
  `DELIVERY_DATETIME` DATETIME DEFAULT NULL,
  PRIMARY KEY (`DELIVERY_SEQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='송출 시스템 배포 이력';