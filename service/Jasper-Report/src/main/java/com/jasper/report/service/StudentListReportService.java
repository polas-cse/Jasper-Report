package com.jasper.report.service;


import com.jasper.report.data.Data;
import com.jasper.report.model.MarkSheetModel;
import com.jasper.report.model.StudentListReportModel;
import com.jasper.report.util.Constant;
import com.jasper.report.util.ReportUtil;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class StudentListReportService {

    @Autowired
    private ResourceLoader resourceLoader;
    public void studentListReport(OutputStream outputStream) {
        StudentListReportModel school = Data.studentListReportData();
        Map<String, Object> parameters = new HashMap<>();
        String reportPath = Constant.JASPER_REPORT_PATH + ReportUtil.STUDENT_FOLDER;
        try {
            Resource resource = null;
            parameters.put("school", school);
            parameters.put("studentList", school.getStudentList());
            parameters.put("reportPath", reportPath);
            resource = resourceLoader.getResource(Constant.CLASS_PATH + reportPath + ReportUtil.STUDENT_LIST);
            JasperReport jasperReport = JasperCompileManager.compileReport(resource.getInputStream());
            JasperPrint print = JasperFillManager.fillReport(jasperReport, parameters,
                    new JRBeanCollectionDataSource(Arrays.asList("NO LIST")));
            JasperExportManager.exportReportToPdfStream(print, outputStream);
        } catch (JRException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
