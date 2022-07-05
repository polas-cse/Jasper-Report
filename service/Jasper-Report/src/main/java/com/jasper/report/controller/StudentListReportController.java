package com.jasper.report.controller;

import com.jasper.report.request.Request;
import com.jasper.report.service.StudentListReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@CrossOrigin("*")
@RestController
@RequestMapping("jasperreports/")
public class StudentListReportController {

    @Autowired
    private StudentListReportService service;

    @PostMapping("student-list")
    public void studentListReport(@RequestBody Request request, HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", String.format("inline; student-list.pdf"));
        service.studentListReport(response.getOutputStream());
    }

}
