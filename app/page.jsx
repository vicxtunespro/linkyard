'use client'
import React, { useState } from 'react';

const ReportCardSystem = () => {
  // Sample student data - this would come from your API/database
  const [students] = useState([
    {
      id: 1,
      name: "NAKATO SARAH",
      class: "Senior 3 Blue",
      regNo: "KSS/2024/0156",
      term: "Term 1",
      year: "2024",
      classTeacher: "Mr. Okello James",
      subjects: [
        { name: "Mathematics", bot: 78, mot: 82, eot: 85, grade: "D1", remarks: "Excellent" },
        { name: "English Language", bot: 72, mot: 75, eot: 80, grade: "D1", remarks: "Very Good" },
        { name: "Physics", bot: 68, mot: 70, eot: 74, grade: "D2", remarks: "Good" },
        { name: "Chemistry", bot: 75, mot: 78, eot: 80, grade: "D1", remarks: "Very Good" },
        { name: "Biology", bot: 80, mot: 83, eot: 87, grade: "D1", remarks: "Excellent" },
        { name: "History", bot: 65, mot: 68, eot: 70, grade: "C6", remarks: "Fair" },
        { name: "Geography", bot: 70, mot: 72, eot: 75, grade: "D2", remarks: "Good" },
        { name: "CRE", bot: 88, mot: 90, eot: 92, grade: "D1", remarks: "Outstanding" }
      ],
      aggregate: 12,
      averageScore: 77.5,
      position: "5 / 48",
      classTeacherComment: "Sarah has demonstrated excellent academic performance this term. She is particularly strong in sciences and shows great dedication to her studies. I encourage her to work harder in History to improve her overall performance. Keep up the good work!",
      headteacherComment: "An outstanding performance. Sarah is a role model student who consistently excels. We encourage her to maintain this excellent trajectory.",
      nextTermDate: "April 29, 2024",
      feesBalance: 0
    },
    {
      id: 2,
      name: "MUKASA DAVID",
      class: "Senior 3 Blue",
      regNo: "KSS/2024/0157",
      term: "Term 1",
      year: "2024",
      classTeacher: "Mr. Okello James",
      subjects: [
        { name: "Mathematics", bot: 85, mot: 88, eot: 90, grade: "D1", remarks: "Outstanding" },
        { name: "English Language", bot: 80, mot: 82, eot: 85, grade: "D1", remarks: "Excellent" },
        { name: "Physics", bot: 82, mot: 85, eot: 88, grade: "D1", remarks: "Excellent" },
        { name: "Chemistry", bot: 78, mot: 80, eot: 83, grade: "D1", remarks: "Very Good" },
        { name: "Biology", bot: 75, mot: 78, eot: 80, grade: "D1", remarks: "Very Good" },
        { name: "History", bot: 70, mot: 72, eot: 75, grade: "D2", remarks: "Good" },
        { name: "Geography", bot: 73, mot: 75, eot: 78, grade: "D1", remarks: "Very Good" },
        { name: "CRE", bot: 90, mot: 92, eot: 95, grade: "D1", remarks: "Outstanding" }
      ],
      aggregate: 8,
      averageScore: 83.1,
      position: "2 / 48",
      classTeacherComment: "David is an exceptional student with consistent high performance across all subjects. His work ethic and discipline are commendable. He should continue with this momentum.",
      headteacherComment: "Excellent work! David continues to excel and set a high standard for his peers. We are proud of his achievements.",
      nextTermDate: "April 29, 2024",
      feesBalance: 0
    },
    {
      id: 3,
      name: "NALONGO FAITH",
      class: "Senior 3 Blue",
      regNo: "KSS/2024/0158",
      term: "Term 1",
      year: "2024",
      classTeacher: "Mr. Okello James",
      subjects: [
        { name: "Mathematics", bot: 60, mot: 63, eot: 65, grade: "C5", remarks: "Fair" },
        { name: "English Language", bot: 68, mot: 70, eot: 72, grade: "D2", remarks: "Good" },
        { name: "Physics", bot: 55, mot: 58, eot: 60, grade: "C5", remarks: "Fair" },
        { name: "Chemistry", bot: 62, mot: 65, eot: 68, grade: "C6", remarks: "Fair" },
        { name: "Biology", bot: 70, mot: 72, eot: 75, grade: "D2", remarks: "Good" },
        { name: "History", bot: 75, mot: 78, eot: 80, grade: "D1", remarks: "Very Good" },
        { name: "Geography", bot: 72, mot: 75, eot: 77, grade: "D1", remarks: "Very Good" },
        { name: "CRE", bot: 80, mot: 83, eot: 85, grade: "D1", remarks: "Excellent" }
      ],
      aggregate: 19,
      averageScore: 70.3,
      position: "18 / 48",
      classTeacherComment: "Faith shows good progress but needs to focus more on sciences. Her performance in arts subjects is commendable. Extra effort in Mathematics and Physics will significantly improve her overall performance.",
      headteacherComment: "A satisfactory performance. Faith should seek additional help in challenging subjects and maintain consistency in her studies.",
      nextTermDate: "April 29, 2024",
      feesBalance: 150000
    }
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [printMode, setPrintMode] = useState(false);

  const calculateAverage = (bot, mot, eot) => {
    return Math.round((bot + mot + eot) / 3);
  };

  const handlePrint = (student) => {
    setSelectedStudent(student);
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 100);
  };

  const handlePrintAll = () => {
    // For printing all students, we'll just show them all
    setSelectedStudent('all');
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 100);
  };

  const ReportCard = ({ student }) => (
    <div className="page">
      <div className="header">
        <div className="school-name">KAMPALA SECONDARY SCHOOL</div>
        <div className="school-motto">"Excellence Through Education"</div>
        <div className="school-info">
          P.O. Box 12345, Kampala, Uganda | Tel: +256 700 000 000 | Email: info@kampalasecondary.ac.ug
        </div>
      </div>

      <div className="report-title">
        STUDENT PROGRESS REPORT - {student.term.toUpperCase()}, {student.year}
      </div>

      <div className="student-info">
        <div>
          <div className="info-row">
            <span className="info-label">Student Name:</span>
            <span className="info-value">{student.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Class:</span>
            <span className="info-value">{student.class}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Registration No:</span>
            <span className="info-value">{student.regNo}</span>
          </div>
        </div>
        <div>
          <div className="info-row">
            <span className="info-label">Term:</span>
            <span className="info-value">{student.term}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Year:</span>
            <span className="info-value">{student.year}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Class Teacher:</span>
            <span className="info-value">{student.classTeacher}</span>
          </div>
        </div>
      </div>

      <table className="grades-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>BOT (%)</th>
            <th>MOT (%)</th>
            <th>EOT (%)</th>
            <th>Average (%)</th>
            <th>Grade</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {student.subjects.map((subject, index) => {
            const avg = calculateAverage(subject.bot, subject.mot, subject.eot);
            return (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.bot}</td>
                <td>{subject.mot}</td>
                <td>{subject.eot}</td>
                <td>{avg}</td>
                <td>{subject.grade}</td>
                <td>{subject.remarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="summary-section">
        <div className="section-title">Term Summary</div>
        <div className="summary-grid">
          <div className="summary-item">
            <div className="summary-label">Total Aggregate</div>
            <div className="summary-value">{student.aggregate}</div>
          </div>
          <div className="summary-item">
            <div className="summary-label">Average Score</div>
            <div className="summary-value">{student.averageScore}%</div>
          </div>
          <div className="summary-item">
            <div className="summary-label">Position</div>
            <div className="summary-value">{student.position}</div>
          </div>
        </div>
      </div>

      <div className="comments-section">
        <div className="section-title">Class Teacher's Comments</div>
        <div className="comment-box">
          {student.classTeacherComment}
        </div>
      </div>

      <div className="comments-section">
        <div className="section-title">Headteacher's Comments</div>
        <div className="comment-box">
          {student.headteacherComment}
        </div>
      </div>

      <div className="signatures">
        <div className="signature-block">
          <div className="signature-line">Class Teacher</div>
        </div>
        <div className="signature-block">
          <div className="signature-line">Headteacher</div>
        </div>
        <div className="signature-block">
          <div className="signature-line">Parent/Guardian</div>
        </div>
      </div>

      <div className="footer">
        <strong>Next Term Begins:</strong> {student.nextTermDate} | <strong>School Fees Balance:</strong> UGX {student.feesBalance.toLocaleString()}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Georgia', serif;
          background: #f5f5f5;
        }

        .dashboard {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 20px;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .dashboard-title {
          font-size: 32px;
          color: #2c5282;
          margin-bottom: 10px;
        }

        .dashboard-subtitle {
          color: #666;
          font-size: 16px;
        }

        .controls {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .print-all-btn {
          background: #2c5282;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
          font-weight: bold;
        }

        .print-all-btn:hover {
          background: #1e3a5f;
        }

        .students-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .student-card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }

        .student-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        .student-name {
          font-size: 18px;
          font-weight: bold;
          color: #2c5282;
          margin-bottom: 8px;
        }

        .student-details {
          font-size: 14px;
          color: #666;
          margin-bottom: 4px;
        }

        .student-stats {
          display: flex;
          justify-content: space-between;
          margin: 15px 0;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 5px;
        }

        .stat {
          text-align: center;
        }

        .stat-label {
          font-size: 11px;
          color: #666;
          margin-bottom: 3px;
        }

        .stat-value {
          font-size: 16px;
          font-weight: bold;
          color: #2c5282;
        }

        .print-btn {
          width: 100%;
          background: #2c5282;
          color: white;
          border: none;
          padding: 10px;
          font-size: 14px;
          cursor: pointer;
          border-radius: 5px;
          font-weight: bold;
          margin-top: 10px;
        }

        .print-btn:hover {
          background: #1e3a5f;
        }

        .page {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto 30px;
          background: white;
          padding: 20mm;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .header {
          text-align: center;
          border-bottom: 3px solid #2c5282;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }

        .school-name {
          font-size: 28px;
          font-weight: bold;
          color: #2c5282;
          margin-bottom: 5px;
        }

        .school-motto {
          font-style: italic;
          color: #666;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .school-info {
          font-size: 12px;
          color: #555;
        }

        .report-title {
          background: #2c5282;
          color: white;
          text-align: center;
          padding: 10px;
          margin: 20px 0;
          font-size: 18px;
          font-weight: bold;
        }

        .student-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .info-row {
          display: flex;
          border-bottom: 1px solid #ddd;
          padding: 8px 0;
        }

        .info-label {
          font-weight: bold;
          width: 120px;
          color: #2c5282;
        }

        .info-value {
          flex: 1;
        }

        .grades-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 13px;
        }

        .grades-table th {
          background: #2c5282;
          color: white;
          padding: 10px;
          text-align: left;
          font-weight: bold;
        }

        .grades-table td {
          padding: 10px;
          border: 1px solid #ddd;
        }

        .grades-table tr:nth-child(even) {
          background: #f8f9fa;
        }

        .summary-section {
          margin: 25px 0;
          padding: 15px;
          background: #f8f9fa;
          border-left: 4px solid #2c5282;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 10px;
        }

        .summary-item {
          text-align: center;
        }

        .summary-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }

        .summary-value {
          font-size: 20px;
          font-weight: bold;
          color: #2c5282;
        }

        .comments-section {
          margin: 25px 0;
        }

        .section-title {
          font-weight: bold;
          color: #2c5282;
          margin-bottom: 10px;
          font-size: 15px;
        }

        .comment-box {
          border: 1px solid #ddd;
          padding: 15px;
          min-height: 80px;
          background: #fafafa;
          font-size: 13px;
          line-height: 1.6;
        }

        .signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .signature-block {
          text-align: center;
        }

        .signature-line {
          border-top: 2px solid #333;
          margin-top: 50px;
          padding-top: 8px;
          font-size: 12px;
          font-weight: bold;
        }

        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 11px;
          color: #666;
          border-top: 2px solid #2c5282;
          padding-top: 15px;
        }

        @media print {
          body {
            background: white;
          }

          .dashboard,
          .controls,
          .students-grid {
            display: none !important;
          }

          .page {
            width: 210mm;
            height: 297mm;
            margin: 0;
            box-shadow: none;
            padding: 15mm;
            page-break-after: always;
          }

          .page:last-child {
            page-break-after: auto;
          }
        }
      `}</style>

      {!printMode && (
        <div className="dashboard">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Student Report Card System</h1>
            <p className="dashboard-subtitle">Select a student to print their report card</p>
          </div>

          <div className="controls">
            <button className="print-all-btn" onClick={handlePrintAll}>
              🖨️ Print All Reports ({students.length} students)
            </button>
          </div>

          <div className="students-grid">
            {students.map(student => (
              <div key={student.id} className="student-card">
                <div className="student-name">{student.name}</div>
                <div className="student-details">Class: {student.class}</div>
                <div className="student-details">Reg No: {student.regNo}</div>
                
                <div className="student-stats">
                  <div className="stat">
                    <div className="stat-label">Aggregate</div>
                    <div className="stat-value">{student.aggregate}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-label">Average</div>
                    <div className="stat-value">{student.averageScore}%</div>
                  </div>
                  <div className="stat">
                    <div className="stat-label">Position</div>
                    <div className="stat-value">{student.position}</div>
                  </div>
                </div>

                <button className="print-btn" onClick={() => handlePrint(student)}>
                  🖨️ Print Report Card
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {printMode && selectedStudent === 'all' && (
        students.map(student => <ReportCard key={student.id} student={student} />)
      )}

      {printMode && selectedStudent !== 'all' && selectedStudent && (
        <ReportCard student={selectedStudent} />
      )}
    </>
  );
};

export default ReportCardSystem;