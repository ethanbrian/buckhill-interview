# buckhill-interview

1.Open a terminal or command prompt on your machine.

2.Navigate to the directory where you want to clone the project.

3.Run the following command:
git clone <repository-url>

4.Replace <repository-url> with the URL of the repository that you want to clone.
for example in this case https://github.com/ethanbrian/buckhill-interview.git

5Once the repository is cloned, navigate into the project directory using the following command:
cd <project-directory>
Replace <project-directory> with the name of the project directory. For example:
new-cypress

6.Among the files cloned is the docker file with some instructions to create the image which contain a list of instructions

Assuming the user does not have an environment set up and is a window user this is what the user will do
Open the power shell command prompt ensure you run as administrator
Before doing this ensure that your system has enabled the virtualization mode One can confirm this under the task manager
Also install docker desktop is installed this is where we will configure some settings to ensure the system runs smoothly 
These commands are for Enabling Docker support in WSL 2 distros https://docs.docker.com/desktop/windows/wsl/
Also ensure that wsl is installed in your system https://learn.microsoft.com/en-us/windows/wsl/install
Enter the following commands to install ubuntu using wsl commands
wsl --install -d ubuntu here the user has specified the version
This will open the ubuntu prompt where you will be asked to to write your username and password
wsl.exe -l -v shows the ubuntu versions running
ensure that version two is set
Once this is done after installing the wsl and setting version two you might have a challenge of the ubuntu system  in recognizing docker commands 
just check the docker version by entering this command docker --version command in the ubuntu prompt
enter docker command version it shoud display a list of commands if this is not visible just go to the docker desktop o click on the settings tab navigate to the the resources tab ubuntu or the distribution version you would have installed should appear there then toggle on it and click apply and close then if you re-enter the commands it should work
Now open the repository you just cloned ,Then open a new terminal on the right hand side you can choose the profile of the terminal you would like to use in this case you will choose wsl
Remember there is already a dockerfile there is no need to create one ,Now what the user has to do is to build be entering the following command sudo docker build -t <the name of your image>:1.0.0 this is the version incase you would like to build multiple versions of that image for exakple: sudo docker build -t my-cypress-image:1.0.0 .
Incase you are prompted with an error for the front end dockerfile.v0 failed to authorize is because when loading the cypress browser image it recognizes the token that we have set in the session storage in the commands js file
This is how the user will resolve it by opening the docker desktop click on the settings tab navigate to the docker engine change the buildkit value to true
Then rerun the build file sudo docker build -t my-cypress-image:1.0.0 .
An image will be created successfully
One can view the images displayed by entering the command docker images
Then once this is created successfully the commands can be run in isolation in the headless mode spec
i.e Since there is a sequence if the user starts with the admin's module
Run the following commands since this is a linux distribution enter the following command:
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/admin/create-account.js headless
To be able to generate token to run the other commands that test the other routes
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/admin/login.js headless
This will generate the token which will be stored in the .env json or in the session storage
Run the other post a brand command
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/admin/brand.js headless
This will enable a uuid to be generated and written in the brand uuid json file in the fixtures folder 
Run the get brand command with token and the uuid as query parameters
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/admin/get-brand.js headless

Those are the commands under the admin's module now we shift to the user's module
Run the following command to create a user
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/user/create-account.js headless
After a user is created now the user will logging in to generate the token to be able to test the other routes
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/user/login.js headless
A token will be generated and stored in the cypress.env.json and set in session storage that will be used in the other routes
the first route will be category creation with the token as the query parameter and the title from a json file in the fixtures folder 
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/user/category.js headless
A category uuid will be generated and written in the specified json file in the fixtures folder
the second route will be order-status creation with the token as the query parameter and the title from a json file in the fixtures folder 
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/user/order_status.js headless
A category uuid will be generated and written in the specified json file in the fixtures folder
the third route will be payment creation with the token as the query parameter and the type and details from a json file in the fixtures folder 
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/user/payment.js headless
A category uuid will be generated and written in the specified json file in the fixtures folder
the fourth route will be getting a product with the token as the query parameter and the uuid from a json file in the fixtures folder  and the user would have to create the product in swagger api to be able to fetch from this route
docker run -it -v "$pwd":/cypress -t my-cypress-image:1.0.0 --spec cypress/e2e/user/product.js headless
Product details will be generated and written in the specified json file in the fixtures folder





