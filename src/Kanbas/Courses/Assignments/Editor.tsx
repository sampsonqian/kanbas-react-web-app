export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label>
        <br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={50} rows={10}>
          The assignment is available online Submit a link to the landing page of
          your web application running on Netlify. The landing page should include 
          the follwing: Your full name and section Links to each of the lab assignment
        </textarea><br /><br />

        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td valign="top">
              <input id="wd-points" value={100} />
            </td><br /><br />
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECT">PROJECT</option>
                <option value="EXAM">EXAM</option>
              </select><br /><br />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label><br></br>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
                <option value="LETTER">Letter</option>
              </select><br /><br />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
                <option value="IN PERSON">In Person</option>
              </select><br /><br />
            </td>
          </tr>


          <tr>
            <td>
              <br></br>
            </td>
            <td align="left" valign="top">
              <label>Online Entry Options</label><br />
              <input type="checkbox" name="check-entry-options" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recording</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
            </td>

          </tr>
    
          <tr>
            <td align="right" valign="top">
              <label>Assign</label>
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label><br></br>
              <input id="wd-assign-to" value="Everyone" /><br /><br />
            </td>
          </tr>

          <tr>
            <td>
              <br></br>
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-due-date">Due</label>
              <br></br>
              <input type="date"
                  id="wd-due-date"
                  value="2025-05-13"/><br /><br />
            </td>
          </tr>

          <tr>
            <td>
              <br></br>
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-available-from"> Available from </label> 
              <br></br>
              <input type="date"
                  id="wd-available-from "
                  value="2024-05-26"/><br /><br />
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-available-untill"> Until </label>
              <br></br>
              <input type="date"
                  id="wd-available-until "
                  value="2024-05-20"/><br /><br />
            </td>

          </tr>
          <tfoot>
            <tr>
              <td colSpan={3} style={{borderTop: "1px solid black", paddingTop:"5px"}} align="right" valign="top">
                <button>Cancel</button><button>Save</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
  );}
  
  