exports.verifyMail = (link, firstName) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>email verification</title>
      <style>

        body {
          background: whitesmoke;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0
        }

        main {
          height: 90%;
          width: 60%;
          background: white;
          border-radius: 10px;
          box-shadow: 0px, 0px, 10px, rgba(0, 0, 0, 1);
          overflow: hidden;
        }

        .conOne {
          width: 100%;
          height: 20%;
          background: #EF3600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conOne div {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conOne h1 {
          color: #fff;
          font-family: arial;
          font-weight: 500;
          font-size: 30px;
        }

        .conTwo {
          width: 100%;
          height: 37%;
          /* background: lightpink; */
          display: flex;
          flex-direction: column;
          gap: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .conTwo p {
          font-family: serif;
          font-size: 25px;
        }

        .conThree {
          width: 100%;
          height: 23%;
          /* background: lightcoral; */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        a {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .conThree button {
          height: 50%;
          width: 25%;
          background: #EF3600;
          color: #fff;
          font-family: arial;
          font-weight: 700;
          font-size: 19px;
          border: none;
          border-radius: 5px;
        }

        .conFour {
          width: 100%;
          height: 20%;
          background: #EF3600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conFour p {
          font-family: serif;
          font-size: 20px;
          color: #fff;
        }
      </style>
    </head>

    <body>
      <main>
        <div class="conOne">
          <div>
            <!-- <img src="./img.jpeg" alt="picture"> -->
            <h1>Email Verification</h1>
          </div>
        </div>
        <div class="conTwo">
          <p>Hello ${firstName},</p>
          <p>Thank you for signing up on our platform, we are excited to have you on board.</p>
          <p>Please click the button below to verify your account.</p>
        </div>
        <div class="conThree">
          <a href="${link}"> <button>Verify My Account</button> </a>
        </div>
        <div class="conFour">
          <p>&copy; ${new Date().getFullYear()} . All rights reserved.</p>
        </div>
      </main>
    </body>

    </html>
  `
}


exports.forgotPassword = (link, firstName) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>email verification</title>
      <style>

        body {
          background: whitesmoke;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0
        }

        main {
          height: 90%;
          width: 60%;
          background: white;
          border-radius: 10px;
          box-shadow: 0px, 0px, 10px, rgba(0, 0, 0, 1);
          overflow: hidden;
        }

        .conOne {
          width: 100%;
          height: 20%;
          background: #EF3600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conOne div {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conOne h1 {
          color: #fff;
          font-family: arial;
          font-weight: 500;
          font-size: 30px;
        }

        .conTwo {
          width: 100%;
          height: 37%;
          /* background: lightpink; */
          display: flex;
          flex-direction: column;
          gap: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .conTwo p {
          font-family: serif;
          font-size: 25px;
        }

        .conThree {
          width: 100%;
          height: 23%;
          /* background: lightcoral; */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        a {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .conThree button {
          height: 50%;
          width: 25%;
          background: #EF3600;
          color: #fff;
          font-family: arial;
          font-weight: 700;
          font-size: 19px;
          border: none;
          border-radius: 5px;
        }

        .conFour {
          width: 100%;
          height: 20%;
          background: #EF3600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conFour p {
          font-family: serif;
          font-size: 20px;
          color: #fff;
        }
      </style>
    </head>

    <body>
      <main>
        <div class="conOne">
          <div>
            <!-- <img src="./img.jpeg" alt="picture"> -->
            <h1>Password Reset</h1>
          </div>
        </div>
        <div class="conTwo">
          <p>Hello ${firstName},</p>
          <p>You requestes a forget password link.</p>
          <p>Please click the button below to reset your password.</p>
        </div>
        <div class="conThree">
          <a href="${link}"> <button>Reser Password</button> </a>
        </div>
        <p>Ignore if you are not the one<p/>
        <div class="conFour">
          <p>&copy; ${new Date().getFullYear()} . All rights reserved.</p>
        </div>
      </main>
    </body>

    </html>
  `
}