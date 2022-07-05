// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,



  // Implement Keycloak Port 9090 will be active
  baseURL: 'http://localhost:9090/doer-erp/api',

  // URL for Live Server
  // baseURL: 'https://schoolerp.celloscope.net/doer-erp/api',


  // Implement Keycloak Port 9090 will be active 
  uploadImageUrl: 'http://localhost:9090/doer-erp/api/v1/file/receipt/download/files/',

  // URL for Live Server
  // uploadImageUrl: 'https://schoolerp.celloscope.net/doer-erp/api/v1/file/receipt/download/files/',





  CLASS_LIST: '/v1/class-list',

  CLASS_TEST_LIST: '/v1/class/test/list',

  PARTICULAR_CLASS_BY_TEACHER_USERNAME: '/v1/particular/class/byteacher/username',

  CREATE_ATTENDANCE: '/v1/create/attendance',

  CLASS_ROOM_LIST: '/v1/class/room/list',

  PARTICULAR_CLASS_ROOM_LIST: '/v1/particular/class/room',

  UPDATE_CLASS_ROOM: '/v1/update/class/room',

  INSTITUTE_CLASS_GROUP_LIST: '/v1/institute/class/group/list',



  INSTITUTE_CLASS_SECTION_LIST: '/v1/institute-class-section-list',




  createTeacherProfile: '/v1/create/teacher',


  viewTeacherProfile: '/v1/view/teacher/profile',

  updateTeacherProfile: '/v1/update/teacher/profile',

  allTeacherList: '/v1/teacher/list',

  particularTeacherList: '/v1/particular/teacher/list',

  editTeacherList: '/v1/edit/teacher',

  moveUploadedImage: '/v1/uploaded/file/move',


  GET_STUDENT_TEXTBOOK_LIST: '/v1/student-text-book-list',

  GET_TEACHER_BY_OID: '/v1/teacher/by/oid',

  GET_GUARDIAN_BY_OID: '/v1/guardian/by/oid',

  addGuardianProfileInfo: '/v1/create/guardian',

  SAVE_GUARDIAN: '/v1/create/guardian',

  guardianList: '/v1/guardian/list',

  userLogin: '/v1/user/login',

  changePassword: '/v1/user/changepassword',

  createUserAccount: '/v1/user/createuseraccount',

  createClass: '/v1/create-class',

  dashboardInfo: '/v1/dashboard/info',

  instituteDashboardInfo: '/v1/get-institute-dashboard-info',

  studentDashboardInfo: '/v1/get-student-dashboard-info',

  guardianDashboardInfo: '/v1/get-guardian-dashboard-info',






  dashboardInfoBdex: '/v1/dashboard/info/bdex',

  dashboardInfoAgent: '/v1/dashboard/info/agent',

  addNewTeacher: '/v1/create/teacher',








  addNewRoutine: '/v1/create-class-routine',







  createSubject: '/v1/create/subject',

  allRoutineList: '/v1/routine/list',

  particularRoutineList: '/v1/particular/routine/list',










  allSectionByParicularClassSection: '/v1/institute-class-section-list',






  keycloakUserInfo: '/v1/keycloak/user/info',

  getAllItemName: '/v1/get/item/name/list',

  allProductList: '/v1/product/list',

  itemNameList: '/v1/get/item/name/list',

  getAllProductCategoryUrl: '/v1/get/all/product/category',

  productListByCategoryForBatchItem: '/v1/product/list/batch/item',

  productListByCategoryForIndividualItem: '/v1/product/list/individual/item',

  createProduct: '/v1/create/product',


  getTextbookList: '/v1/institute/class/textbook/list',


  // uploadImage: '/v1/file/receipt/upload',

  allRequisitionList: '/v1/requisition/list',

  allRequisitionListForAdmin: '/v1/requisition/list/admin',

  activerequisitionlist: '/v1/active/requisition/list',

  bdexRequisitionList: '/v1/bdex/requisition/list',

  advancebdexRequisitionList: '/v1/advance/requisition/list/bdex',

  curriculumList: '/v1/curriculum/list',

  shiftList: '/v1/shift/list',


  groupList: '/v1/group/list',

  uploadImage: '/v1/file/image/upload',

  getAllSection: '/v1/section/list',

  getAllSubjectBySectionOid: '/v1/subject/section/oid',

  getClassTestBySCSToid: '/v1/class/test/scst/oid',

  getAllSubject: '/v1/subject/list',

  createClassRoom: '/v1/add/class/room',


  addExam: '/v1/create/exam',

  getExamByOid: '/v1/exam/by/oid',

  EXAM_TEXT_BOOK_BY_OID: '/v1/get-exam-textbook-by-oid',

  getSectionByOid: '/v1/get-institute-section-by-oid',

  getClassByOid: '/v1/get-class-by-oid',

  editSection: '/v1/update-institute-class-section',

  editClass: '/v1/update-class',

  editExam: "/v1/edit-exam",

  createClassTest: '/v1/add/class/test',

  sectionListByClassOid: '/v1/particular/section',


  APPROVE_EXAM: "/v1/approve-exam",
  REJECT_EXAM: "/v1/reject-exam",
  PUBLISH_EXAM: "/v1/publish-exam",



  routineList: '/v1/routine/single',

  attendanceListByMonth: '/v1/attendance/list/by/month',





  getSubjectBySectionOid: '/v1/subject/section/oid',

  createExam: '/v1/create/exam',

  examList: '/v1/exam/list',

  educationSystemList: '/v1/education/system/list',
  educationBoardList: '/v1/education-board-list',
  educationShiftList: '/v1/education/shift/list',
  educationShift: '/v1/education/shift/by/oid',
  educationGradingSystemList: '/v1/education-grading-system-list',

  saveNotice: '/v1/save-notice',

  getNoticeList: '/v1/get-notice-list',

  getNoticeView: '/v1/get-notice-by-oid',

  editNotice: '/v1/update-notice',

  // Exam
  GET_EXAM_LIST: '/v1/get-exam-list',

  GET_EXAM_LIST_BY_SECTION: '/v1/exam-routine-list',

  EXAM_ROUTINE_LIST: '/v1/exam-routine-list',

  SAVE_EXAM_ROUTINE: '/v1/save-exam-routine',

  UPDATE_EXAM_ROUTINE: '/v1/update-exam-routine',

  SAVE_EXAM_RESULT: '/v1/save-exam-result',

  GET_EXAM_RESULT_LIST: '/v1/get-exam-result-list',

  GET_EXAM_RESULT_LIST_BY_STUDENT: '/v1/get-exam-result-list-by-student',

  EXAM_RESULT_BY_STUDENT_ID: "/v1/exam-result-by-student-id",

  EXAM_MARKSHIT_BY_STUDENT_ID: "/v1/exam-markshit-by-student-id",
  GET_EXAM_RESULT_BY_SECTION_OID: '/v1/get-exam-result-by-section-oid',

  GET_EXAM_RESULT_DETAIL_LIST: '/v1/get-exam-result-detail-list',

  GET_STUDENT_LIST_BY_EXAMTEXTBOOK: '/v1/get-student-list-by-examtextbook',

  PUBLISH_EXAM_RESULT: '/v1/publish-exam-result',


  // admission

  ADMISSION_APPLICATION_BY_OID: '/v1/admission-application-by-oid',
  admissionForm: '/v1/create/applicant',
  admissionApplicationForm: '/v1/save-admission-application',
  allAdmissionList: '/v1/admission-list',
  approveAdmission: '/v1/admission-approval',





  // routine

  weekDayList: '/v1/week/day/name/list',

  GET_CLASS_PERIOD_LIST: '/v1/get-class-priod-list',

  GET_ATTENDANCE_BY_STUDENT_OID: '/v1/get-attendance-by-student-oid',

  CHECK_ATTENDANCE: '/v1/check-student-attendance',


  GET_CLASS_ROUTINE_DETAILS_BY_OID: '/v1/get-class-routine-details-by-oid',

  GET_CLASS_ROUTINE_DETAILS_BY_TEACHER_OID: '/v1/get-class-routine-details-by-teacher-oid',
  GET_EXISTING_CLASS_ROUTINE_DETAILS_BY_OID: '/v1/get-existing-class-routine-details-by-oid',

  GET_EXAM_ROUTINE_BY_OID: '/v1/get-exam-routine-by-oid',

  // classRoutineList: '/v1/class/priod/list',

  CLASS_ROUTINE_DETAILS_SAVE: '/v1/class-routine-details-save',

  GET_CLASS_ROUTINE_LIST: '/v1/get-class-routine-list',

  CLASS_ROUTINE_DETAILS_UPDATE: '/v1/class-routine-details-update',

  CHECK_CLASS_ROUTINE_BY_SECTION_OID: '/v1/check-class-routine-by-section-oid',

  // routine





  //teacherList
  teacherList: '/v1/teacher/by/oid',


  //textbook
  textbookList: '/v1/institute/class/textbook/list',

  GET_TEACHER_BY_GUARDIAN: '/v1/get-teacher-by-guardian-oid',

  GET_EDUCATION_INFO: '/v1/get-education-info',


  //sectionList
  sectionList: '/v1/institute/class/section/list',


  //student attendance

  saveStudentAttendance: '/v1/save/student/attendance',
  UPDATE_STUDENT_ATTENDANCE: '/v1/update-student-attendance',
  getStudentAttendanceList: '/v1/student/attendance/list',
  GET_STUDENT_ATTENDANCE_BY_OID: '/v1/get-student-attendance-by-oid',
  studentAttendanceDetails: '/v1/student/attendance/details',

  // New API End-Point Start form here
  GET_DISTRICT_LIST: '/v1/get-district-list',

  //Institute
  createInstitute: "/v1/create-institute",
  getInstituteByOid: "/v1/get-institute-by-oid",
  editInstitute: "v1/edit-institute",
  instituteByOid: "v1/institute-oid",
  INSTITUTE_CLASS_LIST: '/v1/institute-class-list',
  GET_INSTITUTE_INFO: '/v1/get-institute-info',
  GET_INSTITUTE_LIST: '/v1/get-institute-list',
  instituteTypeList: '/v1/institute-type-list',
  educationTypeList: '/v1/education-type-list',
  instituteVersionList: '/v1/institute-version-list',
  instituteSessionList: '/v1/institute-session-list',
  instituteShiftList: '/v1/institute-shift-list',

  //sectionList



  createClassSection: '/v1/create-section',


  // New API End-Point Start form here

  particularStudentList: '/v1/particular-student-list',
  UPDATE_STUDENT: '/v1/update-student',
  UPDATE_GUARDIAN: '/v1/update-guardian',
  CREATE_STUDENT_PROFILE: '/v1/create-student-profile',
  UPDATE_STUDENT_PROFILE: '/v1/update-student-profile-by-username',
  STUDENT_PROFILE: '/v1/student-profile',
  allStudentList: '/v1/student-list',
  //studentProfileInfoByOid: '/v1/get-student-by-oid',
  GET_STUDENT_BY_OID: '/v1/get-student-by-oid',
  guardianStudentList: '/v1/guardian/student/list',
  childList: '/v1/child-list',
  addNewStudent: '/v1/create/student',
  PARTICULAR_STUDENT_BY_SECTION_OID: '/v1/student-list-by-section-oid',




  UPDATE_TEACHER: '/v1/update-teacher',


  //  Fees API Start form here
  GET_FEE_HEAD_LIST: '/v1/get-fee-head-list',
  GET_INACTIVE_FEE_HEAD_LIST: '/v1/get-inactive-fee-head-list',
  INACTIVE_FEE_HEAD: '/v1/inactive-fee-head',
  ACTIVE_FEE_HEAD: '/v1/active-fee-head',
  GET_FEES_SETTING_DETAIL_BY_INSTITUTE_AND_CLASS_OID: '/v1/get-fees-setting-detail-by-institute-and-class-oid',
  CREATE_FEES_SETTINGS: '/v1/create-fees-setting',
  GET_DUE_FEES_DETAIL_BY_STUDENT: '/v1/get-due-fees-detail-by-student',
  GET_DUE_FEES_DETAIL_BY_APPLICATION_TRACKING_ID: '/v1/get-due-fees-detail-by-application-tracking-id',
  CREATE_FEES_COLLECTION_WITH_DETAIL: '/v1/create-fees-collection-with-detail',
  GET_FEES_COLLECTION_DETAIL_BY_STUDENT: '/v1/get-fees-collection-detail-by-student',
  GET_PAYMENT_MODE_LIST: '/v1/get-payment-mode-list',
  CREATE_REPEATED_FEES: '/v1/create-repeated-fees',

  // Report part api end-point
  ATTENDANCE_REPORT_BY_SECTION: '/v1/get-attendance-report-by-section',
  ATTENDANCE_REPORT_BY_STUDENT_OID: '/v1/get-attendance-report-by-student-oid',

  GET_DUE_FEES_REPORT_BY_STUDENT_ID: '/v1/get-due-fees-detail-report-by-student-id',
  GET_DUE_FEES_REPORT_BY_INSTITUTE_CLASS: '/v1/get-due-fees-report-by-institute-class',
  GET_DUE_FEES_HISTORY_REPORT_BY_INSTITUTE_CLASS: '/v1/get-due-fees-history-report-by-institute-class',
  GET_FEES_COLLECTION_REPORT_BY_STUDENT_ID: '/v1/get-fees-collection-report-by-student-id',
  GET_FEES_COLLECTION_REPORT_BY_INSTITUTE_CLASS: '/v1/get-fees-collection-report-by-institute-class',
  GET_FEES_COLLECTION_DETAIL_REPORT_BY_INSTITUTE_CLASS: '/v1/get-fees-collection-detail-report-by-institute-class'



};
