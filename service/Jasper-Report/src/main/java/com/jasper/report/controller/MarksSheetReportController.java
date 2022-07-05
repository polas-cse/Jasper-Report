package com.jasper.report.controller;

import com.jasper.report.request.Request;
import com.jasper.report.service.MarksSheetReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@CrossOrigin("*")
@RestController
@RequestMapping("jasperreports/")
public class MarksSheetReportController {
    @Autowired
    private MarksSheetReportService service;

    @PostMapping("mark-sheet")
    public void markSheetReport(@RequestBody Request request, HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", String.format("inline; mark-sheet.pdf"));
        service.markSheetReport(response.getOutputStream());
    }
}
