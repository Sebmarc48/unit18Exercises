/* ## **Part One: Solidify Terminology**

In your own terms, define the following terms:

- What is HTTP? : 
HTTP(HyperText Transfer Protocol) Is the set of rules that specifies how communication between a browser and web server should be.

- What is a URL?: 
URL(Universal Resources Locator) are an address to the requested resource. They take the resource request and(if theres any) queries and use 
it to find the requested resource. 

- What is DNS?  : 
DNS(Domain name system) is basically like a record of IP'S. It translates the hostname into an IP address in order to find a matching IP address.

- What is a query string? :
A query string is additional information that is passed along the resource request.

- What are two HTTP verbs and how are they different?:


- What is an HTTP request? 
An HTTP request is the browser's way to request/Communicate with the web server. It tells the web server what you're looking for.


- What is an HTTP response?
It's the Web server response to a HTTP request. It returns the requested resources & what is goign to be displayed on the website.

- What is an HTTP header? Give a couple examples of request and response headers you have seen.
A header specifies the content of a request/Response. The text/html,date,cookies,etc.

Example Request: When I enter springboard.com I'm requesting that url. The request header includes the url, the method, the remote address, etc.
Example response header: Following the previous example it also returns a response header which includes the content-type, date, etc.


- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser? 
The hostname gets converted into an IP address. Then it looks for it in your computer, then your router and finally the DNS system. If the IP is found a connection is established
and it sends the http request to the web server, it then gets processed and returns the response.
*/
//*
//*
//*
//*
//*
//*
/*## **Part Two: Practice Tools**

1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
ON THE TERMINAL:
curl https://icanhazdadjoke.com/search?term=pirate

2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*

dig icanhazdadjoke.com


3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser. */
/*ON THE TERMINAL:
cd Desktop/Unit-18/18.2HowtheWebWorks
python3 -m http.server

ON THE BOWSER

localhost:8000 or http://[::]:8000/
*/

//*
//*
//*
//*
//*
//*
//*
//*
//*
/* ## **Part Three: Explore Dev Tools**

Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted. DONE

Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers. 

Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in
 Chrome how you can view the request and response headers, as well as the form data.*/
//*
//*
//*
//*
//*
//*
/*## **Part Four: Explore the URL API**

At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

[Read about the URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)

Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class. */
