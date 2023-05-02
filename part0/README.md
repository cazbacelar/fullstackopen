# Part 0: Fundamentals of Web apps

> In this part, we familiarize ourselves with the practicalities of taking the course. After that we have an overview of the basics of web development, and also talk about the advances in web application development during the last few decades.

## Exercises

- [0.4: New note diagram](./0.4_new_note_diagram.md)
- [0.5: Single page app diagram](./0.5_spa_diagram.md)
- [0.6: New note single page app diagram](./0.6_new_note_spa_diagram.md)

## Notes

### HTTP protocol and requests

The communication between a web server and a web browser is done using the HTTP protocol. The server runs an application that contains logic to respond to different types of requests that come in over the HTTP protocol. The server does this by matching the request's HTTP verb (such as GET, POST, PUT, or DELETE) and the Uniform Resource Identifier (URI) specified in the request to a specific route within the application.

The combination of the HTTP verb and URI is called a route, and the process of matching the request to a specific route is called routing. Each route can have one or many handler functions, which are executed whenever a request to that route is matched. These handler functions contain the logic to generate a response to the request.

### DevTools Network tab

The "Network" tab in the browser shows the communication between the two, including the headers in the request and response. Headers provide additional information about the request or response, such as the size of the response, the time it took to receive the response, and the type of content that is being transmitted.

The "Response" tab shows the actual data that is being transmitted from the server to the browser. The "body" section of the response determines the structure of the page that will be displayed on the screen. The browser requests separate documents for each file or image it needs to display, such as CSS stylesheets or JavaScript files.

### Server responses

The server can respond to requests in different ways, depending on the type of data being requested. For example, it might serve up an HTML file to display a webpage, send data as JSON to an API client, or simply send back an HTTP status code to indicate whether the request was successful or not. The content to be rendered can either be a static text file saved on the server, or it can be generated dynamically by the server using application code and data from a database.

### APIs

A Web API is defined by the types of requests that it can handle, which is determined by the routes that it defines, and the types of responses that the clients can expect to receive after hitting those routes.

A RESTful API uses HTTP requests to interact with resources, has unique URLs to represent each resource, uses standardised data formats, and employs four main HTTP methods (GET, POST, PUT, DELETE) to interact with resources.
