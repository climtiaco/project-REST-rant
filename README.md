# Project REST-Rant

## REST-Rant is an app where users can review restaurants.

- [] Method: Get | Path: / | Purpose: Home Page
- [] Method: Get | Path: /places | Purpose: Places index page
- [] Method: POST | Path: /places | Purpose: Create New Place
- [] Method: Get | Path: /places/new | Purpose: From page for creating a new place
- [] Method: Get | Path: /places/:id | Purpose: Details about a particular place
- [] Method: PUT | Path: /places/:id | Purpose: Update a particular place
- [] Method: Get | Path: /places/:id/edit | Purpose: Form page for editing an existing place
- [] Method: Delete | Path: /places/:id | Purpose: Delete a particular place
- [] Method: POST | Path: /places/:id/rant | Purpose: Create a rant (comment) about a particular place
- [] Method: Delete | Path: /places/:id/rant/:rantId | Purpose: Delete a rant (comment) about a particular place
- [] Method: Get | Path: * | Purpose: 404 page (matches any route not defined above)

| Method |      Path                | Purpose 
| ------ | ------------------------ | -------
| Get    |          /               | Home Page
| Get    |  /places                 | Places index page
| Post   |  /places                 | Create new place
| Get    | /places/new              | Form page for creating a new place
| Get    | /places/:id              | Details about a particular palce
| Put    | /places/:id              | Update a particular place
| Get    | /places/:id/edit         | Form page for editing an existing places
| Delete | /places/:id              | Delete a particular place
| Post   | /places/:id/rant         | Create a rant (comment) about a particular place
| Delete | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place
| Get    |         *                | 404 page (matches any route not defined above)




# **Bonus:**

1. Creating a list is easy!
    - This is the first nested list item that shows up w an open circle
        - Second nested list item for more organization in the future.

> Then this is "Quoting Text" on readme.md files. I'm assuming that you would quote code using this method. I'd probably quote my notes for the project on this one. "// 2.15.23 This is still breaking my app right now so not sure quite yet whats happening. Tried going into my places.js to add more backticks to see if that was the issue but it was not
// Figured it out again, I forgot to put the "period" in "./controllers/places" so now I understand this part better because its tracking where the route is going."

![This is a picture of me!](https://live.staticflickr.com/65535/52422519928_ee53b3a014_n.jpg)
