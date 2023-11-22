# Project Title and Description: Digitization of Service Orders

## Project Objective

The main goal of this project is to digitize the repair and maintenance processes of Nøsted & AS company's forestry winches. ...

## Use Scenarios

### Receiving Customer Service Requests

Customers can submit service requests related to forestry winches by calling with the relevant information...

### Management of Repair and Maintenance Processes

Repair or maintenance requests are digitally displayed by mechanical teams. Mechanical teams accept requests...

### Reporting and Improvement Suggestions

The system generates reports based on completed repairs, maintenance, and customer feedback. Warranty Service conducts analysis...

## User-Friendly Interface and Mobile Access

A user-friendly interface for both office administrators and field mechanic teams. Easily accessible from PCs and smartphones. Responsive design.

## Security and Authorization

Appropriate authorization levels for each user type are created by the admin. Strong encryption methods for the security of sensitive data. Tokens, etc.

## Developable and Expandable Structure

The project can be developed and expanded to meet future needs. Being open source allows customization according to the company's specific requirements.

# Technological Structure

## Programming Language and Version
1. Programming language: C#
   - Version: .NET 6.0

## Used Technologies and Libraries

- **ASP.NET Core Framework:**
  - Framework used for .NET Core-based web applications.
- **Entity Framework:**
  - ORM (Object-Relational Mapping) tool used for managing database operations in an object-oriented manner.
- **AspNetCoreHero.ToastNotification:**
  - Library used for notifications.
- **Mailjet.Api:**
  - API library used for integration with the Mailjet service.
- **Microsoft.AspNetCore.Identity.EntityFrameworkCore:**
  - Integration for user management with ASP.NET Core Identity.
- **Microsoft.AspNetCore.Identity.UI:**
  - Integration for user interface elements with ASP.NET Core Identity.
- **Microsoft.Data.SqlClient:**
  - SQL Client library used for communicating with SQL Server databases.
- **Microsoft.EntityFrameworkCore.Design:**
  - Reference for Entity Framework design tools.
- **Microsoft.EntityFrameworkCore.SqlServer:**
  - Integration of Entity Framework with SQL Server.
- **Microsoft.EntityFrameworkCore.Tools:**
  - Tools and design-time components used by Entity Framework.
- **Microsoft.VisualStudio.Azure.Containers.Tools.Targets:**
  - Visual Studio tools for Azure Container Service.
- **Microsoft.VisualStudio.Web.CodeGeneration.Design:**
  - Design-time tools for generating web application code.
- **Newtonsoft.Json:**
  - Popular library used for JSON operations.
- **Swashbuckle.AspNetCore:**
  - Library used for creating Swagger documentation and documenting APIs.

## Database and Connection Methods

- Database: SQL Server
- Connection Method: via Entity Framework

## Project Configuration File Examples

- .NET 6.0 targeting, user secrets, Docker configurations, etc.

## Project Dependencies

- List of external dependencies, including packages and versions.

## Project Directory Structure

- **ServiceApp:**
  - Files related to the service application.
- **Views\Rapporter:**
  - Files used for report views.

This technological structure illustrates the technologies and libraries used in the project, along with the database and connection methods.

# Architectural Structure

## MVC Architectural Pattern

This code block follows the MVC (Model-View-Controller) architectural pattern. This pattern separates the application into three main components, providing a modular and easily maintainable structure.

### Model

Includes data models such as the AppDbContext class and Identity-related classes (ApplicationUser, IdentityRole, etc.). Database operations and user authorization processes are handled in this layer.

### View

Includes elements related to the user interface, such as Razor pages in the Views folder and static files (CSS, JavaScript, etc.) in the wwwroot folder.

### Controller

Controller classes like AccountController receive HTTP requests, initiate processes, and redirect to the appropriate view to display results.

## Main Components and Interactions of the Application

### Identity Service

The Identity service added with the AddIdentity method handles user management and authorization processes, including operations like user registration, login, and role management.

### Database Connection

Entity Framework Core, added with the AddDbContext method on AppDbContext, manages database operations. Access, query, and update operations on the database are performed through this layer.

### Swagger and Notyf Service

Swagger is used to generate and view API documentation (AddSwaggerGen, UseSwagger, UseSwaggerUI). The Notyf service is used for managing notifications (AddNotyf).

### Email Sending Service

The MailJetEmailSender class is used to perform email sending operations. This class implements the IEmailSender interface.

### ServiceSkjemaService

The ServiceSkjemaService class represents a custom service, likely performing tasks such as business logic, data processing, or interaction with another service. This service is added with the AddScoped method, creating a scope for each HTTP request.

Interactions between these main components occur through HTTP requests and are handled by controllers. Controllers execute business logic, call services if necessary, and redirect results to views. This modular structure allows each component to have clear responsibilities.

# Project Folder Structure

The directory structure below represents the organization of a C#/.NET application project. Each subdirectory and file has a specific responsibility.

- **OurWinch-Nøsted-App (GitHub Repository Root)**
  - **Root**
    - **CSS:**
      - Contains the general style files for the application, for example, `Layout.css`.
    - **Image:**
      - Visual files and images are stored here.
    - **Controllers**
      - **AccountControllers:**
        - Controllers related to user accounts and authentication processes.
      - **CheckListControllers:**
        - Controllers managing checklist-related operations.
      - **DashboardControllers:**
        - Controllers related to the overview and dashboard operations.

    - **Data**
      - **AppDbContext:**
        - Contains the DbContext class related to database connection and model definitions.

    - **Migrations**
      - Migration files tracking database changes are stored here.

    - **Models**
      - **AccountModel:**
        - Models related to user accounts and authentication.
      - **ChecklistModel:**
        - Models related to checklist operations.
      - **DashboardModel:**
        - Models related to overview and dashboard operations.
      - **ErrorViewModel:**
        - Models used for error display.

    - **Services**
      - Contains service classes used within the application.

    - **Views**
      - Each view represents a section related to the user interface.

    - **Shared**
      - **Layout.cshtml:**
        - Commonly used view components are stored in this directory.
      - **appsettings.json:**
        - The application's configuration file.

    - **DockerFile:**
      - Dockerfile used to create the Docker container for the application.

    - **Program.cs:**
      - The entry point file for the application.

This directory structure logically organizes different parts of the application, making it easier to maintain, extend, and understand. Each subdirectory and file has a specific responsibility, ensuring clean and organized project management.

# Dependencies and Installation:

We have listed the dependencies and packages used in our project to specify the essential libraries and tools needed to run the project.

## Used Dependencies

- Microsoft.AspNetCore.Identity.EntityFrame
- Microsoft.AspNetCore.Identity.UI
- Microsoft.Data.SqlClient
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Tools
- Microsoft.EntityFrameworkCore
- Microsoft.VisualStudio.Azure.Cont
- Microsoft.VisualStudio.Web.CodeGeneration

## Installation Instructions

To start the project and install dependencies, follow the step-by-step instructions below.

### 1. Clone the Project:

```bash
git clone https://github.com/username/project-name.git
cd project-name
