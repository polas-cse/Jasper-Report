package com.jasper.report.data;

import com.jasper.report.entity.Marks;
import com.jasper.report.entity.Student;
import com.jasper.report.model.MarkSheetModel;
import com.jasper.report.model.StudentListReportModel;

import java.util.List;

public class Data {


    public static MarkSheetModel markSheetData(){
        MarkSheetModel model = new MarkSheetModel();
        model.setStudentName("Md Polas Hossain");
        model.setFatherName("Rahiodul Islam");
        model.setMotherName("Parul Begum");
        model.setInstituteName("Paschim Naogaon High Naogaon");
        model.setCenterName("Naogaon");
        model.setType("Regular");
        model.setRollNo("315605");
        model.setRegistrationNo("284624");
        model.setGroup("Science");
        model.setDateOfBirth("05-03-1999");
        model.setGpa(5);
        List<Marks> marksList = List.of(
                new Marks("BANGLA",101,"A+",5),
                new Marks("ENGLISH",107,"A+",5),
                new Marks("MATHEMATICS",109,"A+",5),
                new Marks("ISLAM AND MORAL EDUCATION",111,"A+",5),
                new Marks("PHYSICS",136,"A+",5),
                new Marks("CHEMISTRY",137,"A+",5),
                new Marks("BIOLOGY",138,"A+",5),
                new Marks("BANGLADESH AND GLOBAL STUDIES",150,"A+",5),
                new Marks("AGRICULTURE STUDIES",134,"A+",5),
                new Marks("Computer",130,"A+",5)
        );
        model.setMarksList(marksList);
        return model;
    }

    public static StudentListReportModel studentListReportData(){
        StudentListReportModel model = new StudentListReportModel();
        model.setSchoolName("Paschim Naogaon High School");
        model.setClassName("Nine");
        model.setGroupName("Science");
        model.setSession("2020");
        model.setSectionName("Joba");
        List<Student> studentList = List.of(
                new Student("Polas", 1, 1001, 4.64f),
                new Student("Naime", 2, 1002, 4.84f),
                new Student("Shopon", 3, 1003, 5.00f),
                new Student("Jakariya", 2, 1004, 4.58f),
                new Student("Farhana", 2, 1005, 4.34f),
                new Student("Rasel", 2, 1006, 4.76f)
        );
        model.setStudentList(studentList);
        return model;
    }


}
