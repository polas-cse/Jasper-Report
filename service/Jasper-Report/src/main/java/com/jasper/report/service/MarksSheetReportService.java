package com.jasper.report.service;

import com.jasper.report.data.Data;
import com.jasper.report.model.MarkSheetModel;
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
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class MarksSheetReportService {

    @Autowired
    private ResourceLoader resourceLoader;

    public void markSheetReport(ServletOutputStream outputStream) {
        MarkSheetModel info = Data.markSheetData();
        Map<String, Object> parameters = new HashMap<>();
        String reportPath = Constant.JASPER_REPORT_PATH + ReportUtil.MARK_SHEET_FOLDER;
        String imagePath = Constant.CLASS_PATH + Constant.IMAGE_PATH + ReportUtil.IMAGE_FOLDER;
        try {
            Resource resource = null;
            parameters.put("info", info);
            parameters.put("marksList", info.getMarksList());
            parameters.put("reportPath", reportPath);
            parameters.put("imagePath", imagePath);

            resource = resourceLoader.getResource(Constant.CLASS_PATH + reportPath + ReportUtil.MARK_SHEET);
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
