#Intro to Express

| Objectives |
| :--- |
| Initialize an Express app. |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Packages, MVC | NPM, Express | Challenges |

### Motivation (Why?)

0. A Client-side architecture with a Node JSON API server is the cutting edge of web technology.
1. DRY code
2. Segregation of Duties/Separation of Concerns

### Terminology

1. **NodeJS** is javascript server.
2. **Package Manager** manages installing libraries with their dependencies
3. **NPM** - Node Package Manager
4. **MVC** - Model View Controller convention for web server separation of concerns.
5. **express** - An "unopinionated" MVC framework for node.

### Analogy (What?)

A web server is like a restaurant. The views are the menu. The controllers are the waiter. The model is the cook. The database is the refrigerator.

1. The user looks at the menu and makes a selection
2. The controller tells the cook
3. The cook gets what she needs from the refrigerator, makes the dish and sends it back with the waiter to the user.

# Demo & Learning Activities

#Challenges

### Docs & Resources

1. [Installing Node & NPM](https://docs.npmjs.com/getting-started/installing-node)
1. [Installing Express](http://expressjs.com/starter/installing.html)

### Basic Challenges

1. Install Node & npm & nodemon
2. Install and start an express app in a new directory (see Docs & Resources above)
3. Show "Hello World!" on the root url of an express app. (hint: use `res.send(string)`)
4. Show a JSON array of user objects at `/users` (hint: use `res.json(users)` where `users` is an array of objects.

### Stretch Challenges

1. Show a JSON array of user objects at `/books` (hint: use `res.json(books)` where `books` is an array of objects.
2. Show a JSON array of user objects at `/users` where each user has some books (hint: make an array of users with an attribute called `books` that is an array of books.)
3. Use the [express generator](http://expressjs.com/starter/generator.html) to start an express app. . . *drop the mic
