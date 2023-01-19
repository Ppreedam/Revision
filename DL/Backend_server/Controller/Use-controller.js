const puppeteer = require('puppeteer');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

// save data of the user in database

const addUser = async (req, res) => {
    const user = req.body;
    const dob =user.dobn
    const dl=user.dln
   console.log(user)
   console.log(dob,dl)

    

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://sarathi.parivahan.gov.in/sarathiservice/rsServices/sarathi/QRService/DLDetails/dlqrresult?dlnum=${dl}&dob=${dob}`);

        // Scrape data from the page using Puppeteer
        const data = await page.evaluate(() => {
            const dlno = document.getElementsByTagName('td')[5].innerText;
                const dob = document.getElementsByTagName('td')[7].innerText;
                const name = document.getElementsByTagName('td')[9].innerText;
                const s_w_d = document.getElementsByTagName('td')[11].innerText;
                const blood_group = document.getElementsByTagName('td')[13].innerText;
                const address = document.getElementsByTagName('td')[17].innerText;
                const cov = document.getElementsByTagName('td')[21].innerText;
                const issue_date = document.getElementsByTagName('td')[23].innerText;
                const gender = document.getElementsByTagName('td')[25].innerText;
                const orgon_donar = document.getElementsByTagName('td')[27].innerText;
                const badge_no = document.getElementsByTagName('td')[29].innerText;
                const badge_no_issue_date = document.getElementsByTagName('td')[31].innerText;
                const mob = document.getElementsByTagName('td')[33].innerText;
                const image=document.getElementsByTagName("img")[0].src;
            // ...
            return obj={
                dlno:dlno,
                dob:dob,
                name:name,
                s_w_d:s_w_d,
                blood_group,
                address,
                cov,
                issue_date,
                gender,
                orgon_donar,
                badge_no,
                badge_no_issue_date,
                mob,
                image
            }
        });

        // Connect to the MongoDB database
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);

        
        // Insert the scraped data into the "scrapedData" collection
        const result = await db.collection('scrapedData').insertOne(data);
        console.log(`Inserted ${result.insertedCount} documents into the collection`);

        // Close the connection to the MongoDB database
        await client.close();
        await browser.close();

        // res.status(201).json({ message: 'Scraped and saved data successfully' });
        // res.status(201).json(data)
        res.status(201).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Please Enter Correct DOB $ DL' });
    }

}
module.exports = addUser;
//assign the body in user model
            // const newUser = new postUser(data);
            // try {
            //     await newUser.save();
            //     response.status(201).json(newUser);
            // } catch (error) {
            //     response.status(501).json({ message: error.message });
            // }
