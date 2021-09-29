# **Open Scheduler** is an app for scheduling appointments. 

* **User** can:
  * Get Leads
	* Set Appointments
	* Join a lead with an appointment
	* Upload Documents under 5mb
	* Download Documents 
	* Write a basic profile
	* Filter appointments, leads, and documents

* User can:
  * Sign In/Sign Up
	* Reset Password
	* Delete Account (Destroy all related appointments, leads, profile information, and documents)


	## **How it works**

	Open Scheduler is built on a Ruby on Rails/Postgresql backend with a React frontend. It is a single page application.

	Storage for documents is handled with Active Storage and Amazon S3. 

	Authentication is handled with the devise and devise-jwt gems.


	The front end stores the current users jwt token in localStorage. On every get, post, put, delete request the jwt token is validated on the backend.


## **Sample**

The user creates some leads.

<img src='https://i.imgur.com/KRZ3IaS.png' >
<img src='https://i.imgur.com/vCJETqP.png' >


The user creates some appointments, filter by name, and delete appointments


<img src='https://i.imgur.com/90XKpEW.png' >
<img src='https://i.imgur.com/bxxNXFf.png' >
<img src='https://i.imgur.com/mS0AGKF.png' >
<img src='https://i.imgur.com/f7pii6O.png'


User can show an appointment and update an appointment

<img src='https://i.imgur.com/br74X54.png' >
<img src='https://i.imgur.com/MBRNgz0.png' >


Appointments don't need a contact from the lead page. However, if you do choose a lead from
the lead page you can get the information by hovering over contact on the show page.

<img src='https://i.imgur.com/zqFvtxn.png' >


User has a profile. The Delete Account button will delete their account.

<img src='https://i.imgur.com/CZK0cRl.png' >

User can reset their password

<img src='https://i.imgur.com/zFwJOMk.png' >
<img src='https://i.imgur.com/raHN2Vr.png' >
<img src='https://i.imgur.com/SyMKZli.png' >


User can upload documents under 5mb to keep important things organized on multiple computers.

<img src='https://i.imgur.com/cBDgjtF.png' >






