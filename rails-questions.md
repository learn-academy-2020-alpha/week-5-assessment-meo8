# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

  ```sh
  rails new app_name -d postgresql -T
  ```




2. Explain each section of the following route:  get '/library/:id' => 'book#show'

  **get** - an HTTP verb used to retrieve/display content

  **library** - URL name; should be something that represents what you're trying to display

  **:id** - param defined within the controller by using a method

  **book** - controller generated with the command `rails generate controller book`

  **show** - name of method defined within the controller




3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

  1. Generage a migration
    - `rails generate migration add_foreign_to_table_name`
  2. A migration file is created 
    - Edit that file with the following:
    - `add_foreign_key table_name column_name`
  3. After editing the file, exit the console and run `rails db:migrate`




4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

  In the terminal, type the following command

  ```sh
    rails generate model Person shirt:string pants:string shoes:string
  ```




5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

  ```ruby
  class Person < ApplicationRecord
    validates shirt:string, pants:string, shoes:string, presence: true
  end
  ```
