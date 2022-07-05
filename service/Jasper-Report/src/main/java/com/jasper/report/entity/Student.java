package com.jasper.report.entity;

public class Student {

    private String name;
    private int roll;
    private int registration;
    private float cgpa;

    public Student() {
    }

    public Student(String name, int roll, int registration, float cgpa) {
        this.name = name;
        this.roll = roll;
        this.registration = registration;
        this.cgpa = cgpa;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRoll() {
        return roll;
    }

    public void setRoll(int roll) {
        this.roll = roll;
    }

    public int getRegistration() {
        return registration;
    }

    public void setRegistration(int registration) {
        this.registration = registration;
    }

    public float getCgpa() {
        return cgpa;
    }

    public void setCgpa(float cgpa) {
        this.cgpa = cgpa;
    }
}
