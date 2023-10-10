# EmoReleaseProject

Introduction: 
-
Brief: 
The EmoRelease App is created to help people release their emotions and transform their emotions and mindsets from a negative to a positive state. The ultimate goal is to help manage and improve people's emotional well-being by transforming negative emotions and mindsets into positive ones as well as to empower individuals to become the best versions of themselves.

More Details: 
The EmoRelease App is designed with the primary aim of assisting individuals in releasing and transforming their emotions and mindsets from negative to positive states. By utilizing this app, users can effectively manage and enhance their emotional well-being, paving the way for a more positive and fulfilling life. EmoRelease empowers individuals to overcome negativity and embrace positivity, enabling them to become the best versions of themselves. Through this transformative journey, users can experience improved mental and emotional states, ultimately leading to a more balanced and prosperous life.

![image](https://github.com/Meixian1/EmoReleaseProject/assets/124223514/c74a566b-dba6-45b9-aa4b-d26e1c8448ce)
![image](https://github.com/Meixian1/EmoReleaseProject/assets/124223514/8d6197de-e91b-4b55-ac72-ce23a8870c2d)
![image](https://github.com/Meixian1/EmoReleaseProject/assets/124223514/b0a49857-6e23-4652-921b-ac421392eff1)


Usage Instructions: 
-
-Steps: 
-Step 1. Enter Your Journal for Sentiment Analysis. Click Analyze Text to Display Result in Bar Chart. Continue if Step 2 is activated. 
-Step 2. Reframe or Paraphrase the Negative, Destructive Sentences into Positive, Constructive sentences. Click Submit to Activate Step 3.
-Step 3. Enter Text to Generate An Image that Represents Your Current Emotion State. Click to View Image. 
        
Technologies Used: A list of all technologies, libraries, APIs, etc. 
-
- Import React Library
- Install and Import Axios
- Install recharts and import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
- APIs from RapidAPI:
   - Sentiment Analysis: https://rapidapi.com/twinword/api/sentiment-analysis/
   - Image Process-Text to Image from OpenAI: https://rapidapi.com/rphrp1985/api/open-ai21/
 - Visual Studio Code, React Developer Tools Extension (Microsoft Edge explorer), GitHub, and Render for developing and deploying the Web App. 
     
Getting Started: Info on how to clone and start the app and link to the deployed app on GitHub Pages/Render.
- 
- Connect the local Visual Studio Code to GitHub first
        - git init, git add ., git commit -m "message",
          git remote add origin 'URL' (in my case: git remote add origin https://github.com/Meixian1/EmoReleaseProject.git )
          git push origin (your branch) (in my case: git push origin master)
        - If applicable for project deployment:
              -Go to your GitHub repository where your website or web app code is hosted.
              -Click on the "Settings" tab of your repository.
              -Scroll down to the "GitHub Pages" section.
              -In the "Source" section, select the branch you want to deploy (e.g., "main" or "master").
              -Click the "Save" or "Save Changes" button. GitHub Pages will then automatically build and deploy your website or web app from the selected branch. You 
               can access your deployed site using the URL provided in the "GitHub Pages" section.
- Project Cloning:
              - git clone https://github.com/Meixian1/EmoReleaseProject.git

- Render for hosting static sites of this web app.
        - Access the Render Dashboard.
        - Click on "New" and select "Static Site" from the menu.
        - Connect your repository and configure your build details, including the Git branch to deploy.
        - Click "Create Static Site," and Render will initiate the initial deployment of your site. 

Unsolved Problems: List any unsolved issues.
-
- Some CSS issues with the Bar Chart, labeling, position of text and chart.
- JS code for visual count indication on Bar Chart. 
- Limited API reqeusts avaiable based on free pricing.
- Some images generated from the API are not that great and low quality.
- Prevent data lost on page refresh and use local storage storing the data on the browser. 

Future Enhancements: Identify future features and enhancements planned for the project.
-
- Unlimited API requests.
- Improve the interactive features of the App for better usability.
- Improve the accuracy of the API algorithm for the API data fetching and speed-up or shorten the response time.
- Improve accuracy of the JS detecting and filtering sentences correctly.
- Improve CSS design for the overall App.
- Implement social media icons for sharing the App and the generated images. 
- Improve code readability and organization
- Simplify the codes.
- Include a congratulation message on successfully completing the EmoRelease Session.
- Implement export function to save the reports. 

Have a link to your hosted working app
-
- https://emorelease-app.onrender.com/ 
