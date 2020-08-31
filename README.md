# Petsy App

## Link
**Link to live app: https://petsy-xi.vercel.app/adoptionpage

<p>&nbsp;</p>

## Table of Contents
1. Description
2. How It Works
3. How the Demo Works
4. Server/API Documentation
    1. POST Auth Endpoint
    2. GET Disaster Endpoints
    3. GET User Endpoints
    4. POST User Endpoints
    5. PATCH User Endpoints
    6. DELETE User Endpoints 
5. Technologies

<p>&nbsp;</p>

## Description
* Acclimate is an informational and utility **disaster management** app
* It aims to provide accurate, reliable, and useful information and tools to be able to handle impending disasters systematically and effectively

<p>&nbsp;</p>

## How It Works
1. A user may only adopt a cat or a dog that has been in the shelter the longest and at his turn.
2. To see a full list of pets for adoption, the user may navigate to the adoption list page.
3. To begin the adoption process, the user may navigate to the adoption page, where the pets in front of the adoption queue are shown.
4. For a chance to adopt, the user must enqueue his name onto the list.
5. When it is his turn, an adopt button will appear on the screen next to each pet.

<p>&nbsp;</p>

## How the Demo Works
As the user, I can:
1. To see a demo of this site, please click the 'Start Demo' demo on the adoption page.
2. There is a 15-second grace period to enqueue your name. Please do so!
3. As soon as the grace period ends, both pets on queue will be 'adopted' by the person on top of the Foster Parent List.
4. When it is your turn, you may choose to adopt any of the pets. See the list populate with names until it reaches a length of 5.

<p>&nbsp;</p>

## Server Documentation

### Pets Endpoint

#### GET pets data
Returns JSON data containing cats and dogs information

* **URL**

    `/pets`

* **Method**

    `GET`

* **URL Params**
    
    None

* **Data Params**
    * **Required:**

        None

* **Success Response**
    * **Code:** 200 <br />
    **Content:** `{cats: [], dogs: []}`

* **Error Response**
    * **Code:** 400 <br />
    **Content:** `{error: "No items in queue"}` <br />

<p>&nbsp;</p>

#### DELETE (DEQUEQUE) pet/s data
Removes pet and foster parent data from queue and returns an object containing adoption information

* **URL**

    `/pets`

* **Method**

    `DELETE`

* **URL Params**

    None

* **Data Params**
   * **Required:**

        `{type}`

* **Success Response**
    * **Code:** 200 <br />
    **Content:** `{adopted}`

    ``` js
    const adopted = {
            adopted: {
                cats,
                dogs,
            }
            fosterParent,
    };
    ```

* **Error Response**
    * **Code:** 400

<p>&nbsp;</p>

### People Endpoint

#### GET pets data
Returns JSON data containing foster parents information

* **URL**

    `/people`

* **Method**

    `GET`

* **URL Params**
    
    None

* **Data Params**
    * **Required:**

        None

* **Success Response**
    * **Code:** 200 <br />
    **Content:** `{fosterParents: []}`

* **Error Response**
    * **Code:** 400 <br />
    **Content:** `{error: "No items in queue"}` <br />

<p>&nbsp;</p>

#### POST (ENQUEQUE) foster parent data
Adds new foster parent to back of queue

* **URL**

    `/people`

* **Method**

    `POST`

* **URL Params**

    None

* **Data Params**
   * **Required:**

        `{newFosterParent}`

* **Success Response**
    * **Code:** 200 <br />
    **Content:** `{message: 'Successfully added'}`

* **Error Response**
    * **Code:** 400

<p>&nbsp;</p>

## Technology Used
1. HTML, CSS, JavaScript
2. React
3. Node.js
4. Express
5. Queue Data Structure
6. Vercel
7. Heroku