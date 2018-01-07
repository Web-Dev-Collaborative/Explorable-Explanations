
var starts = {};
var tracks = {};
var finishes = {};

starts["Open"] = "50-50";
tracks["Open"] = [ "10-10","10-30","10-50","10-70","10-90","10-110","10-130","10-150","10-170","10-190","10-210","10-230","10-250","10-270","10-290","10-310","10-330","10-350","10-370","10-390","10-410","10-430","10-450","10-470","10-490","10-510","10-530","10-550","10-570","10-590","30-10","30-590","50-10","50-590","70-10","70-590","90-10","90-590","110-10","110-590","130-10","130-590","150-10","150-590","170-10","170-590","190-10","190-590","210-10","210-590","230-10","230-590","250-10","250-590","270-10","270-590","290-10","290-590","310-10","310-590","330-10","330-590","350-10","350-590","370-10","370-590","390-10","390-590","410-10","410-590","430-10","430-590","450-10","450-590","470-10","470-590","490-10","490-590","510-10","510-590","530-10","530-590","550-10","550-590","570-10","570-590","590-10","590-590","610-10","610-590","630-10","630-590","650-10","650-590","670-10","670-590","690-10","690-590","710-10","710-590","730-10","730-590","750-10","750-590","770-10","770-590","790-10","790-590","810-10","810-590","830-10","830-590","850-10","850-590","870-10","870-590","890-10","890-590","910-10","910-590","930-10","930-590","950-10","950-590","970-10","970-590","990-10","990-590","1010-10","1010-590","1030-10","1030-590","1050-10","1050-590","1070-10","1070-590","1090-10","1090-590","1110-10","1110-590","1130-10","1130-590","1150-10","1150-590","1170-10","1170-590","1190-10","1190-30","1190-50","1190-70","1190-90","1190-110","1190-130","1190-150","1190-170","1190-190","1190-210","1190-230","1190-250","1190-270","1190-290","1190-310","1190-330","1190-350","1190-370","1190-390","1190-410","1190-430","1190-450","1190-470","1190-490","1190-510","1190-530","1190-550","1190-570","1190-590" ];
finishes["Open"] = [  ];

starts["Easy"] = "550-90";
tracks["Easy"] = [ "10-10","10-30","10-50","10-70","10-90","10-110","10-130","10-150","10-170","10-190","10-210","10-230","10-250","10-270","10-290","10-310","10-330","10-350","10-370","10-390","10-410","10-430","10-450","10-470","10-490","10-510","10-530","10-550","10-570","10-590","30-10","30-30","30-50","30-70","30-530","30-550","30-570","30-590","50-10","50-30","50-50","50-550","50-570","50-590","70-10","70-30","70-570","70-590","90-10","90-590","110-10","110-590","130-10","130-590","150-10","150-590","170-10","170-190","170-210","170-230","170-250","170-270","170-290","170-310","170-330","170-350","170-370","170-390","170-410","170-590","190-10","190-190","190-210","190-230","190-250","190-270","190-290","190-310","190-330","190-350","190-370","190-390","190-410","190-590","210-10","210-170","210-190","210-210","210-230","210-250","210-270","210-290","210-310","210-330","210-350","210-370","210-390","210-410","210-430","210-590","230-10","230-170","230-190","230-210","230-230","230-250","230-270","230-290","230-310","230-330","230-350","230-370","230-390","230-410","230-430","230-590","250-10","250-170","250-190","250-210","250-230","250-250","250-270","250-290","250-310","250-330","250-350","250-370","250-390","250-410","250-430","250-590","270-10","270-170","270-190","270-210","270-230","270-250","270-350","270-370","270-390","270-410","270-430","270-590","290-10","290-170","290-190","290-210","290-230","290-250","290-350","290-370","290-390","290-410","290-430","290-590","310-10","310-170","310-190","310-210","310-230","310-250","310-350","310-370","310-390","310-410","310-430","310-590","330-10","330-170","330-190","330-210","330-230","330-250","330-350","330-370","330-390","330-410","330-430","330-590","350-10","350-170","350-190","350-210","350-230","350-250","350-350","350-370","350-390","350-410","350-430","350-590","370-10","370-170","370-190","370-210","370-230","370-250","370-350","370-370","370-390","370-410","370-430","370-590","390-10","390-170","390-190","390-210","390-230","390-250","390-350","390-370","390-390","390-410","390-430","390-590","410-10","410-170","410-190","410-210","410-230","410-250","410-350","410-370","410-390","410-410","410-430","410-590","430-10","430-170","430-190","430-210","430-230","430-250","430-350","430-370","430-390","430-410","430-430","430-590","450-10","450-170","450-190","450-210","450-230","450-250","450-350","450-370","450-390","450-410","450-430","450-590","470-10","470-170","470-190","470-210","470-230","470-250","470-350","470-370","470-390","470-410","470-430","470-590","490-10","490-170","490-190","490-210","490-230","490-250","490-350","490-370","490-390","490-410","490-430","490-590","510-10","510-170","510-190","510-210","510-230","510-250","510-350","510-370","510-390","510-410","510-430","510-590","530-10","530-170","530-190","530-210","530-230","530-250","530-350","530-370","530-390","530-410","530-430","530-590","550-10","550-170","550-190","550-210","550-230","550-250","550-350","550-370","550-390","550-410","550-430","550-590","570-10","570-170","570-190","570-210","570-230","570-250","570-350","570-370","570-390","570-410","570-430","570-590","590-10","590-170","590-190","590-210","590-230","590-250","590-350","590-370","590-390","590-410","590-430","590-590","610-10","610-170","610-190","610-210","610-230","610-250","610-350","610-370","610-390","610-410","610-430","610-590","630-10","630-170","630-190","630-210","630-230","630-250","630-350","630-370","630-390","630-410","630-430","630-590","650-10","650-170","650-190","650-210","650-230","650-250","650-350","650-370","650-390","650-410","650-430","650-590","670-10","670-170","670-190","670-210","670-230","670-250","670-350","670-370","670-390","670-410","670-430","670-590","690-10","690-170","690-190","690-210","690-230","690-250","690-350","690-370","690-390","690-410","690-430","690-590","710-10","710-170","710-190","710-210","710-230","710-250","710-350","710-370","710-390","710-410","710-430","710-590","730-10","730-170","730-190","730-210","730-230","730-250","730-350","730-370","730-390","730-410","730-430","730-590","750-10","750-170","750-190","750-210","750-230","750-250","750-350","750-370","750-390","750-410","750-430","750-590","770-10","770-170","770-190","770-210","770-230","770-250","770-350","770-370","770-390","770-410","770-430","770-590","790-10","790-170","790-190","790-210","790-230","790-250","790-350","790-370","790-390","790-410","790-430","790-590","810-10","810-170","810-190","810-210","810-230","810-250","810-350","810-370","810-390","810-410","810-430","810-590","830-10","830-170","830-190","830-210","830-230","830-250","830-350","830-370","830-390","830-410","830-430","830-590","850-10","850-170","850-190","850-210","850-230","850-250","850-350","850-370","850-390","850-410","850-430","850-590","870-10","870-170","870-190","870-210","870-230","870-250","870-350","870-370","870-390","870-410","870-430","870-590","890-10","890-170","890-190","890-210","890-230","890-250","890-350","890-370","890-390","890-410","890-430","890-590","910-10","910-170","910-190","910-210","910-230","910-250","910-350","910-370","910-390","910-410","910-430","910-590","930-10","930-170","930-190","930-210","930-230","930-250","930-350","930-370","930-390","930-410","930-430","930-590","950-10","950-170","950-190","950-210","950-230","950-250","950-270","950-290","950-310","950-330","950-350","950-370","950-390","950-410","950-430","950-590","970-10","970-170","970-190","970-210","970-230","970-250","970-270","970-290","970-310","970-330","970-350","970-370","970-390","970-410","970-430","970-590","990-10","990-170","990-190","990-210","990-230","990-250","990-270","990-290","990-310","990-330","990-350","990-370","990-390","990-410","990-430","990-590","1010-10","1010-190","1010-210","1010-230","1010-250","1010-270","1010-290","1010-310","1010-330","1010-350","1010-370","1010-390","1010-410","1010-590","1030-10","1030-190","1030-210","1030-230","1030-250","1030-270","1030-290","1030-310","1030-330","1030-350","1030-370","1030-390","1030-410","1030-590","1050-10","1050-590","1070-10","1070-590","1090-10","1090-590","1110-10","1110-590","1130-10","1130-30","1130-570","1130-590","1150-10","1150-30","1150-50","1150-550","1150-570","1150-590","1170-10","1170-30","1170-50","1170-70","1170-530","1170-550","1170-570","1170-590","1190-10","1190-30","1190-50","1190-70","1190-90","1190-110","1190-130","1190-150","1190-170","1190-190","1190-210","1190-230","1190-250","1190-270","1190-290","1190-310","1190-330","1190-350","1190-370","1190-390","1190-410","1190-430","1190-450","1190-470","1190-490","1190-510","1190-530","1190-550","1190-570","1190-590" ];
finishes["Easy"] = [ "570-150", "570-130", "570-110", "570-90", "570-70", "570-50", "570-30" ]

starts["Intermediate"] = "550-170";
tracks["Intermediate"] = [ "570-50","10-10","10-30","10-50","10-70","10-90","10-110","10-130","10-150","10-170","10-190","10-210","10-230","10-250","10-270","10-290","10-310","10-330","10-350","10-370","10-390","10-410","10-430","10-450","10-470","10-490","10-510","10-530","10-550","10-570","10-590","30-10","30-30","30-50","30-70","30-210","30-230","30-250","30-270","30-290","30-310","30-330","30-350","30-370","30-390","30-530","30-550","30-570","30-590","50-10","50-30","50-50","50-230","50-250","50-270","50-290","50-310","50-330","50-350","50-370","50-550","50-570","50-590","70-10","70-30","70-250","70-270","70-290","70-310","70-330","70-350","70-570","70-590","90-10","90-270","90-290","90-310","90-330","90-590","110-10","110-290","110-310","110-590","130-10","130-590","150-10","150-150","150-170","150-190","150-410","150-430","150-450","150-590","170-10","170-150","170-170","170-190","170-210","170-390","170-410","170-430","170-450","170-590","190-10","190-150","190-170","190-190","190-210","190-230","190-370","190-390","190-410","190-430","190-450","190-590","210-10","210-150","210-170","210-190","210-210","210-230","210-250","210-350","210-370","210-390","210-410","210-430","210-450","210-590","230-10","230-150","230-170","230-190","230-210","230-230","230-250","230-270","230-330","230-350","230-370","230-390","230-410","230-430","230-450","230-590","250-10","250-150","250-170","250-190","250-210","250-230","250-250","250-270","250-290","250-310","250-330","250-350","250-370","250-390","250-410","250-430","250-450","250-590","270-10","270-150","270-170","270-190","270-210","270-230","270-250","270-270","270-290","270-310","270-330","270-350","270-370","270-390","270-410","270-430","270-450","270-590","290-10","290-150","290-170","290-190","290-210","290-230","290-250","290-270","290-290","290-310","290-330","290-350","290-370","290-390","290-410","290-430","290-450","290-590","310-10","310-150","310-170","310-190","310-210","310-230","310-250","310-270","310-330","310-350","310-370","310-390","310-410","310-430","310-450","310-590","330-10","330-150","330-170","330-190","330-210","330-230","330-250","330-350","330-370","330-390","330-410","330-430","330-450","330-590","350-10","350-150","350-170","350-190","350-210","350-230","350-250","350-350","350-370","350-390","350-410","350-430","350-450","350-590","370-10","370-150","370-170","370-190","370-210","370-230","370-250","370-350","370-370","370-390","370-410","370-430","370-450","370-590","390-10","390-150","390-170","390-190","390-210","390-230","390-250","390-350","390-370","390-390","390-410","390-430","390-450","390-590","410-10","410-150","410-170","410-190","410-210","410-230","410-250","410-350","410-370","410-390","410-410","410-430","410-450","410-590","430-10","430-150","430-170","430-190","430-210","430-230","430-250","430-350","430-370","430-390","430-410","430-430","430-450","430-590","450-10","450-170","450-190","450-210","450-230","450-250","450-350","450-370","450-390","450-410","450-430","450-590","470-10","470-30","470-170","470-190","470-210","470-230","470-250","470-270","470-330","470-350","470-370","470-390","470-410","470-430","470-570","470-590","490-10","490-30","490-50","490-190","490-210","490-230","490-250","490-270","490-290","490-310","490-330","490-350","490-370","490-390","490-410","490-550","490-570","490-590","510-10","510-30","510-50","510-70","510-210","510-230","510-250","510-270","510-290","510-310","510-330","510-350","510-370","510-390","510-530","510-550","510-570","510-590","530-10","530-30","530-50","530-70","530-90","530-230","530-250","530-270","530-290","530-310","530-330","530-350","530-370","530-510","530-530","530-550","530-570","530-590","550-10","550-30","550-50","550-70","550-90","550-110","550-250","550-270","550-290","550-310","550-330","550-350","550-490","550-510","550-530","550-550","550-570","550-590","570-10","570-30","570-70","570-90","570-110","570-270","570-290","570-310","570-330","570-470","570-490","570-510","570-530","570-550","570-570","570-590","590-10","590-30","590-50","590-70","590-90","590-110","590-250","590-270","590-290","590-310","590-330","590-350","590-490","590-510","590-530","590-550","590-570","590-590","610-10","610-30","610-50","610-70","610-90","610-230","610-250","610-270","610-290","610-310","610-330","610-350","610-370","610-510","610-530","610-550","610-570","610-590","630-10","630-30","630-50","630-70","630-210","630-230","630-250","630-270","630-290","630-310","630-330","630-350","630-370","630-390","630-530","630-550","630-570","630-590","650-10","650-30","650-50","650-190","650-210","650-230","650-250","650-270","650-290","650-310","650-330","650-350","650-370","650-390","650-410","650-550","650-570","650-590","670-10","670-30","670-170","670-190","670-210","670-230","670-250","670-270","670-290","670-310","670-330","670-350","670-370","670-390","670-410","670-430","670-570","670-590","690-10","690-170","690-190","690-210","690-230","690-250","690-270","690-330","690-350","690-370","690-390","690-410","690-430","690-590","710-10","710-150","710-170","710-190","710-210","710-230","710-250","710-350","710-370","710-390","710-410","710-430","710-450","710-590","730-10","730-150","730-170","730-190","730-210","730-230","730-250","730-350","730-370","730-390","730-410","730-430","730-450","730-590","750-10","750-150","750-170","750-190","750-210","750-230","750-250","750-350","750-370","750-390","750-410","750-430","750-450","750-590","770-10","770-150","770-170","770-190","770-210","770-230","770-250","770-350","770-370","770-390","770-410","770-430","770-450","770-590","790-10","790-150","790-170","790-190","790-210","790-230","790-250","790-350","790-370","790-390","790-410","790-430","790-450","790-590","810-10","810-150","810-170","810-190","810-210","810-230","810-250","810-350","810-370","810-390","810-410","810-430","810-450","810-590","830-10","830-150","830-170","830-190","830-210","830-230","830-250","830-350","830-370","830-390","830-410","830-430","830-450","830-590","850-10","850-150","850-170","850-190","850-210","850-230","850-250","850-350","850-370","850-390","850-410","850-430","850-450","850-590","870-10","870-150","870-170","870-190","870-210","870-230","870-250","870-350","870-370","870-390","870-410","870-430","870-450","870-590","890-10","890-150","890-170","890-190","890-210","890-230","890-250","890-270","890-330","890-350","890-370","890-390","890-410","890-430","890-450","890-590","910-10","910-150","910-170","910-190","910-210","910-230","910-250","910-270","910-290","910-310","910-330","910-350","910-370","910-390","910-410","910-430","910-450","910-590","930-10","930-150","930-170","930-190","930-210","930-230","930-250","930-270","930-290","930-310","930-330","930-350","930-370","930-390","930-410","930-430","930-450","930-590","950-10","950-150","950-170","950-190","950-210","950-230","950-250","950-270","950-290","950-310","950-330","950-350","950-370","950-390","950-410","950-430","950-450","950-590","970-10","970-150","970-170","970-190","970-210","970-230","970-250","970-270","970-330","970-350","970-370","970-390","970-410","970-430","970-450","970-590","990-10","990-150","990-170","990-190","990-210","990-230","990-250","990-350","990-370","990-390","990-410","990-430","990-450","990-590","1010-10","1010-150","1010-170","1010-190","1010-210","1010-230","1010-370","1010-390","1010-410","1010-430","1010-450","1010-590","1030-10","1030-150","1030-170","1030-190","1030-210","1030-390","1030-410","1030-430","1030-450","1030-590","1050-10","1050-150","1050-170","1050-190","1050-410","1050-430","1050-450","1050-590","1070-10","1070-590","1090-10","1090-290","1090-310","1090-590","1110-10","1110-270","1110-290","1110-310","1110-330","1110-590","1130-10","1130-30","1130-250","1130-270","1130-290","1130-310","1130-330","1130-350","1130-570","1130-590","1150-10","1150-30","1150-50","1150-230","1150-250","1150-270","1150-290","1150-310","1150-330","1150-350","1150-370","1150-550","1150-570","1150-590","1170-10","1170-30","1170-50","1170-70","1170-210","1170-230","1170-250","1170-270","1170-290","1170-310","1170-330","1170-350","1170-370","1170-390","1170-530","1170-550","1170-570","1170-590","1190-10","1190-30","1190-50","1190-70","1190-90","1190-110","1190-130","1190-150","1190-170","1190-190","1190-210","1190-230","1190-250","1190-270","1190-290","1190-310","1190-330","1190-350","1190-370","1190-390","1190-410","1190-430","1190-450","1190-470","1190-490","1190-510","1190-530","1190-550","1190-570","1190-590" ];
finishes["Intermediate"] = [ "570-250", "570-230", "570-210","570-190", "570-170", "570-150", "570-130" ];

starts["Intermediate 2"] = "550-90";
tracks["Intermediate 2"] = [ "10-10","10-30","10-50","10-70","10-90","10-110","10-130","10-150","10-170","10-190","10-210","10-230","10-250","10-270","10-290","10-310","10-330","10-350","10-370","10-390","10-410","10-430","10-450","10-470","10-490","10-510","10-530","10-550","10-570","10-590","30-10","30-30","30-50","30-70","30-530","30-550","30-570","30-590","50-10","50-30","50-50","50-550","50-570","50-590","70-10","70-30","70-570","70-590","90-10","90-590","110-10","110-590","130-10","130-590","150-10","150-590","170-10","170-190","170-210","170-230","170-250","170-270","170-290","170-310","170-330","170-350","170-370","170-390","170-410","170-590","190-10","190-170","190-190","190-210","190-230","190-250","190-270","190-290","190-310","190-330","190-350","190-370","190-390","190-410","190-430","190-590","210-10","210-170","210-190","210-210","210-230","210-250","210-270","210-290","210-310","210-330","210-350","210-370","210-390","210-410","210-430","210-590","230-10","230-170","230-190","230-210","230-230","230-250","230-270","230-290","230-310","230-330","230-350","230-370","230-390","230-410","230-430","230-590","250-10","250-170","250-190","250-210","250-230","250-250","250-270","250-290","250-310","250-330","250-350","250-370","250-390","250-410","250-590","270-10","270-170","270-190","270-210","270-230","270-250","270-270","270-290","270-310","270-590","290-10","290-170","290-190","290-210","290-230","290-250","290-270","290-290","290-570","290-590","310-10","310-170","310-190","310-210","310-230","310-250","310-270","310-550","310-570","310-590","330-10","330-170","330-190","330-210","330-230","330-250","330-530","330-550","330-570","330-590","350-10","350-170","350-190","350-210","350-230","350-250","350-510","350-530","350-550","350-570","350-590","370-10","370-170","370-190","370-210","370-230","370-250","370-490","370-510","370-530","370-550","370-570","370-590","390-10","390-170","390-190","390-210","390-230","390-250","390-470","390-490","390-510","390-530","390-550","390-570","390-590","410-10","410-170","410-190","410-210","410-230","410-250","410-410","410-430","410-450","410-470","410-490","410-510","410-530","410-550","410-570","410-590","430-10","430-170","430-190","430-210","430-230","430-250","430-410","430-430","430-450","430-470","430-490","430-510","430-530","430-550","430-570","430-590","450-10","450-170","450-190","450-210","450-230","450-250","450-410","450-430","450-450","450-470","450-490","450-510","450-530","450-550","450-570","450-590","470-10","470-170","470-190","470-210","470-230","470-250","470-410","470-430","470-450","470-470","470-490","470-510","470-530","470-550","470-570","470-590","490-10","490-170","490-190","490-210","490-230","490-250","490-410","490-430","490-450","490-470","490-490","490-510","490-530","490-550","490-570","490-590","510-10","510-170","510-190","510-210","510-230","510-250","510-410","510-430","510-450","510-470","510-490","510-510","510-530","510-550","510-570","510-590","530-10","530-170","530-190","530-210","530-230","530-250","530-410","530-430","530-450","530-470","530-490","530-510","530-530","530-550","530-570","530-590","550-10","550-170","550-190","550-210","550-230","550-250","550-410","550-430","550-450","550-470","550-490","550-510","550-530","550-550","550-570","550-590","570-10","570-170","570-190","570-210","570-230","570-250","570-410","570-430","570-450","570-470","570-490","570-510","570-530","570-550","570-570","570-590","590-10","590-170","590-190","590-210","590-230","590-250","590-410","590-430","590-450","590-470","590-490","590-510","590-530","590-550","590-570","590-590","610-10","610-170","610-190","610-210","610-230","610-250","610-410","610-430","610-450","610-470","610-490","610-510","610-530","610-550","610-570","610-590","630-10","630-170","630-190","630-210","630-230","630-250","630-410","630-430","630-450","630-470","630-490","630-510","630-530","630-550","630-570","630-590","650-10","650-170","650-190","650-210","650-230","650-250","650-410","650-430","650-450","650-470","650-490","650-510","650-530","650-550","650-570","650-590","670-10","670-170","670-190","670-210","670-230","670-250","670-410","670-430","670-450","670-470","670-490","670-510","670-530","670-550","670-570","670-590","690-10","690-170","690-190","690-210","690-230","690-250","690-410","690-430","690-450","690-470","690-490","690-510","690-530","690-550","690-570","690-590","710-10","710-170","710-190","710-210","710-230","710-250","710-410","710-430","710-450","710-470","710-490","710-510","710-530","710-550","710-570","710-590","730-10","730-170","730-190","730-210","730-230","730-250","730-410","730-430","730-450","730-470","730-490","730-510","730-530","730-550","730-570","730-590","750-10","750-170","750-190","750-210","750-230","750-250","750-410","750-430","750-450","750-470","750-490","750-510","750-530","750-550","750-570","750-590","770-10","770-170","770-190","770-210","770-230","770-250","770-410","770-430","770-450","770-470","770-490","770-510","770-530","770-550","770-570","770-590","790-10","790-170","790-190","790-210","790-230","790-250","790-410","790-430","790-450","790-470","790-490","790-510","790-530","790-550","790-570","790-590","810-10","810-170","810-190","810-210","810-230","810-250","810-470","810-490","810-510","810-530","810-550","810-570","810-590","830-10","830-170","830-190","830-210","830-230","830-250","830-490","830-510","830-530","830-550","830-570","830-590","850-10","850-170","850-190","850-210","850-230","850-250","850-510","850-530","850-550","850-570","850-590","870-10","870-170","870-190","870-210","870-230","870-250","870-530","870-550","870-570","870-590","890-10","890-170","890-190","890-210","890-230","890-250","890-270","890-550","890-570","890-590","910-10","910-170","910-190","910-210","910-230","910-250","910-270","910-290","910-570","910-590","930-10","930-170","930-190","930-210","930-230","930-250","930-270","930-290","930-310","930-590","950-10","950-170","950-190","950-210","950-230","950-250","950-270","950-290","950-310","950-330","950-350","950-370","950-390","950-410","950-590","970-10","970-170","970-190","970-210","970-230","970-250","970-270","970-290","970-310","970-330","970-350","970-370","970-390","970-410","970-430","970-590","990-10","990-170","990-190","990-210","990-230","990-250","990-270","990-290","990-310","990-330","990-350","990-370","990-390","990-410","990-430","990-590","1010-10","1010-170","1010-190","1010-210","1010-230","1010-250","1010-270","1010-290","1010-310","1010-330","1010-350","1010-370","1010-390","1010-410","1010-430","1010-590","1030-10","1030-190","1030-210","1030-230","1030-250","1030-270","1030-290","1030-310","1030-330","1030-350","1030-370","1030-390","1030-410","1030-590","1050-10","1050-590","1070-10","1070-590","1090-10","1090-590","1110-10","1110-590","1130-10","1130-30","1130-570","1130-590","1150-10","1150-30","1150-50","1150-550","1150-570","1150-590","1170-10","1170-30","1170-50","1170-70","1170-530","1170-550","1170-570","1170-590","1190-10","1190-30","1190-50","1190-70","1190-90","1190-110","1190-130","1190-150","1190-170","1190-190","1190-210","1190-230","1190-250","1190-270","1190-290","1190-310","1190-330","1190-350","1190-370","1190-390","1190-410","1190-430","1190-450","1190-470","1190-490","1190-510","1190-530","1190-550","1190-570","1190-590" ];
finishes["Intermediate 2"] = [ "570-150", "570-130", "570-110", "570-90", "570-70", "570-50", "570-30" ]

starts["Hard"] = "550-50";
tracks["Hard"] = [ "10-10","10-30","10-50","10-70","10-90","10-110","10-130","10-150","10-170","10-190","10-210","10-230","10-250","10-270","10-290","10-310","10-330","10-350","10-370","10-390","10-410","10-430","10-450","10-470","10-490","10-510","10-530","10-550","10-570","10-590","30-10","30-30","30-50","30-70","30-90","30-110","30-130","30-150","30-170","30-190","30-210","30-230","30-250","30-270","30-290","30-310","30-330","30-350","30-550","30-570","30-590","50-10","50-30","50-50","50-130","50-150","50-170","50-190","50-210","50-230","50-250","50-270","50-290","50-310","50-330","50-570","50-590","70-10","70-30","70-150","70-170","70-190","70-210","70-230","70-250","70-270","70-290","70-310","70-590","90-10","90-170","90-190","90-210","90-230","90-250","90-270","90-290","90-310","90-390","90-410","90-430","90-450","90-470","90-490","90-590","110-10","110-90","110-110","110-290","110-310","110-330","110-410","110-430","110-450","110-470","110-490","110-510","110-590","130-10","130-90","130-110","130-130","130-310","130-330","130-350","130-430","130-450","130-470","130-490","130-510","130-590","150-10","150-90","150-110","150-130","150-150","150-330","150-350","150-370","150-450","150-470","150-490","150-510","150-590","170-10","170-90","170-110","170-130","170-150","170-170","170-190","170-210","170-230","170-250","170-270","170-350","170-370","170-390","170-470","170-490","170-510","170-590","190-10","190-90","190-110","190-130","190-150","190-170","190-190","190-210","190-230","190-250","190-270","190-290","190-370","190-390","190-410","190-490","190-510","190-590","210-10","210-90","210-110","210-130","210-150","210-270","210-290","210-310","210-390","210-410","210-430","210-510","210-590","230-10","230-90","230-110","230-130","230-290","230-310","230-330","230-410","230-430","230-510","230-590","250-10","250-90","250-110","250-310","250-330","250-410","250-430","250-510","250-590","270-10","270-170","270-190","270-210","270-230","270-310","270-330","270-410","270-430","270-510","270-590","290-10","290-150","290-170","290-190","290-210","290-230","290-310","290-330","290-350","290-510","290-590","310-10","310-30","310-130","310-150","310-310","310-330","310-350","310-490","310-510","310-590","330-10","330-30","330-50","330-70","330-90","330-110","330-130","330-290","330-310","330-330","330-350","330-370","330-470","330-490","330-570","330-590","350-10","350-30","350-50","350-70","350-90","350-110","350-270","350-290","350-310","350-330","350-350","350-370","350-390","350-410","350-430","350-450","350-470","350-550","350-570","350-590","370-10","370-30","370-50","370-70","370-90","370-190","370-210","370-230","370-250","370-270","370-290","370-310","370-330","370-350","370-370","370-390","370-410","370-430","370-450","370-530","370-550","370-570","370-590","390-10","390-30","390-50","390-70","390-170","390-190","390-210","390-230","390-250","390-390","390-410","390-430","390-510","390-530","390-550","390-570","390-590","410-10","410-30","410-50","410-150","410-170","410-190","410-210","410-230","410-410","410-430","410-510","410-530","410-550","410-570","410-590","430-10","430-30","430-130","430-150","430-170","430-190","430-210","430-230","430-410","430-430","430-510","430-530","430-550","430-570","430-590","450-10","450-110","450-130","450-150","450-170","450-190","450-210","450-230","450-310","450-330","450-410","450-430","450-510","450-530","450-550","450-570","450-590","470-10","470-90","470-110","470-130","470-150","470-170","470-190","470-210","470-230","470-310","470-330","470-410","470-430","470-450","470-530","470-550","470-570","470-590","490-10","490-90","490-110","490-130","490-150","490-170","490-190","490-210","490-230","490-310","490-330","490-350","490-430","490-450","490-470","490-550","490-570","490-590","510-10","510-90","510-110","510-130","510-150","510-170","510-190","510-210","510-230","510-250","510-330","510-350","510-370","510-450","510-470","510-490","510-570","510-590","530-10","530-90","530-110","530-130","530-150","530-170","530-190","530-210","530-230","530-250","530-270","530-350","530-370","530-390","530-470","530-490","530-510","530-590","550-10","550-90","550-110","550-130","550-150","550-170","550-190","550-210","550-230","550-270","550-290","550-370","550-390","550-410","550-490","550-510","550-590","570-10","570-90","570-110","570-130","570-150","570-170","570-190","570-210","570-290","570-310","570-390","570-410","570-430","570-590","590-10","590-90","590-110","590-130","590-150","590-170","590-190","590-310","590-330","590-410","590-430","590-450","590-590","610-10","610-90","610-110","610-130","610-150","610-170","610-330","610-350","610-430","610-450","610-470","610-570","610-590","630-10","630-90","630-110","630-130","630-150","630-230","630-250","630-350","630-370","630-450","630-470","630-490","630-510","630-530","630-550","630-570","630-590","650-10","650-90","650-110","650-130","650-210","650-230","650-250","650-330","650-350","650-370","650-390","650-470","650-490","650-510","650-530","650-550","650-570","650-590","670-10","670-90","670-110","670-190","670-210","670-230","670-310","670-330","670-350","670-390","670-410","670-490","670-510","670-530","670-550","670-570","670-590","690-10","690-90","690-170","690-190","690-210","690-290","690-310","690-330","690-410","690-430","690-510","690-530","690-550","690-570","690-590","710-10","710-90","710-170","710-190","710-270","710-290","710-310","710-430","710-450","710-530","710-550","710-570","710-590","730-10","730-90","730-170","730-250","730-270","730-290","730-370","730-450","730-470","730-550","730-570","730-590","750-10","750-90","750-170","750-250","750-270","750-350","750-370","750-390","750-470","750-490","750-570","750-590","770-10","770-90","770-170","770-250","770-270","770-350","770-370","770-390","770-410","770-490","770-510","770-590","790-10","790-90","790-170","790-250","790-270","790-350","790-370","790-390","790-410","790-490","790-510","790-590","810-10","810-90","810-170","810-250","810-270","810-350","810-370","810-390","810-410","810-490","810-510","810-590","830-10","830-90","830-170","830-250","830-270","830-350","830-370","830-390","830-410","830-490","830-510","830-590","850-10","850-90","850-170","850-250","850-270","850-350","850-370","850-390","850-410","850-490","850-510","850-590","870-10","870-90","870-170","870-250","870-270","870-350","870-370","870-390","870-410","870-490","870-510","870-590","890-10","890-90","890-170","890-250","890-270","890-350","890-370","890-390","890-410","890-490","890-510","890-590","910-10","910-90","910-170","910-250","910-270","910-350","910-370","910-390","910-410","910-490","910-510","910-590","930-10","930-170","930-350","930-370","930-390","930-410","930-490","930-510","930-590","950-10","950-170","950-190","950-330","950-350","950-370","950-390","950-410","950-490","950-510","950-590","970-10","970-170","970-190","970-330","970-350","970-370","970-390","970-410","970-490","970-510","970-590","990-10","990-90","990-110","990-130","990-150","990-170","990-190","990-210","990-230","990-250","990-270","990-290","990-310","990-330","990-350","990-370","990-390","990-410","990-490","990-510","990-590","1010-10","1010-70","1010-90","1010-110","1010-130","1010-150","1010-170","1010-190","1010-210","1010-230","1010-250","1010-270","1010-290","1010-310","1010-330","1010-350","1010-370","1010-390","1010-410","1010-490","1010-510","1010-590","1030-10","1030-50","1030-70","1030-490","1030-510","1030-590","1050-10","1050-30","1050-50","1050-490","1050-510","1050-590","1070-10","1070-30","1070-490","1070-510","1070-590","1090-10","1090-90","1090-110","1090-130","1090-150","1090-170","1090-190","1090-210","1090-230","1090-250","1090-270","1090-290","1090-310","1090-330","1090-350","1090-370","1090-390","1090-410","1090-430","1090-450","1090-470","1090-490","1090-510","1090-590","1110-10","1110-90","1110-110","1110-130","1110-150","1110-170","1110-190","1110-210","1110-230","1110-250","1110-270","1110-290","1110-310","1110-330","1110-350","1110-370","1110-390","1110-410","1110-430","1110-450","1110-470","1110-490","1110-510","1110-590","1130-10","1130-30","1130-570","1130-590","1150-10","1150-30","1150-50","1150-550","1150-570","1150-590","1170-10","1170-30","1170-50","1170-70","1170-530","1170-550","1170-570","1170-590","1190-10","1190-30","1190-50","1190-70","1190-90","1190-110","1190-130","1190-150","1190-170","1190-190","1190-210","1190-230","1190-250","1190-270","1190-290","1190-310","1190-330","1190-350","1190-370","1190-390","1190-410","1190-430","1190-450","1190-470","1190-490","1190-510","1190-530","1190-550","1190-570","1190-590" ];
finishes["Hard"] = [ "570-30","570-50","570-70" ];