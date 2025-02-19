# Setting Up App Password for Gmail SMTP

## Steps to Generate and Use an App Password

1. **Go to Your Gmail Account Settings**

   - Open your Google Account settings.

2. **Turn on 2-Factor Authentication**

   - Navigate to "Security" and enable 2-Step Verification if it's not already enabled.

3. **Search for "App Passwords"**

   - In the security settings, look for "App Passwords."

4. **Sign In**

   - Enter your Google credentials to verify your identity.

5. **Create an App Password**

   - Choose "Mail" as the app and "Other" as the device.
   - Generate the password.

6. **Copy the Password into Your `.env` File**
   - Open or create a `.env` file in your project directory.
   - Add the following line:
     ```env
     EMAIL_PASS=your_generated_password
     ```
   - **Note:** If the password contains spaces, remove them.

## Setting Up and Running the Server

7. **Install Dependencies**

   ```sh
   npm i
   ```

8. **Run the Server**

   ```sh
   node index.js
   ```

9. **Access the Application**
   - Open your browser and go to:
     ```
     http://localhost:8080
     ```
   - Go to the route:
     ```
     http://localhost:8080/send-mail
     ```
