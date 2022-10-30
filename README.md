<p align="center">
<img src="https://user-images.githubusercontent.com/77505989/198878121-f5116248-8b4c-4baa-8302-c9cd262baf7f.png" alt="BANNER" />
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/77505989/198878368-1302bf31-3600-4348-a585-076930aefae8.png" alt="BANNER" />
</p>

## Why Medicwise?
- We have been forced to stay at home due to the pandemic, and people are doubtful about going out to consult doctors nowadays.
- People are opting for **online personal health care**.
- As a result, we developed a personal care web app that **allows patients to consult doctors from the comfort of their own homes**.
- There are over a million deaf & dumb people. There are over 75% of people are uneducated. 
- So we've devised Medicwise as a solution to the problem, so that it is **accessible to everyone, regardless of their disabilities, to consult a doctor online**.

<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/198884367-89ab757c-668f-45b5-b112-b1ac2e300dc5.jpg" alt="feature" height="500" />
</p>

## Features
- There is a separate <a href="https://github.com/PRERNA-CHOUDHARY/medicwise-admin">Admin Portal</a> dedicated for the doctors. **[Visit the GitHub Repository for detailed information and implementation of the portal]**
- Each portion of the Medicwise will have its own *Room ID*, given to patients by the respective doctors they want to consult. Each doctor will have their own *medic code* so that patients can appoint them.
- There is a **chat room** where you can communicate with your doctor.
- There is a **video room** where you may communicate with your doctor via video call.
- Lastly, there is a **gesture room** where mute and uneducated people can communicate with doctors using sign language.
- If the doctor doesn't understand sign language, we have **machine learning models implemented using tensorflow that can decode sign language into text**.
- The patient authentication is facilitated with <a href="https://auth0.com">Auth0</a> Authentication. **[with custom Email/Password or Google]**
- The seamless payment gateway implemented using <a href="https://stripe.com/en-in">Stripe</a>.
- **Technologies :**

|               |               |              |
| ------------- |:-------------:| ------------:|
| HTML          | SCSS          | Javascript   |
| ReactJS       | NodeJS        | ExpressJS    |
| TailwindCSS   | Bootstrap     | MaterialUI   |
| Firebase      | Auth0         | Stripe       |
| SocketIO      | Netlify       | TensorflowJS |
|               |               |              |

## Future Prospects
- Text-to-Gesture Encoding from Doctor to Client.
- Implementing a chat box in the video section.
- Implementing chat bot.
- Training our ML model to encode and decode many gestures.

## Run Locally
- Fork the repository.
- Clone repository to your local system.
- Install require node_modules using `npm install`.
- Open server-end in command prompt and execute `npm start` command.
- Open client-end in command prompt and execute `npm start` command.

<hr />

<h3 align="center">
People pay the doctor for his trouble; for his kindness, they still remain in his debt.
</h3>
