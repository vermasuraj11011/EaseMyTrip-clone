# EaseMyTrip-clone

This is a clone of EaseMyTrip.com

It is a trip booking website and we have tried to clone its **Flight Search** fuctionality.


We have use **HTML**, **CSS**, **JavaScript**, **Express**, **MongoDB**, and **Mongoose** in this project.


Our project is not resposive but fit to all desktop and laptop screen.


## Index.html

**Index.html** is our entry point.
We have tried to make our home page exact similar to the original one.

![index](https://user-images.githubusercontent.com/80845888/138563116-d0210686-f147-4e44-b481-1e235716b2bf.png)

- On the home page user can register and login at the same time if comming on the page first time.
for that he or she has to enter his or her login id.

<p align="center">
  <img src="https://user-images.githubusercontent.com/80845888/138562275-3f9c4cf8-09b2-4cda-8ca6-18a0ae849273.png" width="600" height="400"/>
</p>

- After entering the valid email id in the above page on clicking **continue** **password** popUp will appear.

<p align="center">
  <img src="https://user-images.githubusercontent.com/80845888/138562865-69a51bd2-a9c1-40a3-a5f4-043e4b17412a.png" width="600" height="400"/>
</p>

- On the **Index** page their is a search bar to search flight.

![search](https://user-images.githubusercontent.com/80845888/138563351-e6ce4a6c-6b36-47a6-9511-7a6cc61c9d84.png)

- In this search bar you can enter all the following detail, we have used **Debouncing** to minimize the API calls .


## flightSearch.htm

- On this page the result of the flight search will appear.

![FlightSearch](https://user-images.githubusercontent.com/80845888/138563784-a5dabd58-8463-41c5-9ca0-ffb81198f460.png)

- For the above result we have created a small data base and built our own API routes.

- After getting the result user can click on the **BOOK NOW** button for booking  the particular flight.

## bookflight.html

- After cliking on the **BOOK NOW** user will be redirected to the **bookflight.html** page where user can see the amount detail and can add gift vouchers to get the discount.

![bookNow](https://user-images.githubusercontent.com/80845888/138564173-8311da01-4f9c-4292-8ad2-829eebc48daf.png)

- After validating the flight and amount detail user has to click on the **Continue Booking** button.

## payment.html

- After clicking on the **Continue Booking** user will send to  the **payment.html** page to pay the amount.

![payment](https://user-images.githubusercontent.com/80845888/138564388-ca933777-ab5c-41ea-8472-b4a6c7d24f12.png)

- In this page user can choose any of the payment method and enter his valid account number and cvv to instigate payment gateway.

- We have created the setTimeOut funtion which will alert a popUp of sucessfull payment after 5 sec.


So, that was the proper flow of our project.

## About dataBase

- We have used **mongoDb** for our project
- Before running the project please import the **flightData.json** file in your mongoDb.
- And replace line number 8 
   **return mongoose.connect('mongodb://127.0.0.1:27017/easeMyTrip')** in the **server.js** 
   with your local mongodb port address and the name of the dataBase were you have imported the flightData.json file.
- Please keep range of the data in mind before searching it other wise sometime you may not get any result.
> * Date from **2021-10-03** to **2021-10-08**
> * City from **delhi** to **indore**
- Their are some more data but please look in the json file before searching as the date and city combination should have to be exact match to get the result
- Object formate of the date saved in the **flightData.json**.
>{

>    "id": 4,

>    "airline_name": "Vistara",
    
>    "aircraft_number": 3820,
    
>    "takeoff_time": "10:33",
    
>    "landing_time": "12:29",
    
>    "journey_date": "2021-10-03",
    
>    "source": "Delhi",
   
>    "destination": "Surat",
    
>    "price": 4555,
    
>    "aircraft_code": "NA"
    
>}


## Thanks


