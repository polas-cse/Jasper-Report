package com.jasper.report.entity;

public class Marks {

    private String subjectName;
    private int subjectCode;
    private String latterGrade;
    private int gradePoint;

    public Marks() {
    }

    public Marks(String subjectName, int subjectCode, String latterGrade, int gradePoint) {
        this.subjectName = subjectName;
        this.subjectCode = subjectCode;
        this.latterGrade = latterGrade;
        this.gradePoint = gradePoint;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public int getSubjectCode() {
        return subjectCode;
    }

    public void setSubjectCode(int subjectCode) {
        this.subjectCode = subjectCode;
    }

    public String getLatterGrade() {
        return latterGrade;
    }

    public void setLatterGrade(String latterGrade) {
        this.latterGrade = latterGrade;
    }

    public int getGradePoint() {
        return gradePoint;
    }

    public void setGradePoint(int gradePoint) {
        this.gradePoint = gradePoint;
    }

}
