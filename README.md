# Temperature-Converter-Microservice-Option-2
Microservice: Temperature Converter Option 2

This is a microservice that uses HTTP requests and responses as a communication pipeline.

The server is found in server.js and runs locally on Port4000. The server pulls three variables from the temp.txt file: current temperature unit, current temperature, and the desired temperature unit. The server takes the values and calculates the desired temperature unit and posts the value to the localhost page. The client.js can sends a request for the value and then puts it in a new text file (convertedtemp). A UML diagram detailing the process is below:

![image](https://user-images.githubusercontent.com/86200364/198917524-9bf38be9-e500-4d51-8091-1b0c80920538.png)

To run the program, download all files in zip folder, extract them and open in VS Code. 

Open a terminal in the main folder:
(1) run 'npm init -y'

(2) run 'npm install'

You should now have the package-lock.json and package.json files. 

(3) run 'node server.js'

The server is now running on localhost:4000.

Make sure the temp.txt file contains the values you need, an example is in the existing txt file and can be seen below:
Example: {"curr_unit":"K","curr_temp":"115","new_unit":"C"}

Navigate to localhost:4000 in your web browser, it will now run the code to grab the data from the text file and compute the converted value. The webpage will display the converted value.

Open new terminal and run 'node client.js'

A 'convertedtemp.txt' has been created and contains converted value.
