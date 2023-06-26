# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Database Modification for Custom Agent IDs

Acceptance Criteria:
- The Agents table in the database is updated to include a new column for custom IDs.
- Facilities can save and update custom IDs for Agents through an API.
- The custom ID is associated with the corresponding Agent in the database.

Time/Effort Estimate: 2 Story Points

Implementation Details:
1. Analyze the Agents table schema and determine the appropriate modification to add a column for custom IDs.
2. Create a database migration script to add the custom ID column to the Agents table.
3. Update the API endpoint for Facilities to accept custom IDs and handle the storage/update of these IDs in the database.
4. Implement validation and error handling for the custom ID input.
5. Write database migration tests to ensure the migration script runs successfully.
6. Write API tests to verify the functionality of saving and updating custom IDs for Agents.

Definition of Done:
- The Agents table in the database includes a new column for custom IDs.
- Facilities can save and update custom IDs for Agents through the API.
- Custom IDs are associated with the corresponding Agents in the database.
- Database migration script runs successfully.
- API tests pass successfully.
- The code is reviewed and approved by a team member.

Ticket 2: Report Generation with Custom Agent IDs

Acceptance Criteria:
- Reports generated for Facilities include custom IDs for Agents if available.
- If a custom ID is not available, the internal database ID is used instead.

Time/Effort Estimate: 3 Story Points

Implementation Details:
1. Update the report generation logic to include the custom ID in the report data for each Agent.
2. Modify the PDF generation function to include the custom ID in the generated report.
3. Implement fallback logic to use the internal database ID if a custom ID is not available for an Agent.
4. Write unit tests to ensure the custom ID is correctly included in the report data.
5. Write tests to verify the PDF generation with custom IDs.
6. Update the acceptance test suite to include testing for report generation with custom IDs.

Definition of Done:
- Reports generated for Facilities include the custom ID for each Agent if available.
- If a custom ID is not available, the internal database ID is used.
- Unit tests pass successfully.
- The code is reviewed and approved by a team member.
- Tests for PDF generation and acceptance tests for report generation pass successfully.

Ticket 3: Documentation Update

Acceptance Criteria:
- The documentation is updated to reflect the new feature of saving and using custom Agent IDs in reports.

Time/Effort Estimate: 1 Story Point

Implementation Details:
1. Review the existing documentation related to generating reports for Facilities.
2. Update the documentation to explain the new functionality of saving and using custom Agent IDs.
3. Include instructions on how Facilities can save and update custom IDs for Agents.
4. Make sure the documentation is clear, concise, and easy to understand.

Definition of Done:
- The documentation is updated to include information about saving and using custom Agent IDs in reports.
- The updated documentation is reviewed and approved by a team member.

Note: The estimates provided are based on the assumption that the necessary infrastructure, database schemas, APIs, and report generation logic are already in place. The actual effort required may vary based on the specific implementation details and the complexity of the existing system.