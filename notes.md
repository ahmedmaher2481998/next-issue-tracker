<!-- - make a nav bar it contains logo , dashboard , issues page -->
<!-- - nav h is 14 nad px-5 space-x-5 -->
<!-- - react icon use aiFillBug as logo -->
<!-- - make hover effects on the links "commit nav bar progress " -->

<!-- - 9 create new page issues ,make the active page link active , import pkg classnames -->
<!-- - commit changes style active link in the nav bar -->
<!-- - 10 use mysql or postgres DB , choose ur orm of choice -->
<!-- - 11 setting up orm (watch a good tutorial about typeorm to use it comfortably )
- see a tutorial about postgres too to work more easily with it -->

<!-- - 12 make issue model to make issues table id, title,description text type,enum type status open,in progress,closed ,created at , updated at
- create migration , apply it
- 13 create issues route and use zod to validate data -->

<!-- - 14 add radix ui to our project , import style sheet , wrap everything with theme from radix
- we created a new routePage containing s form consisting of a textfield for the issue title and a text area for the description
- 16 make sure the styles is using the poppies font as intended -->

<!-- - 17 use marDown Editor instead od text area ,react simple md editor -->

<!-- - 18 use react hook form to handle validation and form sublimation hook it up to log all data in the console -->

<!-- - we thee uses axios to make a http request this is end when u can create an issue from the front end and redirect to the '/' route -->

<!-- - 19 handling errors from zod rend validation errors to the front and display them in a good way and axios try-catch display it in a red call-out -->

<!-- - 20 get type out of the zod schema and use it in both front and backend validation -->

<!-- - 21 extracting the error message to a septate component -->

<!-- - 22 add spinner while submitting the form and disable the button -->

<!-- - 23 organize you code move the inline function of submitting the form and move the http call to a separate file for separation of concerns -->

<!-- - 24 show all the issues in the issues page in a redix-ui table ,on mobile make the status and created column disappear also show the status under the title make variant of the table surface ,use fetch instead of the axios -->

<!-- - 25 make a badge component for status with mapper type label and color green,violet,red and make it a separate component ,use record type -->

- 26 add loading component for the issues page a skeleton,use delay package ,extract the issue action into a separate component and **make sure the page loading looks good**

<!-- - 27 show issue details in a different page and separate the loading pages form the issue details and the new issue page and handle non existing ids's and string id -->

<!-- - 28 style the issue details page header for title ,flex for status and date of creation ,md rendered paragraph for description -->

<!-- - 29 preview md content , solve the typography problem -->

<!-- - 30 make styled link component of radix link and next link for the issues titles -->

------ Break ------
------ Code ------

- 31 make loading for the issue details page use box com apply delay make header skeleton looks good ,organize imports ,make e a new issue loading skeleton make sure to load the css file

- 32 fix the error, disable ssr while lazy loading a component

- 33 cleaning our code ,organize imports ,combine imports , skeleton

- 34 make a grid to add the edit btn make 2 boxes use break points for mobile layout ,add react redix icons make it href to issues/[id]/edit

- 35 single responsibility principle in all the pages an components starting with the issue details page

- 36 add new components folder in the issues section and make a components form prefix it with \_ to get it out of the routing system , make the issue edit page add the issue fetched a default value for the issueForm Component

- 37 use Put form completely replacing an entity and patch for changing some of it's properties, make api for editing the issue validate it with issue schema

- 38 test the update issue in post man and in the app it self , watch for the cache problem

- 39 (reWatch when you het here ) build and start the app preserve the cache problem , next js route segment config,opt out og server/client cache

- 40 improving the loading experience ,dynamically import the whole issue form ,for dynamic import from the whole form and while refreshing also

  ------ Break ------
  ------ Code ------

- 41

- 42

- 43

- 44

- 45

- 46

- 47

- 48

- 49

- 50

  ------ Break ------
  ------ Code ------

- 51

- 52

- 53

- 54

- 55

- 56

- 57

- 58

- 59

- 60

  ------ Break ------
  ------ Code ------

- 61

- 62

- 63

- 64

- 65

- 66

- 67

- 68

- 69

- 70

  ------ Done This holiday ------
  ------- Next goal finish the app -----

> after finishing this app

> we will focus on ui ux and making visually appealing interfaces

> will devote a month for that and during doing that we will work on ** Typeorm , Nest js , Postgres , State management ** **_ Do this by working on projects not watching tutorials ,ur allowed for 1-2 days for a tutorials on a single subject of the above _**

> basic front end skills ['css animation','js weird parts','core js knowledge','dom manipulation','vue & nuxt intro'],
