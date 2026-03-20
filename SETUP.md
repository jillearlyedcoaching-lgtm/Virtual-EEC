# SETUP Guide for Virtual-EEC

## Getting Zoom Credentials

1. **Create a Zoom Account**  
   - Go to [Zoom's Register Page](https://zoom.us/signup) and create an account.
   - Verify your email address and sign in to your Zoom account.

2. **Create a Zoom App**  
   - Navigate to the [Zoom App Marketplace](https://marketplace.zoom.us/).
   - Click on `Develop` in the top-right corner and select `Build App`.
   - Choose between `JWT` or `OAuth` apps based on your requirement.
   - Fill in the necessary details for your app and click on `Create`.

3. **Retrieve Your API Credentials**  
   - For JWT Apps:
     - After creating your app, find your `API Key` and `API Secret` in the app's settings.
   - For OAuth Apps:
     - Set up the redirect URL and find your `Client ID` and `Client Secret` in the app's settings.

## Running the Server

1. **Clone the Repository**  
   - Open your terminal and run the following command:
     ```bash
     git clone https://github.com/<owner>/Virtual-EEC.git
     cd Virtual-EEC
     ```

2. **Install Dependencies**  
   - Make sure you have `Node.js` and `npm` installed.  
   - Run the following command to install the required packages:
     ```bash
     npm install
     ```

3. **Set Up Environment Variables**  
   - Create a `.env` file in the root of the project directory with the following contents:
     ```dotenv
     ZOOM_API_KEY=your_api_key
     ZOOM_API_SECRET=your_api_secret
     ```
   - Replace `your_api_key` and `your_api_secret` with the values obtained from your Zoom app.

4. **Run the Server**  
   - Use the following command to start the server:
     ```bash
     npm start
     ```
   - The server should now be running on `http://localhost:3000`. You can access your application in the browser.

## Troubleshooting
- If you encounter any issues, check the logs for error messages and ensure that all credentials are correctly set up in your `.env` file.