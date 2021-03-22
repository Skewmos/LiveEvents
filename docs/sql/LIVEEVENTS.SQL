DROP DATABASE IF EXISTS liveevents;

CREATE DATABASE IF NOT EXISTS liveevents;

USE liveevents; 

# -----------------------------------------------------------------------------
#       TABLE : USER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS USER
 (
   IDUSER INTEGER NOT NULL AUTO_INCREMENT ,
   FIRSTNAME CHAR(255) NULL  ,
   LASTNAME CHAR(255) NULL  ,
   BIRTHDAY DATE NULL  ,
   EMAIL CHAR(255) NULL  ,
   PHONE CHAR(255) NULL  ,
   PASSWORD CHAR(255) NULL  ,
   CREATEDAT DATETIME NULL  ,
   UPDATEDAT DATETIME NULL  ,
   PICTUREURL TEXT NULL  
   , PRIMARY KEY (IDUSER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : RESTAURANT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS RESTAURANT
 (
   IDRESTAURANT INTEGER NOT NULL AUTO_INCREMENT ,
   IDLOCATION INTEGER NOT NULL  ,
   NAME CHAR(255) NULL  ,
   OPENHOURS TIME NULL  ,
   CLOSEHOURS TIME NULL  
   , PRIMARY KEY (IDRESTAURANT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE RESTAURANT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_RESTAURANT_LOCATION
     ON RESTAURANT (IDLOCATION ASC);

# -----------------------------------------------------------------------------
#       TABLE : MUSICAL_GENRE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS MUSICAL_GENRE
 (
   IDMUSICALGENRE CHAR(32) NOT NULL  ,
   NAMEGENRE CHAR(32) NULL  
   , PRIMARY KEY (IDMUSICALGENRE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : ARTIST
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ARTIST
 (
   IDARTIST INTEGER NOT NULL AUTO_INCREMENT ,
   NAME CHAR(255) NULL  
   , PRIMARY KEY (IDARTIST) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : BILLIET
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS BILLIET
 (
   IDBILLIET INTEGER NOT NULL AUTO_INCREMENT ,
   IDUSER INTEGER NOT NULL  ,
   NAMECONCERT CHAR(255) NULL  ,
   DATESTART DATETIME NULL  ,
   DATEEND DATETIME NULL  
   , PRIMARY KEY (IDBILLIET) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE BILLIET
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_BILLIET_USER
     ON BILLIET (IDUSER ASC);

# -----------------------------------------------------------------------------
#       TABLE : CONCERT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONCERT
 (
   IDCONCERT INTEGER NOT NULL AUTO_INCREMENT ,
   IDLOCATION INTEGER NOT NULL  ,
   NAME CHAR(255) NULL  ,
   DATESTART DATETIME NULL  ,
   DATEEND DATETIME NULL  ,
   NUMBERPLACE BIGINT(4) NULL  ,
   PLACESOLD BIGINT(4) NULL  
   , PRIMARY KEY (IDCONCERT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE CONCERT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_CONCERT_LOCATION
     ON CONCERT (IDLOCATION ASC);

# -----------------------------------------------------------------------------
#       TABLE : LOCATION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS LOCATION
 (
   IDLOCATION INTEGER NOT NULL AUTO_INCREMENT ,
   NAME CHAR(255) NULL  ,
   LONGITUDE DECIMAL(10,2) NULL  ,
   LATITUDE DECIMAL(10,2) NULL  
   , PRIMARY KEY (IDLOCATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : GENRE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS GENRE
 (
   IDMUSICALGENRE CHAR(32) NOT NULL  ,
   IDCONCERT INTEGER NOT NULL  
   , PRIMARY KEY (IDMUSICALGENRE,IDCONCERT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE GENRE
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_GENRE_MUSICAL_GENRE
     ON GENRE (IDMUSICALGENRE ASC);

CREATE  INDEX I_FK_GENRE_CONCERT
     ON GENRE (IDCONCERT ASC);

# -----------------------------------------------------------------------------
#       TABLE : PARTICIPATES
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS PARTICIPATES
 (
   IDARTIST INTEGER NOT NULL  ,
   IDCONCERT INTEGER NOT NULL  
   , PRIMARY KEY (IDARTIST,IDCONCERT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE PARTICIPATES
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_PARTICIPATES_ARTIST
     ON PARTICIPATES (IDARTIST ASC);

CREATE  INDEX I_FK_PARTICIPATES_CONCERT
     ON PARTICIPATES (IDCONCERT ASC);


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE RESTAURANT 
  ADD FOREIGN KEY FK_RESTAURANT_LOCATION (IDLOCATION)
      REFERENCES LOCATION (IDLOCATION) ;


ALTER TABLE BILLIET 
  ADD FOREIGN KEY FK_BILLIET_USER (IDUSER)
      REFERENCES USER (IDUSER) ;


ALTER TABLE CONCERT 
  ADD FOREIGN KEY FK_CONCERT_LOCATION (IDLOCATION)
      REFERENCES LOCATION (IDLOCATION) ;


ALTER TABLE GENRE 
  ADD FOREIGN KEY FK_GENRE_MUSICAL_GENRE (IDMUSICALGENRE)
      REFERENCES MUSICAL_GENRE (IDMUSICALGENRE) ;


ALTER TABLE GENRE 
  ADD FOREIGN KEY FK_GENRE_CONCERT (IDCONCERT)
      REFERENCES CONCERT (IDCONCERT) ;


ALTER TABLE PARTICIPATES 
  ADD FOREIGN KEY FK_PARTICIPATES_ARTIST (IDARTIST)
      REFERENCES ARTIST (IDARTIST) ;


ALTER TABLE PARTICIPATES 
  ADD FOREIGN KEY FK_PARTICIPATES_CONCERT (IDCONCERT)
      REFERENCES CONCERT (IDCONCERT) ;

