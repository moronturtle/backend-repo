
# Backend Repo 
   this repo contain backend for study case using node js and firebase

## Start 
 - copy .env.example become .env and filled with firebase path credential (serviceAccountKey.json)
 - added file serviceAccountKey.json in folder config (the json credential from firebase)
 - npm run dev


 ## Using Firebase Emulator 
 - install npm install -g firebase-tools
 - firebase login
 - firebase init functions
 - npm run build && firebase emulators:start --only functions
 - copy value example for nextjs ( NEXT_PUBLIC_BACKEND_URL=http://localhost:5001/{project-id}/us-central1/app )
 - project id you can get in firebase console that project id in your firebase project
