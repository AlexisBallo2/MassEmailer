// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// import * as csv from 'csv';
// import * as smtplib from 'smtplib';
// import { MIMEText } from 'email/mime/text';
// import { EmailMessage } from 'email/message';
import { createTransport,transport, defaults, sendMail  } from "nodemailer"

// myEmail: myEmail,
// emails: emails,
// appCode: appCode,
// subject, subject,
// body: body
export default function handler(req, res) {
   sendEmail(req.body.myEmail, req.body.appCode, req.body.subject, req.body.body, req.body.emails)
  res.status(200).json({ name: "sent!!" })
}

async function sendEmail(myEmail, appCode, subject, body, emails) {
    var transporter = createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
        user: myEmail,
        pass: appCode
    }
    })
    var emailList = emails.split(",") 
    for(var i = 0; i< emailList.length; i++) {
        console.log(body)
        await transporter.sendMail({
            from: myEmail,
            to: emailList[i],
            subject: subject,
            text: body,
        });
    }
    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "alexispballo@gmail.com",
    //     Password: "aufpcprgfnomelfb",
    //     To: 'alexispballo@gmail.com',
    //     From: "alexispballo@gmail.com",
    //     Subject: "Sending Email using javascript",
    //     Body: "Well that was easy!!",
    // }
    // )
    /*
    server = new smtplib.SMTP("smtp.gmail.com:587");
    server.starttls();
    server.login(myEmail, appCode);
    msg = new EmailMessage();
    msg.set_content(body);
    msg["Subject"] = subject;
    msg["From"] = myEmail;
    msg["To"] = "alexispballo@gmail.com";
    console.log("message:", msg)
    server.send_message(msg);
    */
    /*
    emails = emails.split(",")
  

    for (var to, _pj_c = 0, _pj_a = emails, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        to = _pj_a[_pj_c];
        msg = new EmailMessage();
        msg.set_content(body);
        msg["Subject"] = subject;
        msg["From"] = myEmail;
        msg["To"] = to;
        console.log("message:", msg)
        server.send_message(msg);
    }

server.quit();
*/
}



