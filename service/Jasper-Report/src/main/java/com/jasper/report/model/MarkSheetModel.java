package com.jasper.report.model;

import com.jasper.report.entity.Marks;

import java.util.List;

public class MarkSheetModel {

    private String studentName;
    private String fatherName;
    private String motherName;
    private String instituteName;
    private String centerName;
    private String type;
    private String rollNo;
    private String registrationNo;
    private String group;
    private String dateOfBirth;

    private float gpa;
    private List<Marks> marksList;

    public MarkSheetModel() {
    }

    public MarkSheetModel(String studentName, String fatherName, String motherName, String instituteName, String centerName,
                          String type, String rollNo, String registrationNo, String group, String dateOfBirth,
                          float gpa, List<Marks> marksList) {
        this.studentName = studentName;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.instituteName = instituteName;
        this.centerName = centerName;
        this.type = type;
        this.rollNo = rollNo;
        this.registrationNo = registrationNo;
        this.group = group;
        this.dateOfBirth = dateOfBirth;
        this.gpa = gpa;
        this.marksList = marksList;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getInstituteName() {
        return instituteName;
    }

    public void setInstituteName(String instituteName) {
        this.instituteName = instituteName;
    }

    public String getCenterName() {
        return centerName;
    }

    public void setCenterName(String centerName) {
        this.centerName = centerName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRollNo() {
        return rollNo;
    }

    public void setRollNo(String rollNo) {
        this.rollNo = rollNo;
    }

    public String getRegistrationNo() {
        return registrationNo;
    }

    public void setRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public float getGpa() {
        return gpa;
    }

    public void setGpa(float gpa) {
        this.gpa = gpa;
    }

    public List<Marks> getMarksList() {
        return marksList;
    }

    public void setMarksList(List<Marks> marksList) {
        this.marksList = marksList;
    }
}
