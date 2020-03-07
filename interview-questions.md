# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
    **MODEL** - takes care of the data; creating, editing, updating and deleting.
    **VIEW** - takes care of what the user sees; can use html and embedded ruby.
    **CONTROLLER** - not exactly sure, I think it takes care of calculations and logistical side of things using methods as well as routes for the different possible views.

  Researched answer:
    **MODEL** - Handles data and business logic. A Rails Model is a Ruby class that can add database records, find particular data you're looking for, update that data, or remove data; CRUD actions.

    **VIEW** - Handles GUI objects and presentation, shares data with controllers through mutually accessible variables, and are written using embedded Ruby in tags mingled with HTML. To avoid cluttering the templates with boilerplate code, a number of helper classes provide common behavior for forms, dates, and strings. It's also easy to add new helpers to your application as it evolves. For each controller there is an associated directory in the app/views directory which holds the template files that make up the views associated with that controller. These files are used to display the view that results from each controller action.

    **CONTROLLER** - Handles the user interface and application. After the router has determined which controller to use for a request, the controller is responsible for making sense of the request, and producing the appropriate output.

    For most conventional RESTful applications, the controller will receive the request (this is invisible to the developer), fetch or save data from a model, and use a view to create HTML output. This is the most common way for a controller to work.

    A controller can be thought of as a middleman between models and views. It makes the model data available to the view so it can display that data to the user, and it saves or updates user data to the model.


2. What is a gem?

  Your answer:
    - I think it's similar to packages, where it's a set of code or dependencies that are needed depending on the application's environment.

  Researched answer:
    - The RubyGems software allows you to easily download, install, and use ruby software packages on your system. The software package is called a “gem” which contains a packaged Ruby application or library.

    Gems can be used to extend or modify functionality in Ruby applications. Commonly they’re used to distribute reusable functionality that is shared with other Rubyists for use in their applications and libraries. Some gems provide command line utilities to help automate tasks and speed up your work. A gem comprises of code, a gemspec, and documentation.



3. Why is it important to have validations in your application?

  Your answer:
    - To reduce errors and keep the application going as expected.

  Researched answer:
    - Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails provides built-in helpers for common needs, and allows you to create your own validation methods as well.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer:
    - One person can have mulitple computers (desktop, laptop, phone, tablet). A person has_many computers, while one computer belongs_to one person.

  Researched answer:
    - A belongs_to association sets up a one-to-one connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model. For example, if your application includes computers and users, and each user can be assigned to exactly one computer, you'd declare the book model this way.

    - A has_many association indicates a one-to-many connection with another model. You'll often find this association on the "other side" of a belongs_to association. This association indicates that each instance of the model has zero or more instances of another model.


5. What is object-relational mapping?

  Your answer:
    - It translate one language to another. Ruby's ORM is ActiveRecords and it translates Ruby to SQL.

  Researched answer:
    - Object Relational Mapping, commonly referred to as its abbreviation ORM, is a technique that connects the rich objects of an application to tables in a relational database management system. Using ORM, the properties and relationships of the objects in an application can be easily stored and retrieved from a database without writing SQL statements directly and with less overall database access code.

    Active Record gives us several mechanisms, the most important being the ability to:

      - Represent models and their data.
      - Represent associations between these models.
      - Represent inheritance hierarchies through related models.
      - Validate models before they get persisted to the database.
      - Perform database operations in an object-oriented fashion.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
- json
- API
- Endpoints
- Strong params
